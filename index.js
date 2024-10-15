//A visitor receives a prompt upon opening the website to enter 
//a list of comma-separated froyo flavors. 
//They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. 
//When they view the browser console, they observe an object listing 
//how many of each flavor they have ordered. 
//In this case, they will be able to observe that they have 
//ordered three vanilla, two coffee, and one strawberry froyo.

const froyoInput = prompt ('Enter a list of Froyo flavors seperated with a comma');
const arrayFroyo = froyoInput.split(`,`).map(flavor => flavor.trim());
const flavorCount = {};

for (let i = 0; i < arrayFroyo.length; i++) {

const flavor = arrayFroyo[i];
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;

    } else {
        flavorCount[flavor] = 1;
    }
}
const result = Object.entries(flavorCount)
 .map(([flavor,count]) => `${flavor.charAt(0) + flavor.slice(1)}: ${count}`)
.join(`, `);

alert(result);