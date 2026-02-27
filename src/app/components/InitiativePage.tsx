import React from 'react';
import { useSearchParams } from 'react-router';
import { motion } from 'motion/react';
import {
  MapPin,
  Coffee,
  TrendingUp,
  Smartphone,
  MessageSquare,
  Heart,
  Globe,
  ChevronRight,
} from 'lucide-react';





type Lang = 'sv' | 'no' | 'ru' | 'ar' | 'en';

interface InitiativeTranslation {
  heroTitle: string;
  heroSubtitle: string;
  residents: string;
  households: string;
  goalsTitle: string;
  goals: { title: string; text: string }[];
  locationsTitle: string;
  locations: { name: string; description: string }[];
  partnerTitle: string;
  partnerText: string;
  ctaText: string;
  ctaButton: string;
  // Hero stat labels
  dailyStoresLabel: string;
  dailyStoresValue: string;
  servingPlacesLabel: string;
  servingPlacesValue: string;
  serviceDensityHeroLabel: string;
  serviceDensityHeroValue: string;
  // Quote card
  quoteIntro: string;
  quotePara1: string;
  quotePara2Pre: string;
  quotePara2Bold1: string;
  quotePara2Mid: string;
  quotePara2Bold2: string;
  quotePara2Post: string;
  quotePara3: string;
  // Comparison section
  comparisonTitle: string;
  swedenLabel: string;
  norwayLabel: string;
  statLabels: [string, string, string, string];
  swedenStatDescs: [string, string, string, string];
  norwayStatDescs: [string, string, string, string];
  footnote: string;
  // Summary
  summaryTitle: string;
  summaryText: string;
  // Contact
  contactQuestion: string;
  contactTitle: string;
  emailLabel: string;
  phoneLabel: string;
}

