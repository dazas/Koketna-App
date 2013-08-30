(function () {
    var submitProduct = function () {
        var productNameInput = document.getElementById("product-name-input");
        var productName = productNameInput.value;

        ViewModels.addProduct(productName, "unknown", "unknown", "unknown", "unknown");
    }

    WinJS.Utilities.markSupportedForProcessing(submitProduct);

    WinJS.Namespace.define("AddProductCodeBehind", {
        submitProduct: submitProduct
    });
})()