const { Categoria } = require('../models');

class CategoriaServices{
  static async getCategorias(){
    try {
      const categorias = await Categoria.findAll();
      return categorias;
    } catch(error){
      return false;
    }
  }

  static async postCategoria(body){
    try {
      await Categoria.create(body);
      return true;
    } catch(error){
      return false;
    }
  }

  static async putCategoria(id, body){
    try {
      await Categoria.update(body, { where: {id} }, {});
      return true;
    } catch(error){
      return false;
    }
  }

  static async deleteCategoria(id){
    try {
      await Categoria.destroy({ where: {id} });
      return true;
    } catch(error){
      return false;
    }
  }
}

module.exports = CategoriaServices;