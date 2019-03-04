import firebase from 'firebase'
import firestore from 'firebase/firestore'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyASBBZMSLE16aqTHQgutb3QOMmvvonkPEU",
    authDomain: "udemy-ninja-chat-902e6.firebaseapp.com",
    databaseURL: "https://udemy-ninja-chat-902e6.firebaseio.com",
    projectId: "udemy-ninja-chat-902e6",
    storageBucket: "udemy-ninja-chat-902e6.appspot.com",
    messagingSenderId: "374948490499"
  };
  
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
  
  export default firebase.firestore()