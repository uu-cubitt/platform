/// <reference path="../vertx-js/throwable.d.ts" />
/// <reference path="../vertx-js/vertx.d.ts" />
/// <reference path="./routing_context.d.ts" />

declare module "vertx-web-js/csrf_handler" {
  export = CSRFHandler;
}

/**
 * This handler adds a CSRF token to requests which mutate state. In order change the state a (XSRF-TOKEN) cookie is set
 * with a unique token, that is expected to be sent back in a (X-XSRF-TOKEN) header.
 *
 * The behavior is to check the request body header and cookie for validity.
 *
 * This Handler requires session support, thus should be added somewhere below Session and Body handlers.
 */
interface CSRFHandler
{

  /**
   * Something has happened, so handle it.
   */
  handle(event: RoutingContext): void;

  /**
   * Set the cookie name. By default XSRF-TOKEN is used as it is the expected name by AngularJS however other frameworks
   * might use other names.
   */
  setCookieName(name: string): CSRFHandler;

  /**
   * Set the header name. By default X-XSRF-TOKEN is used as it is the expected name by AngularJS however other
   * frameworks might use other names.
   */
  setHeaderName(name: string): CSRFHandler;

  /**
   * Should the handler give warning messages if this handler is used in other than https protocols?
   */
  setNagHttps(nag: boolean): CSRFHandler;

  /**
   * Set the timeout for tokens generated by the handler, by default it uses the default from the session handler.
   */
  setTimeout(timeout: number): CSRFHandler;
}

declare var CSRFHandler: {

  /**
   * Instantiate a new CSRFHandlerImpl with a secret
   * <p>
   * <pre>
   * CSRFHandler.create("s3cr37")
   * </pre>
   */
  create(secret: string): CSRFHandler;
}
