// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCipYig_dpN1mUXc00ANd2EErZUM4bd0rs",
    authDomain: "science-tutor-5e5e1.firebaseapp.com",
    projectId: "science-tutor-5e5e1",
    storageBucket: "science-tutor-5e5e1.appspot.com",
    messagingSenderId: "341936416094",
    appId: "1:341936416094:web:2aa567a98cab2202c21bcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

