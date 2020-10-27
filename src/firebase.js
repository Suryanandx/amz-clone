import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0aszMk52rdWxYxTbAfIEvjy--Fpfyhok",
  authDomain: "challenge-8829a.firebaseapp.com",
  databaseURL: "https://challenge-8829a.firebaseio.com",
  projectId: "challenge-8829a",
  storageBucket: "challenge-8829a.appspot.com",
  messagingSenderId: "884377683791",
  appId: "1:884377683791:web:205b27a3c7c5c65dc6273a",
  measurementId: "G-4KCXY3CJPQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };