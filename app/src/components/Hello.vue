<template>
  <div class="center">
    <h1>{{ msg }}
      <img :style="nam" src="https://cdn.betterttv.net/emote/566ca06065dbbdab32ec054e/1x" alt="NaM">
    </h1>
    <h4> Features </h4>
    <features></features>
    <h4> Social Media </h4>
    <social></social>
  </div>
</template>

<script>

import Features from './Features'
import Social from './Social'

var nam = {
  height: '100%'
}

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to my shitty Website',
      nam: nam
    }
  },
  components: {
    Features,
    Social
  }
}

var letters = []

window.onkeydown = function (ev) {
  if (ev.key === 'Shift') return
  letters.push(ev.key.toLowerCase())
  if (letters.length > 3) {
    letters = letters.slice(1)
  }
  if (letters.join('') === 'nam') {
    nam.height = '500%'
    console.log('NaM')
    setTimeout(() => {
      nam.height = '100%'
      letters = []
    }, 1000)
  }
}
</script>

<style>
.center {
  margin: auto;
}
</style>
