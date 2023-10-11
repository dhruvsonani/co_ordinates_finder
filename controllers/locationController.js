const getCoordsForAddress = require('../utils/location');
 
const getLocation = async(req,res) => {
    const address = req.body.address;
    let coordinates;
    try{
      coordinates = await getCoordsForAddress(address);
      res.json({message: 'Successfull',coordinates: coordinates});
    }
    catch(error)
    {
      res.status(400).json({message: 'Unsuccessfull'});
    }
}

module.exports = getLocation;