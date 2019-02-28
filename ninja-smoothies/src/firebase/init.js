import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD14CM2_FpkkExDRyIY23vAmOex8pLNHHo",
    authDomain: "udemy-ninja-smoothies-e9acd.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-e9acd.firebaseio.com",
    projectId: "udemy-ninja-smoothies-e9acd",
    storageBucket: "udemy-ninja-smoothies-e9acd.appspot.com",
    messagingSenderId: "12154964789"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true})
  // export firestore database
  export default  firebaseApp.firestore()