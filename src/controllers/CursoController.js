class CursoController{
    static async getCursos(req, res){
        res.status(200).json({mensagem: 'Seja bem vindo a página de cursos.'});
    }
}

export default CursoController;