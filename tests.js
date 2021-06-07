const { test: qtest } = QUnit;

QUnit.module( "Group A" );

const dinos = Dinos().getDinos();

qtest( "dino count", assert => {
    assert.equal(dinos.length, 8, 'wrong dino count');
})
