document.addEventListener('DOMContentLoaded', function() {
    const szczegolyPrzyciski = document.querySelectorAll('.szczegoly-button');
    const modal = document.getElementById('szczegoly-modal');
    const modalTytul = document.getElementById('modal-tytul');
    const modalOpis = document.getElementById('modal-opis');
    const modalCena = document.getElementById('modal-cena');
    const modalPaypalLink = document.getElementById('modal-paypal-link');

    szczegolyPrzyciski.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const nazwaProduktu = this.getAttribute('data-nazwa');
            const cenaProduktu = this.getAttribute('data-cena');

            // Zamiast modala, przekierowanie do zakupu.html
            window.location.href = `zakup.html?nazwa=${encodeURIComponent(nazwaProduktu)}&cena=${cenaProduktu}`;
            // Poniższy kod jest już niepotrzebny, bo przekierowujemy
            // modalTytul.textContent = 'Szczegóły produktu: ' + nazwaProduktu;
            // modalOpis.textContent = pobierzOpisProduktu(nazwaProduktu);
            // modalCena.textContent = cenaProduktu + " PLN";
            // const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amount=${cenaProduktu}&business=yourpaypalemail@example.com&item_name=${nazwaProduktu}&currency_code=PLN`;  // Zastąp yourpaypalemail@example.com
            // modalPaypalLink.href = paypalUrl;
            // modal.style.display = 'flex';
        });
    });

    function pobierzOpisProduktu(nazwa) {
        switch (nazwa) {
            case 'M-Dowód':
                return 'Kolekcjonerski wzór M-Dowodu.  Zawiera podstawowe dane.  Nie służy do identyfikacji.';
            case 'M-Dowód 2.0 Source code':
                return 'Kod źródłowy kolekcjonerskiego M-Dowodu 2.0.  Zawiera kod HTML, CSS i JavaScript. Ma charakter edukacyjny.';
            default:
                return 'Opis produktu';
        }
    }
});

// Pobranie parametrów z URL (jeśli przekierowano z index.js)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nazwaProduktu = urlParams.get('nazwa');
    const cenaProduktu = urlParams.get('cena');

    if (nazwaProduktu && cenaProduktu) {
        // Wyświetlenie informacji na stronie zakup.html
        const instrukcjaZakupu = document.querySelector('.container'); // Assuming the main container is the right place
        if (instrukcjaZakupu) {
            instrukcjaZakupu.innerHTML = `
                <h2>Jak Dokonać Zakupu</h2>
                <p>Aby dokonać zakupu, postępuj zgodnie z poniższą instrukcją:</p>
                <ol>
                    <li><strong>Wyślij e-mail na adres:</strong> <a href="mailto:no240we1@gmail.com">no240we1@gmail.com</a></li>
                    <li><strong>W treści e-maila podaj:</strong>
                        <ul>
                            <li>Nazwę produktu: <strong>${nazwaProduktu}</strong></li>
                            <li>Cenę produktu: <strong>${cenaProduktu} PLN</strong></li>
                        </ul>
                    </li>
                    <li><strong>Dołącz zrzut ekranu (screenshot)</strong> potwierdzenia dokonania płatności.</li>
                    <li>Po otrzymaniu Twojego e-maila i potwierdzenia płatności, wyślemy Ci zakupiony produkt.</li>
                </ol>
                <p><strong>Uwaga:</strong> Czas dostawy produktu jest nieokreślony. Dołożymy wszelkich starań, aby dostarczyć go jak najszybciej.  W razie problemów z dostawą, skontaktujemy się z Tobą w celu ustalenia dalszych kroków (np. zwrot pieniędzy).</p>
                <a href="index.html" class="button powrot-button">Powrót do strony głównej</a>
            `;
        }
    }
});