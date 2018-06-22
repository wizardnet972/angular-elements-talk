const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getPreviousMonths = (currentMonth) => {
  const index = currentMonth;
  const result = [];

  for (let j = 0; j < MONTHS.length; j++) {
      let access = index - j;
      if (access < 0) {
          access += MONTHS.length;
      }
      result.push(MONTHS[access]);
  }

  return result;
};

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

