import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: 'AIzaSyC4xMwppROmIRUmji9fdBTOZB5-vsDFxJQ',
  authDomain: 'todolist-akmal.firebaseapp.com',
  projectId: 'todolist-akmal',
  storageBucket: 'todolist-akmal.firebasestorage.app',
  messagingSenderId: '380247332849',
  appId: '1:380247332849:web:b8a257a7f737e6ef4f5650',
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
