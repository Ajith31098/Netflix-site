import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD0kC8Tubojqef2_99BvL5b3qm34TbREQI",
    authDomain: "netflix-auth-55d66.firebaseapp.com",
    projectId: "netflix-auth-55d66",
    storageBucket: "netflix-auth-55d66.firebasestorage.app",
    messagingSenderId: "739807810275",
    appId: "1:739807810275:web:ce5fe61a6540ad704b2bd6",
    measurementId: "G-9EZYQP0JBT"
  };

export const firebase = firebase.initializeApp(firebaseConfig)