const { Countrys, Activitys } = require("../db");

const PostActivity = async (name, difficulty, duration, season, countrys) => {
  if(!name || !difficulty || !duration || !season || !countrys){
    return 
}
  const activitis = await Activitys.create({
    name,
    difficulty,
    duration,
    season,
  });

  try {
    countrys.map(async (country) => {
      let search = await Countrys.findAll({ where: { id: country } });
  if(search){ 
      activitis.addCountry(country);
  }
    });
    return activitis;
  } catch (error) {
    console.log(error);
  }

};

const getAllActivities = async (req, res) => {
  try {
      const dbActInfo = await Activitys.findAll({
          attributes: ['name'],
          include:  Countrys                  
      })
    return  dbActInfo;               
  } catch (error) {
      console.log(error);
  }
};


module.exports = { PostActivity, getAllActivities };
