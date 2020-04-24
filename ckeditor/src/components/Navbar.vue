
<template>
     <v-toolbar  color="teal lighten-3" dark>
        <v-btn icon @click="back">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title>Reboot Academy Task App</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="create">
        <v-icon>mdi-table-edit</v-icon>
      </v-btn>
      <v-btn icon @click="logout">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>

    </v-toolbar>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    },
    create () {
      this.$router.push('/create')
    },
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
