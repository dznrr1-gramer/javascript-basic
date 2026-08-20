// 1. Data Awal
const santri = {
  nama: "Budi Santoso",
  kelas: "XI RPL",
  status: "Aktif"
};

const aktivitas = [
  "Login ke aplikasi",
  "Membaca materi JavaScript",
  "Mengerjakan latihan",
  "Mengumpulkan tugas"
];

// 2. Fungsi Render Profil Santri ke DOM
function renderProfil() {
  const elemNama = document.getElementById("santri-nama");
  const elemKelas = document.getElementById("santri-kelas");
  const elemStatus = document.getElementById("santri-status");
  const elemAvatar = document.getElementById("avatar-initial");

  // Set konten dari objek santri
  elemNama.textContent = santri.nama;
  elemKelas.textContent = santri.kelas;
  elemStatus.textContent = santri.status;

  // Membuat inisial nama untuk avatar (Contoh: "Budi Santoso" -> "B")
  elemAvatar.textContent = santri.nama.charAt(0).toUpperCase();
}

// 3. Fungsi Render Daftar Aktivitas ke DOM
function renderAktivitas() {
  const listContainer = document.getElementById("activity-list");
  const countBadge = document.getElementById("activity-count");

  // Bersihkan elemen ul sebelum merender ulang
  listContainer.innerHTML = "";

  // Update jumlah aktivitas
  countBadge.textContent = `${aktivitas.length} Aktivitas`;

  // Tampilkan empty state jika array kosong
  if (aktivitas.length === 0) {
    listContainer.innerHTML = `<li class="empty-state">Tidak ada aktivitas tersisa hari ini.</li>`;
    return;
  }

  // Iterasi array aktivitas menggunakan forEach
  aktivitas.forEach((itemText, index) => {
    // A. Buat elemen <li>
    const li = document.createElement("li");
    li.classList.add("activity-item");

    // B. Buat area teks & ikon
    const textWrapper = document.createElement("div");
    textWrapper.classList.add("activity-text");
    textWrapper.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${itemText}</span>`;

    // C. Fitur Tambahan: Buat tombol [ Hapus Aktivitas ]
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i> Hapus`;
    
    // Tambahkan Event Listener untuk menghapus item berdasarkan indeksnya
    btnDelete.addEventListener("click", () => {
      hapusAktivitas(index);
    });

    // D. Masukkan elemen teks & tombol ke dalam <li>
    li.appendChild(textWrapper);
    li.appendChild(btnDelete);

    // E. Masukkan <li> ke dalam <ul>
    listContainer.appendChild(li);
  });
}

// 4. Fungsi Hapus Aktivitas
function hapusAktivitas(index) {
  // Hapus 1 elemen dari array berdasarkan indeks
  aktivitas.splice(index, 1);

  // Render ulang daftar aktivitas agar tampilan sinkron dengan array data
  renderAktivitas();
}

// 5. Eksekusi fungsi saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderProfil();
  renderAktivitas();
});