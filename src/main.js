import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Md6UpIHYJxAcAsEBqOrss_U16hSUpDU",
  authDomain: "mattle-e71e6.firebaseapp.com",
  projectId: "mattle-e71e6",
  storageBucket: "mattle-e71e6.appspot.com",
  messagingSenderId: "65929703885",
  appId: "1:65929703885:web:dae4128f0526426c651484",
  measurementId: "G-QGMSKBDL7K"
};

// Initialize Firebase
initializeApp(firebaseConfig);
