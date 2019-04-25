describe('Component abc Unit Test', function () {
  let element = new ExpandingList();
  console.log(element);
  it('test attribute', function () {
    expect(element.getAttribute('foo')).toBe('bar');
  });
});
