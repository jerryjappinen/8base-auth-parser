export const baseUrl = 'http://localhost:3000'
export const afterLoginPath = baseUrl + '/app'
export const afterLogoutPath = baseUrl



// 8base
export const eightBaseWorkspaceId = 'abcdefghijklmn'
export const eightBaseApiUrl = 'https://api.8base.com/' + eightBaseWorkspaceId

export const eightBaseAuthProfileId = 'adsasdasdasdasd' // 8base auth
export const eightBaseAuthClientId = 'sdadsasasdsadasdsdasdasd'
export const eightBaseAuthDomain = 'https://sadasdasdsaddssadsadsd.auth.us-east-1.amazoncognito.com'

// https://github.com/8base/sdk/blob/master/packages/core/web-cognito-auth-client/src/WebAuthCognitoClient.ts
export const eightBaseAuthLoginUrl = eightBaseAuthDomain + '/oauth2/authorize?client_id=' + eightBaseAuthClientId + '&response_type=token&state=STATE&redirect_uri=' + afterLoginPath
export const eightBaseAuthLogoutUrl = eightBaseAuthDomain + '/oauth2/logout?client_id=' + eightBaseAuthClientId + '&response_type=token&redirect_uri=' + afterLogoutPath
