import { Language, LanguageTranslation } from './types';

const sv: LanguageTranslation = {
  welcomeTitle: 'CityTech Undersökning',
  welcomeText:
    'Syftet med undersökningen är att förbättra det som redan fungerar bra, så att det fungerar ännu bättre och passar ännu fler.\n\nSom tack för din tid kommer du efter genomförd undersökning att få en QR-kod som gäller för en kopp kaffe på valfri Narvesen-butik.',
  introText: `Jag ser en stad med enorm potential, men jag upplever också att det saknas en röd tråd för att göra Sandnessjøen så attraktiv som den förtjänar att vara. Idag är trösklarna för höga – både för dig som invånare och för lokala näringslivet. Att leva, handla och äta här har blivit onödigt dyrt och krångligt.\n\nJag bygger nu den lösning som jag själv saknar. Med min erfarenhet av att utveckla digitala lösningar vill jag kapa de hinder som finns mellan stadens företag och dess invånare. Genom att implementera smart teknik och förenklad logistik vill jag göra det enklare för näringslivet att nå ut, och mer prisvärt för dig att ta del av stadens utbud.\n\nDin röst är avgörande. För att kunna genomföra dessa förbättringar behöver jag din hjälp. Genom att svara på min undersökning ger du mig den insikt som krävs för att skapa en smidigare vardag och ett starkare, mer digitalt rustat Sandnessjøen.\n\nTack för att du hjälper mig att förenkla och förbättra staden Sandnessjoen!`,
  termsButton: 'Läs villkor & integritetspolicy',
  termsTitle: 'Villkor & Integritetspolicy',
  termsText: `Personuppgiftsansvarig är
Akram Abdulkadir.

Jag samlar endast in e-postadress om du frivilligt väljer att bli informerad när appen lanseras. Uppgifterna används enbart för detta ändamål och delas inte med tredje part.

Personuppgifterna lagras säkert i en databas hos Supabase inom EU (Stockholm, Sverige – region EU North). Uppgifterna sparas tills appen lanseras eller längst i 12 månader, om de inte begärs raderade tidigare.

Du har rätt att begära tillgång till eller radering av dina uppgifter när som helst.

För frågor eller begäran om radering, kontakta: info@citytech.se

──────────────────────────────

Villkor för deltagande

Genom att delta i denna marknadsundersökning godkänner du följande:

Syfte med undersökningen

• Dina svar används för att analysera behovet av lokala tjänster såsom matbeställning, dagligvaruleverans och digitala handelslösningar.

• Undersökningen genomförs i idé- och analysfas för att utvärdera marknadsbehovet i regionen.

Frivillighet

• Deltagandet är helt frivilligt.

• Du kan när som helst avbryta undersökningen innan den skickas in.

Anonymitet och personuppgifter

• Undersökningen är utformad för att vara anonym.

• Inga namn, personnummer eller identifierande uppgifter efterfrågas.

• IP-adresser eller teknisk metadata används inte för att identifiera enskilda deltagare.

Belöning för deltagande

• Som tack för din medverkan erhåller du en kaffekupong från Narvesen.

• Kupongen gäller till och med 10.06.2026 respektive 17.06.2026.

• Kupongen är personlig och får inte kopieras, delas eller missbrukas.

• Eventuellt försök till duplicering, spridning eller missbruk kan medföra att kupongen ogiltigförklaras.

• Kupongen kan inte bytas mot kontanter.`,
  termsAccept: 'Jag accepterar',
  termsClose: 'Stäng',
  startSurvey: 'Starta undersökning',
  thankYou: 'Tack för din medverkan!',
  thankYouText: 'Din åsikt är viktig för oss. Här är din gratis kafékupong från Narvesen.',
  voucherDisclaimer: 'Gäller för en kopp kaffe. Engångskupong.',
  goToHome: 'Gå till startsidan',
  back: 'Tillbaka',
  next: 'Nästa',
  finish: 'Avsluta',
  completeSurvey: 'Slutför undersökning',
  emailPlaceholder: 'Din e-postadress',
  exitModalTitle: 'Avsluta undersökningen?',
  exitModalText: 'Dina svar sparas inte och du får ingen kupong.',
  exitModalConfirm: 'Ja, avsluta',
  exitModalCancel: 'Fortsätt',
  submittingLine1: 'Din kupong på Narvesen genereras,',
  submittingLine2: 'ett ögonblick! ☕',
  questions: [
    {
      text: 'Var bor du huvudsakligen?',
      options: [
        { label: 'Sandnessjøen' },
        { label: 'Herøy' },
        { label: 'Dønna' },
        { label: 'Leirfjord' },
        { label: 'Annan ort' },
      ],
    },
    {
      text: 'Vilken åldersgrupp tillhör du?',
      options: [
        { label: 'Under 20 år' },
        { label: '20–35 år' },
        { label: '36–50 år' },
        { label: '51–65 år' },
        { label: 'Över 65 år' },
      ],
    },
    {
      text: 'Vilket kön identifierar du dig som?',
      options: [
        { label: 'Man' },
        { label: 'Kvinna' },
        { label: 'Annat' },
        { label: 'Vill inte uppge' },
      ],
    },
    {
      text: 'Hur ofta skulle du realistiskt beställa mat med hemleverans om det finns i Sandnessjøen?',
      heroyText: 'Vad upplever du idag oftast som den största utmaningen vid paketutlämning?',
      heroyOptions: [
        { label: 'Begränsade öppettider' },
        { label: 'Långa köer och väntetid' },
        { label: 'Lång avstånd till utlämningsstället' },
        { label: 'Problem med parkering eller logistik' },
      ],
      donnaText: 'Vad upplever du idag oftast som den största utmaningen vid paketutlämning?',
      donnaOptions: [
        { label: 'Begränsade öppettider' },
        { label: 'Långa köer och väntetid' },
        { label: 'Lång avstånd till utlämningsstället' },
        { label: 'Problem med parkering eller logistik' },
      ],
      options: [
        { label: 'Aldrig' },
        { label: '1–2 gånger per månad' },
        { label: '1 gång per vecka' },
        { label: '2–3 gånger per vecka' },
        { label: 'Oftare än 3 gånger per vecka' },
      ],
    },
    {
      text: 'Om matleverans fanns – hur tror du att det skulle påverka hur ofta du äter restaurangmat?',
      heroyText: 'Hur viktigt är det för dig att kunna hämta ut varor även utanför vanliga butikstider?',
      heroyOptions: [
        { label: 'Mycket viktigt' },
        { label: 'Ganska viktigt' },
        { label: 'Inte särskilt viktigt' },
        { label: 'Inte viktigt alls' },
      ],
      donnaText: 'Hur viktigt är det för dig att kunna hämta ut varor även utanför vanliga butikstider?',
      donnaOptions: [
        { label: 'Mycket viktigt' },
        { label: 'Ganska viktigt' },
        { label: 'Inte särskilt viktigt' },
        { label: 'Inte viktigt alls' },
      ],
      options: [
        { label: 'Skulle äta mer restaurangmat' },
        { label: 'Ungefär lika ofta som idag' },
        { label: 'Mindre ofta än idag' },
        { label: 'Osäker' },
      ],
    },
    {
      text: 'Vad skulle vara den främsta anledningen för dig att använda dagligvaruleverans?',
      heroyText: 'Hur ofta åker du till Sandnessjøen för att handla varor du inte kan köpa lokalt?',
      heroyOptions: [
        { label: 'Flera gånger i veckan' },
        { label: 'Varje vecka' },
        { label: 'Någon gång i månaden' },
        { label: 'Sällan eller aldrig' },
      ],
      donnaText: 'Hur ofta åker du till Sandnessjøen för att handla varor du inte kan köpa lokalt?',
      donnaOptions: [
        { label: 'Flera gånger i veckan' },
        { label: 'Varje vecka' },
        { label: 'Någon gång i månaden' },
        { label: 'Sällan eller aldrig' },
      ],
      options: [
        { label: 'Spara tid i vardagen' },
        { label: 'Söndagsstängda butiker' },
        { label: 'Dåligt väder' },
        { label: 'Bekvämlighet/planering' },
        { label: 'Skulle inte använda' },
      ],
    },
    {
      text: 'Nu går vi över till näthandel, hur ofta handlar du på nätet? Alltså varor/produkter, inte tjänster!',
      heroyText: 'Hur hade du upplevt en App där det mesta av ditt vardagsliv finns samlad?',
      heroyOptions: [
        { label: 'Mycket positivt – det skulle förenkla vardagen' },
        { label: 'Positivt – om appen är enkel att använda' },
        { label: 'Tveksamt – föredrar att använda olika appar' },
        { label: 'Inte intresserad' },
      ],
      donnaText: 'Vad gör du oftast när du behöver handla något på en söndag?',
      donnaOptions: [
        { label: 'Handlar i en söndagsöppen butik i Herøy' },
        { label: 'Handlar på bensinstation i Sandnessjøen' },
        { label: 'Väntar tills på söndag' },
      ],
      options: [
        { label: 'Flera gånger per vecka' },
        { label: 'Varje vecka' },
        { label: '1–2 gånger i månaden' },
        { label: 'Mer sällan eller aldrig' },
      ],
    },
    {
      text: 'Om du måste välja – vad bör lanseras först i Sandnessjøen?',
      heroyText: 'Om du fick välja – vad bör lanseras först i Herøy?',
      heroyOptions: [
        { label: 'Matleverans från restauranger' },
        { label: 'Dagligvaror med hemleverans' },
        { label: 'En app som samlar allt (mat och handel)' },
        { label: 'Inget av dessa' },
      ],
      donnaText: 'Nu går vi över till näthandel, hur ofta handlar du på nätet? Alltså varor/produkter, inte tjänster!',
      donnaOptions: [
        { label: 'Flera gånger i veckan' },
        { label: 'Varje vecka' },
        { label: '1–2 gånger i månaden' },
        { label: 'Mer sällan eller aldrig' },
      ],
      leirfjordText: 'Om du fick välja – vad bör lanseras först i Leirfjord?',
      leirfjordOptions: [
        { label: 'Matleverans från restauranger' },
        { label: 'Dagligvaror med hemleverans' },
        { label: 'En app som samlar allt (mat och handel)' },
        { label: 'Spelar ingen roll' },
      ],
      options: [
        { label: 'Matleverans från restauranger' },
        { label: 'Dagligvaror med hemleverans' },
        { label: 'En app som samlar allt (mat + handel)' },
        { label: 'Inget av dessa' },
      ],
    },
    {
      text: 'Hur hade du upplevt en App där det mesta av ditt vardagsliv finns samlad?',
      options: [
        { label: 'Mycket positivt – det skulle förenkla vardagen' },
        { label: 'Positivt – om appen är enkel att använda' },
        { label: 'Tveksamt – föredrar att använda olika appar' },
        { label: 'Inte intresserad' },
      ],
    },
    {
      text: 'Avslutningsvis, vill du bli meddelad när en lokal App lanseras?',
      options: [{ label: 'Ja, gärna!' }, { label: 'Nej, tack' }],
    },
    {
      text: 'Hur beskriver du dina digitala kunskaper?',
      options: [
        { label: 'Expert – jag hanterar det mesta' },
        { label: 'Bra – använder appar dagligen' },
        { label: 'Lagom – klarar det mesta' },
        { label: 'Lite van – behöver ibland hjälp' },
        { label: 'Behöver hjälp med digitala tjänster' },
      ],
    },
  ],
};

