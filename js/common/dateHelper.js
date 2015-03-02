define([
  'underscore'
], function(_) {

  var dateHelper = {
    getToday: function() {
      var today = new Date(),
          year  = today.getFullYear(),
          month = '' + (today.getMonth() + 1),
          day   = '' + today.getDate();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
  }

  return dateHelper;
});