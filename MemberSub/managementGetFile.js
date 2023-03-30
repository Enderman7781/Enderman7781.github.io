document.addEventListener("DOMContentLoaded",()=>{
    const deliverPageA = document.getElementById("progressA");
    const deliverPageB = document.getElementById("progressB")
    const returnPage = document.getElementById("return");
    const exchangePage = document.getElementById("exchange");

    document.querySelector('#linkProgress').addEventListener("click",e=>{
        e.preventDefault();

        deliverPageA.classList.remove("div--hidden");
        deliverPageB.classList.remove("div--hidden");
        returnPage.classList.add("div--hidden");
        exchangePage.classList.add("div--hidden");
    });

    document.querySelector('#linkReturn').addEventListener("click",e=>{
        e.preventDefault();

        deliverPageA.classList.add("div--hidden");
        deliverPageB.classList.add("div--hidden");
        returnPage.classList.remove("div--hidden");
        exchangePage.classList.add("div--hidden");
    });

    document.querySelector('#linkExchange').addEventListener("click",e=>{
        e.preventDefault();

        deliverPageA.classList.add("div--hidden");
        deliverPageB.classList.add("div--hidden");
        returnPage.classList.add("div--hidden");
        exchangePage.classList.remove("div--hidden");
    });
});