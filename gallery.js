

function upDate(previewPic){
   
        var add = previewPic.src;
        document.getElementById("image").innerHTML = previewPic.alt;
        document.getElementById('image').style.backgroundImage = 'url(' + add + ')';

     
       }
   
       function unDo(){
       document.getElementById("image").innerHTML = "Hover over an image below to display here.";
       document.getElementById("image").style.backgroundImage = 'none';

       }