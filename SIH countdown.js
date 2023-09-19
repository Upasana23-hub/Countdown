
            function countDownTime()
            {
                var t=new Date().getTime();
                var d=new Date("October 20, 2023 00:00:00").getTime();
                console.log(d);
                console.log(t);
                var diff=d-t;
                console.log(diff);
        
                var sec=1000;
                var minute=sec*60;
                var hour=minute*60;
                var day=hour*24;
        
                var dueDay=Math.floor(diff/day);
                var dueHour=Math.floor((diff%day)/hour);
                var dueMinute=Math.floor((diff%hour)/minute);
                var dueSecond=Math.floor((diff%minute)/sec);
                console.log(dueDay);
                console.log(dueHour);
                console.log(dueMinute);
                console.log(dueSecond);
                
                if(dueDay<0 && dueHour<0 && dueMinute<0 && dueSecond<0){
                    document.getElementById("day").innerHTML="0";
                    document.getElementById("hour").innerHTML="0";
                    document.getElementById("minute").innerHTML="0";
                    document.getElementById("second").innerHTML="0";
                }
                else{
                    document.getElementById("day").innerHTML=dueDay;
                    document.getElementById("hour").innerHTML=dueHour;
                    document.getElementById("minute").innerHTML=dueMinute;
                    document.getElementById("second").innerHTML=dueSecond;
                }
            }
            setInterval(countDownTime,1000)
       