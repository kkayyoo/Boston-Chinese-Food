import { FeaturedFood } from '../shared/food.model';

export class RestaurantDetail {
    public name: string;
    public type: string;
    public phone: string;
    public address: string;
    public price: string;
    public imagePath: string;
    public map: string;
    public hours1: string;
    public hours2: string;
    public food: FeaturedFood[];

    constructor(name: string, type: string, phone: string, address: string, price:string, imagePath: string, map: string, hours1: string, hours2: string, food: FeaturedFood[]) {
        this.name = name;
        this.type = type;
        this.phone = phone;
        this.address = address;
        this.price = price;
        this.imagePath = imagePath;
        this.map = map;
        this.hours1 = hours1;
        this.hours2 = hours2;
        this.food = food;
    }
}
