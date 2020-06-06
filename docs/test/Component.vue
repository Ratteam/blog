<template>
  <div>
    <p>参考q12312afasd：<a :href="location">{{ location }}</a> </p>
    <div v-html="html"/>
  </div>
</template>

<script>

export default {
  props: ['TOC'],
  created () {
    this.location = window.location
  },
}

</script>