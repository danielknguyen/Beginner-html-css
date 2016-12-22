var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images-folder/appicns_firefox.png') {
      myImage.setAttribute ('src','images-folder/mozilla-firefox-icon-4760.png');
    } else {
      myImage.setAttribute ('src','images-folder/appicns_firefox.png');
    }
}