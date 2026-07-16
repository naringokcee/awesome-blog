// Sayfa tamamen yüklendiğinde çalışacak ana fonksiyon
document.addEventListener("DOMContentLoaded", () => {
    
    /* ==========================================================================
       1. KARANLIK MOD SİSTEMİ (Dark Mode)
       ========================================================================== */
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Tarayıcı hafızasında (LocalStorage) daha önce kaydedilmiş bir tema tercihi var mı?
    const currentTheme = localStorage.getItem("theme");

    // Eğer kullanıcı önceden karanlık modu seçtiyse, sayfayı açtığında direkt uygula
    if (currentTheme === "dark") {
        body.classList.add("dark-theme");
        // Butonun ikonunu güneş yap
        if (darkModeToggle) {
            darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        }
    }

    // Butona tıklandığında çalışacak olay (Event Listener)
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            // Sınıfı ekle veya kaldır (toggle)
            body.classList.toggle("dark-theme");

            let theme = "light";
            // Eğer sınıf eklendiyse ikonunu güneş yap ve hafızaya 'dark' kaydet
            if (body.classList.contains("dark-theme")) {
                theme = "dark";
                darkModeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            } else {
                darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
            
            // Kullanıcının tercihini tarayıcı hafızasına kaydet
            localStorage.setItem("theme", theme);
        });
    }

    /* ==========================================================================
       2. DİNAMİK ARAMA VE FİLTRELEME
       ========================================================================== */
    const searchInput = document.getElementById("search-input");
    
    if (searchInput) {
        searchInput.addEventListener("keyup", (event) => {
            // Kullanıcının yazdığı metni al ve küçük harfe çevir (büyük-küçük harf duyarlılığı olmasın diye)
            const searchText = event.target.value.toLowerCase();
            
            // Sayfadaki tüm Bootstrap kartlarını seç
            const cards = document.querySelectorAll(".card");

            cards.forEach(card => {
                // Kartın başlık (.card-title veya .fs-2) ve içerik (.card-text) yazılarını al[cite: 1, 2]
                const titleElement = card.querySelector(".card-title") || card.querySelector(".fs-2");
                const textElement = card.querySelector(".card-text");

                const titleText = titleElement ? titleElement.textContent.toLowerCase() : "";
                const bodyText = textElement ? textElement.textContent.toLowerCase() : "";

                // Eğer yazılan metin başlıkta veya içerikte geçiyorsa kartı göster, geçmiyorsa gizle
                if (titleText.includes(searchText) || bodyText.includes(searchText)) {
                    card.style.display = ""; // Varsayılan CSS durumuna döndür (görünür yap)
                } else {
                    card.style.display = "none"; // Kartı gizle
                }
            });
        });
    }
});