async function sachin(params) {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(343);
        }, 2000);
    })
}
(async function main(){
    let a = await sachin();
    console.log(a);
    
    let b = await sachin();
    console.log(b);
    
})()

