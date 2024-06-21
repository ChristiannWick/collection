<template>
    <div >
        <p>
            <b>NOTE:</b>
            this docu is for laravel 8 and vuejs 2 compatible packages
        </p>
        <p>
            A Single Page Application (SPA) is a web app or site that interacts with the web browser by dynamically rewriting the current webpage with new data from the server instead of the default method of loading entirely new pages.
        </p>
        <div>
            <img src="../../../public/images/spa_concept.jpg" alt="spa concept" width="80%" height="500">
        </div>
        <h1>Laravel SPA Setup</h1>
        <hr>
        <div style="padding:15px;">
            <h3>Create new project</h3>
            <div>composer create-project laravel/laravel --prefer-dist laravel8_template</div>
            <div>cd laravel8_template</div>
            <div>php artisan serve</div>
            <h3>Open the Project in Visual Studio Code</h3>
            <div>Open package.json file</div>
            <img src="../../../public/images/packagejson.png" alt="package json" width="80%" height="500">
            <div>add this object called "dependencies" next to "devDependencies"
            <br/>NOTE : this version of packages is only compatible in Vue.js 2 and Vuetify 2.</div>
            <pre >
                {
                    "private": true,
                    "scripts": {
                        "dev": "npm run development",
                        "development": "mix",
                        "watch": "mix watch",
                        "watch-poll": "mix watch -- --watch-options-poll=1000",
                        "hot": "mix watch --hot",
                        "prod": "npm run production",
                        "production": "mix --production"
                    },
                    "devDependencies": {
                        "axios": "^0.19",
                        "cross-env": "^7.0",
                        "laravel-mix": "^6.0.6",
                        "lodash": "^4.17.19",
                        "postcss-custom-properties": "^12.1.8",
                        "resolve-url-loader": "^3.1.0"
                    },
                    "dependencies": {
                        "@mdi/font": "^6.5.95",
                        "vue": "^2.6.14",
                        "vue-loader": "^15.9.8",
                        "vue-router": "^3.5.3",
                        "vue-template-compiler": "^2.6.14",
                        "vuetify": "^2.6.2",
                        "vuetify-loader": "^1.7.3",
                        "vuex": "^3.6.2",
                        "vuex-persistedstate": "^4.1.0"
                    }
                }
            </pre>
            <h3>Your code:</h3>
            <img src="../../../public/images/packagejson2.png" alt="package json2">
            <h3>open cmd type "yarn" then enter</h3>
            <h3>Find webpack.mix.js file</h3>
            <img src="../../../public/images/webpack.png" alt="package json2">
            <h3>Add this code under mix.js('resources/js/app.js', 'public/js')</h3>
            <pre>.vue()</pre>
            <h3>Your code:</h3>
            <img src="../../../public/images/vue.png" alt="package json2">
            <h3>Go to resources/css</h3>
            <h3>Open app.css file and type this code inside the app.css</h3>
            <pre>
                @import '~vuetify/dist/vuetify.min.css';
                @import '~@mdi/font/css/materialdesignicons.css';</pre>
            <h3>Go to resources/js/app.js and type this code under require('./bootstrap');</h3>
            <pre>
                import Vue from 'vue'
                import Vuetify from 'vuetify'
                import Router from './router'
                import store from './store'
                import App from './template/App';
                Vue.use(Vuetify)</pre>
            <h3>paste this code under the Vue.use(Vuetify) in app.js</h3>
            <pre>
                const app = new Vue({
                    el: '#app',
                    store,
                    router:Router,
                    vuetify: new Vuetify(),
                    render: h=>h(App)
                });</pre>
            <h3>Create folder on resources/js and name it as "template" then create App.vue file. Type this code inside App.vue file</h3>
            <pre>
                &lt;template&gt;
                    &lt;v-app id="inspire"&gt;
                        &lt;v-navigation-drawer
                        v-model="drawer"
                        app
                        &gt;
                            &lt;v-list dense&gt;
                                &lt;v-subheader&gt;LIST COMPONENTS:&lt;/v-subheader&gt;
                                &lt;v-list-item
                                    v-for="(item, i) in items"
                                    :key="i"
                                    :to="item.to"
                                &gt;
                                    &lt;v-list-item-icon&gt;
                                        &lt;v-icon v-text="item.icon"&gt;&lt;/v-icon&gt;
                                    &lt;/v-list-item-icon&gt;
                                    &lt;v-list-item-content&gt;
                                        &lt;v-list-item-title v-text="item.text"&gt;&lt;/v-list-item-title&gt;
                                    &lt;/v-list-item-content&gt;
                                &lt;/v-list-item&gt;
                            &lt;/v-list&gt;
                        &lt;/v-navigation-drawer&gt;

                        &lt;v-app-bar app&gt;
                            &lt;v-app-bar-nav-icon @click="drawer = !drawer"&gt;&lt;/v-app-bar-nav-icon&gt;
                            &lt;v-toolbar-title&gt;SPA Demo App&lt;/v-toolbar-title&gt;
                        &lt;/v-app-bar&gt;

                        &lt;v-main class="ma-2"&gt;
                            &lt;router-view&gt;&lt;/router-view&gt;
                        &lt;/v-main&gt;
                    &lt;/v-app&gt;
                &lt;/template&gt;

                &lt;script&gt;
                export default {
                    data: () =&gt; ({ 
                        drawer: null,
                        items:[
                            {text:'Home', icon:'mdi-home', to:'home'},
                            {text:'Hello', icon:'mdi-hand-wave', to:'hello'}
                        ]
                    }),
                }
                &lt;/script&gt;</pre>
            <h3>Create store.js on resources/js. Then type this code inside store.js</h3>
            <pre>
                import Vue from 'vue';
                import Vuex from 'vuex';
                import createPersistedState from 'vuex-persistedstate';

                Vue.use(Vuex)
                export default new Vuex.Store({
                    state:{},
                    actions:{}, 
                    mutations:{},
                    getters:{},
                    plugins: [createPersistedState()]
                });</pre>
            <h3>Create router.js on resources/js. Then type this code inside routes.js</h3>
            <pre>
                import Vue from 'vue'
                import VueRouter from 'vue-router'

                Vue.use(VueRouter)
                import Home from './components/Home'
                import Hello from './components/Hello'

                export default new VueRouter({
                    mode: 'history',
                    routes: [
                        {
                            path: '/home',
                            name: 'home',
                            component: Home
                        },
                        {
                            path: '/hello',
                            name: 'hello',
                            component: Hello
                        },
                    ],
                });</pre>
            <h3>Create folder on resources/js and name it as "components" then create Home.vue file. Type this code inside Home.vue file</h3>
            <pre>
                &lt;template&gt;
                    &lt;v-card&gt;
                        &lt;v-card-title style="background-color:#B2DFDB"&gt;Home&lt;/v-card-title&gt;
                        &lt;v-card-text&gt;
                            &lt;p&gt;some transcations & logics here....&lt;/p&gt;
                        &lt;/v-card-text&gt;
                    &lt;/v-card&gt;
                &lt;/template&gt;

                &lt;script&gt;
                export default {

                }
                &lt;/script&gt;</pre>
            <h3>create Hello.vue on resources/js/components then type this code inside Hello.vue</h3>
            <pre>
                &lt;template&gt;
                    &lt;v-card&gt;
                        &lt;v-card-title style="background-color:#FFCC80"&gt;Hello&lt;/v-card-title&gt;
                        &lt;v-card-text&gt;
                            &lt;p&gt;some transcations & logics here....&lt;/p&gt;
                        &lt;/v-card-text&gt;
                    &lt;/v-card&gt;
                &lt;/template&gt;

                &lt;script&gt;
                export default {

                }
                &lt;/script&gt;</pre>
            <h3>Create a folder on resources/views and name it as "layouts"</h3>
            <h3>Create app.blade.php blade template on resources/views/layouts</h3>
            <h3>Open app.blade.php then type “!” for auto generating HTML Header</h3>

            <h3>Under the 2nd META Tag place this code</h3>
            <pre>{{data_array[0]}}</pre>
            <h3>Inside the BODY Tag place this code</h3>
            <pre>{{data_array[1]}}</pre>
            <h3>Under the &lt;/div> Tag place this code</h3>
            <pre>&lt;script {{data_array[2]}}&gt;&lt;/script&gt;</pre>
            <h3>Open command prompt then go to your project folder and type this code</h3>
            <pre>php artisan make:controller SpaController</pre>
            <h3>Go to app/Http/controllers, open SpaController.php then place this code under double slash</h3>
            <pre>
                public function index(){
                    return view('layouts.app');
                }</pre>
            <h3>Go to routes folder then open web.php file. Comment the 1st route then type this codeimport your controller</h3>
            <pre>use App\Http\Controllers\SpaController;</pre>
            <h3>Then type this</h3>
            <pre>Route::get('/{any?}', [SpaController::class, 'index'])->where('any', '.*');</pre>
            <h3>Open another cmd on your project and run</h3>
            <pre>yarn watch</pre>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data_array : [
                `<link rel="stylesheet" href="{{asset('css/app.css')}}">`,
                '<div id="app"></div>',
                `src="{{asset('js/app.js')}}"`
               
            ]
        }
    }
}
</script>