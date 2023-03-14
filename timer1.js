const inputs = process.argv.slice(2);
let largestInput = Math.max.apply(null, inputs);
let currentNum = 0;

const countAndAlarm = (numArr) => {
  currentNum++
  for (const each of numArr) {
    if (currentNum == each) {
      console.log('\007');
    }
  }
  process.stdout.write('\r' + currentNum);
}


const interval = setInterval(() => {
  countAndAlarm(inputs)
}, 1000)

setTimeout( () => {
  clearInterval(interval)
}, (1000 * largestInput) + 500)
