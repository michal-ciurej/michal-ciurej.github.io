
  AFRAME.registerComponent('markerhandler', {
init: function () {
  this.el.sceneEl.addEventListener('markerFound', () => {
    console.log("Caught Marker external");

    document.getElementById("bro").style.visibility = "hidden";
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("sub").style.visibility = "visible";
    document.getElementById("subsub").style.visibility= "visible";
    document.getElementById("subsubsub").style.visibility= "visible";
    document.getElementById("callme").style.background= "#006600";
          })
  this.el.sceneEl.addEventListener('markerLost', () => {
    console.log("Lost Marker external");

    document.getElementById("bro").style.visibility = "visible";
  })
}
});