const no: LanguageTranslation = {
  welcomeTitle: 'CityTech Undersøkelse',
  welcomeText:
    'Formålet med undersøkelsen er å forbedre det som allerede fungerer bra, slik at det fungerer enda bedre og passer enda flere.\n\nSom takk for din tid vil du etter gjennomført undersøkelse få en QR-kode som gjelder for en kopp kaffe på valgfri Narvesen-butikk.',
  introText: `Jeg ser en by med enormt potensial, men jeg opplever også at det mangler en rød tråd for å gjøre Sandnessjøen så attraktiv som den fortjener å være. I dag er tersklene for høye – både for deg som innbygger og for det lokale næringslivet. Å leve, handle og spise her har blitt unødvendig dyrt og komplisert.\n\nJeg bygger nå løsningen som jeg selv savner. Med min erfaring med å utvikle digitale løsninger ønsker jeg å fjerne hindringene som finnes mellom byens bedrifter og dens innbyggere. Ved å implementere smart teknologi og forenklet logistikk ønsker jeg å gjøre det enklere for næringslivet å nå ut, og mer prisverdig for deg å ta del av byens tilbud.\n\nDin stemme er avgjørende. For å kunne gjennomføre disse forbedringene trenger jeg din hjelp. Ved å svare på undersøkelsen min gir du meg den innsikten som kreves for å skape en enklere hverdag og et sterkere, mer digitalt rustet Sandnessjøen.\n\nTakk for at du hjelper meg med å forenkle og forbedre byen Sandnessjøen!`,
  termsButton: 'Les vilkår & personvernerklæring',
  termsTitle: 'Vilkår & Personvernerklæring',
  termsText: `Personvernsansvarlig er
Akram Abdulkadir.

Jeg samlar bare inn e-postadresse hvis du frivillig velger å bli informert når appen lanseres. Dataene brukes kun til dette formålet og deles ikke med tredjeparter.

Personverdsdataene lagres sikkert i en database hos Supabase innen EU (Stockholm, Sverige – region EU Nord). Dataene lagres til appen lanseres eller i hvert fall i 12 måneder, hvis de ikke blir forespurte om å slettes tidligere.

Du har rett til å be om tilgang til eller sletting av dine data når som helst.

For spørsmål eller forespørsel om sletting, kontakt: info@citytech.se

──────────────────────────────

Vilkår for deltakelse

Ved å delta i denne markedsundersøkelsen godtar du følgende:

Formål med undersøkelsen

• Svarene dine brukes til å analysere behovet for lokale tjenester som matbestilling, dagligvareleveranse og digitale handelsløsninger.

• Undersøkelsen gjennomføres i idé- og analysefasen for å vurdere markedsbehovet i regionen.

Frivillighet

• Deltakelsen er helt frivillig.

• Du kan når som helst avbryte undersøkelsen før den sendes inn.

Anonymitet og personopplysninger

• Undersøkelsen er utformet for å være anonym.

• Ingen navn, personnummer eller identifiserende opplysninger etterspørres.

• IP-adresser eller teknisk metadata brukes ikke til å identifisere enkeltdeltakere.

Belønning for deltakelse

• Som takk for din deltakelse får du en kaffekupong fra Narvesen.

• Kupongen gjelder til og med 10.06.2026 henholdsvis 17.06.2026.

• Kupongen er personlig og må ikke kopieres, deles eller misbrukes.

• Eventuelt forsøk på duplisering, spredning eller misbruk kan føre til at kupongen ugyldiggjøres.

• Kupongen kan ikke byttes mot kontanter.`,
  termsAccept: 'Jeg aksepterer',
  termsClose: 'Lukk',
  startSurvey: 'Start undersøkelse',
  thankYou: 'Takk for din deltakelse!',
  thankYouText: 'Din mening er viktig for oss. Her er din gratis kafékupong fra Narvesen.',
  voucherDisclaimer: 'Gjelder for én kopp kaffe. Engangskupong.',
  goToHome: 'Gå til startsiden',
  back: 'Tilbake',
  next: 'Neste',
  finish: 'Fullfør',
  completeSurvey: 'Fullfør undersøkelse',
  emailPlaceholder: 'Din e-postadresse',
  exitModalTitle: 'Avslutte undersøkelsen?',
  exitModalText: 'Svarene dine lagres ikke og du får ingen kupong.',
  exitModalConfirm: 'Ja, avslutt',
  exitModalCancel: 'Fortsett',
  submittingLine1: 'Din Narvesen-kupong genereres,',
  submittingLine2: 'et øyeblikk! ☕',
  questions: [
    {
      text: 'Hvor bor du primært?',
      options: [
        { label: 'Sandnessjøen' },
        { label: 'Herøy' },
        { label: 'Dønna' },
        { label: 'Leirfjord' },
        { label: 'Annet sted' },
      ],
    },
    {
      text: 'Hvilken aldersgruppe tilhører du?',
      options: [
        { label: 'Under 20 år' },
        { label: '20–35 år' },
        { label: '36–50 år' },
        { label: '51–65 år' },
        { label: 'Over 65 år' },
      ],
    },
    {
      text: 'Hvilket kjønn identifiserer du deg som?',
      options: [
        { label: 'Mann' },
        { label: 'Kvinne' },
        { label: 'Annet' },
        { label: 'Vil ikke oppgi' },
      ],
    },
    {
      text: 'Hvor ofte ville du realistisk bestille mat med hjemlevering hvis det fantes i Sandnessjøen?',
      heroyText: 'Hva opplever du oftest i dag som den største utfordringen ved pakkeuthenting?',
      heroyOptions: [
        { label: 'Begrensede åpningstider' },
        { label: 'Lange køer og ventetid' },
        { label: 'Lang avstand til utleveringsstedet' },
        { label: 'Problemer med parkering eller logistikk' },
      ],
      donnaText: 'Hva opplever du oftest i dag som den største utfordringen ved pakkeuthenting?',
      donnaOptions: [
        { label: 'Begrensede åpningstider' },
        { label: 'Lange køer og ventetid' },
        { label: 'Lang avstand til utleveringsstedet' },
        { label: 'Problemer med parkering eller logistikk' },
      ],
      options: [
        { label: 'Aldri' },
        { label: '1–2 ganger per måned' },
        { label: '1 gang per uke' },
        { label: '2–3 ganger per uke' },
        { label: 'Oftere enn 3 ganger per uke' },
      ],
    },
    {
      text: 'Hvis matleverans fantes – hvordan tror du det ville påvirke hvor ofte du spiser på restaurant?',
      heroyText: 'Hvor viktig er det for deg å kunne hente ut varer også utenfor vanlige butikktider?',
      heroyOptions: [
        { label: 'Svært viktig' },
        { label: 'Ganske viktig' },
        { label: 'Ikke særlig viktig' },
        { label: 'Ikke viktig i det hele tatt' },
      ],
      donnaText: 'Hvor viktig er det for deg å kunne hente ut varer også utenfor vanlige butikktider?',
      donnaOptions: [
        { label: 'Svært viktig' },
        { label: 'Ganske viktig' },
        { label: 'Ikke særlig viktig' },
        { label: 'Ikke viktig i det hele tatt' },
      ],
      options: [
        { label: 'Ville spist mer restaurantmat' },
        { label: 'Omtrent like ofte som i dag' },
        { label: 'Sjeldnere enn i dag' },
        { label: 'Usikker' },
      ],
    },
    {
      text: 'Hva ville være den viktigste grunnen for deg til å bruke dagligvareleveranse?',
      heroyText: 'Hvor ofte reiser du til Sandnessjøen for å handle varer du ikke kan kjøpe lokalt?',
      heroyOptions: [
        { label: 'Flere ganger i uken' },
        { label: 'Hver uke' },
        { label: 'En gang i måneden eller så' },
        { label: 'Sjelden eller aldri' },
      ],
      donnaText: 'Hvor ofte reiser du til Sandnessjøen for å handle varer du ikke kan kjøpe lokalt?',
      donnaOptions: [
        { label: 'Flere ganger i uken' },
        { label: 'Hver uke' },
        { label: 'En gang i måneden eller så' },
        { label: 'Sjelden eller aldri' },
      ],
      options: [
        { label: 'Spare tid i hverdagen' },
        { label: 'Søndagsstengde butikker' },
        { label: 'Dårlig vær' },
        { label: 'Bekvemmelighet/planlegging' },
        { label: 'Ville ikke brukt det' },
      ],
    },
    {
      text: 'Nå går vi over til netthandel, hvor ofte handler du på nett? Altså varer/produkter, ikke tjenester!',
      heroyText: 'Hvordan ville du oppleve en App der det meste av hverdagslivet ditt er samlet?',
      heroyOptions: [
        { label: 'Svært positivt – det ville forenkle hverdagen' },
        { label: 'Positivt – hvis appen er enkel å bruke' },
        { label: 'Usikker – foretrekker å bruke ulike apper' },
        { label: 'Ikke interessert' },
      ],
      donnaText: 'Hva gjør du oftest når du trenger å handle noe på en søndag?',
      donnaOptions: [
        { label: 'Handler i en søndagsåpen butikk i Herøy' },
        { label: 'Handler på bensinstasjon i Sandnessjøen' },
        { label: 'Venter til på søndag' },
      ],
      options: [
        { label: 'Flere ganger per uke' },
        { label: 'Hver uke' },
        { label: '1–2 ganger i måneden' },
        { label: 'Sjeldnere eller aldri' },
      ],
    },
    {
      text: 'Hvis du må velge – hva bør lanseres først i Sandnessjøen?',
      heroyText: 'Hvis du fikk velge – hva bør lanseres først i Herøy?',
      heroyOptions: [
        { label: 'Matleveranse fra restauranter' },
        { label: 'Dagligvarer med hjemlevering' },
        { label: 'En app som samler alt (mat og handel)' },
        { label: 'Ingen av disse' },
      ],
      donnaText: 'Nå går vi over til netthandel, hvor ofte handler du på nett? Altså varer/produkter, ikke tjenester!',
      donnaOptions: [
        { label: 'Flere ganger i uken' },
        { label: 'Hver uke' },
        { label: '1–2 ganger i måneden' },
        { label: 'Sjeldnere eller aldri' },
      ],
      leirfjordText: 'Hvis du fikk velge – hva bør lanseres først i Leirfjord?',
      leirfjordOptions: [
        { label: 'Matleveranse fra restauranter' },
        { label: 'Dagligvarer med hjemlevering' },
        { label: 'En app som samler alt (mat og handel)' },
        { label: 'Spiller ingen rolle' },
      ],
      options: [
        { label: 'Matleveranse fra restauranter' },
        { label: 'Dagligvarer med hjemlevering' },
        { label: 'En app som samler alt (mat + handel)' },
        { label: 'Ingen av disse' },
      ],
    },
    {
      text: 'Hvordan ville du oppleve en App der det meste av hverdagslivet ditt er samlet?',
      options: [
        { label: 'Svært positivt – det ville forenkle hverdagen' },
        { label: 'Positivt – hvis appen er enkel å bruke' },
        { label: 'Usikker – foretrekker å bruke ulike apper' },
        { label: 'Ikke interessert' },
      ],
    },
    {
      text: 'Til slutt, vil du bli varslet når en lokal App lanseres?',
      options: [{ label: 'Ja, gjerne!' }, { label: 'Nei, takk' }],
    },
    {
      text: 'Hvordan beskriver du dine digitale ferdigheter?',
      options: [
        { label: 'Ekspert – håndterer det meste' },
        { label: 'Bra – bruker apper daglig' },
        { label: 'Middels – klarer det meste' },
        { label: 'Litt erfaren – trenger av og til hjelp' },
        { label: 'Trenger hjelp med digitale tjenester' },
      ],
    },
  ],
};

