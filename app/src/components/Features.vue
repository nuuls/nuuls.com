<template>
  <div>
    <ul v-for="feature in features" class="list">
      <a class="btn btn-primary btn-ghost" :href="feature.url">
        {{ feature.name }}
      </a>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Features',
    data () {
      return {
        features: [
          {
            name: 'Chat Logs',
            url: '//logs.nuuls.com'
          },
          {
            name: '4 Letter Twitch Usernames',
            url: '//nuuls.com/names'
          },
          {
            name: '5 Letter Twitch Usernames',
            url: '//nuuls.com/names5'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
