let recognition;
let listening = false;
/* ===== DATOS LIBROS ===== */
const booksData = [
{
title:"Stronger Than Yesterday",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXHDTSq2w4tmRTko8N18ORGtBpY_Ew9reYhw&s",
content:[
{en:"There was a time when everything felt impossible and burdensome",ph:"der uoz a taim uen evriting felt imposibl and bérdensom", es:"Hubo un momento en que todo se sentía imposible y pesado."},
{en:"You doubted yourself and questioned your path.",ph:"yu dáuted yorself and cuestiond yor path",es:"Dudaste de ti mismo y cuestionaste tu camino."},
{en:"But deep inside, a small voice told you to keep going.",ph:"bat dip insaid, a smol vois told yu tu kip góuin",es:"Pero en el fondo, una pequeña voz te decía que siguieras adelante."},
{en:"Step by step, you started to rise again.",ph:"step bai step, yu stárted tu rais aguen",es:"Paso a paso, comenzaste a levantarte de nuevo."},
{en:"You learned that failure is not the end, but a lesson.",ph:"yu lernd dat féilior is not de end, bat a lésen",es:"Aprendiste que el fracaso no es el final, sino una lección."},
{en:"Every challenge made you stronger and wiser.",ph:"evri chálens meid yu strónger and uáiser",es:"Cada desafío te hizo más fuerte y más sabio."},
{en:"You stopped comparing yourself to others.",ph:"yu stopt compéring yorself tu óders",es:"Dejaste de compararte con los demás."},
{en:"Instead, you focused on your own growth.",ph:"instéd, yu fóucost on yor oun gróuth",es:"En cambio, te enfocaste en tu propio crecimiento."},
{en:"Now you see how far you have come.",ph:"nau yu si jau far yu jav com",es:"Ahora ves lo lejos que has llegado."},
{en:"And you realize you are capable of achieving anything.",ph:"and yu ríalais yu ar kéipabl of achíving énithing",es:"Y te das cuenta de que eres capaz de lograr cualquier cosa."}
]
},
{
title:"Don’t Lose What You Built",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQld6-dybi-PnCr1T44A19xj50WBNb5utBDIQ&s",
content:[
{en:"You worked hard to build your business from nothing.",ph:"yu uorkt jard tu bild yor bísnes from názin",es:"Trabajaste duro para construir tu negocio desde cero."},
{en:"Every dollar, every decision, every sacrifice mattered.",ph:"évri dálar, évri disíshon, évri sácrifais máterd",es:"Cada dólar, cada decisión, cada sacrificio importó."},
{en:"But success is not only about earning, it is about managing.",ph:"bat saksés is not ónli abaut érning, it is abaut mánayín",es:"Pero el éxito no solo se trata de ganar, sino de administrar."},
{en:"Many lose everything because they forget discipline.",ph:"méni luz évriting bicós dei forgét dísciplin",es:"Muchos lo pierden todo porque olvidan la disciplina."},
{en:"Do not spend just to impress others.",ph:"du not spend yast tu imprés óders",es:"No gastes solo para impresionar a los demás."},
{en:"Invest wisely and think about the future.",ph:"invést uáisli and zink abaut de fiúcher",es:"Invierte sabiamente y piensa en el futuro."},
{en:"Your business is not a game, it is your responsibility.",ph:"yor bísnes is not a gueim, it is yor risponsabíliti",es:"Tu negocio no es un juego, es tu responsabilidad."},
{en:"Stay focused, stay humble, and stay consistent.",ph:"stei fóucost, stei jámbol, and stei consístent",es:"Mantente enfocado, humilde y constante."},
{en:"Growth comes from smart decisions, not fast money.",ph:"gróuz cams from smart disíshons, not fast máni",es:"El crecimiento viene de decisiones inteligentes, no del dinero rápido."},
{en:"Protect what you built, because not everyone gets a second chance.",ph:"proték uat yu bilt, bicós not évriuan gets a sécond chans",es:"Protege lo que construiste, porque no todos tienen una segunda oportunidad."}
]
},
{
title:"Choose Yourself",
img:"https://donporque.com/wp-content/uploads/2026/03/superacion-personal-y-agotamiento.webp",
content:[
{en:"There was a time when you forgot your own worth.",ph:"der uoz a taim uen yu forgát yor oun uerz",es:"Hubo un tiempo en que olvidaste tu propio valor."},
{en:"You gave so much love but received so little.",ph:"yu gueiv so mach lov bat risívd so lírol",es:"Diste tanto amor pero recibiste tan poco."},
{en:"You tried to be enough for everyone else.",ph:"yu traid tu bi ináf for évriuan els",es:"Intentaste ser suficiente para todos los demás."},
{en:"Until one day, you chose yourself.",ph:"antíl uan dei, yu chous yorself",es:"Hasta que un día, te elegiste a ti mismo."},
{en:"You started to set boundaries and respect your peace.",ph:"yu stárted tu set báundaris and rispéct yor pis",es:"Comenzaste a poner límites y respetar tu paz."},
{en:"You learned that your value does not depend on others.",ph:"yu lernd dat yor váliu das not dipénd on óders",es:"Aprendiste que tu valor no depende de los demás."},
{en:"Slowly, you began to heal and grow.",ph:"slóuli yu bigán tu jil and grou",es:"Poco a poco, comenzaste a sanar y crecer."},
{en:"You embraced your flaws and your strengths.",ph:"yu embréist yor flós and yor stréngz",es:"Abrazaste tus defectos y tus fortalezas."},
{en:"Now you no longer chase love, you attract it.",ph:"nau yu no lónger chéiss lov, yu atrákt it",es:"Ahora ya no persigues el amor, lo atraes."},
{en:"Because you finally understand that you are enough.",ph:"bicós yu fáinali anderstánd dat yu ar ináf",es:"Porque finalmente entiendes que eres suficiente."}
]
},
{
title:"The Dream Journey",
img:"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1670882236.jpg",
content:[
{en:"You always dreamed of seeing the world beyond your limits.",ph:"yu ólweis drimd ov síin de uorld biyónd yor límits",es:"Siempre soñaste con ver el mundo más allá de tus límites."},
{en:"For a long time, it felt far away and impossible.",ph:"for a long taim, it felt far awéi and imposibl",es:"Durante mucho tiempo, se sintió lejano e imposible."},
{en:"But one day, you decided to take the first step.",ph:"bat uan dei, yu disáidid tu teik de ferst step",es:"Pero un día, decidiste dar el primer paso."},
{en:"You saved, planned, and believed in your dream.",ph:"yu seivd, pland, and bilívd in yor drim",es:"Ahorraste, planeaste y creíste en tu sueño."},
{en:"The journey was not easy, but it was worth it.",ph:"de yérni uoz not ísi, bat it uoz uert it",es:"El viaje no fue fácil, pero valió la pena."},
{en:"You discovered new places, cultures, and perspectives.",ph:"yu discóverd niu pléisiz, kálchers, and perspéctivs",es:"Descubriste nuevos lugares, culturas y perspectivas."},
{en:"Every moment taught you something new about life.",ph:"évri móument tot yu sámzin niu abaut laif",es:"Cada momento te enseñó algo nuevo sobre la vida."},
{en:"You realized the world is bigger than your fears.",ph:"yu ríalaisd de uorld is bíger dan yor fíers",es:"Te diste cuenta de que el mundo es más grande que tus miedos."},
{en:"And your dreams are closer than you think.",ph:"and yor drims ar clóuser dan yu zink",es:"Y tus sueños están más cerca de lo que piensas."},
{en:"Because the greatest journey begins when you believe.",ph:"bicós de gréitest yérni bigíns uen yu bilív",es:"Porque el viaje más grande comienza cuando crees."}
]
},
{
title:"Find Your Inner Peace",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSAzY8D3oHu4xUNnqWTIu15rwc5_SP0_4ag&s",
content:[
{en:"There are moments when life feels overwhelming and chaotic.",ph:"der ar móuments uen laif fils óuverguélming and keiátik",es:"Hay momentos en que la vida se siente abrumadora y caótica."},
{en:"Your mind races and your heart feels heavy.",ph:"yor maind réisis and yor jart fils jévi",es:"Tu mente corre y tu corazón se siente pesado."},
{en:"But peace is not found outside, it lives within you.",ph:"bat pis is not faund autsáid, it livs uizín yu",es:"Pero la paz no se encuentra afuera, vive dentro de ti."},
{en:"Take a deep breath and slow down your thoughts.",ph:"teik a dip breth and slou daun yor zots",es:"Toma una respiración profunda y calma tus pensamientos."},
{en:"Let go of what you cannot control.",ph:"let gou ov uat yu cánnot contról",es:"Suelta lo que no puedes controlar."},
{en:"Trust that everything is happening for a reason.",ph:"trast dat évriting is jápening for a ríson",es:"Confía en que todo sucede por una razón."},
{en:"Silence can be your greatest teacher.",ph:"sáilens can bi yor gréitest tícher",es:"El silencio puede ser tu mejor maestro."},
{en:"In stillness, you find clarity and strength.",ph:"in stílnes, yu faind cláriri and stréngz",es:"En la quietud, encuentras claridad y fortaleza."},
{en:"Do not fight the moment, accept it.",ph:"du not fait de móument, acsépt it",es:"No luches contra el momento, acéptalo."},
{en:"Because true calm comes from within your soul.",ph:"bicós tru kam cams from uizín yor soul",es:"Porque la verdadera calma viene desde tu alma."}
]
},
{
title:"Small Steps, Big Success",
img:"https://cdn.langeek.co/photo/46211/original/?type=jpeg",
content:[
{en:"Every morning, you sit at the same desk with new challenges ahead.",ph:"évri mórning, yu sit at de seim desk uiz niu chálensiz ajéd",es:"Cada mañana, te sientas en el mismo escritorio con nuevos desafíos por delante."},
{en:"Deadlines, emails, and meetings fill your day.",ph:"dédlains, iméils, and mírins fil yor dei",es:"Fechas límite, correos y reuniones llenan tu día."},
{en:"Sometimes it feels repetitive and exhausting.",ph:"sámtaims it fils ripétitiv and exóstin",es:"A veces se siente repetitivo y agotador."},
{en:"But every task you complete builds your discipline.",ph:"bat évri task yu complít bilds yor dísciplin",es:"Pero cada tarea que completas construye tu disciplina."},
{en:"You learn to manage time and solve problems.",ph:"yu lern tu mánaych taim and solv próblems",es:"Aprendes a gestionar el tiempo y resolver problemas."},
{en:"Not every day is exciting, but every day matters.",ph:"not évri dei is exáitin, bat évri dei máters",es:"No todos los días son emocionantes, pero cada día importa."},
{en:"Your effort shapes your future step by step.",ph:"yor éfort sheips yor fiúcher step bai step",es:"Tu esfuerzo moldea tu futuro paso a paso."},
{en:"Even small progress is still progress.",ph:"íven smol prógres is stil prógres",es:"Incluso el pequeño progreso sigue siendo progreso."},
{en:"Stay focused and keep improving your skills.",ph:"stei fóucost and kip imprúvin yor skils",es:"Mantente enfocado y sigue mejorando tus habilidades."},
{en:"Because one day, all this work will open new doors.",ph:"bicós uan dei, ol dis uork uil óupen niu dors",es:"Porque un día, todo este trabajo abrirá nuevas puertas."}
]
},{
title:"Me Before You",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhREfOErh-iOjjhPBvC-YxE09ma4mbKov8w&s",
content:[
{
en:"Have you ever met someone who changed your life forever?",
ph:"jav yu éver met somuan ju cheinchd yor laif forevér",
es:"¿Alguna vez conociste a alguien que cambió tu vida para siempre?"
},
{
en:"She lived a simple life, full of routine and quiet dreams.",
ph:"shi livd a símpl laif, ful ov rutin and kuaiet drims",
es:"Ella vivía una vida simple, llena de rutina y sueños tranquilos."
},
{
en:"He had everything… until he lost it all.",
ph:"ji jad évriting… antíl ji lost it ol",
es:"Él lo tenía todo… hasta que lo perdió todo."
},
{
en:"Two completely different worlds… about to collide.",
ph:"tu compítili díferent uorlds… abaut tu koláid",
es:"Dos mundos completamente diferentes… a punto de chocar."
},
{
en:"She brought color into his gray world.",
ph:"shi brot kolor intu jis grei uorld",
es:"Ella trajo color a su mundo gris."
},
{
en:"And he showed her how to truly live.",
ph:"and ji shoud jer jau tu trúli liv",
es:"Y él le mostró cómo vivir de verdad."
},
{
en:"It wasn't easy. It wasn't perfect.",
ph:"it wózent ísi. it wózent pérfekt",
es:"No fue fácil. No fue perfecto."
},
{
en:"But it was real… and unforgettable.",
ph:"bat it uoz ríal… and anfórgetabol",
es:"Pero fue real… e inolvidable."
},
{
en:"Because some people come into your life…",
ph:"bikós som pípol cam intu yor laif…",
es:"Porque algunas personas llegan a tu vida…"
},
{
en:"just to change it forever.",
ph:"yost tu cheinch it forevér",
es:"solo para cambiarla para siempre."
}
]
},{
title:"The Titanic",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdVJ7AKQGirhWHH5Z9OzBjtczQ9RKLdYD2g&s",
content:[
{
en:"Do you trust me?",
ph:"du yu trost mi",
es:"¿Confías en mí?"
},
{
en:"I trust you.",
ph:"ai trost yu",
es:"Confío en ti."
},
{
en:"Close your eyes… and don’t let go.",
ph:"klous yor ais… and dont let gou",
es:"Cierra los ojos… y no me sueltes."
},
{
en:"With you, I feel free… like I can fly.",
ph:"uiz yu, ai fil fri… laik ai kan flai",
es:"Contigo, me siento libre… como si pudiera volar."
},
{
en:"You already can… you just didn’t know it.",
ph:"yu olrédi kan… yu yost dídent nou it",
es:"Ya puedes… solo que no lo sabías."
},
{
en:"I came here feeling trapped…",
ph:"ai keim jir fíling trapd…",
es:"Vine aquí sintiéndome atrapada…"
},
{
en:"and you gave me a reason to live again.",
ph:"and yu gueiv mi a ríson tu liv aguein",
es:"y tú me diste una razón para vivir otra vez."
},
{
en:"No matter what happens… I’ll never let go of you.",
ph:"nou máter uot jápens… ail néver let gou ov yu",
es:"No importa lo que pase… nunca te soltaré."
},
{
en:"Promise me you’ll survive… and never give up.",
ph:"prómis mi yul surváiv… and néver guiv ap",
es:"Prométeme que sobrevivirás… y nunca te rendirás."
},
{
en:"I promise… I’ll never forget you.",
ph:"ai prómis… ail néver forgét yu",
es:"Lo prometo… nunca te olvidaré."
},
{
en:"You will always be with me… in my heart.",
ph:"yu wil ólweis bi uiz mi… in mai jart",
es:"Siempre estarás conmigo… en mi corazón."
}
]
},{
title:"my fault",
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOhBEqwCR_DNnRZe0QVCTQ3-qclTk37j69Q&s",
content:[
{
en:"I tried to hate you… I really did.",
ph:"ai traid tu jeit iu… ai ríali did",
es:"Intenté odiarte… de verdad lo hice."
},
{
en:"But every time you looked at me… I forgot why.",
ph:"bat évri taim yu lukt at mi… ai forgót uai",
es:"Pero cada vez que me mirabas… olvidaba por qué."
},
{
en:"You were everything I wasn’t supposed to want.",
ph:"yu uer évriting ai wózent supóusd tu uant",
es:"Eras todo lo que no debía querer."
},
{
en:"Dangerous, complicated… irresistible.",
ph:"déincheros, komplikeited… irresistíbol",
es:"Peligroso, complicado… irresistible."
},
{
en:"And yet… you made me feel safe.",
ph:"and yet… yu meid mi fil seif",
es:"Y aun así… me hacías sentir segura."
},
{
en:"With you, nothing made sense… but everything felt right.",
ph:"uiz iu, nóthing meid sens… bat évriting felt rait",
es:"Contigo, nada tenía sentido… pero todo se sentía bien."
},
{
en:"We fought, we broke… but we always came back.",
ph:"ui fot, ui brouk… bat ui ólweis keim bak",
es:"Discutimos, nos rompimos… pero siempre volvimos."
},
{
en:"Because loving you was never a choice.",
ph:"bikós lóving iu uoz néver a chois",
es:"Porque amarte nunca fue una elección."
},
{
en:"It was a risk… I was willing to take.",
ph:"it uoz a risk… ai uoz uíling tu teik",
es:"Era un riesgo… que estaba dispuesta a tomar."
},
{
en:"Even if it meant losing everything…",
ph:"íven if it ment lúzing évriting…",
es:"Incluso si eso significaba perderlo todo…"
},
{
en:"I would still choose you.",
ph:"ai ud stil chúz iu",
es:"Aun así… te elegiría a ti."
}
]
},{
title:"The Titanic",
img:"https://m.media-amazon.com/images/S/pv-target-images/860b956d0dca4f2e24860d62364353dd271732f0e86bb74cfdb01b9641942c59.jpg",
content:[
{
en:"This can’t be happening… why today of all days?",
ph:"dis kant bi jápening… uai tudéi ov ol deis",
es:"Esto no puede estar pasando… ¿por qué justo hoy?"
},
{
en:"My hair is a disaster… and my life too.",
ph:"mai jer is a disáster… and mai laif tu",
es:"Mi cabello es un desastre… y mi vida también."
},
{
en:"Wait… is that him? My childhood crush?",
ph:"ueit… is dat jim? mai cháildjud krosh",
es:"Espera… ¿ese es él? ¿Mi amor de la infancia?"
},
{
en:"No, no, no… I’m not ready for this!",
ph:"nou, nou, nou… aim not rédi for dis",
es:"No, no, no… ¡no estoy lista para esto!"
},
{
en:"Why does he look perfect… and I look like this?",
ph:"uai dos ji luk pérfekt… and ai luk laik dis",
es:"¿Por qué él se ve perfecto… y yo así?"
},
{
en:"Okay, think… pretend to be confident.",
ph:"okéi, think… priténd tu bi kónfident",
es:"Ok, piensa… finge tener confianza."
},
{
en:"Hello! Long time no see… oh no, that sounded weird.",
ph:"jelóu! long taim no si… ou nou, dat sáunded uird",
es:"¡Hola! Cuánto tiempo… oh no, eso sonó raro."
},
{
en:"Why am I like this? Just act normal!",
ph:"uai am ai laik dis? yost akt nórmal",
es:"¿Por qué soy así? ¡Solo actúa normal!"
},
{
en:"He’s smiling… wait, is he laughing at me?",
ph:"jis smáilin… ueit, is ji láfin at mi",
es:"Está sonriendo… espera, ¿se está riendo de mí?"
},
{
en:"Okay… maybe this is a total disaster.",
ph:"okéi… méibi dis is a tórol disáster",
es:"Ok… tal vez esto es un desastre total."
},
{
en:"But somehow… I think this is just the beginning.",
ph:"bat sámjau… ai think dis is yost de bigíning",
es:"Pero de alguna forma… creo que esto es solo el comienzo."
}
]
},{
title:"Teresa",
img:"https://images.vix.com/prd/videos/video:mcp:3036497/76b85fc99fc14d509c79084185d206cf",
content:[
{
en:"To be… or not to be… that has always been my question.",
ph:"tu bi… or not tu bi… dat jas ólweis bin mai kuéstion",
es:"Ser… o no ser… esa siempre ha sido mi pregunta."
},
{
en:"I was born with nothing… but I refuse to die the same way.",
ph:"ai uoz born uiz nóthing… bat ai rifiús tu dai de seim uei",
es:"Nací sin nada… pero me niego a morir igual."
},
{
en:"They judge me, they point at me… but they don’t understand.",
ph:"dei yach mi, dei point at mi… bat dei dont anderstánd",
es:"Me juzgan, me señalan… pero no entienden."
},
{
en:"In this world, love is a luxury… and power is everything.",
ph:"in dis uorld, lov is a lákshuri… and páuer is évriting",
es:"En este mundo, el amor es un lujo… y el poder lo es todo."
},
{
en:"Should I follow my heart… or my ambition?",
ph:"shud ai fólo mai jart… or mai ambíshon",
es:"¿Debo seguir mi corazón… o mi ambición?"
},
{
en:"Because every choice has a price… and I’m willing to pay it.",
ph:"bikós évri chois jas a prais… and aim uíling tu pei it",
es:"Porque cada decisión tiene un precio… y estoy dispuesta a pagarlo."
},
{
en:"I won’t be poor, I won’t be invisible… never again.",
ph:"ai wont bi pur, ai wont bi invisíbol… néver aguein",
es:"No seré pobre, no seré invisible… nunca más."
},
{
en:"Even if I have to lose myself along the way.",
ph:"íven if ai jav tu luz maiself along de uei",
es:"Incluso si tengo que perderme en el camino."
},
{
en:"Because in the end…",
ph:"bikós in di end…",
es:"Porque al final…"
},
{
en:"I will become everything they said I couldn’t be.",
ph:"ai wil bikóm évriting dei sed ai cúdent bi",
es:"Me convertiré en todo lo que dijeron que no podía ser."
}
]
},{
title:"Boys over flowers",
img:"https://m.media-amazon.com/images/S/pv-target-images/636aa20af0ae59e780470ed870548aae32594ba9a1b930e69879cf6178ac8d84.jpg",
content:[
{
en:"Why do you always follow me?",
ph:"uai du yu ólweis fólou mi",
es:"¿Por qué siempre me sigues?"
},
{
en:"Because I can’t stay away from you.",
ph:"bikós ai kant stei auéi from iu",
es:"Porque no puedo alejarme de ti."
},
{
en:"You’re annoying, arrogant… and impossible.",
ph:"yur anóing, árrogant… and imposíbol",
es:"Eres molesto, arrogante… e imposible."
},
{
en:"But you’re the only one who dares to stand against me.",
ph:"bat yur di ónli uan ju ders tu stand aguéinst mi",
es:"Pero eres la única que se atreve a enfrentarse a mí."
},
{
en:"I don’t like your world… I don’t belong there.",
ph:"ai dont laik yor uorld… ai dont bilong der",
es:"No me gusta tu mundo… no pertenezco ahí."
},
{
en:"Then I’ll leave that world… if it means being with you.",
ph:"den ail liv dat uorld… if it mins bíing uiz iu",
es:"Entonces dejaré ese mundo… si significa estar contigo."
},
{
en:"You say that now… but you don’t understand how hard it is.",
ph:"yu sei dat nau… bat yu dont anderstánd jau jard it is",
es:"Dices eso ahora… pero no entiendes lo difícil que es."
},
{
en:"I don’t care about anything else… only you.",
ph:"ai dont ker abáut énything els… ónli iu",
es:"No me importa nada más… solo tú."
},
{
en:"Why are you doing this?",
ph:"uai ar yu dúing dis",
es:"¿Por qué haces esto?"
},
{
en:"Because I love you… Geum Jan-di.",
ph:"bikós ai lov iu… gum yan-di",
es:"Porque te amo… Geum Jan-di."
},
{
en:"…Then don’t let go of my hand.",
ph:"den dont let gou ov mai jand",
es:"…Entonces no sueltes mi mano."
}
]
},
];

