var cssSelector = anime({
  targets: "#cssSelector .el",
  translateX: 250,
});

var lineDrawing = anime({
  targets: "#lineDrawing .lines path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 4500,
  delay: function (el, i) {
    return i * 2500;
  },
  direction: "alternate",
  loop: true,
});
