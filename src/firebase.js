// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiB_XIwV8ML25ZyrbgpmN7zDxPC7_fbLg",
  authDomain: "disney-hotstar-clone-b5254.firebaseapp.com",
  projectId: "disney-hotstar-clone-b5254",
  storageBucket: "disney-hotstar-clone-b5254.appspot.com",
  messagingSenderId: "883244860416",
  appId: "1:883244860416:web:ae0662151bcbdb19a4c4e5",
  measurementId: "G-3RG97177TJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
