    /* ==========================================
       1. HAMBURGER MENU TOGGLE
       ========================================== */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    /* ==========================================
       2. TERMINAL LOGIC (VANILLA JS)
       ========================================== */
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');

    terminalInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        if (cmd !== '') {
          runCommand(cmd);
          terminalInput.value = '';
        }
      }
    });

    function runCommand(cmd) {
      let response = '';

      switch (cmd) {
        case 'bantuan':
          response = `Daftar Perintah Terpadu:
  - tentang     : Menampilkan ringkasan profil Aditya.
  - keahlian    : Menampilkan daftar hard & soft skills.
  - pendidikan  : Menampilkan riwayat sekolah.
  - proyek      : Menampilkan daftar aplikasi buatan Aditya.
  - kontak      : Menampilkan link LinkedIn, Instagram, TikTok & Email.
  - bersihkan   : Membersihkan layar terminal.`;
          break;

        case 'tentang':
          response = `[PROFIL ADITYA NUGRAHA]
Status : Fresh Graduate SMKN 1 Kawali (2027)
Jurusan: Rekayasa Perangkat Lunak (RPL)
Fokus  : Web Development (Laravel, PHP, MySQL, JavaScript, Tailwind CSS).`;
          break;

        case 'keahlian':
          response = `[KEAHLIAN UTAMA]
Hard Skills:
 - Laravel / PHP Framework
 - MySQL
 - JavaScript ES6
 - Tailwind CSS / HTML5 / CSS3

Soft Skills:
 - Problem Solving & Debugging Sistem
 - Kerja Sama Tim & Manajemen Waktu`;
          break;

        case 'pendidikan':
          response = `[RIWAYAT PENDIDIKAN]
1. SDN 2 KERTAYASA (2015 - 2021)
2. SMPN 2 KAWALI (2021 - 2024)
3. SMKN 1 KAWALI (2024 - 2027 / Sekarang) - RPL`;
          break;

        case 'proyek':
          response = `[DAFTAR PROYEK UTAMA]
1. Website PKL SMKN 1 Kawali (Laravel & MySQL)
2. Bank Mini SMKN 1 Kawali (Sistem Perbankan Sekolah)
3. Pilketos Web System (E-Voting Ketua OSIS)`
          break;

        case 'kontak':
          response = `[INFORMASI KONTAK & MEDIA SOSIAL]
LinkedIn : https://www.linkedin.com/in/aditya-nugraha-978883329/
Instagram: https://www.instagram.com/adityaka___/#
TikTok   : https://www.tiktok.com/@adityanugraha0229
Email    : adityanugrahakawali2@gmail.com
Lokasi   : SMKN 1 Kawali, Ciamis, Jawa Barat.`;
          break;

        case 'bersihkan':
          terminalOutput.innerHTML = '';
          return;

        default:
          response = `Perintah '${cmd}' tidak dikenali. Ketik <span style="color:var(--neon-cyan)">bantuan</span> untuk melihat perintah.`;
          break;
      }

      terminalOutput.innerHTML += `\n\n<span style="color:var(--neon-cyan)">aditya@cyber-core:~$</span> ${cmd}\n${response}`;
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    /* ==========================================
       3. PROJECT FILTER LOGIC
       ========================================== */
    function filterProjects(category, btnElement) {
      const filterBtns = document.querySelectorAll('.filter-btn');
      filterBtns.forEach(btn => btn.classList.remove('active'));
      btnElement.classList.add('active');

      const cards = document.querySelectorAll('.project-card');
      cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    /* ==========================================
       4. MODAL LOGIC
       ========================================== */
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    function openModal(title, text) {
      modalTitle.innerText = title;
      modalBody.innerText = text;
      modalBackdrop.classList.add('active');
    }

    function closeModal() {
      modalBackdrop.classList.remove('active');
    }

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });