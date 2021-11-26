import type { Mapper } from '..';
import { timeoutZalgo } from '../utils';

export class BoxedGenerator<T> {
  #valueGenerator: () => Generator<T>;

  public static from = <TVal>(
    generatorFn: () => Generator<TVal>
  ): BoxedGenerator<TVal> => {
    return new BoxedGenerator<TVal>(generatorFn);
  };
  public static of = <TVal>(
    ...values: TVal[] | [TVal[]]
  ): BoxedGenerator<TVal> => {
    const arrayGenerator = (array: TVal[]): (() => Generator<TVal>) =>
      function* (): Generator<TVal> {
        for (let index = 0; index < array.length; index++) {
          const currentValue = array[index];
          yield currentValue;
        }
      };

    if (values.length === 1) {
      const list = values[0];

      if (Array.isArray(list)) {
        return new BoxedGenerator<TVal>(arrayGenerator([...list]));
      }
    }

    return new BoxedGenerator<TVal>(arrayGenerator([...(values as TVal[])]));
  };

  protected constructor(valueGenerator: () => Generator<T>) {
    this.#valueGenerator = valueGenerator;
  }
  public map<TMap>(fn: Mapper<T, TMap>): BoxedGenerator<TMap> {
    const generator = this.#valueGenerator;
    function* arrayGenerator(): Generator<TMap> {
      for (const item of generator()) {
        yield fn(item);
      }
    }
    return BoxedGenerator.from(arrayGenerator);
  }
  public unbox(): T[] {
    return Array.from(this.#valueGenerator());
  }

  public get values(): T[] {
    return this.unbox();
  }

  public get gen(): () => Generator<T> {
    return this.#valueGenerator;
  }
}

async function main(): Promise<void> {
  BoxedGenerator.of([1, 2, 3, 4])
    .map(e => timeoutZalgo(2000, e * 2))
    .map(async e => console.log(`${await e}`)).values;

  return void 42;
}
void main;
main();