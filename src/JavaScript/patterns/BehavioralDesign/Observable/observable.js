class Subscription {
  constructor() {
    this.teardowns = new Set();
  }

  add(teardown) {
    this.teardowns.add(teardown);
  }

  unsubscribe() {
    this.teardowns.forEach((teardown) => {
      teardown();
    });

    this.teardowns.clear();
  }
}

/* eslint-disable no-unused-expressions */
class SafeSubscriber {
  constructor(destination, subscription) {
    this.destination = destination;
    this.closed = false;
    this.subscription = subscription.add(() => {
      this.closed = true;
    });
  }

  next(value) {
    // Check to see if this is "closed" before nexting.
    if (!this.closed) {
      this.destination.next && this.destination.next(value);
    } else {
      this.destination.error('Error');
    }
  }

  complete() {
    // Make sure we're not completing an already "closed" subscriber.
    if (!this.closed) {
      // We're closed now.
      this.closed = true;

      this.destination.complete && this.destination.complete();
    }
  }

  error(message) {
    if (!this.closed) {
      this.closed = true;
      this.destination.error && this.destination.error(message);
    }
  }
}

class Observable {
  constructor(wrappedFunc) {
    this.wrappedFunc = wrappedFunc;
  }

  subscribe(observer) {
    // We can wrap our observer in a "safe subscriber" that
    // does the work of making sure it's not closed.
    const subscription = new Subscription();
    const subscriber = new SafeSubscriber(observer, subscription);
    this.wrappedFunc(subscriber);
  }
}

const helloSocket = new Observable((subscriber) => {
  // const socket = new WebSocket('wss://echo.websocket.org');
  subscriber.next('Hello, World!');
  subscriber.error(new Error('Socket closed dirty!'));

  // socket.onopen = () => {
  //   console.log('onopen');
  //   socket.send('Hello, World!');
  // };

  // socket.onmessage = (e) => {
  //   subscriber.next(e.data);
  // };

  // socket.onclose = (e) => {
  //   if (e.wasClean) {
  //     subscriber.complete();
  //   } else {
  //     subscriber.error(new Error('Socket closed dirty!'));
  //   }
  // };

  return () => {
    // if (socket.readyState <= WebSocket.OPEN) {
    //   socket.close();
    // }
  };
});

const subscription = helloSocket.subscribe({
  next: console.log,
  complete: () => console.log('server closed'),
  error: console.error,
});

// const source = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   subscriber.complete();
//   subscriber.next(4); // this does nothing.
// });

// source.subscribe({
//   next: console.log,
//   complete: () => console.log('done'),
//   error: console.error,
// });
