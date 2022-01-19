"use strict";
exports.__esModule = true;
var LazyLoad = /** @class */ (function () {
    function LazyLoad() {
        var _this = this;
        window.addEventListener("load", function (e) {
            _this.loadPictures();
        });
    }
    LazyLoad.prototype.loadPictures = function () {
        this.pictureEls = document.querySelectorAll("picture[data-lazy-picture]");
        this.pictureEls.forEach(function (el) {
            var img = document.createElement("img");
            img.alt = el.dataset.alt;
            el.appendChild(img);
        });
    };
    return LazyLoad;
}());
;
exports["default"] = LazyLoad;
