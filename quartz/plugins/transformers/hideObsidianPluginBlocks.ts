import { QuartzTransformerPlugin } from "../types"
import { Content } from "mdast"

export const HideObsidianPluginBlocks: QuartzTransformerPlugin = () => {
  return {
    name: "hideObsidianPluginBlocks",
    markdownPlugins() {
      return [
        () => {
          return (tree) => {
            // Remove code blocks matching unwanted languages
            tree.children = tree.children.filter((node: Content) => {
              if (node.type === "code") {
                const lang = node.lang?.toLowerCase?.()
                return !["leaflet", "aat-vertical", "aat-horizontal", "dataviewjs"].includes(lang ?? "")
              }
              return true
            })
          }
        }
      ]
    },
  }
}

declare module "vfile"{
    interface DataMap {
    }
}