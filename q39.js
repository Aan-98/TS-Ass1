"use strict";
// Assignment Question # 40
// Album: Write a function called make_album() that builds an Object describing a music Album. The function should take in an artist name and an album title, and it should return an Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the albums's Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artistName, albumTitle, tracks) {
    const music_album = {
        artistName,
        albumTitle
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album;
}
;
const q40_1 = make_album("BTS", "dreamers");
const q40_2 = make_album("Arijit Singh", "Rait Zara Si", 10);
const q40_3 = make_album("Atif Aslam", "Any Qawali", 16);
console.log(q40_1);
console.log(q40_2);
console.log(q40_3);
