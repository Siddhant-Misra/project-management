import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyANy1IVhtlTiTA1VIcLC01WKEtGtVdpcPQ",
  authDomain: "sidd-dashboard.firebaseapp.com",
  databaseURL: "https://sidd-dashboard.firebaseio.com",
  projectId: "sidd-dashboard",
  storageBucket: "sidd-dashboard.appspot.com",
  messagingSenderId: "664821875572",
  appId: "1:664821875572:web:166aec91a5e9c550"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 