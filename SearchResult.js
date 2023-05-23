$(document).ready(function () {

    $('#search-button').click(function (e) {
        e.preventDefault();
        var keyword = $('#search-input').val();
        //alert(keyword);
        $.ajax({
            method: "POST",
            url: "./GetProductData.php",
            data: { keyword: $("input#search-input").val() },
            dataType: "json",
            success: function (data) {
                console.log(data);
                displayProducts(data);
            },
            error: function (xhr, status, error) {
                console.log(xhr);
                console.log(status);
                console.log(error);
            }
        });
        
       
    });


    
})

function displayProducts(data) {
    var products_name = data.name;
    var products_price = data.price;
    var products_stock = data.stock;
    var products_description = data.description;
    var products_pic = data.pic;

    var container = document.getElementById('product-container');
    container.innerHTML = '';

    for (var i = 0; i < cnt; i++) {
        var name = products_name[i];
        var price = products_price[i];
        var stocks = products_stock[i];
        var description = products_description[i];
        var pic = products_pic[i];

        var product_container = document.createElement('div');
        product_container.classList.add('col');

        // create image
        var card_div = document.createElement('div');
        card_div.classList.add('card', 'h-100');
        var img_link = document.createElement('a');
        img_link.href = './Commodity.html';
        var img = document.createElement('img');
        img.src = './img/' + pic;
        img.classList.add('card-img-top');
        img.alt = '...';
        img_link.appendChild(img);

        // create name
        var card_content = document.createElement('div');
        card_content.onclick = function () {
            location.href = './Commodity.html';
        };
        card_content.style.cursor = 'pointer';
        card_content.classList.add('card-body');

        var title_element = document.createElement('h5');
        title_element.classList.add('card-title');
        title_element.textContent = name;

        // create description
        var description_element = document.createElement('p');
        description_element.classList.add('card-text');
        description_element.textContent = description;

        // create stocks
        var stocks_element = document.createElement('p');
        stocks_element.classList.add('card-text');
        stocks_element.textContent = stocks;

        // create price
        var price_element = document.createElement('h4');
        price_element.style.textAlign = 'right';
        price_element.style.marginRight = '0.5rem';
        price_element.textContent = price;

        // create button
        var addButton = document.createElement('button');
        addButton.classList.add('btn', 'btn-outline-success');
        addButton.style.marginBottom = '0.5rem';
        addButton.style.marginRight = '0.5rem';
        addButton.style.marginLeft = '0.5rem';
        addButton.textContent = 'Add to cart';

        card_content.appendChild(title_element);
        card_content.appendChild(description_element);
        card_content.appendChild(stocks_element);
        card_content.appendChild(price_element);
        card_content.appendChild(addButton);

        card_div.appendChild(img_link);
        card_div.appendChild(card_content);

        product_container.appendChild(card_div);
        container.appendChild(product_container);
        /* the pattern of products
            < div class="col" >
                <div class="card h-100">
                    <a href="#"><img src="./img/minecraftDiamondSword.png" class="card-img-top"
                        alt="..."></a>
                    <div onclick="location.href='./Commodity.html';" style="cursor:v;" class="card-body">
                        <h5 class="card-title">Diamond Sword</h5>
                        <p class="card-text">This is a diamond sword</p>
                    </div>
                    <h4 style="text-align: right; margin-right: 0.5rem;">$ 3,600</h4>
                    <button class="btn btn-outline-success"
                        style="margin-bottom: 0.5rem; margin-right: 0.5rem; margin-left: 0.5rem;">Add to
                        cart</button>
                </div>
            </div >
        */

        resultsContainer.appendChild(productElement);
    }

}
