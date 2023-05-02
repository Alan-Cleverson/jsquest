function alterarCorFundo(){
    let posts = document.getElementsByClassName('post');

    console.log(posts)

    let primeiroPost = posts[0]

    primeiroPost.style.backgroundColor = 'red'
}

function aumentarFonte(){
    let textoPost = document.getElementsByClassName('texto-post')

    textoPost[1].classList.add('font-grande')

    console.log(textoPost[1].classList)
}