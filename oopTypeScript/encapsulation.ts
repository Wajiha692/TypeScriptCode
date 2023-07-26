//we are going to create a private data
//outside of the class you won't access the data
abstract class Country{

    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    //in creating private variable we first use underscore _
    private _statePrivacy: string;
    private _leader: string;

    constructor(name: string, language: string, population: number, populationGrowthRate: number, _statePrivacy: string,  _leader: string)
    {
            this.name = name;
            this.language = language;
            this.population = population;
            this.populationGrowthRate = populationGrowthRate;
            this._statePrivacy = _statePrivacy;
            this. _leader = _leader;
    }

    public abstract populationGrowth(): number;
 
    //using get methods to access data
    public get privateData() : string {
        return this._statePrivacy;
    }
  //setting the leader
    public set leader(newLeader: string) {
        this._leader = newLeader;
    }
    
    
}
//child class


class OICCountry extends Country{
    constructor(name: string, language: string, population: number, populationGrowthRate: number, statePrivacy: string, leader: string){
        super(name, language, population, populationGrowthRate, statePrivacy, leader)
    }
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Pakistan Private data", "Pak Leader");

console.info(Pakistan);
// Pakistan.name = "Islamic Republic of Pakistan";
// console.info(Pakistan);

//error because this is a private property
//Pakistan._statePrivacy
console.info(Pakistan.privateData);

//Error beacause _leader is private
//Pakistan._leader = "New Leader"

//Success because leader is accessor and allows us to assign a new leader.
Pakistan.leader = "New Leader"
console.info(Pakistan);
export{}