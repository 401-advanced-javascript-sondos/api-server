'use strict';

require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');

jest.spyOn(global.console, 'log');

describe('categories Module', () => {


    it('it can create()', async ()=> {
        let data = { name: 'Sondos', display_name: 'student', describe: 'student' };
        const result = await categories.create(data);
        Object.keys(data).forEach(key=> {
            expect(result[key]).toEqual(data[key]);
        });
    });


    ////Add

    it('add() will add the data to DB', () => {
        let data = { name: 'Sondos', display_name: 'student', describe: 'student' };
        return categories.create(data).then(result => {
            console.log(result)
            Object.keys(data).forEach(e => {
                expect(result[e]).toEqual(data[e]);

            })
        });

    });


    ///find   

    // it('get(id) will get data by id ', () => {
    //     let data = { name: 'Sondos', display_name: 'student', describe: 'student' };

    //     return categories.create(data)
    //         .then(result => {
    //             console.log(result)
    //             return categories.get(result._id)
    //                 .then(e => {
    //                     console.log(e)
    //                     Object.keys(data).forEach(item => {
    //                         expect(result[item]).toEqual(data[item]);
    //                     })
    //                 })

    //         })
    // });

    // ///find   

    // it('get(id) will get data by id ', () => {
    //     let data = { name: 'Sondos', display_name: 'student', describe: 'student' };

    //     return categories.create(data)
    //         .then(result => {
    //             console.log(result)
    //             return categories.get()
    //                 .then(e => {
    //                     console.log(e)
    //                     Object.keys(data).forEach(item => {
    //                         expect(result[item]).toEqual(data[item]);
    //                     })
    //                 })

    //         })
    // });



    // ///Delete   

    // it('Delete(id) delete data ', () => {
    //     let data = { name: 'Sondos', display_name: 'student', describe: 'student' };

    //     return categories.create(data)
    //         .then(result => {
    //             // console.log(result)
    //             return categories.delete(result._id)
    //                 .then(e => {
    //                     // console.log(e)
    //                     Object.keys(data).forEach(item => {
    //                         expect().toEqual();
    //                     })
    //                 })

    //         })
    // });


    // it('it can get()', async ()=> {
    //     let data = { name: 'Sondos', display_name: 'student', describe: 'student' };
    //     const result = await categories.create(data);
    //     const records = await categories.get(result._id); // []
    //     console.log("records >>>> ", records)
    //     Object.keys(data).forEach(key=> {
    //         expect(records[0][key]).toEqual(data[key]);
    //     });
    // });



});

