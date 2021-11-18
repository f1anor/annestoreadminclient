export const dontRepeatSize = (value) => {
  if (!value) return;
  const obj = {};
  console.log(obj);
  value.forEach((item) => (obj[item] = ""));
  return Object.keys(obj).length === value.length
    ? undefined
    : "В таблице присутствуют одинаковые обозначения размеров";
};

export const comparePasswords = (value, form) => {
  const { password, rePassword } = form;
  return password === rePassword ? undefined : "Пароли не совпадают";
};

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Неверный формат email адреса"
    : undefined;

export const login = (value) =>
  value && /^[a-zA-Z][a-zA-Z0-9-_.]/i.test(value)
    ? undefined
    : "Неверный формат";

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

export const createMinNumber = (minNumber) => {
  return (value) => {
    return value >= minNumber
      ? undefined
      : `Не должно быть меньше чем ${minNumber}`;
  };
};

export const createMaxNumber = (maxNumber) => {
  return (value) => {
    return value <= maxNumber
      ? undefined
      : `Не должно быть больше чем ${maxNumber}`;
  };
};

export const createMinLength = (minLength) => {
  return (value) => {
    return !!value && value.length >= 8
      ? undefined
      : `Не менее ${minLength} символов`;
  };
};

export const min8dig = createMinLength(8);
