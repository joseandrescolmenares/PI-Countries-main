const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Activitys", {

    
    name: {
      type: DataTypes.STRING,
    },

    difficulty: {
      type: DataTypes.STRING,
    },
   
    
    duration:{
       type: DataTypes.STRING,
    },

    season: {
      type: DataTypes.ENUM("summer", "fall", "winter", "spring"),    
    },
  },{
    timestamps: false,
  });
};
