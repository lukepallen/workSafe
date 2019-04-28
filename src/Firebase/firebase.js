import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDNjt0ZQR50uFWwvHiLMs3dR3OckvzteLo",
    authDomain: "worksafe-630dd.firebaseapp.com",
    databaseURL: "https://worksafe-630dd.firebaseio.com",
    projectId: "worksafe-630dd",
    storageBucket: "worksafe-630dd.appspot.com",
    messagingSenderId: "866713004286"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;