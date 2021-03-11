const imagens = document.querySelectorAll('img');
const child = document.createElement('h1');
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/firstChild 
const firstChild = document.body.firstChild;
let contador = 0
if(imagens){
   contador = imagens.length
   for (let xImgPag = 0; xImgPag < contador; xImgPag++) {
        let width = imagens[xImgPag].width;
        let height = imagens[xImgPag].height;
        imagens[xImgPag].src = "https://i.pinimg.com/originals/17/a5/c6/17a5c6da76d4a5bf5e9d25f883a969de.png";
        imagens[xImgPag].width = width;
        imagens[xImgPag].height = height;
   }

}  

	child.textContent ='Number of images:' + contador;
   	child.style.color ='purple';

   	document.body.insertBefore(child,firstChild);
   	// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore 
  	// 	o first child vai ser o elemento q vou passar de referencia
