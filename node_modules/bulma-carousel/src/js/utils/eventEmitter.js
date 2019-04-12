export default class EventEmitter {
  constructor(events = []) {
    this.events = new Map(events);
  }

  on(name, cb) {
    this.events.set(name, [
      ...(this.events.has(name) ? this.events.get(name) : []),
      cb
    ]);

    return () =>
      this.events.set(name, this.events.get(name).filter(fn => fn !== cb));
  }

  emit(name, ...args) {
    return this.events.has(name) && this.events.get(name).map(fn => fn(...args));
  }
}