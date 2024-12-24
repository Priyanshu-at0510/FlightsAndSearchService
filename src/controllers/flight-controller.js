const {FlightService}=require('../services/index');

//creating a new object
const flightService=new FlightService();

const create =async(req,res)=>{
      try {
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully created a flight",
            err:{}
        });
      } 
      catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'Not able to create a city',
            err:error
        });
      }
}

module.exports={
   create
}
