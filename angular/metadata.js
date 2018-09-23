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
exports.__esModule = true;
require("reflect-metadata");
function logParameters(target, key) {
    var types = Reflect.getMetadata("design:paramtypes", target, key);
    var s = types.map(function (a) { return a.name; }).join();
    console.log(key + " param types: " + s);
}
var Foo = /** @class */ (function () {
    function Foo() {
    }
    return Foo;
}());
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.doSomething = function (param1, param2, param3, param4, param5, param6, param7) {
        return 1;
    };
    __decorate([
        logParameters // apply parameter decorator
        ,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number, Foo, Object, Object, Function, Function]),
        __metadata("design:returntype", Number)
    ], Demo.prototype, "doSomething");
    return Demo;
}());
