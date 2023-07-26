//abstract class ki property will inherit to the child/derived class
//derived class property will inherit to the object
abstract class Country{

    public name: string;
    public language: string;
    public population: number;
    public populationGrowthRate: number;
    private _statePrivacy: string;
    private _leader: string;
    public planet = "Earth";
    public religion: string;

    constructor(name: string, language: string, population: number, populationGrowthRate: number, _statePrivacy: string,  _leader: string, religion: string)
    {
            this.name = name;
            this.language = language;
            this.population = population;
            this.populationGrowthRate = populationGrowthRate;
            this._statePrivacy = _statePrivacy;
            this. _leader = _leader;
            this.religion = religion;
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
    constructor(name: string, language: string, population: number, populationGrowthRate: number, statePrivacy: string, leader: string, religion = "Islam "){
        super(name, language, population, populationGrowthRate, statePrivacy, leader, religion)
    }
    public populationGrowth(): number {
        this.population = this.population * (1 + this.populationGrowthRate / 100);
        return this.population;
    }
}
let Pakistan = new OICCountry("Pakistan", "Urdu", 30000000, 2.5, "Pakistan Private data", "Pak Leader");

console.info(Pakistan);
export{}