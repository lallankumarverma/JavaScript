let bodyEle = document.querySelector("body");
let selectFrom = document.querySelector("#from")
let selectTo = document.querySelector("#to")
let fromImg = document.querySelector("#fromImg");
let toImg = document.querySelector("#toImg");
let btnExc = document.querySelector("#btnExchange");
let amtEle = document.querySelector("#amount");
let msgEle = document.querySelector(".msg");

bodyEle.onload = () => {

    for (let code in countryList) {

        let optionEle = document.createElement("option");
        optionEle.value = countryList[code];
        optionEle.textContent = code;

        if(code ==="USD"){
            optionEle.selected = true;
        }

        selectFrom.appendChild(optionEle);
    }

    for (let code in countryList) {

        let optionEle = document.createElement("option");
        optionEle.value = countryList[code];
        optionEle.textContent = code;

        if(code ==="INR"){
            optionEle.selected = true;
        }

        selectTo.appendChild(optionEle);
    }
}

selectFrom.addEventListener("change", () => {
    let fromImgSrc = "https://flagsapi.com/" + selectFrom.value + "/flat/64.png";
    fromImg.setAttribute("src", fromImgSrc);

    console.log(selectFrom.options[selectFrom.selectedIndex].text);
})

selectTo.addEventListener("change", () => {
    let toImgSrc = "https://flagsapi.com/" + selectTo.value + "/flat/64.png";
    toImg.setAttribute("src", toImgSrc);    
})


const getExchangeRate = async (evt) => {

    evt.preventDefault();
    let source = (selectFrom.options[selectFrom.selectedIndex].text).toLowerCase();
    let target = (selectTo.options[selectTo.selectedIndex].text).toLowerCase();
    let URL    = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/" + source + ".json";

    console.log("fetching exchange rate.......", URL);    

    let response     = fetch(URL);
    let data         = (await response).json();
    let exchangeRate = 0; 
    
    data.then((result) => {
        
        for(let item in result){
            
            if(item === source){
                let check = result[item];

                for(let checkItem in check){
                    
                    if(checkItem === target){
                        exchangeRate = check[checkItem];
                        break;
                    }
                }
            }
        }
        
        let amount       = amtEle.value;
        let finalVal     = amount * exchangeRate; 
        msgEle.innerHTML = amount + " " + source.toUpperCase() + " To " + finalVal + " " + target.toUpperCase();
    })
}

btnExc.addEventListener("click", getExchangeRate);