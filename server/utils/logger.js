'use strict';

/**
 * Creates a logger scoped to the multitenancy plugin.
 *
 * When `config.debug` is false (default), only `warn` and `error` calls
 * are forwarded to Strapi's logger. Set `debug: true` in the plugin config
 * to enable `info` and `debug` level output as well.
 *
 * @param {object} strapi - Global Strapi instance
 * @returns {{ info: Function, debug: Function, warn: Function, error: Function }}
 */
function createLogger(strapi) {
  const isDebug = strapi.config.get('plugin::multitenancy.debug', false);

  return {
    info:  (msg) => { if (isDebug) strapi.log.info(msg); },
    debug: (msg) => { if (isDebug) strapi.log.debug(msg); },
    warn:  (msg) => strapi.log.warn(msg),   // always shown
    error: (msg) => strapi.log.error(msg),  // always shown
  };
}

module.exports = { createLogger };
