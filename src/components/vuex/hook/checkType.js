export function checkType(data) {
  // call是function的一个方法，call(obj,arg1,arg2,……)；
  return Object.prototype.toString.call(data);
};
