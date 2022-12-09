import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyAvQXoWFMcp0CfV1lpNa-SrndzI9iYYoQE",
	authDomain: "roysmanfohub.firebaseapp.com",
	projectId: "roysmanfohub",
	storageBucket: "roysmanfohub.appspot.com",
	messagingSenderId: "626407670058",
	appId: "1:626407670058:web:4ea3640ac9a3bcec455e53",
	measurementId: "G-KB326F325K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;