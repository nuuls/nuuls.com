<template>
  <div>
    <ul v-for="item in media" class="list">
      <a class="btn btn-success" :href="item.url">
        {{ item.name }}
      </a>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Social',
    data () {
      return {
        media: [
          {
            name: 'Twitter @nuulss',
            url: 'https://twitter.com/nuulss'
          },
          {
            name: 'Github @nuuls',
            url: 'https://github.com/nuuls'
          },
          {
            name: 'Twitch @nuuls',
            url: 'https://twitch.tv/nuuls'
          },
          {
            name: 'Discord nuuls#2625'
          }
        ]
      }
    }
  }
</script>
<style scoped>
</style>
