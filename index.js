function fn(...c) {
  const d = Number.isNumber(a);
  if (!c.every((a) => d))
    throw "All arguments must be numbers.";
  return c.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.