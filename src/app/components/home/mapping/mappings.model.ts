import { Restaurant } from '../../shared/restaurants.model';

export class City {
    public name: string;
    public backgroudImage: string;
    public restaurants: Restaurant[];

    constructor(name: string, backgroudImage: string, restaurants: Restaurant[]) {
        this.name = name;
        this.backgroudImage = backgroudImage;
        this.restaurants = restaurants;
    }
}
