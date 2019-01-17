console.log(1) //同步
new Promise((resolve, reject) => {
    console.log(2) //同步
    setTimeout(() => {
        console.log(3)
    }, 0)
    // ajax({
        
    // })
    resolve() //同步
}).then(() => {
    console.log(4)
})
console.log(5)//同步

// 同步 异步
// 异步 系统的自带的方法都是后执行，自己写的异步方法先执行