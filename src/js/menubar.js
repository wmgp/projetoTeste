window.onload = function(){
    document.querySelector(".toggle-button").addEventListener("click",()=>{
        if(document.querySelector(".menu nav ul").style.display =='flex'){
            document.querySelector(".menu nav ul").style.display = 'none'
        }else{
            document.querySelector(".menu nav ul").style.display = 'flex'
        }
    })
}