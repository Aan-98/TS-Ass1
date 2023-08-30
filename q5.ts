// Assignment question #6
// Stripping names: Store a person's name, and include some whitespace characters at the beginning and end of the name, "\t" and "\n" at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let q6:string= "     Jennifer Winget     ";
// let's find it's length first.
console.log(q6);
console.log("length before trimming", q6.length);

// for removing extra spaces we use trim(), so let's apply it
q6= q6.trim();
console.log(q6);
console.log("length after trimming", q6.length);
