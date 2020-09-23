//process.stdout.write('\x07' + '.');

const args = process.argv.slice(2);
delayTimes = args

if (delayTimes.length === 0) {
  console.log ("please type in a number")
}

for (const time of delayTimes){
  if (time < 0) {
    console.log ("Whole numbers please")
  } else {
    setTimeout(()=> {
      process.stdout.write('\x07')
    }, time*1000)
  }
}

// conditional for if no numbers are provided

// an input is negative number; ignore them

// an input is not a number; ignore them 