const args = process.argv.slice(2);

if (args[0] === undefined) {
  console.log("No argument");
} else {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
