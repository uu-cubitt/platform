FROM vertx/vertx3

# Set the name of the verticle to deploy
ENV VERTICLE_NAME cubitt-project-manager.js

# Set the location of the verticles
ENV VERTICLE_HOME /usr/verticles
ENV CLASSPATH /usr/verticles/lib/postgresql-9.4.1208.jar

EXPOSE 8080

# Copy your verticle to the container
COPY src $VERTICLE_HOME/src/
COPY lib $VERTICLE_HOME/lib/
# Launch the verticle
WORKDIR $VERTICLE_HOME
ENTRYPOINT ["sh", "-c"]
CMD ["vertx run src/project-manager/dist/cubitt-project-manager.js -cp $VERTICLE_HOME/lib/* -cluster"]
