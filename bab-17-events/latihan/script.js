(function() {
    "use strict";

    // ----- ELEMEN DOM -----
    const form = document.getElementById('form-pemesanan');
    const inputNama = document.getElementById('nama');
    const inputEmail = document.getElementById('email');
    const inputFilm = document.getElementById('film');
    const charCount = document.getElementById('char-count');
    const keyMessage = document.getElementById('key-message');
    const notification = document.getElementById('form-notification');
    const resetBtn = document.getElementById('reset-btn');
    const clearAllBtn = document.getElementById('clear-all-btn');
    const listContainer = document.getElementById('ticket-list-container');
    const totalBadge = document.getElementById('total-badge');

    // ----- STATE -----
    let tiketList = []; // Array menampung { nama, email, film }

    // ----- FUNGSI RENDER DAFTAR TIKET -----
    function renderDaftarTiket() {
        listContainer.innerHTML = '';

        if (tiketList.length === 0) {
            listContainer.innerHTML = '<p class="empty-message">Belum ada tiket yang dipesan.</p>';
        } else {
            const listWrapper = document.createElement('div');
            listWrapper.className = 'ticket-list';

            tiketList.forEach((tiket, index) => {
                const item = document.createElement('div');
                item.className = 'ticket-item';

                // Informasi tiket
                const info = document.createElement('div');
                info.className = 'ticket-info';
                info.innerHTML = `
                    <p><strong>Nama</strong> : ${tiket.nama}</p>
                    <p><strong>Email</strong> : ${tiket.email}</p>
                    <p><strong>Film</strong> : 🎬 ${tiket.film}</p>
                `;

                // Tombol Hapus per Tiket
                const actions = document.createElement('div');
                actions.className = 'ticket-actions';
                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'btn-small btn-small-danger';
                deleteBtn.textContent = 'Hapus';
                deleteBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    hapusTiket(index);
                });

                actions.appendChild(deleteBtn);
                item.appendChild(info);
                item.appendChild(actions);
                listWrapper.appendChild(item);
            });

            listContainer.appendChild(listWrapper);
        }

        // Update Total
        totalBadge.textContent = `Total Tiket: ${tiketList.length}`;
    }

    // ----- FUNGSI HAPUS SATU TIKET -----
    function hapusTiket(index) {
        if (index >= 0 && index < tiketList.length) {
            tiketList.splice(index, 1);
            renderDaftarTiket();
            hideNotification();
        }
    }

    // ----- FUNGSI HAPUS SEMUA TIKET -----
    function hapusSemuaTiket() {
        if (tiketList.length === 0) return;
        if (confirm('Apakah Anda yakin ingin menghapus seluruh pesanan tiket?')) {
            tiketList = [];
            renderDaftarTiket();
            hideNotification();
        }
    }

    // ----- FUNGSI NOTIFIKASI -----
    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = 'form-notification show ' + type;
    }

    function hideNotification() {
        notification.classList.remove('show', 'success', 'error');
        notification.textContent = '';
    }

    // ----- UPDATE JUMLAH KARAKTER NAMA -----
    function updateCharCount() {
        const len = inputNama.value.length;
        charCount.textContent = `Jumlah karakter: ${len}`;
    }

    // ----- RESET FORM -----
    function resetForm() {
        inputNama.value = '';
        inputEmail.value = '';
        inputFilm.value = '';
        updateCharCount();
        keyMessage.textContent = '';
        hideNotification();
        inputNama.focus();
    }

    // ----- HANDLER SUBMIT FORM -----
    function handleSubmit(event) {
        // 1. Cegah reload halaman
        event.preventDefault();

        // 2 & 3. Ambil nilai & gunakan .trim()
        const nama = inputNama.value.trim();
        const email = inputEmail.value.trim();
        const film = inputFilm.value.trim();

        // 4 & 5. Validasi input kosong
        if (nama === '' || email === '' || film === '') {
            showNotification('⚠️ Nama, email, dan judul film wajib diisi!', 'error');
            return;
        }

        // Tambahkan ke array pesanan
        tiketList.push({ nama, email, film });

        // Render ulang daftar pesanan & tampilkan notifikasi
        renderDaftarTiket();
        showNotification('✅ Pemesanan tiket berhasil!', 'success');

        // Bersihkan input field setelah pemesanan
        inputNama.value = '';
        inputEmail.value = '';
        inputFilm.value = '';
        updateCharCount();
        keyMessage.textContent = '';
        inputNama.focus();
    }

    // ----- HANDLER EVENT KETIKAN -----
    function handleKeydown(event) {
        if (event.key === 'Enter') {
            keyMessage.textContent = 'Tombol Enter ditekan!';
        } else {
            keyMessage.textContent = '';
        }
    }

    // ----- EVENT LISTENERS -----
    form.addEventListener('submit', handleSubmit);
    inputNama.addEventListener('input', updateCharCount);
    inputNama.addEventListener('keydown', handleKeydown);
    resetBtn.addEventListener('click', resetForm);
    clearAllBtn.addEventListener('click', hapusSemuaTiket);

    // Initial State
    renderDaftarTiket();
    updateCharCount();
    hideNotification();

})();