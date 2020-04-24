<template>
  <div class="home">
    <Navbar />
    <div id="task">
      <v-card v-for="(nota, idx) in alltask" :key="idx" class="mx-4 my-4">
        <div :style="{background: nota.color}">
        <div v-html="nota.task"></div>
        <h3>{{ nota.tittle }}</h3>
          <v-btn
              color="error"
              @click="eliminar(nota._id)"
            >
             <v-icon>mdi-delete</v-icon>
              <span>Delete</span>
            </v-btn>
             <v-btn
              color="success"
              @click="edit(nota._id)"
            >
             <v-icon>mdi-table-edit</v-icon>
              <span>Edit</span>
            </v-btn>
            </div>
      </v-card>
    </div>
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
    eliminar (taskid) {
      APIServices.deleteTask(taskid).then(res => {
        location.reload()
      })
    },
    edit (taskid) {
      this.$router.push(`/edit/${taskid}`)
    }
  },
  mounted () {
    APIServices.getMyTask().then(res => (this.alltask = res))
  }
}
</script>

<style lang="scss" scoped>

#task {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>
