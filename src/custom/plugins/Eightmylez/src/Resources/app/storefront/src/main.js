import ButtonFeedback from "./script/ButtonFeedback";

window.PluginManager.override("AddToCart", ButtonFeedback, "[data-add-to-cart]")