module.exports =  (err, req, res, next) =>{

    const error = err.message ? err.message : err;
  
    const errorMessage = {
      status: 500,
      message: error
    }
    res.status(500).json(errorMessage);
  };