<template>
    <div class="right-sidebar">

      <div class="sidebar-title">
        <h4>Events</h4>
        <a><router-link to="#">See All</router-link></a>  
      </div> 

      <div class="event">
        <div class="left-event">
          <h3>18</h3>
          <span>March</span>
        </div>
        <div class="right-event">
          <h4>Social Media</h4>
          <p><img src="../assets/location.png">Willson Tech Park</p>
          <a><router-link to="#">More Info</router-link></a>
        </div>
      </div>
      <div class="event">
        <div class="left-event">
          <h3>22</h3>
          <span>June</span>
        </div>
        <div class="right-event">
          <h4>Mobile Marketing</h4>
          <p>Willson Tech Park</p>
          <a><router-link to="#">More Info</router-link></a>
        </div>
      </div>
      <div class="sidebar-title">
        <h4>Advertisement</h4>
        <a><router-link to="#">Close</router-link></a>  
      </div> 
      <img src="../assets/advertisement.png" style="width: 100%; margin-bottom: 20px; border-radius: 4px;">

      <div class="sidebar-title">
        <h4>Conversation</h4>
        <a><router-link to="#">Hide Chat</router-link></a>  
      </div>

      <div class="online-list">
        <div class="online">
          <img src="../assets/member-1.png">
        </div>
        <p>Alison Mina</p>
      </div>
      <div class="online-list">
        <div class="online">
          <img src="../assets/member-2.png">
        </div>
        <p>Jackson Aston</p>
      </div>
      <div class="online-list">
        <div class="online">
          <img src="../assets/member-3.png">
        </div>
        <p>Samona Rose</p>
      </div>

    </div>  
</template>
<style >
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
.left-event{
  border-radius: 10px;
  height: 75px;
  width: 65px;
  margin-right: 15px;
  padding-top: 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
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