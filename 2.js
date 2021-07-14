function stringToArray(str){
    let result = [];
    let temp = "";
    for (let i = 0; i < str.length; i ++) {
        if (str[i] !== " ") {
            temp += str[i].toLowerCase();
        } else {
            result.push(temp);
            temp = "";
        } if (i === str.length - 1) {
            result.push(temp);
            temp = "";
        }
    }

    return result;
}

// console.log(stringToArray('dia percaya aku percaya'));

function uniqueDuplicateFinder(str) {
    let result = {};
    let arr = stringToArray(str);

    for (let i = 0; i < arr.length; i++) {
        // console.log (`\ni: ${arr[i]}`)
        for (let j = i + 1; j < arr[i].length; j++) {
            if (arr[j] === undefined) {
                break;
            }
            // console.log (`j: ${arr[j]}`)
            if (arr[i] === arr[j]) {
                result["duplicate"] +=  " " + arr[j];
            } else if (arr[i] !== arr[j]){
                result["unique"] += " " + arr[j];
            }
        }
    }

    return result;
}

console.log(uniqueDuplicateFinder('dia percaya aku percaya'));