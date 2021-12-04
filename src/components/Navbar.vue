<template>
    <nav>
        <div class="nav-left">
            <router-link to="/"><img src="../assets/logo.png" class="logo"></router-link> 
                <div class="search-box">
                    <img src="../assets/search.png" alt="">
                    <input type="text" placeholder="Search">
                </div>

        </div>
        <div class="nav-right">
            <ul>
                <li><img src="../assets/notification.png"></li>
                <li><img src="../assets/inbox.png"></li>
                <li><img src="../assets/video.png"></li>
            </ul>

        <div class="nav-user-icon online" @click="settingsMenuToggle()">
            <img src="../assets/profile-pic.png">
        </div> 
        </div>

        <div class="settings-menu">
            <div id="dark-btn" @click="darkBtn()">
                <span> </span>
            </div>
            <div class="settings-menu-inner">
                <div class="user-profile">
                    <img src="../assets/profile-pic.png">
                    <div>
                        <p>John Nicholson</p>
                        <a href="#"> See your profile</a>
                    </div>
                </div>
                <hr>
                <div class="user-profile">
                    <img src="../assets/feedback.png">
                    <div>
                        <p>Give Feedback</p>
                        <a href="#">Help us to improve the new design</a>
                    </div>
                </div>  
                <hr>
                <div class="settings-links">
                    <img src="../assets/setting.png" class="settings-icon">
                    <a href="#">Settings & Privacy <img src="../assets/arrow.png" ></a>
                </div>
                <div class="settings-links">
                    <img src="../assets/help.png" class="settings-icon">
                    <a href="#">Help & Support <img src="../assets/arrow.png" ></a>
                </div>
                <div class="settings-links">
                    <img src="../assets/display.png" class="settings-icon">
                    <a href="#">Display & Accessibility <img src="../assets/arrow.png" ></a>
                </div>
                <div class="settings-links">
                    <img src="../assets/logout.png" class="settings-icon">
                    <a href="#">Logout <img src="../assets/arrow.png" ></a>
                </div>

            </div>
        </div>

    </nav>
</template>
<script>
export default {
    setup() {
        return{
          //  
        }
    },
    methods:{
    settingsMenuToggle: function (){
        var settingsmenu = document.querySelector(".settings-menu");
        settingsmenu.classList.toggle("settings-menu-height");
    },
    darkBtn: function(){
        var darkBtn = document.getElementById("dark-btn");
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

      

    },

    }
}
</script>
<style>
nav{
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: var(--nav-color);
  padding: 5px 5%;
  position: sticky;
  top: 0;
  z-index: 100;
}
.logo{
  width: 160px;
  margin-right: 45px;
}
.nav-left, .nav-right{
  display: flex;
  align-items: center;
}
.nav-right ul li{
  list-style:none;
  display: inline-block;
}
.nav-right ul li img{
  width:27px;
  margin: 0 15px;
  align-items: center;
}
.nav-right ul{
margin-bottom: 0rem;
}
.nav-user-icon img{
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.search-box{
  background: #053244;
  width: 350px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.search-box img{
  width:18px;
}
.search-box input{
  width: 100%;
  background: transparent;
  padding: 10px;
  outline: none;
  border: 0;
}
.online{
  position: relative;
}
.online::after{
  content: '';
  width: 10px;
  height: 10px;
  border: 2px solid #fff;
  border-radius: 50%;
  background: #41db51;
  position: absolute;
  top: 0;
  right: 0;
}
.settings-menu{
  position: absolute;
  width:90%;
  max-width: 350px;
  background: var(--bg-color);
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.4);
  border-radius: 4px;
  overflow: hidden;
  top: 108%;
  right: 5%;
  max-height: 0;
  transition: max-height 0.3s;
}
.settings-menu-height{
    max-height: 450px;
}
.user-profile a{
    font-size: 12px;
    color: #1876f2;
    text-decoration: none;
}
.settings-menu-inner{
    padding: 20px;
}
.settings-menu hr{
    border: 0;
    height: 1px;
    background: #9a9a9a;
    margin: 15px 0;
}
.settings-links{
    display: flex;
    align-items: center;
    margin: 15px 0;
}
.settings-links .settings-icon{
    width: 38px;
    margin-right: 10px;
    border-radius: 50%;
}
.settings-links img{
    width: 10px;
}
.settings-links a{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #626262;
}
#dark-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    background: #ccc;
    width: 45px;
    border-radius: 15px;
    padding: 2px 3px;
    cursor: pointer;
    display: flex;
    transition: padding-left 0.5s, background 0.5s;
}
#dark-btn span{
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
}
#dark-btn.dark-btn-on{
    padding-left: 23px;
    background: #0a0a0a;
}
</style>