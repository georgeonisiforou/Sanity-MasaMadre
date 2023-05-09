export default {
  name: 'pizza',
  type: 'document',
  title: 'Pizzas',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'ingredients',
      type: 'string',
      title: 'Ingredients',
    },
    {
      name: 'pizzaPhoto',
      type: 'image',
      title: 'Photo of the pizza',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'spicy',
      type: 'boolean',
      title: 'Is it spicy?',
    },
    {
      name: 'vegan',
      type: 'boolean',
      title: 'Is it vegetarian?',
    },
  ],
}
