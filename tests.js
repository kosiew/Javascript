const { test: qtest } = QUnit;

QUnit.module( "Group A" );

const _dinos = Dinos();
const testDinos = _dinos.getDinos();
const pigeon = _dinos.getDino('Pigeon');

qtest( "dino count", assert => {
    assert.equal(dinos.length, 8, 'wrong dino count');
});

qtest( 'getDino', assert => {
    assert.equal(pigeon.fact, 'All birds are living dinosaurs.', 'getDino not working');
});

qtest( 'getSpeciesList', assert => {
    const speciesList = _dinos.getSpeciesList();
    const expectedList = [
        "Triceratops",
        "Tyrannosaurus Rex",
        "Anklyosaurus",
        "Brachiosaurus",
        "Stegosaurus",
        "Elasmosaurus",
        "Pteranodon",
        "Pigeon"
      ];
    const  intersection = speciesList.filter(x => expectedList.includes(x));
    assert.true(intersection.length == expectedList.length, 'same length');
    assert.deepEqual(speciesList, expectedList, 'wrong list');
});

qtest( 'test Human constructor', assert => {
    const human = new Human('name', 12, 13, 14, 'Omnivor');
    assert.equal(human.name, 'name', 'name');
    assert.equal(human.weight, '14', 'weight');
    assert.equal(human.diet, 'Omnivor', 'diet');
    assert.equal(human.height, 157, 'height');
});

qtest( 'getImage', assert => {
    const imagePath = getImage.call(pigeon);
    assert.equal(imagePath, 'image/pigeon.png', 'wrong image');
});

qtest( 'getRandomFacts', assert => {
    const list1 = getRandomFacts();
    const list2 = getRandomFacts();

    assert.true(list1.length == list2.length, 'same length of list');
    const  intersection = list1.filter(x => list2.includes(x));
    assert.true(intersection.length < list1.length, 'duplicate list');
});

qtest('compareToDinos', assert => {
    const compares = [compareDiet, compareHeight, compareWeight];
    const human = new Human('name', 12, 1, 10, 'carnivor' );
    const results = compareToDinos(human, dinos, compares);
    const expectedResults = {};
    assert.deepEqual(results, expectedResults, 'failed compareToDinos');
});
