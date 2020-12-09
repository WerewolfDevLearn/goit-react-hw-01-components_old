import { v4 as uuid } from 'uuid';
export default function objectDisturction(object) {
  const arrOfkeys = Object.keys(object);
  const arrOfValues = Object.values(object);
  const arrOfObj = arrOfkeys.map((key, idx) => {
    const obj = {};
    obj.label = key;
    obj.number = arrOfValues[idx];
    obj.id = uuid();

    return obj;
  });

  return arrOfObj;
}
