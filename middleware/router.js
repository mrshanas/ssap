export default ({ app, route, from, store, redirect }) => {
  app.router.beforeEach((to, from, next) => {
    const exipire = window.localStorage.getItem('date');
    const isAuthenticated = store.getters.isAuthenticated;
    //console.log("IS AUTHENTICATED: " + isAuthenticated)
    if (!isAuthenticated && to.path !== "/signin" && to.path !== "/about") {
      store.dispatch("_logoutsession");
    } else {
      next();
    }
  });
  app.router.afterEach((to, from) => {
  });
}