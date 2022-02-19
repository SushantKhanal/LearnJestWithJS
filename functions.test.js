const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//toBeNull
test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy(); //.toBeTruthy
});

//toEqual unlike toBe can compare obj and arrays etc
test('User should be Sushant Khanal Object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Sushant',
        lastName: 'Khanal'
    });
});

//less than and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// Working with async data
// test('User fetched name should be Leanne Graham', () =>  {
//     // expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// Working with Async Await
test('Async Await User fetched name should be Leanne Graham', async () =>  {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
