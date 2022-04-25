import express from 'express';
import { urlencoded } from 'express'; 
import transactions from "./routes/transactions.js";
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());


app.use( express.urlencoded({extended:false}) );// use querysting library
app.use( express.json() );
app.use(transactions);




// app.use(express.static('./frontend/public'))
 app.get("/", (req, res) => {
     res.send('Welcome')
 })


app.listen(PORT, ()=> {
    console.log("Server laüft", PORT);
});