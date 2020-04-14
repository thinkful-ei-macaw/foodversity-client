export const findDays = (days = [], daysId) =>
  days.find((days) => days.id === daysId);

export const findFood = (foods = [], foodId) =>
  foods.find((food) => food.id === foodId);

export const getFoodsForDays = (foods = [], daysId) =>
  !daysId ? foods : foods.filter((food) => food.days_id === Number(daysId));

export const countfoodsFordays = (foods = [], daysId) =>
  foods.filter((food) => food.days_id === daysId).length;
