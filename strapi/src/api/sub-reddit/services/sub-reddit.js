'use strict';

/**
 * sub-reddit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sub-reddit.sub-reddit');
