// let angka = prompt("masukan angka");

// if (angka %2 == 0) {
//     alert(angka + " angko ganok ");
// } else {
//     alert(angka + " angko ganjia ");
// }


// hari jumat belajar arrow function
function greeting_card() {
    console.log("Hai Zeeyfx")
  }
  
  greeting_card()
  
  function perkalian(a, b) {
    console.log(a*b)
  }
  
  perkalian (3, 5)
  
  function pembagian(a, b) {
    console.log(a/b)
  }
  
  pembagian (9, 3)
  
  function penambahan(a, b) {
    console.log(a+b)
  }
  
  penambahan (9, 3)
  
  function pengurangan(a, b) {
    console.log(a-b)
  }
  
  pengurangan (9, 3)
  
  function is_even(num) {
    if (num % 2 == 0){
      return("Ganok") 
    } else {
      return("Ganjia")
    }
  }
  
  let coba = is_even(13)
  console.log (coba)
  
  // arrow function
  const add_number =  (a,b) => { console.log(a+b) }
  
  add_number(1, 8)
  

  // functionconsole.log("Hai ZeeyFx")

let my_arr = ["ZeeyFx", "CryZee", "ZiChain"]

console.log("Hello " + my_arr[0])
my_arr.reverse()

//cara menampilkan Array
for (i=0; i< my_arr.length; i++) {
  console.log(my_arr[i])
}


// pemanggilan array multidimensi
let my_arr2 = ['muso', 'sop ikan', 'dra gon', ['rehan', 'musi', 'owow']]
// console.table (my_arr2)

console.log("Hello " + my_arr2[3][1])
let ngaowk = my_arr2.reverse()
console.log(ngaowk)

function repeat_awoawowk() {
  while (!true) {
    console.log("aowkawok")
  }
}

repeat_awoawowk()