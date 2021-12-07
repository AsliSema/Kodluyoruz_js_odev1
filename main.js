
    let person = prompt("İsminizi Öğrenebilir Miyim?");
    let birthYear = parseInt(prompt("Doğum Yılınızı Öğrenebilir Miyim? "));
    document.getElementById("myName").innerHTML= person;
    let tarih = new Date();
    let year = tarih.getFullYear();
    let age = document.getElementById("age").innerHTML = (year - birthYear);
    
    
    function showTime() {
        let tarih = new Date();
        let saat = tarih.getHours();
        let dakika = tarih.getMinutes();
        let saniye = tarih.getSeconds();
        
        //güne adının alınması işlemi yapıldı.

        const nameGun = new Array(7);
        nameGun[0] = "Pazar" ; 
        nameGun[1] = "Pazartesi" ;
        nameGun[2] = "Salı" ;
        nameGun[3] = "Çarşamba" ;
        nameGun[4] = "Perşembe" ;
        nameGun[5] = "Cuma" ;
        nameGun[6] = "Cumartesi" ;

        let gun = nameGun[tarih.getDay()]; 

        let time =  document.querySelector("#myClock").innerHTML = `${saat} : ${dakika} : ${saniye}  ${gun}`;
       
        // zaman elemanlarının iki basamaklı olmaması halinde görsel olarak daha güzel durması açısından başına sıfır ekleme işlemi gerçekleştirildi.
       
        (saat<10) ? document.querySelector("#myClock").innerHTML = `0${saat} : ${dakika} : ${saniye} ${gun}` : time;
        (dakika<10) ? document.querySelector("#myClock").innerHTML = `${saat} : 0${dakika} : ${saniye} ${gun}` : time; 
        (saniye<10) ? document.querySelector("#myClock").innerHTML = `${saat} : ${dakika} : 0${saniye} ${gun}` : time;
        
    }

    setInterval(showTime, 1000);
    



