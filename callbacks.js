const maybeAdvice = new Promise((resolve, reject) => {
        let result = Math.random();

        if (result > 0.5) {
            resolve(fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                return(data.slip.advice);
            })
            .catch((error) => {
                console.error("Error fetching advice:", error)
            }));
        } 
        else {
            reject("No, there is no advice for you.");
        }
});

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            return(data.slip.advice);
        })
        .catch((error) => {
            console.error("Error fetching advice:", error)
        });
};

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

maybeAdvice
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log(error);
});