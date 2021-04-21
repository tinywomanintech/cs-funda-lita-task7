function updateLight(current) {
  
  //your code here!
  switch (current) {
    case "green":
      return "yellow";
      break;
    case "yellow":
      return "red";
      break;
    default:
      return "green"
  }
}
  
