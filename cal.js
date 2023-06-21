var a;
var k=document.getElementById("out");
document.getElementById("bu").onclick=function(){
    var date = document.getElementById('da').value;
    var inp1=document.getElementsByName('ar1[]');
    var inp2=document.getElementsByName('ar2[]');
    var min=0;
    for(var i=0;i<inp1.length;i++){

    var startTime = new Date(`${date}T${inp1[i].value}:00`); // Replace with your starting time
    var endTime = new Date(`${date}T${inp2[i].value}:00`);   // Replace with your ending time
    
    // Calculate the time difference in milliseconds
    var timeDifference = endTime.getTime() - startTime.getTime();
    
    // Calculate the absolute value of the time difference in minutes
    var minutesDifference = Math.abs(Math.floor(timeDifference / 1000 / 60));
    
    //console.log('Time difference in minutes:', minutesDifference);
    min+=minutesDifference;
    
    }
    var am=document.getElementById('amt').value;
    am/=60;
    am*=min;
    console.log(am);
    k.innerHTML = am;
} 