const user = {
    nome: "sinthya",
    email: "sinthya.silva@escola",
    nascimento: "21/10/2007",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome,  this.email)
    }
}

const admin = {
    nome: "sinthya",
    email: "sinthya.silva@escola",
    role: "estudante",
    criarCurso() {
        console.log('curso criado!')

    }
    

}
 Object.setPrototypeOf(admin, user)
 admin.criarCurso()
 admin.exibirInfos()