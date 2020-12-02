
  AFRAME.registerComponent('markerhandler', {
init: function () {
  this.el.sceneEl.addEventListener('markerFound', () => {
    console.log("Caught Marker external");

    document.getElementById("bro").style.visibility = "hidden";
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("sub").style.visibility = "visible";
    document.getElementById("subsub").style.visibility= "visible";
    document.getElementById("callme").style.background= "linear-gradient(to bottom, #cc9933, #cc3300)";
          })
  this.el.sceneEl.addEventListener('markerLost', () => {
    console.log("Lost Marker external");

    document.getElementById("bro").style.visibility = "visible";
  })
}
});