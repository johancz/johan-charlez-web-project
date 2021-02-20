{
  let firstColor = [0, 0, 0];
  let secondColor = [0, 0, 0, .7];
  let keyframes = [];
  let gap = 2;

  for (let i = 0; i <= 100; i += 5) {
  	keyframes.push(`${i}% { background: radial-gradient(circle, rgba(${firstColor.join(",")},${(i*.007).toPrecision(3)}) ${100-i}%, rgba(${secondColor.join(",")}) 100%); }`);
  }

  console.log(keyframes.join("\n      "));
}

