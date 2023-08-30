//Assignment Question # 35
// Animals: Think of at least three different animals that have common characteristics. Store the name of these animals in a list, and then use for loop to print out the name of each animal. Modify your program to print a statement about each animal, a dog would make a great pet. Add a line at the end of your program stating what these have in common. You could print a sentence such as any of these animals would make a great pet!

const q35: string[] = ["cat", "dog", "monkey"]
for(let pet of q35){
    console.log(`A ${pet} would make a great pet!`);
}
console.log("Any of these animals would make a great pet!");