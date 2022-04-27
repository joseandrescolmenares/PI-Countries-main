const {Countrys, Activitys} = require('../db');

const PostActivity = async(name, difficulty, duration, season, countrys) => {
    const activitis =  await Activitys.create({name, difficulty, duration, season})
    try{
        countrys.map(async (country) =>{
            let search = await Countrys.findAll({where: {id: country}})
            if(search){
                activitis.addCountry(country)
            }
            
        })
       return activitis
    }catch(error){console.log(error)}
}

// const getAllActivities = async()=>{
//     const db = await Activitys.findAll({
//         attributes: ['name'],
//         include: Countrys
//     })
//     return db


module.exports = {PostActivity}


