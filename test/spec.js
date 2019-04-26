describe('Component abc Unit Test', function () {
  let element = document.createElement('ul', { is: 'expanding-list' });
  console.log(element);
  it('test exists', function () {
    expect(element).toBeTruthy();
  });

  it('test attribute', function () {
    expect(element.getAttribute('foo')).toBe('bar');
  });
});
