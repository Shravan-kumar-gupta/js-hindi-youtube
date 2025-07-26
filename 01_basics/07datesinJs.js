// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2025,6,25)
// let myCreatedDate = new Date(2025,6,25,5,3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toString());


let myCreatedDate = new Date("07-25-2025")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate  =  new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday :"long",
    timeZoneName :"longGeneric"
})
)