const User = require('../models/user');
const {Sequelize} = require('sequelize');

class UserController{
    getUser(id){
        return{
            id:1,
            name:"Amabile Forster",
        };
    }

    getUsers(){
        return[
            {
                id:1,
                name:"Amabile Forster",
            },
            {
                id:2,
                name:"Lucas Kraus",
            },
            {
                id:3,
                name:"Pandora",
            },
            {
                id:4,
                name:"Draco",
            }
        ]
    }
};

module.exports = UserController;