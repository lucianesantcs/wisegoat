const btn = document.querySelector('#request');
const btnConselho = document.querySelector('#refresh');
const adviceElement = document.querySelector('.advice');
const goatImg = document.querySelector('.info-img');

if (btn) {
  btn.addEventListener('click', handleClick);

  function handleClick() {
    window.location.assign('conselho.html');
  }
}

if (btnConselho) {
  btnConselho.addEventListener('click', handleRefresh);

  function handleRefresh() {
    console.log('a');
    window.location.reload();
  }
}

if (adviceElement || goatImg) {
  function createAdvice(advice) {
    const h1 = document.createElement('h1');
    h1.innerText = advice;
    adviceElement.appendChild(h1);
  }

  function createImage(img) {
    const imgs = document.createElement('img');
    imgs.src = img;
    goatImg.appendChild(imgs);
  }

  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((json) => {
      createAdvice(json.slip.advice);
    });

  fetch('https://placegoat.com/200/200')
    .then((response) => response.blob())
    .then((blob) => {
      const imgURL = URL.createObjectURL(blob);
      createImage(imgURL);
    });
}
