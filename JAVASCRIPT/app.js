document.querySelector('#btn3').addEventListener('click',(e)=>{
    var nome =document.querySelector('#nome').value
    var email=document.querySelector('#email').value
    var area =document.querySelector('#area').value

    if(!nome && !email && !area){
        alert('Preencha os campos*')
    }else{
        alert('Obrigado: '+nome+', Entraremos em contato!')
    }
});

document.querySelector('.mobile-deskt').addEventListener('click',(e)=>{
    var mb= document.querySelector(".menu-mob")
    mb.style.display="flex";
})