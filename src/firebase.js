import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAIrCUlzG84nN1jPlcQPomLxpKengmQeF8",
  authDomain: "clone-6347d.firebaseapp.com",
  databaseURL: "https://clone-6347d.firebaseio.com",
  projectId: "clone-6347d",
  storageBucket: "clone-6347d.appspot.com",
  messagingSenderId: "527577727267",
  appId: "1:527577727267:web:b8fb650858751cadf30c96",
  measurementId: "G-HD5602880P",
});

const auth = firebase.auth();

export { auth };
