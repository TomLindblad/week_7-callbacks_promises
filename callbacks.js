const maybeAdvice = async () =>{ 
    return new Promise((resolve, reject) => {
        let result = Math.random();

        if (result > 0.5) {
            resolve(getAdvice())

            .catch((error) => {
                console.error("Error fetching advice:", error)
            });
        } 
        else {
            reject("No, there is no advice for you.");
        }
})};

async function flipCoinResult() {
    try {
        const response = await maybeAdvice();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

async function getAdvice(){
    try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data.slip.advice);        
    } catch (error) {
            console.error("Error fetching advice:", error)        
    }
};

flipCoinResult();

/*
function getAdviceById(id){
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then((response) => response.json())
        .then((data) => {
            return(data.slip.advice);
        })
        .catch((error) => {
            console.error("Error fetching advice:", error)
        });
};
*/

/*
maybeAdvice
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});
*/