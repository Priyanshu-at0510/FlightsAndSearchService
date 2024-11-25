const {CityRepository} =require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository=new  CityRepository();

    }
    async createCity(data){
       try {
           const city=await this.cityRepository.createCity(data);
           return city;
       } catch (error) {
          console.log("Something went wrong at service layer");
          throw{error};
       }
    }
    async deleteCity(cityID){
        try {
           const response=this.cityRepository.deleteCity({CityID:cityID});
           return response;
        } catch (error) {
           console.log("Something went wrong at service layer");
           throw{error};
        }
    }
    async updateCity(cityID,data){
        try {
            const city=await this.cityRepository.updateCity(cityID,data);
            return city;
        } catch (error) {
           console.log("Something went wrong at service layer");
           throw{error};
        }
    }
    async getCity(cityID){
        try {
           const city=await this.cityRepository.getCity(cityID);
           return city;
        } catch (error) {
           console.log("Something went wrong at service layer");
           throw{error};
        }
    }

    async getAllCities(){
        try {
            const cities=await this.cityRepository.getAllCities();
            return cities;
        } catch (error) {
            console.log("Something went wrong at service layer");
           throw{error};
        }
    }

}
module.exports=CityService;