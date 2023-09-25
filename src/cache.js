class Cache{
    
    constructor(){
        this.cache = {}
        this.count = {}
        this.hist = {}
    }

    push(key,value, count=1)
    {
        if (!(typeof key === "string")){ throw new TypeError('key type') }
        if (!(typeof value === "string")){ throw new TypeError('value type') }
        if (!(typeof count === "number")){ throw new TypeError('count type') }
        this.hist[key] =[];
        this.cache[key] = value;
        this.count[key] = count;
        this.hist[key].push([key, this.cache[key], this.count[key]]);
    };
    getCount(key){
        return this.count[key];
    }
    getValue(key){
        if (!this.count[key] || this.count[key] == 0 ) return null 
        this.count[key]--;
        this.hist[key].push([key, this.cache[key], this.count[key]]);
        return this.cache[key];
    }
    log(){
        return this.hist;
    }
}
export {Cache}