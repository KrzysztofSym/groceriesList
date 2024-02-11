document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.querySelector(".add input");
    const addBtn = document.querySelector(".fa-check");
    const closeBtn = document.querySelector(".fa-xmark");
    const plusBtn = document.querySelector(".btn");
    const form = document.querySelector(".add form")
    const groceriesList = document.querySelector(".groceries");
    const completedList = document.querySelector(".completed");
    let count = document.querySelector('.no');
    
    plusBtn.addEventListener("click", ()=> {
        form.classList.add('active');
        plusBtn.classList.remove('active');
    })

    closeBtn.addEventListener("click", ()=> {
        form.classList.remove('active');
        inputBox.value = '';
        plusBtn.classList.add('active');
    });
    addBtn.addEventListener("click", addItem);

    function addItem(){
        if(inputBox.value === ''){
            alert("Name item to add");
        } else {
            let label = document.createElement("label");
            label.innerHTML = `
                <input type="checkbox">
                <span class="checkmark"></span>
                <span>${inputBox.value}</span>
            `;
            label.classList.add('check-form');
            groceriesList.appendChild(label);
            inputBox.value = '';
        }
    }

    groceriesList.addEventListener('change', (event)=> {
        if (event.target.matches('input[type="checkbox"]')) {
            const checkbox = event.target;
            const item = checkbox.parentNode;

            if (checkbox.checked) {
                completedList.appendChild(item);
            } else {
                groceriesList.appendChild(item);
            }
            console.log(completedList.childElementCount);
            count.innerHTML = completedList.childElementCount;
        }
    });

    completedList.addEventListener('change', (event)=> {
        if (event.target.matches('input[type="checkbox"]')) {
            const checkbox = event.target;
            const item = checkbox.parentNode;

            if (!checkbox.checked) {
                groceriesList.appendChild(item);
            }
        }
        count.innerHTML = completedList.childElementCount;


    });
});
