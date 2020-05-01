import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyCSzZJ0T_P961dpCbiidqFGRq3ZdoaoppA",
    authDomain: "ecommerce-9723d.firebaseapp.com",
    databaseURL: "https://ecommerce-9723d.firebaseio.com",
    projectId: "ecommerce-9723d",
    storageBucket: "ecommerce-9723d.appspot.com",
    messagingSenderId: "1047715112642",
    appId: "1:1047715112642:web:f4ee3af3bf403c40f13d5b",
    measurementId: "G-H49JJZQCZB"
  };

firebase.initializeApp(config)

export const auth =firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;


  