/**
 *
 * @params {*} moduleName 模块名称
 * @params {*} mapper state属性集合{age,name,sex……}
 *
 *
 *
 */
import { mapState, createNamespacedHelpers } from 'vuex';
import { checkType } from './checkType';
import { useStateMapper } from './useMapper';
// moduleName是Son1子组件，name:"Son1"
console.log(checkType('Son1'));// [object String]
export function useState(moduleName, mapper) {
  let mapperFn = mapState;
  // 如果使用的是模块化，需要使用vuex提供的createNamespacedHelpers方法来找到对应模块的mapState
  if (checkType(moduleName) === '[string Object]' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState;
  }
  return useStateMapper(mapper, mapperFn);
}
