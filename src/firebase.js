import firebase from 'firebase/compat/app';
// import firebase from 'firebase/app'; -> 버전 업데이트로 인해 위에 코드

 // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_STROAGE_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BASKET,
    messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

export default firebase.initializeApp(firebaseConfig);