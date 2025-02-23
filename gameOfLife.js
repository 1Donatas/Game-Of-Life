function verifyCell(neighbours) {
    if (neighbours < 2){
      return false;
    } else if (neighbours > 3){
      return false;
    } else {
      return true;
    }
  }
  
  module.exports = {verifyCell};