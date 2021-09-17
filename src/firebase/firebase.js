import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAs1jm1rhygtDi12Cm7iyjIXhfx-lO48dQ',
	authDomain: 'converse-puneet.firebaseapp.com',
	databaseURL: 'https://converse-puneet-default-rtdb.firebaseio.com',
	projectId: 'converse-puneet',
	storageBucket: 'converse-puneet.appspot.com',
	messagingSenderId: '305834478170',
	appId: '1:305834478170:web:7c020cbeb4a32e4f2e6663',
	measurementId: 'G-5F61GB4D0Q',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
