<template>
  <router-view/>
</template>

<style>
:root{
  --body-color: #efefef;
  --nav-color: #1876f2;
  --bg-color: #fff;
}
.dark-theme{
  --body-color: #0a0a0a;
  --nav-color: #000;
  --bg-color: #000;
}
#app {
  background: var(--body-color);
  transition: background 0.3s;
}

</style>
