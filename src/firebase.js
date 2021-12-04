import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

import 'firebase/compat/firestore'

import 'firebase/compat/storage'


import { ref, onUnmounted } from "vue" 

const config = {
        apiKey: "AIzaSyC4GLzFsA0lYY6SnbJQ66-FUEsSWWtEVm8",
        authDomain: "ps-am-project.firebaseapp.com",
        projectId: "ps-am-project",
        storageBucket: "ps-am-project.appspot.com",
        messagingSenderId: "991156038178",
        appId: "1:991156038178:web:4ff86f07ff7fdc6bb0387b"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()

const usersCollection = db.collection('users')

export const createUser = user => {
    return usersCollection.add(user)
}

export const getUser = async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
}

export const updateUser = ( id, user ) => {
    return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
    return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
        users.value = snapshot.doc.map(doc => ({id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users;
}

export {
    db,
    auth,
    storage,
}
