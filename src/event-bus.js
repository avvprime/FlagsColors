const EventBus = {
    events: {},
    on: function(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = [];
        this.events[eventName].push(callback);
    },
    off: function(eventName, callback){
        if (!this.events[eventName]) return;

        if (!callback) {
            delete this.events[eventName];
            return;
        }

        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
    },
    emit: function(eventName, ...args){
        if (!this.events[eventName]) return;

        for (let i = 0; i < this.events[eventName].length; i++) this.events[eventName][i](...args);
    }

}

export default EventBus;