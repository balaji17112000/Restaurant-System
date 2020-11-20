import firebase from 'firebase' ;
const config = {
  apiKey: "AIzaSyDV32uwpaGrWU823tGuzpHGo_RETa9JwlM",
  authDomain: "ooad-77f8b.firebaseapp.com",
  databaseURL: "https://ooad-77f8b.firebaseio.com",
  projectId: "ooad-77f8b",
  storageBucket: "ooad-77f8b.appspot.com",
  messagingSenderId: "59367853521",
  appId: "1:59367853521:web:f01baf4c9bd3e607f4a4f0",
  measurementId: "G-F5RYCH23R3"
};
const fire = firebase.initializeApp(config) ;
 export const auth = fire.auth() ;
 export const db = fire.firestore() ;
export default fire;


