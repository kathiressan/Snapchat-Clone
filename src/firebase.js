import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDX0sx_1bRj83rGevu327MrG5WvM27FUlM",
  authDomain: "snapchat-clone-yt-2e88c.firebaseapp.com",
  projectId: "snapchat-clone-yt-2e88c",
  storageBucket: "snapchat-clone-yt-2e88c.appspot.com",
  messagingSenderId: "96057903523",
  appId: "1:96057903523:web:7b8d49be80df84cead7216",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
