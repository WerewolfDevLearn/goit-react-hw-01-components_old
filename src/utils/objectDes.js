import { v4 as uuid } from 'uuid';
export default function objectDisturction(object) {
  const arr = Object.entries(object);
  const arrOfObj = arr.map(element => {
    const obj = { label: '', number: 0 };
    obj.label = element[0];
    obj.number = element[1];
    obj.id = uuid();
    return obj;
  });
  return arrOfObj;
}
