const seatNumbers = document.querySelectorAll('.seat-number');
let selectedArray = [];
for (let seatNumber of seatNumbers) {
    seatNumber.addEventListener("click", function () {

        const selectedSeatNumber = seatNumber.innerText;
        const totalSeat = 40;
        const bookingSeat = 0;
        // console.log(selectedSeatNumber);
        selectedArray.push(selectedSeatNumber);
        //    console.log(selectedArray.length);
        if (selectedArray.length >= 5) {
            alert("You Selected Maximum Number of Seat");
            return
        } else {
            seatNumber.style.backgroundColor = "green";
            // Remaining Seat Calculate
            const totalSeatRemaining = document.getElementById("total-remaining-seat").innerText;
            const convertedtotalSeatRemaining = parseInt("totalSeatRemaining");
            const remaining = totalSeat - selectedArray.length;
            document.getElementById("total-remaining-seat").innerText = remaining;

            // Total Selected Seat Calculate
            const totalSelectedSeat = document.getElementById("total-selected-seat").innerText;
            const convertedtotalSelectedSeat = parseInt("totalSelectedSeat");
            const selected = bookingSeat + selectedArray.length;
            document.getElementById("total-selected-seat").innerText = selected;

            // Total Price Calculate
            const totalPriceText = document.getElementById('total-price').innerText;
            const convertedTotalPrice = parseInt(totalPriceText);
            let totalPrice = selectedArray.length * 550;
            document.getElementById('total-price').innerText = totalPrice;

            // Grand Total Calculate Without discount
            const grandPriceText = document.getElementById('grand-total').innerText;
            const convertedGrandTotalPrice = parseInt(grandPriceText);
            let totalGrandPrice = selectedArray.length * 550;
            document.getElementById('grand-total').innerText = totalGrandPrice;

            

            // Grand Total Calculate With discount
            // const inputId = document.getElementById('inputId');
            // const inputIdValue = inputId.value;
            // console.log(inputIdValue);
            // const submitId = document.getElementById('submitId');
            // const submitIdValue = submitId.value;
            // console.log(submitIdValue);
            // if (selectedArray.length === 4 && inputIdValue === "NEW15") {
            //     submitId.addEventListener("click", function () {
            //         const discount = totalGrandPrice * 15 / 100;
            //         console.log(discount);
            //     })
            // } else if (selectedArray.length === 4 && inputIdValue === "Couple 20") {
            //     const discount = totalGrandPrice * 20 / 100;
            //     console.log(discount);
            // } else {
                
            // }

        }



        // Appending Part
        const tBody = document.querySelector('.tbody')
        // console.log(tBody)
        const tr = document.createElement('tr')
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        tBody.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.classList.add = 'border-0';
        td1.innerText = selectedSeatNumber;
        td2.innerText = "Economoy";
        td3.innerText = 550;
    })
}

