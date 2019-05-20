function Counter() {
  var counter = 0;
  this.check = () => counter;
  this.increment = () => counter++;
};

var myCounter = new Counter();

myCounter.increment();
myCounter.increment();
Test.assertEquals(myCounter.check(), 2)