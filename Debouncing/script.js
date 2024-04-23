let counter =0;
function getData(){
    console.log("data fetching" + counter++);
}
function myDebounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            call();
        },d)
    }
}
const betterFunction = myDebounce(getData,1000);




// let counter1 = 0;
// function getdata2(){
//     console.log("data fetching"+ counter1++);
// }
// function myDebounce1(call1,d1){
//     let timer2;
//     return function(...args){
//         if(timer2) clearTimeout(timer2);
//         setTimeout(()=>{
//             call1()
//         },d1)
//     }
// }
// const mydata = myDebounce1(getdata2,1000);
