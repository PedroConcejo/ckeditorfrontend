<template>
  <div class="home">
    <Navbar />
    <div v-for="(nota, idx) in alltask" :key="idx"> <div class="purple darken-2" v-html="nota.task"></div></div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import APIServices from '../services/Api'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'Home',
  data () {
    return {
      editor: ClassicEditor,
      alltask: []
    }
  },
  components: {
    Navbar
  },
  methods: {
    setBg () {
      Math.floor(Math.random() * 16777215).toString(16)
    }
  },
  mounted () {
    const token = window.localStorage.token
    APIServices.getMyTask(token).then(res => (this.alltask = res))
  }
}
</script>

<style scoped>
span {
 background-color: lightblue;
}
</style>
