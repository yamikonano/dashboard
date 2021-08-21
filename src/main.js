import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './route'


/* code from our Firebase console */
var firebaseConfig = {
    apiKey: "AIzaSyDzCF__DBKzkRMW_22Vx-e5kgodIUP6o4s",
    authDomain: "test-31354.firebaseapp.com",
    projectId: "test-31354",
    storageBucket: "test-31354.appspot.com",
    messagingSenderId: "571790471137",
    appId: "1:571790471137:web:cbb1c75a9f4bd1a9aa2ca0",
    measurementId: "G-6R4KB5DZX1"
}

// Initialize Firebase
// firebase.initializeApp(firebaseConfig)

const unsubscribe = firebase.initializeApp(firebaseConfig).auth().onAuthStateChanged(() => {
    /* eslint-disable no-new */
    const app = createApp(App)
    app.use(router)

    app.mount('#app')


    // remove this listener so that we aren't trying to make new vue objects
    // every time the auth state changes.
    unsubscribe();
});


