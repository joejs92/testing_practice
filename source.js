function capitalize(stringText){
    const firstCharacter = stringText[0];
    const restOfString = stringText.substring(1);
    const capitalizedCharacter = firstCharacter.toUpperCase();
    const capitalizedString = capitalizedCharacter+restOfString;
    return capitalizedString;
}

function reverseString(string){
    const stringArray = string.split("");
    const newArray = stringArray.reverse();
    return newArray.join("");
}

class calculator{
    add(value1,value2){
        return value1+value2;
    }
    subtract(value1,value2){
        return value1-value2;
    }
    multiply(value1,value2){
        return value1*value2;
    }
    divide(value1,value2){
        return value1/value2;
    }
}

function caesarCipherCalculator(value,shift){
    return (value+26+shift)%26;
}

function casesarCipher(plainText,shift){
    const letterArray = ['a','b','c','d','e','f','g','h',
    'i','j','k','l','m','n','o','p','q','r','s','t','u',
    'v','w','x','y','z'];
    const capitalLetterArray = ['A','B','C','D','E','F'
    ,'G','H','I','J','K','L','M','N','O','P','Q','R','S',
    'T','U','V','W','X','Y','Z'];
    const stringArray = plainText.split("");
    let encryptedString = "";
    let encryptedValue = "";
    for(i = 0; i < stringArray.length; i++){
        const value1 = letterArray.indexOf(stringArray[i]);
        const value2 = capitalLetterArray.indexOf(stringArray[i]);
        if(value1 >= 0){
            const newIndex = caesarCipherCalculator(value1,shift);
            encryptedValue = letterArray[newIndex];
        }
        else if(value2 >= 0){
            const newIndex = caesarCipherCalculator(value2,shift);
            encryptedValue = capitalLetterArray[newIndex];
        }
        else{
            encryptedValue = stringArray[i];
        }
        encryptedString = encryptedString + encryptedValue;
    }
    return encryptedString;
}

//const newCalculator = new calculator();
module.exports = casesarCipher;