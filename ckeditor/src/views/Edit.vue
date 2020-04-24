<template>
    <div id="app">
    <Navbar />
     <v-row justify="space-around">
       <v-col cols="8">
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
     <v-card-actions>
        <v-btn color="info" @click="save">Save</v-btn>
      </v-card-actions>
       </v-col>
       <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
       <v-col cols="4"> </v-col>
     </v-row>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import APIServices from '../services/Api'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  data () {
    return {
      tittle: '',
      picker: new Date().toISOString().substr(0, 10),
      task: null,
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  components: {
    Navbar
  },
  methods: {
    save () {
      const taskid = this.$route.params.taskid
      const edittask = {
        tittle: this.picker,
        task: this.editorData
      }
      APIServices.updateTask(taskid, edittask)
        .then(response => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  },
  mounted () {
    APIServices.getTaskById(this.$route.params.taskid).then(res => (this.editorData = res.task))
  }
}

</script>
