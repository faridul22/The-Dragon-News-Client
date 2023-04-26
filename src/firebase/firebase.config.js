// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD-hZC0b0TpxYuo7ppqOu3KNxNoBJpECHc",
    authDomain: "the-news-dragon-c95c1.firebaseapp.com",
    projectId: "the-news-dragon-c95c1",
    storageBucket: "the-news-dragon-c95c1.appspot.com",
    messagingSenderId: "117996880467",
    appId: "1:117996880467:web:031a576754484f45dc3ca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;