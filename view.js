window.onload = function() {
  setSelectionStyle();

  let cloud1 = anime({
    targets: '.cloud-layer1',
    translateY: 7,
    duration: 3000,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
  });

  let cloud2 = anime({
    targets: '.cloud-layer2',
    translateY: 5,
    duration: 3300,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
  });

  let sea1 = anime({
    targets: '.sea-layer1',
    top: 3,
    duration: 3200,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
  });

  let sea2 = anime({
    targets: '.sea-layer2',
    top: 7,
    duration: 2900,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
  });

  let sea3 = anime({
    targets: '.sea-layer3',
    top: 12,
    duration: 2300,
    direction: 'alternate',
    easing: 'linear',
    loop: true,
  });
}

setSelectionStyle = function() {
  let date = new Date();
  let hour = date.getHours();
  let color = 'rgba(2, 119, 189, 0.01)';
  if (hour >= 17 && hour < 19) {
    color = 'rgba(255,87,34, 0.01)';
  } else if (hour >= 19 || hour < 5) {
    color = 'rgba(26,35,126 ,0.01)';
  }
  let selectionCSS = '::selection {background: __color__;} ::-moz-selection {background: __color__;}';
  let css = selectionCSS.replace(/__color__/g, color);
  document.getElementById('selection').innerHTML = css;
};
