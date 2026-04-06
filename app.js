import React, { useState, useEffect } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";

const T = {
  fr: {
    appTitle:"Mundial 2026", appSub:"ÉTATS-UNIS • CANADA • MEXIQUE",
    nav:["Accueil","Groupes","Pronostics","Quiz","Stars","Sondages"],
    countdown:"Compte à rebours", timeUnits:["Jours","Heures","Min","Sec"],
    keyInfo:["Pays hôtes","Équipes","Matchs","Durée"],
    keyVals:["3 nations","48 équipes","104 matchs","11 juin–19 juil."],
    format:"Format du tournoi",
    formatLines:["12 groupes de 4 équipes","1er + 2e + 8 meilleurs 3es → 32 équipes","Tour des 32 → 16e → QF → SF → Finale","Ouverture : Estadio Azteca, Mexico","Finale : MetLife Stadium, New York"],
    groupsTitle:"48 ÉQUIPES — 12 GROUPES", hostLabel:"Pays hôte", groupLabel:"Groupe",
    pronoSub:"Qui ira en finale ?", pronoWinner:"Champion du Monde 2026",
    pronoFinal:"Finaliste", pronoSemi:"Demi-finales",
    pronoSave:"💾 Sauvegarder", pronoSaved:"✅ Sauvegardé !", pronoReset:"Réinitialiser", pronoChoose:"Choisir...", pronoMyPick:"Mon choix",
    quizSub:"Testez vos connaissances !", quizScore:"Score",
    quizNext:"Question suivante →", quizFinish:"Voir mon résultat", quizRestart:"Rejouer",
    quizPerfect:"🏆 Parfait ! Expert !", quizGood:"⭐ Très bien !", quizAvg:"👍 Pas mal !", quizBad:"📚 Continue à réviser !",
    starsSub:"Les joueurs à suivre",
    pollTitle:"Sondages", pollVote:"Voter", pollVoted:"Voté ✓", pollTotal:"votes",
    didYouKnow:"Le saviez-vous ?",
    facts:["🚫 L'Italie rate le Mondial 2026 pour la 2e fois","🏟️ L'Estadio Azteca accueille son 3e Mondial","📈 1er Mondial à 48 équipes","🤝 1ère édition co-organisée par 3 pays","⚽ 104 matchs, contre 64 en 2022","🔬 Nouvelles règles IFAB effectives"],
    bleus:"Les Bleus — Groupe I", bleusNote:"Dernière compétition de Deschamps",
    shareApp:"Partager", shareCopied:"Lien copié !",
    premiumBanner:"🌟 Passez PREMIUM — Pronostics + Stats", premiumBtn:"Débloquer — 1,99€",
    installBtn:"📲 Installer l'app", installed:"✅ Installée !",
  },
  en: {
    appTitle:"Mundial 2026", appSub:"USA • CANADA • MEXICO",
    nav:["Home","Groups","Predictions","Quiz","Stars","Polls"],
    countdown:"Countdown", timeUnits:["Days","Hours","Min","Sec"],
    keyInfo:["Host nations","Teams","Matches","Duration"],
    keyVals:["3 nations","48 teams","104 matches","Jun 11–Jul 19"],
    format:"Tournament Format",
    formatLines:["12 groups of 4 teams","1st + 2nd + 8 best 3rds → 32 teams","Round of 32 → 16 → QF → SF → Final","Opening: Estadio Azteca, Mexico City","Final: MetLife Stadium, New York"],
    groupsTitle:"48 TEAMS — 12 GROUPS", hostLabel:"Host nation", groupLabel:"Group",
    pronoSub:"Who will reach the final?", pronoWinner:"World Champion 2026",
    pronoFinal:"Runner-up", pronoSemi:"Semi-finalists",
    pronoSave:"💾 Save", pronoSaved:"✅ Saved!", pronoReset:"Reset", pronoChoose:"Choose...", pronoMyPick:"My pick",
    quizSub:"Test your knowledge!", quizScore:"Score",
    quizNext:"Next →", quizFinish:"See result", quizRestart:"Play again",
    quizPerfect:"🏆 Perfect! Expert!", quizGood:"⭐ Great!", quizAvg:"👍 Not bad!", quizBad:"📚 Keep studying!",
    starsSub:"Players to watch",
    pollTitle:"Polls", pollVote:"Vote", pollVoted:"Voted ✓", pollTotal:"votes",
    didYouKnow:"Did you know?",
    facts:["🚫 Italy miss 2026 World Cup for 2nd time","🏟️ Estadio Azteca hosts its 3rd World Cup","📈 First 48-team World Cup ever","🤝 First edition co-hosted by 3 countries","⚽ 104 matches vs 64 in 2022","🔬 New IFAB rules in effect"],
    bleus:"Les Bleus — Group I", bleusNote:"Deschamps' final tournament",
    shareApp:"Share", shareCopied:"Copied!",
    premiumBanner:"🌟 Go PREMIUM — Predictions + Stats", premiumBtn:"Unlock — €1.99",
    installBtn:"📲 Install app", installed:"✅ Installed!",
  },
  es: {
    appTitle:"Mundial 2026", appSub:"EE.UU. • CANADÁ • MÉXICO",
    nav:["Inicio","Grupos","Pronósticos","Quiz","Estrellas","Sondeos"],
    countdown:"Cuenta regresiva", timeUnits:["Días","Horas","Min","Seg"],
    keyInfo:["Países anfitriones","Equipos","Partidos","Duración"],
    keyVals:["3 naciones","48 equipos","104 partidos","11 jun–19 jul"],
    format:"Formato del torneo",
    formatLines:["12 grupos de 4 equipos","1° + 2° + 8 mejores 3eros → 32","Ronda 32 → 16avos → QF → SF → Final","Apertura: Estadio Azteca, México","Final: MetLife Stadium, Nueva York"],
    groupsTitle:"48 EQUIPOS — 12 GRUPOS", hostLabel:"País anfitrión", groupLabel:"Grupo",
    pronoSub:"¿Quién llegará a la final?", pronoWinner:"Campeón del Mundo 2026",
    pronoFinal:"Finalista", pronoSemi:"Semifinalistas",
    pronoSave:"💾 Guardar", pronoSaved:"✅ ¡Guardado!", pronoReset:"Reiniciar", pronoChoose:"Elegir...", pronoMyPick:"Mi elección",
    quizSub:"¡Pon a prueba tus conocimientos!", quizScore:"Puntuación",
    quizNext:"Siguiente →", quizFinish:"Ver resultado", quizRestart:"Jugar de nuevo",
    quizPerfect:"🏆 ¡Perfecto!", quizGood:"⭐ ¡Muy bien!", quizAvg:"👍 ¡Nada mal!", quizBad:"📚 ¡Sigue estudiando!",
    starsSub:"Jugadores a seguir",
    pollTitle:"Sondeos", pollVote:"Votar", pollVoted:"Votado ✓", pollTotal:"votos",
    didYouKnow:"¿Sabías que?",
    facts:["🚫 Italia se pierde el Mundial 2026 por 2ª vez","🏟️ Estadio Azteca acoge su 3er Mundial","📈 Primer Mundial con 48 equipos","🤝 Primera edición organizada por 3 países","⚽ 104 partidos vs 64 en 2022","🔬 Nuevas reglas IFAB"],
    bleus:"Les Bleus — Grupo I", bleusNote:"Último torneo de Deschamps",
    shareApp:"Compartir", shareCopied:"¡Copiado!",
    premiumBanner:"🌟 PREMIUM — Pronósticos + Estadísticas", premiumBtn:"Desbloquear — 1,99€",
    installBtn:"📲 Instalar", installed:"✅ ¡Instalada!",
  },
  pt: {
    appTitle:"Mundial 2026", appSub:"EUA • CANADÁ • MÉXICO",
    nav:["Início","Grupos","Palpites","Quiz","Estrelas","Enquetes"],
    countdown:"Contagem regressiva", timeUnits:["Dias","Horas","Min","Seg"],
    keyInfo:["Países anfitriões","Seleções","Jogos","Duração"],
    keyVals:["3 nações","48 seleções","104 jogos","11 jun–19 jul"],
    format:"Formato do torneio",
    formatLines:["12 grupos de 4 seleções","1° + 2° + 8 melhores 3eiros → 32","Rodada 32 → 16 → QF → SF → Final","Abertura: Estadio Azteca, México","Final: MetLife Stadium, Nova York"],
    groupsTitle:"48 SELEÇÕES — 12 GRUPOS", hostLabel:"País anfitrião", groupLabel:"Grupo",
    pronoSub:"Quem vai à final?", pronoWinner:"Campeão do Mundo 2026",
    pronoFinal:"Vice-campeão", pronoSemi:"Semifinalistas",
    pronoSave:"💾 Salvar", pronoSaved:"✅ Salvo!", pronoReset:"Reiniciar", pronoChoose:"Escolher...", pronoMyPick:"Minha escolha",
    quizSub:"Teste seus conhecimentos!", quizScore:"Pontuação",
    quizNext:"Próxima →", quizFinish:"Ver resultado", quizRestart:"Jogar novamente",
    quizPerfect:"🏆 Perfeito!", quizGood:"⭐ Muito bem!", quizAvg:"👍 Nada mal!", quizBad:"📚 Continue estudando!",
    starsSub:"Jogadores para acompanhar",
    pollTitle:"Enquetes", pollVote:"Votar", pollVoted:"Votado ✓", pollTotal:"votos",
    didYouKnow:"Você sabia?",
    facts:["🚫 Itália perde a Copa 2026 pela 2ª vez","🏟️ Estadio Azteca sedia sua 3ª Copa","📈 Primeira Copa com 48 seleções","🤝 Primeira edição por 3 países","⚽ 104 jogos vs 64 em 2022","🔬 Novas regras IFAB"],
    bleus:"Les Bleus — Grupo I", bleusNote:"Última competição de Deschamps",
    shareApp:"Compartilhar", shareCopied:"Copiado!",
    premiumBanner:"🌟 PREMIUM — Palpites + Estatísticas", premiumBtn:"Desbloquear — €1,99",
    installBtn:"📲 Instalar", installed:"✅ Instalada!",
  },
};