/* ===== CREAR LIBROS ===== */
const booksContainer=document.getElementById("books");

booksData.forEach((book,index)=>{
  booksContainer.innerHTML+=`
  <div class="book" onclick="openBook(${index})">
    <img src="${book.img}">
    <div class="book-title">${book.title}</div>
  </div>
  `;
});

/* ===== ABRIR LIBRO ===== */
function openBook(index){
  document.getElementById("books").style.display="none";
  document.getElementById("reader").style.display="flex";

  const image = document.getElementById("bookImage");
  const content=document.getElementById("content");
  const title=document.getElementById("bookTitle");

  content.innerHTML="";
  title.innerText=booksData[index].title;
  image.src = booksData[index].img;

  booksData[index].content.forEach((p,i)=>{
    content.innerHTML+=`
      <p class="${i===0?'first-letter':''}">
        ${wrapWords(p.en, i)}
      </p>
       <div class="phonetic">
    ${p.ph}
  </div>
      <div class="translation" id="t${i}">
        ${p.es}
      </div>
      
      <div class="actions">
     
     <button class="btn-translate" onclick="toggleTranslation(${i})">
        Ver Traducción 
      </button> 
      
      <button class="btn-pronounce" onclick="speakParagraph('${p.en.replace(/'/g,"")}')">
  <i class="fa-solid fa-volume-high"></i>
</button>

       <button class="btn-mic" onclick="startListening(${i})">
  <i class="fa-solid fa-microphone"></i>
</button> 
</div>  `
     ;
  });
}

