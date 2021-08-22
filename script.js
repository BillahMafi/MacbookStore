// setup MemoryCost function

function MemoryCost(MemoryInput, addmemory) {
    if (addmemory)
    {
        document.getElementById(MemoryInput).innerText = 0;
    } else
    {
        document.getElementById(MemoryInput).innerText = 180;
    }
    TotalCharge();
};

// delevery charge setup 

function deliveryCharge(MatchCharge) {
    if (MatchCharge)
    {
        document.getElementById("Delivery-charge").innerText = 0;
    }
    else
    {
        document.getElementById("Delivery-charge").innerText = 20;
    }
    TotalCharge();
};

// total charge 

function TotalCharge() {
    const bestPrice = parseFloat(document.getElementById("Best-price").innerText);
    const memoryPrice = parseFloat(document.getElementById("Memory-cost").innerText);
    const storageCost = parseFloat(document.getElementById("Storage-cost").innerText);
    const deliveryCharge = parseFloat(document.getElementById("Delivery-charge").innerText);

    // totalPrice set 

    document.getElementById("total-price").innerText = bestPrice + memoryPrice + storageCost + deliveryCharge;
    document.getElementById("all-total-price").innerText = bestPrice + memoryPrice + storageCost + deliveryCharge;
};

// totalprize discound 

function discountPrice() {
    const disInputValue = document.getElementById("discountInput").value;
    let allTotalPrice = document.getElementById("all-total-price");
    const totolPrice = parseFloat(document.getElementById("total-price").innerText);
    if (disInputValue == "stevekaku")
    {
        discountValue = 20 / 100 * totolPrice;
        allTotalPrice.innerText = totolPrice - discountValue;
    }
    else
    {
        alert("Please Add Promo Code!")
    }
    document.getElementById("discountInput").value = "";
};

// costStorage function setup 

function StorageCost(StorageMatch) {
    switch (StorageMatch)
    {
        case "256gb":
            document.getElementById("Storage-cost").innerText = 0;
            break;
        case "512gb":
            document.getElementById("Storage-cost").innerText = 100;
            break
        case "1tb":
            document.getElementById("Storage-cost").innerText = 180;
    };
    TotalCharge()
};


// setup MemoryCost event 

document.getElementById("memory8gb").addEventListener("click", function () {
    MemoryCost("Memory-cost",true)
});

document.getElementById("memory16gb").addEventListener("click", function () {
    MemoryCost("Memory-cost",false)
});

// ssd event setup 
document.getElementById("ssd256gb").addEventListener("click", function () {
    StorageCost("256gb")
    
});

document.getElementById("ssd512gb").addEventListener("click", function () {
    StorageCost("512gb")
});

document.getElementById("ssd1tb").addEventListener("click", function () {
    StorageCost("1tb")
});

// delevery charge event setup 

document.getElementById("free-delivery").addEventListener("click", function () {
    deliveryCharge(true)
});

document.getElementById("delivery20$").addEventListener("click", function () {
    deliveryCharge(false)
});

// discount event setup 

document.getElementById("discountBtn").addEventListener("click", function () {
    discountPrice()
});