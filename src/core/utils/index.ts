import { cpuCount } from './cpuCount';
import { isAllArrays } from './isAllArrays';
import { isArray } from './isArray';
import {
  immediateZalgo,
  nextTickZalgo,
  restrainingZalgo,
  timeoutZalgo,
  zalgo,
  zalgo1,
  zalgo2,
  zalgo3,
} from './restrainingZalgo';

export {
  filter,
  filterBlockDevices,
  filterCharacterDevices,
  filterDirectorys,
  filterDirs,
  filterFIFOs,
  filterFiles,
  filterSockets,
  filterSymbolicLinks,
} from './filter';
export { getCurrentPath } from './paths/getCurrentPath';
export {
  cpuCount,
  immediateZalgo,
  isAllArrays,
  isArray,
  nextTickZalgo,
  restrainingZalgo,
  timeoutZalgo,
  zalgo,
  zalgo1,
  zalgo2,
  zalgo3,
};
export const utils = {
  cpuCount,
  immediateZalgo,
  isAllArrays,
  isArray,
  nextTickZalgo,
  restrainingZalgo,
  timeoutZalgo,
  zalgo,
  zalgo1,
  zalgo2,
  zalgo3,
};

export default utils;