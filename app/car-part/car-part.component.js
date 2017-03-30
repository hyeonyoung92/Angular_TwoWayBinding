"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mocks_1 = require("./mocks");
var CarPartComponent = (function () {
    function CarPartComponent() {
        this.carParts = mocks_1.CARPARTS;
        this.carPartsResult = this.carParts;
    }
    CarPartComponent.prototype.totalCarParts = function () {
        var sum = 0;
        for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
            var carPart = _a[_i];
            sum += carPart.inStock;
        }
        return sum;
    };
    CarPartComponent.prototype.upQuantity = function (carPart) {
        if (carPart.quantity < carPart.inStock)
            carPart.quantity++;
        console.log(carPart.quantity);
    };
    CarPartComponent.prototype.downQuantity = function (carPart) {
        if (carPart.quantity != 0)
            carPart.quantity--;
    };
    CarPartComponent.prototype.searchName = function (name) {
        //console.log(event.target.value + " " + event.target.tagName+ " " + event.target.type);
        if (name == '') {
            alert("입력해 주세요");
        }
        else {
            console.log("입력된 값" + name);
            this.carPartsResult = [];
            for (var _i = 0, _a = this.carParts; _i < _a.length; _i++) {
                var carPart = _a[_i];
                if (carPart.name.indexOf(name) != -1) {
                    this.carPartsResult.push(carPart);
                }
            }
        }
    };
    return CarPartComponent;
}());
CarPartComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: 'app/car-part/car-part.component.html',
        styleUrls: ['app/car-part/car-part.component.css']
    }),
    __metadata("design:paramtypes", [])
], CarPartComponent);
exports.CarPartComponent = CarPartComponent;
//# sourceMappingURL=car-part.component.js.map