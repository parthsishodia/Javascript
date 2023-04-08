let marks_class=[91,67,82,44]
console.log(marks_class)
let maarks=[null,78,56,66,"Not Present"]
console.log(maarks)
console.log(maarks[0])
console.log(maarks[9])
console.log(maarks.length)
//adding new value in array
maarks[6]=78
console.log(maarks[6])
maarks[5]=4
maarks[2]=96//Changing of marks
console.log(maarks)

//Arrays method

let c=maarks.join("-")//join element of array using separater
console.log(c,typeof c)


console.log(maarks.pop())//pop last element 
console.log(maarks)

console.log(maarks.push(98))//returns new array len and push item into it
console.log(maarks)


let r=maarks.shift()//pop first element of string
console.log(r)
console.log(maarks)


let t=maarks.unshift(89)//return new array len nd add eleent in first position
console.log(t)
console.log(maarks)

let num =[2,5,6,7,2,3,4,4,2,8,9,9]
delete num[9]
console.log(num)// Array leng is not affected


let num2=[4,5,,6,7,8]
let num3=[45,3,5,6,6]
let newarray= num2.concat(num3,num)
console.log(newarray)

//sort
let compare=(a,b)=>
{
    return a - b
}
console.log(num.sort())//modify original array
console.log(num)


//reverse
console.log(num.reverse())//change original array

//splice:-
//add new array items and modify source array
let num8 =[2,5,6,7,2,3,4,4,2,8,9,9]
num8.splice(2,3,1022,1021,1023)//(starting index,delete num of elements,elements,elements...)
console.log(num8)


//slice: its takes out elements from array:- return deleted elements
let num4=[3,5,1,2,4]
console.log(num4.slice(2))
console.log(num4.slice(1,3))



// Loops in array

let re=[33,5,66,77,88,99]
for(let i=0;i<re.length;i++)
{
    console.log(re[i]*re[i])
}
 console.log("--------------")


//forEach
re.forEach((element)=>{
    console.log(element*element)
})

//Array.from
let name="Parth"
let arr=Array.from(name)
console.log(arr)


//for of
for(let i of num4)
{
    console.log(i)
}
console.log("-----------")



//for ....in
for(let item of num4)
{
    console.log(item)
}















