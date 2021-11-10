export const dataProcessingAboutSalary = (f, s) => {
  return f + s;
};

export const calculateCashback = (isCashback, sum, cb) => {};

export const getHolidaysNotifications = (f, s) => {};

export const getHolidayPrizes = (f, s, t) => {
  let nowDate = new Date();
  let getNowDate = nowDate.getDate();
  let getNowMonth = nowDate.getMonth();
  let staffDate = new Date(Date.parse(s));
  let getStaffDate = staffDate.getDate();
  let getStaffMonth = staffDate.getMonth();

  let newZp = (10 * t) / 100 + getStaffDate * getStaffMonth;
  let zp = Math.ceil(newZp / 10) * 10;
  console.log(zp);

  if (getNowDate === getStaffDate && getNowMonth === getStaffMonth) {
    return `У ${f} сегодня праздник, его премия составляет ${zp}`;
  } else {
    return `У ${f} сегодня обычный день, поэтому без премии`;
  }
};
