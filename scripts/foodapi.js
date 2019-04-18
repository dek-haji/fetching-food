fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            
           
            console.log(food.barcode)

            

            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    console.log(productInfo.product.product_name)

                    htmlEl(productInfo)
                })
                let htmlEl = (foodEl) => {
                    document.querySelector(".foodList").innerHTML += `
                        <div class = "domEl">
                        <h1>${food.name}</h1>
                        <p>${food.category}</p>
                        <p>${food.name, food.type, food.ethnicity}</p>
                        <p>${foodEl.product.ingredients_text}</p>
                        <p>Calories per serving:  ${foodEl.product.nutriments.energy, foodEl.product.nutriments.fat, foodEl.product.nutriments.sugars}</p>
                        <p>Fat per serving: ${foodEl.product.nutriments.fat}</p>

                        <p>Sugar per serving: ${foodEl.product.nutriments.sugars}</p>
                        </div>
                        `
                    }
            })


            
    })






