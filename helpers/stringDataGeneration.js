export function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export function generateRandomEmail(){
  var emailValue = generateRandomString(10)+"@gmail.com";
  return emailValue;
}

export function generateRandomName(){
  let name = generateRandomString(10);
  name = capitalizeFirstLetter(name);
  return name;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