/* ===== VOLVER ===== */
function goBack(){
  document.getElementById("books").style.display="grid";
  document.getElementById("reader").style.display="none";
}

/* ===== TRADUCCION ===== */
function toggleTranslation(i){
  const el=document.getElementById("t"+i);
  el.style.display=el.style.display==="block"?"none":"block";
}

/* ===== PALABRAS CLICKEABLES ===== */
function wrapWords(text, index){
  return text.split(" ").map((word,i)=>{
    const cleanWord = word.replace(/[^a-zA-Z]/g,'').toLowerCase();

    return `
      <span 
        class="word" 
        data-index="${index}" 
        data-word="${cleanWord}"
        onclick="speak('${cleanWord}')"
      >
        ${word}
      </span>
    `;
  }).join(" ");
}

/* ===== VOZ ===== */
function speak(word){
  const msg=new SpeechSynthesisUtterance(word);
  msg.lang="en-US";
  speechSynthesis.speak(msg);
}
  
function speakParagraph(text){
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  msg.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}

function startListening(index){

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(!SpeechRecognition){
    alert("Tu navegador no soporta reconocimiento de voz");
    return;
  }

  // 🔁 SI YA ESTÁ ESCUCHANDO → DETENER
  if(listening){
    recognition.stop();
    listening = false;
    console.log("🛑 Micrófono apagado");
    return;
  }

  // 🎤 INICIAR
  recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = true;

  recognition.start();
  listening = true;

  console.log("🎤 Micrófono encendido");

  const spans = document.querySelectorAll(`span[data-index="${index}"]`);

  recognition.onresult = function(event){
    const transcript = Array.from(event.results)
      .map(r => r[0].transcript)
      .join("")
      .toLowerCase();

    const spokenWords = transcript.split(" ");

    spans.forEach(s => s.classList.remove("active"));

    spokenWords.forEach((word,i)=>{
      if(spans[i]){
        spans[i].classList.add("active");

        if(word === spans[i].dataset.word){
          spans[i].classList.add("correct");
          spans[i].classList.remove("incorrect");
        }else{
          spans[i].classList.add("incorrect");
          spans[i].classList.remove("correct");
        }
      }
    });
  };

  recognition.onend = function(){
    listening = false;
    console.log("Micrófono detenido");
  };
}
