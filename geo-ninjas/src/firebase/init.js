import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDsH9VF_GhsF_xtyWen5w7-Qu2k-Q93YBY",
    authDomain: "udemy-geo-ninjas-ee303.firebaseapp.com",
    databaseURL: "https://udemy-geo-ninjas-ee303.firebaseio.com",
    projectId: "udemy-geo-ninjas-ee303",
    storageBucket: "udemy-geo-ninjas-ee303.appspot.com",
    messagingSenderId: "132127676349"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  export default firebaseApp.firestore()