// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZSPP-qqyt4CgkVkZzLMxDj1Tn8tM7UPg",
    authDomain: "weather-2ea93.firebaseapp.com",
    projectId: "weather-2ea93",
    storageBucket: "weather-2ea93.appspot.com",
    messagingSenderId: "94389359386",
    appId: "1:94389359386:web:434990a49603789e6312a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;