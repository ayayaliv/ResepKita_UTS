export const categories = ['Semua', 'Nasi', 'Mie', 'Telur', 'Camilan'];

export const recipes = [
  {
    id: '1', name: 'Nasi Goreng Telur', emoji: '🍳', category: 'Nasi',
    time: 15, cost: 8000, level: 'Mudah',
    desc: 'Nasi goreng simpel, cocok untuk sisa nasi semalam.',
    ingredients: ['1 piring nasi putih', '1 butir telur', '2 siung bawang putih', '1 sdm kecap manis', 'Garam secukupnya', 'Minyak goreng'],
    steps: ['Cincang bawang putih, tumis sampai harum.', 'Masukkan telur, orak-arik.', 'Masukkan nasi, aduk rata.', 'Tambahkan kecap dan garam, masak 3 menit.', 'Sajikan hangat.'],
  },
  {
    id: '2', name: 'Mie Instan Spesial', emoji: '🍜', category: 'Mie',
    time: 10, cost: 7000, level: 'Mudah',
    desc: 'Mie instan ditambah telur dan sayur biar lebih bergizi.',
    ingredients: ['1 bungkus mie instan', '1 butir telur', 'Sawi atau kol secukupnya', '1 siung bawang putih'],
    steps: ['Rebus air, masukkan sawi dan mie.', 'Pecahkan telur ke dalam rebusan.', 'Tiriskan, campur dengan bumbu.', 'Tambahkan bawang putih goreng.'],
  },
  {
    id: '3', name: 'Telur Dadar Gulung', emoji: '🥚', category: 'Telur',
    time: 10, cost: 5000, level: 'Mudah',
    desc: 'Lauk cepat dengan bahan seadanya.',
    ingredients: ['2 butir telur', '1 batang daun bawang', 'Garam & merica', 'Minyak goreng'],
    steps: ['Kocok telur dengan daun bawang, garam, merica.', 'Tuang tipis ke wajan panas.', 'Gulung saat setengah matang.', 'Potong dan sajikan.'],
  },
  {
    id: '4', name: 'Nasi Tutug Tempe', emoji: '🍚', category: 'Nasi',
    time: 20, cost: 9000, level: 'Sedang',
    desc: 'Nasi dengan tempe goreng yang dihancurkan.',
    ingredients: ['1 piring nasi', '1 papan tempe kecil', '2 siung bawang merah', '1 cabai (opsional)', 'Garam'],
    steps: ['Goreng tempe sampai kering.', 'Haluskan bawang, cabai, dan garam.', 'Hancurkan tempe, campur dengan bumbu.', 'Aduk dengan nasi hangat.'],
  },
  {
    id: '5', name: 'Mie Goreng Sayur', emoji: '🥘', category: 'Mie',
    time: 15, cost: 8000, level: 'Mudah',
    desc: 'Mie goreng rumahan dengan sayuran sisa kulkas.',
    ingredients: ['1 bungkus mie instan', 'Wortel dan kol', '1 butir telur', 'Kecap manis'],
    steps: ['Rebus mie setengah matang, tiriskan.', 'Tumis sayur dan telur.', 'Masukkan mie dan bumbu.', 'Aduk rata, angkat.'],
  },
  {
    id: '6', name: 'Telur Ceplok Kecap', emoji: '🍳', category: 'Telur',
    time: 8, cost: 4000, level: 'Mudah',
    desc: 'Lauk paling cepat untuk akhir bulan.',
    ingredients: ['1 butir telur', '1 sdm kecap manis', '1 siung bawang merah', 'Minyak goreng'],
    steps: ['Goreng telur sampai matang.', 'Iris bawang merah tipis.', 'Siram kecap dan taburi bawang.'],
  },
  {
    id: '7', name: 'Pisang Goreng Tepung', emoji: '🍌', category: 'Camilan',
    time: 15, cost: 6000, level: 'Mudah',
    desc: 'Camilan manis untuk teman begadang tugas.',
    ingredients: ['3 buah pisang', '5 sdm tepung terigu', 'Air secukupnya', '1 sdm gula', 'Minyak goreng'],
    steps: ['Campur tepung, gula, dan air jadi adonan kental.', 'Celupkan pisang ke adonan.', 'Goreng sampai kuning keemasan.'],
  },
  {
    id: '8', name: 'Roti Bakar Cokelat', emoji: '🍞', category: 'Camilan',
    time: 5, cost: 5000, level: 'Mudah',
    desc: 'Sarapan kilat sebelum kuliah pagi.',
    ingredients: ['2 lembar roti tawar', 'Selai cokelat', 'Margarin'],
    steps: ['Olesi roti dengan margarin.', 'Panggang di wajan sampai kecokelatan.', 'Oleskan selai cokelat, tangkup.'],
  },
];

export const formatRupiah = (n) => 'Rp ' + n.toLocaleString('id-ID');