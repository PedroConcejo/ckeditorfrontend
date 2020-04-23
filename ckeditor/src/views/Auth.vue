<template>
  <div>
    <v-row>
      <v-col cols="6"
        offset="5">
        <h1 id="title">Welcome to Reboot Academy Wallpaper App</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3"  offset="3">
        <Login />
      </v-col>
      <v-col cols="3">
        <Signup />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default {
  components: {
    Login,
    Signup
  }
}
</script>

<style lang="scss" scoped></style>
