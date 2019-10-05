import firebase from 'firebase/app'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDnghEAGx95OXNuxyADjceZ9CVkw-LN3RQ",
    authDomain: "teacher-s-schedule-33c10.firebaseapp.com",
    databaseURL: "https://teacher-s-schedule-33c10.firebaseio.com",
    projectId: "teacher-s-schedule-33c10",
    storageBucket: "",
    messagingSenderId: "437680704652",
    appId: "1:437680704652:web:d9aad553fe7b8b18d07fa9",
    measurementId: "G-1CGPCY3VMJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();