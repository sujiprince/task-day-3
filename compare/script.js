let obj1 = { name: "Person1", age: 5 };

let obj2 = { age: 5, name: "Person1" };

let result = true;

if (Object.keys(obj1).length == Object.keys(obj2).length) {
  for (let key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;

      break;
    }
  }
} else {
  result = false;
}
if (result == true) {
  console.log("______________JSON Properties are Identical______________");
} else {
  console.log("______________JSON Properties are Non-Identical______________");
}
