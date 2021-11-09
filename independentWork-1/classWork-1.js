// export const getHolidayPrizes = (f, s, t) => {
//     let nowDate = new Date()
//     let staffDate = new Date(s)
//     let getDate = s.getDate()
//     let getMonth = s.getMonth()
//     let newZp = (10 * t / 100) + (getDate * getMonth)
//     if (nowDate === staffDate) {
//       return `У ${f} сегодня праздник, его премия составляет ${newZp}`
//     }
//   };

  function getHolidayPrizes (f, s, t)  {
    
    let nowDate = new Date()
    let getNowDate = nowDate.getDate()
    let getNowMonth = nowDate.getMonth()
    let staffDate = new Date(Date.parse(s))
    let getStaffDate = staffDate.getDate()
    let getStaffMonth = staffDate.getMonth()
    
    let newZp = (10 * t / 100) + (getStaffDate * getStaffMonth)
    let zp = Math.ceil(newZp / 10) * 10
    
    if (getNowDate === getStaffDate && getNowMonth === getStaffMonth) {
      return `У ${f} сегодня праздник, его премия составляет ${zp}`
    } else {
      return `У ${f} сегодня обычный день, поэтому без премии`
    }
  };

  const f = "Andrey Rumiantsev";
  const s = "1995-11-09T08:13:51.376Z"
  const t = "500"

  console.log(getHolidayPrizes(f, s, t) )

 