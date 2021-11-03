'use strict';

// basic requirements for test :
const {app}=require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(app);

// require the database to be tested (the name I gave it as sequelize);

const {db}=require('../src/models/index');

// two functions to run the dataBase and stopped :

beforeAll(async ()=>{
   await db.sync();
});

afterAll( async ()=>{
   await db.drop();
});

// test units:
describe('Testing the Server with DB', () => {

    // Check if 404 error:
  
    test('Should respond with 404 status on an invalid route', async () => {
  
      const response = await mockRequest.get('/home');
      expect(response.status).toBe(404);
  
    });

    // check 404 on a bad method
    test('Should respond with 404 status on an invalid route', async () => {
  
      const response = await mockRequest.delete('/employee');
      expect(response.status).toBe(404);
  
    });

  
    // test if can Add info
  
    it('can add new info ', async () => {
  
      const response = await mockRequest.post('/employee').send({
        employee_name:'hanin',
        employee_job:'developer'
      });
  
      expect(response.status).toBe(201);
  
    });
  
    // test if can get the infos
  
    it('can get all employess', async () => {
  
      const response = await mockRequest.get('/employee');
  
      expect(response.status).toBe(200);
  
    });
  
    // test if can read one spacif info
    it('can get all record', async () => {
        const response = await mockRequest.get('/employee/1');
  
        expect(response.status).toBe(200);
    });
  
    // test if can update a info
    it('can update a record', async () => {
        const response = await mockRequest.put('/employee/1').send({
            employee_name:'Hanin',
            employee_job:'developer'
          });
  
        expect(response.status).toBe(201);
  
    });
    // test if can delete info
    it('can delete a record', async () => {
  
        const response = await mockRequest.delete('/employee/1');
  
        expect(response.status).toBe(204);
    });
  
  
  
  });