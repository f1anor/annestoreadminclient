export const required = (value) =>
  !!value && !!value.length ? undefined : "Обязательное поле";

export const productsRequired = (value) =>
  !!value && value.products.length > 0
    ? undefined
    : "Для заказа необходим как минимум один продукт";
