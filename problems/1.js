/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
const curry = (fn) => {
  const curriedFn = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...moreArgs) => curriedFn(...args, ...moreArgs)
  return curriedFn
}
