<template>
  <div>
    <ul v-for="feature in features" class="list">
      <a v-if="feature.url" class="btn btn-primary btn-ghost" :href="feature.url">
        {{ feature.name }}
      </a>
      <router-link v-else-if="feature.path" class="btn btn-primary btn-ghost" :to="feature.path">
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
            name: 'Image Uploader',
            path: '/i'
          },
          {
            name: 'Chat Logs',
            url: '//logs.nuuls.com'
          }
        ]
      }
    }
  }
</script>

<style scoped>
</style>
