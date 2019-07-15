import moment from 'moment';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const getCurrentDate = () => {
  return moment().format('YYYY-MM-DD');
}

export const addDaysToCurrentDate = (numberOfDays) => {
  const futureDate = moment().add(numberOfDays, 'days');
  return futureDate.format('YYYY-MM-DD');
};

export const subtractDaysFromCurrentDate = (numberOfDays) => {
  const pastDate = moment().subtract(numberOfDays, 'days');
  console.log(pastDate.format('DD-MM-YYYY'))
  return pastDate.format('YYYY-MM-DD');
};