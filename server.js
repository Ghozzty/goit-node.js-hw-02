const app = require('./app')



const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const DB_HOST = 'mongodb+srv://fedor_horin:dZHkY4NQef62wXJU@cluster0.emxlfqa.mongodb.net/db-contacts?retryWrites=true&w=majority'



async function main() {
  try {
    await mongoose.connect(DB_HOST)
    console.log('Database connection successful');
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000")
    })
} catch (error) {
  console.log(error.message)
process.exit(1)
  
}}
main();