(function () {
    var productsList = new WinJS.Binding.List([]);

    var loadProducts = function () {
        var productDTOs = Data.getProducts();

        var currentCount = productsList.dataSource.list.length
        productsList.dataSource.list.splice(0, currentCount);

        for (var i = 0; i < productDTOs.length; i++) {
            productsList.push(productDTOs[i]);
        }
    }

    WinJS.Namespace.define("ViewModels", {
        loadProducts: loadProducts,
        products: productsList,
        addProduct: function (code, name, description, image, basicPrice, promoPrice) {
            Data.addProduct(new Models.ProductModel(code, name, description, image, basicPrice, promoPrice));
        }
    });
})();