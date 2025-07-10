import { groupIconMdPlugin } from "vitepress-plugin-group-icons";
import { defineConfig, type DefaultTheme } from "vitepress";

export default defineConfig({
  srcDir: "src",
  srcExclude: ["**/README.md", "**/TODO.md"],
  base: "/swift-notes/",

  lang: "zh-Hans",
  title: "Swift 开发笔记",
  description: "记录开发",

  rewrites: {
    "zh/:rest*": ":rest*",
  },

  locales: {
    root: { label: "简体中文" },
    en: { label: "English" },
  },

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  markdown: {
    math: true,
    codeTransformers: [
      {
        postprocess(code) {
          return code.replace(/\[\!\!code/g, "[!code");
        },
      },
    ],
    config(md) {
      const fence = md.renderer.rules.fence!;
      md.renderer.rules.fence = function (tokens, idx, options, env, self) {
        const { localeIndex = "root" } = env;
        const codeCopyButtonTitle = (() => {
          switch (localeIndex) {
            case "es":
              return "Copiar código";
            case "fa":
              return "کپی کد";
            case "ko":
              return "코드 복사";
            case "pt":
              return "Copiar código";
            case "ru":
              return "Скопировать код";
            case "zh":
              return "复制代码";
            default:
              return "Copy code";
          }
        })();
        return fence(tokens, idx, options, env, self).replace(
          '<button title="Copy Code" class="copy"></button>',
          `<button title="${codeCopyButtonTitle}" class="copy"></button>`
        );
      };
      md.use(groupIconMdPlugin);
    },
  },

  sitemap: {
    hostname: "https://wangqiyang.com",
    transformItems(items) {
      return items.filter((item) => !item.url.includes("migration"));
    },
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/docs/swift/": {
        base: "/docs/swift/",
        items: sidebarSwift(),
      },
      "/posts/": {
        base: "/posts/",
        items: sidebarPosts(),
      },
    },

    editLink: {
      pattern:
        "https://github.com/wangqiyangx/swift-notes/edit/main/content/:path",
      text: "在 GitHub 上编辑此页面",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/wangqiyangx/swift-notes" },
    ],

    search: {
      provider: "local",
      options: searchOptions(),
    },

    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2025-${new Date().getFullYear()} 启阳`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      level: "deep",
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    notFound: {
      title: "页面未找到",
      quote:
        "但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。",
      linkLabel: "前往首页",
      linkText: "带我回首页",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: "博客",
      link: "/posts/",
      activeMatch: "/posts",
    },
    {
      text: "项目",
      activeMatch: "/projects",
      items: [
        {
          text: "代码示例",
          link: "/projects/examples",
        },
      ],
    },
    {
      text: "文档",
      activeMatch: "/docs",
      items: [
        {
          text: "Swift",
          link: "/docs/swift/preface/about-swift",
        },
      ],
    },
  ];
}

function sidebarSwift(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "开始",
      collapsed: false,
      base: "/docs/swift/preface/",
      items: [
        {
          text: "关于 Swift",
          link: "about-swift",
        },
        {
          text: "版本兼容性",
          link: "version-compatibility",
        },
        {
          text: "Swift 入门之旅",
          link: "a-swift-tour",
        },
      ],
    },
    {
      text: "指南",
      collapsed: true,
      base: "/docs/swift/guide/",
      items: [
        {
          text: "基础语法",
          link: "the-basics",
        },
        {
          text: "基本运算符",
          link: "basic-operators",
        },
        {
          text: "字符串和字符",
          link: "strings-and-characters",
        },
        {
          text: "集合类型",
          link: "collection-types",
        },
        {
          text: "控制流",
          link: "control-flow",
        },
        {
          text: "函数",
          link: "functions",
        },
        {
          text: "闭包",
          link: "closures",
        },
        {
          text: "枚举",
          link: "enumerations",
        },
        {
          text: "结构体和类",
          link: "structures-and-classes",
        },
        {
          text: "属性",
          link: "properties",
        },
        {
          text: "方法",
          link: "methods",
        },
        {
          text: "下标",
          link: "subscripts",
        },
        {
          text: "继承",
          link: "inheritance",
        },
        {
          text: "初始化",
          link: "initialization",
        },
        {
          text: "反初始化",
          link: "deinitialization",
        },
        {
          text: "可选链",
          link: "optional-chaining",
        },
        {
          text: "错误处理",
          link: "error-handling",
        },
        {
          text: "并发",
          link: "concurrency",
        },
        {
          text: "宏",
          link: "macros",
        },
        {
          text: "类型转换",
          link: "type-casting",
        },
        {
          text: "嵌套类型",
          link: "nested-types",
        },
        {
          text: "扩展",
          link: "extensions",
        },
        {
          text: "协议",
          link: "protocols",
        },
        {
          text: "泛型",
          link: "generics",
        },
        {
          text: "不透明和装箱协议类型",
          link: "opaque-and-boxed-protocol-types",
        },
        {
          text: "自动引用计数",
          link: "automatic-reference-counting",
        },
        {
          text: "内存安全",
          link: "memory-safety",
        },
        {
          text: "访问控制",
          link: "access-control",
        },
        {
          text: "高级运算符",
          link: "advanced-operators",
        },
      ],
    },
    {
      text: "参考",
      collapsed: true,
      base: "/docs/swift/reference/",
      items: [
        {
          text: "关于语言参考",
          link: "about-the-language-reference",
        },
        {
          text: "词法结构",
          link: "lexical-structure",
        },
        {
          text: "类型",
          link: "types",
        },
        {
          text: "表达式",
          link: "expressions",
        },
        {
          text: "语句",
          link: "statements",
        },
        {
          text: "声明",
          link: "declarations",
        },
      ],
    },
  ];
}

function sidebarPosts(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "教程",
      collapsed: true,
      base: "/posts/tutorials/",
      items: [
        {
          text: "Button 教程",
          link: "the-ultimate-swiftui-button-tutorial",
        },
      ],
    },
  ];
}

function searchOptions(): Partial<DefaultTheme.LocalSearchOptions> {
  return {
    translations: {
      button: {
        buttonText: "搜索",
        buttonAriaLabel: "搜索",
      },
      modal: {
        displayDetails: "显示细节",
        resetButtonTitle: "重置搜索",
        backButtonTitle: "返回",
        noResultsText: "无搜索结果",
        footer: {
          selectText: "跳转",
          selectKeyAriaLabel: "跳转",
          navigateText: "选择",
          navigateUpKeyAriaLabel: "选择上一项",
          navigateDownKeyAriaLabel: "选择下一项",
          closeText: "关闭",
          closeKeyAriaLabel: "关闭",
        },
      },
    },
  };
}
