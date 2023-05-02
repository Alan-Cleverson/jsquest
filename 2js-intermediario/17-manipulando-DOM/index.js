function adicionarComentario(){
    let inputComentario = document.getElementsByName('nome-comentario')
    
    let textoDigitado = inputComentario[0].value;
  
    let novosComentarios = document.getElementById('novosComentarios');

    novosComentarios.innerHTML += `<p>Novo comentario: ${textoDigitado} </p>`
}