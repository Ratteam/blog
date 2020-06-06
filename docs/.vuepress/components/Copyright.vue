<template>
  <div>
    <p>参考：<a :href="location">{{ location }}</a> </p>
    <div v-html="html"/>
  </div>
</template>

<script>

export default {
  props: ['html'],
  created () {
    this.location = window.location
  },
}

</script>