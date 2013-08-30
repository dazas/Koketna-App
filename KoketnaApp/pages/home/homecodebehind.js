(function () {

    var goToProductDetailsPage = function (invokeEvent) {
        WinJS.Navigation.navigate("/pages/productdetails/productdetails.html", {
            indexInProductsList: invokeEvent.detail.itemIndex
        });
    }

    WinJS.Utilities.markSupportedForProcessing(goToProductDetailsPage);

    WinJS.Namespace.define("HomeCodeBehind", {
        callLoadProducts: function () {
            ViewModels.loadProducts();
        },

        goToProductDetailsPage: goToProductDetailsPage
    })
})();