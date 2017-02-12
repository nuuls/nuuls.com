<template>
  <div>
    LUL counter {{counter}}
    <input type="button" @click="increment" class="btn btn-primary" value="+1">
  </div>
</template>
<script>

export default {
  data () {
    return {
      counter: 5
    }
  },
  methods: {
    increment: function () {
      // this.counter++
      this.$http.post('http://localhost:7333/lul/counter')
      .then(res => {
        console.log(res)
        this.counter = res.data.counter
      })
    },
    getCounter: function () {
      // this.counter++
      this.$http.get('http://localhost:7333/lul/counter')
      .then(res => {
        console.log(res)
        this.counter = res.data.counter
      })
    }
  },
  mounted () {
    console.log(this.memes)
    this.getCounter()
    this.$websocket.on('event', (msg) => {
      this.counter = msg.counter
    })
  }
}

</script>
