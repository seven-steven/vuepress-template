module.exports = {
  // 站点标题
  title: 'VuePress Template',
  // 站点描述
  description: 'VuePress Template',
  // 站点头部信息
  head: [
    ['link', { rel: 'icon', href: '/assets/images/vue.svg' }]
  ],
  // 部署站点的基础路径
  base: '/',
  // 指定用于 dev server 的主机名
  host: '0.0.0.0',
  // 指定 dev server 的端口
  port: 8080,
  // 插件配置
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    'vuepress-plugin-pangu',
    'vuepress-plugin-reading-progress',
    'vuepress-plugin-img-lazy',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
        }
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        // 'ga': 'XXXXXXX'
      }
    ],
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        backgroundTransition: true,
        color: '#E1DAD9',
        backgroundColor: '#000000',
        successText: 'copied!',
        staticIcon: false
      }
    ],
    [
      'vuepress-plugin-zooming',
      {
        selector: 'img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    // [
    //   'vuepress-plugin-sitemap',
    //   {
    //     hostname: 'https://idea.diqigan.cn',
    //     outFile: 'sitemap.xml',
    //   }
    // ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain && !$page.frontmatter.image.startsWith('http') || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        cusotmMeta: () => { }
      }
    ],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ],
  // 默认主题配置
  themeConfig: {
    navbar: true,
    logo: '/assets/images/vue.svg',
    nav: [
      { text: 'Blog', link: 'https://blog.diqigan.cn', rel: null },
      { text: '导航', link: 'https://bookmark.diqigan.cn', rel: null }
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    activeHeaderLinks: false,
    lastUpdated: '最近更新',
    repo: 'Seven-Steven/vuepress-template',
    repoLabel: '查看源码',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    smoothScroll: true,
    darkMode: true
  }
}