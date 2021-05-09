export const required = (value) => {
  return !!value ? undefined : "Обязательное поле";
};

export const requiredEdit = (value) => {
  return !!value && !!value.data && value.data.length
    ? undefined
    : "Обязательное поле";
};

export const productsRequired = (value) =>
  !!value && value.length > 0
    ? undefined
    : "Для заказа необходим как минимум один продукт";

export const isNumber = (value) => {
  return !!value && !isNaN(parseInt(value)) ? undefined : "Только цифры";
};
