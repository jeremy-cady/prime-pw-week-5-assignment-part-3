console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    console.log('In addToCollection');

    let newAlbum = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(newAlbum);

    return newAlbum;
}

console.log('Adding to collection:', addToCollection('Djesse Vol. 3', 'Jacob Collier', '2020'));
console.log('Adding to collection:', addToCollection('SuperBlue', 'Kurt Elling', '2021'));
console.log('Adding to collection:', addToCollection('Turbo', 'Cory Wong & Dirty Loops', '2021'));
console.log('Adding to collection:', addToCollection('Phoenix', 'Dirty Loops', '2020'));
console.log('Adding to collection:', addToCollection('Reverie', 'Tom Misch', '2016'));
console.log('Adding to collection:', addToCollection('Liquid Spirit', 'Gregory Porter', '2013'));




