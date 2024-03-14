console.log('promises');

let prom1= new Promise((resolve, reject) => {
    let a= Math.random();
    if (a<0.5) {
        reject('no random number was supporting you');

    }
   else{
    setTimeout(() => {
        console.log('yes i am done');
        resolve('yessss')
        
    }, 2000);
   }
})
 
 let prom2= new Promise((resolve, reject) => {
    let a=Math.random();
    if (a<0.5) {
        reject('no random number is supporting')
        
    }
    else{
        setTimeout(() => {
            resolve('sachin')
        }, 1000);
    }
    
 })
 let prom3=Promise.race(([prom1, prom2]) => {
    prom3.then((a)=>{
        console.log(a);
        
    }).catch(err=>{
        console.log(err);
        
    })
    
 })
 
 


