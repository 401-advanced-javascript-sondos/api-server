'use strict';

require('@code-fellows/supergoose');

const pro= require('../lib/models/products/products.collection');

jest.spyOn(global.console, 'log');

describe('pro Module', () => {

  let data = {
    category: "MaleClothes",
    name: "pant",
    display_name: "pant_men_fashion",
    description: "These are the essential men's trouser styles every man should own"
  };

  it('it can create()', async () => {
    const result = await pro.create(data);
    Object.keys(data).forEach(key => {
      expect(result[key]).toEqual(data[key]);
    });
  });


  ////Add

  it('add() will add the data to DB', () => {
    return pro.create(data).then(result => {
      console.log(result);
      Object.keys(data).forEach(e => {
        expect(result[0][e]).toEqual(data[e]);

      });
    });

  });


  //find   

  it('get(id) will get data by id ', () => {

    return pro.create(data)
      .then(result => {
        console.log(result);
        return pro.get(result._id)
          .then(e => {
            Object.keys(data).forEach(item => {
              expect(result[0][item]).toEqual(data[item]);
            })
          })

      })
  });

  // ///find   

  it('get(id) will get data by id ', () => {
      return pro.create(data)
          .then(result => {
              return pro.get()
                  .then(e => {
                      Object.keys(data).forEach(item => {
                          expect(result[item]).toEqual(data[item]);
                      })
                  })

          })
  });



  // ///Delete   

  it('Delete(id) delete data ', () => {
    return pro.create(data)
      .then(result => {
        return pro.delete(result._id)
          .then(e => {
            Object.keys(data).forEach(item => {
              expect().toEqual();
            })
          })

      })
  });

});

