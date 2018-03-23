import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'

export const UserIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
 redirectPath: '/login',
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
 authenticatedSelector: state => state.user.data !== null,
 // A nice display name for this check
 wrapperDisplayName: 'UserIsAuthenticated'
});

export const UserIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
  redirectPath: '/',
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
   // If selector is true, wrapper will not redirect
   // So if there is no user data, then we show the page
  authenticatedSelector: state => state.user.data === null,
  // A nice display name for this check
  wrapperDisplayName: 'UserIsNotAuthenticated'
})
