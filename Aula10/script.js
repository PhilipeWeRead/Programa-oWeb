document.body.addEventListener("click", abrirPorta);
var count =0;
function abrirPorta(ev){
    if(count%2===0){
        document.getElementById('porta').src="img/porta-aberta.jpg";
        document.getElementById('identificador').innerHTML = "Porta Aberta" ;
    }
    else
    {
        document.getElementById('porta').src="img/porta-fechada.jpg";
        document.getElementById('identificador').innerHTML = "Porta Fechada" ;
    }
    count++;
    document.getElementById('contador').innerHTML=count;
    document.getElementById('ultimaAcao').innerHTML= Date();
    
}
