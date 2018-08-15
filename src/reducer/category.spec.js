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

  it('update an existing category', () => {

    const newCategory = reducer([], actions.categoryCreate(categoryTest));
    let id = newCategory[0].id;
    let updateTo = {
      id: id,
      name: 'Promotion',
      budget: '$1000',
    };

    const updatedCategory = reducer(newCategory, actions.categoryUpdate(updateTo));

    expect(updatedCategory[0].id).toBe(id);
    expect(updatedCategory[0].name).toBe('Promotion');
    expect(updatedCategory[0].budget).toBe('$1000');
    expect(updatedCategory.length).toBe(1);
  });

  it('delete an existing category', () => {
    const newCategory = reducer([], actions.categoryCreate(categoryTest));
    const deleteCategory = reducer(newCategory, actions.categoryDelete(newCategory[0]));

    expect(deleteCategory.length).toEqual(0);
  });
});