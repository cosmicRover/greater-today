import firebase from 'firebase'
import firebaseConfig from './keys.js'

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;