var interval1, interval2;
var active_12 = true;
var active_24 = true;

document.getElementById('btn-24').addEventListener('click', function() { 
    if(active_24) {
        document.querySelector('#time').style.fontSize = 70;
        
        document.querySelector('#btn-12').classList.remove('active');
        document.querySelector('#btn-24').classList.add('active');

        Display();
        interval1 = setInterval(Display, 1000);  
        clearInterval(interval2);

        function Display () {
            var time = new Date();
            var hour = time.getHours();
            var min = time.getMinutes();
            var sec = time.getSeconds();

            if(hour < 10)
                hour = '0' + hour;
            if(min < 10)
                min = '0' + min;
            if(sec < 10)
                sec = '0' + sec;

            document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec;
        }
        active_24 = false;
        active_12 = true;        
    }   
});

document.getElementById('btn-12').addEventListener('click', function() {   
    if(active_12) {
        document.querySelector('#time').style.fontSize = 70;

        document.querySelector('#btn-12').classList.add('active');
        document.querySelector('#btn-24').classList.remove('active');

        Display1();
        interval2 = setInterval(Display1, 1000);  
        clearInterval(interval1);

        function Display1 () {

            var time = new Date();
            var hour = time.getHours();
            var min = time.getMinutes();
            var sec = time.getSeconds();
            var med = 'PM'

            if(hour < 10)
                hour = '0' + hour;
            if(min < 10)
                min = '0' + min;
            if(sec < 10)
                sec = '0' + sec;

            (hour > 12) ? med = 'PM' : med = 'AM';
            hour = hour%12;

            if(hour < 10)
                hour = '0' + hour;

            document.getElementById('time').innerHTML = hour + ':' + min + ':' + sec + " " + med;
        }
        
        active_12 = false;
        active_24 = true;       
    }   
});