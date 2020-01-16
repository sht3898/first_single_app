import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

// Setup Firebase
// Do change to your own firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCiXnDfx1zDrmqKTFqs8qC2EJk9UsXO53g",
	authDomain: "firstproject-eb20a.firebaseapp.com",
	databaseURL: "https://firstproject-eb20a.firebaseio.com",
	projectId: "firstproject-eb20a",
	storageBucket: "firstproject-eb20a.appspot.com",
  };
firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

export default {
	getPosts() {
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						// data.created_at = new Date(data.created_at.toDate())
						var year = data.created_at.substr(0, 2)
						var month = data.created_at.substr(2, 2)
						var day = data.created_at.substr(4, 2)
						data.created_at = new Date(year, month, day)
						return data
					})
				})
	},
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
				.orderBy('created_at', 'desc')
				.get()
				.then((docSnapshots) => {					
					return docSnapshots.docs.map((doc) => {
						let data = doc.data()
						// data.created_at = new Date(data.created_at.toDate())
						var year = data.created_at.substr(0, 2)
						var month = data.created_at.substr(2, 2)
						var day = data.created_at.substr(4, 2)
						data.created_at = new Date(year, month, day)
						return data
					})
				})
	},
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	}
}