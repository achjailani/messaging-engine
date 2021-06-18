let date = new Date();

const currentDatetime = () => {
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
}

module.exports = { currentDatetime };