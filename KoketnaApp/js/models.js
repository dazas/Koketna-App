(function () {
    var ProductModel = WinJS.Class.define(function (code, name, description, image, basicPrice, promoPrice) {
        this.code = code;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = {}; //very important line, else the processor is added to the prototype and shared between all instances
        this.price.basicPrice = basicPrice;
        this.price.promoPrice = promoPrice;
    }, {
        code: "",
        name: "",
        description: "",
        image: "",
        price: {
            basicPrice: 0,
            promoPrice: 0
        }
    })

    WinJS.Namespace.define("Models", {
        ProductModel: ProductModel
    })
})()