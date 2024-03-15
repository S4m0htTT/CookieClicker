var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cookie = /** @class */ (function () {
    function Cookie(nbCookies, multiplicator) {
        this.nbCookies = nbCookies;
        this.multiplicator = multiplicator;
    }
    Cookie.prototype.getCookie = function () {
        return this.nbCookies.toFixed(1);
    };
    Cookie.prototype.addCookie = function () {
        this.nbCookies += (this.multiplicator * 0.2);
    };
    Cookie.prototype.click = function () {
        this.nbCookies += 0.5;
    };
    Cookie.prototype.supprCookie = function (suppr) {
        this.nbCookies -= suppr;
    };
    return Cookie;
}());
var Grandma = /** @class */ (function (_super) {
    __extends(Grandma, _super);
    function Grandma(nbCookies, multiplicator, nbGrandma) {
        var _this = _super.call(this, nbCookies, multiplicator) || this;
        _this.nbGrandma = nbGrandma;
        return _this;
    }
    Grandma.prototype.howGrandma = function () {
        return this.nbGrandma.toFixed(1);
    };
    Grandma.prototype.getGrandma = function () {
        if (this.nbCookies >= 100) {
            _super.prototype.supprCookie.call(this, 100);
            this.nbGrandma += 1;
        }
        else {
            console.error("Not enough cookies");
        }
    };
    Grandma.prototype.addCookie = function () {
        this.nbCookies += (this.multiplicator * (0.2 + this.nbGrandma));
    };
    Grandma.prototype.click = function () {
        this.nbCookies += 0.5 + this.nbGrandma;
    };
    return Grandma;
}(Cookie));
var Farm = /** @class */ (function (_super) {
    __extends(Farm, _super);
    function Farm(nbCookies, multiplicator, nbGrandma, nbFarm) {
        var _this = _super.call(this, nbCookies, multiplicator, nbGrandma) || this;
        _this.nbFarm = nbFarm;
        return _this;
    }
    Farm.prototype.howFarm = function () {
        return this.nbFarm.toFixed(1);
    };
    Farm.prototype.getFarm = function () {
        if (this.nbCookies >= 1000) {
            _super.prototype.supprCookie.call(this, 1000);
            this.nbFarm += 1;
        }
        else {
            console.error("Not enough cookies");
        }
    };
    Farm.prototype.addCookie = function () {
        this.nbCookies += (this.multiplicator * (0.2 + this.nbGrandma + this.nbFarm * 10));
    };
    Farm.prototype.click = function () {
        this.nbCookies += 0.2 + this.nbGrandma + this.nbFarm * 10;
    };
    return Farm;
}(Grandma));
var cookie = new Farm(0, 2, 0, 0);
var nbCookie = cookie.getCookie();
var nbGrandma = cookie.howGrandma();
var compteur = document.getElementById("compteur");
var grandmatxt = document.getElementById("grandmatxt");
var farmtxt = document.getElementById("farmtxt");
compteur.innerHTML = nbCookie.toString();
grandmatxt.innerHTML = cookie.howGrandma();
farmtxt.innerHTML = cookie.howFarm();
setInterval(function () {
    cookie.addCookie();
    nbCookie = cookie.getCookie();
    compteur.innerHTML = nbCookie.toString();
}, 1000);
function cookieClick() {
    cookie.click();
    nbCookie = cookie.getCookie();
    compteur.innerHTML = nbCookie.toString();
}
function getMa() {
    cookie.getGrandma();
    nbCookie = cookie.getCookie();
    compteur.innerHTML = nbCookie.toString();
    grandmatxt.innerHTML = cookie.howGrandma();
}
function getFar() {
    cookie.getFarm();
    nbCookie = cookie.getCookie();
    compteur.innerHTML = nbCookie.toString();
    farmtxt.innerHTML = cookie.howFarm();
}
