module.exports = [
  // markdown中使用ts组件
  [
    'vuepress-plugin-typescript',
    {
      tsLoaderOptions: {
        // All options of ts-loader
      },
    },
  ],
  // 增加目录组件
  ['vuepress-plugin-table-of-contents'],
  // 平滑滚动组件
  ['vuepress-plugin-smooth-scroll'],
  // 顶部显示进度栏控制组件
  ['vuepress-plugin-nprogress'],
  // markdown支持TeX语法组件
  [
    'vuepress-plugin-mathjax',
    {
      target: 'svg',
      macros: {
        '*': '\\times',
      },
    },
  ],
  // 注册新的Markdown容器组件
  // 可改动该文件docs\.vuepress\styles\index.styl
  // you can use this plugin multiple times
  [
    'vuepress-plugin-container',
    {
      type: 'right',
      defaultTitle: '',
    },
  ],
  [
    'vuepress-plugin-container',
    {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
      defaultTitle: '',
    },
  ],
  // this is how VuePress Default Theme use this plugin
  [
    'vuepress-plugin-container',
    {
      type: 'tip',
      defaultTitle: '',
    },
  ],
  // 路由设置组件 
  [
    'vuepress-plugin-clean-urls',
    {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    },
  ],
  // 返回顶部组件
  '@vuepress/back-to-top',
  // 处理站点中的复制行为组件
  ['copyright', {
    disabled: false, // true:禁用组件
    minLength: 1, // 超过多少字后触发其他限制条件
    noCopy: false, // true:禁止复制
    noSelect: false, // true:禁止选择
    authorName: "https://ratfrog.github.io/",// 作者名字
    clipboardComponent: "../docs/.vuepress/components/Copyright", // 自定义剪贴板组件
  }],
  // 图片缩放组件
  ['vuepress-plugin-zooming', {
    selector: '.theme-default-content img',
    options: {
      bgColor: 'black',
      zIndex: 10000,
    },
    delay: 1000,
  }],
  // 看板娘组件
  [
    'vuepress-plugin-helper-live2d', {
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'tororo',
        display: {
          position: "right", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ]
];