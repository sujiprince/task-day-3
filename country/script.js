
const URL = "https://restcountries.com/v3.1/all";

const xhr = new XMLHttpRequest();
xhr.open("GET",URL);
xhr.send();

xhr.onload = () => {

    let output = (JSON.parse(xhr.response));

    for(let i = 0 ; i < output.length ; i++){

        console.log("Country_Name:",output[i].name.official ,"|","Region:", output[i].region ,"|","Sub-region:", output[i].subregion ,"|","Population:", output[i].population);
    }
};
Day-