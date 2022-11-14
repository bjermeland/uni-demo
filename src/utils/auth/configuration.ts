import { AuthProviderProps } from 'react-oidc-context'

const configuration: AuthProviderProps = {
  authority: 'https://test-login.softrig.com',
  client_id: '95f368f7-98ae-4292-a88b-4b41cdb24079',
  redirect_uri: 'http://localhost:5173/authentication/callback',
  post_logout_redirect_uri: 'http://localhost:5173',
  silent_redirect_uri: 'http://localhost:5173/oidc-silent-renew',
  automaticSilentRenew: true,
  response_type: 'code',
  scope: 'AppFramework Sales.Admin openid profile',
  filterProtocolClaims: true, // prevents protocol level claims such as nbf, iss, at_hash, and nonce from being extracted from the identity token as profile data
  loadUserInfo: true,
}

export default configuration
