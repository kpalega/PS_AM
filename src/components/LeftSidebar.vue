<template>
    <div class="left-sidebar">
      <div class="imp-links">
        <a><router-link to="#"><img src="../assets/news.png">Latest News</router-link></a>
        <a><router-link to="#"><img src="../assets/friends.png">Friends</router-link></a>
        <a><router-link to="#"><img src="../assets/group.png">Group</router-link></a>
        <a><router-link to="#"><img src="../assets/marketplace.png">Market</router-link></a>
        <a><router-link to="#"><img src="../assets/watch.png">Watch</router-link></a>
        <a><router-link to="#">See More</router-link></a>
      </div>
      <div class="shortcut-links">
        <p>Twoje grupy</p>
        <a><router-link to="#"><img src="../assets/shortcut-1.png"> Web Developers </router-link></a>
        <a><router-link to="#"><img src="../assets/shortcut-2.png"> Web Design Course </router-link></a>
        <a><router-link to="#"><img src="../assets/shortcut-3.png"> Full Stack Development </router-link></a>
        <a><router-link to="#"><img src="../assets/shortcut-4.png"> Website Experts </router-link></a>
      </div>
    </div>
</template>
<style>
.left-sidebar{

  flex-basis: 25%;
  position: sticky;
  top: 70px;
  align-self: flex-start;
  
}

.main-content{
  flex-basis: 47%;
}
.imp-links a, .shortcut-links a{
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  color: #626262;
  width: fit-content;
}
.imp-links a img{
  width: 25px;
  margin-right: 15px;
}
.imp-links a:last-child{
  color: #1876f2;
}
.imp-links{
  border-bottom: 1px solid #ccc ;
}
.shortcut-links a img {
  width: 40px;
  border-radius: 4px;
  margin-right: 15px;
}
.shortcut-links p{
  margin: 25px 0;
  color: #626262;
  font-weight: 500;
}
</style>