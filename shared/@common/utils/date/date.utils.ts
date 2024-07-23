export const defaultDateTime = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
  .toISOString()
  .slice(0, -1)

const dataFormatMapping = {
  dash: dateFormatDash,
  dashWithTime: dateFormatDashWithTime,
  period: dateFormatPeriod,
  periodWithTime: dateFormatPeriodWithTime,
}

type DateFormatMap = keyof typeof dataFormatMapping

export function dateFormat(initialDate: string = defaultDateTime, type: DateFormatMap) {
  const date = new Date(initialDate)
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()

  const transformedMonth = month.toString().padStart(2, "0")
  const transformedDay = day.toString().padStart(2, "0")
  const transformedHour = hour.toString().padStart(2, "0")
  const transformedMinute = minute.toString().padStart(2, "0")

  return dataFormatMapping[type]({
    year: date.getFullYear().toString(),
    month: transformedMonth,
    day: transformedDay,
    hour: transformedHour,
    minute: transformedMinute,
  })
}

interface DateFormatParams {
  year: string
  month: string
  day: string
  hour: string
  minute: string
}

function dateFormatDash({ year, month, day }: DateFormatParams) {
  return `${year}-${month}-${day}`
}

function dateFormatPeriod({ year, month, day }: DateFormatParams) {
  return `${year}.${month}.${day}`
}

function dateFormatDashWithTime({ year, month, day, hour, minute }: DateFormatParams) {
  return `${year}-${month}-${day} ${hour}:${minute}`
}

function dateFormatPeriodWithTime({ year, month, day, hour, minute }: DateFormatParams) {
  return `${year}.${month}.${day} ${hour}:${minute}`
}
