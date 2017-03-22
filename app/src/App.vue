<template>
  <div id="app">
    <img src="https://i.imgur.com/xap40eS.png" @click="root()" class="center big-img">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    root () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

.big-img {
  max-width: 70%;
  max-height: 15rem;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
