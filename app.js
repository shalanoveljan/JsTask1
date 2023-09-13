let name="Huseyn";
if(new Date().getHours()>=0 && new Date().getHours()<6 ){
    document.body.style.backgroundColor='black'
alert(`Gecen xeyre ${name} muellim!`);

}

else if(new Date().getHours()>=6 && new Date().getHours()<12 ){
    document.body.style.backgroundColor='white'
alert(`Sabahin xeyir ${name} muellim!`);

}

else if(new Date().getHours()>=12 && new Date().getHours()<18 ){
    document.body.style.backgroundColor='yellow'
alert(`Gunortan xeyir ${name} muellim!`);

}

else if(new Date().getHours()>=18 && new Date().getHours()<24 ){
    document.body.style.backgroundColor='grey'
alert(`Axsamin xeyir ${name} muellim!`);

}

else{
    alert(`Basqa bir ehtimal yoxdur`);
}


