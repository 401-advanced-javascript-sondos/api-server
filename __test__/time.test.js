'use strict';

const time = require('../lib/middleware/timestamp');

describe('sever', () => {

  let req = {};
  let res = {};
  let next = jest.fn();
  let d = new Date();
  let dateTime = d.toLocaleDateString();


  it('should respond the time  ', () => {
    time(req, res, next);
    expect(req.requestTime).toBe(dateTime);
  });

  it('should respond the time  ', () => {
    time(req, res, next);
    expect(next).toHaveBeenCalled();
  });


});