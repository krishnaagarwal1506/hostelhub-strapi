'use strict';

/**
 * gym service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gym.gym');
