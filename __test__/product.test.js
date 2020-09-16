'use strict';

require('@code-fellows/supergoose');
const products = require('../lib/models/products/products.collection');
jest.spyOn(global.console, 'log');


const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);



describe('products Module', () => {
  let data={
    category: 'Shoes',
    name: 'kidsshoes',
    display_name: 'pant_men_fashion',
    description: 'Discover kids\' shoes, boots, and sandals for', 
  };
  let data2={
    category: 'kids',
    name: 'dress',
    display_name: 'pant_kid_fashion',
    description: 'Discover kids\' shoes, boots, and sandals for', 
  };


  it('it can create()', async () => {
    
    // let data = { name: 'Sondos', display_name: 'student', description: 'student' };
    const result = await mockRequest.post('/api/v1/products').send(data);
    let recored = result.body;
    console.log('recored', recored);

    Object.keys(data).forEach(key => {
      console.log('recored[key] ->', recored[key]);
      console.log(key);
      expect(recored[key]).toEqual(data[key]);
    });
  });


  it('it can get()', async () => {
    
    // let data = { name: 'Sondos', display_name: 'student', description: 'student' };
    const result = await mockRequest.post('/api/v1/products').send(data);
    let recored = result.body;
    const catg = await mockRequest.get(`/api/v1/products/${recored._id}`);
    let catItem = catg.body;

    // console.log('cat', catItem);

    Object.keys(data).forEach((key) => {
      // console.log('record', catItem[key]);
      expect(catItem[0][key]).toEqual(data[key]);
    });
  });


  it('it can get()', async () => {
    
    // let data = { name: 'Sondos', display_name: 'student', description: 'student' };
    // let data2 = { name: 'name', display_name: 'display', description: 'description' };

    let array = [data, data2];

    await mockRequest.post('/api/v1/products').send(data);
    await mockRequest.post('/api/v1/products').send(data2);

    const catg = await mockRequest.get(`/api/v1/products`);
    let catItem = catg.body.resutl;
    // console.log(catItem)
    // console.log('cat', catItem);
    // console.log('cat.result', catItem.resutl);

    catItem.forEach((key) => {
      // console.log('record', catItem[key]);
      expect(array[key]).toEqual(catItem[key]);
    });
  });


  it('it can delete()', async () => {
    
    // let data = { name: 'Sondos', display_name: 'student', description: 'student' };

    const result = await mockRequest.post('/api/v1/products').send(data);
    let recored = result.body;
    // console.log('up', recored);
    const catg = await mockRequest.delete(`/api/v1/products/${recored._id}`);
    let catItem = catg.body;

    Object.keys(data).forEach((key) => {
    // console.log('record',catItem);
      expect(catItem[key]).toEqual(data[key]);
    });
  });


  it('it can update()', async () => {
    
    // let data = { name: 'Sondos', display_name: 'student', description: 'student' };
    //  let data2 = { name: 'name', display_name: 'display', description: 'description' };
    const result = await mockRequest.post('/api/v1/products').send(data);
    let recored = result.body;
    await mockRequest.put(`/api/v1/products/${recored._id}`).send(data2);
    const catg = await (await mockRequest.get(`/api/v1/products/${recored._id}`));
    let catItem = catg.body;

    Object.keys(data2).forEach((key) => {
      expect(catItem[0][key]).toEqual(data2[key]);
    });
  });



});

