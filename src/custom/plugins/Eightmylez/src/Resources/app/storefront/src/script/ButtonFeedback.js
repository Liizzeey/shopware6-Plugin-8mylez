import Plugin from "src/plugin-system/plugin.class"

export default class ButtonFeedback extends Plugin {
    init() {
        console.info(window.PluginManager.getPluginInstancesFromElement(this.el))
    }
}