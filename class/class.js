console.log('script is initializing');

class animal{
    constructor(name){
        this.name = name
        console.log('object is created');
        
    }
    eats(){
        console.log('eats food');
    }
    jumps(){
        console.log('jumps fast');
    }
    runs(){
        console.log('runs very fast');
        
    }
}

let a = new animal("Rabbit");
console.log(a);

