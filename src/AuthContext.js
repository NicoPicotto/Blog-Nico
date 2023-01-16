import { useEffect, useState, createContext, useContext } from 'react';
import {
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const signIn = (loginEmail, loginPassword) => {
		return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
	};

	const logout = () => {
		return signOut(auth);
	};

	useEffect(() => {
		const unsuscribed = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
		return () => {
			unsuscribed();
		};
	}, []);

	return (
		<UserContext.Provider value={{ user, logout, signIn }}>
			{children}
		</UserContext.Provider>
	);
};
export const UserAuth = () => {
	return useContext(UserContext);
};
