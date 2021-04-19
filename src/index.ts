/*
 * @Author: sweet
 * @Date: 2021-04-19 15:11:16
 * @LastEditors: sweet
 * @LastEditTime: 2021-04-19 15:11:41
 * @Description: file content
 */

/**
 * 将展示的list补充空余的格子，flex中居中对齐使用
 * @param list    需要补充的数组
 * @param rowNum  一行有几个
 */
export default function <T>(list: (T | false)[], rowNum: number) {
  const remainder = list.length % rowNum;
  if (remainder !== 0) {
    for (let i = 0; i < rowNum - remainder; i += 1) {
      list.push(false);
    }
  }
  return list;
}
