class Controller{
    constructor(entidadeService){
        this.entidadeService = entidadeService;
    }

    async getAll(req, res){
        try{
            const listaDeRegistros = await this.entidadeService.pegaTodosOsRegistros();
            res.status(200).json(listaDeRegistros);
        }catch(e){
            res.status(500).json({mensagem: 'Erro no servidor.'});
        }
    }
}

module.exports = Controller;