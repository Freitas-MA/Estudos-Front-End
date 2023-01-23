/*
Objetivos: 
1. Quando o usuario clicar em Ver trailer deve abrir a modal Ver treiler.
2. Quando o usuario clicar no X, deve-se fechar a modal
*/
const botaoTrailerMario = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal")


const linkVideo = video.src;
console.log(video.src);
console.log('mostrar o document', document);
console.log(document.querySelector('.botao-trailer'));

botaoTrailerMario.addEventListener("click", ()=>{
    modal.classList.add("aberto");
   video.setAttribute("src", linkVideo)
});

botaoFecharModal.addEventListener("click", ()=>{
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
});