const QUESTIONS=
[
["Jaka jest stolica Australii?","Geografia","Canberra","Sydney","Melbourne","Perth"],
["Ile kości ma dorosły człowiek?","Biologia","206","186","212","230"],
["Kto namalował „Damę z gronostajem”?","Sztuka","Leonardo da Vinci","Rafael","Michał Anioł","Jan Matejko"],
["Najdłuższa rzeka w Polsce to:","Polska","Wisła","Odra","Warta","Bug"],
["Jaki symbol chemiczny ma złoto?","Nauka","Au","Ag","Go","Gd"],
["W którym roku Polska wstąpiła do Unii Europejskiej?","Historia","2004","1999","2007","2001"],
["Najwyższy szczyt Polski to:","Polska","Rysy","Śnieżka","Kasprowy Wierch","Babia Góra"],
["Ile planet ma Układ Słoneczny?","Kosmos","8","9","7","10"],
["Kto napisał „Pana Tadeusza”?","Literatura","Adam Mickiewicz","Juliusz Słowacki","Henryk Sienkiewicz","Cyprian Norwid"],
["Który ocean jest największy?","Geografia","Spokojny","Atlantycki","Indyjski","Arktyczny"],
["Jaki gaz rośliny pochłaniają podczas fotosyntezy?","Biologia","Dwutlenek węgla","Tlen","Azot","Hel"],
["Jaka jest waluta Japonii?","Różne","Jen","Juan","Won","Rupia"],
["W którym roku odbyła się bitwa pod Grunwaldem?","Historia","1410","1385","1525","1683"],
["Kto odkrył penicylinę?","Nauka","Alexander Fleming","Louis Pasteur","Robert Koch","Ludwik Hirszfeld"],
["Najmniejsze państwo świata to:","Geografia","Watykan","Monako","San Marino","Liechtenstein"],
["Kto jest autorem „Lalki”?","Literatura","Bolesław Prus","Eliza Orzeszkowa","Stefan Żeromski","Władysław Reymont"],
["Który kontynent ma najwięcej państw?","Geografia","Afryka","Azja","Europa","Ameryka Południowa"],
["Które z tych zwierząt jest ssakiem?","Biologia","Delfin","Rekin","Pingwin","Krokodyl"],
["Kto jako pierwszy stanął na Księżycu?","Kosmos","Neil Armstrong","Jurij Gagarin","Buzz Aldrin","Michael Collins"],
["Ile minut ma doba?","Zagadki","1440","1240","1600","1360"],
["Jaka jest stolica Kanady?","Geografia","Ottawa","Toronto","Vancouver","Montreal"],
["Najtwardszy naturalny minerał to:","Nauka","Diament","Kwarc","Korund","Topaz"],
["Ile wynosi pierwiastek kwadratowy ze 144?","Zagadki","12","14","11","16"],
["Którą planetę nazywa się Czerwoną Planetą?","Kosmos","Mars","Wenus","Jowisz","Merkury"],
["Ile Nagród Nobla zdobyła Maria Skłodowska-Curie?","Nauka","2","1","3","4"],
["W którym roku upadł mur berliński?","Historia","1989","1991","1985","1980"],
["Jaka jest stolica Turcji?","Geografia","Ankara","Stambuł","Izmir","Antalya"],
["Ile serc ma ośmiornica?","Biologia","3","1","2","8"],
["Który kraj ma kształt buta?","Geografia","Włochy","Grecja","Portugalia","Chorwacja"],
["Kto sformułował teorię względności?","Nauka","Albert Einstein","Isaac Newton","Niels Bohr","Max Planck"],
["Największa gorąca pustynia świata to:","Geografia","Sahara","Gobi","Kalahari","Atakama"],
["Ile strun ma standardowa gitara klasyczna?","Muzyka","6","4","5","7"],
["Kto skomponował „Etiudę Rewolucyjną”?","Muzyka","Fryderyk Chopin","Stanisław Moniuszko","Wolfgang A. Mozart","Ludwig van Beethoven"],
["Który pierwiastek ma symbol O?","Nauka","Tlen","Osm","Złoto","Ołów"],
["W jakim mieście stoi wieża Eiffla?","Geografia","Paryż","Lyon","Bruksela","Marsylia"],
["Ilu zawodników jednej drużyny jest na boisku w piłce nożnej?","Sport","11","10","9","12"],
["Kto był pierwszym królem Polski?","Historia","Bolesław Chrobry","Mieszko I","Kazimierz Wielki","Władysław Łokietek"],
["Jak nazywa się największa planeta Układu Słonecznego?","Kosmos","Jowisz","Saturn","Neptun","Uran"],
["W którym roku Kolumb dopłynął do Ameryki?","Historia","1492","1500","1453","1519"],
["Ile wynosi 15% z 200?","Zagadki","30","15","20","35"],
["Jaka jest stolica Norwegii?","Geografia","Oslo","Bergen","Sztokholm","Helsinki"],
["Który narząd produkuje insulinę?","Biologia","Trzustka","Wątroba","Nerka","Śledziona"],
["Z ilu pól składa się szachownica?","Gry","64","81","100","49"],
["Gdzie odbyły się Letnie Igrzyska Olimpijskie w 2024 roku?","Sport","Paryż","Tokio","Los Angeles","Londyn"],
["Jaki język ma najwięcej rodzimych użytkowników?","Różne","Chiński mandaryński","Angielski","Hiszpański","Hindi"],
["W którym mieście znajduje się Wawel?","Polska","Kraków","Warszawa","Gniezno","Poznań"],
["Kto napisał „Romeo i Julię”?","Literatura","William Shakespeare","Charles Dickens","Molier","Dante Alighieri"],
["Jaka jest stolica Kazachstanu?","Geografia","Astana","Ałmaty","Szymkent","Karaganda"],
["Jaką liczbę atomową ma węgiel?","Nauka","6","12","8","14"],
["Kto napisał „Mistrza i Małgorzatę”?","Literatura","Michaił Bułhakow","Fiodor Dostojewski","Lew Tołstoj","Borys Pasternak"],
["W którym roku wybuchła I wojna światowa?","Historia","1914","1912","1917","1908"],
["Które jezioro jest najgłębsze na świecie?","Geografia","Bajkał","Tanganika","Wiktorii","Górne"],
["Który pierwiastek ma symbol W?","Nauka","Wolfram","Wanad","Wapń","Wodór"],
["Jaka jest stolica Mongolii?","Geografia","Ułan Bator","Biszkek","Taszkent","Duszanbe"],
["Kto namalował „Ogród rozkoszy ziemskich”?","Sztuka","Hieronim Bosch","Pieter Bruegel","Albrecht Dürer","Jan van Eyck"],
["Ile chromosomów ma typowa komórka ciała człowieka?","Biologia","46","44","48","23"],
["W którym roku uchwalono Konstytucję 3 Maja?","Historia","1791","1772","1795","1807"],
["Kto napisał „Sto lat samotności”?","Literatura","Gabriel García Márquez","Jorge Luis Borges","Julio Cortázar","Mario Vargas Llosa"],
["Które pasmo górskie jest najdłuższe na lądzie?","Geografia","Andy","Himalaje","Góry Skaliste","Ural"],
["W jakiej jednostce mierzy się natężenie prądu?","Nauka","Amper","Wolt","Om","Wat"],
["Który kraj ma najwięcej stref czasowych (z terytoriami zamorskimi)?","Geografia","Francja","Rosja","USA","Chiny"],
["Kto odkrył prawa dziedziczenia, badając groch?","Nauka","Grzegorz Mendel","Karol Darwin","Jean-Baptiste Lamarck","James Watson"],
["Jaka jest stolica Nowej Zelandii?","Geografia","Wellington","Auckland","Christchurch","Hamilton"],
["Która planeta Układu Słonecznego jest najmniejsza?","Kosmos","Merkury","Mars","Wenus","Ziemia"],
["Ile lat faktycznie trwała wojna stuletnia?","Historia","116","100","99","124"],
["Kto napisał „Ferdydurke”?","Literatura","Witold Gombrowicz","Bruno Schulz","Witkacy","Jarosław Iwaszkiewicz"],
["Jaki jest język urzędowy Brazylii?","Różne","Portugalski","Hiszpański","Brazylijski","Francuski"],
["Który pierwiastek jest najbardziej rozpowszechniony we Wszechświecie?","Kosmos","Wodór","Hel","Tlen","Węgiel"],
["W którym roku zatonął Titanic?","Historia","1912","1905","1915","1921"],
["Która rzeka przepływa przez Bagdad?","Geografia","Tygrys","Eufrat","Jordan","Nil"],
["Kto skomponował „Cztery pory roku”?","Muzyka","Antonio Vivaldi","Johann Sebastian Bach","Georg Friedrich Händel","Joseph Haydn"],
["Ile wynosi suma kątów wewnętrznych pięciokąta?","Zagadki","540°","360°","720°","480°"],
["Kto był pierwszym Polakiem z literacką Nagrodą Nobla?","Literatura","Henryk Sienkiewicz","Władysław Reymont","Czesław Miłosz","Wisława Szymborska"],
["Jaka jest stolica Szwajcarii?","Geografia","Berno","Zurych","Genewa","Bazylea"],
["Jak nazywa się najwyższy wodospad świata?","Geografia","Salto Angel","Wodospad Wiktorii","Iguazú","Niagara"],
["Z iloma państwami graniczy Polska?","Polska","7","6","8","5"],
["W jakiej jednostce mierzy się częstotliwość?","Nauka","Herc","Dżul","Niuton","Paskal"],
["Kto wynalazł w Europie druk ruchomą czcionką?","Historia","Johannes Gutenberg","Leonardo da Vinci","Galileusz","Mikołaj Kopernik"],
["Która kość jest najdłuższa w ciele człowieka?","Biologia","Udowa","Piszczelowa","Ramienna","Strzałkowa"],
["Ile zer ma miliard?","Zagadki","9","6","12","10"],
["Kto był ostatnim królem Polski?","Historia","Stanisław August Poniatowski","August III Sas","Jan III Sobieski","Stanisław Leszczyński"],
["Jaka jest stolica Maroka?","Geografia","Rabat","Casablanca","Marrakesz","Fez"],
["Które państwo ma obecnie najwięcej mieszkańców?","Geografia","Indie","Chiny","USA","Indonezja"],
["Który gaz stanowi większość ziemskiej atmosfery?","Nauka","Azot","Tlen","Argon","Dwutlenek węgla"],
["W którym roku człowiek po raz pierwszy stanął na Księżycu?","Kosmos","1969","1967","1971","1965"],
["Kto napisał „Rok 1984”?","Literatura","George Orwell","Aldous Huxley","Ray Bradbury","H.G. Wells"],
["Które państwo Afryki jest największe pod względem powierzchni?","Geografia","Algieria","DR Konga","Sudan","Libia"],
["Kto jest twórcą psychoanalizy?","Nauka","Zygmunt Freud","Carl Gustav Jung","Alfred Adler","Iwan Pawłow"],
["Kto namalował „Bitwę pod Grunwaldem”?","Sztuka","Jan Matejko","Wojciech Kossak","Józef Chełmoński","Artur Grottger"],
["Ile stopni Fahrenheita to temperatura wrzenia wody?","Nauka","212","100","180","232"],
["Która rzeka jest najdłuższa w Europie?","Geografia","Wołga","Dunaj","Ren","Dniepr"],
["W którym roku powstało państwo Izrael?","Historia","1948","1945","1956","1967"],
["Jaki kolor ma krew ośmiornicy?","Biologia","Niebieski","Zielony","Czerwony","Bezbarwny"],
["Który filozof był nauczycielem Aleksandra Wielkiego?","Historia","Arystoteles","Platon","Sokrates","Diogenes"],
["Co oznacza skrót DNA?","Biologia","Kwas deoksyrybonukleinowy","Kwas rybonukleinowy","Kwas dinukleotydowy","Kwas deoksyaminowy"],
["Kto sformułował trzy zasady dynamiki?","Nauka","Isaac Newton","Galileusz","Johannes Kepler","Albert Einstein"],
["Z którego kraju pochodzi IKEA?","Różne","Szwecja","Dania","Norwegia","Finlandia"],
["Jaka jest stolica Peru?","Geografia","Lima","Cusco","Quito","La Paz"],
["Jaki symbol chemiczny ma potas?","Nauka","K","P","Po","Pt"],
["Kto napisał „Zbrodnię i karę”?","Literatura","Fiodor Dostojewski","Lew Tołstoj","Antoni Czechow","Mikołaj Gogol"],
["W którym roku zakończyła się wojna trzydziestoletnia?","Historia","1648","1618","1658","1683"],
["Jaki jest najwyższy szczyt Afryki?","Geografia","Kilimandżaro","Mount Kenya","Ruwenzori","Tubkal"],
["Ile wynosi 2 do potęgi 10?","Zagadki","1024","1000","512","2048"],
["Kto namalował „Słoneczniki”?","Sztuka","Vincent van Gogh","Claude Monet","Paul Gauguin","Paul Cézanne"],
["Jaka jest stolica Wietnamu?","Geografia","Hanoi","Ho Chi Minh","Da Nang","Hue"],
["Które zwierzę lądowe jest najszybsze?","Biologia","Gepard","Antylopa widłoroga","Lew","Koń"],
["W którym roku odbył się chrzest Polski?","Historia","966","1000","1025","962"],
["Kto jest autorem „Boskiej komedii”?","Literatura","Dante Alighieri","Francesco Petrarka","Giovanni Boccaccio","Niccolò Machiavelli"],
["Który pierwiastek ma symbol Fe?","Nauka","Żelazo","Fluor","Fosfor","Ferm"],
["Jaka jest w przybliżeniu prędkość dźwięku w powietrzu?","Nauka","343 m/s","1500 m/s","120 m/s","3000 m/s"],
["Jaka jest stolica Kenii?","Geografia","Nairobi","Mombasa","Kampala","Dodoma"],
["Kto zaprojektował Sagrada Família?","Sztuka","Antoni Gaudí","Le Corbusier","Santiago Calatrava","Joan Miró"],
["Który punkt uznaje się za najdalej na północ wysunięty w Polsce?","Polska","Jastrzębia Góra","Rozewie","Hel","Łeba"],
["Kto napisał „Wesele”?","Literatura","Stanisław Wyspiański","Stanisław Przybyszewski","Aleksander Fredro","Stefan Żeromski"],
["Która planeta ma najwięcej znanych księżyców?","Kosmos","Saturn","Jowisz","Uran","Neptun"],
["Jaka jest waluta Szwajcarii?","Różne","Frank","Euro","Korona","Marka"],
["Który Wiking dotarł do Ameryki Północnej około 1000 roku?","Historia","Leif Eriksson","Eryk Rudy","Ragnar Lodbrok","Harald Pięknowłosy"],
["Jaki jest największy narząd ludzkiego ciała?","Biologia","Skóra","Wątroba","Płuca","Mózg"],
["W którym roku banknoty i monety euro weszły do obiegu?","Historia","2002","1999","2000","2004"],
["Kto napisał „Małego Księcia”?","Literatura","Antoine de Saint-Exupéry","Juliusz Verne","Victor Hugo","Albert Camus"],
["Która rzeka jest najdłuższa w Azji?","Geografia","Jangcy","Huang He","Mekong","Ob"],
["Ile wynosi 7! (siedem silnia)?","Zagadki","5040","720","40320","2520"],
["Kto przedstawił heliocentryczny model w „O obrotach sfer niebieskich”?","Nauka","Mikołaj Kopernik","Klaudiusz Ptolemeusz","Galileusz","Johannes Kepler"],
["W jakim kraju leży Angkor Wat?","Geografia","Kambodża","Tajlandia","Laos","Wietnam"],
["Ile stopni Celsjusza wynosi zero absolutne?","Nauka","-273,15","-100","-459,67","-200"],
["Kto skomponował operę „Halka”?","Muzyka","Stanisław Moniuszko","Fryderyk Chopin","Karol Szymanowski","Krzysztof Penderecki"],
["Kim była pierwsza kobieta w kosmosie?","Kosmos","Walentina Tierieszkowa","Sally Ride","Swietłana Sawicka","Eileen Collins"],
["Która rzeka ma największy przepływ wody na świecie?","Geografia","Amazonka","Kongo","Nil","Jangcy"],
["Który metal jest ciekły w temperaturze pokojowej?","Nauka","Rtęć","Gal","Ołów","Cyna"],
["Kto był pierwszym królem Polski z dynastii Jagiellonów?","Historia","Władysław Jagiełło","Kazimierz Jagiellończyk","Zygmunt Stary","Władysław Warneńczyk"],
["W którym roku upadło Cesarstwo Zachodniorzymskie?","Historia","476","410","1453","395"],
["Kto napisał „Quo vadis”?","Literatura","Henryk Sienkiewicz","Bolesław Prus","Józef Ignacy Kraszewski","Władysław Reymont"],
["Jaka jest stolica Argentyny?","Geografia","Buenos Aires","Santiago","Montevideo","Córdoba"],
["Ile zębów ma dorosły człowiek razem z ósemkami?","Biologia","32","28","30","36"],
["Który kraj jako pierwszy przyznał kobietom prawa wyborcze w skali całego państwa?","Historia","Nowa Zelandia","Finlandia","USA","Wielka Brytania"],
["Kto założył Apple razem ze Steve'em Jobsem?","Technologia","Steve Wozniak","Bill Gates","Paul Allen","Larry Page"],
["W jakim kraju wynaleziono papier?","Historia","Chiny","Egipt","Indie","Grecja"],
["Jaka jest stolica Gruzji?","Geografia","Tbilisi","Erywań","Baku","Batumi"],
["Kto napisał „Don Kichota”?","Literatura","Miguel de Cervantes","Lope de Vega","Pedro Calderón","Federico García Lorca"],
["Ile wynosi pierwiastek sześcienny z 27?","Zagadki","3","9","6","4"],
["Który budynek jest obecnie najwyższy na świecie?","Sztuka","Burdż Chalifa","Shanghai Tower","Merdeka 118","One World Trade Center"],
["Ile strun mają skrzypce?","Muzyka","4","5","6","3"],
["Który narząd filtruje krew i wytwarza mocz?","Biologia","Nerki","Wątroba","Śledziona","Trzustka"],
["Jak nazywa się podział komórki, w którym powstają dwie identyczne komórki potomne?","Biologia","Mitoza","Mejoza","Osmoza","Fotosynteza"],
["W którym mieście znajduje się Koloseum?","Geografia","Rzym","Ateny","Neapol","Florencja"],
["Ile nóg ma pająk?","Biologia","8","6","10","12"],
["Kto namalował „Dziewczynę z perłą”?","Sztuka","Johannes Vermeer","Rembrandt","Peter Paul Rubens","Frans Hals"],
["Jaka jest stolica Filipin?","Geografia","Manila","Cebu","Davao","Quezon City"],
["Jaki symbol chemiczny ma sód?","Nauka","Na","S","So","N"],
["Kto napisał „Proces”?","Literatura","Franz Kafka","Thomas Mann","Hermann Hesse","Robert Musil"],
["W którym roku wybuchło powstanie listopadowe?","Historia","1830","1863","1794","1846"],
["Jaki jest najwyższy czynny wulkan Europy?","Geografia","Etna","Wezuwiusz","Stromboli","Hekla"],
["Ile wynosi 13 do kwadratu?","Zagadki","169","156","196","144"],
["Kto namalował „Krzyk”?","Sztuka","Edvard Munch","Gustav Klimt","Egon Schiele","Wassily Kandinsky"],
["Jaka jest stolica Chile?","Geografia","Santiago","Valparaíso","Concepción","Antofagasta"],
["Ile skrzydeł ma pszczoła?","Biologia","4","2","6","8"],
["W którym roku odbyła się odsiecz wiedeńska?","Historia","1683","1648","1700","1621"],
["Kto jest autorem „Iliady”?","Literatura","Homer","Wergiliusz","Sofokles","Ezop"],
["Który pierwiastek ma symbol Pb?","Nauka","Ołów","Pallad","Platyna","Polon"],
["W jakiej jednostce mierzy się siłę?","Nauka","Niuton","Dżul","Wat","Paskal"],
["Jaka jest stolica Egiptu?","Geografia","Kair","Aleksandria","Giza","Luksor"],
["Jaka jest największa wyspa świata?","Geografia","Grenlandia","Nowa Gwinea","Borneo","Madagaskar"],
["Kto napisał „Chłopów”?","Literatura","Władysław Reymont","Eliza Orzeszkowa","Stefan Żeromski","Maria Konopnicka"],
["Która planeta obraca się praktycznie „na boku”?","Kosmos","Uran","Neptun","Saturn","Wenus"],
["Kto był pierwszym cesarzem rzymskim?","Historia","August","Juliusz Cezar","Neron","Kaligula"],
["Ile mniej więcej litrów krwi ma dorosły człowiek?","Biologia","5","2","8","10"],
["W którym roku wprowadzono w Polsce stan wojenny?","Historia","1981","1980","1970","1989"],
["Kto napisał „Wojnę i pokój”?","Literatura","Lew Tołstoj","Fiodor Dostojewski","Iwan Turgieniew","Aleksander Puszkin"],
["Jakie jest największe jezioro w Polsce?","Polska","Śniardwy","Mamry","Hańcza","Gopło"],
["Kto opatentował telefon w 1876 roku?","Technologia","Alexander Graham Bell","Thomas Edison","Nikola Tesla","Guglielmo Marconi"],
["W jakim kraju leży starożytne miasto Petra?","Geografia","Jordania","Egipt","Izrael","Syria"],
["Jaki wzór chemiczny ma sól kuchenna?","Nauka","NaCl","KCl","NaOH","CaCO₃"],
["Kto skomponował „Bolero”?","Muzyka","Maurice Ravel","Claude Debussy","Georges Bizet","Erik Satie"],
["Kto był pierwszym Polakiem w kosmosie?","Kosmos","Mirosław Hermaszewski","Sławosz Uznański-Wiśniewski","Zenon Jankowski","Kazimierz Siemienowicz"],
["W którym mieście stoi Krzywa Wieża?","Geografia","Piza","Florencja","Bolonia","Siena"],
["Która cieśnina oddziela Europę od Afryki?","Geografia","Gibraltarska","Bosfor","Kaletańska","Mesyńska"],
["Kto był ostatnim Piastem na tronie Polski?","Historia","Kazimierz Wielki","Władysław Łokietek","Przemysł II","Bolesław Krzywousty"],
["W którym roku zawarto drugi pokój toruński?","Historia","1466","1411","1410","1525"],
["Kto napisał „Solaris”?","Literatura","Stanisław Lem","Janusz Zajdel","Andrzej Sapkowski","Jacek Dukaj"],
["Jaka jest stolica Kolumbii?","Geografia","Bogota","Medellín","Cali","Caracas"],
["Ile jam (komór i przedsionków razem) ma serce człowieka?","Biologia","4","2","3","6"],
["Który kraj jako pierwszy wysłał sztucznego satelitę na orbitę?","Kosmos","ZSRR","USA","Chiny","Francja"],
["Kto stworzył jądro systemu Linux?","Technologia","Linus Torvalds","Richard Stallman","Dennis Ritchie","Ken Thompson"],
["W jakim kraju znajduje się Stonehenge?","Geografia","Wielka Brytania","Irlandia","Francja","Dania"],
["Jaka jest stolica Albanii?","Geografia","Tirana","Skopje","Podgorica","Prisztina"],
["Kto napisał „Hobbita”?","Literatura","J.R.R. Tolkien","C.S. Lewis","Terry Pratchett","J.K. Rowling"],
["Ile wynosi 0,5 + 1/4?","Zagadki","0,75","0,6","0,54","1,25"],
["Ile kart ma standardowa talia do brydża?","Gry","52","54","48","32"],
["Ile klawiszy ma standardowy fortepian?","Muzyka","88","76","96","104"],
["Którą witaminę organizm wytwarza pod wpływem słońca?","Biologia","D","A","C","B12"],
["Ile stopni ma każdy kąt trójkąta równobocznego?","Zagadki","60","45","90","30"],
["Kto namalował „Narodziny Wenus”?","Sztuka","Sandro Botticelli","Tycjan","Rafael","Caravaggio"],
["Jaka jest stolica Portugalii?","Geografia","Lizbona","Porto","Faro","Coimbra"],
["Jaki gaz sprawia, że po wdychaniu głos staje się piskliwy?","Nauka","Hel","Argon","Neon","Azot"],
["Ile sekund ma godzina?","Zagadki","3600","1440","6000","3000"],
["Jaka jest waluta Wielkiej Brytanii?","Różne","Funt szterling","Euro","Dolar","Korona"],
["Ile minut trwa regulaminowy mecz piłki nożnej?","Sport","90","80","100","120"],
["Jaka jest stolica Węgier?","Geografia","Budapeszt","Debreczyn","Bratysława","Wiedeń"],
["Jaki symbol chemiczny ma srebro?","Nauka","Ag","Au","Sr","Si"],
["Kto napisał „Ludzi bezdomnych”?","Literatura","Stefan Żeromski","Bolesław Prus","Eliza Orzeszkowa","Władysław Reymont"],
["W którym roku wybuchło powstanie styczniowe?","Historia","1863","1830","1848","1871"],
["Jaki jest najwyższy szczyt Ameryki Południowej?","Geografia","Aconcagua","Chimborazo","Huascarán","Ojos del Salado"],
["Ile wynosi 15 × 15?","Zagadki","225","215","250","205"],
["Kto namalował obraz „Pocałunek” pokryty złotem?","Sztuka","Gustav Klimt","Egon Schiele","Edvard Munch","Alfons Mucha"],
["Jaka jest stolica Tajlandii?","Geografia","Bangkok","Phuket","Chiang Mai","Pattaya"],
["Ile nóg ma owad?","Biologia","6","8","4","10"],
["W którym roku zawarto unię lubelską?","Historia","1569","1385","1413","1596"],
["Kto napisał „Fausta”?","Literatura","Johann Wolfgang von Goethe","Friedrich Schiller","Heinrich Heine","Thomas Mann"],
["Który pierwiastek ma symbol Cu?","Nauka","Miedź","Cez","Kiur","Chrom"],
["W jakiej jednostce mierzy się moc?","Nauka","Wat","Dżul","Amper","Wolt"],
["Jaka jest stolica Iranu?","Geografia","Teheran","Isfahan","Bagdad","Kabul"],
["Który kontynent jest najmniejszy?","Geografia","Australia","Europa","Antarktyda","Ameryka Południowa"],
["Kto napisał „Kordiana”?","Literatura","Juliusz Słowacki","Adam Mickiewicz","Zygmunt Krasiński","Cyprian Norwid"],
["Na której planecie doba trwa dłużej niż rok?","Kosmos","Wenus","Merkury","Mars","Jowisz"],
["Kto był pierwszym prezydentem II Rzeczypospolitej?","Historia","Gabriel Narutowicz","Józef Piłsudski","Stanisław Wojciechowski","Ignacy Mościcki"],
["Jaką część ciała dorosłego człowieka stanowi mniej więcej woda?","Biologia","60%","40%","80%","30%"],
["W którym roku Polska wstąpiła do NATO?","Historia","1999","2004","1997","2001"],
["Kto napisał „Przeminęło z wiatrem”?","Literatura","Margaret Mitchell","Harper Lee","Jane Austen","Emily Brontë"],
["Które jezioro leży na granicy Peru i Boliwii?","Geografia","Titicaca","Poopó","Maracaibo","Nikaragua"],
["Kto wynalazł dynamit?","Nauka","Alfred Nobel","Thomas Edison","Robert Oppenheimer","Antoine Lavoisier"],
["W jakim kraju leży Timbuktu?","Geografia","Mali","Niger","Mauretania","Senegal"],
["Jaki wzór chemiczny ma ozon?","Nauka","O₃","O₂","CO₂","H₂O₂"],
["Kto skomponował IX symfonię z „Odą do radości”?","Muzyka","Ludwig van Beethoven","Wolfgang A. Mozart","Johannes Brahms","Franz Schubert"],
["Kto poprowadził pierwszą wyprawę dookoła świata?","Historia","Ferdynand Magellan","Vasco da Gama","Krzysztof Kolumb","James Cook"],
["W jakim mieście znajduje się Most Karola?","Geografia","Praga","Wiedeń","Budapeszt","Kraków"],
["Nad jakim morzem leży Odessa?","Geografia","Czarnym","Azowskim","Kaspijskim","Śródziemnym"],
["Kto był ostatnim królem Polski z dynastii Wazów?","Historia","Jan II Kazimierz","Zygmunt III Waza","Władysław IV","Michał Korybut Wiśniowiecki"],
["W którym roku odbyła się bitwa pod Hastings?","Historia","1066","1086","1215","966"],
["Kto napisał sagę o wiedźminie?","Literatura","Andrzej Sapkowski","Stanisław Lem","Andrzej Pilipiuk","Jarosław Grzędowicz"],
["Jaka jest stolica Pakistanu?","Geografia","Islamabad","Karaczi","Lahaur","Kabul"],
["Ile kręgów szyjnych ma człowiek?","Biologia","7","5","12","9"],
["Jaka gwiazda jest najbliżej Słońca?","Kosmos","Proxima Centauri","Syriusz","Betelgeza","Gwiazda Polarna"],
["Kto stworzył World Wide Web?","Technologia","Tim Berners-Lee","Vint Cerf","Bill Gates","Steve Jobs"],
["W jakim kraju leży Kapadocja?","Geografia","Turcja","Grecja","Armenia","Iran"],
["Jaka jest stolica Słowenii?","Geografia","Lublana","Zagrzeb","Bratysława","Sarajewo"],
["Kto napisał „Kod Leonarda da Vinci”?","Literatura","Dan Brown","Ken Follett","John Grisham","Stephen King"],
["Ile wynosi jedna trzecia z 0,9?","Zagadki","0,3","0,03","0,27","0,33"],
["Ile wynosi suma oczek na standardowej kostce do gry?","Gry","21","18","24","36"],
["Ilu zawodników jednej drużyny gra na boisku w siatkówce?","Sport","6","5","7","8"],
["Jaki pierwiastek dodaje się do past do zębów, żeby chronić szkliwo?","Nauka","Fluor","Chlor","Wapń","Jod"],
["Ile wynosi suma kątów wewnętrznych czworokąta?","Zagadki","360°","180°","540°","400°"],
["Kto wyrzeźbił marmurowego Dawida stojącego we Florencji?","Sztuka","Michał Anioł","Donatello","Gian Lorenzo Bernini","Antonio Canova"],
["Jaka jest waluta Czech?","Różne","Korona czeska","Euro","Forint","Złoty"],
["Ile kilometrów ma maraton?","Sport","42,195","40","42","45,5"],
["Jakie jest największe zwierzę na Ziemi?","Biologia","Płetwal błękitny","Słoń afrykański","Rekin wielorybi","Kaszalot"],
["W którym roku bracia Wright odbyli pierwszy lot samolotem?","Historia","1903","1898","1910","1891"],
["Jaki jest najwyższy szczyt Ameryki Północnej?","Geografia","Denali","Mount Logan","Mount Whitney","Pico de Orizaba"],
["Ile kół jest na fladze olimpijskiej?","Sport","5","4","6","7"],
["Ile minut trwa jedna kwarta w NBA?","Sport","12","10","15","20"],
["W którym sporcie wynik „eagle” oznacza dwa uderzenia poniżej normy?","Sport","Golf","Krykiet","Bowling","Curling"],
["W którym klubie Robert Lewandowski grał bezpośrednio przed Bayernem?","Sport","Borussia Dortmund","Lech Poznań","Schalke 04","VfL Wolfsburg"],
["Ile metrów długości ma basen olimpijski?","Sport","50","25","100","40"],
["Który Polak najwięcej razy wygrał Turniej Czterech Skoczni?","Sport","Kamil Stoch","Adam Małysz","Dawid Kubacki","Piotr Żyła"],
["Ilu zawodników jednej drużyny jest na lodzie w hokeju (z bramkarzem)?","Sport","6","5","7","11"],
["Który kraj gościł mundial w 2022 roku?","Sport","Katar","Rosja","Brazylia","Arabia Saudyjska"],
["Jaki jest główny składnik guacamole?","Kuchnia","Awokado","Groszek","Cukinia","Ogórek"],
["Która przyprawa jest najdroższa na świecie?","Kuchnia","Szafran","Wanilia","Kardamon","Cynamon"],
["Z czego robi się tofu?","Kuchnia","Z soi","Z ryżu","Z ciecierzycy","Z mleka kokosowego"],
["Jaki ser kładzie się tradycyjnie na pizzę margherita?","Kuchnia","Mozzarella","Parmezan","Gorgonzola","Ricotta"],
["Z jakiego kraju pochodzi ser feta?","Kuchnia","Grecja","Turcja","Włochy","Bułgaria"],
["Który z tych produktów jest botanicznie owocem?","Kuchnia","Pomidor","Marchew","Ziemniak","Seler"],
["Jaki alkohol jest bazą mojito?","Kuchnia","Rum","Gin","Wódka","Tequila"],
["Z jakiego kraju najpewniej pochodzi kawa?","Kuchnia","Etiopia","Brazylia","Kolumbia","Indonezja"],
["Co oznacza skrót USB?","Technologia","Universal Serial Bus","United System Board","Ultra Speed Bridge","Universal Storage Base"],
["Ile bitów ma bajt?","Technologia","8","4","16","10"],
["Która firma produkuje konsole PlayStation?","Technologia","Sony","Nintendo","Microsoft","Sega"],
["W którym roku zaprezentowano pierwszego iPhone'a?","Technologia","2007","2005","2008","2010"],
["Do jakiej firmy należy Instagram?","Technologia","Meta","Google","Microsoft","ByteDance"],
["Która firma stworzyła system Android?","Technologia","Google","Samsung","Apple","Nokia"],
["Jak nazywa się samica jelenia?","Biologia","Łania","Sarna","Locha","Klacz"],
["Jakie zwierzę jest w logo WWF?","Biologia","Panda wielka","Tygrys","Słoń","Niedźwiedź polarny"],
["Który ptak jest największy na świecie?","Biologia","Struś","Emu","Kondor","Albatros"],
["Jak nazywa się młode konia?","Biologia","Źrebię","Cielę","Koźlę","Prosię"],
["Ile ramion ma zwykle rozgwiazda?","Biologia","5","4","6","8"],
["Jaka jest prawidłowa częstość pracy serca dorosłego w spoczynku?","Biologia","60-100 uderzeń/min","20-40 uderzeń/min","120-160 uderzeń/min","180-200 uderzeń/min"],
["Jak nazywa się najmniejsza kość w ciele człowieka?","Biologia","Strzemiączko","Kowadełko","Młoteczek","Kość gnykowa"],
["Która grupa krwi to tak zwany uniwersalny dawca?","Biologia","0 Rh-","AB Rh+","A Rh-","B Rh+"],
["Z jakiego kraju pochodzi marka Škoda?","Motoryzacja","Czechy","Słowacja","Niemcy","Polska"],
["Co oznacza skrót BMW?","Motoryzacja","Bayerische Motoren Werke","Berliner Motor Wagen","Bavarian Machine Works","Benz Motoren Werke"],
["Jaki samochód nazywano w Polsce „maluchem”?","Motoryzacja","Fiat 126p","Syrena","Polonez","Fiat 125p"],
["Kto wyreżyserował film „Titanic” z 1997 roku?","Film","James Cameron","Steven Spielberg","Ridley Scott","Christopher Nolan"],
["Który film jako pierwszy nieanglojęzyczny zdobył Oscara za najlepszy film?","Film","Parasite","Roma","Amélie","Ida"],
["Z ilu filmów składa się główna saga „Gwiezdnych wojen” o Skywalkerach?","Film","9","6","8","12"],
["Jak nazywa się zielony ogr z animacji DreamWorks?","Film","Shrek","Fiona","Osioł","Grinch"],
["Które polskie studio stworzyło grę „Wiedźmin 3: Dziki Gon”?","Gry","CD Projekt Red","Techland","People Can Fly","11 bit studios"],
["Która figura szachowa porusza się tylko po przekątnej?","Gry","Goniec","Wieża","Skoczek","Hetman"],
["Ile kart dostaje każdy gracz na początku rozdania w Texas Hold'em?","Gry","2","5","3","7"],
["Z jakiego kraju pochodzi zespół ABBA?","Muzyka","Szwecja","Norwegia","Dania","Finlandia"],
["Ilu członków liczyło The Beatles w najsłynniejszym składzie?","Muzyka","4","3","5","6"],
["Który kraj wygrał Eurowizję w 2024 roku?","Muzyka","Szwajcaria","Chorwacja","Ukraina","Szwecja"],
["Ile dni ma rok przestępny?","Zagadki","366","365","364","367"],
["Jeśli dziś jest środa, jaki dzień tygodnia będzie za 100 dni?","Zagadki","Piątek","Środa","Czwartek","Sobota"],
["Ile wynosi połowa z połowy ze 100?","Zagadki","25","50","20","12,5"],
["Ile godzin ma tydzień?","Zagadki","168","144","172","186"],
["Ile kolorów ma tęcza w tradycyjnym podziale?","Zagadki","7","6","5","8"]
];
const HTML = "<!DOCTYPE html>\n<html lang=\"pl\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, viewport-fit=cover\">\n<title>Quiz party</title>\n<meta name=\"description\" content=\"Quiz wiedzy ogólnej na żywo - każdy gra na swoim telefonie.\">\n<meta name=\"theme-color\" content=\"#2440B8\">\n<link rel=\"icon\" href=\"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧠</text></svg>\">\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800&display=swap\" rel=\"stylesheet\">\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js\" defer></script>\n<style>\n:root{\n  box-sizing:border-box;\n  padding-top:env(safe-area-inset-top,0px);\n  padding-bottom:env(safe-area-inset-bottom,0px);\n  --bg:#EEF1FB; --surface:#FFFFFF; --ink:#14182B; --muted:#5A6180;\n  --stage:#2440B8; --line:#D5DBF0; --ok:#14A06B; --bad:#E0454B; --gold:#FFC93C;\n}\n@media (prefers-color-scheme: dark){\n  :root{ --bg:#0F1430; --surface:#1A2147; --ink:#F1F3FF; --muted:#A3AAD0; --stage:#3352E0; --line:#2C3666; }\n}\n*,*::before,*::after{box-sizing:inherit}\nhtml{min-height:100%;background:var(--bg)}\nbody{margin:0;background:var(--bg);color:var(--ink);font-family:\"Bricolage Grotesque\",system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;font-size:1rem;line-height:1.45}\n.wrap{max-width:680px;margin:0 auto;padding:1rem 1rem 2.5rem}\nh1{font-size:clamp(2.6rem,11vw,4rem);font-weight:800;line-height:.95;letter-spacing:-.025em;margin:1.2rem 0 .8rem}\nh2{font-size:1.15rem;font-weight:800;margin:1.8rem 0 .7rem}\np{margin:0 0 .6rem}\n.lead{color:var(--muted);max-width:34em}\n.small{font-size:.9rem;color:var(--muted)}\nbutton{font:inherit;color:inherit}\n:focus-visible{outline:3px solid var(--gold);outline-offset:2px}\ninput.txt{width:100%;font:inherit;font-size:1.1rem;padding:.85rem 1rem;border-radius:12px;border:2px solid var(--line);background:var(--surface);color:var(--ink)}\ninput.code{text-transform:uppercase;letter-spacing:.3em;font-weight:800;text-align:center}\n.btn{display:block;font-weight:800;font-size:1.1rem;padding:1rem 1.2rem;border-radius:14px;border:0;background:var(--stage);color:#fff;cursor:pointer;width:100%;margin-top:.8rem;text-align:center;text-decoration:none}\n.btn:disabled{opacity:.45;cursor:default}\n.btn.ghost{background:transparent;color:var(--ink);border:2px solid var(--line)}\n.or{display:flex;align-items:center;gap:.8rem;color:var(--muted);margin:1.6rem 0 .8rem;font-size:.95rem}\n.or::before,.or::after{content:\"\";flex:1;height:2px;background:var(--line)}\n.err{color:var(--bad);font-weight:600;min-height:1.4em;margin-top:.6rem}\n.banner{position:fixed;left:0;right:0;top:0;padding:calc(env(safe-area-inset-top,0px) + .5rem) 1rem .5rem;background:var(--bad);color:#fff;text-align:center;font-weight:600;z-index:10}\n\n/* lobby */\n.room{background:var(--stage);color:#fff;border-radius:24px;padding:1.3rem 1.2rem;display:grid;grid-template-columns:1fr auto;gap:1rem;align-items:center}\n.room .lbl{font-size:.95rem;opacity:.8}\n.room .codebig{font-size:clamp(3rem,15vw,4.6rem);font-weight:800;letter-spacing:.12em;line-height:1}\n.qr{background:#fff;padding:8px;border-radius:12px;line-height:0}\n.qr img,.qr canvas{width:112px!important;height:112px!important}\n.share{display:flex;gap:.5rem;margin-top:.7rem}\n.share .btn{margin-top:0;font-size:1rem;padding:.8rem}\n.plist{display:flex;flex-wrap:wrap;gap:.45rem}\n.pchip{display:flex;align-items:center;gap:.4rem;padding:.45rem .5rem .45rem .75rem;border-radius:999px;background:var(--surface);border:2px solid var(--line);font-weight:600}\n.pchip.off{opacity:.45}\n.pchip .dot{width:.6rem;height:.6rem;border-radius:50%;background:var(--c)}\n.pchip .tag{font-size:.75rem;color:var(--muted);font-weight:400}\n.pchip .kick{border:0;background:none;cursor:pointer;color:var(--muted);font-size:1.1rem;line-height:1;padding:0 .25rem}\n.seg{display:flex;gap:.5rem;flex-wrap:wrap}\n.seg button,.cats button{font-weight:600;border:2px solid var(--line);background:var(--surface);cursor:pointer}\n.seg button{flex:1;min-width:3.4rem;padding:.7rem .6rem;border-radius:12px}\n.cats{display:flex;flex-wrap:wrap;gap:.45rem}\n.cats button{padding:.5rem .85rem;border-radius:999px;font-size:.95rem}\n.cats button span{opacity:.6;font-weight:400;margin-left:.25rem}\n.seg button[aria-pressed=\"true\"],.cats button[aria-pressed=\"true\"]{border-color:var(--stage);background:var(--stage);color:#fff}\n.seg button:disabled,.cats button:disabled{cursor:default}\n.wait{margin-top:1.6rem;padding:1rem;border-radius:14px;background:var(--surface);text-align:center;color:var(--muted);font-weight:600}\n\n/* question */\n.topbar{display:flex;justify-content:space-between;gap:.5rem;font-weight:600;font-size:.95rem;margin:.4rem 0 .6rem}\n.stage{background:var(--stage);color:#fff;border-radius:24px;padding:1.3rem 1.2rem 1.5rem}\n.q{font-size:clamp(1.4rem,5.5vw,1.95rem);font-weight:800;line-height:1.15;margin:0 0 .4rem}\n.cat{opacity:.75;font-size:.9rem}\n.timer{height:6px;border-radius:3px;background:rgba(255,255,255,.25);margin-top:1.1rem;overflow:hidden}\n.timer i{display:block;height:100%;background:var(--gold);width:100%}\n.answers{display:grid;gap:.6rem;margin-top:1rem}\n@media (min-width:560px){.answers{grid-template-columns:1fr 1fr}}\n.ans{font-size:1.05rem;font-weight:600;text-align:left;padding:.95rem 1rem;border-radius:14px;background:var(--surface);border:2px solid var(--line);cursor:pointer;display:flex;gap:.75rem;align-items:center}\n.ans b{display:inline-grid;place-items:center;width:1.8rem;height:1.8rem;border-radius:8px;background:var(--bg);font-size:.9rem;flex:none;color:var(--ink)}\n.ans:hover:not(:disabled){border-color:var(--stage)}\n.ans:disabled{cursor:default}\n.ans.picked{border-color:var(--stage);box-shadow:0 0 0 2px var(--stage) inset}\n.ans.ok{background:var(--ok);border-color:var(--ok);color:#fff}\n.ans.bad{background:var(--bad);border-color:var(--bad);color:#fff}\n.ans.dim{opacity:.45}\n.note{margin-top:1rem;font-weight:600;min-height:1.5em}\n.result{margin-top:1rem;border-radius:16px;padding:1rem 1.1rem;font-weight:800;font-size:1.4rem;color:#fff}\n.result.good{background:var(--ok)} .result.miss{background:var(--bad)}\n.result span{display:block;font-size:.95rem;font-weight:600;opacity:.9}\n\n/* scores */\n.scores{display:grid;gap:.45rem;margin:1rem 0}\n.row{display:flex;align-items:center;gap:.8rem;background:var(--surface);border-radius:14px;padding:.75rem 1rem;border-left:8px solid var(--c)}\n.row.me{box-shadow:0 0 0 2px var(--c) inset}\n.row .place{font-size:1.3rem;font-weight:800;width:1.8rem}\n.row .nm{flex:1;font-weight:600;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.row .gain{color:var(--ok);font-weight:800;font-size:.95rem}\n.row .pt{font-weight:800;font-size:1.15rem;white-space:nowrap}\n.winner{font-size:clamp(2.2rem,9vw,3.4rem);font-weight:800;line-height:1.02;letter-spacing:-.02em;margin:.5rem 0}\n.linkbtn{background:none;border:0;color:var(--muted);text-decoration:underline;cursor:pointer;margin-top:1.2rem;padding:.4rem 0;font-size:.95rem}\n@media (prefers-reduced-motion: reduce){*{transition:none!important;animation:none!important}}\n</style>\n</head>\n<body>\n<div id=\"banner\" class=\"banner\" hidden>Łączenie z pokojem...</div>\n<div class=\"wrap\" id=\"app\"></div>\n<script>\nconst app=document.getElementById('app');\nconst esc=s=>String(s).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',\"'\":'&#39;'}[c]));\nconst ls={get(k,d){try{const v=localStorage.getItem('quizp:'+k);return v===null?d:v}catch(e){return d}},set(k,v){try{localStorage.setItem('quizp:'+k,v)}catch(e){}},del(k){try{localStorage.removeItem('quizp:'+k)}catch(e){}}};\nconst cleanCode=s=>String(s||'').toUpperCase().replace(/[^A-Z]/g,'').slice(0,4);\n\nlet code=cleanCode(new URLSearchParams(location.search).get('r'));\nlet name=ls.get('name','');\nlet ws=null,S=null,retry=0,leaving=false,pingT=null,deadline=0,raf=0,lastKey='';\n\nfunction uid(){return (crypto.randomUUID?crypto.randomUUID():Date.now().toString(36)+Math.random().toString(36).slice(2))}\nfunction myId(){let id=ls.get('id:'+code,'');if(!id){id=uid();ls.set('id:'+code,id)}return id}\nfunction joinLink(){return location.origin+'/?r='+code}\n\n/* ---------- home ---------- */\nfunction renderHome(err=''){\n  S=null;\n  app.innerHTML = code ? `\n    <h1>Quiz party</h1>\n    <p class=\"lead\">Dołączasz do pokoju <b>${esc(code)}</b>. Wpisz imię, pod którym zobaczą cię inni.</p>\n    <input class=\"txt\" id=\"nm\" maxlength=\"18\" placeholder=\"Twoje imię\" value=\"${esc(name)}\" autocomplete=\"nickname\">\n    <button class=\"btn\" id=\"joinBtn\">Dołącz do gry</button>\n    <div class=\"err\">${esc(err)}</div>\n    <button class=\"linkbtn\" id=\"homeBtn\">Załóż własny pokój</button>`\n  : `\n    <h1>Quiz party</h1>\n    <p class=\"lead\">Każdy gra na swoim telefonie. Jedna osoba zakłada pokój, reszta dołącza z linku albo kodu.</p>\n    <input class=\"txt\" id=\"nm\" maxlength=\"18\" placeholder=\"Twoje imię\" value=\"${esc(name)}\" autocomplete=\"nickname\">\n    <button class=\"btn\" id=\"createBtn\">Załóż pokój</button>\n    <div class=\"or\">albo dołącz kodem</div>\n    <input class=\"txt code\" id=\"cd\" maxlength=\"4\" placeholder=\"ABCD\" autocapitalize=\"characters\" autocomplete=\"off\">\n    <button class=\"btn ghost\" id=\"codeBtn\">Dołącz</button>\n    <div class=\"err\">${esc(err)}</div>`;\n  const nm=document.getElementById('nm');\n  const needName=()=>{name=nm.value.trim();if(!name){nm.focus();showErr('Wpisz imię.');return false}ls.set('name',name);return true};\n  const showErr=t=>{app.querySelector('.err').textContent=t};\n  const on=(id,f)=>{const el=document.getElementById(id);if(el)el.onclick=f};\n  on('joinBtn',()=>{if(needName())connect()});\n  on('homeBtn',()=>{code='';history.replaceState(null,'','/');renderHome()});\n  on('createBtn',async e=>{\n    if(!needName())return; e.target.disabled=true;\n    try{const r=await fetch('/api/new');const d=await r.json();if(!r.ok)throw new Error(d.error||'Błąd');\n      code=d.code;history.replaceState(null,'','/?r='+code);connect();\n    }catch(x){e.target.disabled=false;showErr('Nie udało się założyć pokoju. Spróbuj jeszcze raz.')}\n  });\n  on('codeBtn',()=>{const c=cleanCode(document.getElementById('cd').value);\n    if(c.length!==4){showErr('Kod ma 4 litery.');return}\n    if(!needName())return; code=c;history.replaceState(null,'','/?r='+code);connect();});\n  nm.addEventListener('keydown',e=>{if(e.key==='Enter')(document.getElementById('joinBtn')||document.getElementById('createBtn')).click()});\n}\n\n/* ---------- connection ---------- */\nfunction connect(){\n  leaving=false;\n  if(ws){try{ws.onclose=null;ws.close()}catch(e){}}\n  if(!S)app.innerHTML='<p class=\"wait\" style=\"margin-top:3rem\">Łączenie z pokojem...</p>';\n  ws=new WebSocket((location.protocol==='https:'?'wss://':'ws://')+location.host+'/api/ws/'+code);\n  ws.onopen=()=>{retry=0;document.getElementById('banner').hidden=true;ws.send(JSON.stringify({t:'join',id:myId(),name}));\n    clearInterval(pingT);pingT=setInterval(()=>{if(ws.readyState===1)ws.send('{\"t\":\"ping\"}')},20000)};\n  ws.onmessage=e=>{let m;try{m=JSON.parse(e.data)}catch(x){return}\n    if(m.t==='state'){S=m;if(m.q&&m.phase==='question')deadline=Date.now()+m.q.remaining;render()}\n    else if(m.t==='kicked'){leaving=true;ls.del('id:'+code);code='';history.replaceState(null,'','/');renderHome('Host usunął cię z pokoju.')}\n    else if(m.t==='error'){leaving=true;renderHome(m.msg)}};\n  ws.onclose=()=>{clearInterval(pingT);if(leaving)return;\n    document.getElementById('banner').hidden=false;\n    setTimeout(()=>{if(!leaving)connect()},Math.min(8000,500*2**retry++))};\n}\nfunction send(m){if(ws&&ws.readyState===1)ws.send(JSON.stringify(m))}\nfunction leave(){leaving=true;try{ws.close()}catch(e){}code='';history.replaceState(null,'','/');renderHome()}\n\n/* ---------- render ---------- */\nconst isHost=()=>S&&S.me===S.hostId;\nconst me=()=>S.players.find(p=>p.id===S.me);\nconst hostName=()=>(S.players.find(p=>p.id===S.hostId)||{}).name||'host';\nfunction render(){\n  cancelAnimationFrame(raf);\n  ({lobby:renderLobby,question:renderQuestion,reveal:renderReveal,final:renderFinal})[S.phase]();\n}\n\nfunction renderLobby(){\n  const host=isHost(), st=S.settings;\n  const total=S.cats.filter(([c])=>st.cats.includes(c)).reduce((a,[,n])=>a+n,0);\n  const allOn=st.cats.length===S.cats.length;\n  app.innerHTML=`\n    <div class=\"room\" style=\"margin-top:.6rem\">\n      <div><div class=\"lbl\">Kod pokoju</div><div class=\"codebig\">${esc(S.code)}</div></div>\n      <div class=\"qr\" id=\"qr\" aria-label=\"Kod QR z linkiem do pokoju\"></div>\n    </div>\n    <div class=\"share\">\n      <button class=\"btn ghost\" id=\"copyBtn\">Kopiuj link</button>\n      ${navigator.share?'<button class=\"btn ghost\" id=\"shareBtn\">Udostępnij</button>':''}\n    </div>\n    <h2>Gracze (${S.players.filter(p=>p.connected).length})</h2>\n    <div class=\"plist\">${S.players.map(p=>`<span class=\"pchip ${p.connected?'':'off'}\" style=\"--c:${p.color}\"><span class=\"dot\"></span>${esc(p.name)}${p.id===S.me?' <span class=\"tag\">ty</span>':''}${p.id===S.hostId?' <span class=\"tag\">host</span>':''}${host&&p.id!==S.me?`<button class=\"kick\" data-kick=\"${esc(p.id)}\" aria-label=\"Usuń ${esc(p.name)}\">×</button>`:''}</span>`).join('')}</div>\n    <h2>Kategorie</h2>\n    <div class=\"cats\" id=\"cats\">\n      <button data-all=\"1\" aria-pressed=\"${allOn}\" ${host?'':'disabled'}>Wszystkie</button>\n      ${S.cats.map(([c,n])=>`<button data-c=\"${esc(c)}\" aria-pressed=\"${st.cats.includes(c)}\" ${host?'':'disabled'}>${esc(c)}<span>${n}</span></button>`).join('')}\n    </div>\n    <h2>Liczba pytań</h2>\n    <div class=\"seg\" id=\"cnt\">${[5,10,15,20,30].map(n=>`<button data-v=\"${n}\" aria-pressed=\"${n===st.count}\" ${host?'':'disabled'}>${n}</button>`).join('')}</div>\n    <h2>Czas na odpowiedź</h2>\n    <div class=\"seg\" id=\"tm\">${[10,15,20,30].map(n=>`<button data-v=\"${n}\" aria-pressed=\"${n===st.time}\" ${host?'':'disabled'}>${n} s</button>`).join('')}</div>\n    ${host?`\n      <p class=\"small\" style=\"margin-top:1rem\">Szybsza poprawna odpowiedź daje więcej punktów (500-1000). W wybranych kategoriach jest ${total} pytań${total<st.count?`, więc gra będzie miała ${total}`:''}.</p>\n      <button class=\"btn\" id=\"startBtn\" ${st.cats.length?'':'disabled'}>Start gry</button>`\n    :`<div class=\"wait\">Czekamy, aż ${esc(hostName())} wystartuje grę.</div>`}\n    <button class=\"linkbtn\" id=\"leaveBtn\">Wyjdź z pokoju</button>`;\n  const qrEl=document.getElementById('qr');\n  const drawQR=()=>{if(window.QRCode){qrEl.innerHTML='';new QRCode(qrEl,{text:joinLink(),width:224,height:224,correctLevel:QRCode.CorrectLevel.M})}else qrEl.remove()};\n  window.QRCode?drawQR():window.addEventListener('load',drawQR,{once:true});\n  document.getElementById('copyBtn').onclick=async e=>{try{await navigator.clipboard.writeText(joinLink());e.target.textContent='Skopiowano'}catch(x){prompt('Skopiuj link:',joinLink())}};\n  const sb=document.getElementById('shareBtn');if(sb)sb.onclick=()=>navigator.share({title:'Quiz party',text:'Dołącz do quizu, kod '+S.code,url:joinLink()}).catch(()=>{});\n  document.getElementById('leaveBtn').onclick=leave;\n  if(!host)return;\n  const push=ch=>send({t:'settings',...st,...ch});\n  document.getElementById('cats').onclick=e=>{const b=e.target.closest('button');if(!b)return;\n    let cats=new Set(st.cats);\n    if(b.dataset.all)cats=allOn?new Set():new Set(S.cats.map(([c])=>c));\n    else cats.has(b.dataset.c)?cats.delete(b.dataset.c):cats.add(b.dataset.c);\n    push({cats:[...cats]})};\n  document.getElementById('cnt').onclick=e=>{const b=e.target.closest('button');if(b)push({count:+b.dataset.v})};\n  document.getElementById('tm').onclick=e=>{const b=e.target.closest('button');if(b)push({time:+b.dataset.v})};\n  app.querySelectorAll('[data-kick]').forEach(b=>b.onclick=()=>{if(confirm('Usunąć tego gracza z pokoju?'))send({t:'kick',id:b.dataset.kick})});\n  document.getElementById('startBtn').onclick=()=>send({t:'start'});\n}\n\nfunction answersHTML(q,mode){\n  return q.opts.map((o,i)=>{\n    let cls='ans';\n    if(mode==='question'&&S.myAnswer===i)cls+=' picked';\n    if(mode==='reveal'){cls+=i===q.ok?' ok':(i===S.myAnswer?' bad':' dim')}\n    const dis=mode!=='question'||S.myAnswer!==null;\n    return `<button class=\"${cls}\" data-k=\"${i}\" ${dis?'disabled':''}><b>${'ABCD'[i]}</b>${esc(o)}</button>`}).join('');\n}\nfunction renderQuestion(){\n  const q=S.q, live=S.players.filter(p=>p.connected), done=live.filter(p=>p.answered).length;\n  app.innerHTML=`\n    <div class=\"topbar\"><span>Pytanie ${q.i} z ${q.total}</span><span>Odpowiedzi: ${done}/${live.length}</span></div>\n    <div class=\"stage\">\n      <p class=\"q\">${esc(q.text)}</p>\n      <div class=\"cat\">${esc(q.cat)}</div>\n      <div class=\"timer\"><i id=\"bar\"></i></div>\n    </div>\n    <div class=\"answers\" id=\"ans\">${answersHTML(q,'question')}</div>\n    <div class=\"note\">${S.myAnswer!==null?'Odpowiedź zapisana. Czekamy na resztę.':''}</div>\n    ${isHost()?'<button class=\"linkbtn\" id=\"endBtn\">Zakończ grę teraz</button>':''}`;\n  document.getElementById('ans').onclick=e=>{const b=e.target.closest('.ans');if(!b||S.myAnswer!==null)return;\n    S.myAnswer=+b.dataset.k;send({t:'answer',k:S.myAnswer});\n    app.querySelectorAll('.ans').forEach((x,i)=>{x.disabled=true;if(i===S.myAnswer)x.classList.add('picked')});\n    app.querySelector('.note').textContent='Odpowiedź zapisana. Czekamy na resztę.'};\n  const eb=document.getElementById('endBtn');if(eb)eb.onclick=()=>{if(confirm('Zakończyć grę i pokazać wyniki?'))send({t:'end'})};\n  const bar=document.getElementById('bar'), T=q.time*1000;\n  const step=()=>{const left=Math.max(0,deadline-Date.now());bar.style.width=(left/T*100)+'%';if(left>0)raf=requestAnimationFrame(step)};\n  step();\n}\n\nfunction scoresHTML(showGain){\n  const s=S.players.slice().sort((a,b)=>b.score-a.score||b.correct-a.correct);\n  let place=0,prev=null;\n  return `<div class=\"scores\">${s.map((p,i)=>{if(p.score!==prev){place=i+1;prev=p.score}\n    return `<div class=\"row ${p.id===S.me?'me':''}\" style=\"--c:${p.color}\"><span class=\"place\">${place}</span><span class=\"nm\">${esc(p.name)}</span>${showGain&&p.gain?`<span class=\"gain\">+${p.gain}</span>`:''}<span class=\"pt\">${p.score}</span></div>`}).join('')}</div>`;\n}\nfunction renderReveal(){\n  const q=S.q, m=me(), last=q.i===q.total;\n  let res;\n  if(m&&S.myAnswer===q.ok) res=`<div class=\"result good\">+${m.gain} pkt<span>Dobrze!</span></div>`;\n  else if(S.myAnswer===null) res=`<div class=\"result miss\">Brak odpowiedzi<span>Poprawna: ${esc(q.opts[q.ok])}</span></div>`;\n  else res=`<div class=\"result miss\">Pudło<span>Poprawna: ${esc(q.opts[q.ok])}</span></div>`;\n  app.innerHTML=`\n    <div class=\"topbar\"><span>Pytanie ${q.i} z ${q.total}</span><span>${esc(q.cat)}</span></div>\n    <div class=\"stage\"><p class=\"q\">${esc(q.text)}</p></div>\n    <div class=\"answers\">${answersHTML(q,'reveal')}</div>\n    ${res}\n    <h2>Ranking</h2>\n    ${scoresHTML(true)}\n    ${isHost()?`<button class=\"btn\" id=\"nextBtn\">${last?'Wyniki końcowe':'Następne pytanie'}</button><button class=\"linkbtn\" id=\"endBtn\">Zakończ grę teraz</button>`\n      :`<div class=\"wait\">Czekamy, aż ${esc(hostName())} przejdzie dalej.</div>`}`;\n  const nb=document.getElementById('nextBtn');if(nb)nb.onclick=()=>{nb.disabled=true;send({t:'next'})};\n  const eb=document.getElementById('endBtn');if(eb)eb.onclick=()=>{if(confirm('Zakończyć grę i pokazać wyniki?'))send({t:'end'})};\n}\n\nfunction renderFinal(){\n  const s=S.players.slice().sort((a,b)=>b.score-a.score);\n  const top=s.length?s[0].score:0, w=s.filter(p=>p.score===top);\n  app.innerHTML=`\n    <p class=\"small\" style=\"margin-top:1rem\">Koniec gry</p>\n    <p class=\"winner\">${w.length===1?`Wygrywa ${esc(w[0].name)}!`:`Remis: ${w.map(p=>esc(p.name)).join(', ')}`}</p>\n    ${scoresHTML(false)}\n    ${isHost()?`<button class=\"btn\" id=\"againBtn\">Zagraj jeszcze raz</button><button class=\"btn ghost\" id=\"lobbyBtn\">Wróć do poczekalni</button>`\n      :`<div class=\"wait\">Czekamy, aż ${esc(hostName())} zacznie nową grę.</div>`}\n    <button class=\"linkbtn\" id=\"leaveBtn\">Wyjdź z pokoju</button>`;\n  const a=document.getElementById('againBtn');if(a)a.onclick=()=>send({t:'start'});\n  const l=document.getElementById('lobbyBtn');if(l)l.onclick=()=>send({t:'lobby'});\n  document.getElementById('leaveBtn').onclick=leave;\n}\n\n/* ---------- boot ---------- */\nif(code&&name&&ls.get('id:'+code,'')) connect(); else renderHome();\ndocument.addEventListener('visibilitychange',()=>{if(!document.hidden&&code&&!leaving&&ws&&ws.readyState>1)connect()});\n</script>\n</body>\n</html>\n";

