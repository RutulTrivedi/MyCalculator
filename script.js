function writeValue(num) {
    ans = document.getElementById('typeBox');
    ans.value += num;
}
function clearBox(){
    ans = document.getElementById('typeBox');
    ans.value = "";
}
function changeSign(){
    ans = document.getElementById('typeBox');
    ans.value = -ans.value;
}
function calcAns(){
    ans = document.getElementById('typeBox');
    console.log(ans);
    ans.value = eval(ans.value);
}