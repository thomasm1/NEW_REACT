import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      const authors = [
        {id: 'Tom-Maestas', firstName: 'Tom', lastName: 'Maestas'},
        {id: 'Tom-Milton', firstName: 'Tom', lastName: 'Milton'} 
      ];

      const expected = [
        {value: 'Tom-Maestas', text: 'Tom Maestas'},
        {value: 'Tom-Milton', text: 'Tom Milton'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
