import { ref } from 'vue';

const cart = ref([{
  id: '123',
  quantity: 2,
}, {
  id: '234',
  quantity: 3,
}, {
  id: '345',
  quantity: 13,
}]);

export { cart };

export const products = [{
  id: '123',
  name: 'Basil',
  price: '$26.00',
}, {
  id: '234',
  name: 'Lemon',
  price: '$26.00',
}, {
  id: '345',
  name: 'Garlic',
  price: '$26.00',
}, {
  id: '456',
  name: 'Rosemary',
  price: '$26.00',
}, {
  id: '567',
  name: 'Chili',
  price: '$26.00',
}, {
  id: '678',
  name: 'Delicate',
  price: '$24.50',
}, {
  id: '789',
  name: 'Medium',
  price: '$24.50',
}, {
  id: '890',
  name: 'Bold',
  price: '$24.50',
}];
