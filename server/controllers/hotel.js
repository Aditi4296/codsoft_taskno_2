import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js"

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        next(err);
    }
}

export const updateHotel = async (req,res,next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
}

export const deleteHotel = async (req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        next(err);
    }
}

export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}

export const getAllHotel = async (req,res,next)=>{
    const {min,max,limit, ...others} = req.query
    try{
        const hotel = await Hotel.find({...others, cheapestPrice: { $gt: min | 1, $lt: max || 999 },}).limit(req.query.limit);
        res.status(200).json(hotel);
    }catch(err){
        // res.status(500).json(err)
        next(err);
    }
}

export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
        const list = await Promise.all(cities.map(city=>{
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list);
    }catch(err){
        // res.status(500).json(err)
        next(err);
    }
}

export const countByType = async (req,res,next)=>{
    try{
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const homestayCount = await Hotel.countDocuments({ type: "homestay" });
    const villaCount = await Hotel.countDocuments({ type: "villas" });
    const resortCount = await Hotel.countDocuments({ type: "resorts" });
    
        res.status(200).json([
            {type:"hotel", count:hotelCount},
            {type:"homestay", count:homestayCount},
            {type:"villas", count:villaCount},
            {type:"resorts", count:resortCount},
        ]);
    }catch(err){
        // res.status(500).json(err)
        next(err);
    }
}

export const getHotelRooms = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      const list = await Promise.all(
        hotel.rooms.map((room) => {
          return Room.findById(room);
        })
      );
      res.status(200).json(list)
    } catch (err) {
      next(err);
    }
  };