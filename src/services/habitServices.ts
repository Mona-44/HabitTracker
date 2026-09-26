import {collection, doc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy, limit} from "firebase/firestore";
import { db } from "../config/firebase";

//Firebase  References
// colllection() - Reference a collection
// doc() - Reference a specific document

// FireStore Operations
//setDoc() - Create a document with a custom document ID
//addDoc() - Create a document wwith an automatically generated document ID
//updateDoc() - Update specific fields in an existing document.
//deleteDoc() - Delete an existing document
//getDoc() - Get one specific document
//getDocs() - Get multiple documents from a collection
// onSnapshot() - Get data and listen for real-time changes.


export const createHabitWithCustonId= async() => {
    try {
        const habitsRef= doc(db,"habits", "habit001");

        await setDoc(habitsRef, {
            user:"user001",
            title:"Drink Water",
            category:"Healthy",
            target:"5 glasses",
            frequency:"Daily"
        })
        console.log("Created document with Custom Id successfully");
    } catch (error) {
        console.error("Error creating Custom Id document")
    }
}

export const createHabitWithAutoId= async() => {
    try {
        const habitsRef= collection(db,"habits", "habits");

    const result = await addDoc(habitsRef, {
            user:"user001",
            title:"Drink Water",
            category:"Healthy",
            target:"5 glasses",
            frequency:"Daily"
        })
        console.log("Created document with Auto Id successfully", result.id);
    } catch (error) {
        console.error("Error creating Custom Id document", error)
    }
} 