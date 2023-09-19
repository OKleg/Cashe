import {Cache} from "../src/cache";
//1
test('1', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    let countReq = cache.getCount("чайник")
    expect(countReq).toBe(3);
});
//2
test('2', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    let value = cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    expect(value).toBe("1000");
});
//4
test('4', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    expect(countReq).toBe(2);
});
//5
test('5', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 1);
    cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    let value =  cache.getValue("чайник")
    expect(value).toBe(null);
});

//6
test('6', () => {
    let cache = new Cache();
    cache.push("чайник","1000");
    cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    let value =  cache.getValue("чайник")
    expect(value).toBe(null);
});

//7
// test('it fails', () => {
//     let cache = new Cache();
//     cache.push("чайник","1000");
//     cache.getValue("чайник")
//     let countReq = cache.getCount("чайник")
//     let value =  cache.getValue("чайник")
//     expect(value).toBe(null);
// });

