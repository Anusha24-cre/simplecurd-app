const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express()


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000,() => {
    console.log('Serve is running on port 3000');
});


//routes
app.use('api/products' , productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API Serve Upadted");
});





app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products); 
    }   catch (error) {         
        res.status(500).json({message: error.message })
    }
});

app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products); 
    }   catch (error) {         
        res.status(500).json({message: error.message })
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);

    }   catch (error) {         
        res.status(500).json({message: error.message })
    }
});



  
mongoose.connect("mongodb+srv://admin:GFHyhstehg@cluster0.yu75n.mongodb.net/")
.then(() => {
    console.log('Connected to database!');
})
.catch(() => {
    console.log('Connection failed!');
});
