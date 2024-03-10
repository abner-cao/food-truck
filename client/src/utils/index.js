export const debounce = (func, delay) => {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const context = this;
      func.apply(context, arguments)
    }, delay);
  };
}