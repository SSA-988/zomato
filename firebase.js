import firebase from "firebase"
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyB-4sapviHwT9RnVN9yzHgbkB-x-mJN2so",
  authDomain: "zomato-app-d415c.firebaseapp.com",
  projectId: "zomato-app-d415c",
  storageBucket: "zomato-app-d415c.appspot.com",
  messagingSenderId: "1020948197409",
  appId: "1:1020948197409:web:7fae90c9d62f7a9cc4f360",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };