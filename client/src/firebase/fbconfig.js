import firebase from 'firebase';
import "firebase/auth";


var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  console.log(firebaseConfig)


  class Firebase {

      constructor(){
        firebase.initializeApp(firebaseConfig);
        this.firebaseAuth=firebase.auth()
        this.firebase = firebase        
      }

      async signIn(email,password){
        try {
          await this.firebaseAuth.signInWithEmailAndPassword(email,password)
          return true
        }
        catch {
          return false
        }
      }
      
      signOut(){
          this.firebaseAuth.signOut()
      }

  }


  export default new Firebase()
