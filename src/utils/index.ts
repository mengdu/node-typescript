/**
* 格式化时间
* @param {any} 字符串或者Date
* @param {String} 需要返回时间格式；如：yyyy-MM-dd HH:mm:ss
* @return {String} 返回格式化后时间
**/
export const format = (time: string | number, formatStr: String) => {
  var t = new Date(time)
  var tf = function (n: any) {
    return (n < 10 ? '0' : '') + n
  }
  return formatStr.replace(/yyyy|MM|dd|HH|mm|ss|ms/g, function (a) {
    let str = ''
    switch (a) {
      case 'yyyy':
        str = tf(t.getFullYear())
        break
      case 'MM':
        str = tf(t.getMonth() + 1)
        break
      case 'mm':
        str = tf(t.getMinutes())
        break
      case 'dd':
        str = tf(t.getDate())
        break
      case 'HH':
        str = tf(t.getHours())
        break
      case 'ss':
        str = tf(t.getSeconds())
        break
      case 'ms':
        str = t.getMilliseconds().toString()
    }
    return str
  })
}
