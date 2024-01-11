'use strict';

/**
 * complaint service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::complaint.complaint');
