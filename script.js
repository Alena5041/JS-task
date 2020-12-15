function myFunction() {
    let content = document.getElementById("input").value;
    let array = content.split('');
    let letterArray = [];

    array.forEach(e => {
        letterArray.push({letter: e, match: false})
    });

    letterArray.forEach(e => {
        if(isUpperCase(e)) {
            if (letterArray.find(element => element.letter === e.letter.toLowerCase())) {
                e.match = true;
            }
        } else {
            if (letterArray.find(element => element.letter === e.letter.toUpperCase())) {
                e.match = true;
            }
        }
    });

    let result = [];
    let currentResult = [];

    letterArray.forEach(e => {
        if (e.match) {
            currentResult.push(e);
            console.log('currentResult:' + currentResult.length);
        } else {
            if (currentResult.length > result.length) {
                result = currentResult;
            } else {
                currentResult = [];
            }
        }

        if (result.length === 0) {
            result = currentResult;
        }
        console.log('result:' + result.length);
    });

    document.getElementById("demo").innerHTML = result.length;
}

function isUpperCase(e) {
    return e.letter === e.letter.toUpperCase();
}


