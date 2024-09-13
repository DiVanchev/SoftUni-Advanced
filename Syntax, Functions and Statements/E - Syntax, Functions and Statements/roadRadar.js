function roadRadar(speed, area) {
  let status = "";
  let speedLimit = 0;
  let overTheLimit = 0;

  switch (area) {
    case "city":
      speedLimit = 50;
      break;
    case "residential":
      speedLimit = 20;
      break;
    case "interstate":
      speedLimit = 90;
      break;
    case "motorway":
      speedLimit = 130;
      break;
  }

  if (speed <= speedLimit) {
    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    overTheLimit = speed - speedLimit;
    if (overTheLimit <= 20) {
      status = "speeding";
    } else if (overTheLimit <= 40) {
      status = "excessive speeding";
    } else {
      status = "reckless driving";
    }
    console.log(
      `The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`
    );
  }
}
roadRadar(40, "city");
