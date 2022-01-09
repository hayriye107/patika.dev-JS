let user=prompt("Lütfen Adınızı giriniz")
    if(user.length===0){
        document.getElementById("myName").innerHTML="Anonim";
    }else{
        document.getElementById("myName").innerHTML=user; 
    }

    function showTime(){
        let dates, hours, minutes, seconds, days;
        dates=new Date();
        hours=dates.getHours();
        minutes=dates.getMinutes();
        seconds=dates.getSeconds();
        days =["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

       

        document.getElementById("myClock").innerHTML=`${hours}: ${minutes}: ${seconds}  ${days[dates.getDay()]}`; 

    }
    setInterval(function(){showTime(),1000})