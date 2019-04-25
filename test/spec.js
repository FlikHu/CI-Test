describe('Component abc Unit Test', function () {
  let element = document.createElement('ul', { is: 'expanding-list' });
  console.log(element);
  it('test children', function () {
    expect(element.childElementCount).toBe(0);
  });

  it('Test attribute', function () {
    expect(element.getAttribute('foo')).toBe('bar');
  });
});