const GROUPS = {
  A:{teams:["Mexique 🇲🇽","Afrique du Sud 🇿🇦","Corée du Sud 🇰🇷","Tchéquie 🇨🇿"],host:true,hostName:{fr:"Mexique",en:"Mexico",es:"México",pt:"México"}},
  B:{teams:["Canada 🇨🇦","Bosnie 🇧🇦","Qatar 🇶🇦","Suisse 🇨🇭"],host:true,hostName:{fr:"Canada",en:"Canada",es:"Canadá",pt:"Canadá"}},
  C:{teams:["Brésil 🇧🇷","Maroc 🇲🇦","Haïti 🇭🇹","Écosse 🏴󠁧󠁢󠁳󠁣󠁴󠁿"]},
  D:{teams:["États-Unis 🇺🇸","Paraguay 🇵🇾","Australie 🇦🇺","Turquie 🇹🇷"],host:true,hostName:{fr:"États-Unis",en:"USA",es:"EE.UU.",pt:"EUA"}},
  E:{teams:["Allemagne 🇩🇪","Curaçao 🇨🇼","Côte d'Ivoire 🇨🇮","Équateur 🇪🇨"]},
  F:{teams:["Pays-Bas 🇳🇱","Japon 🇯🇵","Suède 🇸🇪","Tunisie 🇹🇳"]},
  G:{teams:["Belgique 🇧🇪","Égypte 🇪🇬","Iran 🇮🇷","Nouvelle-Zélande 🇳🇿"]},
  H:{teams:["Espagne 🇪🇸","Cap-Vert 🇨🇻","Arabie saoudite 🇸🇦","Uruguay 🇺🇾"]},
  I:{teams:["France 🇫🇷","Sénégal 🇸🇳","Irak 🇮🇶","Norvège 🇳🇴"]},
  J:{teams:["Argentine 🇦🇷","Algérie 🇩🇿","Autriche 🇦🇹","Jordanie 🇯🇴"]},
  K:{teams:["Portugal 🇵🇹","RD Congo 🇨🇩","Ouzbékistan 🇺🇿","Colombie 🇨🇴"]},
  L:{teams:["Angleterre 🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croatie 🇭🇷","Ghana 🇬🇭","Panama 🇵🇦"]},
};
const ALL_TEAMS=Object.values(GROUPS).flatMap(g=>g.teams).sort();