const CAT_MAP = {
  Biologia: 'Przyroda i człowiek', Nauka: 'Nauka', Kosmos: 'Kosmos', Geografia: 'Geografia',
  Historia: 'Historia', Polska: 'Polska', Literatura: 'Literatura', Sztuka: 'Sztuka',
  Muzyka: 'Muzyka', Sport: 'Sport', Kuchnia: 'Kuchnia', Technologia: 'Technologia i motoryzacja',
  Motoryzacja: 'Technologia i motoryzacja', Film: 'Film i gry', Gry: 'Film i gry',
  Zagadki: 'Zagadki i liczby', 'Różne': 'Różne',
};
const ALL = QUESTIONS.map((q, i) => ({ id: i, text: q[0], cat: CAT_MAP[q[1]] || q[1], ok: q[2], wrong: q.slice(3) }));
const CATS = [...new Set(ALL.map(q => q.cat))].sort((a, b) => a.localeCompare(b, 'pl'));
const CAT_COUNTS = CATS.map(c => [c, ALL.filter(q => q.cat === c).length]);
const COLORS = ['#FF6B5B', '#13A89C', '#8A5CF6', '#E9A100', '#2F8CFF', '#E0479E', '#5FAE2E', '#FF8A1F',
  '#00A3C4', '#B5651D', '#7C83FD', '#D9415B', '#2BB673', '#C05CE0', '#F2C230', '#4A90A4'];
