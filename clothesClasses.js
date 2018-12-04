"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var items = /** @class */ (function () {
    function items(producer, model, price) {
        this.producerInf = producer;
        this.modelInf = model;
        this.priceInf = price;
    }
    items.prototype.displayDetails = function () {
        display.innerHTML += "Producer: " + this.getProducer() + "<br>Model: " + this.getModel() + "<br>Price: \u00A3" + this.getPrice() + "<br>";
    };
    Object.defineProperty(items.prototype, "producerInf", {
        set: function (str) {
            if (str.length > 1) {
                this.producer = str;
            }
            else
                throw new Error("Invalid producer");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(items.prototype, "modelInf", {
        set: function (str) {
            if (str.length > 1) {
                this.model = str;
            }
            else
                throw new Error("Invalid model");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(items.prototype, "priceInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid price, must be more than zero");
            }
            else if (num > 1000) {
                throw new Error("Invalid price, unreasonably high");
            }
            else
                this.price = num;
        },
        enumerable: true,
        configurable: true
    });
    items.prototype.getProducer = function () {
        return this.producer;
    };
    items.prototype.getModel = function () {
        return this.model;
    };
    items.prototype.getPrice = function () {
        return this.price;
    };
    return items;
}());
var clothing = /** @class */ (function (_super) {
    __extends(clothing, _super);
    function clothing(producer, model, price, size, colour) {
        var _this = _super.call(this, producer, model, price) || this;
        _this.sizeInf = size;
        _this.colour = colour;
        return _this;
    }
    clothing.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Size: " + this.getSize() + "<br>Colour: " + this.colour + "<br>";
    };
    Object.defineProperty(clothing.prototype, "sizeInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.size = num;
        },
        enumerable: true,
        configurable: true
    });
    clothing.prototype.getSize = function () {
        return this.size;
    };
    return clothing;
}(items));
var shirt = /** @class */ (function (_super) {
    __extends(shirt, _super);
    function shirt(producer, model, price, size, colour, sleeveLength) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.sleeveLengthInf = sleeveLength;
        return _this;
    }
    shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Sleeve Length: " + this.getSleeveLength() + "cm<br>";
    };
    Object.defineProperty(shirt.prototype, "sleeveLengthInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.sleeveLength = num;
        },
        enumerable: true,
        configurable: true
    });
    shirt.prototype.getSleeveLength = function () {
        return this.sleeveLength;
    };
    return shirt;
}(clothing));
var Tshirt = /** @class */ (function (_super) {
    __extends(Tshirt, _super);
    function Tshirt(producer, model, price, size, colour, sleeveLength, slogan) {
        var _this = _super.call(this, producer, model, price, size, colour, sleeveLength) || this;
        _this.slogan = slogan;
        return _this;
    }
    Tshirt.prototype.displayDetails = function () {
        display.innerHTML += "<b>T-shirt details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Slogan: " + this.slogan + "<br>";
    };
    Tshirt.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/01.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(Tshirt.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    Tshirt.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    return Tshirt;
}(shirt));
var Buttonshirt = /** @class */ (function (_super) {
    __extends(Buttonshirt, _super);
    function Buttonshirt(producer, model, price, size, colour, sleeveLength, buttons) {
        var _this = _super.call(this, producer, model, price, size, colour, sleeveLength) || this;
        _this.buttonsInf = buttons;
        return _this;
    }
    Buttonshirt.prototype.displayDetails = function () {
        display.innerHTML += "<b>Button shirt details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "No. of buttons: " + this.getButtons() + "<br>";
    };
    Buttonshirt.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/02.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(Buttonshirt.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    Buttonshirt.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(Buttonshirt.prototype, "buttonsInf", {
        set: function (num) {
            if (num < 0) {
                throw new Error("Invalid number, cannot be negative");
            }
            if (num > 100) {
                throw new Error("That's way too many buttons");
            }
            else
                this.buttons = num;
        },
        enumerable: true,
        configurable: true
    });
    Buttonshirt.prototype.getButtons = function () {
        return this.buttons;
    };
    return Buttonshirt;
}(shirt));
var Girlsshirt = /** @class */ (function (_super) {
    __extends(Girlsshirt, _super);
    function Girlsshirt(producer, model, price, size, colour, sleeveLength, materialType) {
        var _this = _super.call(this, producer, model, price, size, colour, sleeveLength) || this;
        _this.materialType = materialType;
        return _this;
    }
    Girlsshirt.prototype.displayDetails = function () {
        display.innerHTML += "<b>Girls shirt details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material type: " + this.getMaterialType() + "<br>";
    };
    Girlsshirt.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/03.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(Girlsshirt.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    Girlsshirt.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(Girlsshirt.prototype, "materialTypeInf", {
        set: function (str) {
            if (str.length > 1) {
                this.materialType = str;
            }
            else
                throw new Error("Invalid material type");
        },
        enumerable: true,
        configurable: true
    });
    Girlsshirt.prototype.getMaterialType = function () {
        return this.materialType;
    };
    return Girlsshirt;
}(shirt));
var trousers = /** @class */ (function (_super) {
    __extends(trousers, _super);
    function trousers(producer, model, price, size, colour, trouserLength) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.trouserLengthInf = trouserLength;
        return _this;
    }
    trousers.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Trouser length: " + this.getTrouserLength() + "cm<br>";
    };
    Object.defineProperty(trousers.prototype, "trouserLengthInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.trouserLength = num;
        },
        enumerable: true,
        configurable: true
    });
    trousers.prototype.getTrouserLength = function () {
        return this.trouserLength;
    };
    return trousers;
}(clothing));
var jeans = /** @class */ (function (_super) {
    __extends(jeans, _super);
    function jeans(producer, model, price, size, colour, trouserLength, torn) {
        var _this = _super.call(this, producer, model, price, size, colour, trouserLength) || this;
        _this.torn = torn;
        return _this;
    }
    jeans.prototype.displayDetails = function () {
        display.innerHTML += "<b>Jeans details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Torn: " + this.torn + "<br>";
    };
    jeans.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/04.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(jeans.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    jeans.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    return jeans;
}(trousers));
var materialtrousers = /** @class */ (function (_super) {
    __extends(materialtrousers, _super);
    function materialtrousers(producer, model, price, size, colour, trouserLength, pockets) {
        var _this = _super.call(this, producer, model, price, size, colour, trouserLength) || this;
        _this.pocketsInf = pockets;
        return _this;
    }
    materialtrousers.prototype.displayDetails = function () {
        display.innerHTML += "<b>Material Trousers details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Pockets: " + this.getPockets() + "<br>";
    };
    materialtrousers.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/05.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(materialtrousers.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    materialtrousers.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(materialtrousers.prototype, "pocketsInf", {
        set: function (num) {
            if (num < 0) {
                throw new Error("Invalid number, cannot be negative");
            }
            if (num > 100) {
                throw new Error("That's way too many pockets");
            }
            else
                this.pockets = num;
        },
        enumerable: true,
        configurable: true
    });
    materialtrousers.prototype.getPockets = function () {
        return this.pockets;
    };
    return materialtrousers;
}(trousers));
var shorts = /** @class */ (function (_super) {
    __extends(shorts, _super);
    function shorts(producer, model, price, size, colour, trouserLength, materialType) {
        var _this = _super.call(this, producer, model, price, size, colour, trouserLength) || this;
        _this.materialType = materialType;
        return _this;
    }
    shorts.prototype.displayDetails = function () {
        display.innerHTML += "<b>Shorts details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material type: " + this.getMaterialType() + "<br>";
    };
    shorts.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/06.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(shorts.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    shorts.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(shorts.prototype, "materialTypeInf", {
        set: function (str) {
            if (str.length > 1) {
                this.materialType = str;
            }
            else
                throw new Error("Invalid material type");
        },
        enumerable: true,
        configurable: true
    });
    shorts.prototype.getMaterialType = function () {
        return this.materialType;
    };
    return shorts;
}(trousers));
// enum Skirttype { "shortSkirt" = 0, "longSkirt" = 1 }
// enum Skirttype {a = "shortSkirt", b = "longSkirt"}
// var Skirttype = {"shortSkirt" : 0, "longSkirt": 1}
// Object.freeze(Skirttype)
var skirt = /** @class */ (function (_super) {
    __extends(skirt, _super);
    function skirt(producer, model, price, size, colour, width, type) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.widthInf = width;
        _this.typeInf = type;
        return _this;
    }
    skirt.prototype.displayDetails = function () {
        display.innerHTML += "<b>Skirt details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Width: " + this.getWidth() + "cm<br>Type: " + this.getType() + "<br>";
    };
    skirt.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/07.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(skirt.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    skirt.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(skirt.prototype, "widthInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.width = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(skirt.prototype, "typeInf", {
        set: function (str) {
            if (str != "shortskirt" && str != "longskirt") {
                throw new Error("Invalid choice, choose between shortskirt and longskirt");
            }
            else
                this.type = str;
        },
        enumerable: true,
        configurable: true
    });
    // public set typeInf(num: number) {
    //     if (num < 0 || num > 1) {
    //         throw new Error("type choices are 0 or 1")
    //     }
    //     else this.type = num;
    // }
    skirt.prototype.getWidth = function () {
        return this.width;
    };
    skirt.prototype.getType = function () {
        return this.type;
    };
    return skirt;
}(clothing));
var dress = /** @class */ (function (_super) {
    __extends(dress, _super);
    function dress(producer, model, price, size, colour, width, length, openBack) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.widthInf = width;
        _this.lengthInf = length;
        _this.openBack = openBack;
        return _this;
    }
    dress.prototype.displayDetails = function () {
        display.innerHTML += "<b>Dress details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Width: " + this.getWidth() + "cm<br>Length: " + this.getLength() + "cm<br>Open back: " + this.openBack + "<br>";
    };
    dress.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/08.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(dress.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    dress.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(dress.prototype, "widthInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.width = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(dress.prototype, "lengthInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid size, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid size, too large");
            }
            else
                this.length = num;
        },
        enumerable: true,
        configurable: true
    });
    dress.prototype.getWidth = function () {
        return this.width;
    };
    dress.prototype.getLength = function () {
        return this.length;
    };
    return dress;
}(clothing));
var eveningDress = /** @class */ (function (_super) {
    __extends(eveningDress, _super);
    function eveningDress(producer, model, price, size, colour, width, length, openBack, materialType) {
        var _this = _super.call(this, producer, model, price, size, colour, width, length, openBack) || this;
        _this.materialType = materialType;
        return _this;
    }
    eveningDress.prototype.displayDetails = function () {
        display.innerHTML += "<b>Evening dress details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material Type: " + this.getMaterialType() + "<br>";
    };
    eveningDress.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/09.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(eveningDress.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    eveningDress.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(eveningDress.prototype, "materialTypeInf", {
        set: function (str) {
            if (str.length > 1) {
                this.materialType = str;
            }
            else
                throw new Error("Invalid producer");
        },
        enumerable: true,
        configurable: true
    });
    eveningDress.prototype.getMaterialType = function () {
        return this.materialType;
    };
    return eveningDress;
}(dress));
var shoes = /** @class */ (function (_super) {
    __extends(shoes, _super);
    function shoes(producer, model, price, size, colour, countryofOrigin) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.countryofOrigin = countryofOrigin;
        return _this;
    }
    shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Country of origin: " + this.getCountryofOrigin() + "<br>";
    };
    Object.defineProperty(shoes.prototype, "countryofOriginInf", {
        set: function (str) {
            if (str.length > 1) {
                this.countryofOrigin = str;
            }
            else
                throw new Error("Invalid country");
        },
        enumerable: true,
        configurable: true
    });
    shoes.prototype.getCountryofOrigin = function () {
        return this.countryofOrigin;
    };
    return shoes;
}(clothing));
var mensShoes = /** @class */ (function (_super) {
    __extends(mensShoes, _super);
    function mensShoes(producer, model, price, size, colour, countryofOrigin, laces) {
        var _this = _super.call(this, producer, model, price, size, colour, countryofOrigin) || this;
        _this.laces = laces;
        return _this;
    }
    mensShoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Laces: " + this.laces + "<br>";
    };
    return mensShoes;
}(shoes));
// enum shoeMat {
//     "leather",
//     "material",
// }
var dressShoes = /** @class */ (function (_super) {
    __extends(dressShoes, _super);
    function dressShoes(producer, model, price, size, colour, countryofOrigin, laces, material) {
        var _this = _super.call(this, producer, model, price, size, colour, countryofOrigin, laces) || this;
        _this.materialInf = material;
        return _this;
    }
    dressShoes.prototype.displayDetails = function () {
        display.innerHTML += "<b>Dress shoes details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material: " + this.getMaterial() + "<br>";
    };
    dressShoes.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/10.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(dressShoes.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    dressShoes.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(dressShoes.prototype, "materialInf", {
        set: function (str) {
            if (str != "leather" && str != "material") {
                throw new Error("Invalid choice, choose between leather and material");
            }
            else
                this.material = str;
        },
        enumerable: true,
        configurable: true
    });
    // public set materialInf(num: number) {
    //     if (num < 0 || num > 1) {
    //         throw new Error("Invalid material, choose between 0 and 1")
    //     }
    //     else this.material = num;
    // }
    dressShoes.prototype.getMaterial = function () {
        return this.material;
    };
    return dressShoes;
}(mensShoes));
var sportShoes = /** @class */ (function (_super) {
    __extends(sportShoes, _super);
    function sportShoes(producer, model, price, size, colour, countryofOrigin, laces, date) {
        var _this = _super.call(this, producer, model, price, size, colour, countryofOrigin, laces) || this;
        _this.dateInf = date;
        return _this;
    }
    sportShoes.prototype.displayDetails = function () {
        display.innerHTML += "<b>Sport shoes details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Date: " + this.date + "<br>";
    };
    sportShoes.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/11.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(sportShoes.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    sportShoes.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(sportShoes.prototype, "dateInf", {
        set: function (str) {
            var today;
            today = new Date();
            if (str > today) {
                throw new Error("These shoes cannot be made in the future!");
            }
            else if (str.getFullYear() < 1990) {
                throw new Error("These shoes seem to be unrealistically old.");
            }
            else {
                this.date = str;
            }
        },
        enumerable: true,
        configurable: true
    });
    sportShoes.prototype.getDate = function () {
        return this.date.toLocaleDateString();
    };
    return sportShoes;
}(mensShoes));
var easyShoes = /** @class */ (function (_super) {
    __extends(easyShoes, _super);
    function easyShoes(producer, model, price, size, colour, countryofOrigin, laces, inSole) {
        var _this = _super.call(this, producer, model, price, size, colour, countryofOrigin, laces) || this;
        _this.inSole = inSole;
        return _this;
    }
    easyShoes.prototype.displayDetails = function () {
        display.innerHTML += "<b>Easy shoes details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "In-sole: " + this.inSole + "<br>";
    };
    easyShoes.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/12.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(easyShoes.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    easyShoes.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    return easyShoes;
}(mensShoes));
// enum Heeltype {
//     "shortHeel",
//     "midHeel",
//     "highHeel",
// }
var heels = /** @class */ (function (_super) {
    __extends(heels, _super);
    function heels(producer, model, price, size, colour, countryofOrigin, heelType) {
        var _this = _super.call(this, producer, model, price, size, colour, countryofOrigin) || this;
        _this.heelTypeInf = heelType;
        return _this;
    }
    heels.prototype.displayDetails = function () {
        display.innerHTML += "<b>Heels details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Heel type: " + this.getHeelType() + "<br>";
    };
    heels.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/13.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(heels.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    heels.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(heels.prototype, "heelTypeInf", {
        // public set heelTypeInf(num: number) {
        //     if (num < 0 || num > 2) {
        //         throw new Error("Invalid type, choose between 0, 1 and 2")
        //     }
        //     else this.heelType = num;
        // }
        set: function (str) {
            if (str != "shortHeel" && str != "midHeel" && str != "highHeel") {
                throw new Error("Invalid choice, choose between shortHeel, midHeel and highHeel");
            }
            else
                this.heelType = str;
        },
        enumerable: true,
        configurable: true
    });
    heels.prototype.getHeelType = function () {
        return this.heelType;
    };
    return heels;
}(shoes));
var jacket = /** @class */ (function (_super) {
    __extends(jacket, _super);
    function jacket(producer, model, price, size, colour, materialThickness, pockets) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.materialThicknessInf = materialThickness;
        _this.pocketsInf = pockets;
        return _this;
    }
    jacket.prototype.displayDetails = function () {
        display.innerHTML += "<b>Jacket details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material thickness: " + this.getMaterialThickness() + "mm<br>Pockets: " + this.getPockets() + "<br>";
    };
    jacket.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/14.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(jacket.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    jacket.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(jacket.prototype, "materialThicknessInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid thickness, must be more than zero");
            }
            else if (num > 5) {
                throw new Error("Invalid thickness, must be more than zero");
            }
            else
                this.materialThickness = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(jacket.prototype, "pocketsInf", {
        set: function (num) {
            if (num < 0) {
                throw new Error("Invalid number, cannot be negative");
            }
            else if (num > 100) {
                throw new Error("Thats way too many pockets");
            }
            else
                this.pockets = num;
        },
        enumerable: true,
        configurable: true
    });
    jacket.prototype.getMaterialThickness = function () {
        return this.materialThickness;
    };
    jacket.prototype.getPockets = function () {
        return this.pockets;
    };
    return jacket;
}(clothing));
var coat = /** @class */ (function (_super) {
    __extends(coat, _super);
    function coat(producer, model, price, size, colour, materialThickness, rainProof) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.materialThicknessInf = materialThickness;
        _this.rainProof = rainProof;
        return _this;
    }
    coat.prototype.displayDetails = function () {
        display.innerHTML += "<b>Coat details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Material thickness: " + this.getMaterialThickness() + "mm<br>Rain-proof: " + this.rainProof + "<br>";
    };
    coat.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/15.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(coat.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    coat.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(coat.prototype, "materialThicknessInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid thickness, must be more than zero");
            }
            else if (num > 5) {
                throw new Error("Invalid thickness, must be less than five");
            }
            else
                this.materialThickness = num;
        },
        enumerable: true,
        configurable: true
    });
    coat.prototype.getMaterialThickness = function () {
        return this.materialThickness;
    };
    return coat;
}(clothing));
var cap = /** @class */ (function (_super) {
    __extends(cap, _super);
    function cap(producer, model, price, size, colour, circumference, advert) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.circumferenceInf = circumference;
        _this.advert = advert;
        return _this;
    }
    cap.prototype.displayDetails = function () {
        display.innerHTML += "<b>Cap details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Circumference: " + this.getCircumference() + "<br>Advert: " + this.advert + "<br>";
    };
    cap.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/16.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(cap.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    cap.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(cap.prototype, "circumferenceInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid circumference, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid circumference, must be less than 100");
            }
            else
                this.circumference = num;
        },
        enumerable: true,
        configurable: true
    });
    cap.prototype.getCircumference = function () {
        return this.circumference;
    };
    return cap;
}(clothing));
var topHat = /** @class */ (function (_super) {
    __extends(topHat, _super);
    function topHat(producer, model, price, size, colour, circumference, height) {
        var _this = _super.call(this, producer, model, price, size, colour) || this;
        _this.circumferenceInf = circumference;
        _this.heightInf = height;
        return _this;
    }
    topHat.prototype.displayDetails = function () {
        display.innerHTML += "<b>Top Hat details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Circumference: " + this.getCircumference() + "<br>Height: " + this.getHeight() + "cm<br>";
    };
    topHat.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/17.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(topHat.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    topHat.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(topHat.prototype, "circumferenceInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid circumference, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid circumference, must be less than 100");
            }
            else
                this.circumference = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(topHat.prototype, "heightInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid height, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid height, must be less than 100");
            }
            else
                this.height = num;
        },
        enumerable: true,
        configurable: true
    });
    topHat.prototype.getCircumference = function () {
        return this.circumference;
    };
    topHat.prototype.getHeight = function () {
        return this.height;
    };
    return topHat;
}(clothing));
var dimensions = /** @class */ (function () {
    function dimensions() {
    }
    return dimensions;
}());
// enum buckleMat {
//     "metal",
//     "leather",
//     "material"
// }
var belt = /** @class */ (function (_super) {
    __extends(belt, _super);
    function belt(producer, model, price, beltColour, buckleColour, buckleMaterial, length, width, height) {
        var _this = _super.call(this, producer, model, price) || this;
        _this.beltdimensions = new dimensions;
        _this.beltColour = beltColour;
        _this.buckleColour = buckleColour;
        _this.buckleMaterialInf = buckleMaterial;
        _this.beltdimensionsL = length;
        _this.beltdimensionsW = width;
        _this.beltdimensionsH = height;
        return _this;
    }
    belt.prototype.displayDetails = function () {
        display.innerHTML += "<b>Belt details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Belt colour: " + this.beltColour + "<br>Buckle colour: " + this.buckleColour + "<br>Buckle material: " + this.getBuckleMaterial() + "<br>Length: " + this.getlength() + "cm<br>Width: " + this.getwidth() + "mm<br>Height: " + this.getheight() + "mm<br>";
    };
    belt.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/18.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(belt.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    belt.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(belt.prototype, "beltdimensionsL", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid length, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid length, must be less than 100");
            }
            else
                this.beltdimensions.length = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(belt.prototype, "beltdimensionsW", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid width, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid width, must be less than 100");
            }
            else
                this.beltdimensions.width = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(belt.prototype, "beltdimensionsH", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid height, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid height, must be less than 100");
            }
            else
                this.beltdimensions.height = num;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(belt.prototype, "buckleMaterialInf", {
        // public set buckleMaterialInf(num: number) {
        //     if (num < 0 || num > 2) {
        //         throw new Error("Invalid choice, choose between 0, 1 and 2")
        //     }
        //     else this.buckleMaterial = num;
        // }
        set: function (str) {
            if (str != "metal" && str != "leather" && str != "material") {
                throw new Error("Invalid choice, choose between metal, leather and material");
            }
            else
                this.buckleMaterial = str;
        },
        enumerable: true,
        configurable: true
    });
    belt.prototype.getBuckleMaterial = function () {
        return this.buckleMaterial;
    };
    belt.prototype.getlength = function () {
        return this.beltdimensions.length;
    };
    belt.prototype.getwidth = function () {
        return this.beltdimensions.width;
    };
    belt.prototype.getheight = function () {
        return this.beltdimensions.height;
    };
    return belt;
}(items));
var sunGlasses = /** @class */ (function (_super) {
    __extends(sunGlasses, _super);
    function sunGlasses(producer, model, price, frameColour, glassColour) {
        var _this = _super.call(this, producer, model, price) || this;
        _this.frameColour = frameColour;
        _this.glassColour = glassColour;
        return _this;
    }
    sunGlasses.prototype.displayDetails = function () {
        display.innerHTML += "<b>Sun glasses details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Frame colour: " + this.frameColour + "<br>Glass colour: " + this.glassColour + "<br>";
    };
    sunGlasses.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/19.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(sunGlasses.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    sunGlasses.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    return sunGlasses;
}(items));
var readingGlasses = /** @class */ (function (_super) {
    __extends(readingGlasses, _super);
    function readingGlasses(producer, model, price, frameColour, readingDistance) {
        var _this = _super.call(this, producer, model, price) || this;
        _this.frameColour = frameColour;
        _this.readingDistanceInf = readingDistance;
        return _this;
    }
    readingGlasses.prototype.displayDetails = function () {
        display.innerHTML += "<b>Reading glasses details:</b><br>";
        _super.prototype.displayDetails.call(this);
        display.innerHTML += "Frame colour: " + this.frameColour + "<br>Reading distance: " + this.getreadingDistance() + "cm<br>";
    };
    readingGlasses.prototype.displayImage = function () {
        display.innerHTML += "<img src=\"clothesPics/20.jpg\" style=\"width: 150px\" />";
    };
    Object.defineProperty(readingGlasses.prototype, "brand", {
        get: function () {
            return this.getProducer() + " " + this.getModel() + "<br>";
        },
        enumerable: true,
        configurable: true
    });
    readingGlasses.prototype.getPriceWithoutVAT = function () {
        display.innerHTML += "<b>Price without VAT:</b> \u00A3" + (this.getPrice() - this.getPrice() / 100 * 17).toFixed(2) + "<br>";
    };
    Object.defineProperty(readingGlasses.prototype, "readingDistanceInf", {
        set: function (num) {
            if (num <= 0) {
                throw new Error("Invalid distance, must be more than zero");
            }
            else if (num > 100) {
                throw new Error("Invalid distance, must be less than 100");
            }
            else
                this.readingDistance = num;
        },
        enumerable: true,
        configurable: true
    });
    readingGlasses.prototype.getreadingDistance = function () {
        return this.readingDistance;
    };
    return readingGlasses;
}(items));
var randomGen = /** @class */ (function () {
    function randomGen() {
    }
    randomGen.prototype.rdmColour = function () {
        this.x = Math.floor(Math.random() * 20);
        return randomGen.colourArray[this.x];
    };
    randomGen.prototype.rdmProducer = function () {
        this.x = Math.floor(Math.random() * 10);
        return randomGen.producerArray[this.x];
    };
    randomGen.prototype.rdmCountry = function () {
        this.x = Math.floor(Math.random() * 10);
        return randomGen.countryArray[this.x];
    };
    randomGen.prototype.rdmPrice = function () {
        return ((Math.floor(Math.random() * 1000) * 10) / 100 + 1).toFixed(2);
    };
    randomGen.prototype.rdmModel = function () {
        this.x = Math.floor(Math.random() * 10);
        return randomGen.modelArray[this.x];
    };
    randomGen.prototype.rdmSize = function () {
        return Math.floor(Math.random() * 100) + 1;
    };
    randomGen.prototype.rdmThickness = function () {
        return Math.floor(Math.random() * 5) + 1;
    };
    randomGen.prototype.rdmSlogan = function () {
        this.x = Math.floor(Math.random() * 10);
        return randomGen.sloganArray[this.x];
    };
    randomGen.prototype.rdmPocket_Button = function () {
        return Math.floor(Math.random() * 11) + 1;
    };
    randomGen.prototype.rdmMaterial = function () {
        this.x = Math.floor(Math.random() * 2);
        return randomGen.materialArray[this.x];
    };
    randomGen.prototype.rdmSkirt = function () {
        this.x = Math.floor(Math.random() * 2);
        return randomGen.skirtArray[this.x];
    };
    randomGen.prototype.rdmMShoe = function () {
        this.x = Math.floor(Math.random() * 2);
        return randomGen.shoeArray[this.x];
    };
    randomGen.prototype.rdmHeel = function () {
        this.x = Math.floor(Math.random() * 2);
        return randomGen.heelArray[this.x];
    };
    randomGen.prototype.rdmBuckle = function () {
        this.x = Math.floor(Math.random() * 2);
        return randomGen.buckleArray[this.x];
    };
    randomGen.prototype.rdmBoolean = function () {
        this.x = Math.floor(Math.random() * 2);
        if (this.x == 1) {
            return true;
        }
        else
            return false;
    };
    randomGen.prototype.rdmNum2 = function () {
        this.x = Math.floor(Math.random() * 2);
        return this.x;
    };
    randomGen.prototype.rdmNum3 = function () {
        this.x = Math.floor(Math.random() * 3);
        return this.x;
    };
    randomGen.prototype.rdmNum20 = function () {
        this.x = Math.floor(Math.random() * 20);
        return this.x;
    };
    randomGen.prototype.rdmDate = function () {
        var d = new Date();
        var today = d.getTime();
        this.x = Math.floor(Math.random() * (today - 633000000000)) + 633000000000; //Jan 1990
        d.setTime(this.x);
        return d;
    };
    randomGen.colourArray = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple", "Cyan", "Magenta", "Lime", "Pink", "Teal", "Lavender", "Brown", "Beige", "Maroon", "Mint", "Olive", "Apricot", "Navy", "Grey", "White", "Black"];
    randomGen.producerArray = ["Adidas", "Calvin Klein", "Ralph Lauren", "Old Navy", "Under Armour", "Nike", "H&M", "Hollister", "Diesel", "Dolce and Gabbana"];
    randomGen.sloganArray = ["Just do it", "I'm with stupid", "The party starts when i walk in", "Superman", "Dancing Queen", "80% cool, 20% awesome", "Powered by beer", "DK1 over DK2", "Fear the Reaper", "18th annual chilli cookout"];
    randomGen.materialArray = ["Cotton", "Polyester", "Wool"];
    randomGen.skirtArray = ["shortskirt", "longskirt"];
    randomGen.shoeArray = ["leather", "material"];
    randomGen.heelArray = ["shortHeel", "midHeel", "highHeel"];
    randomGen.buckleArray = ["metal", "leather", "material"];
    randomGen.countryArray = ["England", "China", "Taiwan", "USA", "Israel", "Russia", "Denmark", "Switzerland", "France", "Germany"];
    randomGen.modelArray = ["Model_0", "Model_1", "Model_2", "Model_3", "Model_4", "Model_5", "Model_6", "Model_7", "Model_8", "Model_9",];
    return randomGen;
}());
var j;
var generator = /** @class */ (function () {
    function generator() {
        this.usedArray = new Array(0);
    }
    generator.prototype.checkLoop = function () {
        if (this.usedArray.length == 20) {
            this.usedArray = new Array(0);
        }
        else
            this.x = rdm.rdmNum20();
        for (j = 0; j < this.usedArray.length; j++) {
            if (this.x == this.usedArray[j]) {
                this.checkLoop();
            }
        }
    };
    generator.prototype.getRandomItem = function () {
        this.checkLoop();
        // display.innerHTML += `${this.x}, `
        this.usedArray.push(this.x);
        switch (this.x) {
            case 0:
                this.genItem = new Tshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSlogan());
                break;
            case 1:
                this.genItem = new Buttonshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmPocket_Button());
                break;
            case 2:
                this.genItem = new Girlsshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmMaterial());
                break;
            case 3:
                this.genItem = new jeans(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmBoolean());
                break;
            case 4:
                this.genItem = new materialtrousers(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmPocket_Button());
                break;
            case 5:
                this.genItem = new shorts(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmMaterial());
                break;
            case 6:
                this.genItem = new skirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSkirt());
                break;
            case 7:
                this.genItem = new dress(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmBoolean());
                break;
            case 8:
                this.genItem = new eveningDress(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmBoolean(), rdm.rdmMaterial());
                break;
            case 9:
                this.genItem = new dressShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmMShoe());
                break;
            case 10:
                this.genItem = new sportShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmDate());
                break;
            case 11:
                this.genItem = new easyShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmBoolean());
                break;
            case 12:
                this.genItem = new heels(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmHeel());
                break;
            case 13:
                this.genItem = new jacket(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmThickness(), rdm.rdmPocket_Button());
                break;
            case 14:
                this.genItem = new coat(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmThickness(), rdm.rdmBoolean());
                break;
            case 15:
                this.genItem = new cap(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmBoolean());
                break;
            case 16:
                this.genItem = new topHat(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize());
                break;
            case 17:
                this.genItem = new belt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmColour(), rdm.rdmBuckle(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmSize());
                break;
            case 18:
                this.genItem = new sunGlasses(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmColour());
                break;
            case 19:
                this.genItem = new readingGlasses(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmSize());
                break;
            // default: display.innerHTML += "TRIED TO MAKE A BELT!")
        }
    };
    return generator;
}());
var i = 0;
var tester = /** @class */ (function () {
    function tester() {
    }
    tester.prototype.test = function () {
        var arrlength = parseInt(prompt("Choose product array length:", ""));
        if (arrlength > 0 && arrlength <= 300) {
            tester.testArray = new Array(arrlength);
        }
        else {
            alert("Product array must have a length from 1 to 300");
            this.test();
        }
        for (i = 0; i < tester.testArray.length; i++) {
            gen.getRandomItem();
            tester.testArray[i] = gen.genItem;
        }
        printBreakLine();
        for (i = 0; i < tester.testArray.length; i++) {
            tester.testArray[i].displayDetails();
            tester.testArray[i].getPriceWithoutVAT();
            display.innerHTML += tester.testArray[i].brand;
            tester.testArray[i].displayImage();
            printBreakLine();
        }
    };
    return tester;
}());
var display = document.getElementById("display");
//  display.innerHTML += JSON.stringify(this.testArray[i], null, 4));
function printBreakLine() {
    display.innerHTML += "<hr><br>";
}
