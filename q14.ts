//Assignment Question # 15
//Changing Guest List: You just heard that one of your guests can't make it to the dinner, so you need to send out a new set of invitations , you'll have to think of someone else to invite......

const guestlist:string[]=["Fatima","Qandeel","Alina","Hafsa","Iqra","Eman"]
let poppedGuest= guestlist.pop();
guestlist.push("Tooba");
console.log(guestlist);

for (let i=0; i<guestlist.length; i++){
    console.log(`Salam ${guestlist[i]} I have to inform you that ${poppedGuest} couldn't make it to the dinner. But schedule and venue is same. So, see you soon there.`);
}