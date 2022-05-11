const axios = require('axios')
const {Countrys, Activitys} = require('../db');
const { Op } = require('sequelize');

const infoApi = async() =>{
    try{ 
        const bD = await Countrys.findAll()
        if (!bD.length) {
          const carga = await axios.get("https://restcountries.com/v3.1/all")
        
          const Info = await carga.data?.map(el => {
            return {
              idName: el.cca3,
              name: el.name.common,
              flag: el.flags.png,
              continent: el.continents[0],
              capital: el.capital ? el.capital[0] : "Capital not found",
              subregion: el.subregion? el.subregion:"subregion not found" ,
              area: el.area,
              population: el.population
            }
          })
          const dbSave = await Countrys.bulkCreate(Info)
        return dbSave
        }else return bD
    }catch(error){console.log(error)}
}


const dbInfo = async (name) =>{
  try{
    if(!name){ 
      
  const paises = await Countrys.findAll({
    include:[{model: Activitys}]
  }) 
  return paises
}
else{
  const pais = await dbInfo()
  console.log(pais)
    const filterName = await pais.filter(el => el.name.includes(name.charAt(0).toUpperCase() + name.slice(1)));
    console.log(filterName)
    return filterName
}
     
  }catch(error){console.log(error)}
}


const countryId = async(id) =>{
 const idPaises = await dbInfo()
 const countryID = idPaises.filter(el => el.id == id);
 if(!countryID.length) {
   console.log(countryID)
   return 'no se encontro ningun pais'
 }
 return countryID
}








module.exports = {infoApi, dbInfo, countryId,};


