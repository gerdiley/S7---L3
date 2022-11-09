axios.get('https://jsonplaceholder.typicode.com/users'). then (function(response){
    console.table(response.data);
    console.log(response);
}).catch(function(error){
    console.log(error);
})

axios.get('https://jsonplaceholder.typicode.com/users/4'). then (function(response){
    console.table(response.data);
    console.log(response);
}).catch(function(error){
    console.log(error);
})


axios.post('https://jsonplaceholder.typicode.com/users/', {name:'gerardo', username: 'gerdiley'}).then(function(response){
    console.table(response.data);
    console.log(response);
}).catch(function(error){
    console.log(error);
})

axios.put('https://jsonplaceholder.typicode.com/users/1', {name:'gerardo', username: 'gerdiley'}).then(function(response){
    console.table(response.data);
    console.log(response);
}).catch(function(error){
    console.log(error);
})