const STARS=[
  {name:"Kylian Mbappé",flag:"🇫🇷",club:"Real Madrid",pos:"AT",age:27,stat:"44 buts en sélection",rating:96,group:"I"},
  {name:"Erling Haaland",flag:"🇳🇴",club:"Man. City",pos:"AT",age:25,stat:"44 buts en sélection",rating:95,group:"I"},
  {name:"Vinicius Jr.",flag:"🇧🇷",club:"Real Madrid",pos:"AT",age:24,stat:"29 buts en sélection",rating:94,group:"C"},
  {name:"Pedri",flag:"🇪🇸",club:"FC Barcelone",pos:"MF",age:22,stat:"Ballon d'Or espoir 2023",rating:93,group:"H"},
  {name:"Jude Bellingham",flag:"🏴󠁧󠁢󠁥󠁮󠁧󠁿",club:"Real Madrid",pos:"MF",age:21,stat:"Meilleur joueur Euro 2024",rating:93,group:"L"},
  {name:"Rodri",flag:"🇪🇸",club:"Man. City",pos:"MF",age:28,stat:"Ballon d'Or 2024",rating:92,group:"H"},
  {name:"Lamine Yamal",flag:"🇪🇸",club:"FC Barcelone",pos:"AT",age:18,stat:"Champion d'Europe 2024",rating:92,group:"H"},
  {name:"Cristiano Ronaldo",flag:"🇵🇹",club:"Al Nassr",pos:"AT",age:41,stat:"915 buts en carrière",rating:90,group:"K"},
];

const QUIZ={
  fr:[
    {q:"Combien d'équipes au Mondial 2026 ?",opts:["32","40","48","56"],a:2},
    {q:"Stade de la finale ?",opts:["Estadio Azteca","AT&T Stadium","MetLife Stadium","SoFi Stadium"],a:2},
    {q:"Quel pays n'est PAS organisateur ?",opts:["États-Unis","Canada","Mexique","Brésil"],a:3},
    {q:"Groupe de la France ?",opts:["Groupe A","Groupe C","Groupe G","Groupe I"],a:3},
    {q:"Ballon d'Or 2024 ?",opts:["Mbappé","Bellingham","Rodri","Vinicius"],a:2},
    {q:"Nombre total de matchs ?",opts:["64","80","96","104"],a:3},
    {q:"Stade du match d'ouverture ?",opts:["MetLife Stadium","Estadio Azteca","AT&T Stadium","BC Place"],a:1},
    {q:"Sélectionneur de la France ?",opts:["Zidane","Deschamps","Blanc","Wenger"],a:1},
    {q:"Vainqueur du Mondial 2022 ?",opts:["France","Brésil","Croatie","Argentine"],a:3},
    {q:"Star norvégienne du groupe I ?",opts:["Ødegaard","Haaland","Sörloth","King"],a:1},
  ],
  en:[
    {q:"How many teams in 2026 World Cup?",opts:["32","40","48","56"],a:2},
    {q:"Which stadium hosts the Final?",opts:["Estadio Azteca","AT&T Stadium","MetLife Stadium","SoFi Stadium"],a:2},
    {q:"Which country is NOT a host?",opts:["USA","Canada","Mexico","Brazil"],a:3},
    {q:"Which group is France in?",opts:["Group A","Group C","Group G","Group I"],a:3},
    {q:"2024 Ballon d'Or winner?",opts:["Mbappé","Bellingham","Rodri","Vinicius"],a:2},
    {q:"Total number of matches?",opts:["64","80","96","104"],a:3},
    {q:"Opening match stadium?",opts:["MetLife Stadium","Estadio Azteca","AT&T Stadium","BC Place"],a:1},
    {q:"France manager?",opts:["Zidane","Deschamps","Blanc","Wenger"],a:1},
    {q:"2022 World Cup winner?",opts:["France","Brazil","Croatia","Argentina"],a:3},
    {q:"Norwegian star in Group I?",opts:["Ødegaard","Haaland","Sörloth","King"],a:1},
  ],
  es:[
    {q:"¿Cuántos equipos en el Mundial 2026?",opts:["32","40","48","56"],a:2},
    {q:"¿Estadio de la final?",opts:["Estadio Azteca","AT&T Stadium","MetLife Stadium","SoFi Stadium"],a:2},
    {q:"¿Qué país NO es organizador?",opts:["EE.UU.","Canadá","México","Brasil"],a:3},
    {q:"¿Grupo de Francia?",opts:["Grupo A","Grupo C","Grupo G","Grupo I"],a:3},
    {q:"¿Balón de Oro 2024?",opts:["Mbappé","Bellingham","Rodri","Vinicius"],a:2},
    {q:"¿Total de partidos?",opts:["64","80","96","104"],a:3},
    {q:"¿Estadio del partido inaugural?",opts:["MetLife Stadium","Estadio Azteca","AT&T Stadium","BC Place"],a:1},
    {q:"¿Seleccionador de Francia?",opts:["Zidane","Deschamps","Blanc","Wenger"],a:1},
    {q:"¿Ganador del Mundial 2022?",opts:["Francia","Brasil","Croacia","Argentina"],a:3},
    {q:"¿Estrella noruega del Grupo I?",opts:["Ødegaard","Haaland","Sörloth","King"],a:1},
  ],
  pt:[
    {q:"Quantas seleções na Copa 2026?",opts:["32","40","48","56"],a:2},
    {q:"Estádio da final?",opts:["Estadio Azteca","AT&T Stadium","MetLife Stadium","SoFi Stadium"],a:2},
    {q:"Qual país NÃO é sede?",opts:["EUA","Canadá","México","Brasil"],a:3},
    {q:"Grupo da França?",opts:["Grupo A","Grupo C","Grupo G","Grupo I"],a:3},
    {q:"Bola de Ouro 2024?",opts:["Mbappé","Bellingham","Rodri","Vinicius"],a:2},
    {q:"Total de jogos?",opts:["64","80","96","104"],a:3},
    {q:"Estádio da abertura?",opts:["MetLife Stadium","Estadio Azteca","AT&T Stadium","BC Place"],a:1},
    {q:"Técnico da França?",opts:["Zidane","Deschamps","Blanc","Wenger"],a:1},
    {q:"Vencedor da Copa 2022?",opts:["França","Brasil","Croácia","Argentina"],a:3},
    {q:"Estrela norueguesa do Grupo I?",opts:["Ødegaard","Haaland","Sörloth","King"],a:1},
  ],
};