const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
const MAX_PLAYERS = 40;
const COUNTS = [5, 10, 15, 20, 30];
const TIMES = [10, 15, 20, 30];
const IDLE_MS = 10 * 60 * 1000;

const json = (d, s = 200) => new Response(JSON.stringify(d), { status: s, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (url.pathname === '/api/new') {
      for (let i = 0; i < 10; i++) {
        const code = Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
        const stub = env.ROOMS.get(env.ROOMS.idFromName(code));
        const r = await stub.fetch('https://room/claim');
        if (r.ok) return json({ code });
      }
      return json({ error: 'Brak wolnych pokoi, spróbuj ponownie.' }, 503);
    }
    const m = url.pathname.match(/^\/api\/ws\/([A-Z]{4})$/);
    if (m) {
      if (req.headers.get('Upgrade') !== 'websocket') return new Response('Expected WebSocket', { status: 426 });
      return env.ROOMS.get(env.ROOMS.idFromName(m[1])).fetch(req);
    }
    if (url.pathname === '/' || url.pathname === '/index.html') return new Response(HTML, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-cache' } });
    return new Response('Not found', { status: 404 });
  },
};

export class Room {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.sockets = new Map(); // ws -> playerId
    this.lastActivity = 0;
    this.used = new Set();
    this.resetRoom();
  }

  resetRoom() {
    clearTimeout(this.timer);
    this.phase = 'lobby';
    this.players = new Map();
    this.order = [];
    this.hostId = null;
    this.settings = { cats: [...CATS], count: 10, time: 20 };
    this.deck = [];
    this.qi = 0;
    this.qStart = 0;
    this.colorIdx = 0;
  }

  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === '/claim') {
      const live = [...this.players.values()].some(p => p.connected);
      if (live || Date.now() - this.lastActivity < IDLE_MS) return new Response('taken', { status: 409 });
      this.resetRoom();
      this.used = new Set();
      this.lastActivity = Date.now();
      return new Response('ok');
    }
    this.code = url.pathname.split('/').pop();
    const [client, server] = Object.values(new WebSocketPair());
    server.accept();
    server.addEventListener('message', e => this.onMessage(server, e.data));
    server.addEventListener('close', () => this.onClose(server));
    server.addEventListener('error', () => this.onClose(server));
    return new Response(null, { status: 101, webSocket: client });
  }

  send(ws, msg) { try { ws.send(JSON.stringify(msg)); } catch (e) { } }

  onMessage(ws, raw) {
    let m; try { m = JSON.parse(raw); } catch (e) { return; }
    if (!m || typeof m.t !== 'string') return;
    this.lastActivity = Date.now();
    if (m.t === 'ping') return this.send(ws, { t: 'pong' });
    if (m.t === 'join') return this.join(ws, m);

    const id = this.sockets.get(ws);
    const p = id && this.players.get(id);
    if (!p) return;
    const isHost = id === this.hostId;

    switch (m.t) {
      case 'settings': {
        if (!isHost || this.phase !== 'lobby') return;
        if (Array.isArray(m.cats)) this.settings.cats = CATS.filter(c => m.cats.includes(c));
        if (COUNTS.includes(m.count)) this.settings.count = m.count;
        if (TIMES.includes(m.time)) this.settings.time = m.time;
        return this.broadcast();
      }
      case 'start': {
        if (!isHost || (this.phase !== 'lobby' && this.phase !== 'final')) return;
        if (!this.settings.cats.length) return;
        this.players.forEach(pl => { pl.score = 0; pl.gain = 0; pl.correct = 0; });
        this.buildDeck();
        this.qi = 0;
        return this.ask();
      }
      case 'answer': {
        if (this.phase !== 'question' || p.answer !== null) return;
        const k = m.k;
        if (!Number.isInteger(k) || k < 0 || k >= this.deck[this.qi].opts.length) return;
        p.answer = k;
        p.answerAt = Date.now();
        if (this.allAnswered()) return this.reveal();
        return this.broadcast();
      }
      case 'next': {
        if (!isHost || this.phase !== 'reveal') return;
        this.qi++;
        if (this.qi >= this.deck.length) { this.phase = 'final'; return this.broadcast(); }
        return this.ask();
      }
      case 'end': {
        if (!isHost || (this.phase !== 'question' && this.phase !== 'reveal')) return;
        clearTimeout(this.timer);
        this.phase = 'final';
        return this.broadcast();
      }
      case 'lobby': {
        if (!isHost || this.phase !== 'final') return;
        this.phase = 'lobby';
        this.players.forEach(pl => { pl.score = 0; pl.gain = 0; pl.correct = 0; pl.answer = null; });
        // drop players who left
        for (const pid of [...this.order]) if (!this.players.get(pid).connected) this.removePlayer(pid);
        return this.broadcast();
      }
      case 'kick': {
        if (!isHost || m.id === id || !this.players.has(m.id)) return;
        for (const [s, sid] of this.sockets) if (sid === m.id) { this.send(s, { t: 'kicked' }); this.sockets.delete(s); try { s.close(1000, 'kicked'); } catch (e) { } }
        this.removePlayer(m.id);
        if (this.phase === 'question' && this.allAnswered()) return this.reveal();
        return this.broadcast();
      }
    }
  }

  join(ws, m) {
    const id = typeof m.id === 'string' ? m.id.slice(0, 64) : '';
    if (!id) return;
    const name = (typeof m.name === 'string' ? m.name : '').replace(/\s+/g, ' ').trim().slice(0, 18) || 'Gracz';
    let p = this.players.get(id);
    if (p) {
      for (const [s, sid] of this.sockets) if (sid === id && s !== ws) { this.sockets.delete(s); try { s.close(1000, 'replaced'); } catch (e) { } }
      p.connected = true;
      p.name = name;
    } else {
      if (this.players.size >= MAX_PLAYERS) return this.send(ws, { t: 'error', msg: 'Pokój jest pełny.' });
      p = { id, name, color: COLORS[this.colorIdx++ % COLORS.length], score: 0, gain: 0, correct: 0, connected: true, answer: null, answerAt: 0 };
      this.players.set(id, p);
      this.order.push(id);
    }
    this.sockets.set(ws, id);
    const host = this.hostId && this.players.get(this.hostId);
    if (!host || !host.connected) this.hostId = id;
    this.broadcast();
  }

  removePlayer(pid) {
    this.players.delete(pid);
    this.order = this.order.filter(x => x !== pid);
    if (this.hostId === pid) this.pickHost();
  }

  pickHost() {
    this.hostId = this.order.find(pid => this.players.get(pid)?.connected) || this.order[0] || null;
  }

  onClose(ws) {
    const id = this.sockets.get(ws);
    if (!id) return;
    this.sockets.delete(ws);
    if ([...this.sockets.values()].includes(id)) return;
    const p = this.players.get(id);
    if (!p) return;
    p.connected = false;
    if (this.hostId === id) this.pickHost();
    if (this.phase === 'question' && this.allAnswered()) return this.reveal();
    this.broadcast();
  }

  buildDeck() {
    const pool = ALL.filter(q => this.settings.cats.includes(q.cat));
    let fresh = shuffle(pool.filter(q => !this.used.has(q.id)));
    if (fresh.length < this.settings.count) { pool.forEach(q => this.used.delete(q.id)); fresh = shuffle(pool.slice()); }
    this.deck = fresh.slice(0, this.settings.count).map(q => {
      this.used.add(q.id);
      const opts = shuffle([q.ok, ...q.wrong]);
      return { text: q.text, cat: q.cat, opts, ok: opts.indexOf(q.ok) };
    });
  }

  ask() {
    this.phase = 'question';
    this.players.forEach(pl => { pl.answer = null; pl.gain = 0; });
    this.qStart = Date.now();
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.reveal(), this.settings.time * 1000 + 400);
    this.broadcast();
  }

  allAnswered() {
    const live = [...this.players.values()].filter(p => p.connected);
    return live.length > 0 && live.every(p => p.answer !== null);
  }

  reveal() {
    if (this.phase !== 'question') return;
    clearTimeout(this.timer);
    this.phase = 'reveal';
    const q = this.deck[this.qi];
    const T = this.settings.time * 1000;
    this.players.forEach(p => {
      if (p.answer === q.ok) {
        const frac = Math.max(0, 1 - (p.answerAt - this.qStart) / T);
        p.gain = 500 + Math.round(500 * frac);
        p.score += p.gain;
        p.correct++;
      } else p.gain = 0;
    });
    this.broadcast();
  }

  view(me) {
    const inQ = this.phase === 'question' || this.phase === 'reveal';
    const q = inQ ? this.deck[this.qi] : null;
    const mine = this.players.get(me);
    return {
      t: 'state', code: this.code, me, hostId: this.hostId, phase: this.phase,
      settings: this.settings, cats: CAT_COUNTS,
      players: this.order.map(pid => {
        const p = this.players.get(pid);
        return {
          id: p.id, name: p.name, color: p.color, score: p.score, correct: p.correct, connected: p.connected,
          answered: p.answer !== null, gain: p.gain,
          choice: this.phase === 'reveal' ? p.answer : null,
        };
      }),
      q: q && {
        i: this.qi + 1, total: this.deck.length, text: q.text, cat: q.cat, opts: q.opts, time: this.settings.time,
        remaining: this.phase === 'question' ? Math.max(0, this.qStart + this.settings.time * 1000 - Date.now()) : 0,
        ok: this.phase === 'reveal' ? q.ok : null,
      },
      myAnswer: mine ? mine.answer : null,
    };
  }

  broadcast() {
    for (const [ws, id] of this.sockets) this.send(ws, this.view(id));
  }
}
