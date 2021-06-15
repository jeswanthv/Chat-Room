import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyCn4ECz4LudCAJR1hSmNEhZQ1XGlrskgcc',
    authDomain: 'unichat-f0471.firebaseapp.com',
    projectId: 'unichat-f0471',
    storageBucket: 'unichat-f0471.appspot.com',
    messagingSenderId: '725445674530',
    appId: '1:725445674530:web:d66f955b19c5ff6103ac7b',
  })
  .auth();
