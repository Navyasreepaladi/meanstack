//node is asynchronous so to show y it is important
//node is asynchronous ..use of async
let total=0
let fs=require('fs')
//print()=> if print is here then it throws a error telling cannot access n
// setTimeout(print1,0)//makes it async and pass 1 iter through entire code so doesnt give any error
// setImmediate(print2)
let n=1
fs.readFile('./index.js',()=>{
    setTimeout(print1, 0);
    setImmediate(print2);
})
//print()
function print1(){
    total=n*10;
    console.log("Total 1:",total)
    n++;
}
function print2(){
    total=n*10;
    console.log("Total 2:",total)

}
//now this gives non deterministic output arbitrarily ,so to control this we use filesystem and put this in io cycle ex:read ,
//write etc..so before it was not bound to io cycle after putting those statements in read block it will be bound to io cycle &
//according to it setimmediate get highest priority in i/o cycle right after the phase for pole is done next cycle is check cycle 
//(cycle 5)