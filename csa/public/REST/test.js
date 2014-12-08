
QUnit.test('isEmail()', function() {
    ok(isEmail('test@test.com'), 'test@test.com Is An Email');
    ok(!isEmail('some string of data'), 'A random string of data fails');
})
QUnit.test('isPhone()', function() {
    ok(isPhone('07794304450'), '07794304450 Is A valid phone number');
    ok(!isPhone('some string of data'), 'A random string of data is not a valid phone number');
})
QUnit.test('hasContent()', function() {
    ok(hasContent('07794304450'), 'A field with a telephone number contains content');
    ok(!hasContent(''), 'An empty string fails');
})

QUnit.test('User List Populated', function(){
	$('#users').empty();
	reqestUsers();
	ok(6, $('#users').length);
})
