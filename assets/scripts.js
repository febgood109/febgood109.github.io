$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);

Create magnifier glass:
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");

Insert magnifier glass:
  img.parentElement.insertBefore(glass, img);

Set background properties for the magnifier glass:
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;

Execute a function when someone moves the magnifier glass over the image:
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);)
