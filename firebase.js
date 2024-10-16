import { initializeApp, cert } from "firebase-admin/app";
import { getDatabase } from "firebase-admin/database";

import serviceAccount from "./serviceAccountKey.json";

initializeApp({
  credential: cert(serviceAccount),
  databaseURL:
    "https://dyner-a395a-default-rtdb.europe-west1.firebasedatabase.app/",
});

const db = getDatabase();

export default db;
