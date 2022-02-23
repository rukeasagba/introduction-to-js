export class Movie {
    constructor(title, genre, tags) {
        this.title = title;
        this.genre = genre;
        this.tags = tags;
    }

    description() {
        this.tags.forEach((tag) => {
            console.log(`${this.title} has ${tag} tag.`);
        });
    }
}



//Name export
const colors = ['Brown', 'Red'];
export {colors};

//Default export
export default Movie;