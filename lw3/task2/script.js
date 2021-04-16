function isTimeRangesIntersect(dateRange1, dateRange2) {
  if (getDate(dateRange1[0]) <= getDate(dateRange2[1]) && getDate(dateRange1[1]) >= getDate(dateRange2[0])) {
    return true;
  }

  return false;
}

function getDate(time) {
  var today = new Date();
  var _t = time.split(":");
  today.setHours(_t[0], _t[1], 0, 0);
  return today;
}