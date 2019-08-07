const axios = require('axios');
const Dev = require('../Models/Dev');
 

module.exports = {
     async store(req,res){
        const {username} = req.body   ;
        
        const userExists = await Dev.findOne({user:username});
        if (userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);
        
        const {login, name, bio, avatar_url} = response.data;
        const dev = await Dev.create({
            name ,
            login ,             
            bio ,
            avatar_url
        });        
        return res.json(dev);

     }
};