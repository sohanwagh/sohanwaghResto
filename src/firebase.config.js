import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBzgK49yYkKGDAaFAQuIJpbOjv7GycsoHM",
    authDomain: "restaurantapp-b3a4c.firebaseapp.com",
    databaseURL: "https://restaurantapp-b3a4c-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-b3a4c",
    storageBucket: "restaurantapp-b3a4c.appspot.com",
    messagingSenderId: "280785358161",
    appId: "1:280785358161:web:07177eec2e1e9d71f21770"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig) 

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };