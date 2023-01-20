export default interface IObj{
    // 任意名字的可选属性[propName:string]:string
// 或者固定名字的 可选属性;如：gender?:string
  name:string;
  age:number;
  gender?:string;
  wife:{
    name:string;
    age:number;
    cars:string[];
  }};