const ru: LanguageTranslation = {
  welcomeTitle: 'Опрос CityTech',
  welcomeText:
    'Цель опроса — улучшить то, что уже работает хорошо, чтобы это работало ещё лучше и подходило ещё большему количеству людей.\n\nВ знак благодарности за ваше время после прохождения опроса вы получите QR-код на бесплатную чашку кофе в любом магазине Narvesen.',
  introText: `Я вижу город с огромным потенциалом, но также замечаю, что не хватает связующей нити, чтобы сделать Sandnessjøen таким привлекательным, каким он заслуживает быть. Сегодня пороги слишком высоки — как для вас как жителя, так и для местного бизнеса. Жить, делать покупки и есть здесь стало излишне дорого и сложно.\n\nСейчас я строю решение, которог сам не хватает. Используя свой опыт разработки цифровых решений, я хочу устранить барьеры между городскими предприятиями и жителями. Внедряя умные технологии и упрощённую логистику, я хочу облегчить бизнесу выход к клиентам, а вам — более доступное участие в городской жизни.\n\nВаш голос имеет решающее значение. Чтобы реализовать эти улучшения, мне нужна ваша помощь. Отвечая на мой опрос, вы даёте мне понимание, необходимое для создания более комфортного быта и более сильного, цифрового Sandnessjøen.\n\nСпасибо за то, что помогаете мне упростить и улучшить город Sandnessjøen!`,
  termsButton: 'Читать условия & политику конфиденциальности',
  termsTitle: 'Условия & Политика конфиденциальности',
  termsText: `Ответственное лицо за обработку персональных данных:
Акрам Абдулкаадир.

Я собираю адрес электронной почты только в том случае, если вы добровольно выбираете получать уведомление о запуске приложения. Данные используются исключительно для этого цели и не передаются третьим лицам.

Персональные данные хранятся безопасно в базе данных Supabase в ЕС (Стокгольм, Швеция – регион EU North). Данные хранятся до запуска приложения или в течение 12 месяцев, если они не будут запрошены на удаление ранее.

У вас есть право запросить доступ к или удаление ваших данных в любое время.

Для вопросов или запроса на удаление, свяжитесь: info@citytech.se

──────────────────────────────

Условия участия

Участвуя в данном маркетинговом опросе, вы соглашаетесь со следующим:

Цель опроса

• Ваши ответы используются для анализа потребности в местных услугах, таких как заказ еды, доставка продуктов и цифровые торговые решения.

• Опрос проводится на этапе разработки идей и анализа для оценки потребностей рынка в регионе.

Добровольность

• Участие является полностью добровольным.

• Вы можете в любой момент прекратить опрос до его отправки.

Анонимность и персональные данные

• Опрос разработан так, чтобы быть анонимным.

• Имена, номера социального страхования или идентифицирующие данные не запрашиваются.

• IP-адреса или техническая метаинформация не используются для идентификации отдельных участников.

Вознаграждение за участие

• В знак благодарности за ваше участие вы получаете кофейный купон от Narvesen.

• Купон действителен до 10.06.2026 и 17.06.2026 соответственно.

• Купон является личным и не может быть скопирован, передан или использован ненадлежащим образом.

• Любая попытка дублирования, распространения или злоупотребления может привести к аннулированию купона.

• Купон не может быть обменян на наличные деньги.`,
  termsAccept: 'Принять',
  termsClose: 'Закрыть',
  startSurvey: 'Начать опрос',
  thankYou: 'Спасибо за участие!',
  thankYouText: 'Ваше мнение важно для нас. Вот ваш бесплатный купон на кофе от Narvesen.',
  voucherDisclaimer: 'Действителен для одной чашки кофе. Одноразовый купон.',
  goToHome: 'На главную',
  back: 'Назад',
  next: 'Далее',
  finish: 'Завершить',
  completeSurvey: 'Завершить опрос',
  emailPlaceholder: 'Ваш адрес электронной почты',
  exitModalTitle: 'Завершить опрос?',
  exitModalText: 'Ваши ответы не будут сохранены, и вы не получите купон.',
  exitModalConfirm: 'Да, выйти',
  exitModalCancel: 'Продолжить',
  submittingLine1: 'Ваш купон Narvesen создаётся,',
  submittingLine2: 'один момент! ☕',
  questions: [
    {
      text: 'Где вы преимущественно живёте?',
      options: [
        { label: 'Sandnessjøen' },
        { label: 'Herøy' },
        { label: 'Dønna' },
        { label: 'Leirfjord' },
        { label: 'Другое место' },
      ],
    },
    {
      text: 'К какой возрастной группе вы относитесь?',
      options: [
        { label: 'До 20 лет' },
        { label: '20–35 лет' },
        { label: '36–50 лет' },
        { label: '51–65 лет' },
        { label: 'Старше 65 лет' },
      ],
    },
    {
      text: 'Как вы идентифицируете свой пол?',
      options: [
        { label: 'Мужской' },
        { label: 'Женский' },
        { label: 'Другой' },
        { label: 'Предпочитаю не указывать' },
      ],
    },
    {
      text: 'Как часто вы реально заказывали бы еду с доставкой на дом, если бы это было доступно в Санднессйёэне?',
      heroyText: 'Что чаще всего является для вас наибольшей проблемой при получении посылок?',
      heroyOptions: [
        { label: 'Ограниченные часы работы' },
        { label: 'Длинные очереди и время ожидания' },
        { label: 'Большое расстояние до пункта выдачи' },
        { label: 'Проблемы с парковкой или логистикой' },
      ],
      donnaText: 'Что чаще всего является для вас наибольшей проблемой при получении посылок?',
      donnaOptions: [
        { label: 'Ограниченные часы работы' },
        { label: 'Длинные очереди и время ожидания' },
        { label: 'Большое расстояние до пункта выдачи' },
        { label: 'Проблемы с парковкой или логистикой' },
      ],
      options: [
        { label: 'Никогда' },
        { label: '1–2 раза в месяц' },
        { label: '1 раз в неделю' },
        { label: '2–3 раза в неделю' },
        { label: 'Чаще 3 раз в неделю' },
      ],
    },
    {
      text: 'Если бы доставка еды была доступна – как, по вашему мнению, это повлияло бы на то, как часто вы едите в ресторанах?',
      heroyText: 'Насколько важно для вас иметь возможность получать товары за пределами обычного рабочего времени магазинов?',
      heroyOptions: [
        { label: 'Очень важно' },
        { label: 'Довольно важно' },
        { label: 'Не особенно важно' },
        { label: 'Совсем не важно' },
      ],
      donnaText: 'Насколько важно для вас иметь возможность получать товары за пределами обычного рабочего времени магазинов?',
      donnaOptions: [
        { label: 'Очень важно' },
        { label: 'Довольно важно' },
        { label: 'Не особенно важно' },
        { label: 'Совсем не важно' },
      ],
      options: [
        { label: 'Ел(а) бы в ресторанах чаще' },
        { label: 'Примерно так же часто, как сейчас' },
        { label: 'Реже, чем сейчас' },
        { label: 'Не уверен(а)' },
      ],
    },
    {
      text: 'Какой была бы главная причина для вас использовать доставку продуктов на дом?',
      heroyText: 'Как часто вы едете в Сандннессйёэн за покупками, которые нельзя сделать locally?',
      heroyOptions: [
        { label: 'Несколько раз в неделю' },
        { label: 'Каждую неделю' },
        { label: 'Иногда в месяц' },
        { label: 'Редко или никогда' },
      ],
      donnaText: 'Как часто вы едете в Sandnessjøen за покупками, которые нельзя купить locally?',
      donnaOptions: [
        { label: 'Несколько раз в неделю' },
        { label: 'Каждую неделю' },
        { label: 'Иногда в месяц' },
        { label: 'Редко или никогда' },
      ],
      options: [
        { label: 'Экономия вреени в повседневной жизни' },
        { label: 'Закрытые магазины по воскресеньям' },
        { label: 'Плохая погода' },
        { label: 'Удобство/планирование' },
        { label: 'Не стал(а) бы пользоваться' },
      ],
    },
    {
      text: 'Теперь перейдём к онлайн-покупкам, как часто вы делаете покупки в интернете? Имеются в виду товары/продукты, не услуги!',
      heroyText: 'Как бы вы отнеслись к приложению, в котором собрано большинство аспектов вашей повседневной жизни?',
      heroyOptions: [
        { label: 'Очень положительно – это упростило бы повседневную жизнь' },
        { label: 'Положительно – если приложение простое в использовании' },
        { label: 'Сомневаюсь – предпочитаю использовать разные приложения' },
        { label: 'Не заинтересован(а)' },
      ],
      donnaText: 'Что вы чаще всего делаете, когда вам нужно что-то купить в воскресенье?',
      donnaOptions: [
        { label: 'Покупаю в магазине, открытом по воскресеньям, в Herøy' },
        { label: 'Покупаю на заправочной станции в Sandnessjøen' },
        { label: 'Жду до воскресенья' },
      ],
      options: [
        { label: 'Несколько раз в неделю' },
        { label: 'Каждую неделю' },
        { label: '1–2 раза в месяц' },
        { label: 'Редко или никогда' },
      ],
    },
    {
      text: 'Если вам нужно выбрать – что должно быть запущено первым в Сандннессйёэне?',
      heroyText: 'Если бы вы могли выбрать – что должно быть запущено первым в Herøy?',
      heroyOptions: [
        { label: 'Доставка еды из ресторанов' },
        { label: 'Продукты с доставкой на дом' },
        { label: 'Приложение, объединяющее всё (еда и товары)' },
        { label: 'Ничего из перечисленного' },
      ],
      donnaText: 'Теперь перейдём к онлайн-покупкам, как часто вы делаете покупки в интернете? Имеются в виду товары/продукты, не услуги!',
      donnaOptions: [
        { label: 'Несколько раз в неделю' },
        { label: 'Каждую неделю' },
        { label: '1–2 раза в месяц' },
        { label: 'Редко или никогда' },
      ],
      leirfjordText: 'Если бы вы могли выбрать – что должно быть запущено первым в Leirfjord?',
      leirfjordOptions: [
        { label: 'Доставка еды из ресторанов' },
        { label: 'Продукты с доставкой на дом' },
        { label: 'Приложение, объединяющее всё (еда и товары)' },
        { label: 'Не имеет значения' },
      ],
      options: [
        { label: 'Доставка еды из ресторанов' },
        { label: 'Продукты с доставкой на дом' },
        { label: 'Приложение, объединяющее всё (еда + товары)' },
        { label: 'Ничего из перечисленного' },
      ],
    },
    {
      text: 'Как бы вы отнеслись к приложению, в котором собрано большинство аспектов вашей повседневной жизни?',
      options: [
        { label: 'Очень положительно – это упростило бы повседневную жизнь' },
        { label: 'Положительно – если приложение простое в использовании' },
        { label: 'Сомневаюсь – предпочитаю использовать разные приложения' },
        { label: 'Не заинтересован(а)' },
      ],
    },
    {
      text: 'Напоследок, хотите получить уведомление, когда будет запущено местное приложение?',
      options: [{ label: 'Да, с удовольствием!' }, { label: 'Нет, спасибо' }],
    },
    {
      text: 'Как бы вы описали свои цифровые навыки?',
      options: [
        { label: 'Эксперт — справляюсь со всем' },
        { label: 'Хорошо — использую приложения ежедневно' },
        { label: 'Средне — справляюсь с большинством задач' },
        { label: 'Немного опытный(ая) — иногда нужна помощь' },
        { label: 'Нужна помощь с цифровыми услугами' },
      ],
    },
  ],
};

