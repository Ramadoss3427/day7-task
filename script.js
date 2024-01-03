//QUESTION :A
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    var res=result.filter((x)=>x.region==="Asia")
  var final=res.map((ele)=>(ele.name.common))
  console.log(final)
}
//QUESTION :B
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    var res1=result.filter((x)=>x.population<200000)
    console.log(res1)
}
//QUESTION :C
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    var res2=result.forEach((ele)=>console.log`${ele.name.common} ${ele.capital} ${ele.flag}`)
    console.log(res2)
    
}

//QUESTION :D
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    var res3=result.reduce((acc,cv)=>acc+cv.population,0)
    console.log(res3)
}
//QUESTION :E
var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response;
    var result= JSON.parse(data);
    var currency=result.filter((value)=>value.currencies&&value.currencies.USD)
    currency.forEach((value)=>console.log(value.name.common))
}