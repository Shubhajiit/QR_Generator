let imgbox = document.getElementById("imgbox");
let qrImage = document.getElementById("qr-img");
let input = document.getElementById("qr-text")
let button = document.getElementById("btn");


function generateQr(event){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+input.value;



}


button.addEventListener("click",(event)=>{
    generateQr();
})