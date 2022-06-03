import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

// Import de mitt
import mitt from 'mitt';

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyApmPsFt70eBIXjJ_1lAxotbuQQC5nF41M",
    authDomain: "sae203-fullpop.firebaseapp.com",
    projectId: "sae203-fullpop",
    storageBucket: "sae203-fullpop.appspot.com",
    messagingSenderId: "971099775507",
    appId: "1:971099775507:web:adbb8bfff46010a8bcd5e6"
  };

  // Initialize Firebase
const FireApp = initializeApp(firebaseConfig);

const app = createApp(App)

// Création d'un emetteur mitt exportable
export const emitter = mitt();
// créer l'émetteur comme propriété globale
// de l'application
app.config.globalProperties.emitter = emitter;

app.use(router)

app.mount('#app')