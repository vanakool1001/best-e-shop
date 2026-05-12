/**
 * Creates a simple counter UI inside `rootElement`.
 *
 * options:
 *  - initial: starting value (default 0)
 *  - onChange: callback(value) when value changes
 *
 * Returns an API:
 *  - getValue()
 *  - setValue(newValue)
 *  - increment()
 *  - decrement()
 */
export function createCounter(rootElement, options = {}) {
  const { initial = 0, onChange = () => {} } = options;

  let value = initial;

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "0.5rem";

  const decrementBtn = document.createElement("button");
  decrementBtn.textContent = "-";

  const valueSpan = document.createElement("span");
  valueSpan.textContent = String(value);
  valueSpan.style.minWidth = "3rem";
  valueSpan.style.textAlign = "center";
  valueSpan.style.fontWeight = "bold";

  const incrementBtn = document.createElement("button");
  incrementBtn.textContent = "+";

  container.appendChild(decrementBtn);
  container.appendChild(valueSpan);
  container.appendChild(incrementBtn);

  rootElement.appendChild(container);

  function update(newValue) {
    value = newValue;
    valueSpan.textContent = String(value);
    onChange(value);
  }

  function increment() {
    update(value + 1);
  }

  function decrement() {
    update(value - 1);
  }

  decrementBtn.addEventListener("click", decrement);
  incrementBtn.addEventListener("click", increment);

  return {
    getValue: () => value,
    setValue: update,
    increment,
    decrement
  };
}
