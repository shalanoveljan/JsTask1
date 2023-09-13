let name="Huseyn";
let day=new Date().getDay();
console.log(day);
if(new Date().getHours()>=0 && new Date().getHours()<6 ){
    document.body.style.backgroundColor='black'
alert(`bugun:${day}-cu gun Gecen xeyre ${name} muellim!`);

}

else if(new Date().getHours()>=6 && new Date().getHours()<12 ){
    document.body.style.backgroundColor='white'
alert(`bugun:${day}-cu gun Sabahin xeyir ${name} muellim!`);
}

else if(new Date().getHours()>=12 && new Date().getHours()<18 ){
    document.body.style.backgroundColor='yellow'
alert(`bugun:${day}-cu gun Gunortan xeyir ${name} muellim!`);

}

else if(new Date().getHours()>=18 && new Date().getHours()<24 ){
    document.body.style.backgroundColor='grey'
alert(`bugun:${day}-cu gun Axsamin xeyir ${name} muellim!`);

}

else{
    alert(`${day}-cu gun ucun basqa bir ehtimal yoxdur`);
}


