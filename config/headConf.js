module.exports = [
    ['link', { rel: 'icon', href: '/icon.png' }],
    [
    "script",
    {},
    `var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?46eb6dbf0c639c7f8f8b9bc2e1b8e9ad";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
    })();`
    ]
];