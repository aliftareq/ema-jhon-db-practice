// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwp605hmVDaqB45UUeyNY-7oaENgHNSgo",
    authDomain: "ema-jhon-simple-auth-a7afc.firebaseapp.com",
    projectId: "ema-jhon-simple-auth-a7afc",
    storageBucket: "ema-jhon-simple-auth-a7afc.appspot.com",
    messagingSenderId: "224283998228",
    appId: "1:224283998228:web:b9a1331e3206fd2f584f01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;