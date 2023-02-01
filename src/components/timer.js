class Timer{

    constructor(){
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
        this.ms = 0;
        this.hrStr = "";
        this.minStr = "";
        this.secStr = "";
        this.msStr = "";
        this.timerValueId = (Math.random() + 10).toString(36).substring(7);
        this.timer = null;
    }

    countTime(){
        this.ms += 10;
        if(this.ms >= 1000){
            this.ms = 0;
            this.sec += 1;

            if(this.sec >= 60){
                this.sec = 0;
                this.min += 1;

                if(this.min >= 60){
                    this.min = 0;
                    this.hr += 1;
                }
            }
        }

        this.hrStr = (this.hr < 10) ? "0"+this.hr : this.hr;
        this.minStr = (this.min < 10) ? "0"+this.min : this.min;
        this.secStr = (this.sec < 10) ? "0"+this.sec : this.sec;
        this.msStr = ""
        if(this.ms < 10) {
            this.msStr = "00" + this.ms;
        }
        else if(this.ms < 100){
           this.msStr = "0" + this.ms;
        }
        else {
            this.msStr = this.ms;
        }
        document.getElementById(this.timerValueId).innerHTML = `${this.hrStr}<span>hr</span>:${this.minStr}<span>min</span>:${this.secStr}<span>sec</span>:${this.msStr}<span>ms</span>`;
    }

    startTimer(){
        if(this.timer === null){
            this.timer = setInterval(this.countTime.bind(this), 10);
        }
    }

    pauseTimer(){
        clearInterval(this.timer);
        this.timer = null;
    }

    resetTimer(){
        clearInterval(this.timer);
        this.timer = null;
        document.getElementById(this.timerValueId).innerHTML = `00<span>hr</span>:00<span>min</span>:00<span>sec</span>:0000<span>ms</span>`;
        this.ms = 0;
        this.sec = 0;
        this.min = 0;
        this.hr = 0;
    }

    render(){

        //creating the html elements
        const timerContainer = document.createElement("div");
        const timerTitle = document.createElement("p");
        const timerValue = document.createElement("p");
        const startButton = document.createElement("button");
        const resetButton = document.createElement("button");
        const pauseButton = document.createElement("button");

        //assigning classes
        timerContainer.classList.add("widgetContainer");
        timerTitle.classList.add("timerTitle");
        timerValue.classList.add("timerValue");
        startButton.classList.add("startButton");
        resetButton.classList.add("resetButton");
        pauseButton.classList.add("pauseButton");

        //assigning properties
        timerTitle.innerText = "Timer";
        timerValue.innerHTML = `00<span>hr</span>:00<span>min</span>:00<span>sec</span>:0000<span>ms</span>`;
        startButton.innerText = "Start";
        resetButton.innerText = "Reset";
        pauseButton.innerText = "Pause";
        timerValue.id = this.timerValueId;

        //binding functions to html elements
        startButton.onclick = this.startTimer.bind(this);
        resetButton.onclick = this.resetTimer.bind(this);
        pauseButton.onclick = this.pauseTimer.bind(this);

        //assembling the component
        timerContainer.appendChild(timerTitle);
        timerContainer.appendChild(timerValue);
        timerContainer.appendChild(startButton);
        timerContainer.appendChild(pauseButton);
        timerContainer.appendChild(resetButton);

        return timerContainer;
    }

    mount(element){

        if(document.getElementById(this.timerValueId)){
            return;
        }

        if(element){
            element.appendChild(this.render());
            return ;
        }
        document.body.appendChild(this.render());
    }
}

export {Timer};