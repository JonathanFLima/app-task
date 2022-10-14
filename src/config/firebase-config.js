import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBnFvpRosvFzlP0ZnqmEqJJPCAD7F0HuJ8",
    authDomain: "task-403e2.firebaseapp.com",
    projectId: "task-403e2",
    storageBucket: "task-403e2.appspot.com",
    messagingSenderId: "665939801950",
    appId: "1:665939801950:web:082dbd0f762c306ea1c1cf"
  };

  firebase.initializeApp(firebaseConfig);
  export { firebase }