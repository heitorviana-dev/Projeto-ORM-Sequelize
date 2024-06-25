class PessoaController{
  static async getAll(req, res){
    try {
        // Acessar o modelo
        res.status(200).json({mensagem: 'Seja bem vindo.'});
    } catch(e){
        // Tratamento de erro
        res.status(500).json({error: e});
    }
  }
}

export default PessoaController;