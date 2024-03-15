
// async function getdata(params) {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve(657)
//     }, 4000);
//    })
// }
async function getdata() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
    let data = await x.json() 
    return data
}



async function main(params) {
    console.log('script is initializing');
    console.log('loading data');
    let data = await getdata();
    console.log(data);

    console.log('output');
}

main();

  




