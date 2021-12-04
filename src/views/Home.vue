<template>
<Navbar/>
  <div class="container-fluid">
    <LeftSidebar/>
    <MainContent/>
    <RightSidebar/>
  </div>
  <div class="footer">
    <p> Copyright 2021 - XYZ </p>
  </div>

</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import LeftSidebar from '@/components/LeftSidebar.vue'
import RightSidebar from '@/components/RightSidebar.vue'
import MainContent from '@/components/MainContent.vue'


export default {
  name: 'Home',
  components: {
    Navbar,
    LeftSidebar,
    RightSidebar,
    MainContent,
    
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-fluid{
  display: flex;
  justify-content: space-between;
  padding: 13px 5%;
  margin: auto;
}
.footer{
  text-align: center;
  color: #9a9a9a;
  padding: 10px 0 20px;
  font-size: 13px;
}


</style>
