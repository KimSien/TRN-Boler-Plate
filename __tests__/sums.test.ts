import {sums} from '../src/sums';

test('adds 1 + 2 to equal 3', () => {
  expect(sums(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 4',()=>{
  expect(sums(1, 2)).not.toBe(4);

});
