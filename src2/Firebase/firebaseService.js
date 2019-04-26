import firebase from './firebase';

export default class FirebaseService {
    constructor() {
        this.db = firebase.firestore().collection("reports");
    }

    get(name) {
        let data = []
        return this.db.where("name", "==", name).get().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }

    getAll() {
        let data = []
        return this.db.get().then(
            snapshot => {
                snapshot.forEach(snap => data.push(snap.data()));
                return data;
            }
        );

    }

    getByStatus(status) {
        let data = []
        return this.db.where("status", "==", status).get().then(
            snapshot => {
                snapshot.forEach(snap => data.push(snap.data()));
                return data;
            }
        );
    }
}