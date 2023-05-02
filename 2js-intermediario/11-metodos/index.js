let usuario = {
    nome: 'Roberto',
    excluir: function () {
        console.log('O usuario, '+ this.nome + ' foi excluido!')
    }
}
usuario.excluir()