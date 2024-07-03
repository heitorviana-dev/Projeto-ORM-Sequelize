const CursoServices = require('../services/CursoServices');

class CursoController{
    static async getCursos(req, res){
        try{
            const listaDeCursos = await CursoServices.getCursos();
            res.status(200).json(listaDeCursos);
        } catch(error){
            res.status(500).json(error);
        }
    }
}

export default CursoController;