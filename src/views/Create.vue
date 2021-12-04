<template>
  <div class="create">
    <img alt="Vue logo" src="../assets/logo.png">
    <UserCreate/>
  </div>
</template>

<script>
// @ is an alias to /src
import UserCreate from '@/components/UserCreate.vue'

export default {
  name: "create",
  components: {
    UserCreate
  }
}
</script>
