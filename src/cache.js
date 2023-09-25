class Cache{
    
    constructor(){
        this.cache = {}
        this.count = {}
        this.hist = {}
    }

    push(key,value, count=1)
    {
        if (!(typeof key === "string")){ throw new TypeError('the key type must be a string') }
        if (!(typeof value === "string")){ throw new TypeError('the value type must be a string') }
        if (!(typeof count === "number")){ throw new TypeError('the count type must be a number') }
        if ((count < 0)){ throw new Error('the count must be more the 0') }

        this.hist[key] =[];
        this.cache[key] = value;
        this.count[key] = count;
        this.hist[key].push([key, this.cache[key], this.count[key]]);
    };
    getCount(key){
        return this.count[key];
    }
    getValue(key){
        if (!this.count[key] || this.count[key] <= 0 ) {
            delete this.cache['key'];
            delete this.count['key'];
            return null;
        }
        this.count[key]--;
        this.hist[key].push([key, this.cache[key], this.count[key]]);
        return this.cache[key];
    }
    log(){
        return this.hist;
    }
}
export {Cache}