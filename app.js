let numJac = document.querySelectorAll('.numJac');
let titleJac = document.querySelectorAll('.titleJac');//done
let disJac = document.querySelectorAll('.font-dis');//done جاكت دبل فيس خامة مستوردة وتر بروف
// 
let blover = document.querySelectorAll('.blover');//done
let bloverT = document.querySelectorAll('.bloverT');//done هاي كول مستورد الخامة عجينه
let teshirt = document.querySelectorAll('.teshirt');//done تي شيرت شتوي قطن 100% (نبيتي - اصفر - اسود)
let teshirtT = document.querySelectorAll('.teshirtT');//done
let bantalon = document.querySelectorAll('.bantalon');
//done شروال سوفت مستورد  
let bantalonT = document.querySelectorAll('.bantalonT');//done شروال جبردين خامة عالية 
let boody = document.querySelectorAll('.boody'); //done
let boodyT = document.querySelectorAll('.boodyT'); //done أندر شيرت سادة خامة قطن ١٠٠٪ بكم

function prise(){
    for (let index = 0; index < numJac.length; index++) {
        numJac[index].innerHTML = "850 LE"        
    }
}
function title(){
    for (let index = 0; index < titleJac.length; index++) {
        titleJac[index].innerHTML = "جاكت"        
    }
}
///////
function priseT(){
    for (let index = 0; index < teshirt.length; index++) {
        teshirt[index].innerHTML = "300 LE"        
    }
}
function titleT(){
    for (let index = 0; index < teshirtT.length; index++) {
        teshirtT[index].innerHTML = "تي شيرت"        
    }
}
///////
function priseB(){
    for (let index = 0; index < blover.length; index++) {
        blover[index].innerHTML = "350 LE"        
    }
}
function titleB(){
    for (let index = 0; index < bloverT.length; index++) {
        bloverT[index].innerHTML = "هاي كول"        
    }
}
///////
function priseb(){
    for (let index = 0; index < bantalon.length; index++) {
        bantalon[index].innerHTML = "150 LE"        
    }
}
function titleb(){
    for (let index = 0; index < bantalonT.length; index++) {
        bantalonT[index].innerHTML = "شروال"        
    }
}
///////
function prisebo(){
    for (let index = 0; index < boody.length; index++) {
        boody[index].innerHTML = "65 LE"        
    }
}
function titlebo(){
    for (let index = 0; index < boodyT.length; index++) {
        boodyT[index].innerHTML = "أندر شيرت"        
    }
}

// function dis(){
//     for (let index = 0; index < disJac.length; index++) {
//         disJac[index].innerHTML = "جاكت بمقاسات مختلف للشباب واولان جزابة"        
//     }
// }



numJac.forEach(prise);
boody.forEach(prisebo);
bantalon.forEach(priseb);
blover.forEach(priseB);
teshirt.forEach(priseT);
titleJac.forEach(title);
bloverT.forEach(titleB);
teshirtT.forEach(titleT);
bantalonT.forEach(titleb);
boodyT.forEach(titlebo);



