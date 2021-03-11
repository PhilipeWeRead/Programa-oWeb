function imgRng() {
    let imgs = ["gojoJutso.jpg", "gojoJutso2.jpg", "gojoJutso3.jpg", "gojoJutso4.jpg", "gojoJutso5.jpg", "gojoJutso6.jpg", "gojoJutso7.jpg"];
    let mudar = Math.floor(Math.random() * imgs.length);
    const image = document.querySelector('img');
    image.src = imgs[mudar];
}

function onClick(){
  console.log('clicado');
  imgRng();
}

const button = document.querySelector('button');
button.addEventListener('click', onClick);