const POLLS={
  fr:[
    {id:"p1",q:"Qui sera champion du Monde 2026 ?",opts:["France 🇫🇷","Argentine 🇦🇷","Espagne 🇪🇸","Brésil 🇧🇷"],votes:[1240,1580,980,1100]},
    {id:"p2",q:"Meilleur joueur du tournoi ?",opts:["Mbappé 🇫🇷","Haaland 🇳🇴","Vinicius 🇧🇷","Bellingham 🏴󠁧󠁢󠁥󠁮󠁧󠁿"],votes:[2100,1300,980,760]},
    {id:"p3",q:"La France passera-t-elle le groupe I ?",opts:["Oui, 1ère","Oui, 2ème","Non"],votes:[3200,800,150]},
  ],
  en:[
    {id:"p1",q:"Who will be World Champion 2026?",opts:["France 🇫🇷","Argentina 🇦🇷","Spain 🇪🇸","Brazil 🇧🇷"],votes:[1240,1580,980,1100]},
    {id:"p2",q:"Best player of the tournament?",opts:["Mbappé 🇫🇷","Haaland 🇳🇴","Vinicius 🇧🇷","Bellingham 🏴󠁧󠁢󠁥󠁮󠁧󠁿"],votes:[2100,1300,980,760]},
    {id:"p3",q:"Will France get through Group I?",opts:["Yes, 1st","Yes, 2nd","No"],votes:[3200,800,150]},
  ],
  es:[
    {id:"p1",q:"¿Campeón del Mundo 2026?",opts:["Francia 🇫🇷","Argentina 🇦🇷","España 🇪🇸","Brasil 🇧🇷"],votes:[1240,1580,980,1100]},
    {id:"p2",q:"¿Mejor jugador del torneo?",opts:["Mbappé 🇫🇷","Haaland 🇳🇴","Vinicius 🇧🇷","Bellingham 🏴󠁧󠁢󠁥󠁮󠁧󠁿"],votes:[2100,1300,980,760]},
    {id:"p3",q:"¿Francia pasará el Grupo I?",opts:["Sí, 1ª","Sí, 2ª","No"],votes:[3200,800,150]},
  ],
  pt:[
    {id:"p1",q:"Campeão do Mundo 2026?",opts:["França 🇫🇷","Argentina 🇦🇷","Espanha 🇪🇸","Brasil 🇧🇷"],votes:[1240,1580,980,1100]},
    {id:"p2",q:"Melhor jogador do torneio?",opts:["Mbappé 🇫🇷","Haaland 🇳🇴","Vinicius 🇧🇷","Bellingham 🏴󠁧󠁢󠁥󠁮󠁧󠁿"],votes:[2100,1300,980,760]},
    {id:"p3",q:"A França vai passar do Grupo I?",opts:["Sim, 1ª","Sim, 2ª","Não"],votes:[3200,800,150]},
  ],
};

const LANG_CFG=[{code:"fr",flag:"🇫🇷",label:"FR"},{code:"en",flag:"🇬🇧",label:"EN"},{code:"es",flag:"🇪🇸",label:"ES"},{code:"pt",flag:"🇧🇷",label:"PT"}];
const G="#d4af37",DARK="#08091a",CB="rgba(12,24,54,0.9)",BD="rgba(212,175,55,0.22)";

function Card({children,style={},gold=false}){
  return React.createElement("div",{style:{background:gold?"linear-gradient(135deg,rgba(212,175,55,0.14),rgba(184,150,62,0.07))":CB,border:`1px solid ${gold?G:BD}`,borderRadius:14,padding:16,...style}},children);
}

