
const express = require('express');

const app = express();

const BP = require ('body-parser')

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')

const path = require('path')



app.set('view engine','ejs');
app.set('views', 'views');

app.use(BP.urlencoded( {extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname ,'views','404.html'))
    
});

app.listen(3000,()=>{console.log('Server is running on Port 3000')})