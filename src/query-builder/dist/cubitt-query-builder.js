"use strict";
var cubitt_graph_cqrs_1 = require("cubitt-graph-cqrs");
var eb = vertx.eventBus();
var projectId = vertx.getOrCreateContext().config().id;
var JDBCClient = require("vertx-jdbc-js/jdbc_client");
var postgresUser = process.env.POSTGRES_USER || "postgres";
var postgresPass = process.env.POSTGRES_PASSWORD || "";
var postgresDb = process.env.POSTGRES_DB || postgresUser;
var postgresHost = process.env.POSTGRES_HOST || "localhost";
var postgresPort = process.env.POSTGRES_PORT || 5432;
var client = JDBCClient.createShared(vertx, {
    "url": "jdbc:postgresql://" + postgresHost + ":" + postgresPort + "/" + postgresDb + "?user=" + postgresUser + "&password=" + postgresPass,
    "driver_class": "org.postgresql.Driver",
    "max_pool_size": 30
});
client.getConnection(function (conn, conn_err) {
    if (conn_err !== null) {
        console.log("Could not connect to database, shutting service down");
        vertx.close();
        return;
    }
    var connection = conn;
    eb.consumer("projects.query." + projectId, function (message) {
        var graph = new cubitt_graph_cqrs_1.CQRSGraph();
        var version;
        if (message.body() === "latest") {
            version = "latest";
        }
        else {
            version = parseInt(message.body());
        }
        if (version === "latest") {
            connection.query("SELECT event FROM \"" + projectId + "_events\"", function (res, res_err) {
                if (res_err) {
                    console.log("Could not load events from eventstore " + res_err);
                    vertx.close();
                    return;
                }
                var results = res.results;
                Array.prototype.forEach.call(results, function (row) {
                    var event = row[0];
                    graph.ApplyEvent(JSON.parse(event));
                });
                message.reply(JSON.stringify(graph.GetGraph().serialize()));
            });
        }
        else {
            connection.query("SELECT event FROM \"" + projectId + "_events\" WHERE id <= " + version, function (res, res_err) {
                if (res_err) {
                    console.log("Could not load events from eventstore " + res_err);
                    vertx.close();
                    return;
                }
                var results = res.results;
                Array.prototype.forEach.call(results, function (row) {
                    var event = row[0];
                    graph.ApplyEvent(JSON.parse(event));
                });
                message.reply(JSON.stringify(graph.GetGraph().serialize()));
            });
        }
    });
});
//# sourceMappingURL=cubitt-query-builder.js.map