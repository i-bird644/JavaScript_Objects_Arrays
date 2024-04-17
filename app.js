console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


function iarraySum(xz) {

    let total_sum = 0;
    xz.forEach(element => {        
        total_sum += element;
    });

    return total_sum;
}

const numbers = [2, 22, 12, 17, 18, 39, 129];
let t_sum = iarraySum(numbers);
console.log("Working Code: "+t_sum);



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let fav_book_title = "Love: The Way to Victory";
let fav_book_author = "Kenneth E Hagin";
let print_length = 304;
let readCount = 2;

let book = {

    title : undefined,
    author : undefined,
    pages : undefined,
    read_count: undefined,
    info: undefined,

};

book.title = fav_book_title;
book.author = fav_book_author;
book.pages = print_length;
book.read_count = readCount;

book.info = function () {

    let book_info = ` ${this.title} by ${this.author}, ${this.pages} pages, read ${this.read_count} times.`;
    return book_info;

}

console.log("Favorite Book Info: " + book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog";
let sent_length = sentence.length;


let word_array = sentence.split(" ");
let num_of_words = word_array.length;
let word_char_array = new Array(num_of_words);


//STEP 3: Iterate over each word in the #word_array
//let limit = word_array.length;
let note_pad = undefined;
let w_charArraylen = word_char_array.length;

for (let ix = 0; ix < w_charArraylen; ix++) {

    note_pad = word_array[ix];
    let word_len = note_pad.length;
    word_char_array[ix] = new Array(word_len);

    for (let i = 0; i < word_len; i++) {        
        word_char_array[ix][i] = note_pad.charAt(i);
    }
  
}


let msg = undefined;
for (let a = 0; a < w_charArraylen; a++){
  //Reversing each array of characters in #word_char_array
  msg = word_char_array[a].reverse().toString().replace(/,/g, "");

  //updating the array of word with a reversed word
  word_array[a] = msg;
}

//Converting the array of reversed words back into a string
let reversed_str = undefined;
reversed_str = word_array.toString().replace(/,/g, " ");

console.log(reversed_str);


let data = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let data_row_array = data.split("\n");
//console.log(data_row_array);

data = data_row_array[0].toString();
let header_array = data.split(",");
let ra_len = data_row_array.length - 1;

let ra = new Array(ra_len);
console.log(ra.length);


for (let i = 1; i < data_row_array.length; i++){
    data = data_row_array[i].toString();
    ra[i-1] = data.split(",");
}

console.log(ra);

// Exercise 4.8 Section
console.log("EXERCISE 4:\n==========\n");

let arr = [];

for(let x = 0; x < ra.length; x++){

    let obj = { name: ra[x][0], age: ra[x][1] };
    arr.push(obj);
}

console.log(arr);

