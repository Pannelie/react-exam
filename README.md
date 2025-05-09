# VG uppgift

Du skall välja ut ytterligare 3 st externa bibliotek, som vi inte gått igenom i klassen och som du läser på om och implementerar i din applikation. Utöver detta så beskriver du i din README.md-fil, hur dessa hookar/bibliotek fungerar, samt varför du tycker att de passar just din applikation. För VG måste du även ha en god struktur på din applikation, med god uppdelning i Pages och Komponenter. Utöver det så måste ni inte dela upp koden i en massa egna custom hooks och dylikt, även om det såklart är tillåtet om man vill det.

- **Allmän lärdom**
  Jag har läst mig till att majoriteten, nästintill alla externa bibliotek, har egna css filer. Vilket ibland kan ställa till saker när man ska justera utseendet till sitt egna projekt. Många gånger undrade jag varför jag inte fick flex, font-size eller color att fungera. Men när jag inspekterade med dev-tools kunde jag komma fram till att en annan class då alltid var högre i hierarkin. För att komma förbi den tröskeln blev lösningen vid de tillfällena att använda !important för att prioritera min egen styling. Om jag är väldigt specifik i min CSS selektor så går det att lösa även på detta sätt, nog en bättre lösning på längre sikt.

- **Lottie React**
  På min error page ville jag ha en animation för att förtydliga för användaren att något gått fel (kompletterat med text). Lottie React var för min del då ett bra alternativ då det erbjuder animeringar i JSON format. Eftersom det är just JSON så är filstorleken mycket mindre jämfört med video eller GIF samt att de är vektorbaserade vilket för att kvaliten inte förloras när man ökar eller minskar skärmstorlek. De blir med andra ord inte pixliga.

**Det går även att skicka med olika props såsom:**

- animationData: JSON data som definierar Lottie animationen, den är obligatorisk.
- autoplay: gör att animationen startar automatiskt när den laddas.
- loop: animationen upprepas om och om igen, loopas.
- speed: styr hastigheten. 1 är normal hastighet, ju högre siffra desto snabbare spelas animationen.

Jag valde endast att ha Lottie på min error page, men jag hade även kunnat komplettera min app med att ha animationer vid t.ex. sidladdningar eller när min söklista inte genererade resultat.

- **Swiper**
  Jag fick användning för Swiper för att visuellt visa upp köpta biljetter. Den gjorde det visuellt snyggt för användaren att tydligt se aktuell biljett samt enkelt både swipa och klicka sig fram till nästa biljett. Swiper är huvudkomponenten för min karusell och swiperslide som jag också importerade är de enskilda slides som mina tickets ligger unuti. Till dessa finns också css filer, en för swiper i stort och en för min navigation modul. Utan dessa css filer blir det väldigt svårt att få till funktionaliteten, styling och mina knappar i navigation kommer inte heller fungera som de ska. Viktigt att inte glömma det.

  **Vanliga props:**

  - slidesPerView: Standardvärd är 1, en man väljer här hur många slides som ska visas samtidigt. Det går med både heltal och decimalform såsom 1.5
  - spacebetween: Standarvärde är 0 pixlar. Den bestämmer avståndet till nästa slide. Om jag hade haft slidesPerView={2} så hade mina slides visats kant i kant med värdet 0 på spaceBetween.
  - loop: Den loopar tillbaka till start efter att sista slide har visats.
  - Navigation: Gör att man kan lägga till navigeringspilar för att byta slide. Man kan koppla en specifik knapp och ge css styling genom att skriva prevEl: ".swiper-button-prev" och nextEl: ".swiper-button-next". Det är en inbyggd inställning för navigation.
  - grabCursor: Om den är true så förvandlas muspekaren till en hand när det går att dra swipern.
  - speed={300}: Standardvärdet är 300ms vilket innebär att jag inte behöver skriva ut speed om jag nu inte vill ha en annan hastighet. Ju högre siffra desto snabbare byts min slide till nästa.

- **Fontawesome**
  Jag fick användning för fontAwesomes bibliotek när jag behövde ikoner till min app. Jag villa ha det för en visuellt tydlig navigering där en icon representerade var jag befann mig. t.ex. ett hus till homepage och en biljett för att se mina köpte biljetter på ticketpage. Jag fick även användning för ikoner när jag ska boka biljetter med - och + icon, samt bekräftelse checkmark på event page när count överensstämmer med vad som finns i min cart. Just för att göra det extra tydligt för användaren vad som sker.

  För att kunna använda fontawesome behöver man först installera grundpaketet @fortawesome/react-fontawesome som är en komponent just för att kunna rendera ikoner. Sedan kompletterar man med t.ex. @fortawesome/free-solid-svg-icons beroende på vad det är för typ av ikoner man vill använda- jag ville ha gratis solid ikoner.

Det som är bra med detta bibliotek är att de är vektorbaserade, vilket gör att de håller sin snygga form med bra skärpa oavsett skärmstorlek.

**Exempel på props för fontawesome:**

- Icon: Obligatoriskt, definierar vilken ikon som ska användas.
- Size: Som namnet, bestämmer storlek. Kan benämnas som i t.ex. xs (extrasmall), 2x(2gånger så stor) eller 10px.
- Color: Bestämma färg, om man inte vill blanda in CSS.
- spin: gör att ikonen roterar
- pulse: gör att ikonen får en pulserande effekt
- flip: Vänder den antingen horisontellt eller vertikalt . T.ex. flip="horizontal"

- **React-barcode**
  Detta är ett extern bibliotek för att generera fram streckkoder med SVG. Den baserar sitt utseende på det value du skickar med. Är det unikt så kommer även det visuella utseendet vara unikt. Detta passade väldigt bra in i detta projekt eftersom jag behövde streckkod som komplement till mina olika biljetter, och jag ville ha ett riktigt syfte och funktion med streckkoden, inte bara ett hårdkodad element eller bild.

  Det gäller att ha koll på vilket värde jag skickar in. Jag hade en fallgrop där jag skickade in ticket.id i första hand, vilket resulterade i att mina streckkoder skiljde sig åt mellan de olika eventen, men inte mellan biljetterna inuti samma event eftersom de då hade samma value. Istället valde jag då att skicka in mitt ticket.ticketId som jag genererat fram bestående av olika siffror och stora bokstäver. Det innebär alltså att alla värden blir unika, och så även deras streckkoder.

  **Exempel på props:**

- Value: (obligatoriskt) Det string värde jag skickat med, som hjälper med generera unik barcode.
- format: bestämmer vilken typ av streckkod som ska genereras, t.ex. "CODE128" (som är standard och stödjer både bokstäver och siffror), "EAN13", "UPC" etc.
- background -kan välja färg eller t.ex. transparent
- height och width: bestämmer höjd och bredd
- displayValue={true}: Visar upp det stringvärde jag skickat med. Det gör att man även kan komma åt det text-element som används inom den SVG:n. För att styla detta i sin tur kan man inte bara styla direkt på min barcode via dess className, utan man måste rikta in sig specifikt på text-elementet. T.ex. .ticket_barcode text. Och även om det är en text så behövs "fill" istället för "color" eftersom den fortfarande är del av en SVG-fil.
