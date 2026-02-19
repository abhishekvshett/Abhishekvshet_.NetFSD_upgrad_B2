let signal = "yellow";  // Try red, green, or invalid

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal");
}
