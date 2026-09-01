// 81 İl İçin Şehir Veri Deposu
const cityData = {
    "Adana": { plate: "01", region: "Akdeniz", info: "Taşköprü, Anavarza Antik Kenti ve kebabı ile meşhur tarihi Akdeniz şehrimizdir." },
    "Adıyaman": { plate: "02", region: "Güneydoğu Anadolu", info: "UNESCO Dünya Mirası Nemrut Dağı Dev Heykelleri ile ünlüdür." },
    "Afyonkarahisar": { plate: "03", region: "Ege", info: "Termal kaplıcaları, tarihi kalesi, sucuğu ve lokumuyla bilinir." },
    "Ağrı": { plate: "04", region: "Doğu Anadolu", info: "Türkiye'nin en yüksek dağı olan Ağrı Dağı ve İshak Paşa Sarayı'na ev sahipliği yapmaktadır." },
    "Amasya": { plate: "05", region: "Karadeniz", info: "Kral Kaya Mezarları, Şehzadeler Şehri unvanı ve elması ile ünlüdür." },
    "Ankara": { plate: "06", region: "İç Anadolu", info: "Türkiye Cumhuriyeti'nin başkenti, Anıtkabir ve Ankara Kalesi'nin bulunduğu merkezdir." },
    "Antalya": { plate: "07", region: "Akdeniz", info: "Kaleiçi, Aspendos, Düden Şelalesi ve dünyaca ünlü plajlarıyla turizmin başkentidir." },
    "Artvin": { plate: "08", region: "Karadeniz", info: "Borçka Karagöl, Maçahel Vadisi ve dik yamaçlı doğasıyla bilinen doğa cennetidir." },
    "Aydın": { plate: "09", region: "Ege", info: "Afrodisias Antik Kenti, Kuşadası ve inciri ile ünlüdür." },
    "Balıkesir": { plate: "10", region: "Marmara", info: "Ayvalık, Cunda Adası, Kazdağları ve Şeytan Sofrası ile bilinen iki denizli kenttir." },
    "Bilecik": { plate: "11", region: "Marmara", info: "Osmanlı İmparatorluğu'nun kurulduğu topraklar; Şeyh Edebali Türbesi buradadır." },
    "Bingöl": { plate: "12", region: "Doğu Anadolu", info: "Yüzen Adalar ve Y Yol Kayak Merkezi ile tanınır." },
    "Bitlis": { plate: "13", region: "Doğu Anadolu", info: "Nemrut Krater Gölü, Ahlat Selçuklu Mezarlığı ve tarihi Beş Minaresi ile bilinir." },
    "Bolu": { plate: "14", region: "Karadeniz", info: "Abant Gölü, Yedi Göller ve Gölcük Tabiat Parkı ile doğa harikası bir ilimizdir." },
    "Burdur": { plate: "15", region: "Akdeniz", info: "Salda Gölü (Türkiye'nin Maldivleri) ve Sagalassos Antik Kenti ile ünlüdür." },
    "Bursa": { plate: "16", region: "Marmara", info: "Ulu Camii, Kozahan, Uludağ Kayak Merkezi ve İskender Kebabı ile tarihi Osmanlı başkentidir." },
    "Çanakkale": { plate: "17", region: "Marmara", info: "Çanakkale Şehitliği, Gelibolu Yarımadası ve Truva Antik Kenti'ne ev sahipliği yapar." },
    "Çankırı": { plate: "18", region: "İç Anadolu", info: "Tarihi Yer Altı Tuz Şehri ve Ilgaz Dağları ile tanınır." },
    "Çorum": { plate: "19", region: "Karadeniz", info: "Hitit İmparatorluğu'nun başkenti Hattuşaş ve leblebisi ile bilinir." },
    "Denizli": { plate: "20", region: "Ege", info: "Pamukkale Travertenleri ve Hierapolis Antik Kenti ile dünyaca ünlüdür." },
    "Diyarbakır": { plate: "21", region: "Güneydoğu Anadolu", info: "Tarihi Diyarbakır Surları, Hevsel Bahçeleri ve On Gözlü Köprü buradadır." },
    "Edirne": { plate: "22", region: "Marmara", info: "Mimar Sinan'ın başyapıtı Selimiye Camii ve Kırkpınar Yağlı Güreşleri ile ünlüdür." },
    "Elazığ": { plate: "23", region: "Doğu Anadolu", info: "Tarihi Harput Kenti, Hazar Gölü ve Çayda Çıra oyunu ile bilinir." },
    "Erzincan": { plate: "24", region: "Doğu Anadolu", info: "Girlevik Şelalesi, Karanlık Kanyon ve tulum peyniri ile tanınır." },
    "Erzurum": { plate: "25", region: "Doğu Anadolu", info: "Çifte Minareli Medrese, Palandöken Kayak Merkezi ve Cağ Kebabı ile bilinir." },
    "Eskişehir": { plate: "26", region: "İç Anadolu", info: "Odunpazarı Evleri, Porsuk Çayı, lületaşı ve gelişmiş şehir kültürüne sahiptir." },
    "Gaziantep": { plate: "27", region: "Güneydoğu Anadolu", info: "Zeugma Mozaik Müzesi, baklavası, mutfağı ve tarihi bakırcılar çarşısıyla ünlüdür." },
    "Giresun": { plate: "28", region: "Karadeniz", info: "Giresun Adası, Kümbet Yaylası ve kaliteli fındığı ile bilinir." },
    "Gümüşhane": { plate: "29", region: "Karadeniz", info: "Karaca Mağarası, Tomara Şelalesi ve pestil-köme lezzeti ile tanınır." },
    "Hakkari": { plate: "30", region: "Doğu Anadolu", info: "Cilo Dağları, Sat Gölleri ve yüksek dağlık coğrafyasıyla bilinir." },
    "Hatay": { plate: "31", region: "Akdeniz", info: "Medeniyetler Şehri; Titus Tüneli, St. Pierre Kilisesi ve künefesiyle ünlüdür." },
    "Isparta": { plate: "32", region: "Akdeniz", info: "Gül ve lavanta bahçeleri, Eğirdir Gölü ile ünlüdür." },
    "Mersin": { plate: "33", region: "Akdeniz", info: "Cennet-Cehennem Obrukları, Kızkalesi ve tantunisi ile tanınır." },
    "İstanbul": { plate: "34", region: "Marmara", info: "Ayasofya, Topkapı Sarayı, İstanbul Boğazı ve 3 imparatorluğa başkentlik yapmış metropolümüzdür." },
    "İzmir": { plate: "35", region: "Ege", info: "Efes Antik Kenti, Saat Kulesi, Alsancak Kordon ve Çeşme ile Ege'nin incisidir." },
    "Kars": { plate: "36", region: "Doğu Anadolu", info: "Ani Ören Yeri, Çıldır Gölü ve Doğu Ekspresi varış noktasıdır." },
    "Kastamonu": { plate: "37", region: "Karadeniz", info: "Ilgaz Dağı, Valla Kanyonu, tarihi konakları ve sarımsağı ile bilinir." },
    "Kayseri": { plate: "38", region: "İç Anadolu", info: "Erciyes Dağı Kayak Merkezi, pastırması, mantısı ve Hunat Hatun Külliyesi buradadır." },
    "Kırklareli": { plate: "39", region: "Marmara", info: "Dupnisa Mağarası ve İğneada Longoz Ormanları ile doğa cennetidir." },
    "Kırşehir": { plate: "40", region: "İç Anadolu", info: "Ahi Evran kültürü, Cacabey Medresesi ve ozanlar diyarı olarak bilinir." },
    "Kocaeli": { plate: "41", region: "Marmara", info: "Kartepe Kayak Merkezi, Maşukiye ve sanayi altyapısıyla tanınır." },
    "Konya": { plate: "42", region: "İç Anadolu", info: "Mevlana Müzesi, Çatalhöyük ve tarihi Selçuklu mirasına ev sahipliği yapan yüzölçümü en büyük ilimizdir." },
    "Kütahya": { plate: "43", region: "Ege", info: "Çini sanatı, Aizanoi Antik Kenti ve tarihi Kütahya Kalesi ile meşhurdur." },
    "Malatya": { plate: "44", region: "Doğu Anadolu", info: "Dünyaca ünlü kaysısı, Arslantepe Höyüğü ve Battalgazi tarihi ile bilinir." },
    "Manisa": { plate: "45", region: "Ege", info: "Spil Dağı, Mesir Macunu festivali ve Sardes Antik Kenti ile ünlüdür." },
    "Kahramanmaraş": { plate: "46", region: "Akdeniz", info: "Dondurması, biberi ve Milli Mücadele'deki 'Kahraman' unvanlı direnişiyle bilinir." },
    "Mardin": { plate: "47", region: "Güneydoğu Anadolu", info: "Taş evleri, Deyrulzafaran Manastırı ve Kasımiye Medresesi ile masalsı bir şehirdir." },
    "Muğla": { plate: "48", region: "Ege", info: "Bodrum, Fethiye, Ölüdeniz, Marmaris ve Datça gibi Türkiye'nin en popüler tatil beldelerine sahiptir." },
    "Muş": { plate: "49", region: "Doğu Anadolu", info: "Muş Ovası laleleri ve tarihi Murat Köprüsü ile tanınır." },
    "Nevşehir": { plate: "50", region: "İç Anadolu", info: "Kapadokya bölgesi, Peri Bacaları, sıcak hava balonları ve yeraltı şehirleriyle dünya markasıdır." },
    "Niğde": { plate: "51", region: "İç Anadolu", info: "Aladağlar Milli Parkı, Gümüşler Manastırı ve elması ile tanınır." },
    "Ordu": { plate: "52", region: "Karadeniz", info: "Boztepe teleferiği, Çambaşı Yaylası ve fındık üretimi ile bilinir." },
    "Rize": { plate: "53", region: "Karadeniz", info: "Ayder Yaylası, Fırtına Deresi, çay bahçeleri ve Zilkale ile Karadeniz'in yeşil cennetidir." },
    "Sakarya": { plate: "54", region: "Marmara", info: "Sapanca Gölü, Taraklı tarihi konakları ve Acarlar Longozu ile ünlüdür." },
    "Samsun": { plate: "55", region: "Karadeniz", info: "19 Mayıs Milli Mücadele'nin başladığı meşale şehir; Bandırma Vapuru buradadır." },
    "Siirt": { plate: "56", region: "Güneydoğu Anadolu", info: "Veysel Karani Türbesi, Rasıl Hacar (Delikli Taş) ve büryan kebabı ile bilinir." },
    "Sinop": { plate: "57", region: "Karadeniz", info: "Tarihi Sinop Cezaevi, Hamsilos Koyu ve Türkiye'nin en kuzey noktası (İnceburun) buradadır." },
    "Sivas": { plate: "58", region: "İç Anadolu", info: "Divriği Ulu Camii (UNESCO), Çifte Minareli Medrese ve Kongre Binası ile tarihi İç Anadolu şehridir." },
    "Tekirdağ": { plate: "59", region: "Marmara", info: "Tekirdağ köftesi, ayçiçeği tarlaları ve Uçmakdere paraşüt alanı ile ünlüdür." },
    "Tokat": { plate: "60", region: "Karadeniz", info: "Ballıca Mağarası, Taşhan ve meşhur Tokat Kebabı ile bilinir." },
    "Trabzon": { plate: "61", region: "Karadeniz", info: "Sümela Manastırı, Uzungöl, Atatürk Köşkü ve Hamsiköy sütlacı ile ünlüdür." },
    "Tunceli": { plate: "62", region: "Doğu Anadolu", info: "Munzur Vadisi Milli Parkı, Munzur Gözeleri ve doğa sporları ile bilinir." },
    "Şanlıurfa": { plate: "63", region: "Güneydoğu Anadolu", info: "Göbeklitepe (tarihin sıfır noktası), Balıklıgöl ve sıra geceleri ile Peygamberler Şehridir." },
    "Uşak": { plate: "64", region: "Ege", info: "Ulubey Kanyonu (dünyanın en uzun 2. kanyonu) ve Karun Hazineleri ile bilinir." },
    "Van": { plate: "65", region: "Doğu Anadolu", info: "Van Gölü, Akdamar Adası, Van Kalesi ve dünyaca ünlü Van kedisi ile tanınır." },
    "Yozgat": { plate: "66", region: "İç Anadolu", info: "Türkiye'nin ilk milli parkı olan Yozgat Çamlığı ve Roma Hamamı buradadır." },
    "Zonguldak": { plate: "67", region: "Karadeniz", info: "Türkiye'nin taş kömürü havzası, Gökgöl Mağarası ve emeğin başkentidir." },
    "Aksaray": { plate: "68", region: "İç Anadolu", info: "Ihlara Vadisi, Eğri Minare ve Sultanhanı Kervansarayı ile bilinir." },
    "Bayburt": { plate: "69", region: "Karadeniz", info: "Bayburt Kalesi ve Baksı Müzesi ile tanınır." },
    "Karaman": { plate: "70", region: "İç Anadolu", info: "Türkçenin başkenti; Karamanoğlu Mehmet Bey ve Hatuniye Medresesi ile bilinir." },
    "Kırıkkale": { plate: "71", region: "İç Anadolu", info: "Silah Sanayi Müzesi ve Çeşnigir Köprüsü ile tanınır." },
    "Batman": { plate: "72", region: "Güneydoğu Anadolu", info: "Tarihi Hasankeyf antik kenti ve petrol üretimi ile tanınır." },
    "Şırnak": { plate: "73", region: "Güneydoğu Anadolu", info: "Cudi Dağı ve Mem u Zin Türbesi (Cizre) ile bilinir." },
    "Bartın": { plate: "74", region: "Karadeniz", info: "Amasra antik liman kenti, İnkumu plajı ve ahşap yat yapımı ile ünlüdür." },
    "Ardahan": { plate: "75", region: "Doğu Anadolu", info: "Ardahan Kalesi ve Şeytan Kalesi ile sınır kentimizdir." },
    "Iğdır": { plate: "76", region: "Doğu Anadolu", info: "Doğu'nun Çukurovası; pamuk yetişen mikroklima iklimi ve kayısısı ile ünlüdür." },
    "Yalova": { plate: "77", region: "Marmara", info: "Termal kaplıcaları, Yürüyen Köşk ve Çınarcık sahilleri ile bilinir." },
    "Karabük": { plate: "78", region: "Karadeniz", info: "UNESCO korumasındaki tarihi Safranbolu Evleri ve Yenice Ormanları buradadır." },
    "Kilis": { plate: "79", region: "Güneydoğu Anadolu", info: "Tarihi zeytinciliği, Kilis tavası ve katmeri ile tanınır." },
    "Osmaniye": { plate: "80", region: "Akdeniz", info: "Kastabala Antik Kenti, Karatepe-Aslantaş Açık Hava Müzesi ve yer fıstığı ile bilinir." },
    "Düzce": { plate: "81", region: "Karadeniz", info: "Güzeldere ve Aydınpınar Şelaleleri, Samandere Tabiat Anıtı ile doğa harikasıdır." }
};

