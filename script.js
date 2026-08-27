// =================================================
// ARTISANCONNECT - COMPLETE JAVASCRIPT
// =================================================

let uploadedImage = "";


// =================================================
// SCREEN MANAGEMENT
// =================================================

function hideAllScreens() {

    document.querySelectorAll(".screen").forEach(function (screen) {
        screen.classList.add("hidden");
    });

}


function showScreen(id) {

    hideAllScreens();

    const screen = document.getElementById(id);

    if (screen) {
        screen.classList.remove("hidden");
    }

}


// =================================================
// SPLASH SCREEN
// =================================================

window.addEventListener("load", function () {

    setTimeout(function () {
        showScreen("loginScreen");
    }, 2500);

});


// =================================================
// LOGIN
// =================================================

function login() {
    showScreen("dashboardScreen");
}


function goToDashboard() {
    showScreen("dashboardScreen");
}


// =================================================
// ADD PRODUCT
// =================================================

function openAddProduct() {
    showScreen("addProductScreen");
}


// =================================================
// IMAGE PREVIEW
// =================================================

function previewImage(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        uploadedImage = e.target.result;

        const preview =
            document.getElementById("imagePreview");

        if (preview) {

            preview.innerHTML = `

                <img
                    src="${uploadedImage}"
                    style="
                        width:100%;
                        max-height:230px;
                        object-fit:cover;
                        border-radius:12px;
                    "
                >

                <p style="
                    margin-top:10px;
                    color:#7b2cbf;
                    font-weight:bold;
                ">
                    ✓ Photo selected
                </p>

            `;

        }

    };

    reader.readAsDataURL(file);

}


// =================================================
// SMART CATALOG
// =================================================

function analyzeProduct() {

    const category =
        document.getElementById("productCategory")?.value || "";

    const material =
        document.getElementById("productMaterial")?.value || "";

    const price =
        document.getElementById("productPrice")?.value || "500";

    const quantity =
        document.getElementById("productQuantity")?.value || "10";

    const location =
        document.getElementById("productLocation")?.value ||
        "Maharashtra";


    if (!uploadedImage) {

        alert("Please upload a product photo first.");

        return;

    }


    if (!category) {

        alert("Please select the product category.");

        return;

    }


    if (!material) {

        alert("Please select the material.");

        return;

    }


    const productData = {

        category: category,
        material: material,
        price: price,
        quantity: quantity,
        location: location,
        image: uploadedImage

    };


    localStorage.setItem(
        "currentProduct",
        JSON.stringify(productData)
    );


    showScreen("aiLoadingScreen");


    setTimeout(function () {

        generateCatalog(productData);

    }, 3000);

}


// =================================================
// GENERATE SMART CATALOG
// =================================================

