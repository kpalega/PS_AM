<template>
    <div class="main-content">

      <div class="write-post-container">
        <div class="user-profile">
          <img src="../assets/profile-pic.png">
          <div>
            <p>John Nicholson</p>
          </div>
        </div>

        <div class="post-input-container"  >
          <form @submit.prevent="onSubmit">
            <textarea v-model="form.text" rows="4" placeholder="What's on your mind, John?" required ></textarea>
            <label for="select">What's a category?</label>
            <select id="select" class="form-select" v-model="form.category" required>
              <option value="GameDev">GameDev</option>
              <option value="IT">IT</option>
              <option value="Database-Managment">Database-Managment</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Network Engineer">Network Engineer</option>
              <option value="WEB Development">WEB Development</option>
              <option value="Remote Work">Remote Work</option>
            </select>
            <br/>
            <div class="d-flex flex-row justify-content-center p-2" v-if="imageData != null">                     
              <img  v-if="img1 != null" class="post-img" :src="img1">
              <br>
            </div> 
            <div class="add-post-links">
              <div  class="col-4" >
              <input class="form-control" type="file" @change="previewImage" accept="image/*" :key="componentKey">
              </div>
              <button type="submit" @click="onUpload" class="btn btn-primary mx-2 ms-auto">Create Post</button>
            </div>
          </form>
        </div>

      </div>

      <div class="post-container" v-for="post in posts" :key="post.id">
        <div class="post-row">
          <div class="user-profile">
            <img src="../assets/profile-pic.png">
              <div>
                <p>John Nicholson</p>
                <span>{{formatDate(post.date)}}</span>
              </div>
          </div>
          <button class="btn" @click="delPost(post.id)"><fa icon="trash" style="color:lightcoral"/></button>
        </div>
        <p class="post-text"> {{ post.text }} <br/>
          <a href=#> #{{ post.category }}</a></p>
          <img v-if="post.img != 'null'" :src="post.img" class="post-img">
          <div class="post-row">
            <div class="activity-icons">
              <div id="like"><button class="btn" @click="addLike(post)"><i class="fas fa-thumbs-up"></i> {{post.likes}}</button></div>
              <div><button class="btn"><img src="../assets/comments.png"> {{  }}</button></div>
            </div>
          </div>
      </div>

      <button type="button" class="load-more-btn">Load More</button>
     
    </div>
</template>

<script>
  import { useLoadPosts, createPost, storage, updatePost, deletePost} from '@/firebase'
  import { reactive } from 'vue'
  export default {
     methods: {
        forceReload: function (){
          this.componentKey++
          console.log("reloading")
        },
        addLike(post){
          post.likes += 1
          updatePost(post.id, post)
        },
        formatDate(date) {
          var postdate = date.toDate()
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "numeric", minute: "numeric" };
          return postdate.toLocaleDateString("en-En", options)
        },
        delPost(id){
          if (window.confirm("Do you really want to delete?")) {
            deletePost(id).then(() => {
                console.log("Document deleted!");
            })
            .catch((error) => {
                console.error(error);
            })
          }
        }, 
        async onSubmit() {
          console.log(this.img1)
          this.form.date = new Date()
          await createPost({ ...this.form })
          this.form.text = ''
          this.form.date = ''
          this.form.category = ''
          this.form.img=""
          this.img1 = null
          this.imageData = null
          this.forceReload()
        },
         
        previewImage(event) {
              this.uploadValue=0;
              this.img1=null;

              this.imageData = event.target.files[0];
              this.onUpload()
          },
        async onUpload(){
            this.img1=null;
            var uuidv4 = require('uuid/v4');
            var filename = uuidv4();

            const storageRef=storage.ref(`${filename}`).put(this.imageData);
            await storageRef.on(`state_changed`,snapshot=>{
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                },
                error=>{console.log(error.message)},
                ()=>{this.uploadValue=100;
                    storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                        this.img1 = url
                        this.form.img = url;
                    });
                }      
            );
        },
     },
     data() {
        return {
          form : reactive({ text: '', date:'', likes: 0, category: "", img:""}),
          img1: null,
          imageData: null
        };
      },
    setup() {
      const posts = useLoadPosts()
      
      return { posts }
    }
  }
</script>

<style>

.fa-thumbs-up{
  color: grey;
}


.story-gallery{
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.story{
  flex-basis: 18%;
  padding-top: 32%;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
}
.story img{
  position: absolute;
  width: 35px;
  border-radius: 50%;
  top: 10px;
  left: 10px;
  border: 5px solid #1876f2;
}
.story p{
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
.story1{
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5)),url("../assets/status-1.png");
}
.story2{
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5)),url("../assets/status-2.png");
}
.story3{
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5)),url("../assets/status-3.png");
}
.story4{
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5)),url("../assets/status-4.png");
}
.story5{
  background-image: linear-gradient(transparent, rgba(0,0,0,0.5)),url("../assets/status-5.png");
}
.story.story1 img{
  top: unset;
  left: 50%;
  bottom: 49px;
  transform: translateX(-50%);
  border: 0;
  width: 25px;
}
.write-post-container{
  width: 100%;
  background: var(--bg-color);
  border-radius: 6px;
  padding: 20px;
  color: #626262;
}
.user-profile{
  display: flex;
  align-items: center;
}
.user-profile img{
  width: 45px;
  border-radius: 50%;
  margin-right: 10px;
}
.user-profile p{
  margin-bottom: -5px;
  font-weight: 500;
  color: #626262;
}
.user-profile small{
  font-size: 12px;
}
.post-input-container{
  padding-left: 55px;
  padding-right: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.post-input-container textarea{
  width: 100%;
  border: 0;
  outline: 0;
  border-bottom: 1px solid #ccc;
  background: transparent;
  resize: none; 
}
.add-post-links{
  display: flex;
  margin-top: 10px;
}
.add-post-links a{
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #626262;
  margin-right: 30px;
  font-size: 13px;
}
.add-post-links a img{
  width: 20px;
  margin-right: 10px;
}
.post-container{
  width: 100%;
  background: var(--bg-color);
  border-radius: 6px;
  padding: 20px;
  color: #626262;
  margin: 20px 0;
}
.user-profile span{
  font-size: 13px;
  color: #9a9a9a;
}
.post-text{
  color: #9a9a9a;
  margin: 15px 0;
  font-size: 15px;
}
.post-text span{
  color: #626262;
  font-weight: 500;
}
.post-text a{
  color: #1876f2;
  text-decoration: none;
}
.post-img{
  width: 100%;
  border-radius: 4px;
  margin-bottom: 5px;
}
.post-row{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.activity-icons div img{
  width: 18px;
  margin-right: 10px;
}
.activity-icons div{
  display: inline-flex;
  align-items: center;
  margin-right: 30px;
}
.post-profile-icon{
  display: flex;
  align-items: center;
}
.post-profile-icon img{
  width: 20px;
  border-radius: 50%;
  margin-right: 5px;
}
.post-row a{
  color: #9a9a9a;
}
.load-more-btn{
  display: block;
  margin: auto;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #9a9a9a;
  color: #626262;
  background: transparent;
  border-radius: 4px;
}
</style>