document.addEventListener('DOMContentLoaded', () => {
    const paths = document.querySelectorAll('#svg-turkey path');
    const cityNameElement = document.getElementById('city-name');
    const cityInfoElement = document.getElementById('city-info');
    
    let selectedCity = null;

    function getCityName(element) {
        const parentG = element.closest('g');
        return element.getAttribute('data-city-name') || 
               (parentG ? parentG.getAttribute('data-city-name') : null) || 
               element.getAttribute('id') || 
               (parentG ? parentG.getAttribute('id') : null);
    }

    function resetCard() {
        if (cityNameElement && cityInfoElement) {
            cityNameElement.innerText = "Şehir Seçiniz";
            cityInfoElement.innerText = "Şehir hakkında bilgi burada görüntülenecek.";
        }
    }

    paths.forEach(path => {
        // 1. FARE ŞEHİR ÜZERİNE GELDİĞİNDE (HOVER)
        path.addEventListener('mouseenter', function () {
            if (selectedCity) return; // Zaten bir şehir seçiliyse kartı değiştirme

            const cityName = getCityName(this);
            if (cityName && cityNameElement && cityInfoElement) {
                cityNameElement.innerText = cityName;
                cityInfoElement.innerText = `${cityName} ili üzerinde geziniyorsunuz. Detayları görmek için tıklayın.`;
            }
        });

        // 2. FARE ŞEHİRDEN AYRILDIĞINDA (MOUSELEAVE)
        path.addEventListener('mouseleave', function () {
            if (!selectedCity) {
                resetCard();
            }
        });

        // 3. ŞEHRE TIKLANDIĞINDA (CLICK)
        path.addEventListener('click', function () {
            const cityName = getCityName(this);

            // AÇ-KAPAT (TOGGLE) MANTIĞI: Eğer zaten seçili olan şehre tekrar tıklandıysa seçimi İPTAL ET
            if (selectedCity === cityName) {
                selectedCity = null;
                document.querySelectorAll('#svg-turkey .active').forEach(el => el.classList.remove('active'));
                resetCard();
                return;
            }

            // Yeni bir şehre tıklandıysa önce eski aktif sınıfları temizle
            document.querySelectorAll('#svg-turkey .active').forEach(el => el.classList.remove('active'));

            // Tıklanan şehre ve bağlı olduğu grubuna 'active' sınıfı ekle
            this.classList.add('active');
            if (this.closest('g')) {
                this.closest('g').classList.add('active');
            }

            selectedCity = cityName;

            if (cityName && cityNameElement && cityInfoElement) {
                cityNameElement.innerText = cityName;
                
                if (cityData[cityName]) {
                    const data = cityData[cityName];
                    cityInfoElement.innerHTML = `
                        <div style="margin-top: 10px; line-height: 1.8;">
                            <p><strong>Plaka Kodu:</strong> ${data.plate}</p>
                            <p><strong>Bölge:</strong> ${data.region}</p>
                            <p><strong>Özet Bilgi:</strong> ${data.info}</p>
                            <p style="margin-top: 12px; font-size: 12px; color: #888;"><em>(Seçimi iptal etmek için şehre tekrar tıklayın)</em></p>
                        </div>
                    `;
                } else {
                    cityInfoElement.innerText = `${cityName} şehri seçildi. Bilgi eklenmedi.`;
                }
            }
        });
    });
});