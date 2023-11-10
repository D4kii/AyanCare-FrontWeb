import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDsbIG9-WXeIXeXkz8-WshhReJ2chFbq5w",
    authDomain: "ayancare-mobilecuidador.firebaseapp.com",
    projectId: "ayancare-mobilecuidador",
    storageBucket: "ayancare-mobilecuidador.appspot.com",
    messagingSenderId: "539555106935",
    appId: "1:539555106935:web:1547ed601a82121ee33672",
    measurementId: "G-PPGZ7V3G4K"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)