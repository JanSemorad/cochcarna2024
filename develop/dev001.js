var a = await 10

console.log(a)
console.log(1234567)


class Activity {
    _task
    _activities = []
    constructor(task) {
        _task = task;
    }
    
    do(){
        this._task()
        this._activities.forEach((activity)=>{
            activity.do()
        })
    }
}

