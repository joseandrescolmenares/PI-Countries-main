const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Countrys', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },

    idName:{
      type: DataTypes.STRING,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent:{
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital:{ 
      type: DataTypes.STRING,
      allowNull: false,

    },
    subregion:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    area:{
      type: DataTypes.STRING,
      allowNull: true,

    },
    population:{
      type: DataTypes.STRING,
      allowNull: true,
    }


  },{
    timestamps: false,
  });
};
