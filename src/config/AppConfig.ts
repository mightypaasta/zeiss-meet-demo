import AppUtils from '../core/utils/AppUtils';

const baseUrl = `//${window.location.hostname}`;

let httpProtocol = AppUtils.getHttpSchema(baseUrl);
console.log(httpProtocol, ' http protocol link');

// Add timeout in minutes 1,2...15 etc

const env = {
  userInfoEndpoint: `${httpProtocol}:${baseUrl}/convivo/api/oauth/userinfo`,
  loginEndpoint: "http://localhost:5010/api/account/login",
};

export { env };
