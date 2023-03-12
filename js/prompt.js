// alert('How are you')
const showAlert = () =>{
    alert('Alert is an ai of a browser')
}

const lendMoney = () => {
   const result = confirm('will you lend me 500 taka')
//    console.log(result);
   if (result === true){
    alert('tui amar jan er dosto!!!')
   }
   else{
        console.log('DGM.... toke aj e block maira dimu.')
   }
   
}

const getInfo = () => {
    //alert
    // confirm
    const name = prompt('Tell me your name')
    console.log(name)
    if(name === null){
        alert('naam na dile kaam nai!! ja foooot')
    }
    else
    console.log('shagotom', name)
}