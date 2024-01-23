//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

//1) print all car brands

console.log('1) print all car brands');
carBooking.forEach(brands => console.log(brands[1]));
console.log('--------------------------------');

//2) print total no. of cars available

totalcars = carBooking.map((avail)=> avail[5]).reduce((car1,car2)=>car1+car2);
console.log(`2) print total no. of cars available ${totalcars}`);
console.log('-----------------------------------');

//3) print sedan cars details

console.log('3) print sedan cars details');
carBooking.filter((car)=>car[3]=='Sedan').forEach((item)=>console.log(item[1]))
console.log('-----------------------------------');

//4) print cars with price per day >60

console.log('4) print cars with price per day >60');
carBooking.filter((car)=>car[4]>60).forEach((item)=>console.log(item[1]))
console.log('-------------------------------------');

//5) print details of jeep wrangler

console.log('5) print details of jeep wrangler');
jeep = carBooking.find((item)=>item[2]=='Wrangler')
console.log(jeep);
console.log('-------------------------------------');

//6) sort cars based on the descending order of the price per day

console.log('6) sort cars based on the descending order of the price per day');
carBooking.sort((a,b)=>b[4]-a[4]).forEach((car)=>console.log(car[1]))
console.log('-------------------------------------');


//7) sort cars based on the ascending order of available cars

console.log('7) sort cars based on the ascending order of available cars');
carBooking.sort((a,b)=>a[5]-b[5]).forEach((car)=>console.log(car[1]))
console.log('-------------------------------------');

//8) find the car with the most available cars

mostavail = carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(`8) the car with the most available cars is ${mostavail[1]}`);
console.log('---------------------------------------');

//9) calculate the revenue if all the cars are rented for a day

for(car in carBooking){

}

//10) count the no of sedan cars

sedan = carBooking.filter((car)=>car[3]=='Sedan').reduce((car1,car2)=>car1[5]+car2[5])
console.log(sedan);

//11) print all unique car brands
console.log('11) all unique car brands are :');
carBooking.forEach((car)=>console.log(car[1]));
console.log('----------------------------------------');

//12) find the total no of available cars of all type

console.log('12) find the total no of available cars of all type');
console.log(carBooking.map((item)=>item[5]).reduce((car1,car2)=>car1[5]+car2[5]));


//13) find the car with the least availability

leastavail = carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(`13) the car with the least availability is ${leastavail[1]}`);

//14) check if there is any car with price per day of exactly '55'

console.log('14) check if there is any car with price per day of exactly 55');
fiftyfive = carBooking.some((car)=>car[4]==55)
console.log(fiftyfive?'yes':'no');

