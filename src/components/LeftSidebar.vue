<template>
    <div class="left-sidebar">
      <div class="imp-links">
        <a href='#'><h3>Categories</h3></a>
        <a href='#'><fa id="game-dev" icon="gamepad"/>GameDev</a>
        <a href='#'><fa id="laptop" icon="laptop"/>IT</a>
        <a href='#'><fa id="server" icon="server"/>Database-Managment</a>
        <a href='#'><fa id="graphic" icon="paint-roller"/>Graphic Designer</a>
        <a href='#'><fa id="network" icon="network-wired"/>Network Engineer</a>
        <a href='#'><fa id="web" icon="pager"/>WEB Development</a>
        <a href='#'><fa id="work" icon="laptop-house"/>Remote IT Work</a>
      </div>
    </div>
</template>

<style>

#scroll-down{
  margin-left: 10px;
}
#game-dev, #server, #work, #laptop, #network, #graphic, #web{
  margin-right: 10px;
  color:#1876f2
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