const ar: LanguageTranslation = {
  welcomeTitle: 'استطلاع CityTech',
  welcomeText:
    'الغرض من الاستطلاع هو تحسين ما يعمل بالفعل بشكل جيد، حتى يعمل بشكل أفضل ويناسب المزيد من الناس.\n\nكشكر لك على وقتك، ستحصل بعد إكمال الاستطلاع على رمز QR صالح لكوب من القهوة في أي متجر Narvesen.',
  introText: `أرى مدينة ذات إمكانيات هائلة، لكنني ألاحظ أيضاً أنه يغيب الخيط الرابط الذي يجعل Sandnessjøen بالغة الجاذبية كما تستحق. اليوم، العتبات متفعة جداً – سواء بالنسبة لك كمقيم أو للمجتمع التجاري المحلي. أصبح العيش والتسوق وتناول الطعام هنا مكلفاً ومعقداً بشكل غير ضروري.\n\nأبني الآن الحل الذي أفتقده بنفسي. بخبرتي في تطوير الحلول الرقمية، أريد إزالة الحواجز بين شركات المدينة وسكانها. من خلال تطبيق التكنولوجيا الذكية والخدمات اللوجستية المبسطة، أريد تسهيل وصول الأعمال التجارية للناس، وجعل الاستفادة من عروض المدينة أكثر اقتصاداً بالنسبة لك.\n\nصوتك حاسم. لتنفيذ هذه التحسينات، أحتاج إلى مساعدتك. بالإجابة على استطلاعي، تمنحني الرؤى اللازمة لخلق يوميات أكثر سلاسة وSandnessjøen أقوى وأكثر استعداداً رقمياً.\n\nشكراً لمساعدتك في تبسيط مدينة Sandnessjøen وتحسينها!`,
  termsButton: 'اقرأ الشروط وسياسة الخصوصية',
  termsTitle: 'الشروط وسياسة الخصوصية',
  termsText: `مسؤول معالجة البيانات الشخصية:
أكرم عبد الكاظر.

أجمع عنوان البريد الإلكتروني فقط إذا قرأت بالحرية أن تتلقى إشعارًا عند إطلاق التطبيق. يتم استخدام البيانات حصراً لهذا الغرض ولا يتم مشاركتها مع أي طرف ثالث.

تُخزن البيانات الشخصية بأمان في قاعدة بيانات Supabase في الاتحاد الأوروبي (ستوكهولم، السويد – منطقة شمال الاتحاد الأوروبي). يتم تخزين البيانات حتى يتم إطلاق التطبيق أو لمدة 12 شهرًا على الأكثر، إذا لم يتم طلب حذفها مسبقًا.

لديك حق طلب الوصول إلى أو حذف بياناتك في أي وقت.

للاستفسار أو طلب حذف، اتصل بـ: info@citytech.se

──────────────────────────────

شروط المشاركة

بمشاركتك في استطلاع السوق هذا، فإنك توافق على ما يلي:

الغرض من الاستطلاع

• تُستخدم إجاباتك لتحليل الحاجة إلى الخدمات المحلية مثل طلب الطعام وتوصيل البقالة والحلول التجارية الرقمية.

• يُجرى الاستطلاع في مرحلة تطوير الأفكار والتحليل لتقييم احتياجات السوق في المنطقة.

الطوعية

• المشاركة طوعية تماماً.

• يمكنك إيقاف الاستطلاع في أي وقت قبل رساله.

إخفاء الهوية والبيانات الشخصية

• صُمِّم الاستطلاع ليكون مجهول الهوية.

• لا يُطلب الاسم أو رقم التعريف الشخصي أو أي بيانات تعريفية.

• لا تُستخدم عناوين IP أو البيانات الوصفية التقنية لتحديد هوية المشاركين.

المكافأة على المشاركة

• كشكر على مشاركتك، ستحصل على قسيمة قهوة من Narvesen.

• القسيمة صالحة حتى 10.06.2026 و17.06.2026 على التوالي.

• القسيمة شخصية ولا يجوز نسخها أو مشاركتها أو إساءة استخدامها.

• أي محاولة للتكرار أو التوزيع أو الإساءة قد تؤدي إلى إلغاء القسيمة.

• لا يمكن استبدال القسيمة بنقود.`,
  termsAccept: 'أوافق',
  termsClose: 'إغلاق',
  startSurvey: 'بدء الاستطلاع',
  thankYou: 'شكراً لمشاركتك!',
  thankYouText: 'رأيك مهم لنا. إليك قسيمتك المجانية للقهوة من Narvesen.',
  voucherDisclaimer: 'صالح لكوب قهوة واحد. قسيمة للاستخدام مرة واحدة.',
  goToHome: 'الذهاب إلى الصفحة الرئيسية',
  back: 'رجوع',
  next: 'التالي',
  finish: 'إنهاء',
  completeSurvey: 'إكمال الاستطلاع',
  emailPlaceholder: 'عنوان بريدك الإلكتروني',
  exitModalTitle: 'الخروج من الاستطلاع؟',
  exitModalText: 'لن يتم حفظ إجاباتك ولن تحصل على القسيمة.',
  exitModalConfirm: 'نعم، خروج',
  exitModalCancel: 'متابعة',
  submittingLine1: 'جارٍ إنشاء قسيمة Narvesen الخاصة بك،',
  submittingLine2: 'لحظة من فضلك! ☕',
  questions: [
    {
      text: 'أين تسكن بشكل رئيسي؟',
      options: [
        { label: 'Sandnessjøen' },
        { label: 'Herøy' },
        { label: 'Dønna' },
        { label: 'Leirfjord' },
        { label: 'مكان آخر' },
      ],
    },
    {
      text: 'إلى أي فئة عمرية تنتمي؟',
      options: [
        { label: 'أقل من 20 عاماً' },
        { label: '20–35 عاماً' },
        { label: '36–50 عاماً' },
        { label: '51–65 عاماً' },
        { label: 'أكثر من 65 عاماً' },
      ],
    },
    {
      text: 'ما هو الجنس الذي تتعرف به على نفسك؟',
      options: [
        { label: 'ذكر' },
        { label: 'أنثى' },
        { label: 'آخر' },
        { label: 'أفضل عدم الإفصاح' },
      ],
    },
    {
      text: 'كم مرة ستطلب الطعام للتوصيل المنزلي بشكل واقعي إذا كانت الخدمة متاحة في Sandnessjøen؟',
      heroyText: 'ما الذي تعتبره في الغالب أكبر تحدٍّ عند استلام الطرود؟',
      heroyOptions: [
        { label: 'ساعات عمل محدودة' },
        { label: 'طوابير طويلة وأوقات انتظار' },
        { label: 'مسافة طويلة إلى نقطة الاستلام' },
        { label: 'مشاكل في ركن السيارات أو اللوجستيات' },
      ],
      donnaText: 'ما الذي تعتبره في الغالب أكبر تحدٍّ عند استلام الطرود؟',
      donnaOptions: [
        { label: 'ساعات عمل محدودة' },
        { label: 'طوابير طويلة وأوقات انتظار' },
        { label: 'مسافة طويلة إلى نقطة الاستلام' },
        { label: 'مشاكل في ركن السيارات أو اللوجستيات' },
      ],
      options: [
        { label: 'أبداً' },
        { label: '1–2 مرة في الشهر' },
        { label: 'مرة في الأسبوع' },
        { label: '2–3 مرات في الأسبوع' },
        { label: 'أكثر من 3 مرات في الأسبوع' },
      ],
    },
    {
      text: 'إذا كانت خدمة توصيل الطعام متاحة – كيف تعتقد أن ذلك سيؤثر على مدى تناولك لطعام المطاعم؟',
      heroyText: 'ما مدى أهمية تمكنك من استلام البضائع خارج أوقات عمل المتاجر المعتادة؟',
      heroyOptions: [
        { label: 'مهم جداً' },
        { label: 'مهم إلى حد ما' },
        { label: 'غير مهم بشكل خاص' },
        { label: 'غير مهم على الإطلاق' },
      ],
      donnaText: 'ما مدى أهمية تمكنك من استلام البضائع خارج أوقات عمل المتاجر المعتادة؟',
      donnaOptions: [
        { label: 'مهم جداً' },
        { label: 'مهم إلى حد ما' },
        { label: 'غير مهم بشكل خاص' },
        { label: 'غير مهم على الإطلاق' },
      ],
      options: [
        { label: 'كنت سآكل في المطاعم أكثر' },
        { label: 'بنفس التكرار تقريباً كما هو اليوم' },
        { label: 'أقل من اليوم' },
        { label: 'غير متأكد/ة' },
      ],
    },
    {
      text: 'ما هو السبب الرئيسي الذي سيدفعك لاستخدام خدمة توصيل البقالة؟',
      heroyText: 'كم مرة تسافر إلى Sandnessjøen لشراء بضائع لا تتوفر محلياً؟',
      heroyOptions: [
        { label: 'عدة مرات في الأسبوع' },
        { label: 'كل أسبوع' },
        { label: 'مرة واحدة في الشهر أو نحو ذلك' },
        { label: 'نادراً أو أبداً' },
      ],
      donnaText: 'كم مرة تسافر إلى Sandnessjøen لشراء بضائع لا تتوفر محلياً؟',
      donnaOptions: [
        { label: 'عدة مرات في الأسبوع' },
        { label: 'كل أسبوع' },
        { label: 'مرة واحدة في الشهر أو نحو ذلك' },
        { label: 'نادراً أو أبداً' },
      ],
      options: [
        { label: 'توفير الوقت في الحياة اليومية' },
        { label: 'إغلاق المتاجر يوم الأحد' },
        { label: 'سوء الطقس' },
        { label: 'الراحة/التخطيط' },
        { label: 'لن أستخدمه' },
      ],
    },
    {
      text: 'الآن ننتقل إلى التسوق الإلكتروني، كم مرة تتسوق عبر الإنترنت؟ أي بضائع/منتجات، وليس خدمات!',
      heroyText: 'كيف ستشعر تجاه تطبيق يجمع معظم جوانب حياتك اليومية في مكان واحد؟',
      heroyOptions: [
        { label: 'إيجابي جداً – سيبسّط الحياة اليومية' },
        { label: 'إيجابي – إذا كان التطبيق سهل الاستخدام' },
        { label: 'متردد – أفضّل استخدام تطبيقات مختلفة' },
        { label: 'غير مهتم' },
      ],
      donnaText: 'ما الذي تفعله في الغالب عندما تحتاج إلى التسوق يوم الأحد؟',
      donnaOptions: [
        { label: 'أتسوق في متجر مفتوح يوم الأحد في Herøy' },
        { label: 'أتسوق في محطة وقود في Sandnessjøen' },
        { label: 'أنتظر حتى الأحد' },
      ],
      options: [
        { label: 'عدة مرات في الأسبوع' },
        { label: 'كل أسبوع' },
        { label: '1–2 مرة في الشهر' },
        { label: 'أحياناً أو أبداً' },
      ],
    },
    {
      text: 'إذا كان عليك الاختيار – ما الذي يجب إطلاقه أولاً في Sandnessjøen؟',
      heroyText: 'لو كان بإمكانك الاختيار – ما الذي يجب إطلاقه أولاً في Herøy؟',
      heroyOptions: [
        { label: 'توصيل الطعام من المطاعم' },
        { label: 'البقالة مع التوصيل المنزلي' },
        { label: 'تطبيق يجمع كل شيء (طعام وتجارة)' },
        { label: 'لا شيء من هذه' },
      ],
      donnaText: 'الآن ننتقل إلى التسوق الإلكتروني، كم مرة تتسوق عبر الإنترنت؟ أي بضائع/منتجات، وليس خدمات!',
      donnaOptions: [
        { label: 'عدة مرات في الأسبوع' },
        { label: 'كل أسبوع' },
        { label: '1–2 مرة في الشهر' },
        { label: 'أحياناً أو أبداً' },
      ],
      leirfjordText: 'لو كان بإمكانك الاختيار – ما الذي يجب إطلاقه أولاً في Leirfjord؟',
      leirfjordOptions: [
        { label: 'توصيل الطعام من المطاعم' },
        { label: 'البقالة مع التوصيل المنزلي' },
        { label: 'تطبيق يجمع كل شيء (طعام وتجارة)' },
        { label: 'لا يهم' },
      ],
      options: [
        { label: 'توصيل الطعام من المطاعم' },
        { label: 'البقالة مع التوصيل المنزلي' },
        { label: 'تطبيق يجمع كل شيء (طعام + تجارة)' },
        { label: 'لا شيء من هذه' },
      ],
    },
    {
      text: 'كيف ستشعر تجاه تطبيق يجمع معظم جوانب حياتك اليومية في مكان واحد؟',
      options: [
        { label: 'إيجابي جداً – سيبسّط الحياة اليومية' },
        { label: 'إيجابي – إذا كان التطبيق سهل الاستخدام' },
        { label: 'متردد – أفضّل استخدام تطبيقات مختلفة' },
        { label: 'غير مهتم' },
      ],
    },
    {
      text: 'وأخيراً، هل تريد إشعاراً عند إطلاق تطبيق محلي؟',
      options: [{ label: 'نعم، بكل سرور!' }, { label: 'لا، شكراً' }],
    },
    {
      text: 'كيف تصف مهاراتك الرقمية؟',
      options: [
        { label: 'خبير – أتعامل مع معظم الأمور' },
        { label: 'جيد – أستخدم التطبيقات يومياً' },
        { label: 'متوسط – أستطيع التعامل مع معظم المهام' },
        { label: 'مبتدئ – أحتاج مساعدة أحياناً' },
        { label: 'أحتاج مساعدة في الخدمات الرقمية' },
      ],
    },
  ],
};

