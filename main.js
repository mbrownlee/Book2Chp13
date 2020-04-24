const container = document.querySelector("#wishList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const itemName = document.querySelector("#thing").value
    const storeName = document.querySelector("#storeName").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <div>I can purchase ${itemName} at ${storeName}.</div>
        </section>
    `

})