const translations: Record<Lang, InitiativeTranslation> = {
  sv: {
    heroTitle: 'Fakta om',
    heroSubtitle: 'Yttre Helgeland',
    residents: 'Antal invånare',
    households: 'Antal hushåll',
    goalsTitle: 'Vad är målet?',
    goals: [
      {
        title: 'Förstå digitala behov',
        text: 'Vi kartlägger vilka digitala tjänster invånarna faktiskt behöver och använder – inte vad vi tror att de behöver.',
      },
      {
        title: 'Lyssna på invånarna',
        text: 'Genom undersökningen ger alla röster lika vikt, oavsett ålder, bakgrund eller bostadsort.',
      },
      {
        title: 'Bygga bättre lösningar',
        text: 'Data vi samlar in kommer direkt forma utvecklingen av CityTech-plattformen för regionen.',
      },
      {
        title: 'Stärka lokalsamhället',
        text: 'Ett bättre digitalt utbud gör vardagen enklare och håller regionen attraktiv för alla.',
      },
    ],
    locationsTitle: 'Kommuner i projektet',
    locations: [
      { name: 'Sandnessjøen', description: 'Regioncentret med störst invånarantal och bredast servicetäckning.' },
      { name: 'Herøy', description: 'Kustkommun med aktiv fiskerinäring och ett växande digitalt fokus.' },
      { name: 'Dønna', description: 'Ökommun där digital tillgänglighet är särskilt viktig för invånarna.' },
      { name: 'Leirfjord', description: 'Inlandskommun i tillväxt med starkt lokalt engagemang.' },
    ],
    partnerTitle: 'Samarbetspartner',
    partnerText:
      'Narvesen stödjer initiativet genom att sponsra kaffe-kuponger till alla som deltar i undersökningen. Vi är tacksamma för deras bidrag till lokalsamhället.',
    ctaText: 'Har du frågor om initiativet eller vill komma i kontakt med oss?',
    ctaButton: 'Kontakta CityTech',
    dailyStoresLabel: 'Antal Dagligvarubutiker',
    dailyStoresValue: '16 stycken',
    servingPlacesLabel: 'Antal Serveringsplatser',
    servingPlacesValue: '9 stycken',
    serviceDensityHeroLabel: 'Servicetäthet per 1000 inv.',
    serviceDensityHeroValue: '1,9',
    quoteIntro: 'Tack för att du tagit dig tid att dela dina åsikter och delta i undersökningen.',
    quotePara1:
      'När jag kom till Yttre Helgeland 2024 fastnade jag snabbt för regionens natur, lugn och gemenskap. Samtidigt blev jag förvånad över hur begränsad servicenivån var jämfört med vad jag tidigare upplevt.',
    quotePara2Pre: 'Jag har bott i både stora och små städer i Sverige, Europa och andra delar av världen. Oavsett storlek har två faktorer alltid varit avgörande för livskvaliteten: ',
    quotePara2Bold1: 'tillgänglighet',
    quotePara2Mid: ' och ',
    quotePara2Bold2: 'pris',
    quotePara2Post: '.',
    quotePara3:
      'Här upplever jag att just dessa områden har utvecklingspotential. Längre ner på sidan kan du ta del av data och statistik som ger en tydligare bild och stärker mina iakttagelser.',
    comparisonTitle: 'Jämförelse – Servicetäthet',
    swedenLabel: 'Sverige',
    norwayLabel: 'Norge',
    statLabels: ['Antal Kedjor', 'Antal leveransplattformar', 'Servicetäthet', 'Digital täckningsgrad'],
    swedenStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    norwayStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    footnote: '* Statistiska centralbyrån för Sverige samt motsvarande för Norge, Statistisk sentralbyrå.',
    summaryTitle: 'Sammanfattning',
    summaryText:
      'Låg servicetäthet i Yttre Helgeland ger sämre utbud än i övriga Norge och Sverige. Genom att samla lokala aktörer i en gemensam digital plattform, inspirerad av Foodora eller Wolt, kan tillgängligheten öka via samordnad logistik utan behov av nya fysiska etableringar.',
    contactQuestion: 'Har du frågor?',
    contactTitle: 'Kontaktuppgifter',
    emailLabel: 'E-post',
    phoneLabel: 'Mobil',
  },
  no: {
    heroTitle: 'Fakta om',
    heroSubtitle: 'Ytre Helgeland',
    residents: 'Antall innbyggere',
    households: 'Antall husstander',
    goalsTitle: 'Hva er målet?',
    goals: [
      {
        title: 'Forstå digitale behov',
        text: 'Vi kartlegger hvilke digitale tjenester innbyggerne faktisk trenger og bruker – ikke hva vi tror de trenger.',
      },
      {
        title: 'Lytte til innbyggerne',
        text: 'Gjennom undersøkelsen gir alle stemmer lik vekt, uavhengig av alder, bakgrunn eller bosted.',
      },
      {
        title: 'Bygge bedre løsninger',
        text: 'Dataene vi samler inn vil direkte forme utviklingen av CityTech-plattformen for regionen.',
      },
      {
        title: 'Styrke lokalsamfunnet',
        text: 'Et bedre digitalt tilbud gjør hverdagen enklere og holder regionen attraktiv for alle.',
      },
    ],
    locationsTitle: 'Kommuner i prosjektet',
    locations: [
      { name: 'Sandnessjøen', description: 'Regionsenteret med størst innbyggertall og bredest tjenestedekning.' },
      { name: 'Herøy', description: 'Kystkommune med aktiv fiskerinæring og et voksende digitalt fokus.' },
      { name: 'Dønna', description: 'Øykommune der digital tilgjengelighet er særlig viktig for innbyggerne.' },
      { name: 'Leirfjord', description: 'Innlandskommune i vekst med sterkt lokalt engasjement.' },
    ],
    partnerTitle: 'Samarbeidspartner',
    partnerText:
      'Narvesen støtter initiativet ved å sponse kaffe-kuponger til alle som deltar i undersøkelsen. Vi er takknemlige for deres bidrag til lokalsamfunnet.',
    ctaText: 'Har du spørsmål om initiativet eller ønsker å komme i kontakt med oss?',
    ctaButton: 'Kontakt CityTech',
    dailyStoresLabel: 'Antall Dagligvarebutikker',
    dailyStoresValue: '16 stykker',
    servingPlacesLabel: 'Antall Serveringssteder',
    servingPlacesValue: '9 stykker',
    serviceDensityHeroLabel: 'Servicetetthet per 1000 inn.',
    serviceDensityHeroValue: '1,9',
    quoteIntro: 'Takk for at du tok deg tid til å dele dine meninger og delta i undersøkelsen.',
    quotePara1:
      'Da jeg kom til Ytre Helgeland i 2024, ble jeg raskt betatt av regionens natur, ro og fellesskap. Samtidig ble jeg overrasket over hvor begrenset servicetilbudet var sammenlignet med hva jeg hadde opplevd tidligere.',
    quotePara2Pre: 'Jeg har bodd i både store og små byer i Sverige, Europa og andre deler av verden. Uavhengig av størrelse har to faktorer alltid vært avgjørende for livskvaliteten: ',
    quotePara2Bold1: 'tilgjengelighet',
    quotePara2Mid: ' og ',
    quotePara2Bold2: 'pris',
    quotePara2Post: '.',
    quotePara3:
      'Her opplever jeg at nettopp disse områdene har utviklingspotensial. Lenger ned på siden kan du se data og statistikk som gir et tydeligere bilde og styrker mine observasjoner.',
    comparisonTitle: 'Sammenligning – Servicetetthet',
    swedenLabel: 'Sverige',
    norwayLabel: 'Norge',
    statLabels: ['Antall Kjeder', 'Antall leveranseplattformer', 'Servicetetthet', 'Digital dekning'],
    swedenStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    norwayStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    footnote: '* Statistiska centralbyrån för Sverige samt motsvarande for Norge, Statistisk sentralbyrå.',
    summaryTitle: 'Oppsummering',
    summaryText:
      'Lav servicetetthet i Ytre Helgeland gir dårligere tilbud enn i resten av Norge og Sverige. Ved å samle lokale aktører på en felles digital plattform, inspirert av Foodora eller Wolt, kan tilgjengeligheten øke via samordnet logistikk uten behov for nye fysiske etableringer.',
    contactQuestion: 'Har du spørsmål?',
    contactTitle: 'Kontaktinformasjon',
    emailLabel: 'E-post',
    phoneLabel: 'Mobil',
  },
  ru: {
    heroTitle: 'Факты о',
    heroSubtitle: 'Yttre Helgeland',
    residents: 'Численность населения',
    households: 'Количество домохозяйств',
    goalsTitle: 'Какова цель?',
    goals: [
      {
        title: 'Понять цифровые потребности',
        text: 'Мы изучаем, какие цифровые услуги жители действительно нуждаются и используют — а не то, что мы предполагаем.',
      },
      {
        title: 'Слушать жителей',
        text: 'Через опрос все голоса имеют равный вес, независимо от возраста, происхождения или места проживания.',
      },
      {
        title: 'Создавать лучшие решения',
        text: 'Собранные данные напрямую повлияют на разработку платформы CityTech для региона.',
      },
      {
        title: 'Укреплять местное сообщество',
        text: 'Лучшее цифровое предложение делает повседневную жизнь проще и делает регион привлекательным для всех.',
      },
    ],
    locationsTitle: 'Муниципалитеты в проекте',
    locations: [
      { name: 'Sandnessjøen', description: 'Региональный центр с наибольшим населением и широким охватом услуг.' },
      { name: 'Herøy', description: 'Прибрежный муниципалитет с активным рыболовством и растущим цифровым фокусом.' },
      { name: 'Dønna', description: 'Островной муниципалитет, где цифровая доступность особенно важна для жителей.' },
      { name: 'Leirfjord', description: 'Внутренний муниципалитет в стадии роста с активным местным участием.' },
    ],
    partnerTitle: 'Партнёр',
    partnerText:
      'Narvesen поддерживает инициативу, спонсируя кофейные купоны для всех участников опроса. Мы благодарны за их вклад в местное сообщество.',
    ctaText: 'Есть вопросы об инициативе или хотите связаться с нами?',
    ctaButton: 'Связаться с CityTech',
    dailyStoresLabel: 'Кол-во продуктовых магазинов',
    dailyStoresValue: '16 штук',
    servingPlacesLabel: 'Кол-во заведений общепита',
    servingPlacesValue: '9 штук',
    serviceDensityHeroLabel: 'Плотность сервиса на 1000 жит.',
    serviceDensityHeroValue: '1,9',
    quoteIntro: 'Спасибо, что нашли время поделиться своим мнением и участвовать в опросе.',
    quotePara1:
      'Когда я приехал в Yttre Helgeland в 2024 году, меня быстро покорили природа, спокойствие и общность региона. В то же время я был удивлён тем, насколько ограниченным был уровень сервиса по сравнению с тем, что я видел раньше.',
    quotePara2Pre: 'Я жил как в больших, так и в маленьких городах Швеции, Европы и других частей мира. Независимо от размера, два фактора всегда были решающими для качества жизни: ',
    quotePara2Bold1: 'доступность',
    quotePara2Mid: ' и ',
    quotePara2Bold2: 'цена',
    quotePara2Post: '.',
    quotePara3:
      'Здесь я замечаю, что именно эти области имеют потенциал для развития. Ниже на странице вы найдёте данные и статистику, которые дают более чёткую картину и подтверждают мои наблюдения.',
    comparisonTitle: 'Сравнение – Плотность сервиса',
    swedenLabel: 'Швеция',
    norwayLabel: 'Норвегия',
    statLabels: ['Кол-во сетей', 'Платформы доставки', 'Плотность сервиса', 'Цифровое покрытие'],
    swedenStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjligгör beställning av mat och dagligvaror. Ett lågt antal påверkar möjligheten för människor att beställa hem mat eller förнödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    norwayStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjligгör beställning av mat och dagligvaror. Ett lågt antal påверkar möjligheten для människor att beställa hem mat eller förнödenheter vilket sänker livskvaliten.',
      'Servicetäthet besкriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    footnote: '* Statistiska centralbyrån för Sverige samt motsvarande for Norge, Statistisk sentralbyrå.',
    summaryTitle: 'Резюме',
    summaryText:
      'Низкая плотность сервиса в Yttre Helgeland означает худшее предложение, чем в остальной части Норвегии и Швеции. Объединив местных участников на общей цифровой платформе, вдохновлённой Foodora или Wolt, можно увеличить доступность за счёт скоординированной логистики без необходимости создания новых физических заведений.',
    contactQuestion: 'Есть вопросы?',
    contactTitle: 'Контактная информация',
    emailLabel: 'Эл. почта',
    phoneLabel: 'Телефон',
  },
  ar: {
    heroTitle: 'حقائق عن',
    heroSubtitle: 'Yttre Helgeland',
    residents: 'عدد السكان',
    households: 'عدد الأسر',
    goalsTitle: 'ما هو الهدف؟',
    goals: [
      {
        title: 'فهم الاحتياجات الرقمية',
        text: 'نقوم بمسح الخدمات الرقمية التي يحتاجها السكان فعلاً ويستخدمونها - وليس ما نعتقد أنهم يحتاجونه.',
      },
      {
        title: 'الاستماع للسكان',
        text: 'من خلال الاستبيان، يحظى كل صوت بوزن متساوٍ، بغض النظر عن العمر أو الخلفية أو مكان الإقامة.',
      },
      {
        title: 'بناء حلول أفضل',
        text: 'البيانات التي نجمعها ستشكل مباشرةً تطوير منصة CityTech للمنطقة.',
      },
      {
        title: 'تعزيز المجتمع المحلي',
        text: 'عرض رقمي أفضل يجعل الحياة اليومية أسهل ويجعل المنطقة جذابة للجميع.',
      },
    ],
    locationsTitle: 'البلديات في المشروع',
    locations: [
      { name: 'Sandnessjøen', description: 'المركز الإقليمي ذو أكبر عدد سكان وأوسع تغطية للخدمات.' },
      { name: 'Herøy', description: 'بلدية ساحلية ذات صناعة صيد نشطة وتركيز رقمي متنامٍ.' },
      { name: 'Dønna', description: 'بلدية جزيرية حيث إمكانية الوصول الرقمي مهمة بشكل خاص للسكان.' },
      { name: 'Leirfjord', description: 'بلدية داخلة في مرحلة نمو مع مشاركة محلية قوية.' },
    ],
    partnerTitle: 'الشريك',
    partnerText:
      'تدعم Narvesen المبادرة برعاية قسائم القهوة لجميع المشاركين في الاستبيان. نحن ممتنون لمساهمتهم في المجتمع المحلي.',
    ctaText: 'هل لديك أسئلة حول المبادرة أو تريد التواصل معنا؟',
    ctaButton: 'تواصل مع CityTech',
    dailyStoresLabel: 'عدد محلات البقالة',
    dailyStoresValue: '16 متجراً',
    servingPlacesLabel: 'عدد أماكن التقديم',
    servingPlacesValue: '9 أماكن',
    serviceDensityHeroLabel: 'كثافة الخدمات لكل 1000 نسمة',
    serviceDensityHeroValue: '1,9',
    quoteIntro: 'شكراً لأخذك الوقت لمشاركة آرائك والمشاركة في الاستبيان.',
    quotePara1:
      'عندما جئت إلى Yttre Helgeland عام 2024، سرعان ما أسرتني طبيعة المنطقة وهدوؤها وروح المجتمع فيها. في الوقت ذاته، فوجئت بمحدودية مستوى الخدمات مقارنةً بما اختبرته سابقاً.',
    quotePara2Pre: 'لقد عشت في مدن كبيرة وصغيرة في السويد وأوروبا وأجزاء أخرى من العالم. بغض النظر عن الحجم، ظل عاملان دائماً حاسمَين لجودة الحياة: ',
    quotePara2Bold1: 'إمكانية الوصول',
    quotePara2Mid: ' و',
    quotePara2Bold2: 'السعر',
    quotePara2Post: '.',
    quotePara3:
      'هنا أشعر بأن هذه المجالات تحديداً لديها إمكانات تطوير. أدناه في الصفحة يمكنك الاطلاع على بيانات وإحصاءات توفر صورة أوضح وتدعم ملاحظاتي.',
    comparisonTitle: 'مقارنة – كثافة الخدمات',
    swedenLabel: 'السويد',
    norwayLabel: 'النرويج',
    statLabels: ['عدد السلاسل', 'منصات التوصيل', 'كثافة الخدمات', 'التغطية الرقمية'],
    swedenStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    norwayStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad inneبär bättre tillgänglighet och fler valmöjligheter för kنسومتن.',
    ],
    footnote: '* Statistiska centralbyrån för Sverige samt motsvarande for Norge, Statistisk sentralbyrå.',
    summaryTitle: 'ملخص',
    summaryText:
      'تؤدي كثافة الخدمات المنخفضة في Yttre Helgeland إلى عروض أدنى من بقية النرويج والسويد. من خلال توحيد الجهات المحلية في منصة رقمية مشتركة، مستوحاة من Foodora أو Wolt، يمكن تحسين إمكانية الوصول عبر لوجستيات منسقة دون الحاجة إلى مواقع مادية جديدة.',
    contactQuestion: 'هل لديك أسئلة؟',
    contactTitle: 'معلومات الاتصال',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'الهاتف',
  },
  en: {
    heroTitle: 'Facts about',
    heroSubtitle: 'Outer Helgeland',
    residents: 'Number of residents',
    households: 'Number of households',
    goalsTitle: 'What is the goal?',
    goals: [
      {
        title: 'Understand digital needs',
        text: 'We map which digital services residents actually need and use — not what we think they need.',
      },
      {
        title: 'Listen to residents',
        text: 'Through the survey, all voices carry equal weight, regardless of age, background or location.',
      },
      {
        title: 'Build better solutions',
        text: 'The data we collect will directly shape the development of the CityTech platform for the region.',
      },
      {
        title: 'Strengthen the local community',
        text: 'A better digital offering makes everyday life easier and keeps the region attractive for everyone.',
      },
    ],
    locationsTitle: 'Municipalities in the project',
    locations: [
      { name: 'Sandnessjøen', description: 'The regional centre with the largest population and widest service coverage.' },
      { name: 'Herøy', description: 'Coastal municipality with an active fishing industry and a growing digital focus.' },
      { name: 'Dønna', description: 'Island municipality where digital accessibility is particularly important for residents.' },
      { name: 'Leirfjord', description: 'Inland municipality in growth with strong local engagement.' },
    ],
    partnerTitle: 'Partner',
    partnerText:
      'Narvesen supports the initiative by sponsoring coffee coupons for everyone who participates in the survey. We are grateful for their contribution to the local community.',
    ctaText: 'Do you have questions about the initiative or would like to get in touch with us?',
    ctaButton: 'Contact CityTech',
    dailyStoresLabel: 'Number of Grocery Stores',
    dailyStoresValue: '16 stores',
    servingPlacesLabel: 'Number of Serving Places',
    servingPlacesValue: '9 places',
    serviceDensityHeroLabel: 'Service density per 1,000 residents',
    serviceDensityHeroValue: '1.9',
    quoteIntro: 'Thank you for taking the time to share your views and participate in the survey.',
    quotePara1:
      'When I arrived in Yttre Helgeland in 2024, I quickly fell in love with the region\'s nature, tranquillity, and sense of community. At the same time, I was surprised by how limited the level of services was compared to what I had previously experienced.',
    quotePara2Pre: 'I have lived in both large and small cities in Sweden, Europe, and other parts of the world. Regardless of size, two factors have always been decisive for quality of life: ',
    quotePara2Bold1: 'accessibility',
    quotePara2Mid: ' and ',
    quotePara2Bold2: 'price',
    quotePara2Post: '.',
    quotePara3:
      'Here I find that these very areas have development potential. Further down the page you can view data and statistics that provide a clearer picture and support my observations.',
    comparisonTitle: 'Comparison – Service Density',
    swedenLabel: 'Sweden',
    norwayLabel: 'Norway',
    statLabels: ['Number of Chains', 'Delivery Platforms', 'Service Density', 'Digital Coverage'],
    swedenStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    norwayStatDescs: [
      'Antal kedjor beskriver hur många som verkar på marknaden. Färre kedjor innebär ofta större marknadskoncentration och mindre konkurrens, vilket kan påverka prisnivå och utbud.',
      'Antal leveransplattformar beskriver hur många digitala aktörer som möjliggör beställning av mat och dagligvaror. Ett lågt antal påverkar möjligheten för människor att beställa hem mat eller förnödenheter vilket sänker livskvaliten.',
      'Servicetäthet beskriver hur många butiker och resturanger som finns per 1000 invånare. En hög servicetäthet innebär större tillgänglighet, bredare utbud och ofta ökad konkurrens.',
      'Digital täckningsgrad beskriver hur stor andel av butiker och resturanger som erbjuder möjligheten att beställa/handla via app. En hög digital täckningsgrad innebär bättre tillgänglighet och fler valmöjligheter för konsumenten.',
    ],
    footnote: '* Statistiska centralbyrån för Sverige samt motsvarande for Norge, Statistisk sentralbyrå.',
    summaryTitle: 'Summary',
    summaryText:
      'Low service density in Yttre Helgeland results in poorer offerings than in the rest of Norway and Sweden. By gathering local operators on a shared digital platform, inspired by Foodora or Wolt, accessibility can be increased through coordinated logistics without the need for new physical establishments.',
    contactQuestion: 'Do you have questions?',
    contactTitle: 'Contact Information',
    emailLabel: 'Email',
    phoneLabel: 'Mobile',
  },
};

