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
            console.log(typeof convertedtotalSeatRemaining);

            // Total Selected Seat Calculate
            const totalSelectedSeat = document.getElementById("total-selected-seat").innerText;
            const convertedtotalSelectedSeat = parseInt("totalSelectedSeat");
            const selected = bookingSeat + selectedArray.length;
            document.getElementById("total-selected-seat").innerText = selected;
            console.log(typeof convertedtotalSeatRemaining);

            // Total Price Calculate



            // const submitBtn = document.getElementById('submit-btn');
            // console.log(submitBtn);

            // const xxX = document.querySelector('.xxx')
            // const inputValue = xxX.value;
            // console.log(inputValue);

            // const myBtnClass = document.querySelector('.myBtnClass');
            // console.log(myBtnClass);
            // if (inputValue === "NEW15" || inputValue === "Couple 20") {
            //     myBtnClass.className = "hidden";
            // }
        }



        // let totalPriceText = document.getElementById('total-price').innerText;
        // let conTotalPrice = parseInt(totalPriceText);
        // console.log(typeof conTotalPrice);
        // let totalPrice = selectedArray.length * 550;
        // totalPrice.innerText = initotal;

        //     // Current Seat
        //     const currentSeatNumber = document.getElementById('total-remaining-seat').innerText;
        //     const convertedCurrentSeatNumber = parseInt(currentSeatNumber)
        //     console.log(convertedCurrentSeatNumber);
        //     //available Seat
        //     const remainingSeat = convertedCurrentSeatNumber - selectedArray.length;
        //     // 
        //     currentSeatNumber.innerText = remainingSeat;
        //     console.log(currentSeatNumber);



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


        seatNumber.addEventListener("click", function () {
            selectedArray.push(selectedSeatNumber);
            console.log(selectedArray.length);

        })




    })
}
// function totalP(){
//     let totalPriceText = document.getElementById('total-price').innerText;
//     let sum = 1;
//         let conTotalPrice = parseInt(totalPriceText);
//         console.log(typeof conTotalPrice);
//         let totalPrice = selectedArray.length * 550;
//         totalPrice.innerText = sum;
// }
