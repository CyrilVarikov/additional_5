module.exports = function check(str, bracketsConfig) {

  var arrBrackets = str.split('');
  if (+bracketsConfig[0][0] === 1) {
    arrBrackets = workWithNumber(arrBrackets, bracketsConfig);
    if (arrBrackets.length === 0) {
      return true;
    } else {
      return false;
    }
  }


  var prevBr;
  var i = 0;
  while ((i < arrBrackets.length) && (arrBrackets.length !== 0)) {
    switch (arrBrackets[i]) {
      case '(':
        // console.log(roundBr);
        prevBr = '(';
        break;
      case '[':
        prevBr = '[';
        break;
      case '{':
        prevBr = '{';
        break;
      case '|':
          if (prevBr === '|') {
            if (i - 1 < 0) {
              arrBrackets.splice(0, 2);
            } else{
              arrBrackets.splice(i - 1, 2);
            }
            if (i - 2 < 0) {
              i = -1;
            }
            else {
              i -= 3;
            }
          }
        prevBr = '|';
        break;
      case ')':
        if (prevBr !== '(') {
           return false;
        }
        if (prevBr === '(') {
          if (i - 1 < 0) {
            arrBrackets.splice(0, 2);
          } else{
            arrBrackets.splice(i - 1, 2);
          }
          prevBr = ')';
          if (i - 2 < 0) {
            i = -1;
          }
          else {
            i -= 3;
          }
        }
        break;
      case ']':
        if (prevBr !== '[') {
           return false;
        }
        if (prevBr === '[') {
          if (i - 1 < 0) {
            arrBrackets.splice(0, 2);
          } else{
            arrBrackets.splice(i - 1, 2);
          }
          prevBr = ']';
          if (i - 2 < 0) {
            i = -1;
          }
          else {
            i -= 3;
          }
        }
        break;
      case '}':
        if (prevBr !== '{') {
           return false;
        }
        if (prevBr === '{') {
          if (i - 1 < 0) {
            arrBrackets.splice(0, 2);
          } else{
            arrBrackets.splice(i - 1, 2);
          }
          prevBr = '}';
          if (i - 2 < 0) {
            i = -1;
          }
          else {
            i -= 3;
          }
        }
        break;
    }
    i++;
  }
  if (arrBrackets.length === 0) {
    return true;
  } else {
    return false;
  }

  function workWithNumber(arrNumber, bracketsConfig) {
    var prevBr;
    var i = 0;
    var temp ;
    while ((i < arrBrackets.length) && (arrBrackets.length !== 0)) {
      switch (arrBrackets[i]) {
        case '1':
          prevBr = '1';
          break;
        case '2':
          if (prevBr !== '1') {
            return arrBrackets;
          }
          if (prevBr === '1') {
            if (i - 1 < 0) {
              arrBrackets.splice(0, 2);
            } else{
              arrBrackets.splice(i - 1, 2);
            }
            if (i - 2 < 0) {
              i = -1;
            }
            else {
              i -= 3;
            }
          }
          break;
        case '3':
          prevBr = '3';
          break;
        case '4':
          if (prevBr !== '3') {
            return arrBrackets;
          }
          if (prevBr === '3') {
            if (i - 1 < 0) {
              arrBrackets.splice(0, 2);
            } else{
              arrBrackets.splice(i - 1, 2);
            }
            if (i - 2 < 0) {
              i = -1;
            }
            else {
              i -= 3;
            }
          }
          break;
        case '5':
          prevBr = '5';
          break;
        case '6':
          if (prevBr !== '5') {
            return arrBrackets;
          }
          if (prevBr === '5') {
            if (i - 1 < 0) {
              arrBrackets.splice(0, 2);
            } else{
              arrBrackets.splice(i - 1, 2);
            }
            if (i - 2 < 0) {
              i = -1;
            }
            else {
              i -= 3;
            }
          }
          break;
        case '7':
          if (prevBr === '7') {
              if (i - 1 < 0) {
                arrBrackets.splice(0, 2);
              } else{
                arrBrackets.splice(i - 1, 2);
              }
              if (i - 2 < 0) {
                i = -1;
              }
              else {
                i -= 3;
              }
            }
          prevBr = '7';
          break;
        case '8':
          if (prevBr === '8') {
              if (i - 1 < 0) {
                arrBrackets.splice(0, 2);
              } else{
                arrBrackets.splice(i - 1, 2);
              }

              if (i - 2 < 0) {
                i = -1;
              }
              else {
                i -= 3;
              }
            }

          prevBr = '8';
          break;
      }
      i++;
    }
  return arrBrackets;
  }


};
