abstract class items {
    private producer: string;
    private model: string;
    private price: number;
    constructor(producer, model, price) {
        this.producerInf = producer;
        this.modelInf = model;
        this.priceInf = price;
    }

    public displayDetails() {
        display.innerHTML += `Producer: ${this.getProducer()}<br>Model: ${this.getModel()}<br>Price: £${this.getPrice()}<br>`
    }
    public abstract displayImage()
    public abstract get brand()
    public abstract getPriceWithoutVAT()

    public set producerInf(str: string) {
        if (str.length > 1) {
            this.producer = str;
        }
        else throw new Error("Invalid producer");
    }
    public set modelInf(str: string) {
        if (str.length > 1) {
            this.model = str;
        }
        else throw new Error("Invalid model");
    }
    public set priceInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid price, must be more than zero")
        }
        else if (num > 1000) {
            throw new Error("Invalid price, unreasonably high")
        }
        else this.price = num;
    }
    public getProducer() {
        return this.producer;
    }
    public getModel() {
        return this.model;
    }
    public getPrice() {
        return this.price;
    }
}
abstract class clothing extends items {
    private size: number;
    colour: string;
    constructor(producer, model, price, size, colour) {
        super(producer, model, price)
        this.sizeInf = size;
        this.colour = colour;
    }
    public displayDetails() {
        super.displayDetails()
        display.innerHTML += `Size: ${this.getSize()}<br>Colour: ${this.colour}<br>`
    }
    public set sizeInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.size = num;
    }
    public getSize() {
        return this.size;
    }
}

abstract class shirt extends clothing {
    private sleeveLength: number;
    constructor(producer, model, price, size, colour, sleeveLength) {
        super(producer, model, price, size, colour)
        this.sleeveLengthInf = sleeveLength;
    }
    public displayDetails() {
        super.displayDetails()
        display.innerHTML += `Sleeve Length: ${this.getSleeveLength()}cm<br>`
    }
    public set sleeveLengthInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.sleeveLength = num;
    }
    public getSleeveLength() {
        return this.sleeveLength;
    }
}

