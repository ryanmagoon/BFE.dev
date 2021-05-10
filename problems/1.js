/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(fn) {
    let finalArgs = []
    const curriedFunction = (...args) => {
      if (finalArgs.length + args.length >= fn.length) {
        return fn(...finalArgs, ...args)
      }
      finalArgs.push(...args)
      return curriedFunction
    }
    return curriedFunction
  }