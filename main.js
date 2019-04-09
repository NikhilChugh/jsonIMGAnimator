var div = document.querySelector('div');
var play = document.getElementById('playBtn');
play.addEventListener('click', loadImages);

    function loadImages(){
    play.style.opacity = 0;
    document.body.style.backgroundImage = 'url("https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80")';  
    var xhr = new XMLHttpRequest();
        xhr.open('GET', 'sample.json', true);
        xhr.onload = function(){
            if(this.status == 200){
                var images = JSON.parse(this.responseText);
                var output = ' ';
                for(i in images){
                    output += '<img src = "' + images[i].img + ' " class = "elem' + i + '">';
                }   
                div.innerHTML = output;             
            }
         
            }
            xhr.send();

        }
           
          
    







// function loadImages(){
//     play.style.opacity = 0;
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'sample.json', true);
//     xhr.onload = function(){
//         if(this.status == 200){
//             var images = JSON.parse(this.responseText);
//             for(i in images){
//                 ul.innerHTML = ' ';
//                 var output = ' ';
//                 setTimeout(function(){
//                     output += '<li>' + images[i].img + '</li>';
//                 },3000);
//                 ul.innerHTML = output;
//                 })
//                 ul.innerHTML = ' ';
//                 play.style.opacity = 1;
//             }
//         }
//         xhr.send();
//     }
