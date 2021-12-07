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
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')

// user methods //
export const createUser = user => {
    return usersCollection.add(user)
}

// post methods //

export const createPost = post => {
    return postsCollection.add(post)
}
  
export const getPost = async id => {
    const post = await postsCollection.doc(id).get()
    return post.exists ? post.data() : null
}
  
export const updatePost = (id, post) => {
    return postsCollection.doc(id).update(post)
}
  
export const deletePost = id => {
    return postsCollection.doc(id).delete()
}
  
export const useLoadPosts = () => {
    const posts = ref([])
    const close = postsCollection.orderBy('date','desc').onSnapshot(snapshot => {
      posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return posts
}

export const sortPostByCategory = category => {
    const posts = ref([])
    const close = postsCollection.where("category","==",category).orderBy('date','desc').onSnapshot(snapshot => {
      posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return posts
}

// comment methods //

export const createComment = comment => {
    return commentsCollection.add(comment)
}
  
export const getComment = async id => {
    const comment = await commentsCollection.doc(id).get()
    return comment.exists ? comment.data() : null
}
  
export const updateComment = (id, comment) => {
    return commentsCollection.doc(id).update(comment)
}
  
export const deleteComment = id => {
    return commentsCollection.doc(id).delete()
}
  
export const CommentsByPost = idPost => {
    const comment = ref([])
    const close = commentsCollection.where("idPost",'==', idPost).onSnapshot(snapshot => {
      comment.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return comment
}

export const countComments = idPost => {
    var size = 0
    commentsCollection.where("idPost",'==', idPost).get().then(snap => size = snap.size )
    console.log(size)
    return size;
}


export {
    db,
    auth,
    storage,
    usersCollection,
    postsCollection,
    commentsCollection
}
