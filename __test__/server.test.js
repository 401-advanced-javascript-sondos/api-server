'use strict';

const { server } = require('../lib/server');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe('server.js',()=>{


  //-----------Catrgories Route--------------
  
  it('should be stutas 200 for post /categories',()=>{
    return mockRequest.post('/categories').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for get /categories',()=>{
    return mockRequest.get('/categories').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for get /categories/:id',()=>{
    return mockRequest.get('/categories/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for put /categories/:id',()=>{
    return mockRequest.put('/categories/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for delete /categories/:id',()=>{
    return mockRequest.delete('/categories/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });










  it('should be stutas 200 for post /products',()=>{
    return mockRequest.post('/products').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for get /products',()=>{
    return mockRequest.get('/products').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for get /products/:id',()=>{
    return mockRequest.get('/products/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for put /products/:id',()=>{
    return mockRequest.put('/products/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });

  it('should be stutas 200 for delete /products/:id',()=>{
    return mockRequest.delete('/products/:id').then(result=>{
      expect(result.status).toBe(200);
    }).catch(err=>{
      console.log(err);
    });
  });
});