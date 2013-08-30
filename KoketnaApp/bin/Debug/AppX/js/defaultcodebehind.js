(function () {

    var goToAddProduct = function () {
        WinJS.Navigation.navigate("/pages/addproduct/addproduct.html");
    }

    WinJS.Utilities.markSupportedForProcessing(goToAddProduct);

    WinJS.Namespace.define("DefaultCodeBehind", {
        goToAddProduct: goToAddProduct
    });
})()