setInterval(() => {
    let date= new Date();
    hourtime= date.getHours();
    mintime= date.getMinutes();
    sectime= date.getSeconds();


    //  suii ki rotaion ka code
    hourrotaion= 30*hourtime + mintime/2;

    minrotation= 6*mintime;

    secrotation= 6*sectime;

    hour.style.transform = `rotate(${hourrotaion}deg)`;
    minute.style.transform = `rotate(${minrotation}deg)`;
    second.style.transform = `rotate(${secrotation}deg)`;
}, 1000);