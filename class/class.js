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

class cheetah extends animal{
    
    constructor(name){
        super()
    this.name = name
    console.log('cheetah hi kehde');
    
    
    }
    eats(){
        console.log('cheetah eat meat');
        
    }

}

let a = new animal("Rabbit");
console.log(a);

let c = new cheetah("Cheetah");
console.log(c);


