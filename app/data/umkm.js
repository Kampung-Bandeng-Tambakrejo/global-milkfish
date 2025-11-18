export const globalImages = [
  "/Images/FotoGlobalmilk1.jpg", // Foto tambak/laut
  "/Images/FotoGlobalMilk2.jpg", // Foto olahan ikan
  "/Images/FotoGlobalMilk3.jpg", // Foto tambak lagi
  "/Images/FotoGlobalMilk4.jpg" // Foto hidangan ikan
];


export  const umkmData = [
    {
    id: 1,
    name: "Bandeng Mina Makmur",
    owner: "Ibu Darmono",
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnikQW5sSu1kjVT1gudy9J_abkba_KcuihGA&s",
      "/Images/MinaMakmurImages/bandengDruilunak.png",
      "/Images/MinaMakmurImages/Bandengisi.png",
      "/Images/MinaMakmurImages/pepesbandeng.png",
      "/Images/MinaMakmurImages/tahu bakso.png",
      "/Images/MinaMakmurImages/ayamkremesmakmur.png",
      "/Images/MinaMakmurImages/Sambal MinaMakmur.png"
    ],
    description: "Spesialis bandeng presto duri lunak dengan resep warisan turun-temurun. Kualitas terjamin, rasa tak tertandingi.",
    menu: [
      { 
        name: "Bandeng Duri Lunak", 
        price: "Rp 70.000", 
        description: "Bandeng dengan bumbu rempah khas Semarang yang dimasak dengan panci bertekanan, sehingga menghasilkan bandeng dengan duri yang lunak. Satu box berisi 2 ekor bandeng dan dilengkapi dengan sambal. Produk ini tersedia dalam pilihan basah, goreng dan vacuum.",
        imageSrc: "/Images/MinaMakmurImages/bandengDruilunak.png",
        isPopular: true
      },
      { 
        name: "Bandeng Isi", 
        price: "Rp 75.000",
        description: "Bandeng isi atau sering juga kita sebut dengan nama otak-otak bandeng, merupakan olahan ikan bandeng dengan campuran bahan tambahan tepung roti. Dimasak dengan panci bertekanan. Satu box berisi 2 ekor bandeng dan dilengkapi dengan sambal. Dengan rasanya yang gurih sangat cocok untuk anak-anak! Produk ini tersedia dalam pilihan basah, goreng dan vacuum.",
        imageSrc: "/Images/MinaMakmurImages/Bandengisi.png",
        isPopular: true
      },
      { 
        name: "Pepes Bandeng", 
        price: "Rp 80.000",
        description: "Pepes dari bandeng duri lunak dibalut dengan bumbu pedas rempah khas Semarang yang dibungkus dengan daun pisang batu. Satu box berisi 2 ekor bandeng. Sangat cocok bagi penyuka pedas. Ready to eat! Produk ini juga tersedia dalam pilihan vacuum.",
        imageSrc: "/Images/MinaMakmurImages/pepesbandeng.png",
        isPopular: true
      },

      { 
        name: "Tahu Bakso", 
        price: "Hubungi Pemilik",
        description: "Tahu bakso yang terbuat dari olahan daging sapi pilihan dan dimasak dengan cara yang khusus sehingga menghasilkan rasa yang khas. Rasakan bedanya! Satu box berisi 5 pcs. Produk ini dijual dalam kemasan vacuum.",
        imageSrc: "/Images/MinaMakmurImages/tahu bakso.png",
        isPopular: false
      },

      { 
        name: "Ayam Kremes", 
        price: "Hubungi Pemilik",
        description: "Produk ayam kremes ini berisikan satu ekor ayam pejantan yang digoreng dan disajikan dengan lalapan dan sambal. Sangat cocok untuk seserahan hajatan. Untuk pemesanan minimal 5 ekor.",
        imageSrc: "/Images/MinaMakmurImages/ayamkremesmakmur.png",
        isPopular: false
      },

      { 
        name: "Sambal Bandeng", 
        price: "Hubungi Pemilik",
        description: "Merupakan sambal yang diolah dengan campuran terasi. Sangat cocok bagi penyuka pedas! Kini dijual terpisah, sangat praktis dalam kemasan sachet.",
        imageSrc: "/Images/MinaMakmurImages/Sambal MinaMakmur.png",
        isPopular: false
      },
    ],
    delivery: ["GoFood", "GrabFood", "Pesan Antar Langsung"],
    contact: {
      instagram: "minamakmurid",
      whatsapp: "628122842048",
    }
  },
  {
    id: 2,
    name: "Bandeng Enaxmen",
    owner: "Kurniawati",
    galleryImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSntPFrcnPmElNoM7oD5LwZ_ZfbUtoM37Ti2w&s",
      "/Images/Enaxmen/EnaxmenBandengnoDuri.png",
      "/Images/Enaxmen/Durilunak1.png"
    ],
    description: "Bandeng Enaxmen adalah sebuah usaha rumahan yang bergerak di bidang pengolahan produk makanan berbahan dasar ikan bandeng, khususnya bandeng duri lunak dan berbagai olahan turunannya. Usaha ini hadir sebagai solusi pangan praktis, higienis, dan bernilai gizi tinggi yang dapat dikonsumsi oleh berbagai kalangan.",
    menu: [
      { 
        name: "Bandeng Tanpa Duri", 
        price: "Rp 75.000",
        description: "Bandeng segar tanpa duri dengan tekstur lembut dan rasa gurih alami.",
        imageSrc: "/Images/Enaxmen/EnaxmenBandengnoDuri.png",
        isPopular: true
      },
      { 
        name: "Bandeng Tanpa Duri Crispy", 
        price: "Rp 40.000",
        description: "Dari bandeng segar pilihan yg sudah dicabuti duri durinya. Dimarinasi dan di balut dengan tepung berbumbu...rasanya sangat renyah dan enak.",
        imageSrc: "/Images/Enaxmen/TandpaDuriCryspi.png",
        isPopular: false
      },
      { 
        name: "Otak Otak Bandeng 2", 
        price: "Rp 70.000",
        description: "Otak-otak bandeng dengan cita rasa gurih dan lembut. Dikemas secara vakum untuk menjaga kesegaran. Bertahan hingga 3 hari pada suhu ruang dan 3 bulan dalam kondisi beku.",
        imageSrc: "/Images/Enaxmen/otakbandeng2.png",
        isPopular: false
      },

      { 
        name: "Bandeng Presto (Duri Lunak)2", 
        price: "Rp 65.000",
        description: "Bandeng presto duri lunak pilihan yang dimasak hingga empuk dan mudah disantap. Dikemas rapi dan ideal untuk kebutuhan keluarga atau hadiah makanan khas.",
        imageSrc: "/Images/Enaxmen/durilunak2.png",
        isPopular: false
      },

      { 
        name: "Bandeng Presto (Duri Lunak) 1", 
        price: "Rp 35.000",
        description: "Bandeng presto dengan duri lunak yang aman dikonsumsi semua usia. Teksturnya lembut dan kaya rasa, cocok untuk lauk sehari-hari maupun oleh-oleh khas.",
        imageSrc: "/Images/Enaxmen/Durilunak1.png",
        isPopular: true
      },

      { 
        name: "Pepes Bandeng Tanpa Duri", 
        price: "Rp 45.000",
        description: "Pepes bandeng tanpa duri dengan bumbu khas yang meresap sempurna. Memiliki cita rasa gurih dan wangi rempah. Siap santap dan praktis untuk hidangan kapan saja.",
        imageSrc: "/Images/Enaxmen/Pepes.png",
        isPopular: true
      },

      { 
        name: "Otak Otak Bandeng 1", 
        price: "Rp 35.000",
        description: "Otak-otak bandeng dengan rasa gurih dan tekstur lembut. Dikemas vakum untuk menjaga kualitas. Tahan 3 hari pada suhu ruang dan 3 bulan jika disimpan dalam kondisi beku.",
        imageSrc: "/Images/Enaxmen/Otakotakbandeng1.png",
        isPopular: false
      },

      { 
        name: "Bandeng Cabut Duri  Siap Goreng", 
        price: "Rp 35.000",
        description: "Bandeng Crispy siap goreng. Bandeng cabut duri yang sudah dimarinasi + tepung crispy yg sudah dibumbui + sambal bawang.Tinggal goreng....srengggg",
        imageSrc: "/Images/Enaxmen/CabutduriKrispiSIAP.png",
        isPopular: false
      },
    ],
    delivery: ["ShopeeFood", "Pesan Antar Langsung", "Kirim ke Luar Kota"],
    contact: {
      instagram: "enaxmen_semarang",
      whatsapp: "6282136561949",
    }
  },

  {
    id: 3,
    name: "Makmur Mandiri",
    owner: "Mumpuni Kusumandari",
    galleryImages: [
      "https://image.idntimes.com/post/20220215/kampung-sentra-bandeng-tambakrejo-semarang-kub-global-milk-fish-bri-incubator-ud-mina-makmur-bandeng-presto-bandeng-presto-bu-darmono-ilustrasi-umkm-37-17a99e75e56f646cb402d8a0df8002ed.jpg",
      "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.41 (1).jpeg",
      "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.42.jpeg"
    ],
    description: "UMKM yang memproduksi aneka olahan bandeng, tahu bakso, dan oleh-oleh khas Semarang dengan cita rasa rumahan dan kualitas terjaga.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 45.000",
        description: "Bandeng duri lunak khas Semarang yang dimasak dengan bumbu rempah dan panci bertekanan, menghasilkan tekstur lembut dan rasa gurih yang meresap.",
        imageSrc: "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.41 (1).jpeg",
        isPopular: false
      },
      {
        name: "Otak-Otak Bandeng",
        price: "Rp 55.000",
        description: "Otak-otak bandeng dengan isian lembut dan bumbu gurih, cocok untuk camilan maupun lauk pendamping.",
        imageSrc: "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.42 (1).jpeg",
        isPopular: false
      },
      {
        name: "Pepes Bandeng Duri Lunak",
        price: "Rp 50.000",
        description: "Pepes bandeng duri lunak berbumbu rempah yang dibungkus daun pisang, memberikan aroma wangi dan cita rasa khas.",
        imageSrc: "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.42.jpeg",
        isPopular: false
      },
      {
        name: "Tahu Bakso Sapi",
        price: "Rp 30.000",
        description: "Tahu bakso sapi dengan rasa gurih dan tekstur padat, cocok sebagai camilan maupun lauk.",
        imageSrc: "/Images/BuMumpuni/WhatsApp Image 2025-11-17 at 10.35.41.jpeg",
        isPopular: false
      }
    ],
    delivery: ["GoFood", "GrabFood", "maxim", "Diantar Langsung"],
    contact: {
      instagram: "bandeng_bufatkhan",
      whatsapp: "6285311021160"
    }
  },

  {
    id: 4,
    name: "DK Iwak'e",
    owner: "Dwi Wahyu Kusumawati",
    galleryImages: [
      "/Images/dwake/dkwiwawk.jpeg",
      "/Images/dwake/dkwiake.jpeg"
    ],
    description: "UMKM yang menyediakan aneka olahan bandeng seperti bandeng presto, pepes, dan otak-otak dengan rasa khas rumahan.",
    menu: [
      {
        name: "Bandeng Presto Goreng",
        price: "Rp 35.000",
        description: "Bandeng presto goreng dengan tekstur empuk dan bumbu meresap, siap disantap kapan saja.",
        imageSrc: "/Images/dwake/2csirspi.jpeg",
        isPopular: false
      },
      {
        name: "Bandeng Presto Pindang Pepes",
        price: "Hubungi Penjual",
        description: "Bandeng presto yang dimasak dengan bumbu pindang dan dibungkus daun, menghadirkan aroma harum dan cita rasa gurih.",
        imageSrc: "/Images/dwake/dkwiwawk1.jpeg",
        isPopular: false
      },
      {
        name: "Otak-Otak Bandeng",
        price: "Hubungi Penjual",
        description: "Otak-otak bandeng lembut dengan perpaduan bumbu gurih, cocok sebagai camilan keluarga.",
        imageSrc: "/Images/dwake/pees.jpeg",
        isPopular: false
      }
    ],
    delivery: ["GoFood", "GrabFood", "maxim", "Diantar Langsung"],
    contact: {
      instagram: "",
      whatsapp: "6285100252103"
    }
  },

  {
    id: 5,
    name: "Bandeng Laris",
    owner: "Dewi Anggraini F",
    galleryImages: [
      "/Images/otherumkm/Laresssss.jpeg"
    ],
    description: "Penyedia bandeng presto dan otak-otak bandeng dengan cita rasa khas yang disukai banyak pelanggan.",
    menu: [
      {
        name: "Bandeng Presto",
        price: "Rp 50.000",
        description: "Bandeng presto empuk dengan duri lunak yang mudah disantap dan cocok untuk hidangan keluarga.",
        imageSrc: "/Images/otherumkm/Laresssss.jpeg",
        isPopular: false
      },
      {
        name: "Otak-Otak Bandeng",
        price: "Hubungi Penjual",
        description: "Otak-otak bandeng gurih dengan tekstur lembut, cocok sebagai oleh-oleh ataupun lauk pendamping.",
        imageSrc: "https://img-global.cpcdn.com/recipes/85f81f793e1c6c76/240x320cq80/photo.jpg",
        isPopular: false
      }
    ],
    delivery: ["GoFood", "GrabFood", "maxim", "Diantar Langsung"],
    contact: {
      instagram: "",
      whatsapp: "6282221392309"
    }
  },

  {
    id: 6,
    name: "Bandeng JR",
    owner: "Sugiati",
    galleryImages: [
      "/Images/otherumkm/Laresssss.jpeg"
    ],
    description: "UMKM yang menyajikan bandeng duri lunak berkualitas dengan rasa gurih khas olahan tradisional.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 55.000",
        description: "Bandeng presto duri lunak dengan cita rasa gurih dan tekstur lembut, cocok untuk berbagai hidangan.",
        imageSrc: "/Images/otherumkm/Laresssss.jpeg",
        isPopular: false
      }
    ],
    delivery: ["GoFood", "GrabFood", "maxim", "Diantar Langsung"],
    contact: {
      instagram: "",
      whatsapp: "62895320424836"
    }
  },

  {
    id: 7,
    name: "Bandeng Maknyak",
    owner: "Sukarni",
    galleryImages: [
      "/Images/otherumkm/maknyak.jpeg"
    ],
    description: "UMKM yang menjual bandeng duri lunak dengan rasa gurih dan tekstur empuk khas olahan rumahan.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 55.000",
        description: "Bandeng duri lunak yang dimasak hingga empuk dengan bumbu meresap, cocok sebagai oleh-oleh maupun lauk.",
        imageSrc: "/Images/otherumkm/maknyak.jpeg",
        isPopular: false
      }
    ],
    delivery: ["Offline Store"],
    contact: {
      instagram: "",
      whatsapp: ""
    }
  },

  {
    id: 8,
    name: "Bandeng Tiga A",
    owner: "Marfuah",
    galleryImages: [
      "/Images/otherumkm/crop3a.jpeg",
      "/Images/otherumkm/3a.jpeg",
      "/Images/otherumkm/TIGA A.jpeg"
    ],
    description: "Penyedia bandeng duri lunak segar dan lezat yang siap menjadi hidangan keluarga.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 50.000",
        description: "Bandeng duri lunak dengan bumbu meresap dan tekstur lembut, cocok sebagai lauk praktis sehari-hari.",
        imageSrc: "/Images/otherumkm/TIGA A.jpeg",
        isPopular: false
      }
    ],
    delivery: ["Offline Store"],
    contact: {
      instagram: "",
      whatsapp: ""
    }
  },

  {
    id: 9,
    name: "Bandeng Wani Rasa",
    owner: "Rubamah",
    galleryImages: [
      "/Images/otherumkm/wanirasa.jpeg"
    ],
    description: "UMKM yang menawarkan bandeng duri lunak dengan cita rasa gurih dan lembut khas masakan rumahan.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 50.000",
        description: "Bandeng duri lunak dengan rasa gurih dan tekstur lembut, cocok untuk hidangan keluarga dan oleh-oleh.",
        imageSrc: "/Images/otherumkm/wanirasa.jpeg",
        isPopular: false
      }
    ],
    delivery: ["Offline Store"],
    contact: {
      instagram: "",
      whatsapp: ""
    }
  },

  {
    id: 10,
    name: "Bandeng Marisini",
    owner: "Yayuk Sukowati",
    galleryImages: [
      "/Images/otherumkm/Marisini.jpeg"
    ],
    description: "UMKM yang menghadirkan bandeng duri lunak dengan rasa khas dan kualitas terjaga.",
    menu: [
      {
        name: "Bandeng Duri Lunak",
        price: "Rp 50.000",
        description: "Olahan bandeng duri lunak yang dimasak hingga lembut dan gurih, cocok untuk hidangan sehari-hari.",
        imageSrc: "/Images/otherumkm/Marisini.jpeg",
        isPopular: false
      }
    ],
    delivery: [],
    contact: {
      instagram: "",
      whatsapp: "62895703140109"
    }
  }
];
