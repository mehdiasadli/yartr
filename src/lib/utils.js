export const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

export const getTokenFromStorage = () => {
  try {
    const storage = JSON.parse(localStorage.getItem('persist:root'));
    return JSON.parse(storage.user).token;
  } catch (e) {
    return null;
  }
};

export const capitalize = (str) => {
  const words = str.trim().split(' ');
  return words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};
