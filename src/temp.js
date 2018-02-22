
var str = '8888877878887777777888888887777777887887788788887887777777788888888887788888';
var bracketsConfig = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];

var arrBrackets = str.split('');
if (+bracketsConfig[0][0] === 1) {
  arrBrackets = workWithNumber(arrBrackets, bracketsConfig);
  console.log(arrBrackets);
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
          arrBrackets.splice(i - 1, 2);
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
        arrBrackets.splice(i - 1, 2);
        prevBr = ')';
        if (i - 2 < 0) {
          i = -1;
        }
        else {
          i -= 3;
        }
      }
      console.log(arrBrackets);
      break;
    case ']':
      if (prevBr !== '[') {
         return false;
      }
      if (prevBr === '[') {
        arrBrackets.splice(i - 1, 2);
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
        arrBrackets.splice(i - 1, 2);
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
          arrBrackets.splice(i - 1, 2);
          //prevBr = '1';
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
          arrBrackets.splice(i - 1, 2);
          //prevBr = '4';
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
          arrBrackets.splice(i - 1, 2);
          //prevBr = '6';
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
