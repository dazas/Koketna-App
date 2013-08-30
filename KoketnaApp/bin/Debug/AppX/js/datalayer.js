(function () {

    var products = [
        new Models.ProductModel("R003666", "Рокля Денис", "Официална дълга рокля с тънки презрамки и шал", "images/roklya-denis-33674.jpg", 100, 34.99),
        new Models.ProductModel("R003666", "Рокля Денис", "Официална дълга рокля с тънки презрамки и шал", "images/roklya-denis-33674.jpg", 100, 34.99),
        new Models.ProductModel("R003666", "Рокля Денис", "Официална дълга рокля с тънки презрамки и шал", "images/roklya-denis-33674.jpg", 100, 34.99),
        new Models.ProductModel("R003666", "Рокля Денис", "Официална дълга рокля с тънки презрамки и шал", "images/roklya-denis-33674.jpg", 100, 34.99)
    ]

    var getProducts = function () {
        return products;
    }

    var addProduct = function (productModel) {
        products.push(productModel);
    }

    WinJS.Namespace.define("Data", {
        getProducts: getProducts,
        addProduct: addProduct
    });
})()