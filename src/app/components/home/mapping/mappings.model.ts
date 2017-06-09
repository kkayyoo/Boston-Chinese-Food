export class Mapping {
    public imagePath: string;
    public name: string;

    constructor(imagePath: string, name: string) {
        this.imagePath = imagePath;
        this.name = name;
    }
}

export class City {
    public name: string;
    public backgroudImage: string;

    constructor(name: string, backgroudImage: string) {
        this.name = name;
        this.backgroudImage = backgroudImage;
    }
}
