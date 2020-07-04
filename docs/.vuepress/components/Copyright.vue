<template>
  <div>
    作者：ratfrog
    链接：<a :href="location">{{ location }}</a> 
    来源：ratfrog的博客
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
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