function generateCatalog(data) {

    let productName = "";
    let categoryName = "";
    let materialName = "";
    let description = "";
    let tags = [];
    let suggestedPrice = "";
    let market = "";
    let score = "";


    // -----------------------------
    // BAMBOO
    // -----------------------------

    if (
        data.material === "bamboo" ||
        data.category === "bamboo"
    ) {

        productName =
            "Handcrafted Bamboo Basket";

        categoryName =
            "Bamboo Handicraft";

        materialName =
            "Natural Bamboo";

        description =
            "A beautifully handcrafted bamboo basket made by a local artisan. Lightweight, eco-friendly and suitable for home storage, gifting and traditional decoration.";

        tags = [
            "#Bamboo",
            "#Handmade",
            "#EcoFriendly",
            "#ArtisanCraft",
            "#Natural"
        ];

        suggestedPrice =
            "₹600 – ₹700";

        market =
            "Mumbai";

        score =
            "92%";

    }


    // -----------------------------
    // STEEL
    // -----------------------------

    else if (
        data.material === "steel" ||
        data.material === "metal" ||
        data.category === "metal"
    ) {

        productName =
            "Handcrafted Steel Basket";

        categoryName =
            "Metal / Steel Craft";

        materialName =
            "Stainless Steel";

        description =
            "A durable handcrafted steel basket created by a local artisan. Strong, reusable and suitable for kitchen storage, household use, gifting and utility markets.";

        tags = [
            "#Steel",
            "#Handmade",
            "#MetalCraft",
            "#Durable",
            "#Utility"
        ];

        suggestedPrice =
            "₹300 – ₹600";

        market =
            "Mumbai";

        score =
            "90%";

    }


    // -----------------------------
    // JUTE
    // -----------------------------

    else if (
        data.material === "jute" ||
        data.category === "jute"
    ) {

        productName =
            "Handmade Jute Craft";

        categoryName =
            "Jute / Natural Fibre";

        materialName =
            "Natural Jute";

        description =
            "A handmade jute product created using natural fibre by a local artisan. Eco-friendly, lightweight and suitable for lifestyle, gifting and sustainable product markets.";

        tags = [
            "#Jute",
            "#Handmade",
            "#EcoFriendly",
            "#Sustainable",
            "#NaturalFibre"
        ];

        suggestedPrice =
            "₹400 – ₹900";

        market =
            "Pune";

        score =
            "89%";

    }


    // -----------------------------
    // WOOD
    // -----------------------------

    else if (
        data.material === "wood" ||
        data.category === "wood"
    ) {

        productName =
            "Handcrafted Wooden Product";

        categoryName =
            "Traditional Wood Craft";

        materialName =
            "Natural Wood";

        description =
            "A traditional handcrafted wooden product created by a local artisan. Designed with attention to detail and suitable for home décor, gifting and handicraft markets.";

        tags = [
            "#WoodCraft",
            "#Handmade",
            "#Traditional",
            "#Artisan",
            "#HomeDecor"
        ];

        suggestedPrice =
            "₹500 – ₹1200";

        market =
            "Delhi";

        score =
            "87%";

    }


    // -----------------------------
    // CLAY
    // -----------------------------

    else if (
        data.material === "clay" ||
        data.category === "pottery"
    ) {

        productName =
            "Handcrafted Clay Pottery";

        categoryName =
            "Pottery / Clay Craft";

        materialName =
            "Natural Clay";

        description =
            "A traditional clay product handcrafted by a local artisan. The product reflects traditional craftsmanship and is suitable for home décor, gifting and cultural markets.";

        tags = [
            "#Clay",
            "#Pottery",
            "#Handmade",
            "#Traditional",
            "#ArtisanCraft"
        ];

        suggestedPrice =
            "₹250 – ₹700";

        market =
            "Delhi";

        score =
            "86%";

    }


    // -----------------------------
    // TEXTILE
    // -----------------------------

    else if (
        data.category === "textile" ||
        data.material === "cotton"
    ) {

        productName =
            "Handwoven Textile Craft";

        categoryName =
            "Textile / Handwoven";

        materialName =
            "Cotton";

        description =
            "A beautifully handcrafted textile product made by a local artisan using traditional techniques. Suitable for fashion, home décor and sustainable lifestyle markets.";

        tags = [
            "#Handwoven",
            "#Cotton",
            "#Handmade",
            "#Traditional",
            "#Sustainable"
        ];

        suggestedPrice =
            "₹500 – ₹1500";

        market =
            "Pune";

        score =
            "88%";

    }


    // -----------------------------
    // JEWELLERY
    // -----------------------------

    else if (
        data.category === "jewellery"
    ) {

        productName =
            "Handcrafted Artisan Jewellery";

        categoryName =
            "Handmade Jewellery";

        materialName =
            "Artisan Materials";

        description =
            "A unique handcrafted jewellery piece created by a local artisan. Designed for customers looking for traditional, artistic and handmade accessories.";

        tags = [
            "#Jewellery",
            "#Handmade",
            "#Artisan",
            "#Traditional",
            "#Unique"
        ];

        suggestedPrice =
            "₹300 – ₹1000";

        market =
            "Mumbai";

        score =
            "91%";

    }


    // -----------------------------
    // DEFAULT
    // -----------------------------

    else {

        productName =
            "Handcrafted Artisan Product";

        categoryName =
            "Handicraft";

        materialName =
            data.material;

        description =
            "A handcrafted product created by a local artisan. The product can be catalogued and connected with suitable markets and buyers.";

        tags = [
            "#Handmade",
            "#Artisan",
            "#Craft",
            "#Traditional"
        ];

        suggestedPrice =
            "₹500 – ₹1000";

        market =
            "Mumbai";

        score =
            "85%";

    }


    // =================================================
    // DISPLAY RESULT
    // =================================================

    const image =
        document.getElementById("resultProductImage");

    const name =
        document.getElementById("resultProductName");

    const category =
        document.getElementById("resultCategory");

    const material =
        document.getElementById("resultMaterial");

    const descriptionElement =
        document.getElementById("resultDescription");

    const price =
        document.getElementById("resultPrice");

    const recommendedMarket =
        document.getElementById("recommendedMarket");

    const marketScore =
        document.getElementById("marketScore");


    if (image) {
        image.src = data.image;
    }

    if (name) {
        name.textContent = productName;
    }

    if (category) {
        category.textContent = categoryName;
    }

    if (material) {
        material.textContent = materialName;
    }

    if (descriptionElement) {
        descriptionElement.textContent = description;
    }

    if (price) {
        price.textContent = suggestedPrice;
    }

    if (recommendedMarket) {
        recommendedMarket.textContent = market;
    }

    if (marketScore) {
        marketScore.textContent = score;
    }


    // =================================================
    // TAGS
    // =================================================

    const tagsContainer =
        document.getElementById("resultTags");


    if (tagsContainer) {

        tagsContainer.innerHTML = "";

        tags.forEach(function (tag) {

            const span =
                document.createElement("span");

            span.textContent = tag;

            tagsContainer.appendChild(span);

        });

    }


    // =================================================
    // SAVE PRODUCT
    // =================================================

    const generatedProduct = {

        name: productName,

        category: categoryName,

        material: materialName,

        description: description,

        price: suggestedPrice,

        market: market,

        score: score,

        image: data.image,

        quantity: data.quantity,

        location: data.location

    };


    localStorage.setItem(
        "generatedProduct",
        JSON.stringify(generatedProduct)
    );


    showScreen("aiResultScreen");

}


