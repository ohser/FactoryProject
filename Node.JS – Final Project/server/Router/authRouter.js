const express = require('express');
const jwt = require('jsonwebtoken');

const axios = require('axios')

const router = express.Router();

//entry point : http//localhost:3000/auth

router.post('/login', async (req,res) => {
    const { username, email } = req.body;
  
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users", {
          params: {
            username,
            email,
          },
          
        });
        if (data[0].username === username && data[0].email === email ) {
            const userId = data[0].id; // find user ID
            const ACCESS_SECRET_TOKEN = 'someKey';
        
            const accessToken = jwt.sign(
                { id: userId },
                 ACCESS_SECRET_TOKEN ,
                 {expiresIn: "1h"}
                 );
                 res.send({accessToken});
          }    else {res.status(401).send('Unauthorized')}


})

module.exports = router;
