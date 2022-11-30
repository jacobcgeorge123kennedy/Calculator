function displayvalue(num) {
    input.value+=num;
}
function allclear(){
    input.value=" ";
}
function exprevaluate(){
    input.value=eval(input.value);
}
function back(){
    input.value=input.value.slice(0,-1)
}