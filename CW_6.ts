/* 
// Протипизируйте массивы как в предыдущем примере:
const arr: string[] = ['1','2', '3', '4', '5'];
const arr2: Array<string> = ['1','2', '3', '4', '5']; */

//Укажите значения, чтобы не было ошибок компиляции
const a1: number =5;
const a2: boolean = true;
const a3: string ='ku-ku'
const a4: number[] = [1, 2, 3]
const a5: Array<string> = ['a', 'b', 'ccdscsd']
const a6: [string] = ['odinElement']        // кортеж - массив с ограниченным количеством элементов
const a7: [boolean, number] = [true, 5]
const a8: [number[], Array<string>] = [[1,2,3], ['a','b','c','d']]          // кортеж массивов, каждый из которых безразмерный



//Укажите типы, чтобы не было ошибок компиляции

const b1: number = 70;
const b2: boolean = false;
const b3: string = "lalaka";
const b4: [boolean, boolean] = [true, false];
const b6: [number, string] = [10, "10"];
const b7: [...boolean[]]= [...[true]];