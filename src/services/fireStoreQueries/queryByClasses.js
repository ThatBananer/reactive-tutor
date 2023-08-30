import { collection, doc, setDoc } from "firebase/firestore"; 

const TutorsRef = collection(db, "Tutors")

async function queryTutorOnClassesTaken(token) {
    tokenClean = token.replace(/\s/g, '')
    
}