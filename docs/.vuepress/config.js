const pluginConf = require('../../config/pluginConf.js');
const headConf = require('../../config/headConf.js');

module.exports = {
  plugins: pluginConf,
  head: headConf,
  logo: '/icon.png',
  title: "ratfrog的博客",
  description: 'Just playing around',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上次更新时间',
    nav: [
      {
        text: '分类',
        items: [ 
          { text: '钱钱', link: '/all/qianqian/' },
          { text: '写写', link: '/all/xiexie/' },
          { text: '星星', link: '/all/xingxing/' },
          { text: '拍拍', link: '/all/paipai/' },
          { text: '翻翻', link: '/all/fanfan/' },
          { text: '画画', link: '/all/huahua/' },
          { text: '其其', link: '/all/qiqi/' },
        ]
      },
      { text: '网站', link: '/web/' },
      { text: '应用', link: '/app/' },
      { text: '电台', link: '/radio/' },
      { text: '视频', link: '/video/' },
      { text: '最新文章', link: '/all/' },
      { text: '支持打赏', link: '/more/' },
      { text: '关于我', link: '/about/' },
      { text: '照片墙', link: '/photowall/' },
      { text: '时间轴', link: '/timeline/' },
      { text: '公告板', link: '/bbs/' },
      { text: '留言板', link: '/message/' },
    ],
    sidebar: 'false' // false默认不开启侧边导航 auto开启
  }
}