import { FeaturedFood } from '../shared/food.model';

export class RestaurantDetail {
    public name: string;
    public type: string;
    public phone: string;
    public address: string;
    public food: FeaturedFood[];

    constructor(name: string, type: string, phone: string, address: string, food: FeaturedFood[]) {
        this.name = name;
        this.type = type;
        this.phone = phone;
        this.address = address;
        this.food = food;
    }
}