const en: LanguageTranslation = {
  welcomeTitle: 'CityTech Survey',
  welcomeText:
    'The purpose of the survey is to improve what already works well, so that it works even better and suits even more people.\n\nAs a thank you for your time, after completing the survey you will receive a QR code valid for a cup of coffee at any Narvesen store.',
  introText: `I see a city with enormous potential, but I also find that there is a missing thread to make Sandnessjøen as attractive as it deserves to be. Today, the thresholds are too high – both for you as a resident and for the local business community. Living, shopping and eating here has become unnecessarily expensive and complicated.\n\nI am now building the solution I myself find missing. With my experience in developing digital solutions, I want to remove the barriers that exist between the city's businesses and its residents. By implementing smart technology and simplified logistics, I want to make it easier for businesses to reach out, and more affordable for you to take part in what the city has to offer.\n\nYour voice is crucial. To be able to make these improvements, I need your help. By responding to my survey, you give me the insight needed to create a smoother everyday life and a stronger, more digitally equipped Sandnessjøen.\n\nThank you for helping me simplify and improve the city of Sandnessjøen!`,
  termsButton: 'Read terms & privacy policy',
  termsTitle: 'Terms & Privacy Policy',
  termsText: `Data Protection Officer:
Akram Abdulkadir.

I only collect email addresses if you voluntarily choose to be informed when the app is launched. The data is used solely for this purpose and is not shared with third parties.

Personal data is securely stored in a database hosted by Supabase within the EU (Stockholm, Sweden – EU North region). The data is stored until the app is launched or for a maximum of 12 months, if not requested to be deleted earlier.

You have the right to request access to or deletion of your data at any time.

For questions or a request for deletion, contact: info@citytech.se

──────────────────────────────

Terms of Participation

By participating in this market survey, you agree to the following:

Purpose of the survey

• Your answers are used to analyse the need for local services such as food ordering, grocery delivery and digital trade solutions.

• The survey is conducted in the idea and analysis phase to evaluate market needs in the region.

Voluntariness

• Participation is entirely voluntary.

• You can stop the survey at any time before it is submitted.

Anonymity and personal data

• The survey is designed to be anonymous.

• No names, personal identification numbers or identifying information is requested.

• IP addresses or technical metadata are not used to identify individual participants.

Reward for participation

• As a thank you for your participation, you will receive a coffee voucher from Narvesen.

• The voucher is valid until 10.06.2026 and 17.06.2026 respectively.

• The voucher is personal and may not be copied, shared or misused.

• Any attempt at duplication, distribution or misuse may result in the voucher being invalidated.

• The voucher cannot be exchanged for cash.`,
  termsAccept: 'I Accept',
  termsClose: 'Close',
  startSurvey: 'Start survey',
  thankYou: 'Thank you for participating!',
  thankYouText: 'Your opinion is important to us. Here is your free coffee voucher from Narvesen.',
  voucherDisclaimer: 'Valid for one cup of coffee. Single-use voucher.',
  goToHome: 'Go to Home',
  back: 'Back',
  next: 'Next',
  finish: 'Finish',
  completeSurvey: 'Complete survey',
  emailPlaceholder: 'Your email address',
  exitModalTitle: 'Exit the survey?',
  exitModalText: 'Your answers will not be saved and you will not receive a voucher.',
  exitModalConfirm: 'Yes, exit',
  exitModalCancel: 'Continue',
  submittingLine1: 'Your Narvesen voucher is being generated,',
  submittingLine2: 'one moment! ☕',
  questions: [
    {
      text: 'Where do you mainly live?',
      options: [
        { label: 'Sandnessjøen' },
        { label: 'Herøy' },
        { label: 'Dønna' },
        { label: 'Leirfjord' },
        { label: 'Other place' },
      ],
    },
    {
      text: 'Which age group do you belong to?',
      options: [
        { label: 'Under 20' },
        { label: '20–35' },
        { label: '36–50' },
        { label: '51–65' },
        { label: 'Over 65' },
      ],
    },
    {
      text: 'Which gender do you identify as?',
      options: [
        { label: 'Male' },
        { label: 'Female' },
        { label: 'Other' },
        { label: 'Prefer not to say' },
      ],
    },
    {
      text: 'How often would you realistically order food with home delivery if available in Sandnessjøen?',
      heroyText: 'What do you most often experience as the biggest challenge when picking up packages?',
      heroyOptions: [
        { label: 'Limited opening hours' },
        { label: 'Long queues and waiting time' },
        { label: 'Long distance to the pick-up point' },
        { label: 'Problems with parking or logistics' },
      ],
      donnaText: 'What do you most often experience as the biggest challenge when picking up packages?',
      donnaOptions: [
        { label: 'Limited opening hours' },
        { label: 'Long queues and waiting time' },
        { label: 'Long distance to the pick-up point' },
        { label: 'Problems with parking or logistics' },
      ],
      options: [
        { label: 'Never' },
        { label: '1–2 times per month' },
        { label: 'Once a week' },
        { label: '2–3 times a week' },
        { label: 'More than 3 times a week' },
      ],
    },
    {
      text: 'If food delivery existed – how do you think it would affect how often you eat restaurant food?',
      heroyText: 'How important is it for you to be able to pick up goods outside regular store hours?',
      heroyOptions: [
        { label: 'Very important' },
        { label: 'Quite important' },
        { label: 'Not particularly important' },
        { label: 'Not important at all' },
      ],
      donnaText: 'How important is it for you to be able to pick up goods outside regular store hours?',
      donnaOptions: [
        { label: 'Very important' },
        { label: 'Quite important' },
        { label: 'Not particularly important' },
        { label: 'Not important at all' },
      ],
      options: [
        { label: 'Would eat more restaurant food' },
        { label: 'About as often as today' },
        { label: 'Less often than today' },
        { label: 'Unsure' },
      ],
    },
    {
      text: 'What would be the main reason for you to use grocery delivery?',
      heroyText: 'How often do you go to Sandnessjøen to buy goods you cannot purchase locally?',
      heroyOptions: [
        { label: 'Several times a week' },
        { label: 'Every week' },
        { label: 'Once a month or so' },
        { label: 'Rarely or never' },
      ],
      donnaText: 'How often do you go to Sandnessjøen to buy goods you cannot purchase locally?',
      donnaOptions: [
        { label: 'Several times a week' },
        { label: 'Every week' },
        { label: 'Once a month or so' },
        { label: 'Rarely or never' },
      ],
      options: [
        { label: 'Save time in everyday life' },
        { label: 'Shops closed on Sundays' },
        { label: 'Bad weather' },
        { label: 'Convenience/planning' },
        { label: 'Would not use it' },
      ],
    },
    {
      text: 'Now we move on to online shopping, how often do you shop online? That is goods/products, not services!',
      heroyText: 'How would you feel about an App where most of your everyday life is gathered in one place?',
      heroyOptions: [
        { label: 'Very positive – it would simplify everyday life' },
        { label: 'Positive – if the app is easy to use' },
        { label: 'Uncertain – I prefer using different apps' },
        { label: 'Not interested' },
      ],
      donnaText: 'What do you usually do when you need to shop on a Sunday?',
      donnaOptions: [
        { label: 'Shop in a Sunday-open store in Herøy' },
        { label: 'Shop at a petrol station in Sandnessjøen' },
        { label: 'Wait until Sunday' },
      ],
      options: [
        { label: 'Several times a week' },
        { label: 'Every week' },
        { label: '1–2 times a month' },
        { label: 'Rarely or never' },
      ],
    },
    {
      text: 'If you had to choose – what should be launched first in Sandnessjøen?',
      heroyText: 'If you could choose – what should be launched first in Herøy?',
      heroyOptions: [
        { label: 'Food delivery from restaurants' },
        { label: 'Groceries with home delivery' },
        { label: 'An app that gathers everything (food and shopping)' },
        { label: 'None of these' },
      ],
      donnaText: 'Now we move on to online shopping, how often do you shop online? That is goods/products, not services!',
      donnaOptions: [
        { label: 'Several times a week' },
        { label: 'Every week' },
        { label: '1–2 times a month' },
        { label: 'Rarely or never' },
      ],
      leirfjordText: 'If you could choose – what should be launched first in Leirfjord?',
      leirfjordOptions: [
        { label: 'Food delivery from restaurants' },
        { label: 'Groceries with home delivery' },
        { label: 'An app that gathers everything (food and shopping)' },
        { label: "Doesn't matter" },
      ],
      options: [
        { label: 'Food delivery from restaurants' },
        { label: 'Groceries with home delivery' },
        { label: 'An app that gathers everything (food + shopping)' },
        { label: 'None of these' },
      ],
    },
    {
      text: 'How would you feel about an App where most of your everyday life is gathered in one place?',
      options: [
        { label: 'Very positive – it would simplify everyday life' },
        { label: 'Positive – if the app is easy to use' },
        { label: 'Uncertain – I prefer using different apps' },
        { label: 'Not interested' },
      ],
    },
    {
      text: 'Finally, would you like to be notified when a local App launches?',
      options: [{ label: 'Yes, please!' }, { label: 'No, thank you' }],
    },
    {
      text: 'How would you describe your digital skills?',
      options: [
        { label: 'Expert – I handle most things' },
        { label: 'Good – I use apps daily' },
        { label: 'Average – I manage most tasks' },
        { label: 'Beginner – I sometimes need help' },
        { label: 'I need help with digital services' },
      ],
    },
  ],
};

export const surveyTranslations: Record<Language, LanguageTranslation> = {
  sv,
  no,
  ru,
  ar,
  en,
};