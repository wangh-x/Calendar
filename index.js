const cur = new Date()
let curYear = cur.getFullYear()
let curMonth = cur.getMonth() + 1

const renderTime = () => {
  // 时间格式 2022-03
  const date = `${curYear}-${curMonth.toString().padStart(2, '0')}`
  document.querySelector('.time').innerText = date
}

renderTime()

const renderDate = (year, month) => {
  const tbody = document.querySelector('tbody')
  let str = ''
  // 本月的第一天 => 星期几
  let monthStart = new Date(year, month - 1, 1).getDay()
  // 本月的最后一天 => 一共多少天
  let monthEnd = new Date(year, month, 0).getDate()
  let j = 1
  for (let i = 1, weekday = 1; i <= monthEnd; i++, weekday++) {
    if (weekday % 7 === 1) {
      str += '<tr>'
    }
    for (; j <= monthStart; j++) {
      str += '<td></td>'
      weekday++
    }
    str += `<td>${i}</td>`
    if (weekday % 7 === 0) {
      str += '</tr>'
    }
  }
  tbody.innerHTML = str
}

renderDate(curYear, curMonth)

const preMonth = () => {
  renderDate(curYear, --curMonth)
  renderTime()
}

const nextMonth = () => {
  renderDate(curYear, ++curMonth)
  renderTime()
}

const preYear = () => {
  renderDate(--curYear, curMonth)
  renderTime()
}

const nextYear = () => {
  renderDate(++curYear, curMonth)
  renderTime()
}