function App(){
  const [tab,setTab]=useState(0);
  const [lang,setLang]=useState("fr");
  const [selGroup,setSelGroup]=useState("A");
  const [premium,setPremium]=useState(false);
  const [shareCopied,setShareCopied]=useState(false);
  const [winner,setWinner]=useState("");
  const [finalist,setFinalist]=useState("");
  const [semi1,setSemi1]=useState("");
  const [semi2,setSemi2]=useState("");
  const [pronoSaved,setPronoSaved]=useState(false);
  const [qIdx,setQIdx]=useState(0);
  const [selected,setSelected]=useState(null);
  const [score,setScore]=useState(0);
  const [quizDone,setQuizDone]=useState(false);
  const [answered,setAnswered]=useState(false);
  const [pollVotes,setPollVotes]=useState({});
  const [pollCounts,setPollCounts]=useState({});
  const [deferredPrompt,setDeferredPrompt]=useState(null);
  const [canInstall,setCanInstall]=useState(false);
  const [installDone,setInstallDone]=useState(false);
  const [countdown,setCountdown]=useState({});

  const t=T[lang],questions=QUIZ[lang],polls=POLLS[lang];
  const navIcons=["🏠","📊","🎯","🧠","⭐","📢"];

  useEffect(()=>{
    const calc=()=>{
      const d=new Date("2026-06-11T20:00:00")-new Date();
      if(d<=0){setCountdown({days:0,hours:0,minutes:0,seconds:0});return;}
      setCountdown({days:Math.floor(d/86400000),hours:Math.floor((d%86400000)/3600000),minutes:Math.floor((d%3600000)/60000),seconds:Math.floor((d%60000)/1000)});
    };
    calc();const id=setInterval(calc,1000);return()=>clearInterval(id);
  },[]);

  useEffect(()=>{
    window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();setDeferredPrompt(e);setCanInstall(true);});
    window.addEventListener("appinstalled",()=>{setInstallDone(true);setCanInstall(false);});
  },[]);

  const handleAnswer=idx=>{if(answered)return;setSelected(idx);setAnswered(true);if(idx===questions[qIdx].a)setScore(s=>s+1);};
  const nextQ=()=>{if(qIdx<questions.length-1){setQIdx(q=>q+1);setSelected(null);setAnswered(false);}else setQuizDone(true);};
  const resetQuiz=()=>{setQIdx(0);setSelected(null);setScore(0);setQuizDone(false);setAnswered(false);};
  const getMsg=s=>{if(s===questions.length)return t.quizPerfect;if(s>=questions.length*.7)return t.quizGood;if(s>=questions.length*.4)return t.quizAvg;return t.quizBad;};
  const handleVote=(pid,oi,votes)=>{if(pollVotes[pid]!==undefined)return;setPollCounts(prev=>({...prev,[pid]:votes.map((v,i)=>i===oi?v+1:v)}));setPollVotes(prev=>({...prev,[pid]:oi}));};
  const getPV=(pid,dv)=>pollCounts[pid]||dv;
  const savePronto=()=>{setPronoSaved(true);setTimeout(()=>setPronoSaved(false),2000);};
  const handleShare=()=>{if(navigator.share){navigator.share({title:"Mundial 2026",url:window.location.href});}else{navigator.clipboard?.writeText(window.location.href).catch(()=>{});setShareCopied(true);setTimeout(()=>setShareCopied(false),2000);}};
  const handleInstall=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();const{outcome}=await deferredPrompt.userChoice;if(outcome==="accepted"){setInstallDone(true);setCanInstall(false);}setDeferredPrompt(null);};

  const e=React.createElement;

  return e("div",{style:{minHeight:"100vh",background:`linear-gradient(160deg,${DARK},#0c1e44 50%,${DARK})`,fontFamily:"'Open Sans','Trebuchet MS',sans-serif",color:"#eee8d5"}},

    e("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}},
      e("div",{style:{position:"absolute",top:"10%",left:"5%",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(212,175,55,0.07),transparent 70%)"}}),
      e("div",{style:{position:"absolute",bottom:"15%",right:"8%",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle,rgba(0,120,255,0.06),transparent 70%)"}})
    ),

    e("header",{style:{position:"relative",zIndex:10,background:"linear-gradient(90deg,#060f24,#122860,#060f24)",borderBottom:`2px solid ${G}`,padding:"10px 14px",boxShadow:`0 4px 40px rgba(212,175,55,0.22)`}},
      e("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}},
        e("div",{style:{display:"flex",gap:4}},
          ...LANG_CFG.map(l=>e("button",{key:l.code,onClick:()=>setLang(l.code),style:{background:lang===l.code?`linear-gradient(135deg,${G},#b8963e)`:"rgba(255,255,255,0.07)",border:lang===l.code?"none":"1px solid rgba(212,175,55,0.28)",borderRadius:7,padding:"3px 8px",cursor:"pointer",color:lang===l.code?"#0a0a1a":"#9bb0c8",fontSize:11,fontWeight:lang===l.code?"bold":"normal"}},l.flag,l.label))
        ),
        e("div",{style:{display:"flex",gap:6,alignItems:"center"}},
          canInstall&&!installDone&&e("button",{onClick:handleInstall,style:{background:"linear-gradient(135deg,#1a8a1a,#2db82d)",border:"none",borderRadius:7,padding:"4px 10px",cursor:"pointer",color:"#fff",fontSize:11,fontWeight:"bold"}},t.installBtn),
          installDone&&e("span",{style:{fontSize:11,color:"#2db82d"}},t.installed),
          e("button",{onClick:handleShare,style:{background:"rgba(255,255,255,0.07)",border:"1px solid rgba(212,175,55,0.28)",borderRadius:7,padding:"3px 10px",cursor:"pointer",color:"#9bb0c8",fontSize:11}},shareCopied?t.shareCopied:`📤 ${t.shareApp}`),
          !premium&&e("button",{onClick:()=>setPremium(true),style:{background:`linear-gradient(135deg,${G},#ff9900)`,border:"none",borderRadius:7,padding:"4px 10px",cursor:"pointer",color:"#0a0a1a",fontSize:11,fontWeight:"bold"}},"⭐ PRO"),
          premium&&e("span",{style:{fontSize:11,color:G,background:"rgba(212,175,55,0.15)",padding:"3px 8px",borderRadius:8,fontWeight:"bold"}},"⭐ PRO")
        )
      ),
      e("div",{style:{textAlign:"center"}},
        e("div",{style:{fontSize:28}},"⚽"),
        e("div",{style:{fontSize:20,fontWeight:"bold",letterSpacing:3,textTransform:"uppercase",background:`linear-gradient(90deg,${G},#fff8e0,${G})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},t.appTitle),
        e("div",{style:{fontSize:10,color:"#7a96b0",letterSpacing:4,marginTop:3}},t.appSub)
      )
    ),

    !premium&&e("div",{style:{background:"linear-gradient(90deg,#1a1000,#3a2800,#1a1000)",borderBottom:"1px solid rgba(212,175,55,0.3)",padding:"7px 14px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}},
      e("span",{style:{fontSize:11,color:G}},t.premiumBanner),
      e("button",{onClick:()=>setPremium(true),style:{background:`linear-gradient(135deg,${G},#b8963e)`,border:"none",borderRadius:8,padding:"4px 10px",fontSize:11,fontWeight:"bold",color:"#0a0a1a",cursor:"pointer",whiteSpace:"nowrap",flexShrink:0}},t.premiumBtn)
    ),

    e("nav",{style:{position:"sticky",top:0,zIndex:20,display:"flex",justifyContent:"center",flexWrap:"wrap",gap:3,background:"rgba(6,9,26,0.97)",backdropFilter:"blur(14px)",padding:"7px 10px",borderBottom:"1px solid rgba(212,175,55,0.16)"}},
      ...t.nav.map((label,i)=>e("button",{key:i,onClick:()=>setTab(i),style:{background:tab===i?`linear-gradient(135deg,${G},#b8963e)`:"transparent",color:tab===i?"#0a0a1a":"#7a96b0",border:tab===i?"none":"1px solid rgba(212,175,55,0.25)",borderRadius:18,padding:"5px 11px",fontSize:11,cursor:"pointer",fontWeight:tab===i?"bold":"normal"}},navIcons[i]," ",label))
    ),

    e("main",{style:{position:"relative",zIndex:5,padding:"16px 13px",maxWidth:740,margin:"0 auto"}},

      tab===0&&e("div",null,
        e("div",{style:{background:"linear-gradient(135deg,rgba(10,22,54,0.97),rgba(18,45,110,0.92))",border:`1.5px solid ${G}`,borderRadius:18,padding:"20px 16px",textAlign:"center",marginBottom:15,boxShadow:`0 8px 40px rgba(212,175,55,0.18)`}},
          e("div",{style:{fontSize:10,color:G,letterSpacing:3,marginBottom:12,textTransform:"uppercase"}},"⏳ ",t.countdown),
          e("div",{style:{display:"flex",justifyContent:"center",gap:10}},
            ...[countdown.days,countdown.hours,countdown.minutes,countdown.seconds].map((v,i)=>
              e("div",{key:i,style:{textAlign:"center"}},
                e("div",{style:{background:`linear-gradient(160deg,${G},#b8963e)`,borderRadius:10,padding:"9px 11px",fontSize:22,fontWeight:"bold",color:"#0a0a1a",minWidth:44}},String(v??0).padStart(2,"0")),
                e("div",{style:{fontSize:9,color:"#6a86a0",marginTop:4}},t.timeUnits[i])
              )
            )
          )
        ),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:9,marginBottom:13}},
          ...t.keyInfo.map((label,i)=>e(Card,{key:i,style:{textAlign:"center",padding:13}},
            e("div",{style:{fontSize:18}},["🌍","🏅","⚽","📅"][i]),
            e("div",{style:{fontSize:9,color:"#6a86a0",marginTop:3}},label),
            e("div",{style:{fontSize:13,fontWeight:"bold",color:G,marginTop:2}},t.keyVals[i])
          ))
        ),
        e(Card,{style:{marginBottom:13}},
          e("div",{style:{fontSize:12,color:G,fontWeight:"bold",marginBottom:9}},"📋 ",t.format),
          ...t.formatLines.map((line,i)=>e("div",{key:i,style:{fontSize:11,color:"#b0c8d8",marginBottom:5,display:"flex",gap:6}},e("span",{style:{color:G}},"›"),line))
        ),
        e("div",{style:{background:"linear-gradient(135deg,rgba(0,35,149,0.38),rgba(237,41,57,0.26))",border:"1.5px solid rgba(255,255,255,0.16)",borderRadius:14,padding:16,marginBottom:13}},
          e("div",{style:{fontSize:12,color:"#fff",fontWeight:"bold",marginBottom:9}},"🇫🇷 ",t.bleus),
          ...["France 🇫🇷","Sénégal 🇸🇳","Irak 🇮🇶","Norvège 🇳🇴"].map((team,i)=>
            e("div",{key:team,style:{display:"flex",alignItems:"center",gap:9,background:i===0?"rgba(255,255,255,0.14)":"rgba(255,255,255,0.04)",borderRadius:8,padding:"8px 11px",marginBottom:6}},
              e("span",{style:{fontSize:10,color:G,minWidth:16}},i+1,"."),
              e("span",{style:{fontSize:12,fontWeight:i===0?"bold":"normal"}},team)
            )
          ),
          e("div",{style:{fontSize:10,color:"#6a86a0",marginTop:6}},t.bleusNote)
        ),
        e(Card,null,
          e("div",{style:{fontSize:12,color:G,fontWeight:"bold",marginBottom:9}},"📌 ",t.didYouKnow),
          ...t.facts.map((fact,i)=>e("div",{key:i,style:{fontSize:11,color:"#a8c0d0",padding:"6px 0",borderBottom:i<t.facts.length-1?"1px solid rgba(212,175,55,0.09)":"none"}},fact))
        )
      ),

      tab===1&&e("div",null,
        e("div",{style:{fontSize:10,color:G,marginBottom:12,textAlign:"center",letterSpacing:2}},t.groupsTitle),
        e("div",{style:{display:"flex",flexWrap:"wrap",gap:5,justifyContent:"center",marginBottom:15}},
          ...Object.keys(GROUPS).map(g=>e("button",{key:g,onClick:()=>setSelGroup(g),style:{width:32,height:32,borderRadius:7,background:selGroup===g?`linear-gradient(135deg,${G},#b8963e)`:"rgba(10,20,50,0.88)",border:selGroup===g?"none":"1px solid rgba(212,175,55,0.24)",color:selGroup===g?"#0a0a1a":G,fontSize:12,fontWeight:"bold",cursor:"pointer"}},g))
        ),
        e(Card,{style:{marginBottom:14,border:`1px solid ${G}`}},
          e("div",{style:{fontSize:15,fontWeight:"bold",color:G,marginBottom:11,textAlign:"center"}},
            t.groupLabel," ",selGroup,
            GROUPS[selGroup].host&&e("span",{style:{fontSize:9,color:"#6a86a0",marginLeft:8}},"(",t.hostLabel,": ",GROUPS[selGroup].hostName?.[lang],")")
          ),
          ...GROUPS[selGroup].teams.map((team,i)=>
            e("div",{key:team,style:{display:"flex",alignItems:"center",gap:10,background:i===0&&GROUPS[selGroup].host?"rgba(212,175,55,0.14)":"rgba(255,255,255,0.04)",border:"1px solid rgba(212,175,55,0.1)",borderRadius:9,padding:"10px 13px",marginBottom:7}},
              e("div",{style:{width:22,height:22,borderRadius:5,flexShrink:0,background:i===0&&GROUPS[selGroup].host?G:"rgba(212,175,55,0.18)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:"bold",color:i===0&&GROUPS[selGroup].host?"#0a0a1a":G}},i+1),
              e("span",{style:{fontSize:13}},team),
              i===0&&GROUPS[selGroup].host&&e("span",{style:{marginLeft:"auto",fontSize:9,color:G,background:"rgba(212,175,55,0.12)",padding:"2px 7px",borderRadius:8}},t.hostLabel)
            )
          )
        ),
        e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:7}},
          ...Object.entries(GROUPS).map(([g,data])=>
            e("div",{key:g,onClick:()=>setSelGroup(g),style:{background:g===selGroup?"rgba(212,175,55,0.09)":"rgba(10,20,50,0.8)",border:`1px solid ${g===selGroup?G:BD}`,borderRadius:10,padding:10,cursor:"pointer"}},
              e("div",{style:{fontSize:10,fontWeight:"bold",color:G,marginBottom:5}},t.groupLabel," ",g),
              ...data.teams.map(team=>e("div",{key:team,style:{fontSize:9,color:"#90aabf",marginBottom:2}},team))
            )
          )
        )
      ),

      tab===2&&e("div",null,
        e("div",{style:{fontSize:10,color:G,marginBottom:14,textAlign:"center",letterSpacing:2}},t.pronoSub),
        e(Card,{gold:true,style:{marginBottom:12}},
          e("div",{style:{fontSize:13,fontWeight:"bold",color:G,marginBottom:10}},"🏆 ",t.pronoWinner),
          e("select",{value:winner,onChange:ev=>setWinner(ev.target.value),style:{width:"100%",background:"rgba(10,20,50,0.95)",color:"#eee8d5",border:`1px solid ${G}`,borderRadius:9,padding:"9px 12px",fontSize:13}},
            e("option",{value:""},t.pronoChoose),
            ...ALL_TEAMS.map(team=>e("option",{key:team,value:team},team))
          ),
          winner&&e("div",{style:{marginTop:8,fontSize:11,color:G}},"✨ ",t.pronoMyPick,": ",e("strong",null,winner))
        ),
        e(Card,{style:{marginBottom:12}},
          e("div",{style:{fontSize:13,fontWeight:"bold",color:"#c0c0c0",marginBottom:10}},"🥈 ",t.pronoFinal),
          e("select",{value:finalist,onChange:ev=>setFinalist(ev.target.value),style:{width:"100%",background:"rgba(10,20,50,0.95)",color:"#eee8d5",border:"1px solid rgba(192,192,192,0.3)",borderRadius:9,padding:"9px 12px",fontSize:13}},
            e("option",{value:""},t.pronoChoose),
            ...ALL_TEAMS.map(team=>e("option",{key:team,value:team},team))
          )
        ),
        e(Card,{style:{marginBottom:14}},
          e("div",{style:{fontSize:13,fontWeight:"bold",color:"#cd7f32",marginBottom:10}},"🥉 ",t.pronoSemi),
          e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}},
            ...[[semi1,setSemi1],[semi2,setSemi2]].map(([val,setter],i)=>
              e("select",{key:i,value:val,onChange:ev=>setter(ev.target.value),style:{background:"rgba(10,20,50,0.95)",color:"#eee8d5",border:"1px solid rgba(205,127,50,0.3)",borderRadius:9,padding:"8px 10px",fontSize:12}},
                e("option",{value:""},t.pronoChoose),
                ...ALL_TEAMS.map(team=>e("option",{key:team,value:team},team))
              )
            )
          )
        ),
        (winner||finalist)&&e(Card,{style:{marginBottom:14,textAlign:"center",padding:18}},
          e("div",{style:{fontSize:11,color:G,marginBottom:12}},"🎯 BRACKET"),
          e("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"center"}},
            winner&&e("div",{style:{background:`linear-gradient(135deg,${G},#b8963e)`,color:"#0a0a1a",borderRadius:10,padding:"8px 20px",fontWeight:"bold",fontSize:13}},"🏆 ",winner),
            finalist&&e("div",{style:{background:"rgba(192,192,192,0.2)",border:"1px solid rgba(192,192,192,0.3)",borderRadius:10,padding:"6px 16px",fontSize:12}},"🥈 ",finalist),
            (semi1||semi2)&&e("div",{style:{display:"flex",gap:8}},
              semi1&&e("div",{style:{background:"rgba(205,127,50,0.2)",border:"1px solid rgba(205,127,50,0.3)",borderRadius:9,padding:"5px 12px",fontSize:11}},"🥉 ",semi1),
              semi2&&e("div",{style:{background:"rgba(205,127,50,0.2)",border:"1px solid rgba(205,127,50,0.3)",borderRadius:9,padding:"5px 12px",fontSize:11}},"🥉 ",semi2)
            )
          )
        ),
        e("div",{style:{display:"flex",gap:10}},
          e("button",{onClick:savePronto,style:{flex:2,background:pronoSaved?"linear-gradient(135deg,#2d7a2d,#3a9e3a)":`linear-gradient(135deg,${G},#b8963e)`,border:"none",borderRadius:10,padding:"12px 0",fontSize:13,fontWeight:"bold",color:pronoSaved?"#fff":"#0a0a1a",cursor:"pointer"}},pronoSaved?t.pronoSaved:t.pronoSave),
          e("button",{onClick:()=>{setWinner("");setFinalist("");setSemi1("");setSemi2("");},style:{flex:1,background:"rgba(255,60,60,0.12)",border:"1px solid rgba(255,60,60,0.3)",borderRadius:10,padding:"12px 0",fontSize:12,color:"#ff6b6b",cursor:"pointer"}},t.pronoReset)
        )
      ),

      tab===3&&e("div",null,
        e("div",{style:{fontSize:10,color:G,marginBottom:14,textAlign:"center",letterSpacing:2}},t.quizSub),
        !quizDone?e("div",null,
          e("div",{style:{marginBottom:14}},
            e("div",{style:{display:"flex",justifyContent:"space-between",fontSize:10,color:"#6a86a0",marginBottom:6}},e("span",null,qIdx+1," / ",questions.length),e("span",null,t.quizScore,": ",score)),
            e("div",{style:{height:4,background:"rgba(255,255,255,0.08)",borderRadius:2,overflow:"hidden"}},
              e("div",{style:{width:`${(qIdx/questions.length)*100}%`,height:"100%",background:`linear-gradient(90deg,${G},#ff9900)`,borderRadius:2}})
            )
          ),
          e(Card,{style:{marginBottom:13,padding:20,textAlign:"center"}},e("div",{style:{fontSize:14,fontWeight:"bold",lineHeight:1.5,color:"#fff"}},questions[qIdx].q)),
          e("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}},
            ...questions[qIdx].opts.map((opt,i)=>{
              let bg=CB,border=BD,color="#eee8d5";
              if(answered){if(i===questions[qIdx].a){bg="rgba(40,160,40,0.25)";border="rgba(40,200,40,0.6)";color="#90ee90";}else if(i===selected){bg="rgba(200,40,40,0.25)";border="rgba(200,60,60,0.6)";color="#ff8888";}}
              return e("button",{key:i,onClick:()=>handleAnswer(i),style:{background:bg,border:`1px solid ${border}`,borderRadius:10,padding:"12px 10px",fontSize:12,color,cursor:"pointer",textAlign:"center",fontWeight:answered&&i===questions[qIdx].a?"bold":"normal"}},
                answered&&i===questions[qIdx].a?"✓ ":"",answered&&i===selected&&i!==questions[qIdx].a?"✗ ":"",opt);
            })
          ),
          answered&&e("button",{onClick:nextQ,style:{width:"100%",background:`linear-gradient(135deg,${G},#b8963e)`,border:"none",borderRadius:10,padding:"12px 0",fontSize:13,fontWeight:"bold",color:"#0a0a1a",cursor:"pointer"}},qIdx<questions.length-1?t.quizNext:t.quizFinish)
        ):e("div",{style:{textAlign:"center"}},
          e("div",{style:{background:"linear-gradient(135deg,rgba(212,175,55,0.18),rgba(184,150,62,0.08))",border:`1.5px solid ${G}`,borderRadius:18,padding:28,marginBottom:16}},
            e("div",{style:{fontSize:40,marginBottom:12}},score===questions.length?"🏆":score>=questions.length*.7?"⭐":score>=questions.length*.4?"👍":"📚"),
            e("div",{style:{fontSize:22,fontWeight:"bold",color:G}},score,"/",questions.length),
            e("div",{style:{fontSize:13,color:"#eee",marginTop:8}},getMsg(score))
          ),
          e("button",{onClick:resetQuiz,style:{background:`linear-gradient(135deg,${G},#b8963e)`,border:"none",borderRadius:10,padding:"13px 40px",fontSize:14,fontWeight:"bold",color:"#0a0a1a",cursor:"pointer"}},"🔄 ",t.quizRestart)
        )
      ),

      tab===4&&e("div",null,
        e("div",{style:{fontSize:10,color:G,marginBottom:14,textAlign:"center",letterSpacing:2}},t.starsSub),
        e("div",{style:{display:"flex",flexDirection:"column",gap:10}},
          ...STARS.map((s,i)=>e(Card,{key:s.name,gold:i<3,style:{display:"flex",gap:14,alignItems:"center"}},
            e("div",{style:{width:44,height:44,borderRadius:12,background:i===0?`linear-gradient(135deg,${G},#ff9900)`:i===1?"rgba(192,192,192,0.3)":i===2?"rgba(205,127,50,0.3)":"rgba(212,175,55,0.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:i<3?20:16,fontWeight:"bold",color:i===0?"#0a0a1a":G,flexShrink:0}},i<3?["🥇","🥈","🥉"][i]:s.flag),
            e("div",{style:{flex:1,minWidth:0}},
              e("div",{style:{display:"flex",alignItems:"center",gap:7,marginBottom:2}},e("span",{style:{fontSize:13,fontWeight:"bold"}},s.name),e("span",null,s.flag),e("span",{style:{fontSize:9,padding:"2px 6px",borderRadius:8,background:"rgba(212,175,55,0.15)",color:G}},s.pos)),
              e("div",{style:{fontSize:10,color:"#6a86a0",marginBottom:4}},s.club," • Groupe ",s.group," • Age: ",s.age),
              e("div",{style:{fontSize:10,color:"#a0b8cc",marginBottom:6}},s.stat),
              e("div",{style:{display:"flex",alignItems:"center",gap:6}},
                e("div",{style:{flex:1,height:4,background:"rgba(255,255,255,0.1)",borderRadius:2,overflow:"hidden"}},e("div",{style:{width:`${((s.rating-85)/15)*100}%`,height:"100%",background:`linear-gradient(90deg,${G},#ff9900)`,borderRadius:2}})),
                e("span",{style:{fontSize:11,color:G,fontWeight:"bold"}},s.rating)
              )
            )
          ))
        )
      ),

      tab===5&&e("div",null,
        e("div",{style:{fontSize:10,color:G,marginBottom:14,textAlign:"center",letterSpacing:2}},t.pollTitle),
        e("div",{style:{display:"flex",flexDirection:"column",gap:14}},
          ...polls.map(poll=>{
            const voted=pollVotes[poll.id]!==undefined;
            const cv=getPV(poll.id,poll.votes);
            const total=cv.reduce((a,b)=>a+b,0);
            return e(Card,{key:poll.id,style:{padding:18}},
              e("div",{style:{fontSize:13,fontWeight:"bold",color:"#fff",marginBottom:13}},poll.q),
              !voted?e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                ...poll.opts.map((opt,i)=>e("button",{key:i,onClick:()=>handleVote(poll.id,i,poll.votes),style:{background:CB,border:`1px solid ${BD}`,borderRadius:9,padding:"10px 14px",fontSize:12,color:"#eee8d5",cursor:"pointer",textAlign:"left"}},opt))
              ):e("div",{style:{display:"flex",flexDirection:"column",gap:8}},
                ...poll.opts.map((opt,i)=>{
                  const pct=Math.round((cv[i]/total)*100);
                  const isMe=pollVotes[poll.id]===i;
                  const isWin=cv[i]===Math.max(...cv);
                  return e("div",{key:i},
                    e("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,marginBottom:4}},
                      e("span",{style:{color:isMe?G:"#c0d0dc"}},isMe?"→ ":"",opt,isMe?" ✓":"",isWin&&!isMe?" 🔥":""),
                      e("span",{style:{color:isWin?G:"#6a86a0",fontWeight:isWin?"bold":"normal"}},pct,"%")
                    ),
                    e("div",{style:{height:7,background:"rgba(255,255,255,0.07)",borderRadius:4,overflow:"hidden"}},
                      e("div",{style:{width:`${pct}%`,height:"100%",background:isMe?`linear-gradient(90deg,${G},#ff9900)`:isWin?"rgba(212,175,55,0.5)":"rgba(100,150,200,0.4)",borderRadius:4}})
                    )
                  );
                }),
                e("div",{style:{fontSize:10,color:"#6a86a0",marginTop:4}},total.toLocaleString()," ",t.pollTotal)
              )
            );
          })
        )
      )
    ),

    e("footer",{style:{textAlign:"center",padding:"12px 16px",fontSize:9,color:"#2e4460",borderTop:"1px solid rgba(212,175,55,0.08)",marginTop:10}},"Mundial 2026™ • ",premium?"⭐ Premium":"Free"," • v2.0")
  );
}

createRoot(document.getElementById("root")).render(React.createElement(App));
