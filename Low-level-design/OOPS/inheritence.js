class car{
    
    constructor(color,company){
        this.color = color;
        this.company = company;
    }
    
    start(){
        console.log(` ${this.color} ${this.company} car started`);
    }
    
    stop(){
        console.log("car stopped");
    }
}
class suv extends car{
    constructor(color,company,airbags){
        super(color,company);
        this.airbags = airbags;
    }
    triggerAirbags(){
        console.log(`${this.airbags} airbags triggered of ${this.color} ${this.company}`)
    }
}

indica = new car("red","tata");
indica.start();
endeavour = new suv("white","ford",5);
endeavour.start();
endeavour.triggerAirbags();

