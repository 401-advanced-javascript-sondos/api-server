'use strict';

const express = require('express');
const app = express();

//--------Middlewere---------
const logger = require('./middleware/logger.js');
const handdelError = require('./middleware/500.js');
const timestamp = require('./middleware/timestamp.js');
const notfound = require('./middleware/404.js');


//--------Global Middlewere---------
app.use(express.json());
app.use(logger);
app.use(timestamp);



//--------Home---------
app.get('/', (req, res) => {
  console.log('home');
  res.send('Welcome to ou Home');
});


//--------categories---------
let categoriesDB = [];
/*category record schema: 
    {
        name: category_name,
        display_name: category_display_name,
        description: category_description,
        id: product_id
    }
*/

//to full array use post method
app.post('/categories', (req, res) => {
  console.log('you are here ');
  let record = {
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
    id: categoriesDB.length + 1,
  };
  categoriesDB.push(record);
  res.status(200).send(record);
});


// to render array 
app.get('/categories', (req, res) => {
  console.log(req.body);
  let count=categoriesDB.length;
  let result=categoriesDB;
  res.status(200).json({count,result});
});

// to get element in array 
app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  let data;
  categoriesDB.forEach(e => {
    if (e.id == id)
      data = e;
    // res.status(200).send();
  });
 
  res.status(200).json(data);
});


// to edit element in array 
app.put('/categories/:id', (req, res) => {
  //let id=req.params.id;
  let record = {
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
    id: req.params.id,
  };
  categoriesDB.map((e,index) => {
    if (e.id == record.id) {
      // e = record;
      categoriesDB.splice(index,1,record);
      console.log(index,e);
      res.status(200).send(record);
    }
  });
  // for (var i = 0; i < categoriesDB.length; i++) {
  //     if (categoriesDB[i].id == record.id) {
  //         // e = record;
  //         splice(index, 1, record);
  //         console.log(index)
          
  //     }
  // }
  // res.status(200).send(record);
});


//delete element in catag
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesDB.forEach((e, index) => {
    if (e.id == parseInt(id)) {
      console.log(index);
      categoriesDB.splice(index, 1);
      res.status(200).json(categoriesDB);
    }
  });

});





//--------products---------
let productsDB = [];
/*category record schema: 
    {
     "category": "category_name",
      "name": "product_name",
      "display_name": "product_display_name",
      "description":  "product_description",
      "id": product_id
    }
*/

//to full array use post method
app.post('/products', (req, res) => {
  console.log('you are here ');
  let record = {
    category: req.body.category,
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
    id: productsDB.length + 1,
  };
  productsDB.push(record);
  res.status(200).send(record);
});


// to render array 
app.get('/products', (req, res) => {
  console.log(req.body);
  let count=productsDB.length;
  let result=productsDB;
  res.status(200).json({count,result});
    
});

// to get element in array 
app.get('/products/:id', (req, res) => {
  let id = req.params.id;
  let data;
  productsDB.forEach(e => {
    if (e.id == id)
      data = e;
  });
  res.status(200).json(data);
});


// to edit element in array 
app.put('/products/:id', (req, res) => {
  //let id=req.params.id;
  let record = {
    category: req.body.category,
    name: req.body.name,
    display_name: req.body.display_name,
    description: req.body.description,
    id: req.params.id,
  };
  productsDB.forEach(e => {
    if (e.id == record.id) {
      // e = record;
      productsDB.splice(index, 1,record);
      res.status(200).json(e);
    }
    // else {
    //     res.status(200).send('No matching data');
    // }

  });

});


//delete element in product
app.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  productsDB.forEach(e => {
    if (e.id == id) {
      productsDB.splice(index, 1);
      res.status(200).json(productsDB);
    }
    // }else{
    //     res.status(200).send('No matching data');
    // }

  });

});





app.use(handdelError);
app.use(notfound);

module.exports = {
  server: app,
  start: port => {
    let PORT = 3000 || port || process.env.PORT;
    app.listen(PORT, () => console.log(`listen to port : ${PORT}`));
  },
};