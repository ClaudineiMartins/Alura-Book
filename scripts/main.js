
function alteraBGmenu (){
    const inputMenuHamburger = document.querySelector('.botao__check-menu');
    const fundoMenuHamburger = document.querySelector('.link__cabecalho-menu');
    const imgMenuHamburger = document.querySelector('#menu-icon--hamburguer');
    if (inputMenuHamburger.checked){
        fundoMenuHamburger.style.background='var(--gradiente)';
        imgMenuHamburger.src="assets/imagens/Menu Aberto.png";

       
        
    }
    else {
        fundoMenuHamburger.style.background='#FFFFFF'
        imgMenuHamburger.src="assets/imagens/Menu.svg"

    }
}
addEventListener ('click', alteraBGmenu);
function alteraBGtextoMenu (){
    const inputMenuTexto = document.querySelector('.check-menu--categorias');
    const textoMenu = document.querySelector('.containers__header-center--categorias');

    if(inputMenuTexto.checked){
        textoMenu.style.background="var(--gradiente)"
        textoMenu.style.color="#FFFFFF"

    }
    else {
        textoMenu.style.background="#FFFFFF"
        textoMenu.style.color="#000000"

    }
}
addEventListener('click', alteraBGtextoMenu);