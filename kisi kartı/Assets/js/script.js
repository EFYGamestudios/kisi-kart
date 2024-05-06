var kaydırma=document.getElementById("kaydırma");
var icerik=document.getElementsByClassName("li");
var a=document.getElementById("aa");
var kaydırmaKontrol=true;
aa();
function aa(){
    a.addEventListener("click",function(){
        if(kaydırmaKontrol==true){
            kaydırma.style.transform="translateX(38px)";
            kaydırmaKontrol=false;
            icerik[1].style.display="block";
            icerik[0].style.display="none";
        }
        else{
            kaydırma.style.transform="translateX(0px)";
            kaydırmaKontrol=true;
            icerik[0].style.display="block";
            icerik[1].style.display="none";
        }
    });
}