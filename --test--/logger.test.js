'use strict';

const logger=require('../src/middlewares/logger');


// write test for logs outPuts:

describe('Testing function of logging',()=>{

    // declare some variables:

    let consoleSpy;// to test onething
    let req={}// unreal request to check it workes
    let res={}// unreal respond to check it workes
    let next=jest.fn()// this is a jest method (spy method) wont concern about real function


    beforeEach(()=>{// this is a function to initilize the varibales for each test point
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })

    afterEach(()=>{// this will restore the variables:
        consoleSpy.mockRestore();
    })

     // its time to test :

     test('if console method work correctly',()=>{
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled();
     })

});