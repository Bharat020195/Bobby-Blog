module.exports = ({ env }) => ({
    
    email: {
        config: {
          provider: 'strapi-provider-email-brevo',
          providerOptions: {
            apiKey: 'xsmtpsib-ee6a667858c5726eedac9b807ab153012199615ea9700f28e2bb93112c184de2-Et8hGgc2XDfwFdbU',
          },
          settings: {
            defaultSenderEmail: 'bharat.biosafe@gmail.com',
            defaultSenderName: 'Pichekkista Bobby',
            defaultReplyTo: 'tillu0201@gmail.com'
          },
        },
      }
  
  });