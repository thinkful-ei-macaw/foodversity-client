export const findDays = (days = [], daysId) =>
  days.find((days) => days.id === daysId);

export const findFood = (foods = [], foodId) =>
  foods.find((food) => food.id === foodId);

export const getFoodsForDay = (foods = [], daysId) =>
  !daysId ? foods : foods.filter((food) => food.days_id === Number(daysId));

export const countFoodsForDays = (foods = [], daysId) =>
  foods.filter((food) => food.days_id === daysId).length;
