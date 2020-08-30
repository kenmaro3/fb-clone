import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCDK7esjSr9Mfn5YGpcrUqDhgWIQDV95W4",
    authDomain: "facebook-clone-98d55.firebaseapp.com",
    databaseURL: "https://facebook-clone-98d55.firebaseio.com",
    projectId: "facebook-clone-98d55",
    storageBucket: "facebook-clone-98d55.appspot.com",
    messagingSenderId: "238095553836",
    appId: "1:238095553836:web:a29e3e6134d9b6403c8889",
    measurementId: "G-XMTLBRS49N"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;