<template>
    <div id="app">
        <v-text-field label="Tittle" v-model="tittle"></v-text-field>
        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
     <v-card-actions>
        <v-btn color="info" @click="save">Save</v-btn>
      </v-card-actions>
    </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import APIServices from '../services/Api'

export default {
  name: 'app',
  data () {
    return {
      tittle: '',
      editor: ClassicEditor,
      editorData: '<p>Content of the editor.</p>',
      editorConfig: {
        // The configuration of the editor.
      }
    }
  },
  methods: {
    save () {
      const newtask = {
        tittle: this.tittle,
        task: this.editorData
      }
      APIServices.createTask(newtask)
        .then(response => {
          this.$router.push('/home')
        })
        .catch(err => console.log(err))
    }
  }
}

</script>
