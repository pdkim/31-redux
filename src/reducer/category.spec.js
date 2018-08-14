import reducer from './category.js';
import * as actions from '../action/category-actions.js';

let categoryTest = {
  name: 'test',
  budget: '$1',
};

describe('This reducer should', () => {

  it('add a new category', () => {
    const newCategory = reducer([], actions.categoryCreate(categoryTest));
    // console.log(newCategory);
    
    expect(newCategory.length).toBe(1);
    expect(newCategory[0].name).toBe('test');
    expect(newCategory[0].budget).toBe('$1');
    expect(newCategory[0].id).toBeDefined();
  });

  xit('update an existing category', () => {
    let updateTo = {
      name: 'Promotion',
      budget: '$1000',
    };

    const newCategory = reducer([], actions.categoryCreate(categoryTest));
    console.log('start', newCategory);

    const updatedCategory = reducer(newCategory, actions.categoryUpdate(updateTo));
    console.log('end', updatedCategory);
    
    expect(updatedCategory[0].name).toBe('Promotion');
    expect(updatedCategory[0].budget).toBe('$1000');
    expect(updatedCategory[0].id).toEqual(categoryTest[0].id);
  });

  xit('delete an existing category', () => {
    let newCategory = reducer([], actions.categoryCreate(categoryTest));
    newCategory = reducer(newCategory, actions.categoryDelete(newCategory[0].id));

    expect(newCategory.length).toBe(0);
  });
});