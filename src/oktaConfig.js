const oktaConfig = {
    clientId: 'qSgU4GoFht2C3iK3DTQftfuVrKgGM7zk', // Replace with your Okta Client ID
    issuer: 'https://dev-3nyssrntbrepd4ig.uk.auth0.com ', // Replace with your Okta issuer URL
    redirectUri: window.location.origin + '/callback', // Callback URL after successful login
    scopes: ['openid', 'profile', 'email'],
  };
  
  export default oktaConfig;
  