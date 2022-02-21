import { getRawDirList } from '.';
import type { DirentWithFileType } from '../../../core/types';
import { getDirListFileTypes } from './getDirListWithFileType';
import { getRawDirListSync } from './getRawDirList';

export async function asyncDirListWithFileType(
  pathSrc: string
): Promise<DirentWithFileType[]> {
  const rawDirList = await getRawDirList(pathSrc);
  return getDirListFileTypes(rawDirList);
}

export function dirListWithFileTypeSync(pathSrc: string): DirentWithFileType[] {
  const rawDirList = getRawDirListSync(pathSrc);
  return getDirListFileTypes(rawDirList);
}