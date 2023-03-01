const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
const request = require("supertest");
const app = require("../../app");

const login = require("./login");

const {DB_HOST} = process.env;


describe("test login controller", ()=> {

    beforeAll(async ()=> {
        await mongoose.connect(DB_HOST)
        console.log('Database connection successful');
     
    });

    afterAll(async ()=> {
        await mongoose.disconnect(DB_HOST);
    });


    test('login test', async () => { 
        const user = {
            email: "james@example.com",
            password: "examplepassword"
          }

        const response = await request(app)
        .post("/users/login", login)
        .send(user)

        const { email, subscription } = response.body.user;
        const { token } = response.body

        expect(response.statusCode).toBe(200);
        expect(token).toBeTruthy();
        expect(typeof email).toBe("string");
        expect(typeof subscription).toBe("string");

         })

})