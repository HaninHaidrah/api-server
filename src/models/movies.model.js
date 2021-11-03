'use strict';

const movie=(sequelize,DataTypes)=>sequelize.define('movie',{//'movie is the name of our table'

    movie_name:{
        type: DataTypes.STRING,


    },
    employee_type:{
        type: DataTypes.STRING

    }

});


module.exports=movie;
