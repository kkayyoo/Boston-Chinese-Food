export class FourCuisines {
    public imagePath: string;
    public name: string;
    public info: string;
    public link: string;

    constructor(imagePath: string, name: string, info: string, link: string) {
        this.imagePath = imagePath;
        this.name = name;
        this.info = info;
        this.link = link;
    }
}
