//let perguntas = document.getElementsByClassName("botao-pergunta")
//const [ botao, pergunta, image ] = ['botao', 'pergunta', 'image' ].map(item=> document.getElementById(item))
const botao = document.getElementsByClassName('botao-pergunta')
const menu = document.getElementsByClassName('pergunta')
const image = document.getElementsByClassName('imagem-pergunta')
botao[0].addEventListener("click", () => {
    if(menu[0].style.display === 'none') {
        menu[0].style.display = 'block';
        image[0].style.transform = 'rotate(90deg)'
    }else{
        menu[0].style.display = 'none';
        image[0].style.transform = 'none'

    }})

botao[1].addEventListener("click", () => {
    if(menu[1].style.display === 'none') {
        menu[1].style.display = 'block';
        image[1].style.transform = 'rotate(90deg)'
    }else{
        menu[1].style.display = 'none';
        image[1].style.transform = 'none'

    }})

botao[2].addEventListener("click", () => {
    if(menu[2].style.display === 'none') {
        menu[2].style.display = 'block';
        image[2].style.transform = 'rotate(90deg)'
    }else{
        menu[2].style.display = 'none';
        image[2].style.transform = 'none'
    }})

botao[3].addEventListener("click", () => {
    if(menu[3].style.display === 'none') {
        menu[3].style.display = 'block';
        image[3].style.transform = 'rotate(90deg)'
    }else{
        menu[3].style.display = 'none';
        image[3].style.transform = 'none'
    }})    
    
botao[4].addEventListener("click", () => {
    if(menu[4].style.display === 'none') {
        menu[4].style.display = 'block';
        image[4].style.transform = 'rotate(90deg)'
    }else{
        menu[4].style.display = 'none';
        image[4].style.transform = 'none'
    }})

