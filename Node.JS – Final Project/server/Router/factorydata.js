const express = require('express');


const factorydata = require('../model/mongoose')

const router = express.Router();
const get = async ( ) =>
{
    try {
        const data = await factorydata.User.find().maxTimeMS(10000000);
        console.log(data);
      } catch (error) {
        console.error('MongoDB query error:', error);
      }
}

get()