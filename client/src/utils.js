/**
 * Fetch game title from downloadable content service, /api/name/:gameid
 * @param {Integer} gameid: int between 1-100, inclusive
 */
export const fetchGameTitle = (gameid) => {
  if (!gameid || gameid > 100 || gameid < 1) {
    throw new Error('Invalid game id');
  }

  return fetch(`/api/name/${gameid}`)
    .then(response => response.json());
};

/**
 * Gets the id portion of window.location.pathname. Returns default (1) if invalid.
 * @returns {Number} int between 1-100, inclusive
 */
export const getPathId = () => {
  let pathArr = window.location.pathname.split('/');
  let pathId = 1;
  if (pathArr.length) {
    pathId = parseInt(pathArr.slice(-1)[0]);
    if (Number.isNaN(pathId) || pathId > 100 || pathId < 1) {
      pathId = 1;
    }
  }
  return pathId;
};