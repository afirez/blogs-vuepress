const { getMdByDir } = require("./utils");
module.exports = {
    title: "alphazz",
    // description: "This is a blog.",
    base: '/blogs/',
    // theme: '@vuepress/theme-default',
    serviceWorker: true, // 阅读缓存进程
    theme: '@vuepress/theme-default',
    themeConfig: {
        navbar: [
          { text: 'Home', link: '/' },
          { 
              text: 'Tools',
              children: ['/tools/markdown/markdown_grammar.md'],
            //   children: [
            //       {
            //           text: "Markdown",
            //         //   chilren: getMdByDir("tools/markdown", "tools/markdown")
            //           chilren: ["/tools/markdown/markdown_grammar.md"]
            //       }
            //   ]
          },
          { text: 'About', link: '/about/' },
        ],
        sidebar: {
          '/tools/': [
              {
                  text: "Markdown",
                  collapsible: true,
                //   chilren: getMdByDir("tools/markdown", "tools")
                  chilren: ["/tools/markdown/markdown_grammar.md"]
              }
          ]
        },
        search: true,
        searchMaxSuggestions: 10
    }
}