<template>
    <div class="left-sidebar">
      <div class="imp-links">
        <a><router-link to="#"><h3>Categories</h3></router-link></a>
        <a><router-link to="#"><fa id="game-dev" icon="gamepad"/>GameDev</router-link></a>
        <a><router-link to="#"><fa id="laptop" icon="laptop"/>IT</router-link></a>
        <a><router-link to="#"><fa id="server" icon="server"/>Database-Managment</router-link></a>
        <a><router-link to="#"><fa id="graphic" icon="paint-roller"/>Graphic Designer</router-link></a>
        <a><router-link to="#"><fa id="network" icon="network-wired"/>Network Engineer</router-link></a>
        <a><router-link to="#"><fa id="web" icon="pager"/>WEB Development</router-link></a>
        <a><router-link to="#"><fa id="work" icon="laptop-house"/>Remote IT Work</router-link></a>
      </div>
    </div>
</template>

<style>

#scroll-down{
  margin-left: 10px;
}
#game-dev, #server, #work, #laptop, #network, #graphic, #web{
  margin-right: 10px;
}
.left-sidebar{

  flex-basis: 15%;
  position: sticky;
  top: 80px;
  align-self: flex-start;
  
}

.main-content{
  flex-basis: 55%;
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