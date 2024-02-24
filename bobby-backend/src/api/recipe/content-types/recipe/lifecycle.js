'use strict';

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async sendNotification(ctx) {
    const { id } = ctx.params;
    
    const recipe = await strapi.services.recipe.findOne({ id });


    const subscribers = await strapi.services.Subscriber.find();

    const subject = 'New Recipe Notification';
    const text = `A new recipe "${recipe.title}" has been added. Check it out!`;

    
    for (const Subscriber of subscribers) {
      await strapi.plugins['email'].services.email.send({
        to: Subscriber.email,
        from: 'bharat.biosafe@gmail.com',
        subject: "New recipe added",
        text:"Hey, Hope you are doing good :) New recipe is added to our page please have a look.`"
      });
    }


    return { success: true };
  },
};
