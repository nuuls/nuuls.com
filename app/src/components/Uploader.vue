<template>
  <div style="width: 70%">
    <div class="max-70" @dragover.prevent @drop="drop">
      <h1> Upload Memes </h1>
      <div class="buttons btn-group grid">
        <input id="file-picker" class="hidden" type="file" @change="processFile($event)">
        <label id="btn-choose-file" for="file-picker" class="button btn btn-primary btn-block"> Choose File </label>
        <div class="divider"/>
        <button id="btn-upload" class="button btn btn-block" v-bind:class="{ 'btn-success': file, 'btn-default': file }" @click="upload()">
          <div v-show="loading" v-bind:class="{ loading }"/>
          {{ file ? 'Upload' : 'You must Choose a File first' }}
        </button>
        <div style="width: 100%" v-show="url.length">
          <div class="divider"/>
          <button @click="copyUrl" class="btn btn-success">Copy</button>
          <div class="divider-right"/>
          <input id="url-bar" ref="urlBar" type="text" :value="url" v-show="url.length">
        </div>
        <div v-show="error.length" class="btn btn-block btn-error">
          {{ error }}
        </div>
      </div>
      <div class="progress-bar" v-show="loading">
        <div class="progress-bar-filled" v-bind:style="{ width: loadingPercent + '%' }"></div>
      </div>
      <hr>
      <h3> {{ file ? file.name : 'no file selected' }} </h3>
      <img v-show="file && file.type.match(/image\/.+/)" class="preview" :src="preview">
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      file: undefined,
      preview: '',
      url: '',
      loadingPercent: 0,
      loading: false,
      error: ''
    }
  },
  methods: {
    upload () {
      if (!this.file) {
        return
      }
      console.log('uploading', this.file)
      this.loading = true
      let data = new FormData()
      data.append('file', this.file)
      this.$http.post('https://i.nuuls.com/upload?password=ayylmao', data, { progress: this.updateProgress })
      .then(res => {
        console.log(res)
        this.loading = false
        this.loadingPercent = 0
        if (res.status === 200) {
          this.url = res.body
          return
        }
        if (res.status >= 400 && res.status < 500) {
          this.error = `i.nuuls.com returned status ${res.status}. Try another file`
        } else {
          this.error = 'i.nuuls.com is down, try again later'
        }
      })
      .catch(err => {
        console.error('scuffed server', err)
      })
    },
    updateProgress (ev) {
      console.log(ev)
      this.loadingPercent = ev.loaded / ev.total * 100
    },
    createFile (file) {
      this.file = file
      let reader = new FileReader()
      reader.onloadend = () => {
        this.preview = reader.result
      }
      reader.readAsDataURL(this.file)
    },
    processFile (ev) {
      this.createFile(ev.target.files[0])
    },
    paste (ev) {
      console.log(ev)
      this.createFile(ev.clipboardData.files[0])
    },
    drop (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      this.createFile(ev.dataTransfer.files[0])
    },
    dragOver (ev) {
      ev.preventDefault()
    },
    copyUrl () {
      let el = this.$refs.urlBar
      console.log(el)
      el.select()
      try {
        let gotEm = document.execCommand('copy')
        console.log(gotEm)
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted () {
    document.onpaste = this.paste
  }
}

</script>
<style scoped>
.hidden {
  display: none;
}

.divider {
  width: 100%;
  height: 1em;
  display: inline-block;
}

.divider-right {
  height: auto;
  width: 1em;
  display: inline-block;
}

.preview {
  display: block;
  margin: auto;
  max-width: 70%;
  max-height: 60%;
}

.buttons {
  max-width: 70%;
  margin: auto;
}

.max-70 {
  max-width: 90%;
  margin: auto;
}

#url-bar {
  padding: 5px;
  overflow: hidden;
}
</style>
