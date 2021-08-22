const myGame = document.querySelector('#game1');

setInterval(() => {
    let randomNum = Math.floor(Math.random() * 100);
    myGame.innerText = `${randomNum}`
}, 1000);

const predictForm = document.querySelector("#predictForm");

predictForm.addEventListener("submit", function (event) {
    createNewPredict();
    predictForm.children.predict.value = "";
    predictForm.children.time.value = "";
    event.preventDefault();
})

function createNewPredict() {
    // const container = document.createElement("ul");
    const newpredictLine = document.createElement("li");
    const newTime = document.createElement("span");
    const newpredict = document.createElement("span");
    // newTime.style.fontWeight = "800";
    newTime.innerText = `${predictForm.children.time.value}: `
    newpredict.innerText = `${predictForm.children.predict.value}`
    const listPredicts = document.querySelector("#listPredicts");
    // listPredicts.append(container);
    listPredicts.append(newpredictLine);
    newpredictLine.append(newTime);
    newpredictLine.appendChild(newpredict);
}