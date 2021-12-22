export {
  Box,
  BoxedAsyncGenerator,
  BoxedGenerator,
  BoxedList,
  boxedListFrom,
  boxedListOf,
  boxFrom,
  boxOf,
  cpuCount,
  CPU_Mapper,
  immediateZalgo,
  IO_Mapper,
  nextTickZalgo,
  nullOrDefined,
  restrainingZalgo,
  timeoutZalgo,
  zalgo,
} from './core';
export type {
  IApply,
  IChain,
  IMap,
  IMapItems,
  IUnbox,
  IUnboxList,
} from './core';
export type { CPU_MapperRetunType, Mapper, MapperArgs } from './types';

/*
(alias) function CPU_Mapper(filename: string): <T, R>(list: T[], mapFn: Mapper<T, R>, limit?: number | undefined) => {
    mapper: () => Promise<PromiseSettledResult<R>[]>;
    thread: () => void;
}
export CPU_Mapper
The path to the Worker's main script or module.

(alias) function IO_Mapper<T, U>({ list, mapFn, limit, }: IO_MapperArgs<T, U>): Promise<PromiseSettledResult<U>[]>
export IO_Mapper
*/
