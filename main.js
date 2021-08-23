//1
var buttonOne = document.getElementById("buttonOne");
var inputOne= document.getElementById("inputOne");
var inputTwo= document.getElementById("inputTwo");
var inputThree = document.getElementById("inputThree");
var inputFour = document.getElementById("inputFour");
var inputFive = document.getElementById("inputFive");
var testerArray = [{firstName:"amir",ID:5},{firstName:"shalom",ID:3},{firstName:"sara",ID:4}];
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
    if(client.ID!=testerArray[i].ID){
        testerArray.push(client)
        break
    }
       else{
        alert('there is client with this id already')
        break
       } 
}
//4//5    
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
var upperDiv = document.getElementById("upperDiv")
var upperP = document.getElementById("upperP")


button7.onclick = function(){
    for (let i = 0; i < testerArray.length; i++) {
        if(testerArray[i].firstName == input7.value ){
            upperDiv.innerHTML = `its the same name:${input7.value}`
        }else{
            upperP.innerHTML = `not the same...`
        }
        
    }
}

button8.onclick = function(){
    for (let i = 1; i < testerArray.length; i++) {
        if(testerArray[i].ID == input8.value ){
            upperDiv.innerHTML = `its the same id:${input8.value}`
        }else{
            upperP.innerHTML = `not the same...`
        }
        
    }
}



