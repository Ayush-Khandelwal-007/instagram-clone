import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAT3X0RldaDOVJ_xRBRnqzeBul4FNUkPVU",
    authDomain: "instagram-clone-6c469.firebaseapp.com",
    databaseURL: "https://instagram-clone-6c469.firebaseio.com",
    projectId: "instagram-clone-6c469",
    storageBucket: "instagram-clone-6c469.appspot.com",
    messagingSenderId: "467959049875",
    appId: "1:467959049875:web:b298fd60bfaeb02b7ce766",
    measurementId: "G-HY8KKGGKVF"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth =firebase.auth();
const storage=firebase.storage();

export {db,auth,storage };