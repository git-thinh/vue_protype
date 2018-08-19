//var About = { template: '<h1>About</div>' };
//var Dashboard = { template: '<h1>Dashboard</h1>' };

//var Auth = {
//    loggedIn: false,
//    login: function () { this.loggedIn = true },
//    logout: function () { this.loggedIn = false }
//};

//var Login = {
//    template: '<input type="submit" value="Login" v-on:click="login">',
//    methods: {
//        login: function () {
//            Auth.login();
//            router.push(this.$route.query.redirect);
//        }
//    }
//};

//var routes = [
//  { path: '/about', component: About },
//  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
//  { path: '/login', component: Login }
//];

//var router = new VueRouter({
//    routes
//});

//router.beforeEach((to, from, next) => {
//    if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
//        next({ path: '/login', query: { redirect: to.fullPath } });
//    } else {
//        next();
//    }
//});

//var app = new Vue({
//    el: '#app',
//    router
//});



// 2. Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 3. Create the router
const router = new VueRouter({
    mode: 'history', 
    routes: [
      { path: '/', component: Home },
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
    router,
    template: `
    <div id="app">
      <h1>Basic</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/foo">/foo</router-link></li>
        <li><router-link to="/bar">/bar</router-link></li>
        <router-link tag="li" to="/bar": event="['mousedown', 'touchstart']">
          <a>/bar</a>
        </router-link>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
