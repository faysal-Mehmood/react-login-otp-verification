import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCqN_fiETSjNX4hj2RROXON4ntDgr4Ca_E',
  authDomain: 'react-login-otp-auth.firebaseapp.com',
  projectId: 'react-login-otp-auth',
  storageBucket: 'react-login-otp-auth.appspot.com',
  messagingSenderId: '899897446578',
  appId: '1:899897446578:web:0f96d5365a6c5d4612f9ab',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
