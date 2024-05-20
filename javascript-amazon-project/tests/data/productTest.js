import { Product, Clothing, Appliance } from "../../data/products.js";

describe('test suite: Product', () => {
    let product;

    beforeEach(() => {
        product = new Product({
            id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
            stars: 4,
            count: 127
            },
            priceCents: 2095,
            keywords: [
            "sports",
            "basketballs"
            ]
        });
    });

    it('has the correct properties', () => {
        expect(product.id).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");
        expect(product.image).toEqual("images/products/intermediate-composite-basketball.jpg");
        expect(product.name).toEqual("Intermediate Size Basketball");
        expect(product.rating.stars).toEqual(4);
        expect(product.rating.count).toEqual(127);
        expect(product.priceCents).toEqual(2095);
    });
    it('gets the stars url', () => {
        expect(product.getStarsUrl()).toEqual(`images/ratings/rating-40.png`);
    });
    it('gets the price', () => {
        expect(product.getPrice()).toEqual('$20.95');
    });
    it('does not display extra info', () => {
        expect(product.extraInfoHTML()).toEqual('');
    });
});

describe('test suite: Clothing', () => {
    let clothing;

    beforeEach(() => {
        clothing = new Clothing({
            id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
            stars: 4.5,
            count: 87
            },
            priceCents: 1090,
            keywords: [
            "socks",
            "sports",
            "apparel"
            ],
            type: "clothing",
            sizeChartLink: "images/clothing-size-chart.png"
        });
    });

    it('has the correct properties', () => {
        expect(clothing.id).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(clothing.image).toEqual("images/products/athletic-cotton-socks-6-pairs.jpg");
        expect(clothing.name).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs");
        expect(clothing.rating.stars).toEqual(4.5);
        expect(clothing.rating.count).toEqual(87);
        expect(clothing.priceCents).toEqual(1090);
    });
    it('gets the stars url', () => {
        expect(clothing.getStarsUrl()).toEqual(`images/ratings/rating-45.png`);
    });
    it('gets the price', () => {
        expect(clothing.getPrice()).toEqual('$10.90');
    });
    it('displays size chart link', () => {
        expect(clothing.extraInfoHTML()).toContain(`<a href="images/clothing-size-chart.png" target="_blank">`);
    });
});

describe('test suite: Appliance', () => {
    let appliance;

    beforeEach(() => {
        appliance = new Appliance({
            id: "54e0eccd-8f36-462b-b68a-8182611d9add",
            image: "images/products/black-2-slot-toaster.jpg",
            name: "2 Slot Toaster - Black",
            rating: {
            stars: 5,
            count: 2197
            },
            priceCents: 1899,
            keywords: [
            "toaster",
            "kitchen",
            "appliances"
            ],
            type: 'appliance',
            instructionsLink: 'images/appliance-instructions.png',
            warrantyLink: 'images/appliance-warranty.png'
        });
    });

    it('has the correct properties', () => {
        expect(appliance.id).toEqual("54e0eccd-8f36-462b-b68a-8182611d9add");
        expect(appliance.image).toEqual("images/products/black-2-slot-toaster.jpg");
        expect(appliance.name).toEqual("2 Slot Toaster - Black");
        expect(appliance.rating.stars).toEqual(5);
        expect(appliance.rating.count).toEqual(2197);
        expect(appliance.priceCents).toEqual(1899);
    });
    it('gets the stars url', () => {
        expect(appliance.getStarsUrl()).toEqual(`images/ratings/rating-50.png`);
    });
    it('gets the price', () => {
        expect(appliance.getPrice()).toEqual('$18.99');
    });
    it('displays instructions and warranty in info', () => {
        expect(appliance.extraInfoHTML()).toContain(`<a href="images/appliance-instructions.png" target="_blank">`);
        expect(appliance.extraInfoHTML()).toContain(`Instructions`);
        expect(appliance.extraInfoHTML()).toContain(`<a href="images/appliance-warranty.png" target="_blank">`);
        expect(appliance.extraInfoHTML()).toContain(`Warranty`);
    });
});