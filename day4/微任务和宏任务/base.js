let fn = () => {
    return new Promise((resolve, reject) => {
        console.log(2) //同步
        setTimeout(() => {
            console.log(3)
        }, 0)
        resolve() //同步
    })
}
console.log(0);
(async () => {
    console.log(1)
    let data = await fn();
    console.log(4)
})()
console.log(5)

// setTimeout宏任务
// then之后 await微任务
// 微任务-》宏任务