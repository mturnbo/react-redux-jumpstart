import { sample as _sample } from 'lodash';
import names from 'test/fixtures/names.json';
import { loremIpsum } from 'lorem-ipsum';

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

export function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function generatePeopleList(c) {
  const dateRange = {
    start: new Date(1980, 0, 1),
    end: new Date(2001, 11, 30)
  };

  return Array(c).fill(null).map((val, idx) => ({
    id: idx,
    name: _sample(names) + val,
    birthDate: randomDate(dateRange.start, dateRange.end).toISOString().substring(0, 10),
    image: '/assets/images/avatars/user-generic.png',
    bio: loremIpsum({
      count: 4,
      units: 'sentences',
      sentenceLowerBound: 4,
      sentenceUpperBound: 8
    })
  }));
}

export function arrayFill(n, f) {
  // eslint-disable-next-line prefer-spread
  return Array.apply(null, { length: n }).map(Number.call, Number).map(i => f(i));
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

export function getNotification(type) {
  const types = ['primary', 'link', 'info', 'success', 'warning', 'danger'];
  const notificationType = type || types[Math.floor(Math.random() * types.length)];
  const d = new Date().toString();
  const msg = loremIpsum({
    count: 1,
    units: 'sentences',
    sentenceLowerBound: 4,
    sentenceUpperBound: 8
  });
  const notification = {
    type: notificationType,
    title: notificationType.toUpperCase(),
    message: `${d} | ${msg}`
  };

  return notification;
}

export const generateID = () => Date.now().toString(36) + '-' + (Math.random() + 1).toString(36).substring(7);


// export function generateNumArray(n) {
//   return Array.from({ length: n }, (v, k) => k + 1);
// }

// function* contentGenerator(type = 'text') {
//   for (const item of content[type]) {
//     yield item;
//   }
// }
