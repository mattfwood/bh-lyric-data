const simpleOauthModule = require('simple-oauth2');

const oauth2 = simpleOauthModule.create({
  client: {
    id: 'AFvDKX9P5tbj99vsZ9JcPbAtroR-9O2h3ScWaYp9dY5Oit0054DEIEfqaNwnZQRh',
    secret: '8gbdyTjmdSZQvG1G_G6luLFV9C4mWQ0gclfr-mVpcHk1rtsDtJSodqsXWWcuJ_5wRkcUq3KG6ePY3fPG2MThHA',
  },
  auth: {
    tokenHost: 'https://api.genius.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize',
  },
});