import { v4 as uuid } from 'uuid';
export default function objectDisturction(object) {
  const arrOfkeys = Object.keys(object);
  const arrOfValues = Object.values(object);
  const arrOfObj = arrOfkeys.map((key, idx) => {
    console.log(key);
    console.log(idx);
    const obj = {};
    obj.label = key;
    obj.number = arrOfValues[idx];
    obj.id = uuid();
    console.log(obj);
    return obj;
  });
  console.log(arrOfObj);
  return arrOfObj;
}
