import admin from "../src";

let d : admin.auth.DecodedIdToken;
let a : Promise<admin.app.App> = admin.initializeApp();

// admin.auth().verifyIdToken('')