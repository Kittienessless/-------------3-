const express= require('express')
const app = express();
const dotenv=require('dotenv');
dotenv.config()
const PORT=process.env.PORT ||5000;
app.get('/', function (req, res) {
 
})
app.listen(PORT,()=>{
  console.log('express web app on http://localhost:5000')
})


