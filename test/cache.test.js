import {Cache} from "../src/cache";
//1 Реализуйте класс для работы с кэшем, поддерживающим конечное число обращений.
//3 Для каждого ключа известно число обращений, после которого кэш должен очиститься.
test('1', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    let countReq = cache.getCount("чайник")
    expect(countReq).toBe(3);
});
//2 Кэш хранит пары ключ-значение.
test('2 Кэш хранит пары ключ-значение.', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    let value = cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    expect(value).toBe("1000");
});
//4 После каждого обращения нужно уменьшить число обращений на 1.
test('4 После каждого обращения нужно уменьшить число обращений на 1', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 3);
    cache.getValue("чайник")
    let countReq = cache.getCount("чайник")
    expect(countReq).toBe(2);
});
//5 Если число обращений равно 0, то кэш возвращает null
test('5 Если число обращений равно 0, то кэш возвращает null', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 1);
    cache.getValue("чайник");
    let countReq = cache.getCount("чайник");
    let value =  cache.getValue("чайник");
    expect(value).toBe(null);
});

//5 Если значения по ключу нет, то кэш возвращает null
test('5 Если значения по ключу нет, то кэш возвращает null', () => {
    let cache = new Cache();
    cache.push("чайник","1000", 1);
    cache.getValue("чайник");
    let countReq = cache.getCount("чайник");
    let value =  cache.getValue("корги");
    expect(value).toBe(null);
});

//6 Если пара ключ-значение задана без указания числа обращений, то число обращений равно 1.
test('6  число обращений по умолчанию равно 1', () => {
    let cache = new Cache();
    cache.push("чайник","1000");
    let countReq = cache.getCount("чайник");
    expect(countReq).toBe(1);
});

//7 Нужна возможность получить статистику работы кэша в виде списка обращений:
//Ключ, Значение, Сколько осталось обращений.
test('Статистика', () => {
    let cache = new Cache();
    cache.push("чайник","1000",4);
    cache.getValue("чайник");
    let log = cache.log();
    expect(log["чайник"][0].toString()).toBe("чайник,1000,4");
    expect(log["чайник"][0][2]).toBe(4);
    expect(log["чайник"][1][2]).toBe(3);

});


//7 Обработка исключений push
test('Обработка исключений push', () => {
    let cache = new Cache();
    expect(()=> { 
        cache.push(1, '1', 1); 
    }).toThrow(new TypeError('the key type must be a string'));
    expect(()=> { 
        cache.push("чайник", 1, 1); 
    }).toThrow(new TypeError('the value type must be a string'));
    expect(()=> { 
        cache.push("чайник", "1", "1"); 
    }).toThrow(new TypeError('the count type must be a number'));

});

