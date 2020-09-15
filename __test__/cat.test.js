'use strict';

require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');

jest.spyOn(global.console, 'log');

describe('categories Module', () => {

  let data = { name: 'Sondos', display_name: 'student', describe: 'student' };

  it('it can create()', async () => {
    const result = await categories.create(data);
    Object.keys(data).forEach(key => {
      expect(result[key]).toEqual(data[key]);
    });
  });


  ////Add

  it('add() will add the data to DB', () => {
    return categories.create(data).then(result => {
      console.log(result);
      Object.keys(data).forEach(e => {
        expect(result[0][e]).toEqual(data[e]);

      });
    });

  });


  //find   

  it('get(id) will get data by id ', () => {

    return categories.create(data)
      .then(result => {
        console.log(result);
        return categories.get(result._id)
          .then(e => {
            Object.keys(data).forEach(item => {
              expect(result[0][item]).toEqual(data[item]);
            })
          })

      })
  });

  // ///find   

  it('get(id) will get data by id ', () => {
      return categories.create(data)
          .then(result => {
              return categories.get()
                  .then(e => {
                      Object.keys(data).forEach(item => {
                          expect(result[item]).toEqual(data[item]);
                      })
                  })

          })
  });



  // ///Delete   

  it('Delete(id) delete data ', () => {
    return categories.create(data)
      .then(result => {
        return categories.delete(result._id)
          .then(e => {
            Object.keys(data).forEach(item => {
              expect().toEqual();
            })
          })

      })
  });

});

