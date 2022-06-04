function openOrSenior(data){

  let output = [];

  data.forEach(([age, handicap])  => {
    (age >= 55 && handicap > 7) ? output.push("Senior") : output.push("Open");
  });

  return output;
}
