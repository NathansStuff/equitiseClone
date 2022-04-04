export default function DateFormat(date) {
  //gets Date Formatted
  const nth = function (d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  const dateTime = new Date(date);
  const day = dateTime.getDate() + nth(dateTime.getDate());
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ][dateTime.getMonth()];
  const year = dateTime.getFullYear()
  return { day : day, month: month , year: year};
}
