import uuid from 'uuid/v4';

export const categoryCreate = category => {
  category.id = uuid();
  return {
    type: 'CATEGORY_CREATE',
    payload: category,
  };
};

export const categoryUpdate = category => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const categoryDelete = category => ({
  type: 'CATEGORY_DESTROY',
  payload: category,  
});

export const categoryReset = () => ({type: 'CATEGORY_RESET'});