
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYtjLolRShLkmrWZdSAYc2P2Ga1M3Z9j4",
    authDomain: "formdata-62062.firebaseapp.com",
    databaseURL: "https://formdata-62062-default-rtdb.firebaseio.com",
    projectId: "formdata-62062",
    storageBucket: "formdata-62062.appspot.com",
    messagingSenderId: "570153245232",
    appId: "1:570153245232:web:6f70dbcf53f207bb936bf5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
