// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "paymaven.firebaseapp.com",
	projectId: "paymaven",
	storageBucket: "paymaven.firebasestorage.app",
	messagingSenderId: "1043157602085",
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: "G-Q0YSWSL2SM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