const goalIcons = [Smartphone, MessageSquare, TrendingUp, Heart];
const locationColors = ['#006AA7', '#005293', '#004080', '#003366'];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

// Stat values (unchanged regardless of language)
const swedenStatValues: [string, string, string, string] = ['15 st', '8 st', '3,5', '60%'];
const swedenStatUnits: [string, string, string, string] = ['st', '/1 000 inv.', 'inv.', '%'];
const norwayStatValues: [string, string, string, string] = ['12 st', '4 st', '2,6', '45%'];
const norwayStatUnits: [string, string, string, string] = ['inv.', '/1 000 inv.', 'inv.', '%'];

export function InitiativePage() {
  const [searchParams] = useSearchParams();
  const langParam = searchParams.get('lang') as Lang | null;
  const lang: Lang = langParam && langParam in translations ? langParam : 'no';
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const [expandedStat, setExpandedStat] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Hero */}
      <div className="relative overflow-hidden pt-6 pb-20 min-h-[280px]">
        <img src={heroImage} alt="Helgeland" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className={`self-start mt-[20px] ${isRtl ? 'mr-[30px]' : 'ml-[30px]'} flex flex-col gap-3`}>
            <h1 className="font-black text-white text-left drop-shadow-lg tracking-wide italic font-[Arima_Madurai] text-[32px]">
              {t.heroTitle}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FECC02] to-[#f9a825]">
                {t.heroSubtitle}
              </span>
            </h1>
            <div className="flex gap-6 mt-[0px]">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs uppercase tracking-widest font-bold">{t.residents}</span>
                  <span className="text-white font-bold text-lg">13 000</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white uppercase tracking-widest text-[12px] font-bold mt-[20px]">{t.dailyStoresLabel}</span>
                  <span className="text-white font-bold text-lg">{t.dailyStoresValue}</span>
                </div>
              </div>
              <div className="w-px bg-white/20" />
              <div className="flex flex-col gap-0.5">
                <span className="text-white uppercase tracking-widest text-[12px] font-bold">{t.servingPlacesLabel}</span>
                <span className="text-white font-bold text-lg">{t.servingPlacesValue}</span>
                <span className="text-white uppercase tracking-widest text-[12px] font-bold mt-[10px]">{t.serviceDensityHeroLabel}</span>
                <span className="text-white font-bold text-lg">{t.serviceDensityHeroValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="max-w-2xl mx-auto px-6 mt-[10px] bg-white">
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="bg-blue-600">
          <div className="relative flex flex-col items-center mt-[84px] mb-2">

            {/* Fristående ikon-cirkel */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg relative z-10 -top-[30px] bg-[#f7f9f9]">
              <img src={ctLogo} alt="CityTech logo" className="w-10 h-10 object-contain" />
            </div>

            {/* Citatkort */}
            <div className="relative w-full -mt-2 mb-4">

              {/* Bakgrundskort – roterat vänster */}
              <div className="absolute inset-0 rounded-2xl -rotate-[5deg] pointer-events-none bg-[#ff4035f0]" />
              {/* Bakgrundskort – roterat höger */}
              <div className="absolute inset-0 bg-[#FECC02] rounded-2xl rotate-4 pointer-events-none" />

              {/* Huvudkort */}
              <div className="relative bg-white rounded-2xl px-6 pt-6 pb-5 shadow-sm border border-black/8">
                {/* Öppnande citattecken */}
                <span className="absolute -top-4 left-5 font-black text-[#FECC02] leading-none select-none text-[72px]">"</span>

                <div className="flex flex-col gap-3 text-left mt-2">
                  <p className="text-black/80 text-sm leading-relaxed font-bold italic">
                    {t.quoteIntro}
                  </p>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {t.quotePara1}
                  </p>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {t.quotePara2Pre}
                    <span className="font-bold text-black/90">{t.quotePara2Bold1}</span>
                    {t.quotePara2Mid}
                    <span className="font-bold text-black/90">{t.quotePara2Bold2}</span>
                    {t.quotePara2Post}
                  </p>
                  <p className="text-black/70 text-sm leading-relaxed">
                    {t.quotePara3}
                  </p>
                </div>

                {/* Stängande citattecken */}
                <span className="absolute -bottom-5 right-5 font-black text-[#FECC02] leading-none select-none rotate-180 text-[72px]">"</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Partner section */}
      <div className="max-w-4xl mx-auto px-1 mt-12 mb-4 pb-4 bg-white">
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>

          {/* Rubrik */}
          <p className="text-center text-[10px] uppercase tracking-widest text-black/40 font-bold mb-3">{t.comparisonTitle}</p>

          <div className="flex items-center gap-2">

            {/* VÄNSTER – Sverige */}
            <div className="flex-1 flex flex-col justify-between h-[80px]">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#006AA7]" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#006AA7]/70">{t.swedenLabel}</span>
              </div>
              {t.statLabels.map((label, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedStat(expandedStat === `sv-${i}` ? null : `sv-${i}`)}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-full border transition-all duration-200 cursor-pointer w-full text-left
                    ${expandedStat === `sv-${i}`
                      ? 'bg-[#006AA7]/15 border-[#006AA7]/40'
                      : 'bg-[#006AA7]/5 border-[#006AA7]/10 hover:bg-[#006AA7]/10 hover:border-[#006AA7]/25'
                    }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${expandedStat === `sv-${i}` ? 'bg-[#006AA7]' : 'bg-[#006AA7]/40'}`} />
                  <span className="text-[8px] uppercase tracking-widest text-[#006AA7]/70 font-bold leading-tight">{label}</span>
                </button>
              ))}
            </div>

            {/* MITTEN – Cirkel */}
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className="relative flex items-center shadow-2xl rounded-full overflow-hidden" style={{width: '80px', height: '80px'}}>
                {/* Vänster halva – Svenska flaggan */}
                <div className="relative overflow-hidden bg-[#006AA7]" style={{width: '40px', height: '80px', borderRadius: '40px 0 0 40px'}}>
                  <div className="absolute top-0 bottom-0 bg-[#FECC02]" style={{left: 'calc(42% - 2.5px)', width: '5px'}} />
                  <div className="absolute left-0 right-0 bg-[#FECC02]" style={{top: 'calc(50% - 2.5px)', height: '5px'}} />
                </div>
                {/* Höger halva – Norska flaggan */}
                <div className="relative overflow-hidden bg-[#EF2B2D]" style={{width: '40px', height: '80px', borderRadius: '0 40px 40px 0'}}>
                  <div className="absolute top-0 bottom-0 bg-white" style={{left: 'calc(35% - 4px)', width: '8px'}} />
                  <div className="absolute top-0 bottom-0 bg-[#002868]" style={{left: 'calc(35% - 2px)', width: '4px'}} />
                  <div className="absolute left-0 right-0 bg-white" style={{top: 'calc(50% - 4px)', height: '8px'}} />
                  <div className="absolute left-0 right-0 bg-[#002868]" style={{top: 'calc(50% - 2px)', height: '4px'}} />
                </div>
                {/* VS logo i mitten */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg bg-[#faffff]">
                    <img src={vsLogo} alt="VS logo" className="w-4 h-4 object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* HÖGER – Norge / Yttre Helgeland */}
            <div className="flex-1 flex flex-col justify-between h-[80px]">
              <div className="flex items-center justify-end gap-1.5 mb-0.5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#EF2B2D]/70">{t.norwayLabel}</span>
                <div className="w-2 h-2 rounded-full bg-[#EF2B2D]" />
              </div>
              {t.statLabels.map((label, i) => (
                <button
                  key={i}
                  onClick={() => setExpandedStat(expandedStat === `no-${i}` ? null : `no-${i}`)}
                  className={`flex items-center justify-end gap-1.5 px-2 py-1 rounded-full border transition-all duration-200 cursor-pointer w-full text-right
                    ${expandedStat === `no-${i}`
                      ? 'bg-[#EF2B2D]/15 border-[#EF2B2D]/40'
                      : 'bg-[#EF2B2D]/5 border-[#EF2B2D]/10 hover:bg-[#EF2B2D]/10 hover:border-[#EF2B2D]/25'
                    }`}
                >
                  <span className="text-[8px] uppercase tracking-widest text-[#EF2B2D]/70 font-bold leading-tight">{label}</span>
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all ${expandedStat === `no-${i}` ? 'bg-[#EF2B2D]' : 'bg-[#EF2B2D]/40'}`} />
                </button>
              ))}
            </div>

          </div>

          {/* POPUP – visas nedanför */}
          {expandedStat && (() => {
            const isSv = expandedStat.startsWith('sv-');
            const color = isSv ? '#006AA7' : '#EF2B2D';
            const idx = parseInt(expandedStat.replace(/^(sv|no)-/, ''));
            const values = isSv ? swedenStatValues : norwayStatValues;
            const units = isSv ? swedenStatUnits : norwayStatUnits;
            const descs = isSv ? t.swedenStatDescs : t.norwayStatDescs;
            const label = t.statLabels[idx];
            if (isNaN(idx) || idx < 0 || idx > 3) return null;
            const flagLabel = isSv ? `🇸🇪 ${t.swedenLabel}` : `🇳🇴 ${t.norwayLabel}`;
            return (
              <motion.div
                key="stat-popup"
                initial={{ opacity: 0, y: 6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="mt-[62px] mx-auto w-full max-w-xs rounded-2xl shadow-lg border overflow-hidden"
                style={{ backgroundColor: `${color}ee`, borderColor: `${color}50` }}
              >
                <div className="px-4 py-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/70">{flagLabel} · {label}</p>
                    <button onClick={() => setExpandedStat(null)} className="text-white/40 hover:text-white/90 text-sm leading-none shrink-0 transition-colors">✕</button>
                  </div>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-white text-3xl font-black tracking-tight">{values[idx]}</span>
                    
                  </div>
                  <p className="text-white/85 text-[11px] leading-relaxed">{descs[idx]}</p>
                </div>
              </motion.div>
            );
          })()}

          {/* Fotnot */}
          <p className="text-center text-[11px] text-black/50 mt-4 italic" style={{marginTop: '56px'}}>Statistiska centralbyrån för Sverige samt motsvarande for Norge, Statistisk sentralbyrå.</p>

        </motion.div>
      </div>

      {/* Locations */}
      <div className="max-w-2xl mx-auto px-6 mt-12 bg-white py-6 rounded-2xl h-[370px] bg-[#ffffff91]">
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>

          <div className="flex flex-col gap-3">
            {t.locations.map((loc, i) => (
              <motion.div
                key={loc.name}
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.07 }}
                className={`flex items-center justify-center py-2 ${loc.name !== 'Sandnessjøen' ? 'hidden' : ''}`}
              >
                <div className="relative w-56 h-56 flex items-center justify-center">
                  {/* Diamantform */}
                  <div className="absolute w-[256px] h-[256px] top-[calc(50%+38px)] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-red-500">
                  </div>
                  {/* Innehåll */}
                  <div className="relative z-10 flex flex-col items-start text-left px-3">
                    <p className="font-bold text-[#0a0a1a] text-sm text-center mt-[60px] ml-[30px] italic">{t.summaryTitle}</p>
                    <p className="text-black/55 text-xs leading-relaxed mt-[4px] text-justify italic font-bold text-[#dad6d6fc]">{t.summaryText}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="max-w-2xl mx-auto px-6 mt-8 pb-4 bg-[#fff9f9eb]">
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.5 }}>
          <div className="flex flex-col border border-white/10 rounded-2xl gap-3 max-w-4xl mx-auto mt-[16px] mb-[0px] p-8 sm:p-12 lg:p-16 bg-[#adb128]">
            {/* Rubrik */}
            <div className="mb-1">
              <p className="text-white/50 text-[10px] uppercase tracking-widest mb-1 text-[#10101080] font-bold">{t.contactQuestion}</p>
              <p className="text-white font-bold text-base text-[#101010]">{t.contactTitle}</p>
            </div>
            <div className="h-px w-full bg-white/15" />
            <a href="mailto:kontakt@citytech.no" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#0d1bb1]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FECC02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-[10px] uppercase tracking-widest text-[#10101080]">{t.emailLabel}</span>
                <span className="text-white text-sm font-bold text-[#101010]">info@citytech.se</span>
              </div>
            </a>
            <div className="h-px w-full bg-white/15" />
            <a href="tel:+46700242432" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-[#0d1bb1]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FECC02" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white/50 text-[10px] uppercase tracking-widest text-[#10101080]">{t.phoneLabel}</span>
                <span className="text-white text-sm font-bold text-[#0f0e0e]">+46 700 24 24 32</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}