// =================================================
// ADD TO CATALOG
// =================================================

function addToCatalog() {

    const product =
        JSON.parse(
            localStorage.getItem("generatedProduct")
        );


    if (!product) {

        alert("Product data not found.");

        return;

    }


    let catalog =
        JSON.parse(
            localStorage.getItem("catalogProducts")
        ) || [];


    catalog.push(product);


    localStorage.setItem(
        "catalogProducts",
        JSON.stringify(catalog)
    );


    alert(
        "✓ Product added successfully to My Catalog!"
    );


    openCatalog();

}


// =================================================
// OPEN CATALOG
// =================================================

function openCatalog() {

    showScreen("catalogScreen");

    loadCatalog();

}


// =================================================
// LOAD CATALOG
// =================================================

function loadCatalog() {

    const container =
        document.getElementById("catalogProducts");


    if (!container) {
        return;
    }


    const products =
        JSON.parse(
            localStorage.getItem("catalogProducts")
        ) || [];


    if (products.length === 0) {

        container.innerHTML = `
            <p style="text-align:center;color:#777;">
                No products added yet.
            </p>
        `;

        return;

    }


    container.innerHTML = "";


    products.forEach(function (product) {

        const item =
            document.createElement("div");


        item.className =
            "catalog-item";


        item.innerHTML = `

            <img
                src="${product.image}"
                style="
                    width:65px;
                    height:65px;
                    object-fit:cover;
                    border-radius:12px;
                "
            >

            <div class="catalog-info">

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.category}
                </p>

                <strong>
                    ${product.price}
                </strong>

            </div>

        `;


        container.appendChild(item);

    });

}


// =================================================
// MARKET LINKAGE
// =================================================

function openMarketLinkage() {

    showScreen("marketScreen");


    const product =
        JSON.parse(
            localStorage.getItem("generatedProduct")
        );


    if (!product) {
        return;
    }


    const productName =
        document.getElementById(
            "marketProductName"
        );

    const productCategory =
        document.getElementById(
            "marketProductCategory"
        );


    if (productName) {
        productName.textContent = product.name;
    }

    if (productCategory) {
        productCategory.textContent = product.category;
    }


    updateAdvancedMarketData(product);

}


// =================================================
// ADVANCED MARKET MATCHING
// =================================================

