export class FeaturedFood {
    public name: string;
    public imagePath: string;
    public info: string;


    constructor(name: string, imagePath: string, info: string ) {
        this.name = name;
        this.imagePath = imagePath;
        this.info = info;
    }
}
