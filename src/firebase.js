/* eslint-disable import/no-unresolved */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDeKQ-pH5PZDoJPkN5YAWvtxq7hpGe_Rho',
  authDomain: 'le-cl-5d3a5.firebaseapp.com',
  projectId: 'le-cl-5d3a5',
  storageBucket: 'le-cl-5d3a5.appspot.com',
  messagingSenderId: '218130027106',
  appId: '1:218130027106:web:4f182286546bfe148b373b',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