function updateAdvancedMarketData(product) {

    const marketContent =
        document.querySelector(".market-content");


    if (!marketContent) {
        return;
    }


    const oldSection =
        document.getElementById(
            "advancedMarketSection"
        );


    if (oldSection) {
        oldSection.remove();
    }


    let marketName = "Mumbai";

    let match = 90;

    let demand = 90;

    let buyerInterest = 82;

    let priceFit = 88;

    let reach = 95;

    let reason =
        "Strong demand and good buyer availability make this market suitable for your product.";


    const material =
        (product.material || "").toLowerCase();


    // -----------------------------
    // STEEL
    // -----------------------------

    if (material.includes("steel")) {

        marketName = "Mumbai";

        match = 90;

        demand = 94;

        buyerInterest = 88;

        priceFit = 86;

        reach = 95;

        reason =
            "Mumbai has strong demand for durable household and utility products, making it a suitable market for handcrafted steel products.";

    }


    // -----------------------------
    // BAMBOO
    // -----------------------------

    else if (material.includes("bamboo")) {

        marketName = "Mumbai";

        match = 92;

        demand = 95;

        buyerInterest = 91;

        priceFit = 89;

        reach = 94;

        reason =
            "Mumbai shows strong demand for eco-friendly and handmade products, especially lifestyle and home-use items.";

    }


    // -----------------------------
    // JUTE
    // -----------------------------

    else if (material.includes("jute")) {

        marketName = "Pune";

        match = 91;

        demand = 92;

        buyerInterest = 90;

        priceFit = 88;

        reach = 89;

        reason =
            "Pune has a growing customer base for sustainable and natural-fibre products.";

    }


    // -----------------------------
    // WOOD
    // -----------------------------

    else if (material.includes("wood")) {

        marketName = "Delhi";

        match = 87;

        demand = 88;

        buyerInterest = 85;

        priceFit = 90;

        reach = 86;

        reason =
            "Delhi offers a strong market for traditional handicrafts, home décor and artisan products.";

    }


    // =================================================
    // CREATE ANALYSIS SECTION
    // =================================================

    const section =
        document.createElement("div");


    section.id =
        "advancedMarketSection";


    section.innerHTML = `

        <div class="market-insights">

            <h3>
                🧠 Market Match Analysis
            </h3>


            <div class="insight-row">

                <div class="insight-header">

                    <span>
                        📈 Market Demand
                    </span>

                    <strong>
                        ${demand}%
                    </strong>

                </div>

                <div class="insight-bar">

                    <div
                        class="insight-fill"
                        style="width:${demand}%">
                    </div>

                </div>

            </div>


            <div class="insight-row">

                <div class="insight-header">

                    <span>
                        👥 Buyer Interest
                    </span>

                    <strong>
                        ${buyerInterest}%
                    </strong>

                </div>

                <div class="insight-bar">

                    <div
                        class="insight-fill"
                        style="width:${buyerInterest}%">
                    </div>

                </div>

            </div>


            <div class="insight-row">

                <div class="insight-header">

                    <span>
                        💰 Price Fit
                    </span>

                    <strong>
                        ${priceFit}%
                    </strong>

                </div>

                <div class="insight-bar">

                    <div
                        class="insight-fill"
                        style="width:${priceFit}%">
                    </div>

                </div>

            </div>


            <div class="insight-row">

                <div class="insight-header">

                    <span>
                        📍 Market Reach
                    </span>

                    <strong>
                        ${reach}%
                    </strong>

                </div>

                <div class="insight-bar">

                    <div
                        class="insight-fill"
                        style="width:${reach}%">
                    </div>

                </div>

            </div>

        </div>


        <div class="market-reason">

            <p>

                <strong>
                    🤖 Why ${marketName}?
                </strong>

                <br><br>

                ${reason}

            </p>

        </div>


        <div class="market-reason">

            <p>

                <strong>
                    🎯 Overall Match
                </strong>

                <br><br>

                ${match}% compatibility based on
                product type, material, price suitability,
                buyer interest and market reach.

            </p>

        </div>

    `;


    const title =
        marketContent.querySelector(
            ".market-section-title"
        );


    if (title) {

        marketContent.insertBefore(
            section,
            title
        );

    }
    else {

        marketContent.prepend(section);

    }

}


// =================================================
// BUYER MATCHING
// =================================================

function openBuyers() {

    showScreen("buyersScreen");


    const product =
        JSON.parse(
            localStorage.getItem("generatedProduct")
        );


    if (!product) {
        return;
    }


    const image =
        document.getElementById(
            "buyerProductImage"
        );

    const name =
        document.getElementById(
            "buyerProductName"
        );

    const category =
        document.getElementById(
            "buyerProductCategory"
        );


    if (image) {
        image.src = product.image;
    }


    if (name) {
        name.textContent = product.name;
    }


    if (category) {
        category.textContent = product.category;
    }

}


// =================================================
// CONTACT BUYER
// =================================================

function contactBuyer(buyerName) {

    alert(
        "✅ Enquiry Sent!\n\n" +
        "Your product enquiry has been sent to " +
        buyerName +
        "."
    );

}


// =================================================
// ENQUIRIES
// =================================================

function openEnquiries() {

    showScreen("enquiriesScreen");

}


// =================================================
// RESET PRODUCT FORM
// =================================================

function resetProductForm() {

    uploadedImage = "";


    const input =
        document.getElementById(
            "productImage"
        );


    if (input) {
        input.value = "";
    }


    const preview =
        document.getElementById(
            "imagePreview"
        );


    if (preview) {

        preview.innerHTML = `

            <div class="camera-icon">
                📷
            </div>

            <h3>
                Add Product Photo
            </h3>

            <p>
                Click here to choose a photo
            </p>

        `;

    }

}


// =================================================
// APP START
// =================================================

console.log(
    "ArtisanConnect loaded successfully 🚀"
);