import './sass/main.scss';


class CountdownTimer {
constructor({ selector, targetDate}){
    this.elements = this.getElements(selector)
    this.selector = selector
    this.targetDate = targetDate
}

getElements(timerId) {
        const refs = {
    daysEl: document.querySelector(`${timerId} [data-value="days"]`),
    hoursEl: document.querySelector(`${timerId} [data-value="hours"]`),
    minsEl: document.querySelector(`${timerId} [data-value="mins"]`),
    secsEl: document.querySelector(`${timerId} [data-value="secs"]`)
        }
        
        return refs
}

 start() {
       setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = this.targetDate - currentTime 
            const time = this.getTimeComponents(deltaTime)
            this.updateCountdown(time)
    }, 1000) 
}

 pad(value) { 
    return String(value).padStart(2, '0')
}

 getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs}
}

updateCountdown({days, hours, mins, secs}) {
    const {daysEl, hoursEl, minsEl, secsEl} = this.elements
    daysEl.textContent = days
    hoursEl.textContent = hours
    minsEl.textContent = mins
    secsEl.textContent = secs
}

}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});

timer.start()

