import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Goliath",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F4F1EE",              // parchment base
  lightgray: "#E8EBED",          // cooler gray to balance warmth
  gray: "#B3B3B3",
  darkgray: "#4A4A4A",
  dark: "#2A2A2A",
  secondary: "#274C5E",          // cooler accent (headers, frames)
  tertiary: "#6E9C90",           // muted teal, pairs with parchment
  highlight: "rgba(120, 140, 150, 0.15)",
  textHighlight: "#FFF36C80",    // soft gold glow for selected text
          c1: "#f690bc",
          c2: "#F28444",
          c4: "#136b61",
          c3: "#4daa9b",
          c5: "#3A86FF",
          c6: "#E9C46A",
          c7: "#8338EC",
          c8: "#E63946",
          c9: "#8D99AE",
          c10: "#049b04",
        },
        darkMode: {
           light: "#1C1D20",              // graphite base
  lightgray: "#35373B",          // subtle charcoal
  gray: "#6C6C6C",
  darkgray: "#D6D6D6",
  dark: "#ECECEC",
  secondary: "#7A9EB5",          // soft desaturated blue accent
  tertiary: "#6DA698",           // slightly brighter teal for structure
  highlight: "rgba(160, 180, 190, 0.15)",
  textHighlight: "#E0C85E80",    // warm gold tone glow
          c1: "#f690bc",
          c2: "#F28444",
          c4: "#136b61",
          c3: "#4daa9b",
          c5: "#3A86FF",
          c6: "#E9C46A",
          c7: "#8338EC",
          c8: "#E63946",
          c9: "#8D99AE",
          c10: "#049b04",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.HideObsidianPluginBlocks(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.HardLineBreaks(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.ObsidianBases(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
      Plugin.BasePage(),
    ],
  },
}

export default config
