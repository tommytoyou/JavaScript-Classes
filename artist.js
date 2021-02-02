class Artist {
    constructor(name, age, genre, label){
        // you will need to decide what the datatypes have to be
        // string, integer, arrays, objects, booleans
        this.name = name;
        this.age = age;
        // the instance needs to be,,,
        this.genre = genre;
        this.labe = label;
        this.albums =[];
        this.songs =[];
        this.image ='';
        this.instagram = null;


    }
    addAlbum(album) {
        this.albums.push(album);
        consiole.log(`this is another ${album}'for ${this.name}`)
    }
    addSongs(songs) {
        this.albums.push(album);
        consiole.log(`this is another ${songs}'for ${this.name}`)
    }
    addImage(imageLink) {
            this.image = imageLink;
    }
    addInstagram(InstagramLink) {
        this.Instagram = InstagramLink;
}


const Bethoven = new Artist('Beethoven', '400', 'hip hop', 'cash money records');
const Drake = new Artist('Drake', '33', 'classical', 'any');

const carlCox = new Artist('Carl Cox', '50', 'house', 'cash money records');




addAlbum(album) {
    console.log(`${album}`);
    this.album.push(album);
}

Artist.addAlbum('Moonlight Sonata');