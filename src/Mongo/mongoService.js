const MongoClient = require('mongodb').MongoClient;


export default class MongoService {
    collection;

    constructor() {
        const uri = "mongodb+srv://dbUser:<Abc12345>@koolkids-xcyxw.mongodb.net/test?retryWrites=true";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            if (!err) {
                collection = client.db("workSafe").collection("reports");
            } else {
                console.error(err);
            }
        });
    }

    add(data) {
        return this.collection.insertOne(data);
    }

    get(name) {
        let data = []
        return this.collection.find({"name": name}).then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }

    getAll() {
        let data = []
        return this.collection.find().then(
            snapshot => {
                snapshot.forEach(snap => data.push({[snap.id]: snap.data()}));
                return data;
            }
        );
    }

    
    getByStatus(status) {
        let data = []
        return this.collection.find({"status": status}).then(
            snapshot => {
                snapshot.forEach(snap => data.push(snap.data()));
                return data;
            }
        );
    }

    updateStatus(name, status) {
        return this.collection.updateOne({"name": name}, {"status": status}).then(
            snapshot => {
                console.log(snapshot);
            }
        )
    }
}