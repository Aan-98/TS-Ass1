// Assignment Question # 30
// Hello Admin: Make an array of five or more usernames,including the name 'Admin'. Imagine you are writing code that will print a greeting to each user after they log in to website. Loop through the array, and print a greeting to each user:
// If the username is 'Admin' , print a special greeting, such as hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, Hello Eric thankyou for logging in again.

const userArr : string[] = ["Hadi", "Tina", "Jerry", "Admin", "Ali"]
for(let user of userArr){
    if(user === "Admin"){
        console.log("Hello Admin, Would you like to see a status report?");
    }else {
        console.log(`Hello ${user}, thankyou for logging in again`);
    }
}