const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activitys", {
   
    name: {
      type: DataTypes.STRING,
      unique: true, // NO PUEDE HABER 2 EP CON EL MISMO NOMBRE
    },

    difficulty: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    duration:{
       type: DataTypes.INTEGER,
    },
    season: {
      type: DataTypes.ENUM("summer", "fall", "winter", "spring"),    
    },
  },{
    timestamps: false,
  });
};
