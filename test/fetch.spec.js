jest.mock('node-fetch')
const fetch = require('node-fetch')
const {Response} = jest.requireActual('node-fetch');
const {fetchMock} = require('../__mocks__/mockFetch');

const ResponseInit = {
    status: 200,
    statusText: 'OK'
  };

test('should be fetch', ()=> {
    fetch.mockReturnValue(Promise.resolve(new Response(ResponseInit)))
    const mock = fetchMock(ResponseInit)
    return mock.then(data =>{
        console.log(data)
        expect({status: data.status, statusText: data.statusText }).toEqual(ResponseInit)
    })
    
})
