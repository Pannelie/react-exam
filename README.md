# VG uppgift

Du skall välja ut ytterligare 3 st externa bibliotek, som vi inte gått igenom i klassen och som du läser på om och implementerar i din applikation. Utöver detta så beskriver du i din README.md-fil, hur dessa hookar/bibliotek fungerar, samt varför du tycker att de passar just din applikation. För VG måste du även ha en god struktur på din applikation, med god uppdelning i Pages och Komponenter. Utöver det så måste ni inte dela upp koden i en massa egna custom hooks och dylikt, även om det såklart är tillåtet om man vill det.

- Lottie React

- Swiper

- Fontawesome

- React-barcode
  Detta är ett extern bibliotek för att generera fram streckkoder med SVG. Den baserar sitt utseende på det value du skickar med. Är det unikt så kommer även det visuella utseendet vara unikt. Detta passade väldigt bra in i detta projekt eftersom jag behövde streckkod som komplement till mina olika biljetter, och jag ville ha ett riktigt syfte med streckkoden, inte bara ett hårdkodad element eller bild. Med hjälp av react-barcode kunde jag skicka med value (obligatoriskt) för att ge den en riktig funktion.

  Det gäller alltså att ha koll på vilket värde jag skickar in. Jag hade en fallgrop där jag skickade in ticket.id i första hand, vilket resulterade i att mina streckkoder skiljde sig åt mellan de olika eventen, men inte mellan biljetterna inuti samma event eftersom de då hade samma value. Istället valde jag då att skicka in mitt ticket.ticketId som jag genererat fram bestående av olika siffror och stora bokstäver. Det innebär alltså att alla värden blir unika, och så även deras streckkoder.

  Andra möjligheter med react-barcode är även att skicka med format, displayValue, background
