<template>
    <div>
        <h2>Laravel 9 Installation Manual</h2>
        <p>
            <b>NOTE:</b>
            Please be aware that this guide is intended for use with Laravel 9 and PHP 8.
        </p>
        <hr>
        <h3>Install Laravel 9 Via Composer</h3>
        <div style="padding:15px;">
            <div>1. Open cmd command</div>
            <div>
                <v-icon small @click="copyClipboard('cd Desktop')">mdi-content-copy</v-icon>&nbsp;cd Desktop
            </div>
            <div>or</div>
            <div>
                <v-icon small @click="copyClipboard('cd C:\\Apache24_php8\\htdocs')">mdi-content-copy</v-icon>&nbsp;cd C:\Apache24_php8\htdocs
            </div>
            <div>2. Create Laravel 9 Project</div>
            <div>
                <v-icon small @click="copyClipboard('composer create-project laravel/laravel:^9.5.2 laravel9_training')">mdi-content-copy</v-icon>&nbsp;composer create-project laravel/laravel:^9.5.2 laravel9_training
            </div>
            <div>3. Go to project name, execute the following command:</div>
            <div>
                <v-icon small @click="copyClipboard('cd laravel9_training')">mdi-content-copy</v-icon>&nbsp;cd laravel9_training
            </div>
            <div>4. Next, run or serve the application thru cmd.</div>
            <div>
                <v-icon small @click="copyClipboard('php artisan serve')">mdi-content-copy</v-icon>&nbsp;php artisan serve
            </div>
            <img src="../../../public/images/laravel9/phpartisanserve.png" alt="spa concept" >
            <div>5.Open Chrome Browser and type the URL or CLICK HERE: <a target="_blank" href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a></div>
            <img src="../../../public/images/laravel9/laravel.png" alt="spa concept" >
            <div>6. Go back to CMD Command under project folder, press “Control + C” keyboard keys to stop the application and add the vue dependencies.</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add vue@latest')">mdi-content-copy</v-icon>&nbsp;yarn add vue@latest (Requires node.js v18^)
            </div>
            <div>
                <v-icon small @click="copyClipboard('yarn add @vitejs/plugin-vue')">mdi-content-copy</v-icon>&nbsp;yarn add @vitejs/plugin-vue (Requires node.js v18^)
            </div>
            <div>or</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add vue@3.3')">mdi-content-copy</v-icon>&nbsp;yarn add vue@3.3 (For those w/ node.js v16 &amp; below)
            </div>
            <div>
                <v-icon small @click="copyClipboard('yarn add @vitejs/plugin-vue@4.5')">mdi-content-copy</v-icon>&nbsp;yarn add @vitejs/plugin-vue@4.5 (For those w/ node.js v16 &amp; below)
            </div>
            <img src="../../../public/images/laravel9/dev.png" alt="spa concept" >
            <div>7. Then, execute the following code to open your project in VS Code</div>
            <div>
                <v-icon small @click="copyClipboard('code .')">mdi-content-copy</v-icon>&nbsp;code . 
            </div>
            <div>8. In VS code go to ''vite.config.js'' file and input the following code to declare the vue.</div>
            <div>
                <div>Add this in line after “import laravel from 'laravel-vite-plugin';”</div>
                <v-icon small @click="copyClipboard(`import vue from '@vitejs/plugin-vue'`)">mdi-content-copy</v-icon>&nbsp;import vue from '@vitejs/plugin-vue'
                <div>Add this in line after “plugins: [”</div>
                <v-icon small @click="copyClipboard('vue(),')">mdi-content-copy</v-icon>&nbsp;vue(),
                <div>&nbsp; vite.config.js (See below example or CLICK HERE)</div>
                <code>
                <pre>
                    <v-icon small @click="copyClipboard(code1)">mdi-content-copy</v-icon>
                    {{code1}}
                </pre>
                </code>
            </div>
            <div>9. Create layouts folder under resources\views</div>
            <div>10. Create file app.blade.php in resources\views\layouts</div>
            <div>11.Paste this inside app.blade.php</div>
            <div>&nbsp; app.blade.php (See below example or CLICK HERE)</div>
            <code>
            <pre>
                <v-icon small @click="copyClipboard(code2)">mdi-content-copy</v-icon>
                {{code2}}
            </pre>
            </code>
            <p>
                <b>NOTE:</b>
                @vite(['resources/css/app.css', 'resources/js/app.js']) to load your scripts and styles
            </p>

            <div>12. Edit web.php</div>
            <div>web.php (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code3)">mdi-content-copy</v-icon>
                {{code3}}
            </pre>

            <div>12.1 Create File SpaController.php in path: app/Http/Controllers or create the controller using artisan command in cmd , enter this in cmd:</div>
            <v-icon small @click="copyClipboard('php artisan make:controller SpaController')">mdi-content-copy</v-icon>&nbsp;php artisan make:controller SpaController
            <div>SpaController.php (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code4)">mdi-content-copy</v-icon>
                {{code4}}
            </pre>
            <div>13. Go to app.js and add this codes:</div>
            <div>path: resources\js\app.js </div>
            <div> Updated app.js (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code5)">mdi-content-copy</v-icon>
                {{code5}}
            </pre>
            <div>14. Go to VSCode Terminal or open CMD on your project folder, and install “vuetify”</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add vuetify@3.4.9')">mdi-content-copy</v-icon>&nbsp;yarn add vuetify@3.4.9
            </div>
            <div>and</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add @mdi/font -D')">mdi-content-copy</v-icon>&nbsp;yarn add @mdi/font -D
            </div>
            <div>15. After the installation, add this code to app.js</div>
            <div>path: resources\js\app.js</div>
            <div>Updated app.js (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code6)">mdi-content-copy</v-icon>
                {{code6}}
            </pre>
            <div>16. Create folder named “components” under resources\js</div>
            <div>path: resources\js\components</div>
            <div>17. Create folder named “templates” under resources\js\components</div>
            <div>path: resources\js\components\templates</div>
            <div>18. Create file named “App.vue” under resources\js\components\templates</div>
            <div>path: resources\js\components\templates\App.vue</div>
            <div>19. Then add this codes in ''App.vue''</div>
            <div> path: resources\js\components\templates\App.vue</div>
            <div> Updated App.vue (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code7)">mdi-content-copy</v-icon>
                {{code7}}
                &lt;script&gt;
                export default {
                    data: () => ({
                        drawer: false,
                        group: null,
                        items: [
                        {
                            title: 'Home',
                            path: '/',
                            icon: 'mdi-home'
                        },
                        {
                            title: 'Company',
                            path: '/Company',
                            icon:'mdi-information-outline'
                        },

                        ],
                    }),
                }   
                &lt;/script&gt;
            </pre>

            <div>20.Now, go to CMD terminal under project folder and install vue-router</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add vue-router@4')">mdi-content-copy</v-icon>&nbsp;yarn add vue-router@4
            </div>
            <div>21.Create file named ''router.js'' under resources\js</div>
            <div>path: resources\js\router.js</div>
            <div>22.Add the following code in ''router.js''</div>
            <div>Updated router.js (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code8)">mdi-content-copy</v-icon>
                {{code8}}
            </pre>
            <div>23.Now, register ''router.js'' in ''app.js''</div>
            <div>Update app.js under “resources/js/” (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code9)">mdi-content-copy</v-icon>
                {{code9}}
            </pre>
            <div>24.Create folder named “pages” under /js/components/pages</div>
            <div>25.Create files "Home.vue" and "Company.vue" inside /js/components/pages.</div>
            <div>Home.vue (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code10)">mdi-content-copy</v-icon>
                {{code10}}
                &lt;script&gt;
                import { mapState, mapActions  } from 'pinia'
                import { useSampleStore } from '../../mainStore.js'

                export default {
                    methods : {
                        ...mapActions(useSampleStore, ['increment']),
                    },
                    computed : {
                        ...mapState(useSampleStore, ['count', 'name', 'doubleCount']),
                        ...mapState(useSampleStore, { countNew: 'count',})
                    }
                }
                &lt;/script&gt;
            </pre>
            <div> Company.vue (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code11)">mdi-content-copy</v-icon>
                {{code11}}
            </pre>
            <div> 26.Install “Pinia”, go to CMD terminal under project folder and execute this command</div>
            <div>
                <v-icon small @click="copyClipboard('yarn add pinia')">mdi-content-copy</v-icon>&nbsp;yarn add pinia
            </div>
            <div>27.Add this code to "app.js"</div>
            <div> path: /resources/js/app.js</div>
            <div>Add this code in line after “import '@mdi/font/css/materialdesignicons.css'”</div>
            <div>
                <v-icon small @click="copyClipboard(`import { createPinia } from 'pinia'`)">mdi-content-copy</v-icon>&nbsp;import { createPinia } from 'pinia'
            </div>
            <div>Add this code in line before “const vuetify = createVuetify”</div>
            <div>
                <v-icon small @click="copyClipboard('const pinia = createPinia()')">mdi-content-copy</v-icon>&nbsp;const pinia = createPinia()
            </div>
            <div>Add this code in line after “const app = createApp(App)”</div>
            <div>
                <v-icon small @click="copyClipboard('app.use(pinia)')">mdi-content-copy</v-icon>&nbsp;app.use(pinia)
            </div>
            <div>  Updated app.js with pinia (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code12)">mdi-content-copy</v-icon>
                {{code12}}
            </pre>
            <div>28.Create "mainStore.js"</div>
            <div> path: resources\js\mainStore.js</div>
            <div> Input the following code to mainStore.js : (See below example or CLICK HERE)</div>
            <pre>
                <v-icon small @click="copyClipboard(code13)">mdi-content-copy</v-icon>
                {{code13}}
            </pre>
            <div>29.Go to cmd under project folder then execute the following:</div>
            <div>
                <v-icon small @click="copyClipboard('yarn dev')">mdi-content-copy</v-icon>&nbsp;yarn dev (Run your project in development mode)
            </div>
            <div>29.Go to CMD under project folder then execute the following:</div>
            <div>
                <v-icon small @click="copyClipboard('php artisan serve')">mdi-content-copy</v-icon>&nbsp;php artisan serve
            </div>
            <p>
            <b>NOTE:</b>
                NOTE: Don't close the “yarn serve” and “php artisan serve” execution. Visit here: http://127.0.0.1:8000/
            </p>
        </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            code1: `
            import { defineConfig } from 'vite';
            import laravel from 'laravel-vite-plugin';
            import vue from '@vitejs/plugin-vue'

            export default defineConfig({
                plugins: [
                    vue(),
                    laravel({
                        input: ['resources/css/app.css', 'resources/js/app.js'],
                        refresh: true,
                    }),
                ],
            });`,
            code2 : `
            <!DOCTYPE html> 
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Page Title here...</title>

                @vite(['resources/css/app.css', 'resources/js/app.js'])

            </head>
            <body>
                <div id="app"></div>
            </body>
            </html>`,
            code3 : `
            <?php
            use Illuminate\Support\Facades\Route;
            use App\Http\Controllers\SpaController;
            /*
            |--------------------------------------------------------------------------
            | Web Routes
            |--------------------------------------------------------------------------
            |
            | Here is where you can register web routes for your application. These
            | routes are loaded by the RouteServiceProvider within a group which
            | contains the "web" middleware group. Now create something great!
            |
            */

            Route::get('/{any?}', [SpaController::class, 'index'])->where('any', '.*');`,
            code4 : `
            <?php

            namespace App\Http\Controllers;

            use Illuminate\Http\Request;

            class SpaController extends Controller
            {
                public function index(){
                    return view('layouts.app');
                }
            }`,
            code5: `
            import './bootstrap';
            import { createApp } from 'vue'
            import App from './components/templates/App.vue'

            const app = createApp(App)
            app.mount('#app')
            `,
            code6 : `
            import './bootstrap';
            import { createApp } from 'vue'
            import App from './components/templates/App.vue'

            // VUETIFY
            import 'vuetify/styles'
            import { createVuetify } from 'vuetify'
            import * as components from 'vuetify/components'
            import * as directives from 'vuetify/directives'

            // MDI/FONT
            import '@mdi/font/css/materialdesignicons.css'

            const vuetify = createVuetify({
                components,
                directives,
                icons: {
                    defaultSet: 'mdi',
                },
            })

            const app = createApp(App)
            app.use(vuetify)
            app.mount('#app')
            `,
            code7: `
            <template>
                <v-app>
                    <v-app-bar
                        density="compact"
                        color="primary"
                        prominent
                        >
                        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                        <v-toolbar-title>Training Vue 3</v-toolbar-title>
                    </v-app-bar>

                    <v-navigation-drawer
                        v-model="drawer"
                        temporary
                        >
                        <v-list density="compact" class="pt-0" >
                            <v-list-item
                                v-for="(item, i) in items"
                                :key="i"
                                :value="item"
                                color="primary"
                                :to="item.path"
                            >
                                <template v-slot:prepend>
                                    <v-icon :icon="item.icon"></v-icon>
                                </template>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-navigation-drawer>

                    <v-main>
                        <router-view></router-view>
                    </v-main>
                </v-app>
            </template>
            `,
            code8: `
            import { createRouter, createWebHistory } from 'vue-router'

            const Home = () => import('./components/pages/Home.vue');
            const Company= () => import('./components/pages/Company.vue');
            // import Home from './pages/Home.vue';
            // import Company from '../pages/Company.vue';

            const router = createRouter({
                history: createWebHistory(), 
                routes: [
                    {
                        path: '/',
                        component: Home,
                        name: 'Home',
                    },
                    {
                        path: '/company',
                        component: Company,
                        name: 'Company',
                    },
                ]
            });

            export default router;`,
            code9: `
            import './bootstrap';
            import { createApp } from 'vue'
            import App from './components/templates/App.vue'

            // ROUTER
            import router  from './router.js'

            // VUETIFY
            import 'vuetify/styles'
            import { createVuetify } from 'vuetify'
            import * as components from 'vuetify/components'
            import * as directives from 'vuetify/directives'

            // MDI/FONT
            import '@mdi/font/css/materialdesignicons.css'

            const vuetify = createVuetify({
                components,
                directives,
                icons: {
                    defaultSet: 'mdi',
                },
            })

            const app = createApp(App)
            app.use(vuetify)
            app.use(router)
            app.mount('#app')
            `,
            code10: `
            <template>
                <h1>HOME</h1>
                <h1>{{ name }}</h1>
                <h1>Original : {{ count }}</h1>
                <h1>Getter : {{ doubleCount }}</h1>
                <h1>Renamed : {{ countNew }}</h1>
                <v-btn @click="increment">Add</v-btn>
            </template>
            `,
            code11: `
            <template>
                <div>
                    <p>Company Page</p>
                </div>
            </template>`,
            code12: `
            import './bootstrap';
            import { createApp } from 'vue'
            import App from './components/templates/App.vue'

            // ROUTER
            import router  from './router.js'

            // VUETIFY
            import 'vuetify/styles'
            import { createVuetify } from 'vuetify'
            import * as components from 'vuetify/components'
            import * as directives from 'vuetify/directives'

            // MDI/FONT
            import '@mdi/font/css/materialdesignicons.css'

            // PINIA
            import { createPinia } from 'pinia'

            const pinia = createPinia()
            const vuetify = createVuetify({
                components,
                directives,
                icons: {
                    defaultSet: 'mdi',
                },
            })

            const app = createApp(App)
            app.use(pinia)
            app.use(vuetify)
            app.use(router)
            app.mount('#app')
            `,
            code13: `
            import { defineStore } from 'pinia'

            export const useSampleStore = defineStore('counter', {
                state: () => {
                    return {
                        count: 0,
                        name: 'Pangalan',
                    }
                },

                getters: {
                    doubleCount: (state) => state.count * 2,
                },
                
                actions: {
                    increment() {
                        this.count++
                    },
                },
            })`
        }
    },

    methods: {
        copyClipboard(text){
            console.log(text,'item')
            // Create a temporary textarea element
            var textarea = document.createElement('textarea');
            textarea.value = text;
            
            // Make the textarea hidden
            textarea.style.position = 'fixed';
            textarea.style.opacity = 0;
            
            // Append the textarea to the DOM
            document.body.appendChild(textarea);
            
            // Select the text within the textarea
            textarea.select();
            
            try {
                // Execute the copy command
                var successful = document.execCommand('copy');
                var message = successful ? 'Copied to clipboard' : 'Unable to copy';
                console.log(message);
            } catch (err) {
                console.error('Unable to copy:', err);
            }
            
            // Remove the textarea from the DOM
            document.body.removeChild(textarea);
        }
    },
}
</script>