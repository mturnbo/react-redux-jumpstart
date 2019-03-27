import content from 'data/content';

export function getRandomIntegers(size, max, collection = 'set') {
  const randomNums = new Set([]);
  while (randomNums.size < size) {
    randomNums.add(Math.floor(Math.random() * max));
  }
  return collection === 'array' ? [...randomNums] : randomNums;
}

export function getRandomSample(arr, n) {
  const randomKeys = getRandomIntegers(n, arr.length, 'array');
  return randomKeys.map(key => arr[key]);
}

export function fadeOut(e, containerClass, intervalTimeout = 30) {
  const target = e.target.closest(containerClass);
  return new Promise((resolve) => {
    if (target) {
      const effect = setInterval(() => {
        if (!target.style.opacity) {
          target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
          target.style.opacity -= 0.1;
        } else {
          clearInterval(effect);
          resolve('faded');
        }
      }, intervalTimeout);
    } else {
      resolve('no-effect-target');
    }
  });
}

export function slideUp(e, containerClass, intervalTimeout = 10) {
  const target = e.target.closest(containerClass);
  return new Promise((resolve) => {
    if (target) {
      let newHeight = target.offsetHeight;
      const effect = setInterval(() => {
        if (newHeight > 0) {
          newHeight -= 5;
          target.style.height = `${newHeight}px`;
        } else {
          clearInterval(effect);
          resolve('slid-up');
        }
      }, intervalTimeout);
    } else {
      resolve('no-effect-target');
    }
  });
}

export function getContent(length) {
  return content.text.slice(0, length).join(' ');
}

export function getNotification(type) {
  const types = ['primary', 'link', 'info', 'success', 'warning', 'danger'];
  const notificationType = type || types[Math.floor(Math.random() * types.length)];
  const d = new Date().toString();
  const notification = {
    type: notificationType,
    title: notificationType.toUpperCase(),
    message: `${d} ${getRandomSample(content.text, 2).join(' ')}`
  };

  return notification;
}

// export function generateNumArray(n) {
//   return Array.from({ length: n }, (v, k) => k + 1);
// }

// function* contentGenerator(type = 'text') {
//   for (const item of content[type]) {
//     yield item;
//   }
// }
