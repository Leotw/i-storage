import './storage';
import iStorage from '../dist/i-storage';
import { equal } from 'assert';
describe('storage', () => {
  let storage;
  before(function() {
    storage = new iStorage();
  });

  it('should no error', () => {
    storage.setValue('my-key-1', 'hi, fine');
    storage.setValue('my-key-2', 'hi, fine Jack', Date.now());
    storage.setValue('my-key-3', 'hi, fine Josh', Date.now() + 6000);
  });

  it('should get a value', () => {
    equal('hi, fine', storage.getValue('my-key-1'));
    equal('hi, fine Josh', storage.getValue('my-key-3'));
  });

  it('should not get a value', () => {
    equal(null, storage.getValue('my-key-2'));
  });

  it('should not get a value delay', () => {
    setTimeout(() => {
      equal(null, storage.getValue('my-key-3'));
      done();
    }, 7000);
  });
});
