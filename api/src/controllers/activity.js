const { Countrys, Activitys } = require("../db");

const PostActivity = async (name, difficulty, duration, season, countrys,namedi) => {
  const activitis = await Activitys.create({
    name,
    difficulty,
    duration,
    season,
    namedi,
  });
  try {
    countrys.map(async (country) => {
      let search = await Countrys.findAll({ where: { id: country } });

      activitis.addCountry(search);
    });
    return activitis;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { PostActivity };
