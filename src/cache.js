class Cache{
    
    constructor(){
        this = {}
        this.count = {}
        this.hist = {}
    }

    push(key,value, count=1)
    {
        if (!(typeof key === "string")){ throw new TypeError('key type') }
        if (!(typeof value === "string")){ throw new TypeError('value type') }
        if (!(typeof count === "number")){ throw new TypeError('count type') }
        this[key] = value;
        this.count[key] = count;
    };
    getCount(key){
        return this.count[key];
    }
    getValue(key){
        this.count[key]--;
        this.hist[key].push([key,value, this.count[key], new Date().toLocaleString()]);
        return this[key];
    }
    log(){
        return this.hist.toString();
    }
}
export {Cache}