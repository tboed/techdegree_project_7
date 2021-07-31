/**
 * Name Section
 */
//Focus on Name Field on load
const nameField = document.getElementById('name').focus();

/**
 * Job Role Section
 */
//Hide other job role by default
const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';
//Show other job role when 'Other' is selected and hide if selected included in options
const titleSelect = document.getElementById('title');
titleSelect.addEventListener('change', (e) => {
    if (e.target.value !== 'other') {
        otherJobRole.style.display = 'none';
    } else {
        otherJobRole.style.display = '';
    }
});

/**
 * T-shirt Section
 */
//Disable T-shirt color by default
const tshirtColor = document.getElementById('color');
tshirtColor.disabled = true;
//Enable specific T-shirt color when Design is selected
const tshirtDesign = document.getElementById('design');
const colorOption = document.getElementById('color').children;
tshirtDesign.addEventListener('change', (e) => {
    tshirtColor.disabled = false;
    for (let i = 1; i < colorOption.length; i++) {
        const chosenDesign = e.target.value;
        const shirtTheme = colorOption[i].getAttribute('data-theme');
        if (chosenDesign === shirtTheme) {
            colorOption[i].hidden = false;
            colorOption[i].setAttribute('selected', true);
        } else if (chosenDesign !== shirtTheme) {
            colorOption[i].hidden = true;
            colorOption[i].removeAttribute('selected');
        }
    }
});

/**
 * Register for Activities Section
 */
// Listen for changes in checkboxes and updates total dynamically
const registerActivities = document.getElementById('activities');
const printedTotal = document.getElementById('activities-cost')
let totalCost = 0;
registerActivities.addEventListener('change', (e) => {
    const clicked = e.target;
    const dataCost = +e.target.getAttribute('data-cost');
    if (clicked.checked) {
        totalCost += dataCost;
    } else {
        totalCost -= dataCost;
    }
    printedTotal.innerHTML = `Total: $${totalCost}`;
});

/**
 * Payment Info Section
 */
const paymentMethod = document.getElementById('payment');
const ccMethod = document.getElementById('credit-card');
const ppMethod = document.getElementById('paypal');
const bcMethod = document.getElementById('bitcoin');
//Credit card method is the default on load
paymentMethod[1].selected = true;
ppMethod.style.display = 'none';
bcMethod.style.display = 'none';
//Hides irrelevant field according to selections
paymentMethod.addEventListener('change', (e) => {
    const methodSelection = e.target.value;
    if (methodSelection === 'credit-card') {
        ccMethod.style.display = '';
        ppMethod.style.display = 'none';
        bcMethod.style.display = 'none';
    } else if (methodSelection === 'paypal') {
        ccMethod.style.display = 'none';
        ppMethod.style.display = '';
        bcMethod.style.display = 'none';
    }  else if (methodSelection === 'bitcoin') {
        ccMethod.style.display = 'none';
        ppMethod.style.display = 'none';
        bcMethod.style.display = '';
    }
});