import firebase from 'firebase';

var firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAK9GHiNk9eyyt8g6nL5M7BzArBK53pmY8",
    authDomain: "react-contact-form-c0eb2.firebaseapp.com",
    databaseURL: "https://react-contact-form-c0eb2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-contact-form-c0eb2",
    storageBucket: "react-contact-form-c0eb2.appspot.com",
    messagingSenderId: "455492801925",
    appId: "1:455492801925:web:be372cf43e0cbc9c1ce0ec"
  });
 
var db = firebaseApp.firestore();

export  { db };
