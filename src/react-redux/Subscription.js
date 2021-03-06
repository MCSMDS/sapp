import { unstable_batchedUpdates } from 'react-dom';

function createListenerCollection() {
  let first = null
  let last = null

  return {
    clear() {
      first = null
      last = null
    },

    notify() {
      unstable_batchedUpdates(() => {
        let listener = first
        while (listener) {
          listener.callback()
          listener = listener.next
        }
      })
    },

    subscribe(callback) {
      let isSubscribed = true
      let listener = (last = { callback, next: null, prev: last })
      if (listener.prev) {
        listener.prev.next = listener
      } else {
        first = listener
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return
        isSubscribed = false
        if (listener.next) listener.next.prev = listener.prev
        else last = listener.prev
        if (listener.prev) listener.prev.next = listener.next
        else first = listener.next
      }
    }
  }
}

export default class Subscription {
  constructor(store, parentSub) {
    this.store = store
    this.parentSub = parentSub
    this.unsubscribe = null
    this.listeners = { notify() { } }
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
  }

  addNestedSub(listener) {
    this.trySubscribe()
    return this.listeners.subscribe(listener)
  }

  notifyNestedSubs() {
    this.listeners.notify()
  }

  handleChangeWrapper() {
    if (this.onStateChange) this.onStateChange()
  }

  trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper)
      this.listeners = createListenerCollection()
    }
  }

  tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe()
      this.unsubscribe = null
      this.listeners.clear()
      this.listeners = { notify() { } }
    }
  }
}
