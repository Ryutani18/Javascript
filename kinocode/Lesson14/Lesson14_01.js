var Student = class {
  constructor(name) {
    this.name = name;
  }

  cal_avg(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i];
    }
    var avg = sum / data.length;
    return avg;
  }

  judge(avg) {
    var result;
    if (avg >= 60) {
      result = "passed";
    } else {
      result = "failed";
    }
    return result;
  }
}

var a001 = new Student("sato");
var data = [65, 70, 30, 90, 50];
var avg = a001.cal_avg(data);
var result = a001.judge(avg);

console.log(a001.name);
console.log(avg);
console.log(result);