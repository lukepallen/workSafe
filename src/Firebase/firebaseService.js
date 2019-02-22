import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("reports");
    }

    add(data) {
        this.db.add(data);
    }
}