import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./fireBaseServicer";

//a
class TutorUser {
    constructor(docData) {
      this.name = docData.name;
      this.bio = docData.bio;
      this.pic = "placeholder";
      this.classTakenList = docData.classTakenList;
      this.grade = docData.grade;
      this.contactEmail = docData.contactEmail
    }
  }

var searchResults = []

export async function searchData(searchQuery) {
  const dbRef = collection(db, "Users");
  const rQuery = query(dbRef, where("classTakenList", "array-contains", searchQuery));
  const querySnapShot = await getDocs(rQuery);
  const searchData = [];


  querySnapShot.forEach((doc) => {
    const user = new TutorUser(doc.data())
    searchData.push(user)
  });

  console.log("searchData")
    console.log(searchData)

  return searchData;
}

export async function defaultData() {
  const dbRef = collection(db, "Users");
  
  const querySnapShot = await getDocs(dbRef);
  const searchData = [];


  querySnapShot.forEach((doc) => {
    const user = new TutorUser(doc.data())
    searchData.push(user)
  });

  console.log("searchData")
    console.log(searchData)

  return searchData;
}
