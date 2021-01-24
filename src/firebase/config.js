import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBbeDqkFUZdnCn2PqRNnj015YUCw6BKquI",
  authDomain: "playlist-vue-project.firebaseapp.com",
  projectId: "playlist-vue-project",
  storageBucket: "playlist-vue-project.appspot.com",
  messagingSenderId: "862302617478",
  appId: "1:862302617478:web:3a0fd1056fd959813ef607"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }