const counters = {};
document.querySelectorAll('.tasbih-counter').forEach(counter => {
    const tasbih = counter.getAttribute('data-tasbih');
    counters[tasbih] = 0;
    counter.addEventListener('click', () => {
        counters[tasbih]++;
        if (counters[tasbih] > 33) counters[tasbih] = 0;
        counter.querySelector('p:last-child').textContent = `${counters[tasbih]} / 33`;
    });
});

document.getElementById('reset-counters').addEventListener('click', () => {
    Object.keys(counters).forEach(tasbih => {
        counters[tasbih] = 0;
        document.querySelector(`[data-tasbih="${tasbih}"] p:last-child`).textContent = `0 / 33`;
    });
});

function openModal(id) {
    document.getElementById(`${id}-modal`).style.display = 'block';
}
function closeModal(id) {
    document.getElementById(`${id}-modal`).style.display = 'none';
}