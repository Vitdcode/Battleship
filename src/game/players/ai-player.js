import { attackShip } from '../attack-ship';

export function trackingBoardEventListenerAi() {
  const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const randomLetter = xAxis[Math.floor(Math.random() * xAxis.length)];
  const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(randomLetter);
  console.log(randomNum);
  const testClick = document.querySelector(`#${randomLetter}-${randomNum}-trackingboard-pl2`);
  /*   const trackingBoardAi = document.querySelector('#tracking-board-cells-wrapper-pl2');
  trackingBoardAi.addEventListener('click', (event) => {}); */

  setTimeout(() => {
    testClick.dispatchEvent(new Event('click'));

    attackShip(testClick.id, 'pl2');
    if (window.getComputedStyle(testClick).backgroundColor === 'rgb(15, 31, 55)') {
      console.log('test');
      trackingBoardEventListenerAi();
    }
  }, 2000);
}
