import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBPWh3jgasQDggnW4Y4NPN7mCbEyeXNfWw",
    authDomain: "firegram-8c8c0.firebaseapp.com",
    projectId: "firegram-8c8c0",
    storageBucket: "firegram-8c8c0.appspot.com",
    messagingSenderId: "219106097222",
    appId: "1:219106097222:web:aa0fdef03e46c5b6837247"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  const projectStorage= firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const auth = app.auth();

  export { projectStorage, projectFirestore, timestamp, auth};
  export default app; 