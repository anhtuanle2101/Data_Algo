const fun = (obj) => {
  obj.a += 1;
  console.log(obj.a);
};

const x = {a:1};
fun(x);
console.log(x.a);