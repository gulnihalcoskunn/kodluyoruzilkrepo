
let myName=document.querySelector("#myName");

let username=prompt("Whats your name?");

myName.innerHTML=`${username}`


let myClock =document.querySelector("#myClock")

function showTime(){

    const weekday = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const gun = new Date();
    let day = weekday[gun.getDay()];  
    
    var date=new Date().toLocaleTimeString('tr-TR');
    myClock.innerHTML = `${date + day}`  
    

}

setInterval(showTime, 1000); 