import {mult, splitIntroWorlds, sum} from "./01";


test('sum should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result1 = sum(a,b);
    let result2 = sum(b, c);

    expect(result1).toBe(3)
    expect(result2).toBe(5)
})
test('mult should be correct', () => {
    let a = 1
    let b = 2
    let c = 3

    let result1 = mult(a,b);
    let result2 = mult(b, c);

    expect(result1).toBe(2)
    expect(result2).toBe(6)
})

test('splitting into words should be correct',() =>{
    //data
    const sent1 = "Hello my friends"
    //action
    const result =splitIntroWorlds(sent1)

    //expect result

    expect(result.length).toBe(3)
})