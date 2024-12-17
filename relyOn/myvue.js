// 定义一个 Vue 类
class Vue {
    // 定义构造函数
    // option 是一个 JS 对象 : {} 
    constructor(option) {
        // 获取data的所有属性名
        Object.keys(option.data).forEach((propertyName, index) => {
            console.log(typeof propertyName, propertyName, index);
            Object.defineProperty(this, propertyName, {
                set(val) {
                    option.data[propertyName] = val;
                },
                get() {
                    return option.data[propertyName]
                }
            })
        }
        )
        //获取所有方法名
        Object.keys(option.methods).forEach((methodName, index) => {
            this[methodName] = option.methods[methodName]
        })
    }
}