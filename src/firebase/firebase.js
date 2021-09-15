import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	//your config
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
