const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  export const fetchAPI = function (date) {
    let result = [];
    result.push({"availableTime": "Select a time..."});
    for (let i = 17; i <= 23; i++) {
      if (Math.random() < 0.5) {
        result.push({"availableTime": i + ':00'});
      }
      if (Math.random() < 0.5) {
        result.push({"availableTime": i + ':30'});
      }
    }
    return result;
  };

  export const submitAPI = function (formData) {
    return true;
  };

  export const generateBookingID = () =>
    Math.round(Math.random() * Math.pow(10, 16)).toString(16);