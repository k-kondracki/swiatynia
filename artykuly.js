/* KATALOG POMYSŁÓW – treści artykułów
   Jeden artykuł = jeden blok. Nowy artykuł: skopiuj blok, zmień pola i dopisz go na końcu listy.

   id          – nazwa w adresie strony i w nazwach ilustracji (małe litery, bez polskich znaków, z łącznikami)
   etap        – doswiadczenie | refleksja | teoria | pragmatyka
   tytul       – tytuł artykułu
   nowy: true  – napis „Nowe” na karcie i miejsce na początku katalogu (usunąć, gdy artykuł przestaje być nowością)
   seria, czesc – tylko artykuły wieloczęściowe: wspólna nazwa serii i numer części
   lead        – zajawka na karcie i pierwszy akapit artykułu (ok. 300 znaków)
   ilustracja  – img/artykul-[id].jpg (1536 × 640 px)
   karta       – img/artykul-[id]-karta.jpg (564 × 352 px)
   pdf         – plik do pobrania (w folderze pliki); przycisk pojawia się w miejscu znacznika <!--PDF--> w treści
   pdfGotowy: true – plik jest już w folderze pliki (bez tego przycisk się nie wyświetla)
   literatura  – lista pozycji „Literatura cytowana”; odwołania w tekście w nawiasie: (1), (2)…
   tresc       – dalsza część tekstu: <p>, <h2>, <ul><li>, <ol class="pytania"><li>, <strong>, <a href="#id">
*/
window.ARTYKULY = [
{
  id: "stopklatka",
  etap: "doswiadczenie",
  tytul: "Stopklatka – chwila namysłu w środku gry",
  lead: "Zdarza się, że zespół wchodzi w ślepą uliczkę i z każdą minutą oddala się od celu. Trener, który to dostrzeże, może sięgnąć po stopklatkę. Krótka pauza daje graczom oddech i dystans, a pytania trenera pomagają im samodzielnie obrać nowy kierunek. Po wznowieniu gry zespół wdraża własne pomysły na korektę.",
  ilustracja: "img/artykul-stopklatka.jpg",
  karta: "img/artykul-stopklatka-karta.jpg",
  tresc: `
<p>Stopklatka to technika zaczerpnięta z dramy, gdzie oznacza zatrzymanie akcji w znaczącym momencie, aby przyjrzeć się wydarzeniu z bliska. W Starożytnej Świątyni stopklatka zachowuje tę logikę: trener zatrzymuje grę i czas, a zespół, zawieszony w środku narady, przygląda się temu, co dzieje się w grupie i dokąd zmierza jej działanie.</p>
<h2>Kiedy sięgnąć po stopklatkę</h2>
<p>Gracze pochłonięci zadaniem i presją czasu rzadko sami dostrzegają, że rozmowa coraz mniej przybliża ich do celu. Trener patrzy na naradę z zewnątrz i widzi to znacznie wcześniej. Sygnałem ślepej uliczki może być na przykład to, że:</p>
<ul><li>rozmowa krąży wokół tych samych wątków i niewiele z niej wynika,</li><li>kilka rozmów toczy się naraz, a informacje rozpraszają się między nimi,</li><li>zespół trzyma się pomysłu, który przestał prowadzić do celu,</li><li>część graczy milknie, a informacje z ich kafli zostają poza rozmową,</li><li>koniec narady się zbliża, a zespół wciąż szuka planu działania.</li></ul>
<p>Stopklatka jest możliwością, a nie stałym elementem gry. Trener waży moment interwencji: zespół, który zaczyna sam wychodzić z impasu, zyska więcej na samodzielnym przełomie. W trakcie jednej narady trener może sięgnąć po stopklatkę więcej niż raz.</p>
<h2>Przebieg stopklatki</h2>
<p>Trener zatrzymuje grę i czas na zegarze aplikacji. Czas stopklatki pozostaje poza czasem gry, a zasady obowiązują dalej – kafle pozostają zakryte.</p>
<p>Pytania trenera dotyczą procesu, a nie treści zadania. Pomagają zespołowi zobaczyć, jak pracuje i dokąd zmierza, a odkrycie rozwiązania zostawiają graczom. Przykładowe pytania:</p>
<ul><li>Co się u Was teraz dzieje?</li><li>Dokąd prowadzi Was ta rozmowa?</li><li>Co przybliża Was do celu?</li><li>Czyje informacje jeszcze nie wybrzmiały?</li><li>Co zmieniacie w kolejnych minutach?</li></ul>
<p>Odpowiedzi należą do graczy. Trener słucha, dopytuje i dba o to, by rozmowa dotyczyła sposobu pracy zespołu.</p>
<p>Stopklatka kończy się, gdy zespół sformułuje jeden lub dwa konkretne pomysły na korektę. Trener uruchamia wtedy czas i gra toczy się dalej. Stopklatka jest krótka – jej wartość polega na tym, że zespół wraca do gry z nową perspektywą i świeżo ustalonym kierunkiem.</p>
<h2>Po wznowieniu gry</h2>
<p>Trener obserwuje, czy ustalenia przekładają się na działanie, jak długo się utrzymują i kto ich pilnuje. Zdarza się, że po kilku minutach zespół wraca do dawnych nawyków – to również cenny materiał.</p>
<p>W trakcie omówienia stopklatka dzieli naradę na odcinki, które zespół może porównać: jak pracował przed zatrzymaniem, a jak po nim. Rozmowa o tym, co zmieniło zatrzymanie i które ustalenia zadziałały, otwiera drogę do pytania o codzienną pracę: w jakich momentach zespół zatrzymuje się, aby sprawdzić kierunek swojego działania?</p>
`
},
{
  id: "korekta-kursu",
  etap: "doswiadczenie",
  tytul: "Korekta kursu – dogrywka po naradzie",
  lead: "Bywa, że czas mija, a mozaika pozostaje niedokończona. Trener może wtedy zarządzić dogrywkę. Zespół wraca do narady, przygląda się swojej strategii i uzgadnia jej korektę, a potem znów przystępuje do działania. Grupa sprawdza w praktyce własne wnioski i kończy grę z doświadczeniem skutecznej współpracy.",
  ilustracja: "img/artykul-korekta-kursu.jpg",
  karta: "img/artykul-korekta-kursu-karta.jpg",
  tresc: `
<p>Doświadczenie korekcyjne to pojęcie zaczerpnięte z psychoterapii. Oznacza ponowne zmierzenie się, w korzystniejszych warunkach, z sytuacją, która wcześniej zakończyła się niepowodzeniem – tak, by nowe przeżycie zmieniło jej znaczenie. W Starożytnej Świątyni taką sytuację tworzy dogrywka. To nie jest nowa rozgrywka, lecz ciąg dalszy tej samej: ten sam zespół, te same kafle i to samo zadanie, tym razem z wnioskami z pierwszego podejścia.</p>
<h2>Kiedy sięgnąć po dogrywkę</h2>
<p>Porażka bywa źródłem cennych wniosków, a zarazem wyraźnie obniża dynamikę i nastrój zespołu. Gracze kończą grę z poczuciem niedosytu, a omówienie łatwo skupia się na tym, czego zabrakło. Tymczasem grupa, aby skutecznie się uczyć, potrzebuje sukcesu – takiego, który wynika z jej własnych wniosków.</p>
<p>Dogrywka daje zespołowi okazję, by od razu sprawdzić te wnioski w działaniu. W obrębie jednej gry zamyka się pełna pętla: doświadczenie, refleksja, korekta i ponowne działanie. Trener nie prowadzi zespołu do wyniku – stwarza warunki, w których zespół sam zmienia sposób pracy i widzi efekt tej zmiany. Dogrywka jest możliwością, a nie stałym elementem gry. O tym, czy po nią sięgnąć, decyduje trener, biorąc pod uwagę cel szkolenia i to, co wydarzyło się w pierwszym podejściu.</p>
<h2>Przebieg dogrywki</h2>
<p>Kafle wracają do graczy, którzy mieli je w rękach na początku gry, a zespół rozpoczyna naradę korekcyjną. Jej długość trener ustala według własnego wyczucia – zwykle wystarcza do dziesięciu minut. Zespół z doświadczeniem pierwszego podejścia dochodzi do ustaleń znacznie szybciej, a to tempo samo w sobie bywa dla graczy zaskoczeniem. Pytania trenera kierują uwagę na sposób pracy:</p>
<ul><li>Co w pierwszym podejściu przybliżyło Was do celu?</li><li>W którym momencie plan przestał być wspólny?</li><li>Czyje informacje dotarły do zespołu za późno?</li><li>Co zmieniacie w sposobie rozmowy i podejmowania decyzji?</li></ul>
<p>Po uzgodnieniu korekty zespół ponownie przystępuje do realizacji, na tych samych zasadach co za pierwszym razem.</p>
<p>Zwykle zespół zna już wtedy kluczową zasadę układu. Dogrywka zachowuje jednak pełny sens, bo istotą gry jest porozumiewanie się, a nie samo zadanie. Ciężar pracy przesuwa się z odkrywania na uzgodnienie planu i przekazanie go tak, by każdy gracz wiedział, co robi w realizacji. Właśnie tę umiejętność zespół ćwiczy.</p>
<h2>Po dogrywce</h2>
<p>W trakcie omówienia zespół porównuje oba podejścia: co zmienił w sposobie pracy, ile czasu potrzebował na ustalenia, co pozwoliło mu porozumieć się sprawniej i jaki przyniosło to efekt. Rozmowa o tym, które wnioski zadziałały od razu, prowadzi do pytania o codzienną pracę: jak szybko zespół zamienia wnioski z niepowodzenia w zmianę działania?</p>
`
},
{
  id: "ilu-graczy",
  etap: "doswiadczenie",
  tytul: "Ilu graczy wokół planszy?",
  lead: "Starożytną Świątynię można rozegrać zarówno w kameralnym gronie, jak i w zespole ponad dwudziestoosobowym. Dynamika pracy i towarzyszące jej zjawiska psychologiczne wyglądają inaczej w małej, a inaczej w większej grupie. Ta wiedza pozwala trenerowi dopasować prowadzenie gry do potrzeb zespołu.",
  ilustracja: "img/artykul-ilu-graczy.jpg",
  karta: "img/artykul-ilu-graczy-karta.jpg",
  literatura: [
    "Fay, N., Garrod, S., Carletta, J. (2000). Group discussion as interactive dialogue or as serial monologue: The influence of group size. Psychological Science, 11(6), 481–486.",
    "Latané, B., Williams, K., Harkins, S. (1979). Many hands make light the work: The causes and consequences of social loafing. Journal of Personality and Social Psychology, 37(6), 822–832.",
    "Williams, K., Harkins, S., Latané, B. (1981). Identifiability as a deterrent to social loafing: Two cheering experiments. Journal of Personality and Social Psychology, 40(2), 303–311."
  ],
  tresc: `
<p>Liczba graczy zmienia w tej grze jednocześnie dwie rzeczy: ilość informacji w rękach jednej osoby i sposób, w jaki toczy się rozmowa. Przy siedmiu graczach każdy ma trzy kafle, przy dwudziestu jeden – jeden. Im więcej osób przy stole, tym mniejsza część wiedzy przypada na jednego gracza i tym większym wyzwaniem staje się utrzymanie jednej, wspólnej rozmowy.</p>
<h2>Kameralne grono</h2>
<p>W grupie od sześciu do ośmiu osób każdy gracz ma od dwóch do czterech kafli, czyli sporą część wiedzy zespołu, a wszyscy uczestniczą w jednej rozmowie. Badanie porównujące dyskusje w grupach pięcio- i dziesięcioosobowych wykazało, że w mniejszej grupie rozmowa ma charakter dialogu: na zdanie uczestników najbardziej wpływają osoby, z którymi wymieniają najwięcej wypowiedzi (1). Przy planszy sprzyja to budowaniu wspólnego języka symboli przez cały zespół. Zarazem każdy gracz niesie dużą część zadania, więc jego wyjście z rozmowy od razu odbija się na tempie pracy zespołu.</p>
<h2>Duży stół</h2>
<p>W tym samym badaniu dyskusja w grupie dziesięcioosobowej przypominała serię monologów, a poglądy uczestników zbliżały się do zdania osoby, która mówiła najwięcej (1). Badanie dotyczyło wymiany opinii, a nie zadania z rozproszoną informacją, jednak podobny mechanizm bywa widoczny przy dużym stole: rozmowę prowadzi kilka osób, część graczy głównie słucha, a obok głównego wątku powstają mniejsze rozmowy.</p>
<p>Gra ma tu istotny walor: nie da się w niej schować. W pracy grupowej wkład pojedynczej osoby często słabnie, gdy ginie we wspólnym wyniku – to zjawisko nazywane próżniactwem społecznym (2). Wyraźnie maleje ono jednak, gdy wkład każdego da się zidentyfikować (3). W Starożytnej Świątyni każdy kafel jest niezbędny, a w realizacji każdy gracz układa swój kafel sam. Milczący gracz trzyma informację, bez której mozaika nie powstanie. Otwarta pozostaje kwestia, w którym momencie ta informacja trafi do rozmowy i kto o nią zapyta.</p>
<h2>Prowadzenie gry a liczebność grupy</h2>
<p>Trener może dopasować prowadzenie do wielkości zespołu, na przykład:</p>
<ul><li>w kameralnym gronie śledzić każdego gracza i wychwycić moment, w którym ktoś wypada z rozmowy,</li><li>przy dużym stole sięgnąć po stopklatkę, gdy rozmowa rozpada się na kilka wątków,</li><li>w liczniejszej grupie wyznaczyć kilku obserwatorów, z których każdy śledzi część stołu albo wybrany obszar,</li><li>gdy grupa przekracza 21 osób, przeprowadzić dwie rozgrywki jednocześnie, przy dwóch stołach, z obserwatorem lub obserwatorami przy każdym z nich – uwaga trenera dzieli się wtedy między dwie narady.</li></ul>
<p>W trakcie omówienia liczebność grupy daje materiał do pytania o codzienną pracę: ile osób zespół zaprasza na swoje spotkania i kiedy służą one zbieraniu różnych perspektyw, a kiedy przekazaniu jednego, już ustalonego kierunku?</p>
`
},
{
  id: "obserwator",
  etap: "refleksja",
  tytul: "Spojrzenie z zewnątrz – rola obserwatora",
  lead: "Pod presją czasu emocje rosną z każdą minutą. Gracze tracą dystans do tego, co dzieje się w zespole. Obserwator śledzi rozgrywkę z zewnątrz i notuje konkretne zachowania. W trakcie omówienia jego chłodne spostrzeżenia spotykają się z gorącymi reakcjami graczy i pokazują zespołowi jego pracę w nowym świetle.",
  ilustracja: "img/artykul-obserwator.jpg",
  karta: "img/artykul-obserwator-karta.jpg",
  tresc: `
<p>Obserwator to rola wyznaczona przed rozpoczęciem gry. Zamiast kafli otrzymuje arkusz obserwacyjny albo instrukcję precyzującą jego rolę. Stoi poza rozgrywką i rejestruje to, co gracze zapamiętują wybiórczo, a często w zmienionej formie: treść wypowiedzi, sposób mówienia, zachowania niewerbalne, działania i interakcje między graczami.</p>
<h2>Co rejestruje obserwator</h2>
<p>Naczelną zasadą obserwatora jest oddzielanie obserwacji od interpretacji. Zapisuje fakty: kto, co, kiedy i w jaki sposób. Zamiast „Ania zdominowała naradę” notuje: „Ania zabrała głos czternaście razy, pozostali gracze od jednego do czterech razy”. Obserwacja może objąć pięć obszarów:</p>
<ul><li><strong>wypowiedzi:</strong> opisy kafli, pytania, parafrazy, propozycje, odwołania do czasu,</li><li><strong>sposób mówienia:</strong> ton, tempo, głośność, pauzy, śmiech,</li><li><strong>zachowania niewerbalne:</strong> postawa, gesty, mimika, kontakt wzrokowy, ruch i dystans przy stole,</li><li><strong>działania:</strong> kto sięga po kafle, co i w jakiej kolejności układa na planszy,</li><li><strong>interakcje:</strong> kto do kogo się zwraca, kto komu odpowiada, kto wchodzi komu w słowo, czyje propozycje zespół podejmuje.</li></ul>
<p>Pierwsze cztery obszary opisują zachowania poszczególnych graczy, piąty – zależności między zachowaniami różnych osób. Przejawy emocji widać w sposobie mówienia i w zachowaniach niewerbalnych. Obserwator zwykle skupia się na jednym lub dwóch obszarach dobranych do celu szkolenia, a każdą notatkę opatruje minutą z zegara aplikacji. Szczególnie cenne są zapisy zestawiające słowa z tonem, gestem i działaniem, np. „mówi: zgoda, i odsuwa się od stołu”.</p>
<h2>Swoboda obserwatora</h2>
<p>Obserwator może poruszać się po sali, zmieniać perspektywę i przyglądać się temu, co gracze trzymają w dłoniach. Widzi więc także informacje, które nigdy nie trafiły do rozmowy. Jedyną granicą jest ingerencja: obserwator zachowuje milczenie i pozostaje poza interakcją z uczestnikami.</p>
<p>Przy większej grupie można wyznaczyć kilku obserwatorów, którzy dzielą się materiałem – według obszarów, faz gry albo uczestników – niekiedy każdy z nich śledzi konkretne osoby.</p>
<h2>Obserwator w trakcie omówienia</h2>
<p>Omówienie zaczynają gracze, dzieląc się wrażeniami. Potem głos zabiera obserwator. Przedstawia to, co zarejestrował, w kategoriach faktów. Może też wskazać informacje, które były przy stole, a zabrakło ich w rozmowie. Trener dba o to, by rozmowa pozostawała przy konkretnych wydarzeniach z gry. Swoimi spostrzeżeniami dzieli się na końcu – jego głos silnie modeluje wypowiedzi pozostałych osób, dlatego wybrzmiewa po wszystkich.</p>
<p>Najciekawsze są miejsca, w których zapis obserwatora rozchodzi się z tym, co zapamiętali gracze. Rozmowa o tych rozbieżnościach prowadzi do pytania o codzienną pracę: kiedy zespół dostaje spojrzenie z zewnątrz i co z nim robi?</p>
`
},
{
  id: "pytania-po-grze-1",
  etap: "refleksja",
  tytul: "Pytania po grze, część I – Zespół w działaniu",
  seria: "pytania-po-grze",
  czesc: 1,
  lead: "Omówienie po grze przynosi najwięcej, gdy pytania trafiają w to, czego grupa sama doświadczyła. Ten zestaw rozwija ogólne pytania z instrukcji o pięć obszarów: komunikację, współpracę, emocje, zaufanie i presję czasu. Trener wybiera z niego wątki, które w danej rozgrywce wybrzmiały najmocniej.",
  ilustracja: "img/artykul-pytania-po-grze-1.jpg",
  karta: "img/artykul-pytania-po-grze-1-karta.jpg",
  pdf: "pliki/pytania-po-grze-1.pdf",
  pdfGotowy: true,
  tresc: `
<p>Zestawy w tej części pozwalają pogłębić wybrany wątek rozmowy po grze. Każdy liczy siedem przykładowych pytań i stanowi pulę do wyboru, a nie scenariusz omówienia. Trener sięga po obszar odpowiadający celowi szkolenia i temu, co obserwował w trakcie gry.</p>
<p>Wiele pytań zaczyna się od formuły „Na ile…” albo „W jakim stopniu…”. Pokazuje ona, że zachowania i zjawiska w zespole są stopniowalne, a nie zero-jedynkowe. Pytania dotyczą zachowań i ich wpływu na pracę zespołu. Odpowiedzi stają się punktem wyjścia do dopytania o konkretne sytuacje z gry. Jeśli w grze uczestniczył <a href="#obserwator">obserwator</a>, jego zapis dostarcza faktów, które pomagają je przywołać.</p>
<h2>Komunikacja</h2>
<ol class="pytania"><li>Jak komunikowaliście się w trakcie gry i jak ten sposób komunikacji zmieniał się pod presją czasu?</li><li>Co pomagało Wam szybko przekazywać sobie ważne informacje, a co ten przepływ utrudniało?</li><li>W jaki sposób w grupie tworzyliście przestrzeń do przedstawiania spostrzeżeń i pomysłów przez poszczególne osoby?</li><li>Co robiliście, gdy pojawiały się różne interpretacje tej samej informacji albo różne pomysły na rozwiązanie?</li><li>W jaki sposób upewnialiście się, że pozostali rozumieją komunikat tak, jak zamierzała osoba, która go przekazywała?</li><li>Na ile zdarzało się, że ważna informacja została przeoczona, niezrozumiana albo nie dotarła do całej grupy? Co się wtedy działo?</li><li>Gdybyście mogli rozegrać grę jeszcze raz, co zmienilibyście w sposobie komunikowania się, żeby działać skuteczniej jako zespół?</li></ol>
<h2>Współpraca</h2>
<ol class="pytania"><li>W jaki sposób zespół łączył siły w dążeniu do wspólnego celu?</li><li>Co pomagało Wam łączyć wiedzę poszczególnych osób w jedną całość, a co to utrudniało?</li><li>W jaki sposób dbaliście o to, żeby wkład każdej osoby znalazł się we wspólnym planie?</li><li>Na ile pracowaliście jako jeden zespół, a na ile w mniejszych grupach? Jaki miało to wpływ na realizację zadania?</li><li>Jak wspieraliście się nawzajem w trakcie narady?</li><li>Na ile każdy z Was czuł się potrzebny w osiąganiu wspólnego celu? Co miało na to wpływ?</li><li>Na ile podczas realizacji zadania, gdy nie można już było rozmawiać, działaliście jak jeden zespół? Co miało na to wpływ?</li></ol>
<h2>Emocje</h2>
<ol class="pytania"><li>Jakie emocje towarzyszyły Wam na różnych etapach gry?</li><li>Którym momentom gry towarzyszyło największe napięcie? Co się wtedy działo?</li><li>Jak emocje wpływały na Wasze zachowanie w zespole: na sposób mówienia, słuchania, podejmowania decyzji?</li><li>Co pomagało Wam radzić sobie z trudnymi emocjami w trakcie gry?</li><li>Na ile i w jaki sposób emocje innych wpływały na Was?</li><li>Jakie reakcje wywołał w Was wynik gry? Co miało na nie wpływ?</li><li>Jak zmieniała się atmosfera w zespole w trakcie gry? Co miało na nią wpływ?</li></ol>
<h2>Zaufanie</h2>
<ol class="pytania"><li>Na ile polegaliście na informacjach przekazywanych przez innych, a na ile je sprawdzaliście?</li><li>Co budowało Wasze zaufanie do ustaleń zespołu, a co je osłabiało?</li><li>Na ile mieliście swobodę, by przyznać się do niepewności albo niewiedzy? Co miało na to wpływ?</li><li>Na ile w zespole było miejsce na pomyłki? Jak na nie reagowaliście?</li><li>W jakim stopniu w realizacji zadania mogliście polegać na tym, że pozostali zrobią swoją część zgodnie z planem? Co miało na to wpływ?</li><li>Jak zmieniało się zaufanie w zespole od początku do końca gry?</li><li>Jakie zachowania w zespole sprzyjały wzajemnemu zaufaniu?</li></ol>
<h2>Presja czasu</h2>
<ol class="pytania"><li>Na ile odczuwaliście presję czasu w trakcie narady? W których momentach najmocniej?</li><li>Jak zmieniały się Wasze priorytety w miarę upływu czasu?</li><li>W jaki sposób zespół kontrolował upływ czasu?</li><li>Jaki wpływ miały na Was informacje o upływającym czasie?</li><li>Co pomagało Wam efektywnie wykorzystać czas, a co sprawiało, że uciekał?</li><li>Na ile presja czasu wpływała na Wasze decyzje?</li><li>Jak odczuwaliście presję czasu podczas realizacji zadania i jak wpływała ona na Wasze działanie?</li></ol>
<h2>Fiszki do pobrania</h2>
<p>Zestawy z tej części są dostępne w pliku PDF w formie fiszek: pięć kart, po jednej na każdy obszar, na jednej stronie A4. Plik wystarczy wydrukować i pociąć wzdłuż zaznaczonych linii. W trakcie omówienia trener sięga po fiszkę, która jest mu w danej chwili najbardziej przydatna.</p>
<!--PDF-->
<p>Pytania o przywództwo, decyzje i organizację pracy zawiera <a href="#pytania-po-grze-2">druga część zestawu</a>.</p>
`
},
{
  id: "pytania-po-grze-2",
  etap: "refleksja",
  tytul: "Pytania po grze, część II – Przywództwo, decyzje i organizacja pracy",
  seria: "pytania-po-grze",
  czesc: 2,
  lead: "W klasycznym przebiegu gry nikt nie wyznacza lidera ani nie rozdziela ról. Przywództwo, podział pracy i sposób podejmowania decyzji wyłaniają się w trakcie narady. Druga część pytań po grze pomaga przyjrzeć się temu, jak zespół sam się zorganizował i jaki miało to wpływ na realizację zadania.",
  ilustracja: "img/artykul-pytania-po-grze-2.jpg",
  karta: "img/artykul-pytania-po-grze-2-karta.jpg",
  pdf: "pliki/pytania-po-grze-2.pdf",
  pdfGotowy: true,
  tresc: `
<p>Ta część obejmuje pięć obszarów: wyłanianie się liderów, przywództwo, role w zespole, strategię i podejmowanie decyzji oraz odpowiedzialność za wspólny wynik. Łączy je to, że struktura zespołu nie jest dana z góry, tylko powstaje na oczach uczestników. Pytania pomagają ją nazwać: od pierwszej przejętej inicjatywy po decyzję o przejściu do realizacji.</p>
<p>Trener dobiera wątki do tego, co działo się w danej rozgrywce, i nie musi wyczerpywać żadnego zestawu. Pytania o role dobrze uzupełnia <a href="#belbin">model ról zespołowych Belbina</a>, który pozwala nazwać zaobserwowane zachowania.</p>
<h2>Wyłanianie się liderów</h2>
<ol class="pytania"><li>Kto jako pierwszy przejął inicjatywę? Co konkretnie zrobił? Jaki miało to wpływ na pracę zespołu?</li><li>Wskażcie konkretne zachowania liderskie, które pojawiały się w dalszym przebiegu gry. Jaki miały wpływ na Waszą pracę? Po czym można było rozpoznać liderów?</li><li>W których momentach gry pojawiała się potrzeba, by ktoś wszedł w rolę lidera?</li><li>Jakie zachowania sprawiały, że zespół zaczynał podążać za daną osobą?</li><li>W jakim stopniu przywództwo skupiało się w rękach jednej osoby, a w jakim rozkładało się albo przechodziło z rąk do rąk?</li><li>Na ile zdarzało się, że kilka osób jednocześnie wchodziło w rolę lidera? Co się wtedy działo?</li><li>Jaka była Wasza gotowość do wejścia w rolę lidera? Co miało na nią wpływ?</li></ol>
<h2>Przywództwo</h2>
<ol class="pytania"><li>Jakie zachowania osób wchodzących w role liderskie pomagały zespołowi, a jakie utrudniały mu pracę?</li><li>Czego jako zespół potrzebowaliście od osób wchodzących w role liderskie w najtrudniejszych momentach?</li><li>Na ile w zespole było miejsce na inicjatywę osób mniej aktywnych w rozmowie? Co miało na to wpływ?</li><li>Na ile sposób kierowania pracą odpowiadał potrzebom zespołu na poszczególnych etapach gry?</li><li>Jak kierowanie pracą wpływało na tempo i atmosferę narady?</li><li>Jak przebiegało kierowanie pracą zespołu podczas realizacji zadania, gdy nie można było już rozmawiać?</li><li>Jakie style liderskie możecie wskazać w trakcie gry? Jakie zachowania były dla nich charakterystyczne?</li></ol>
<h2>Role w zespole</h2>
<ol class="pytania"><li>Jakie role spontanicznie pojawiły się w zespole w trakcie gry?</li><li>Jaką rolę przyjęliście w grze i na ile była to dla Was rola naturalna?</li><li>Które role były szczególnie potrzebne na poszczególnych etapach gry?</li><li>Jak role zmieniały się w trakcie gry?</li><li>Na ile zespół wykorzystał możliwości poszczególnych osób? Co miało na to wpływ?</li><li>Na ile role w zespole uzupełniały się nawzajem? Co z tego wynikało dla pracy zespołu?</li><li>Jak przyjmowane przez Was role wpływały na wynik zespołu?</li></ol>
<h2>Strategia i podejmowanie decyzji</h2>
<ol class="pytania"><li>Jak ustalaliście, w jaki sposób będziecie pracować nad zadaniem?</li><li>W jaki sposób zapadały w zespole decyzje? Na ile mieliście w nich swój udział?</li><li>Jak wybieraliście spośród różnych pomysłów na rozwiązanie? Co miało wpływ na ostateczny wybór?</li><li>Na ile zespół korygował przyjęty kierunek w trakcie narady? Co skłaniało Was do zmian?</li><li>Co pomagało Wam przejść od rozmowy do decyzji, a co ten moment opóźniało?</li><li>Na ile przed realizacją mieliście poczucie, że plan jest gotowy? Co miało na to wpływ?</li><li>Jak zespół zamknął naradę i zdecydował o przejściu do realizacji? Co miało na to wpływ?</li></ol>
<h2>Odpowiedzialność za wspólny wynik</h2>
<ol class="pytania"><li>Na ile czuliście się odpowiedzialni za wynik całego zespołu, a na ile za własną część zadania? Co miało na to wpływ?</li><li>Jakie zachowania w zespole świadczyły o trosce o wspólny wynik?</li><li>W jakim stopniu zespół dbał o to, żeby każde zadanie miało swojego opiekuna? Co temu sprzyjało?</li><li>Co robiliście, gdy dostrzegaliście, że coś może zagrozić wspólnemu wynikowi?</li><li>Na ile w trakcie realizacji zadania braliście odpowiedzialność za sprawy wykraczające poza Waszą część? Co miało na to wpływ?</li><li>Jak rozkładała się w zespole odpowiedzialność za przygotowanie planu, a jak za jego realizację?</li><li>Na ile wynik gry traktowaliście jako wspólne osiągnięcie całego zespołu? Co miało na to wpływ?</li></ol>
<h2>Fiszki do wydruku</h2>
<p>W pliku PDF na jednej stronie A4 mieści się pięć kart, każda z pytaniami do jednego obszaru. Po wydrukowaniu i rozcięciu karty można mieć przy sobie i wyjmować w chwili, gdy rozmowa schodzi na dany temat.</p>
<!--PDF-->
<p>Pytania o komunikację, współpracę, emocje, zaufanie i presję czasu zawiera <a href="#pytania-po-grze-1">pierwsza część</a>.</p>
`
},
{
  id: "belbin",
  etap: "teoria",
  tytul: "Kto kim jest w zespole – role Belbina",
  lead: "Role w Starożytnej Świątyni wyłaniają się spontanicznie, w trakcie wspólnej pracy nad zadaniem. Model ról zespołowych Belbina pozwala je nazwać i zobaczyć, co każda z nich wnosi do działania zespołu. Daje też trenerowi wspólny język do rozmowy z uczestnikami o tym, jak wykorzystali swoje mocne strony.",
  ilustracja: "img/artykul-belbin.jpg",
  karta: "img/artykul-belbin-karta.jpg",
  tresc: `
<p>Rola zespołowa to charakterystyczny sposób, w jaki człowiek zachowuje się w zespole i włącza w realizację zadania. Model opisuje dziewięć ról. Każda ma swoje mocne strony i dopuszczalne słabości, a najwięcej wnosi na określonym etapie pracy: od ustalenia celu, przez pomysły i plan, po doprowadzenie zadania do końca.</p>
<h2>Role przy planszy</h2>
<p>W naradzie role ujawniają się w konkretnych zachowaniach, na przykład:</p>
<ul><li><strong>Lokomotywa:</strong> na starcie nadaje tempo, przypomina o upływającym czasie i popycha zespół do działania,</li><li><strong>Koordynator:</strong> ustala kolejność opisywania kafli i rozdziela zadania między graczy,</li><li><strong>Kreator:</strong> proponuje nieoczywiste nazwy symboli i pierwsze hipotezy dotyczące układu,</li><li><strong>Poszukiwacz Źródeł:</strong> zwraca się do kolejnych graczy i zbiera informacje, których jeszcze nie słychać,</li><li><strong>Ewaluator:</strong> zestawia pomysły z opisami kafli i wskazuje, które się z nimi zgadzają,</li><li><strong>Dusza Zespołu:</strong> łagodzi napięcie, gdy rozmowa przyspiesza, i podtrzymuje dobrą współpracę,</li><li><strong>Implementer:</strong> zamienia ustalenia w plan układania, czyli kto, co i w jakiej kolejności,</li><li><strong>Perfekcjonista:</strong> w ostatnich minutach sprawdza, czy każdy kafel ma swoje miejsce w planie,</li><li><strong>Specjalista:</strong> pojawia się rzadko, bo zadanie wymaga współpracy, a nie wiedzy fachowej.</li></ul>
<p>Z tego samego powodu Specjalisty zabrakło w pierwotnych badaniach nad modelem – prowadzono je na ćwiczeniach symulacyjnych, podobnych do gry.</p>
<p>Niektóre role się ze sobą „gryzą”, jak Kreator, który mnoży pomysły, i Ewaluator, który chłodno je sprawdza. Na szczęście wchodzą na różnych etapach pracy. Gra pokazuje, na ile zespół płynnie przechodzi od jednego etapu do drugiego.</p>
<h2>Nawykowy sposób działania</h2>
<p>Wciągnięci w zadanie gracze wracają do swojego nawykowego sposobu działania, a więc do swoich ról. Nikt ich nie deklaruje – role widać w zachowaniach przy planszy. To walor gry: materiał do rozmowy o rolach pochodzi z działania, a nie z deklaracji.</p>
<h2>Model i test w omówieniu</h2>
<p>Wprowadzony po refleksji model porządkuje zarówno doświadczenie z gry, jak i to, co uczestnicy powiedzieli o nim w trakcie omówienia. Może mu towarzyszyć test Belbina. Jego wynik niczego nie przesądza. Uczestnik porównuje go z tym, jak sam siebie postrzega, oraz z tym, jak zachowywał się przy planszy – tu pomocny bywa zapis obserwatora. Warto sięgnąć także po dopuszczalne słabości ról. W grze widać je równie wyraźnie jak mocne strony: niecierpliwość Lokomotywy pod presją czasu czy ostrożność Ewaluatora, który długo wstrzymuje się z decyzją.</p>
<p>W codziennej pracy model pozwala zespołowi sprawdzić, kto naturalnie włącza się na poszczególnych etapach zadań i na którym etapie brakuje osoby o odpowiedniej roli – na przykład kogoś, kto dopilnuje szczegółów na finiszu.</p>
`
},
{
  id: "od-swiatyni-do-poniedzialku",
  etap: "pragmatyka",
  tytul: "Od świątyni do poniedziałku – pytania, które przenoszą doświadczenie do pracy",
  lead: "Gra kończy się ułożeniem mozaiki, ale jej prawdziwa wartość ujawnia się dopiero w codziennej pracy. Pytania pomostowe pomagają uczestnikom odnaleźć w codziennych sytuacjach to, czego doświadczyli przy planszy, i to, co w pracy działa inaczej. Dzięki temu wnioski z gry stają się konkretne i realne.",
  ilustracja: "img/artykul-od-swiatyni-do-poniedzialku.jpg",
  karta: "img/artykul-od-swiatyni-do-poniedzialku-karta.jpg",
  pdf: "pliki/od-swiatyni-do-poniedzialku.pdf",
  pdfGotowy: true,
  tresc: `
<p>Przeniesienie doświadczenia z gry do pracy najczęściej utyka w jednym z dwóch miejsc. Pierwsze to odpowiedzi ogólne, w rodzaju „musimy lepiej się komunikować”, które wszyscy przyjmują i nikt nie stosuje. Drugie to zamknięcie rozmowy zdaniem „w pracy jest inaczej”. Pytania pomostowe pomagają ominąć obie przeszkody: prowadzą od gry do konkretnych sytuacji z pracy i traktują różnice jako materiał do rozmowy.</p>
<h2>Podobieństwa – skąd to znamy?</h2>
<p>Pierwszy krok to odnalezienie w pracy sytuacji, które przypominają naradę. Odpowiedź ma nazwę: konkretny projekt, spotkanie albo zadanie.</p>
<ul><li>Jakie sytuacje z Waszej pracy przypominały Wam się w trakcie gry?</li><li>Na ile przebieg narady przypomina spotkania, w których uczestniczycie na co dzień?</li><li>Kiedy ostatnio w pracy towarzyszyło Wam poczucie podobne do tego z ostatnich minut narady?</li><li>W jakich sytuacjach w pracy decyzje zapadają podobnie jak dziś w trakcie narady?</li><li>Na ile podział ról, który wyłonił się w grze, przypomina podział ról w Waszym zespole?</li></ul>
<h2>Różnice – co w pracy wygląda inaczej?</h2>
<p>Zdanie „w pracy jest inaczej” nie zamyka rozmowy, tylko ją otwiera. Różnice pokazują, które wnioski przenoszą się wprost, a które wymagają dopasowania.</p>
<ul><li>Co w Waszej codziennej pracy wygląda inaczej niż w grze?</li><li>Na ile te różnice zmieniają dzisiejsze wnioski?</li><li>Czym dysponujecie w pracy, czego w grze nie mieliście, a co ułatwia porozumienie?</li><li>Co w warunkach Waszej pracy utrudnia stosowanie tego, co dziś okazało się pomocne?</li><li>Co z gry ma szansę zadziałać w pracy mimo tych różnic?</li></ul>
<h2>Mechanizmy – co działa niezależnie od sytuacji?</h2>
<p>Tu rozmowa przechodzi od konkretnego zachowania do sposobu działania, który sprawdza się w wielu sytuacjach – na przykład upewniania się, że wszyscy rozumieją ustalenia tak samo.</p>
<ul><li>Co miało największy wpływ na skuteczność Waszej pracy w grze?</li><li>Co sprawiało, że w grze współpraca nabierała tempa?</li><li>Jak nazwalibyście zasadę, która stoi za tym, co zadziałało?</li><li>Które z tych sposobów działania sprawdziłyby się także poza grą?</li><li>Jakie warunki muszą być spełnione, żeby ta zasada działała także w pracy?</li></ul>
<h2>Zasoby – co już działa?</h2>
<p>Gra pokazuje też zachowania, które zespół skutecznie stosuje na co dzień. Ich nazwanie wzmacnia zespół i daje punkt oparcia dla zmian.</p>
<ul><li>Które z zachowań pomocnych w grze są obecne w Waszej codziennej pracy?</li><li>Jakie mocne strony Waszego zespołu ujawniła dzisiejsza gra?</li><li>W jakich sytuacjach zawodowych Wasz zespół działa tak sprawnie jak wtedy, gdy w grze wszystko szło zgodnie z planem?</li><li>Co pomaga Wam utrzymać te zachowania na co dzień?</li><li>Na czym możecie się oprzeć, wprowadzając zmiany w swojej pracy?</li></ul>
<h2>Jak prowadzić rozmowę</h2>
<p>Odpowiedniki z pracy wskazują uczestnicy. Gdy pada odpowiedź ogólna, pomaga dopytanie o konkret: w którym projekcie, na którym spotkaniu i jakie zachowania miały wtedy znaczenie – co dokładnie zostało powiedziane albo zrobione. Kolejność części nie jest sztywna – po trudnej rozgrywce warto zacząć od zasobów. Rozmowa kończy się na zrozumieniu, co z gry przenosi się do pracy. Konkretne zobowiązania każdy uczestnik może zapisać w <a href="#karta-transferu">Karcie Transferu</a>.</p>
<h2>Karty z pytaniami</h2>
<p>Wszystkie pytania z tego tekstu są dostępne także w pliku PDF – po jednej karcie na każdą z czterech części. Wydrukowane na arkuszu A4 i rozcięte karty pozwalają trenerowi sięgnąć po pytania z tej części rozmowy, w której grupa akurat się znajduje.</p>
<!--PDF-->
`
},
{
  id: "karta-transferu",
  etap: "pragmatyka",
  tytul: "Karta Transferu – od wniosków do działania",
  lead: "Karta Transferu zamienia wnioski z gry w osobiste zobowiązanie. Każdy uczestnik zapisuje na niej swoje odkrycie, cel, pierwsze działanie i termin sprawdzenia efektów. Karta domyka szkolenie, a po kilku tygodniach staje się punktem wyjścia do rozmowy o tym, co uczestnicy wprowadzili w życie.",
  ilustracja: "img/artykul-karta-transferu.jpg",
  karta: "img/artykul-karta-transferu-karta.jpg",
  pdf: "pliki/karta-transferu.pdf",
  pdfGotowy: true,
  tresc: `
<p>Transfer to przeniesienie tego, czego uczestnik nauczył się na szkoleniu, do codziennej pracy. W Starożytnej Świątyni wnioski rodzą się w omówieniu: uczestnicy nazywają zachowania, które pomagały zespołowi, i te, które utrudniały mu pracę. Karta Transferu zatrzymuje te spostrzeżenia i przekłada je na konkretny krok.</p>
<h2>Cztery pola karty</h2>
<ul><li><strong>Moje odkrycie:</strong> jedno zachowanie, które uczestnik dostrzegł u siebie w trakcie gry, np. „Gdy powtarzam własnymi słowami to, co usłyszałem, szybciej dochodzimy do wspólnego rozumienia”,</li><li><strong>Mój cel:</strong> zachowanie, które uczestnik chce stosować w pracy, opisane pozytywnie i na tyle konkretnie, że łatwo sprawdzić, czy się pojawia, np. „Na spotkaniach projektowych podsumowuję ustalenia własnymi słowami”,</li><li><strong>Pierwsze działanie:</strong> najbliższa okazja do wprowadzenia celu w życie – konkretne spotkanie, rozmowa albo zadanie,</li><li><strong>Termin sprawdzenia:</strong> data, w której uczestnik wraca do karty i sprawdza, co się zmieniło.</li></ul>
<p>Wiele noworocznych postanowień nie dotrwa nawet do lutego. Zwykle dotyczą dużych zmian – „zacznę biegać”, „zmienię dietę” – które wymagają wielu wysiłków naraz, a efekty każą na siebie długo czekać. Mała zmiana, wprowadzana konsekwentnie, łatwiej wchodzi w nawyk i z czasem przynosi trwalsze rezultaty. Dlatego karta dotyczy jednego odkrycia i jednego celu: konkretnego zachowania, które da się zastosować już na najbliższym spotkaniu.</p>
<h2>Karta na szkoleniu</h2>
<p>Uczestnicy wypełniają kartę po rozmowie o przeniesieniu doświadczeń z gry do pracy. Każdy pracuje indywidualnie, w ciszy. Karta pozostaje u uczestnika, a zapisane na niej zobowiązanie ma osobisty charakter.</p>
<p>Następnie uczestnicy omawiają swoje cele w parach. Rozmowa ma charakter zbliżony do coachingowego: partner zadaje pytania i uważnie słucha, a sformułowania i decyzje zostawia rozmówcy. To zarazem okazja do przećwiczenia coachingowego stylu prowadzenia rozmowy. Pomocne pytania:</p>
<ul><li>Po czym inni poznają, że to robisz?</li><li>Kiedy pojawi się pierwsza okazja?</li><li>Co pomoże Ci o tym pamiętać?</li></ul>
<p>Rozmowa w parach ma też drugi walor. Cel wypowiedziany wobec drugiej osoby staje się zobowiązaniem złożonym w czyjejś obecności – a takie zobowiązanie silniej obliguje do działania.</p>
<h2>Po kilku tygodniach</h2>
<p>Termin z karty to umówiona chwila na podsumowanie. Rozmowę ewaluacyjną może poprowadzić trener na spotkaniu po szkoleniu, przełożony w rozmowie indywidualnej albo zespół na własnym spotkaniu. Jej osią są trzy pytania ewaluacyjne skierowane do uczestnika:</p>
<ul><li>Co udało Ci się zrobić?</li><li>Jaki przyniosło to efekt?</li><li>Co chcesz kontynuować?</li></ul>
<p>Rozmowa o konkretnych sytuacjach z pracy pokazuje, które wnioski z gry zakorzeniły się w codziennym działaniu. Gdy cel nie wszedł jeszcze w życie, rozmowa dotyczy tego, co miało na to wpływ, i realnego kolejnego kroku.</p>
<h2>Karta do pobrania</h2>
<p>Kartę Transferu w formacie A4 do wydruku można pobrać poniżej.</p>
<!--PDF-->
`
},
{
  id: "przywodztwo-sytuacyjne",
  etap: "teoria",
  tytul: "Przywództwo sytuacyjne – jeden zespół, różne potrzeby",
  lead: "Jeden gracz rwie się do działania, zanim zrozumie zadanie. Inny rozumie je doskonale, ale czeka na zielone światło. Przywództwo sytuacyjne podpowiada, jak prowadzić każdego z nich. Przebieg Starożytnej Świątyni daje dobre pole do wprowadzenia tej koncepcji, a sytuacje z gry stają się jej żywą ilustracją.",
  ilustracja: "img/artykul-przywodztwo-sytuacyjne.jpg",
  karta: "img/artykul-przywodztwo-sytuacyjne-karta.jpg",
  tresc: `
<p>Model Blancharda zakłada, że sposób prowadzenia dopasowuje się do poziomu rozwoju osoby w konkretnym zadaniu, czyli do jej kompetencji i zaangażowania. Entuzjastyczny początkujący potrzebuje instruowania, rozczarowany uczący się – trenowania, kompetentny, ale ostrożny wykonawca – wspierania, a samodzielny ekspert – delegowania.</p>
<h2>Model przy planszy</h2>
<p>Gra trwa około pół godziny, więc nie pokazuje rozwoju w jego pełnym wymiarze. Pokazuje za to w skrócie zachowania, które opisuje model Blancharda, na przykład:</p>
<ul><li><strong>zapał na starcie:</strong> gracz od razu proponuje układ, zanim zespół zbierze opisy – zyskuje na jasnej strukturze pracy,</li><li><strong>zniechęcenie:</strong> po kilku opisach, które nie trafiły do innych, gracz milknie – potrzebuje wskazówek i otuchy jednocześnie,</li><li><strong>ostrożność:</strong> gracz dostrzega kluczową zasadę, ale nie zabiera głosu – potrzebuje zachęty i sygnału, że jego pomysł jest ważny,</li><li><strong>samodzielność:</strong> gracz sam porządkuje swoją część planu i informuje o niej zespół – potrzebuje swobody.</li></ul>
<p>Na te potrzeby odpowiadają gracze, którzy wchodzą w role liderskie, często intuicyjnie. Ten sam sposób prowadzenia, który jednej osobie pomaga, innej utrudnia pracę.</p>
<h2>W omówieniu</h2>
<p>Model Blancharda pozwala uczestnikom spojrzeć na grę przez pryzmat własnych potrzeb. Pomocne pytania:</p>
<ul><li>W których momentach gry potrzebowaliście wskazówek, a w których swobody?</li><li>Na ile otrzymaliście od innych to, czego w danej chwili potrzebowaliście?</li><li>Po czym rozpoznawaliście, czego potrzebują pozostali gracze?</li></ul>
<p>Szczególnie cenne jest spostrzeżenie, że ta sama osoba w trakcie jednej gry przechodzi przez różne poziomy – od zapału na starcie, przez chwilę zniechęcenia, po samodzielność po odkryciu kluczowej zasady. Koncepcja opisuje więc relację osoby z zadaniem, a nie stałą cechę człowieka.</p>
<p>Praca z modelem może przybrać formę krótkiego ćwiczenia. Każdy uczestnik rysuje oś czasu gry i zaznacza na niej momenty, w których był na poszczególnych poziomach rozwoju, a obok – czego wtedy potrzebował. Zestawienie osi pokazuje, że w tej samej chwili gracze przy stole mieli bardzo różne potrzeby.</p>
<p>Gra daje uczestnikom wspólne, świeże doświadczenie, dzięki któremu model Blancharda przestaje być schematem z prezentacji. Każdy pamięta chwilę, w której potrzebował instrukcji, i tę, w której wolał działać sam. W codziennej pracy ta sama osoba w jednym zadaniu potrzebuje instruowania, a w innym swobody. Gra pokazuje to w pół godziny, w zespole ten proces rozkłada się na tygodnie.</p>
`
},
];
