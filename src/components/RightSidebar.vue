<template>
    <div class="right-sidebar">

      <div class="sidebar-title">
        <h4>Posts on platform</h4>
        <a><router-link to="#">See All</router-link></a>
      </div> 
      <div class="event">

        <div class="left-event">
          <h5>All post on platform</h5>
        </div>
        <div class="right-event" :key="componentKey">
          <h3> {{sizeAll}}</h3>
        </div>
      </div>
      <div class="event">
        <div class="left-event">
          <h5>Post on month</h5>
        </div>
        <div class="right-event" :key="componentKey"> 
          <h3>{{sizeMonth}}</h3>
        </div>
      </div>
      <div class="sidebar-title">
        <h4>Advertisement</h4>
        <a><router-link to="#">Close</router-link></a>
      </div> 
      <img src="../assets/advertisement.png" style="width: 100%; margin-bottom: 20px; border-radius: 4px;">

    
      <div class="sidebar-title">
        <h4>Advertisement</h4>
        <a><router-link to="#">Close</router-link></a>
      </div> 
      <img src="../assets/advertisement.png" style="width: 100%; margin-bottom: 20px; border-radius: 4px;">
      <button @click="forceReload()">Reloa</button>
    </div>
</template>

<script>
  import { postsCollection} from '@/firebase'
  export default {  
    data() {
      return {
        sizeAll:  postsCollection.onSnapshot(snap =>{
            this.sizeAll = snap.size;
          }),
        sizeMonth: postsCollection.where("date",'>=',this.startMonth).onSnapshot(snapshot => {
             this.sizeMonth = snapshot.size
          }),
        componentKey: 0,
      };
    }, 
    methods:{
        forceReload: function (){
          this.componentKey++
          console.log("reloading")
        }
    },
    setup(){
      var date =  new Date();
      var startMonth = new Date(date.getFullYear(),date.getMonth(),1)
      return{ startMonth }
    }
    }
    
</script>


<style >
.right-event{
  color:#1876f2;
  margin-left: auto; 
  margin-right: 1px;
  padding: 2px;
}
.event{
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  background: transparent;
}
.right-sidebar{
  flex-basis: 25%;
  position: sticky;
  top: 70px;
  align-self: flex-start;
  background: var(--bg-color);
  padding: 20px;
  border-radius: 4px;
  color: #626262;
}
.sidebar-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.sidebar-title h4{
  font-weight: 600;
  font-size: 16px;
}
.sidebar-title a{
  text-decoration: none;
  color: #1876f2;
  font-size: 12px;
}
.event{
  display: flex;
  font-size: 14px;
  margin-bottom: 20px;
}
.event p{
  font-size: 12px;
}

.event img{
  width: 10px;
}
.event a{
  font-size: 12px;
  text-decoration: none;
  color: #1876f2;
}
.left-event span{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1876f2;
  color: #fff;
  font-size: 10px;
  padding: 4px 0;
}
.sidebar-ads{
  width: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
}
.online-list{
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.online-list .online img{
  width: 40px;
  border-radius: 50%;
}
.online-list .online{
  width:40px;
  border-radius: 50%;
  margin-right: 15px;
}
.online-list .online::after{
  top: unset;
  bottom: 4px;
}
.right-sidebar h4{
  font-weight: 600;
  font-size: 16px;
}
p{
    margin-bottom: 0;
}
</style>