module.exports = {
  title: 'VUE PRESS DOCUMENT',
  description: '项目文档',
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '指南', link: '/guide/guide'}
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          children: [
            '/guide/guide'
          ]
        }
      ]
    }
  }
}