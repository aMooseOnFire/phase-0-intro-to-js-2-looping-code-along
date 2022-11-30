  for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
//next

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }

  wrapGifts(gifts);

//next

  const names = ["Guadalupe", "Ollie", "Aki"]
  const typeOfGift = `surprise`

  function writeCards(names, typeOfGift) {
    let messages = [];
    for(let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${typeOfGift} gift!`);
        
    } 
    return messages
    }
  
  const messages = []

  function countDown(i) { 
    
    while(i >=0) {
      console.log(i);
    i--;
    }
    return i;
}

  countDown(4);

