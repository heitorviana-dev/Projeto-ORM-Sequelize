const CategoriaServices = require('../services/CategoriaServices');

class CategoriaController{
  static async lerCategorias(req, res){
    try {
      const categorias = await CategoriaServices.getCategorias();
      if(!categorias){
        return res.status(400).json({mensagem: 'Erro ao buscar na bd.'});
      }
      if(categorias.length === 0){
        return res.status(204).json({ mensagem: 'Não há categorias.' });
      }
      return res.status(200).json(categorias);
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
  }

  static async criarCategoria(req, res){
    try {
      if(!req.body['titulo']){
        return res.status(400).json({ mensagem: 'Insira os dados para a criação.' });
      }
      const categoria = await CategoriaServices.postCategoria(req.body);
      if(!categoria){
        return res.status(400).json({ mensagem: 'Erro nos dados inseridos, por favor tente novamente.' });
      }
      return res.status(201).json({ mensagem: 'Categoria criada com sucesso.' });
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor.' }); 
    }
  }

  static async atualizarCategoria(req, res){
    try {
      if(!req.body['titulo']){
        return res.status(400).json({ mensagem: 'Insira os dados para a atualização.' });
      }
      if(req.params.id){
        const categoria = await CategoriaServices.putCategoria(req.params.id, req.body);
        if(!categoria) return res.status(400).json({ mensagem: 'Erro na atualização da categoria.' });
        return res.status(200).json({ mensagem: 'Categoria atualizada com sucesso.' });
      }
      return res.status(404).json({ mensagem: 'Id não encontrado.' });
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
  }

  static async deletarCategoria(req, res){
    try {
      if(req.params.id){
        const categoria = await CategoriaServices.deleteCategoria(req.params.id);
        if(!categoria) return res.status(400).json({ mensagem: 'Erro na exclusão da categoria.' });
        return res.status(200).json({ mensagem: 'Categoria deletada com sucesso.' });
      }
      return res.status(404).json({ mensagem: 'Id não encontrado.' });
    } catch(error){
      return res.status(500).json({ mensagem: 'Erro no servidor.' });
    }
  }
}

module.exports = CategoriaController;