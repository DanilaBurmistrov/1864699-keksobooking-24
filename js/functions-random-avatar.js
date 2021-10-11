import {AVATARS,
  AVATAR_BASE_URL,
  AVATAR_FORMAT} from './constants.js';

import {getRandomIntFromRange} from './functions-random-number.js';

const takenAvatars = [];

function getAvatarUrl() {
  function getRandomAvatar() {
    let found = false;
    while (!found) {
      const key = getRandomIntFromRange(0, AVATARS.length - 1);
      if (!takenAvatars.includes(AVATARS[key])) {
        takenAvatars.push(AVATARS[key]);
        found = true;
        return AVATARS[key];
      }
    }
  }
  const avatarUrl = `${AVATAR_BASE_URL}user${getRandomAvatar()}.${AVATAR_FORMAT}`;
  return avatarUrl;
}

export {getAvatarUrl};
