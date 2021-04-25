function isTimeRangesIntersect(dateRange1, dateRange2) {
  if (dateRange1 === undefined || dateRange2 === undefined) {
    return false;
  }

  if (dateRange1.length === 0 || dateRange2.length === 0) {
    return false;
  }

  const firstTimeRange1 = getDate(dateRange1[0]);
  const secondTimeRange2 = getDate(dateRange2[1]);
  const firstTimeRange2 = getDate(dateRange2[0]);
  const secondTimeRange1 = getDate(dateRange1[1]);

  if (
    firstTimeRange1 === false ||
    secondTimeRange2 === false ||
    firstTimeRange2 === false ||
    secondTimeRange1 === false
  ) {
    return false;
  }

  if (
    firstTimeRange1 <= secondTimeRange2 &&
    secondTimeRange1 >= firstTimeRange2
  ) {
    return true;
  }

  return false;
}

function getDate(time) {
  var today = new Date();
  var _t = time.split(":");
  if (
    _t[0] === undefined ||
    _t[1] === undefined ||
    _t[0] === "" ||
    _t[1] === ""
  ) {
    return false;
  }
  today.setHours(_t[0], _t[1], 0, 0);
  return today;
}