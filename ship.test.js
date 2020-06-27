let gameBoard = require('./gameBoard')
let newShip = require('./ship');

const newGb = gameBoard('c1', 'c2', 'c3');

test('Attack test', () => {
    expect(newGb.receiveAttack('c1')).toBe('nice hit')
})

let newShip = require('./ship');

let shipUno = newShip('1','2','3');

test('Hit test', () => {
   expect(shipUno.hit('1')).toBe('Alpha male!');
})
