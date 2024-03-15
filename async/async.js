
async function getdata(params) {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(657)
    }, 4000);
   })
}
async function main(params) {
    console.log('script is initilizing');
console.log('loading data');
let data= await getdata();
console.log(data);

console.log('output');
    
}
main()




