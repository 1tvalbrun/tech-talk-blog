const firebase = require('firebase/app'),
require('firebase/auth'),
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCafJiZHXhR5y2k2pu8qZbvBwGyyuSbYig",
    authDomain: "tech-talk-blog.firebaseapp.com",
    databaseURL: "https://tech-talk-blog.firebaseio.com",
    projectId: "tech-talk-blog",
    storageBucket: "tech-talk-blog.appspot.com",
    messagingSenderId: "667935161153",
    appId: "1:667935161153:web:f97b53dabd15d7b22d7fc0",
    measurementId: "G-66NRRP0QJ0"
  };


firebase.initializeApp(firebaseConfig);
module.exports = firebase;