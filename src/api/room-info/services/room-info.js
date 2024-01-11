'use strict';

/**
 * room-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-info.room-info');