class Tshirt extends shirt {
    slogan: string; //Can be left blank?
    constructor(producer, model, price, size, colour, sleeveLength, slogan) {
        super(producer, model, price, size, colour, sleeveLength)
        this.slogan = slogan;
    }
    public displayDetails() {
        display.innerHTML += `<b>T-shirt details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Slogan: ${this.slogan}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/01.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
}
class Buttonshirt extends shirt {
    private buttons: number;
    constructor(producer, model, price, size, colour, sleeveLength, buttons) {
        super(producer, model, price, size, colour, sleeveLength)
        this.buttonsInf = buttons;
    }
    public displayDetails() {
        display.innerHTML += `<b>Button shirt details:</b><br>`
        super.displayDetails()
        display.innerHTML += `No. of buttons: ${this.getButtons()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/02.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set buttonsInf(num: number) {
        if (num < 0) {
            throw new Error("Invalid number, cannot be negative")
        }
        if (num > 100) {
            throw new Error("That's way too many buttons")
        }
        else this.buttons = num;
    }
    public getButtons() {
        return this.buttons;
    }
}
class Girlsshirt extends shirt {
    private materialType: string;
    constructor(producer, model, price, size, colour, sleeveLength, materialType) {
        super(producer, model, price, size, colour, sleeveLength)
        this.materialType = materialType;
    }
    public displayDetails() {
        display.innerHTML += `<b>Girls shirt details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material type: ${this.getMaterialType()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/03.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialTypeInf(str: string) {
        if (str.length > 1) {
            this.materialType = str;
        }
        else throw new Error("Invalid material type");
    }
    public getMaterialType() {
        return this.materialType;
    }
}

abstract class trousers extends clothing {
    private trouserLength: number;
    constructor(producer, model, price, size, colour, trouserLength) {
        super(producer, model, price, size, colour)
        this.trouserLengthInf = trouserLength;
    }
    public displayDetails() {
        super.displayDetails()
        display.innerHTML += `Trouser length: ${this.getTrouserLength()}cm<br>`
    }
    public set trouserLengthInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.trouserLength = num;
    }
    public getTrouserLength() {
        return this.trouserLength;
    }
}
class jeans extends trousers {
    torn: boolean;
    constructor(producer, model, price, size, colour, trouserLength, torn) {
        super(producer, model, price, size, colour, trouserLength)
        this.torn = torn;
    }
    public displayDetails() {
        display.innerHTML += `<b>Jeans details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Torn: ${this.torn}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/04.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }

}
class materialtrousers extends trousers {
    private pockets: number;
    constructor(producer, model, price, size, colour, trouserLength, pockets) {
        super(producer, model, price, size, colour, trouserLength)
        this.pocketsInf = pockets;
    }
    public displayDetails() {
        display.innerHTML += `<b>Material Trousers details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Pockets: ${this.getPockets()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/05.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set pocketsInf(num: number) {
        if (num < 0) {
            throw new Error("Invalid number, cannot be negative")
        }
        if (num > 100) {
            throw new Error("That's way too many pockets")
        }
        else this.pockets = num;
    }
    public getPockets() {
        return this.pockets;
    }
}
class shorts extends trousers {
    private materialType: string;
    constructor(producer, model, price, size, colour, trouserLength, materialType) {
        super(producer, model, price, size, colour, trouserLength)
        this.materialType = materialType;
    }
    public displayDetails() {
        display.innerHTML += `<b>Shorts details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material type: ${this.getMaterialType()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/06.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialTypeInf(str: string) {
        if (str.length > 1) {
            this.materialType = str;
        }
        else throw new Error("Invalid material type");
    }
    public getMaterialType() {
        return this.materialType;
    }
}
// enum Skirttype { "shortSkirt" = 0, "longSkirt" = 1 }

// enum Skirttype {a = "shortSkirt", b = "longSkirt"}

// var Skirttype = {"shortSkirt" : 0, "longSkirt": 1}
// Object.freeze(Skirttype)

class skirt extends clothing {
    private width: number;
    // private type: Skirttype;
    private type: string;
    constructor(producer, model, price, size, colour, width, type) {
        super(producer, model, price, size, colour)
        this.widthInf = width;
        this.typeInf = type;
    }
    public displayDetails() {
        display.innerHTML += `<b>Skirt details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Width: ${this.getWidth()}cm<br>Type: ${this.getType()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/07.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set widthInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.width = num;
    }
    public set typeInf(str: string) {
        if (str != "shortskirt"  && str != "longskirt") {
            throw new Error("Invalid choice, choose between shortskirt and longskirt")
        }
        else this.type = str;
    }
    // public set typeInf(num: number) {
    //     if (num < 0 || num > 1) {
    //         throw new Error("type choices are 0 or 1")
    //     }
    //     else this.type = num;
    // }
    public getWidth() {
        return this.width;
    }
    public getType() {
        return this.type;
    }
}
class dress extends clothing {
    private width: number;
    private length: number;
    openBack: boolean;
    constructor(producer, model, price, size, colour, width, length, openBack) {
        super(producer, model, price, size, colour)
        this.widthInf = width;
        this.lengthInf = length;
        this.openBack = openBack;
    }
    public displayDetails() {
        display.innerHTML += `<b>Dress details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Width: ${this.getWidth()}cm<br>Length: ${this.getLength()}cm<br>Open back: ${this.openBack}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/08.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set widthInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.width = num;
    }
    public set lengthInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid size, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid size, too large")
        }
        else this.length = num;
    }
    public getWidth() {
        return this.width;
    }
    public getLength() {
        return this.length;
    }
}
class eveningDress extends dress {
    private materialType: string;
    constructor(producer, model, price, size, colour, width, length, openBack, materialType) {
        super(producer, model, price, size, colour, width, length, openBack)
        this.materialType = materialType;
    }
    public displayDetails() {
        display.innerHTML += `<b>Evening dress details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material Type: ${this.getMaterialType()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/09.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialTypeInf(str: string) {
        if (str.length > 1) {
            this.materialType = str;
        }
        else throw new Error("Invalid producer");
    }
    public getMaterialType() {
        return this.materialType;
    }
}

abstract class shoes extends clothing {
    private countryofOrigin: string;
    constructor(producer, model, price, size, colour, countryofOrigin) {
        super(producer, model, price, size, colour)
        this.countryofOrigin = countryofOrigin;
    }
    public displayDetails() {
        super.displayDetails()
        display.innerHTML += `Country of origin: ${this.getCountryofOrigin()}<br>`
    }
    public abstract displayImage()

    public set countryofOriginInf(str: string) {
        if (str.length > 1) {
            this.countryofOrigin = str;
        }
        else throw new Error("Invalid country");
    }
    public getCountryofOrigin() {
        return this.countryofOrigin;
    }
}
abstract class mensShoes extends shoes {
    laces: boolean;
    constructor(producer, model, price, size, colour, countryofOrigin, laces) {
        super(producer, model, price, size, colour, countryofOrigin)
        this.laces = laces;
    }
    public displayDetails() {
        super.displayDetails()
        display.innerHTML += `Laces: ${this.laces}<br>`
    }
    public abstract displayImage()
    public abstract get brand()
    public abstract getPriceWithoutVAT()
}
// enum shoeMat {
//     "leather",
//     "material",
// }
class dressShoes extends mensShoes {
    // private material: shoeMat;
    private material: string;
    constructor(producer, model, price, size, colour, countryofOrigin, laces, material) {
        super(producer, model, price, size, colour, countryofOrigin, laces)
        this.materialInf = material;
    }
    public displayDetails() {
        display.innerHTML += `<b>Dress shoes details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material: ${this.getMaterial()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/10.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialInf(str: string) {
        if (str != "leather"  && str != "material") {
            throw new Error("Invalid choice, choose between leather and material")
        }
        else this.material = str;
    }
    // public set materialInf(num: number) {
    //     if (num < 0 || num > 1) {
    //         throw new Error("Invalid material, choose between 0 and 1")
    //     }
    //     else this.material = num;
    // }
    public getMaterial() {
        return this.material;
    }

}
class sportShoes extends mensShoes {
    private date: Date; //NEEDS SETTER
    constructor(producer, model, price, size, colour, countryofOrigin, laces, date) {
        super(producer, model, price, size, colour, countryofOrigin, laces)
        this.dateInf = date;
    }
    public displayDetails() {
        display.innerHTML += `<b>Sport shoes details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Date: ${this.date}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/11.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set dateInf(str: Date) {
        var today;
        today = new Date();
        if (str > today) {
            throw new Error("These shoes cannot be made in the future!");
        } else if (str.getFullYear() < 1990) {
            throw new Error("These shoes seem to be unrealistically old.");
        }
        else { this.date = str }
    }
    public getDate() {
        return this.date.toLocaleDateString();
    }
}
class easyShoes extends mensShoes {
    inSole: boolean;
    constructor(producer, model, price, size, colour, countryofOrigin, laces, inSole) {
        super(producer, model, price, size, colour, countryofOrigin, laces)
        this.inSole = inSole;
    }
    public displayDetails() {
        display.innerHTML += `<b>Easy shoes details:</b><br>`
        super.displayDetails()
        display.innerHTML += `In-sole: ${this.inSole}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/12.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
}
// enum Heeltype {
//     "shortHeel",
//     "midHeel",
//     "highHeel",
// }
class heels extends shoes {
    // private heelType: Heeltype;
    private heelType: string;
    constructor(producer, model, price, size, colour, countryofOrigin, heelType) {
        super(producer, model, price, size, colour, countryofOrigin)
        this.heelTypeInf = heelType;
    }
    public displayDetails() {
        display.innerHTML += `<b>Heels details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Heel type: ${this.getHeelType()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/13.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    // public set heelTypeInf(num: number) {
    //     if (num < 0 || num > 2) {
    //         throw new Error("Invalid type, choose between 0, 1 and 2")
    //     }
    //     else this.heelType = num;
    // }
    public set heelTypeInf(str: string) {
        if (str != "shortHeel"  && str != "midHeel" && str != "highHeel") {
            throw new Error("Invalid choice, choose between shortHeel, midHeel and highHeel")
        }
        else this.heelType = str;
    }
    public getHeelType() {
        return this.heelType;
    }
}

class jacket extends clothing {
    private materialThickness: number;
    private pockets: number;
    constructor(producer, model, price, size, colour, materialThickness, pockets) {
        super(producer, model, price, size, colour)
        this.materialThicknessInf = materialThickness;
        this.pocketsInf = pockets;
    }
    public displayDetails() {
        display.innerHTML += `<b>Jacket details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material thickness: ${this.getMaterialThickness()}mm<br>Pockets: ${this.getPockets()}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/14.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialThicknessInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid thickness, must be more than zero")
        }
        else if (num > 5) {
            throw new Error("Invalid thickness, must be more than zero")
        }
        else this.materialThickness = num;
    }
    public set pocketsInf(num: number) {
        if (num < 0) {
            throw new Error("Invalid number, cannot be negative")
        }
        else if (num > 100) {
            throw new Error("Thats way too many pockets")
        }
        else this.pockets = num;
    }
    public getMaterialThickness() {
        return this.materialThickness;
    }
    public getPockets() {
        return this.pockets;
    }
}
class coat extends clothing {
    private materialThickness: number;
    rainProof: boolean;
    constructor(producer, model, price, size, colour, materialThickness, rainProof) {
        super(producer, model, price, size, colour)
        this.materialThicknessInf = materialThickness;
        this.rainProof = rainProof;
    }
    public displayDetails() {
        display.innerHTML += `<b>Coat details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Material thickness: ${this.getMaterialThickness()}mm<br>Rain-proof: ${this.rainProof}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/15.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set materialThicknessInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid thickness, must be more than zero")
        }
        else if (num > 5) {
            throw new Error("Invalid thickness, must be less than five")
        }
        else this.materialThickness = num;
    }
    public getMaterialThickness() {
        return this.materialThickness;
    }
}

class cap extends clothing {
    private circumference: number;
    advert: boolean;
    constructor(producer, model, price, size, colour, circumference, advert) {
        super(producer, model, price, size, colour)
        this.circumferenceInf = circumference;
        this.advert = advert;
    }
    public displayDetails() {
        display.innerHTML += `<b>Cap details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Circumference: ${this.getCircumference()}<br>Advert: ${this.advert}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/16.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set circumferenceInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid circumference, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid circumference, must be less than 100")
        }
        else this.circumference = num;
    }
    public getCircumference() {
        return this.circumference;
    }
}
class topHat extends clothing {
    private circumference: number;
    private height: number;
    constructor(producer, model, price, size, colour, circumference, height) {
        super(producer, model, price, size, colour)
        this.circumferenceInf = circumference;
        this.heightInf = height;
    }
    public displayDetails() {
        display.innerHTML += `<b>Top Hat details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Circumference: ${this.getCircumference()}<br>Height: ${this.getHeight()}cm<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/17.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set circumferenceInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid circumference, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid circumference, must be less than 100")
        }
        else this.circumference = num;
    }
    public set heightInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid height, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid height, must be less than 100")
        }
        else this.height = num;
    }
    public getCircumference() {
        return this.circumference;
    }
    public getHeight() {
        return this.height;
    }
}

class dimensions {
    length: number;
    width: number;
    height: number;
}
// enum buckleMat {
//     "metal",
//     "leather",
//     "material"
// }
class belt extends items {
    beltColour: string;
    buckleColour: string;
    private beltdimensions: dimensions = new dimensions;
    // private buckleMaterial: buckleMat;
    private buckleMaterial: string;
    constructor(producer, model, price, beltColour, buckleColour, buckleMaterial, length, width, height) {
        super(producer, model, price)
        this.beltColour = beltColour;
        this.buckleColour = buckleColour;
        this.buckleMaterialInf = buckleMaterial;
        this.beltdimensionsL = length;
        this.beltdimensionsW = width;
        this.beltdimensionsH = height;
    }
    public displayDetails() {
        display.innerHTML += `<b>Belt details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Belt colour: ${this.beltColour}<br>Buckle colour: ${this.buckleColour}<br>Buckle material: ${this.getBuckleMaterial()}<br>Length: ${this.getlength()}cm<br>Width: ${this.getwidth()}mm<br>Height: ${this.getheight()}mm<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/18.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set beltdimensionsL(num) {
        if (num <= 0) {
            throw new Error("Invalid length, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid length, must be less than 100")
        }
        else this.beltdimensions.length = num;
    }
    public set beltdimensionsW(num) {
        if (num <= 0) {
            throw new Error("Invalid width, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid width, must be less than 100")
        }
        else this.beltdimensions.width = num;
    }
    public set beltdimensionsH(num) {
        if (num <= 0) {
            throw new Error("Invalid height, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid height, must be less than 100")
        }
        else this.beltdimensions.height = num;
    }
    // public set buckleMaterialInf(num: number) {
    //     if (num < 0 || num > 2) {
    //         throw new Error("Invalid choice, choose between 0, 1 and 2")
    //     }
    //     else this.buckleMaterial = num;
    // }
    public set buckleMaterialInf(str: string) {
        if (str != "metal"  && str != "leather" && str != "material") {
            throw new Error("Invalid choice, choose between metal, leather and material")
        }
        else this.buckleMaterial = str;
    }
    public getBuckleMaterial() {
        return this.buckleMaterial;
    }
    public getlength() {
        return this.beltdimensions.length;
    }
    public getwidth() {
        return this.beltdimensions.width;
    }
    public getheight() {
        return this.beltdimensions.height;
    }
}

class sunGlasses extends items {
    frameColour: string;
    glassColour: string;
    constructor(producer, model, price, frameColour, glassColour) {
        super(producer, model, price)
        this.frameColour = frameColour;
        this.glassColour = glassColour;
    }
    public displayDetails() {
        display.innerHTML += `<b>Sun glasses details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Frame colour: ${this.frameColour}<br>Glass colour: ${this.glassColour}<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/19.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
}

class readingGlasses extends items {
    frameColour: string;
    private readingDistance: number;
    constructor(producer, model, price, frameColour, readingDistance) {
        super(producer, model, price)
        this.frameColour = frameColour;
        this.readingDistanceInf = readingDistance;
    }
    public displayDetails() {
        display.innerHTML += `<b>Reading glasses details:</b><br>`
        super.displayDetails()
        display.innerHTML += `Frame colour: ${this.frameColour}<br>Reading distance: ${this.getreadingDistance()}cm<br>`

    }
    public displayImage() {
        display.innerHTML += `<img src="clothesPics/20.jpg" style="width: 150px" />`
    }
    public get brand() {
        return `${this.getProducer()} ${this.getModel()}<br>`
    }
    public getPriceWithoutVAT() {
        display.innerHTML += `<b>Price without VAT:</b> £${(this.getPrice() - this.getPrice() / 100 * 17).toFixed(2)}<br>`
    }
    public set readingDistanceInf(num: number) {
        if (num <= 0) {
            throw new Error("Invalid distance, must be more than zero")
        }
        else if (num > 100) {
            throw new Error("Invalid distance, must be less than 100")
        }
        else this.readingDistance = num;
    }
    public getreadingDistance() {
        return this.readingDistance;
    }
}
class randomGen {
    public x: number
    static colourArray: Array<string> = ["Red", "Green", "Yellow", "Blue", "Orange", "Purple", "Cyan", "Magenta", "Lime", "Pink", "Teal", "Lavender", "Brown", "Beige", "Maroon", "Mint", "Olive", "Apricot", "Navy", "Grey", "White", "Black"];
    static producerArray: Array<string> = ["Adidas", "Calvin Klein", "Ralph Lauren", "Old Navy", "Under Armour", "Nike", "H&M", "Hollister", "Diesel", "Dolce and Gabbana"]
    static sloganArray: Array<string> = ["Just do it", "I'm with stupid", "The party starts when i walk in", "Superman", "Dancing Queen", "80% cool, 20% awesome", "Powered by beer", "DK1 over DK2", "Fear the Reaper", "18th annual chilli cookout"]
    static materialArray: Array<string> = ["Cotton", "Polyester", "Wool"];
    static skirtArray: Array<string> = ["shortskirt", "longskirt"];
    static shoeArray: Array<string> = ["leather", "material"];
    static heelArray: Array<string> = ["shortHeel", "midHeel", "highHeel"];
    static buckleArray: Array<string> = ["metal", "leather", "material"];
    static countryArray: Array<string> = ["England", "China", "Taiwan", "USA", "Israel", "Russia", "Denmark", "Switzerland", "France", "Germany"]
    static modelArray: Array<string> = ["Model_0", "Model_1", "Model_2", "Model_3", "Model_4", "Model_5", "Model_6", "Model_7", "Model_8", "Model_9",]
    rdmColour() {
        this.x = Math.floor(Math.random() * 20)
        return randomGen.colourArray[this.x]
    }
    rdmProducer() {
        this.x = Math.floor(Math.random() * 10)
        return randomGen.producerArray[this.x]
    }
    rdmCountry() {
        this.x = Math.floor(Math.random() * 10)
        return randomGen.countryArray[this.x]
    }
    rdmPrice() {
        return ((Math.floor(Math.random() * 1000) * 10) / 100 + 1).toFixed(2);
    }
    rdmModel() {
        this.x = Math.floor(Math.random() * 10)
        return randomGen.modelArray[this.x]
    }
    rdmSize() {
        return Math.floor(Math.random() * 100) + 1
    }
    rdmThickness() {
        return Math.floor(Math.random() * 5) + 1
    }
    rdmSlogan() {
        this.x = Math.floor(Math.random() * 10)
        return randomGen.sloganArray[this.x]
    }
    rdmPocket_Button() {
        return Math.floor(Math.random() * 11) + 1
    }
    rdmMaterial() {
        this.x = Math.floor(Math.random() * 2)
        return randomGen.materialArray[this.x]
    }
    rdmSkirt() {
        this.x = Math.floor(Math.random() * 2)
        return randomGen.skirtArray[this.x]
    }
    rdmMShoe() {
        this.x = Math.floor(Math.random() * 2)
        return randomGen.shoeArray[this.x]
    }
    rdmHeel() {
        this.x = Math.floor(Math.random() * 2)
        return randomGen.heelArray[this.x]
    }
    rdmBuckle() {
        this.x = Math.floor(Math.random() * 2)
        return randomGen.buckleArray[this.x]
    }

    rdmBoolean() {
        this.x = Math.floor(Math.random() * 2)
        if (this.x == 1) { return true }
        else return false
    }
    rdmNum2() {
        this.x = Math.floor(Math.random() * 2)
        return this.x;
    }
    rdmNum3() {
        this.x = Math.floor(Math.random() * 3)
        return this.x;
    }
    rdmNum20() {
        this.x = Math.floor(Math.random() * 20)
        return this.x;
    }
    rdmDate() {
        var d = new Date();
        var today = d.getTime()
        this.x = Math.floor(Math.random() * (today - 633000000000)) + 633000000000//Jan 1990
        d.setTime(this.x);
        return d;
    }
}
var j: number;
class generator {
    public x: number;
    public usedArray: Array<number> = new Array(0);
    public genItem: items;
    public checkLoop() {
        if (this.usedArray.length == 20) { this.usedArray = new Array(0) }
        else
            this.x = rdm.rdmNum20()
        for (j = 0; j < this.usedArray.length; j++) {
            if (this.x == this.usedArray[j]) { this.checkLoop() }
        }

    }
    public getRandomItem() {
        this.checkLoop()
        // display.innerHTML += `${this.x}, `
        this.usedArray.push(this.x)
        switch (this.x) {
            case 0: this.genItem = new Tshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSlogan())
                break;
            case 1: this.genItem = new Buttonshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmPocket_Button())
                break;
            case 2: this.genItem = new Girlsshirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmMaterial())
                break;
            case 3: this.genItem = new jeans(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmBoolean())
                break;
            case 4: this.genItem = new materialtrousers(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmPocket_Button())
                break;
            case 5: this.genItem = new shorts(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmMaterial())
                break;
            case 6: this.genItem = new skirt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSkirt())
                break;
            case 7: this.genItem = new dress(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmBoolean())
                break;
            case 8: this.genItem = new eveningDress(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmBoolean(), rdm.rdmMaterial())
                break;
            case 9: this.genItem = new dressShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmMShoe())
                break;
            case 10: this.genItem = new sportShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmDate())
                break;
            case 11: this.genItem = new easyShoes(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmBoolean(), rdm.rdmBoolean())
                break;
            case 12: this.genItem = new heels(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmCountry(), rdm.rdmHeel())
                break;
            case 13: this.genItem = new jacket(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmThickness(), rdm.rdmPocket_Button())
                break;
            case 14: this.genItem = new coat(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmThickness(), rdm.rdmBoolean())
                break;
            case 15: this.genItem = new cap(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmBoolean())
                break;
            case 16: this.genItem = new topHat(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmSize(), rdm.rdmColour(), rdm.rdmSize(), rdm.rdmSize())
                break;
            case 17: this.genItem = new belt(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmColour(), rdm.rdmBuckle(), rdm.rdmSize(), rdm.rdmSize(), rdm.rdmSize())
                break;
            case 18: this.genItem = new sunGlasses(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmColour())
                break;
            case 19: this.genItem = new readingGlasses(rdm.rdmProducer(), rdm.rdmModel(), rdm.rdmPrice(), rdm.rdmColour(), rdm.rdmSize())
                break;
            // default: display.innerHTML += "TRIED TO MAKE A BELT!")
        }
    }
}

var i: number = 0
class tester {
    public static testArray: Array<items>;
    public test() {
        var arrlength: number = parseInt(prompt("Choose product array length:", ""))

        if (arrlength > 0 && arrlength <= 300) {
            tester.testArray = new Array<items>(arrlength)
        }
        else {
            alert("Product array must have a length from 1 to 300");
            this.test();
        }

        for (i = 0; i < tester.testArray.length; i++) {
            gen.getRandomItem();
            tester.testArray[i] = gen.genItem;
        }
        printBreakLine()
        for (i = 0; i < tester.testArray.length; i++) {
            tester.testArray[i].displayDetails();
            tester.testArray[i].getPriceWithoutVAT();
            display.innerHTML += tester.testArray[i].brand;
            tester.testArray[i].displayImage();
            printBreakLine()
        }
    }
}
var display = document.getElementById("display");
//  display.innerHTML += JSON.stringify(this.testArray[i], null, 4));
function printBreakLine() {
    display.innerHTML += "<hr><br>"
}