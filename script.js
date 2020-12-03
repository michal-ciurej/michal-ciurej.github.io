
  AFRAME.registerComponent('markerhandler', {
init: function () {
  this.el.sceneEl.addEventListener('markerFound', () => {
    console.log("Caught Marker external");

    document.getElementById("marker").style.visibility = "hidden";
    document.getElementById("prompt").style.visibility = "hidden"
    document.getElementById("title").style.visibility = "visible";
    document.getElementById("sub").style.visibility = "visible";
    document.getElementById("subsub").style.visibility= "visible";
    document.getElementById("box").classList.add('moved');
          })
  this.el.sceneEl.addEventListener('markerLost', () => {
    console.log("Lost Marker external");

    document.getElementById("marker").style.visibility = "visible";
  })
}
});