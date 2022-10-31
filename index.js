const ele=document.getElementById('super');

function run(){
    if(typeof(Storage) !== "undefined"){
        if(sessionStorage.go){
               sessionStorage.go= (Number(sessionStorage.go)+1);
        }
        else{
            sessionStorage.go=1;
        }
      ele.innerHTML="You have clicked "+sessionStorage.go+ " times.";
    }
    else{
        ele.innerHTML="Not supported in this browser dude!";
    }
}