import AddToCart from "src/plugin/add-to-cart/add-to-cart.plugin"
import DomAccess from "src/helper/dom-access.helper"
import HttpClient from "src/service/http-client.service"

export default class ButtonFeedback extends AddToCart {
    init() {
        this.PluginManager = window.PluginManager
        this._buyButtonEL = DomAccess.querySelector(document, ".btn-buy");
        this._cartEl = DomAccess.querySelector(document, ".header-cart");
        this._client = new HttpClient(window.accessKey, window.contextToken)
        super.init()
    }

    _openOffCanvasCart(instance, requestUrl, formData) {
        this._client.post(requestUrl, formData, this._afterAddItemToCart.bind(this))
    }
    _afterAddItemToCart() {
        this._refreshCartValue()
        
        this._buyButton()
    }

    _refreshCartValue() {
        const cartWidgetEl = DomAccess.querySelector(this._cartEl, "[data-cart-widget]" )
        const cartWidgetInstance = this.PluginManager.getPluginInstanceFromElement(cartWidgetEl, "CartWidget")
        cartWidgetInstance.fetch()
    }

    _buyButton(){
        this._buyButtonEL.classList.add("In_den_Warenkorb")
        this._buyButtonEL.innerText = "Wird in den Warenkorb gelegt"
        window.setTimeout(() => {
            this._buyButtonEL.classList.remove("In_den_Warenkorb")
            this._buyButtonEL.innerText = "Add to shopping cart"
        }, 1000)
    }   
}