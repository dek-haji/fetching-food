fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            console.log(food)
           
           html(food.name,food.ethnicity ,food.category)
        })
    })

    let html = function(head, par1, par2){
        document.querySelector(".foodList").innerHTML += `
        <div class = "domEl">
        <h1>${head}</h1>
        <p>${par1}</p>
        <p>${par2}</p>
        </div>
        `

    }