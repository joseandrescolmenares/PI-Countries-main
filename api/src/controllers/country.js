const axios = require('axios')
const {Countrys, Activitys} = require('../db');
const { Op } = require('sequelize');

const infoApi = async() =>{
    try{ 
        const bD = await Countrys.findAll()
        if (bD.length < 1) {
          const carga = await axios.get("https://restcountries.com/v3.1/all")
        
          const Info = await carga.data?.map(el => {
            return {
              idName: el.cca3,
              name: el.name.common,
              flag: el.flags[0]?el.flags:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png',
              continent: el.continents[0],
              capital: el.capital ? el.capital[0] : "Capital not found",
              subregion: el.subregion? el.subregion:"subregion not found" ,
              area: el.area,
              population: el.population
            }
          })
          const dbSave = await Countrys.bulkCreate(Info)
        return dbSave
        }
    }catch(error){console.log(error)}
}




module.exports = {infoApi};


