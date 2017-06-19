import { Restaurant } from '../shared/restaurants.model';

export class Cities {
    public name: string;
    public num: string;
    public restaurants: Restaurant[];

    constructor(name: string, num: string, restaurants: Restaurant[]) {
        this.name = name;
        this.num = num;
        this.restaurants = restaurants;
    }
}
