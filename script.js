window.onload = function () {
    document
      .querySelector(".say-hi-button")
      .addEventListener("click", function () {
        window.location.href="tel:0044 7795522340";
      });

  };

  AFRAME.registerComponent('markerhandler', {
init: function () {
  this.el.sceneEl.addEventListener('markerFound', () => {
    console.log("doesthiscall");

    document.getElementById("bro").style.visibility = "hidden";
  })
  this.el.sceneEl.addEventListener('markerLost', () => {
    console.log("call2");

    document.getElementById("bro").style.visibility = "visible";
  })
}
});