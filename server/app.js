require('dotenv').config({ path: './.env' });
const express = require ('express'),
    app = express(),
    path = require('path');
    mongoose = require('mongoose'),
    categoryRoute = require('./routes/categoriesRoute'),
    productRoute = require('./routes/productsRoute'),
    homeProductRoute = require('./routes/homeProductsRoute'),
    paymentRoute = require('./routes/payment.route.js')
let port = process.env.PORT || 3030
    

// to print incoming requests from mongoose in the terminal
if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

// =================== setting to use the body of a request ===================


// import of middleware CORS, which controls which domains are allowed to make request to the server
const cors = require('cors')
const allowedOrigin = [
                        process.env.CLIENT_URL, 
                        'http://localhost:5173'
                    ];
app.use(cors({
    origin: allowedOrigin,
    methods:['GET','POST'],
    credentials: true
}))

// for receiving JSON requests 
app.use(express.json());

// routes (after cors)
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/home', homeProductRoute);
app.use('/payment', paymentRoute);


// static files handeler (after routes)
/*registers middleware that tells the server:
“If someone requests a file (like main.js, style.css, index.html, etc.), and it exists in the client/dist folder, serve it directly.”

It tells Express:
“Serve the built frontend files (like index.html, main.js, style.css, etc.) from the client/dist folder.”*/
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});


// MongoDB connection
async function connecting(){
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Could not connect to MongoDB:', error.message);
    }
}




// Connection function running and Server listen on port
connecting().then(()=>{
    app.listen(port, () => console.log(`I am on port ${port}`))
})