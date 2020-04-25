<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const secret= require('../../../config/secret.js');// 秘钥
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
    }
    new Valine({
      el: '#vcomments' ,
      appId: secret.appId,// your appId
      appKey: secret.appKey, // your appKey
      notify:false, 
      verify:false, 
      avatar:'mm', 
      placeholder: '快来说点什么吧！' 
    });
  },
}
</script>