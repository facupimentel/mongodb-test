class Manager {
  constructor(model) {
    this.model = model;
  }

  create = async (data) => {
    try {
      const one = await this.model.create(data); // el metodo create es de mongoose
      return one;
    } catch (error) {
      throw error;
    }
  };

  readAll = async (filter) => {
    try {
      // sin implementar un filtro
      // const all = await this.model.find();
      // para filtrar datos
      const all = await this.model.find(filter);
      return all;
    } catch (error) {
      throw error;
    }
  };

  readById = async (id) => {
    try {
      const one = await this.model.findById(id);
      return one;
    } catch (error) {
      throw error;
    }
  };

  readOne = async (filter) => {
    try {
      const one = await this.model.findOne(filter);
      return one;
    } catch (error) {
      throw error;
    }
  };

  updateById = async (id, data) => {
    try {
      // devuelve el objeto luego de la actualizacion
      const opts = { new: true };
      const one = await this.model.findByIdAndUpdate(id, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };

  updateOne = async (filter, data) => {
    try {
      // devuelve el objeto luego de la actualizacion
      const opts = { new: true };
      const one = await this.model.findOneAndUpdate(filter, data, opts);
      return one;
    } catch (error) {
      throw error;
    }
  };

  destroyOne = async (filter) => {
    try {
      const one = await this.model.findOneAndDelete(filter);
      return one;
    } catch (error) {
      throw error;
    }
  };

  destroyById = async (id) => {
    try {
      const one = await this.model.findByIdAndDelete(id);
      return one;
    } catch (error) {
      throw error;
    }
  };
}

export default Manager