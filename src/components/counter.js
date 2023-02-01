class Counter {

    constructor(){
        this.count = 0;
        this.counterValueId = (Math.random() + 10).toString(36).substring(7);
    }

    increment(){
        this.count += 1;
        this.updateCounter();
    }

    decrement(){
        this.count -= 1;
        this.updateCounter();
    }

    updateCounter(){
        document.getElementById(this.counterValueId).innerText = `${this.count}`;
    }

    render(){
        //creating html elements
        const counterContainer = document.createElement('div');
        const counterTitle = document.createElement('p');
        const counterValue = document.createElement('p');
        const incrementButton = document.createElement('button');
        const decrementButton = document.createElement('button');

        //assigning classes
        counterContainer.classList.add("widgetContainer");
        counterTitle.classList.add("counterTitle");
        incrementButton.classList.add("incrementButton");
        decrementButton.classList.add("decrementButton");
        counterValue.id = this.counterValueId;

        //assigning properties
        counterTitle.innerText = "Counter";
        counterValue.innerText = `${this.count}`;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";
        

        //event listeners
        incrementButton.onclick = this.increment.bind(this);
        decrementButton.onclick = this.decrement.bind(this);

        //creating html structure
        counterContainer.appendChild(counterTitle);
        counterContainer.appendChild(counterValue);
        counterContainer.appendChild(incrementButton);
        counterContainer.appendChild(decrementButton);

        return counterContainer;
    }

    mount(element){

        if(document.getElementById(this.counterValueId)){
            return;
        }

        if(element){
            element.appendChild(this.render());
            return ;
        }
        document.body.appendChild(this.render());
    }
}

export {Counter};