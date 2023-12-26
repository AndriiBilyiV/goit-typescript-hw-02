/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  MONDAY = "Monday",
  TUESDAY = "Tuesday",
  WEDNESDAY = "Wednesday",
  THURSDAY = "Thursday",
  FRIDAY = "Friday",
  SATURDAY = "Saturday",
  SUNDAY = "Sunday",
}
const isWeekend = (weekday: string): boolean | null => {
  switch (weekday) {
    case Days.MONDAY:
      return true;
    case Days.TUESDAY:
      return true;
    case Days.WEDNESDAY:
      return true;
    case Days.WEDNESDAY:
      return true;
    case Days.THURSDAY:
      return true;
    case Days.FRIDAY:
      return true;
    case Days.SATURDAY:
      return false;
    case Days.SUNDAY:
      return false;
    default:
      return null;
  }
};
