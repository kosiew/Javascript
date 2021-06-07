const { test } = QUnit;

QUnit.module( "Group A" );

const dinos = Dinos().getDinos();

test( "basic test example", assert => {
  assert.true( true, "this is fine" );
});
test( "basic test example 2", assert => {
  assert.true( true, "this is also fine" );
});
small change