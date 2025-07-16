import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";

import { NolebaseGitChangelogPlugin } from "@nolebase/vitepress-plugin-git-changelog/client";
import { NolebaseHighlightTargetedHeading } from "@nolebase/vitepress-plugin-highlight-targeted-heading/client";
import { NolebaseInlineLinkPreviewPlugin } from "@nolebase/vitepress-plugin-inline-link-preview/client";
import { NolebaseUnlazyImg } from "@nolebase/vitepress-plugin-thumbnail-hash/client";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";

import "./styles.css";
import "@nolebase/vitepress-plugin-thumbnail-hash/client/style.css";
import "@nolebase/vitepress-plugin-git-changelog/client/style.css";
import "@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css";
import "@nolebase/vitepress-plugin-inline-link-preview/client/style.css";
import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "layout-top": () => [h(NolebaseHighlightTargetedHeading)],
    });
  },
  enhanceApp({ app }) {
    app.use(NolebaseGitChangelogPlugin);
    app.use(NolebaseInlineLinkPreviewPlugin);
    app.component("NolebaseUnlazyImg", NolebaseUnlazyImg);
    enhanceAppWithTabs(app);
  },
} satisfies Theme;
