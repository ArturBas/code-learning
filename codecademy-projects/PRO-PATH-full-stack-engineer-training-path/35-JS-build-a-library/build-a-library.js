/*
GOAL:
Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
    - Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    - Getters: all properties have a getter
    - Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie
    - Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    - Getters: all properties have a getter
    - Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD
    - Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
    - Getters: all properties have a getter
    - Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

    - Add more properties to each class (movieCast, songTitles, etc.)
    - Create a CD class that extends Media.
    - In .addRating(), make sure input is between 1 and 5.
    - Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    - Create class called Catalog that holds all of the Media items in our library.
*/


//SOLUTION:

class Media {
    constructor(title) {
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }

    toggleCheckedOutStatus() {
        if(this._isCheckedOut === true) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = false;
        }
    }

    getAverageRating() {
        return (this._ratings.reduce((a, b) => a + b, 0)) / this._ratings.length;
    }

    addRating(rate) {
        if(rate < 1 || rate > 5 && Number.isInteger(rate) === false) {
            console.log('Use integer values from 1 to 5');
        } else {
        this._ratings.push(rate);
        }
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        console.log('Playlist:');
        let i = 1;
        for(let song of this._songs) {
            console.log(`${i}. ${song}`);
            i++;
        }
    }
    
    shuffle() {
        let currentIndex = this._songs.length,  randomIndex;
      
        while (currentIndex != 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [this._songs[currentIndex], this._songs[randomIndex]] = [
            this._songs[randomIndex], this._songs[currentIndex]];
        }
      
        console.log('Shuffled Playlist:');
        let j = 1;
        for(let song of this._songs) {
            console.log(`${j}. ${song}`);
            j++;
        }
    }
}

class Catalog {
    constructor(name, items) {
        this._name = name;
        this._items = items;
    }

    get name() {
        return this._name;
    }

    get items() {
        return this._items;
    }    
}

//TESTING:

//Book
const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckedOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

//Movie
const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckedOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

//CD
const ten = new CD('Ten', 'Pearl Jam', ['Alive', 'Jeremy', 'Ten', 'Oceans']);
ten.toggleCheckedOutStatus();
console.log(ten.isCheckedOut);
ten.addRating(5.5);
ten.addRating(5);
ten.addRating(5);
console.log(ten.getAverageRating());
ten.songs;
ten.shuffle();

//Catalog
const album = new CD('title1', 'artist1', ['song1', 'song2', 'song3', 'song4']);
const CDs = new Catalog('myCDs', [ten, album]);
console.log(CDs.items);
console.log(CDs.name);