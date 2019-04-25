describe('A suite', function () {
  it('contains spec with an expectation', function () {
    let element = document.createElement('popup-info');
    expect(element.childElementCount).toBe(0);
  });
});
