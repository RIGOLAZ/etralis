import { firebase } from "./config";

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();
// const linkedInProvider = new firebase.auth.LinkedInAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export {googleProvider, facebookProvider, githubProvider, twitterProvider/*, linkedInProvider, githubProvider */ };