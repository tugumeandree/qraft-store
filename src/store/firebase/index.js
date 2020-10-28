import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = firebase.initializeApp({
	apiKey: "AIzaSyADY8r04F8_KaEdvaUbX3Xe2zsHRB-Qc-A",
    authDomain: "stuwie-dash.firebaseapp.com",
    databaseURL: "https://stuwie-dash.firebaseio.com",
    projectId: "stuwie-dash",
    storageBucket: "stuwie-dash.appspot.com",
    messagingSenderId: "358885580460",
    appId: "1:358885580460:web:19f2d0050b3fca63e48909"
});


var db = firebaseConfig.firestore();
var authenticate = firebaseConfig.auth()


export { db};
