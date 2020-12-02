console.log("loadingJS")
window.onload = function () {
  console.log("hi")
    document
      .querySelector(".callButton")
      .addEventListener("click", function () {
        console.log("fuuuuuuuuuuuuuuuuuuuuuuuuuuuuck")
        window.location.href="tel:0044 7795522340";
      });

  };