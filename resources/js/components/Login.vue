<template>
    <!-- <v-app>
        <v-content> -->
            <v-container class="fill-height" fluid>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="8">
                        <v-card elevation="12">
                            <v-window v-model="step">
                                <v-window-item :value="1">
                                    <v-row>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12"> 
                                                <h1 class="text-center display-2 teal--text text--accent-3">Sign in to System</h1>
                                                <!-- <div class="text-center  mt-4">
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-google-plus</v-icon>
                                                    </v-btn>
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-linkedin</v-icon>
                                                    </v-btn>
                                                </div> -->
                                                <h4 class="text-center mt-4">Ensure your email for registration</h4>
                                                <v-form>
                                                    <v-text-field 
                                                        label="Email" 
                                                        prepend-icon="mdi-email" 
                                                        type="text" 
                                                        color="teal accent-3"
                                                    ></v-text-field>
                                                    <v-text-field 
                                                        label="Password" 
                                                        prepend-icon="mdi-lock" 
                                                        type="text" 
                                                        color="teal accent-3"
                                                    ></v-text-field>
                                                </v-form>
                                                <h3 class="text-center mt-3">Forget your password ?</h3>
                                                <div class="text-center mt-3">
                                                    <v-btn rounded color="teal accent-3" dark>sign in</v-btn>
                                                </div>
                                            </v-card-text>
                                        </v-col>
                                        <v-col cols="12" md="4" class="teal accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Hello, My Friend!</h1>
                                                <h5 class="text-center">Enter your personal details and start journey with us?</h5>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined dark @click="step++">sign up</v-btn>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                                <v-window-item :value="2">
                                    <v-row class="fill-height">
                                        <v-col cols="12" md="4" class="teal accent-3">
                                            <v-card-text class="white--text mt-12">
                                                <h1 class="text-center display-1">Welcome Back !</h1>
                                                <h5 class="text-center">To Keep connected with us please login with your credentials</h5>
                                            </v-card-text>
                                            <div class="text-center">
                                                <v-btn rounded outlined dark @click="step--">Sign in</v-btn>
                                            </div>
                                        </v-col>
                                        <v-col cols="12" md="8">
                                            <v-card-text class="mt-12">
                                                <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                                                <!-- <div class="text-center  mt-4">
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-facebook</v-icon>
                                                    </v-btn>
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-google-plus</v-icon>
                                                    </v-btn>
                                                    <v-btn small class="mx-2" fab color="black" outlined>
                                                        <v-icon>mdi-linkedin</v-icon>
                                                    </v-btn>
                                                </div> -->
                                                <h4 class="text-center mt-4">Ensure your email for registration</h4>
                                                <v-form>
                                                    <v-text-field
                                                        label="Name"
                                                        prepend-icon="mdi-account"
                                                        type="text"
                                                        color="teal accent-3"
                                                        />
                                                    <v-text-field
                                                        label="Email"
                                                        prepend-icon="mdi-email"
                                                        type="text"
                                                        color="teal accent-3"
                                                        />
                                                    <v-text-field
                                                        label="Password"
                                                        prepend-icon="mdi-lock"
                                                        type="password"
                                                        color="teal accent-3"
                                                        />
                                                </v-form>
                                                <div class="text-center mt-n5">
                                                    <v-btn rounded color="teal accent-3" dark>Sign up</v-btn>
                                                </div>
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        <!-- </v-content>
    </v-app> -->
</template>

<script>
export default {
    data() {
        return {
            step: 1
        }
    },
    
    props:{
        source:String 
    }
}
</script>