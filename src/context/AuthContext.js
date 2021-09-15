import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = (props) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logout = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		signup,
		login,
		logout,
	};

	console.log('authcontext', currentUser);

	return (
		<AuthContext.Provider value={value}>
			{!loading && props.children}
		</AuthContext.Provider>
	);
};
