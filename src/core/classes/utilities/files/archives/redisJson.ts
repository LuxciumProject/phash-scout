// import { getTedisTools } from './getTedisTools';

//  const tedis_jsonSet =
//   (tedis: Tedis) =>
//   (key: string) =>
//   (jsonPath: string = '.') =>
//   async (value: string) => {
//     console.log(
//       'tedis.command(',
//       'JSON.SET',
//       `${key}`,
//       `${jsonPath}`,
//       `${value}`,
//       ')'
//     );
//     return tedis.command('JSON.SET', `${key}`, `${jsonPath}`, `${value}`);
//   };
//  const tedis_jsonGet =
//   (tedis: Tedis) =>
//   (key: string) =>
//   async (jsonPath: string = '.') =>
//     tedis.command('JSON.GET', key, jsonPath);
// export const init = (tedis: Tedis) => async (key: string) =>
//   tedis.command('JSON.SET', key, '.', `{}`);

// async function main() {
//   console.log('main in :', __filename);

//   const { tedis } = getTedisTools();
//   // await set(tedis)('key002')('.banane')(`42`);
//   // tedis.command('JSON.SET', key, jsonPath, `${value}`);
//   // await tedis.command(`JSON.SET`, 'key002', '.banane', `42`);
//   return tedis.close();
//   // return false;
// }
// void main;
// // main();

export {};