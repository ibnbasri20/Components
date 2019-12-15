import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import algoliasearch from 'algoliasearch'
const config = {
    apiKey: "AIzaSyAlTTpZKEW4yMsL-tswu8f8GQGfVzYNenE",
    authDomain: "sklh-333bc.firebaseapp.com",
    databaseURL: "https://sklh-333bc.firebaseio.com",
    projectId: "sklh-333bc",
    storageBucket: "sklh-333bc.appspot.com",
    messagingSenderId: "120343405649",
    appId: "1:120343405649:web:807a9cc443c7465ea38470",
    measurementId: "G-572RFSRVYK"
}
firebase.initializeApp(config)
const db = firebase.database()
const siswaCollection = db.ref("siswa")
const algolia = algoliasearch(
    "6U3OZZHAI3",
    "81ffce63aaf95a4e8e0c2e3008352d7a"
);
const index = algolia.initIndex("prod_SISWA");  
export default{
    firebase,
    db,
    siswaCollection,
    index
}