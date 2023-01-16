import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDHWkuedsNvVwCgG0kRAwVYPvec5-OsExc',
	authDomain: 'blog-nico-27030.firebaseapp.com',
	projectId: 'blog-nico-27030',
	storageBucket: 'blog-nico-27030.appspot.com',
	messagingSenderId: '223044841588',
	appId: '1:223044841588:web:82b44f9b8d1232432a2121',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
