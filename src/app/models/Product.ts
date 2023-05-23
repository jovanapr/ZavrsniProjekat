export class Product {

    constructor(id: number, name: string, price: number, imgSrc: string, desc: string, cat: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imgSrc = imgSrc;
        this.description = desc;
        this.category = cat;
        this.quantity = 0;
    }

    public id: number;
    public name: string;
    public price: number;
    public imgSrc: string;
    public description: string;
    public category: string;
    public quantity: number;
}

