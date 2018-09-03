var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wanamaker.jpg') {
      myImage.setAttribute ('src','images/muba.jpg');
    } else {
      myImage.setAttribute ('src','images/wanamaker.jpg');
    }
}



var myButton = document.querySelector('button');

function setUserName() {
var myName = alert('"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment - Emerson". My vision is to create significant change in the world and inspire every little child to believe and aspire for greatness');
}
  
myButton.onclick = function() {
setUserName();
}


