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

export function arrayFill(n, f) {
  // eslint-disable-next-line prefer-spread
  return Array.apply(null, { length: n }).map(Number.call, Number).map(i => f(i));
}

export function generateItemList(n) {
  return arrayFill(n, i => (
    {
      title: `Item ${i + 1}`,
      content: loremIpsum({
        count: 8,
        units: 'sentences',
        sentenceLowerBound: 6,
        sentenceUpperBound: 12
      })
    }
  ));
}

export function generateImageList(n) {
  return arrayFill(n, i => `https://picsum.photos/id/1${i}/200/300/`);
}

export function generatePeopleList(n) {
  const dateRange = {
    start: new Date(1980, 0, 1),
    end: new Date(2001, 11, 30)
  };

  return arrayFill(n, i => ({
    id: i,
    name: _sample(names),
    birthDate: randomDate(dateRange.start, dateRange.end).toISOString().substring(0, 10),
    avatar: '/assets/images/avatars/user-generic.png',
    bio: loremIpsum({
      count: 4,
      units: 'sentences',
      sentenceLowerBound: 4,
      sentenceUpperBound: 8
    })
  }));
}

export function getTransitionEvent(el) {
  const transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  let transitionEvent = null;
  Object.keys(transitions).forEach(key => {
    if (el.style[key] !== undefined) {
      transitionEvent = transitions[key];
    }
  });

  return transitionEvent;
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
