import firebase from 'firebase' ;
const config = {
  apiKey: " insert your api key",
  authDomain: "insert your auth domain",
  databaseURL: "insert your database url",
  projectId: "insert your proj id",
  storageBucket: "insert your storage bucket",
  messagingSenderId: "enter your sender id",
  appId: "enter your app id",
  measurementId: "add measurement id"
};
const fire = firebase.initializeApp(config) ;
 export const auth = fire.auth() ;
 export const db = fire.firestore() ;
export default fire;
// you can copy the iformation in your firebase account.


