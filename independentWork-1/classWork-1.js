export const getHolidayPrizes = (f, s, t) => {
    let nowDate = new Date()
    let staffDate = new Date(s)
    let newZp = (10 * t / 100) + (getDate * getMonth)
    if (nowDate === staffDate) {
      return `У ${f} сегодня праздник, его премия составляет ${newZp}`
    }
  };