import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDtEJcMoLemFFPiNaTquRMAaVR9vID2XOo",
    authDomain: "blogcms-4ae20.firebaseapp.com",
    projectId: "blogcms-4ae20",
    storageBucket: "blogcms-4ae20.appspot.com",
    messagingSenderId: "7304222168",
    appId: "1:7304222168:web:69c55180df29c2d6e20ead",
    measurementId: "G-QWBVCTV2S1"
  };
const    app  = initializeApp(firebaseConfig);

//const analytics = getAnalytics(app);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()


