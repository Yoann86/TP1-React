const film = [
    {
        titre:"Inception",
        img:"/src/assets/affiche.jpg",
        synopsis:"Dom Cobb est un voleur expérimenté dans l'art périlleux de `l'extraction' : sa spécialité consiste à s'approprier les secrets les plus précieux d'un individu, enfouis au plus profond de son subconscient, pendant qu'il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l'univers trouble de l'espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier. Cependant, une ultime mission pourrait lui permettre de retrouver sa vie d'avant.",
        acteurs:["Ken Watanabe","Joseph Gordon-Levitt","Marion Cotillard","Ellen Page",
        "Tom Hardy","Cilian Murphy","Tom Berenger","Michel Caine"],

        critiques:[{nom:"Thomas",commentaire:"Leonardo DiCaprio livre l'une de ses meilleures performances en tant que Dom Cobb. C'est un film qui vous fait réfléchir et vous donne envie de le revoir.",star:4},
        {nom:"Michel",commentaire:"Non, juste non ",star:1},
        {nom:"Christian",commentaire:"J'ai beacoup aimé ce film même si je n'ai rien compris.",star:4},
        {nom:"Aliénor",commentaire:"Film bouleversant et impressionnant qui vous prend du début à la fin.Vu et revu tellement de fois que je qualifie ce film s'en mal de chef d'oeuvre.",star:5},
        {nom:"Annie",commentaire:"Inception est trop compliqué pour son propre bien. J'ai eu du mal à suivre l'intrigue, ce qui a rendu l'expérience décevante.",star:2},
        {nom:"John",commentaire:"Les dialogues philosophiques peuvent sembler prétentieux et alourdir l'histoire. J'aurais préféré un équilibre différent entre action et réflexion.",star:3}],
        
        quizz:[{question:'Qui est le réalisateur du film "Inception" ?',rep:'Christopher Nolan',difficulte:"Facile"},
        {question:"Quel acteur principal interprète le personnage de Dom Cobb, le voleur d'informations ?",rep:"Leonardo DiCaprio",difficulte:"Facile"},
        {question:"Qui est l'acteur qui incarne le personnage de Mal, la femme décédée de Dom Cobb, qui apparaît fréquemment dans ses rêves ?",rep:"Marion Cotillard",difficulte:"Facile"},
        {question:"Quelle est l'idée principale du film  ? (Indice : c'est lié aux rêves)",rep:"pénétrer les rêves",difficulte:"Intermédiaire"},
        {question:"Quel est le nom du projet d'extraction d'informations dans les rêves que Dom Cobb et son équipe tentent de réaliser ?",rep:"Inception",difficulte:"Intermédiaire"},
        {question:"Quel est l'objet totem que Dom Cobb utilise pour distinguer entre le rêve et la réalité ?",rep:"Toupie",difficulte:"Intermédiaire"},
        {question:"Comment Dom Cobb entre-t-il dans le subconscient de ses cibles pour voler des informations ?",rep:"Passeur",difficulte:"Difficle"}]
    },
    {
        titre: "La Ligne rouge",
        img:"/src/assets/ligne rouge.webp",
        synopsis :"Pendant la Guerre du Pacifique, alors que l’armée américaine veut reprendre l’île de Guadalcanal aux Japonais, un déserteur installé dans un village mélanésien doit réintégrer sa Compagnie. Les soldats débarquent sans rencontrer de résistance mais en pénétrant dans les territoires intérieurs de l’île, ils subissent sur la Colline 210 un feu nourri provenant d’un bunker lourdement armé…",
        acteurs: ["Nick Notle","Jim Caviezel","Seann Penn","Adrien Brody"],

        critiques:[{nom:"Thomas",commentaire:"Test1",star:2},
        {nom:"Alain",commentaire:"Test2",star:5},
        {nom:"Théo",commentaire:"Test3",star:3},
        {nom:"Marie",commentaire:"Test4",star:4},
        {nom:"Anne",commentaire:"Test6",star:1}],
        
        quizz:[{question:'Qui a réalisé le film "La Ligne Rouge" ?',rep:'Terrence Malick',difficulte:"Facile"},
        {question:"Quel est le titre original du film La Ligne Rouge ?",rep:"The Thin Red Line",difficulte:"Facile"},
        {question:"Combien de temps dure approximativement le film ?",rep:"3h",difficulte:"Facile"},
        {question:"Où se déroule principalement l'action du film ?",rep:"Guadalcanal",difficulte:"Intermédiaire"},
        {question:"Le film La Ligne Rouge est-il basé sur un livre ?",rep:"Oui",difficulte:"Intermédiaire"},
        {question:"Quels acteurs célèbres ont joué dans le film ?",rep:"Sean Penn",difficulte:"Intermédiaire"},
       ]
    },
    {
        titre : "",
        img: "",
        synopsis :"",
        acteurs: [],
        critiques: [],
        quizz: []
    }
]

export default film;