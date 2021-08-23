//1
var buttonOne = document.getElementById("buttonOne");
var inputOne= document.getElementById("inputOne");
var inputTwo= document.getElementById("inputTwo");
var inputThree = document.getElementById("inputThree");
var inputFour = document.getElementById("inputFour");
var inputFive = document.getElementById("inputFive");
var testerArray = [{firstName:"amir",id:5},{firstName:"shalom",id:3},{firstName:"sara",id:4}];
buttonOne.onclick =function (){
    var client ={
        firstName:inputOne.value,
        lastName:inputTwo.value,
        Year:inputThree.value,
        ID:inputFour.value,
        city:inputFive.value,
          
    }
    testerArray.push(client)
    console.log(testerArray);
//2
 var date = new Date()
client.time = (`${date.getHours()}:${date.getMinutes()}`)
client.date = (`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`)

//3
for (let i = 0; i < testerArray.length; i++) {
    if(client.ID!=testerArray[i].id){
        testerArray.push(client)
        break
    }
        alert("there is client with this id already");
        break
}
// 4//5    
     let div = document.getElementById("container")
     div.innerHTML += `<br> firstName:${inputOne.value} <br> lastName:${inputTwo.value}<br> year:${inputThree.value}<br> id:${inputFour.value} <br> city:${inputFive.value}`
        
}

inputOne.oninput=function(){
    inputOne.value = inputOne.value.toUpperCase()
}
inputTwo.oninput=function(){
    inputTwo.value = inputTwo.value.toUpperCase()
}

inputThree.oninput=function(){
    inputThree.value = inputThree.value.toUpperCase()
}



inputFive.oninput=function(){
    inputFive.value = inputFive.value.toUpperCase()
}

//7
var button7 = document.getElementById("button7");
var input7 = document.getElementById("input7")
var input8 = document.getElementById("input8")
var upperDiv = document.getElementById("upperDiv")
var upperP = document.getElementById("upperP")


button7.onclick = function(){
    for (let i = 0; i < testerArray.length; i++) {
        if(testerArray[i].firstName == input7.value ){
            upperDiv.innerHTML = `there is client in this name:${input7.value}`
        }
    }
    if(upperDiv.innerHTML.length<2){
        upperP.innerHTML = `not the same...`
    }
}

button8.onclick = function(){
    for (let i = 0; i < testerArray.length; i++) {
        if(testerArray[i].id == input8.value ){
            upperDiv.innerHTML = `there is client with the same id:${input8.value}`
        }
    }
    if(upperDiv.innerHTML.length<2){
        upperP.innerHTML = `not the same...`
    }
    console.log(input8.value);
}



