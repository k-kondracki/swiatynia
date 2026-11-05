# Strona trenera – Starożytna Świątynia

Strona dla trenerów prowadzących grę szkoleniową „Starożytna Świątynia” (aleGRA Twórczy Rozwój). Publikowana przez GitHub Pages z gałęzi `main`, katalog główny. Właściciel: Krzysztof Kondracki – nie jest programistą i nie pracuje na GitHubie; wszystkie zmiany wykonuje Claude.

## Zasady pracy

- Każdą zmianę najpierw opisz, pokaż podgląd (zrzuty: komputer 1440 px, telefon 390 px) i czekaj na wyraźną akceptację. Dopiero potem commit i push na `main`.
- Nigdy nie nadpisuj historii (bez `push --force`, bez `rebase` opublikowanych commitów). Cofnięcie zmiany = nowy commit przywracający poprzednią wersję (`git revert`).
- Przed każdym pushem: sprawdź składnię `artykuly.js` (`node --check artykuly.js`), obecność wszystkich plików, na które wskazują artykuły, i wyświetlanie strony (Playwright: komputer, tablet, telefon – bez błędów w konsoli i bez brakujących plików).
- Pliki większe niż 95 MB nie trafiają do repozytorium (limit GitHuba: 100 MB).
- Komunikacja z właścicielem po polsku; zasady pisowni i stylu – w dokumentach projektu „Starożytna świątynia – aplikacja” (Standard inspiracji trenerskich).

## Struktura

- `index.html` – szablon strony (komputer, tablet, telefon w jednym pliku; wersja mobilna w `@media (max-width: 760px)`).
- `artykuly.js` – treści wszystkich artykułów; opis pól na początku pliku.
- `img/` – grafiki strony w formacie WebP (tła, przyciski, ikony – lekkie pliki, szybkie wczytywanie); ilustracje artykułów w WebP (jakość 75): `artykul-[id].webp` (1536 × 640 px) i `artykul-[id]-karta.webp` (564 × 352 px). Nowe grafiki strony zapisywać jako WebP (jakość 80, przyciski i ikony 90); łączna waga strony przy pierwszym wejściu ok. 1,3 MB – pilnować, by nie rosła. Duże obrazy górnej części mają `preload` w nagłówku i rozmyty zastępnik (mała grafika w `data:`) pod spodem; dolny krajobraz (`tlo-dol.webp`) dociągany po wczytaniu strony (klasa `wczytane`).
- Film: H.264 ok. 1 Mb/s, 960 × 540, `+faststart` (ok. 34 MB). Nowy film przekodować tak samo przed wgraniem.
- `pliki/` – PDF-y do pobrania (`[id].pdf`).
- `aplikacja/index.html` – aplikacja do gry; film `aplikacja/starozytna-swiatynia-film.mp4` (ta sama nazwa co w osobnej wersji offline).
- `fonty/` – kroje Alegreya i Alegreya Sans.
- `robots.txt`, meta `noindex` – strona wyłączona z wyszukiwarek.

## Dodanie nowego artykułu

1. Tekst od właściciela: tytuł, etap (doswiadczenie | refleksja | teoria | pragmatyka), lead (~300 znaków, 290–310), treść.
2. Ilustracje: dwie grafiki według wzoru z dokumentu projektu „Wzór promptu – ilustracje inspiracji trenerskich”; zapisz jako `img/artykul-[id].webp` i `img/artykul-[id]-karta.webp` (WebP, jakość 75) w podanych wymiarach.
3. Nowy blok na końcu listy w `artykuly.js`; `id` małymi literami, bez polskich znaków, z łącznikami. Pole `nowy: true` – napis „Nowe” i miejsce na początku katalogu (usunąć na prośbę właściciela). Artykuł wieloczęściowy: `seria` i `czesc`.
4. PDF (jeśli jest): `pliki/[id].pdf`, w bloku `pdf` i `pdfGotowy: true`, znacznik `<!--PDF-->` w treści w miejscu przycisku.
5. Literatura cytowana: pole `literatura` (lista), odwołania w tekście w nawiasie: (1), (2).
6. Test, podgląd, akceptacja, commit, push. Strona odświeża się po około minucie.
7. Przy każdej zmianie `artykuly.js` zmień znacznik wersji w `index.html` (`artykuly.js?v=RRRR-MM-DD`) – przeglądarki trzymają stary plik do 10 minut. Przy zmianie nazw plików stare zostawiaj na serwerze jeszcze przez kilka dni.

## Ustalenia, których nie zmieniać bez zgody właściciela

- Kolejność kart losowa przy każdej wizycie (stała w trakcie wizyty), nowe na początku, części serii obok siebie; po 6 kart na stronę.
- Bez dat przy artykułach.
- Aplikacja uruchamia się tylko na komputerze; na telefonie i tablecie – informacja zamiast przycisku.
- Stopka: „© aleGRA Twórczy Rozwój · Wszelkie prawa zastrzeżone · www.alegra.pl”.
