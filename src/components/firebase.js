import firebase  from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDpSIe-ao_jzDEOa6NfyVdUq3IdsVZTs7A",
    authDomain: "todo-list-e8539.firebaseapp.com",
    projectId: "todo-list-e8539",
    storageBucket: "todo-list-e8539.appspot.com",
    messagingSenderId: "145099858144",
    appId: "1:145099858144:web:d689a01101fe7700f8f085"
  };
  firebase.initializeApp(firebaseConfig);
  export default firebase;