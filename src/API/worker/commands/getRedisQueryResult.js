'use strict';
import { redisQuery } from '../../../doRedisQuery';
import { Rc } from '.';

export async function getRedisQueryResult(imgFileAbsPath, cachedPhash) {
  const RC = await Rc;
  const redisQueryResult = redisQuery(RC, 'key', imgFileAbsPath, cachedPhash);
  return redisQueryResult;
}
