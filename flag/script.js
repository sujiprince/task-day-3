const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();

xhr.open("GET", URL);

xhr.send();

xhr.onload = () => {
  let output = JSON.parse(xhr.response);

  for (let i = 0; i < output.length; i++) {
    console.log(output[i].flags.png);
  }
};
