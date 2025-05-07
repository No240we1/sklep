```javascript
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

            modalTytul.textContent = 'Szczegóły produktu: ' + nazwaProduktu;
            modalOpis.textContent = pobierzOpisProduktu(nazwaProduktu);
            modalCena.textContent = cenaProduktu + " PLN";
            const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&amount=${cenaProduktu}&business=yourpaypalemail@example.com&item_name=${nazwaProduktu}&currency_code=PLN`;  // Zastąp yourpaypalemail@example.com
            modalPaypalLink.href = paypalUrl;
            modal.style.display = 'flex';
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
```
