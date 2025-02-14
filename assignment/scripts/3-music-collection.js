console.log('***** Music Collection *****')

// create empty array named 'collection'
let collection = [];

// write function to add album objects to the 'collection' array 
function addToCollection( title, artist, yearPublished ) {
    console.log('In addToCollection', title, artist, yearPublished);

    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newAlbum);

    return newAlbum;
}

// adding six albums to 'collection' array
console.log('Adding to collection:', addToCollection('Djesse Vol. 3', 'Jacob Collier', '2020'));
console.log('Adding to collection:', addToCollection('SuperBlue', 'Kurt Elling', '2021'));
console.log('Adding to collection:', addToCollection('Turbo', 'Cory Wong & Dirty Loops', '2021'));
console.log('Adding to collection:', addToCollection('Phoenix', 'Dirty Loops', '2020'));
console.log('Adding to collection:', addToCollection('Reverie', 'Tom Misch', '2016'));
console.log('Adding to collection:', addToCollection('Liquid Spirit', 'Gregory Porter', '2013'));

// console.log collection array
console.log(collection);

// write a function called 'showCollection' to display 'collection' array
function showCollection( array ) {
    console.log('In showCollection', array);

    console.log('Number of albums in the collection:', array.length);

    for (let element of array) {
        console.log(`${element.title} by ${element.artist}, published in ${element.yearPublished}`);   
    }
}
// test 'showCollection' function on the 'collection' array
showCollection(collection);

// write a function that takes in an 'artist' string value and compares it against the 'artist' 
// atributes of all album Objects. If they match, push the array object to a new array named 
// 'resultsArray'. If there are no matches return an empty array.
function findByArtist( artist, array ) {
    console.log('In findByArtist', artist);
    resultsArray = [];

    // loop through array to find matches
    for( let element of array ) {
        if (element.artist === artist) {
            resultsArray.push(element);
        }
    }
    return resultsArray;
}

// test 'findByArtist' function
findByArtist( 'Jacob Collier', collection );
console.log(resultsArray);
findByArtist( 'Prince', collection );
console.log(resultsArray);
findByArtist( 'Dirty Loops', collection );
console.log( resultsArray );
findByArtist( 'Michael Jackson', collection );
console.log(resultsArray);







