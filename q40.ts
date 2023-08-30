//Assignment Question # 41
// Musicians: Make an array of magician's names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}


const magicianArray: string[] = ["Magician1", "magician2", "magician3", "magician4"];


show_magicians(magicianArray);
