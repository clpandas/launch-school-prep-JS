function reverse_words(sentence) {
  return sentence?.split(' ')
                  .reverse()
                  .join(' ');
}

console.log(reverse_words("Four score and seven"));
console.log(reverse_words(null));
console.log(reverse_words(undefined));