const jsonStr =
  '[' +
  '{"name":"Alice","dob": "2001-03-04T00:00:00.000Z","h": 165,"w": 68},' +
  '{"name":"Robert","dob": "1997-01-31T00:00:00.000Z","h": 170,"w": 88},' +
  '{"name":"Charles","dob": "1978-10-15T00:00:00.000Z","h": 188,"w": 102},' +
  '{"name":"Lucía","dob": "1955-08-07T00:00:00.000Z","h": 155,"w": 61},' +
  '{"name":"Peter","dob": "1988-03-09T00:00:00.000Z","h": 165,"w": 99},' +
  '{"name":"Lucas","dob": "1910-12-04T00:00:00.000Z","h": 172,"w": 75}' +
  ']'

function overweightNames(people) {
  return people
    .filter((p) => p.w / Math.pow(p.h / 100, 2) > 25)
    .map((p) => p.name)
    .join(', ')
}

function getTimeDiff(date1, date2) {
  const MIN_TO_MS = 60 * 1000
  const dateDiff = new Date(Math.abs(date1.getTime() - date2.getTime()))
  const diffOffset = dateDiff.getTimezoneOffset() * MIN_TO_MS
  const gmtDiff = new Date(dateDiff.getTime() + diffOffset)

  return {
    years: gmtDiff.getFullYear() - 1970,
    months: gmtDiff.getMonth(),
    days: gmtDiff.getDate() - 1,
    hours: gmtDiff.getHours(),
    minutes: gmtDiff.getMinutes(),
    seconds: gmtDiff.getSeconds(),
  }
}

function nearestBirthday(people) {
  return people.sort((p1, p2) => {
    const age1 = getTimeDiff(new Date(), new Date(p1.dob))
    const age2 = getTimeDiff(new Date(), new Date(p2.dob))

    return age1.months !== age2.months
      ? age2.months - age1.months
      : age2.days - age1.days
  })[0].name
}

console.log(overweightNames(JSON.parse(jsonStr)))
console.log(nearestBirthday(JSON.parse(jsonStr)))
