<template>
  <div id="vcomments"></div>
  <!-- <span id="<Your/Path/Name>" class="leancloud_visitors" data-flag-title="Your Article Title">
    <em class="post-meta-item-text">阅读量</em>
    <i class="leancloud-visitors-count">1000000</i>
  </span> -->
</template>

<script>
export default {
  name: "Valine",
  mounted: function() {
    // require window
    const secret = require("../../../config/secret.js"); // 秘钥
    const Valine = require("valine");
    if (typeof window !== "undefined") {
      this.window = window;
      window.AV = require("leancloud-storage");
    }
    new Valine({
      el: "#vcomments",
      appId: secret.appId, // your appId
      appKey: secret.appKey, // your appKey
      notify: false,
      verify: false,
      avatar: "mm",
      // visitor: true, // 阅读量统计
      placeholder: "快来说点什么吧！"
    });
  }
};
</script>