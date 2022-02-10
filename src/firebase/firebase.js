import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBVrJE0OtKyVozEKDcxsgkUFGh8Sg3NXvw",
    authDomain: "sigmah4rd.firebaseapp.com",
    projectId: "sigmah4rd",
    storageBucket: "sigmah4rd.appspot.com",
    messagingSenderId: "10126762341",
    appId: "1:10126762341:web:0fc5988605c3a88a79c18c"
});

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}