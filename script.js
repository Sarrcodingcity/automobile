document.addEventListener('DOMContentLoaded', () => {
    const monthsInput = document.getElementById('months');
    const totalInput = document.getElementById('total');

    const calculateTotal = () => {
        const months = parseInt(monthsInput.value, 10);
        let amountPerDay;

        if (months <= 1) {
            amountPerDay = 25000;
        } else if (months <= 2) {
            amountPerDay = 20000;
        } else {
            amountPerDay = 18000;
        }

        const totalAmount = amountPerDay * 30 * months; // Assumption: 30 days per month
        totalInput.value = totalAmount.toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' });
    };

    monthsInput.addEventListener('input', calculateTotal);
});
