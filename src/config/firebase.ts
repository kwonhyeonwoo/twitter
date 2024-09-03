// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAOqO8jzzbmG7vCROvPVJxMhO97VRWljXQ",
    authDomain: "twitter-7364f.firebaseapp.com",
    projectId: "twitter-7364f",
    storageBucket: "twitter-7364f.appspot.com",
    messagingSenderId: "413844533164",
    appId: "1:413844533164:web:0db54839d235895dd25409",
    measurementId: "G-L29PVD1BWL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);