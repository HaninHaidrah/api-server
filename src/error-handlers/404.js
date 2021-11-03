'use strict';

module.exports=(req,res)=>{
    const outPut={
        error:404,
        message:"path is Not-Found"
    }
    res.status(404).send(outPut);
}