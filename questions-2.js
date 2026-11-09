// Batch 2: 252 prompts added November 2026 (36 daily games), scheduled after
// the launch bank in questions.js. The batch is shuffled once with a fixed
// seed so topics are mixed from day to day.
// Never edit, reorder or remove prompts here once the batch is live: the
// daily schedule depends on it. Put new prompts in a new batch file instead.

(() => {
  const BATCH = [
    // ---------- Players' clubs ----------
    {
      prompt: "Name a club Mesut Özil played for (senior career)",
      answers: [
        ["Arsenal", 5], ["Real Madrid", 15], ["Werder Bremen", 50, "Bremen"], ["Schalke", 60, "Schalke 04"],
        ["Fenerbahce", 60], ["Istanbul Basaksehir", 90, "Basaksehir"],
      ],
    },
    {
      prompt: "Name a club Cesc Fàbregas played for (senior career)",
      answers: [
        ["Arsenal", 5], ["Barcelona", 10, "Barca"], ["Chelsea", 15], ["Monaco", 60, "AS Monaco"], ["Como", 88],
      ],
    },
    {
      prompt: "Name a club David Silva played for (loans count)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Valencia", 25], ["Real Sociedad", 40],
        ["Celta Vigo", 80, "Celta"], ["Eibar", 90, "SD Eibar"],
      ],
    },
    {
      prompt: "Name a club Yaya Touré played for (senior career)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Barcelona", 15, "Barca"], ["Monaco", 55, "AS Monaco"],
        ["Olympiacos", 65, "Olympiakos"], ["Beveren", 85, "KSK Beveren"], ["Metalurh Donetsk", 90, "Metalurg Donetsk"],
        ["Qingdao Huanghai", 92, "Qingdao"],
      ],
    },
    {
      prompt: "Name a club Patrick Vieira played for (senior career)",
      answers: [
        ["Arsenal", 5], ["Juventus", 35, "Juve"], ["Inter Milan", 35, "Inter", "Internazionale"],
        ["Manchester City", 45, "Man City"], ["AC Milan", 70, "Milan"], ["Cannes", 88, "AS Cannes"],
      ],
    },
    {
      prompt: "Name a club Robin van Persie played for (senior career)",
      answers: [
        ["Arsenal", 5], ["Manchester United", 10, "Man United", "Man Utd"], ["Feyenoord", 50],
        ["Fenerbahce", 88],
      ],
    },
    {
      prompt: "Name a club Wesley Sneijder played for (senior career)",
      answers: [
        ["Inter Milan", 10, "Inter", "Internazionale"], ["Ajax", 25], ["Real Madrid", 25], ["Galatasaray", 45, "Gala"],
        ["Nice", 85, "OGC Nice"], ["Al Gharafa", 92, "Al-Gharafa"],
      ],
    },
    {
      prompt: "Name a club Xabi Alonso played for (loans count)",
      answers: [
        ["Liverpool", 5], ["Real Madrid", 10], ["Bayern Munich", 20, "Bayern"], ["Real Sociedad", 50],
        ["Eibar", 92, "SD Eibar"],
      ],
    },
    {
      prompt: "Name a club Philippe Coutinho has played for (loans count, up to 2025)",
      answers: [
        ["Liverpool", 5], ["Barcelona", 10, "Barca"], ["Bayern Munich", 35, "Bayern"], ["Aston Villa", 35, "Villa"],
        ["Inter Milan", 55, "Inter", "Internazionale"], ["Vasco da Gama", 70, "Vasco"], ["Espanyol", 85],
        ["Al Duhail", 90, "Al-Duhail"],
      ],
    },
    {
      prompt: "Name a club Daniel Sturridge played for (loans count)",
      answers: [
        ["Liverpool", 5], ["Chelsea", 20], ["Manchester City", 30, "Man City"], ["Bolton Wanderers", 60, "Bolton"],
        ["West Bromwich Albion", 70, "West Brom", "WBA"], ["Trabzonspor", 75], ["Perth Glory", 90],
      ],
    },
    {
      prompt: "Name a club Joe Cole played for (loans count)",
      answers: [
        ["Chelsea", 5], ["West Ham United", 15, "West Ham"], ["Liverpool", 30], ["Aston Villa", 50, "Villa"],
        ["Lille", 70], ["Coventry City", 80, "Coventry"], ["Tampa Bay Rowdies", 92, "Tampa Bay"],
      ],
    },
    {
      prompt: "Name a club Shaun Wright-Phillips played for (senior career)",
      answers: [
        ["Manchester City", 10, "Man City"], ["Chelsea", 15], ["Queens Park Rangers", 45, "QPR"],
        ["New York Red Bulls", 75, "Red Bulls", "NY Red Bulls"], ["Phoenix Rising", 92, "Phoenix"],
      ],
    },
    {
      prompt: "Name a club Craig Bellamy played for (loans count)",
      answers: [
        ["Liverpool", 15], ["Newcastle United", 15, "Newcastle"], ["Manchester City", 30, "Man City"],
        ["Cardiff City", 30, "Cardiff"], ["West Ham United", 45, "West Ham"], ["Blackburn Rovers", 50, "Blackburn"],
        ["Celtic", 70], ["Norwich City", 75, "Norwich"], ["Coventry City", 86, "Coventry"],
      ],
    },
    {
      prompt: "Name a club Louis Saha played for (loans count)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Fulham", 20], ["Everton", 25],
        ["Tottenham Hotspur", 50, "Tottenham", "Spurs"], ["Sunderland", 70], ["Newcastle United", 75, "Newcastle"],
        ["Metz", 85, "FC Metz"], ["Lazio", 92],
      ],
    },
    {
      prompt: "Name a club Samuel Eto'o played for (loans count)",
      answers: [
        ["Barcelona", 5, "Barca"], ["Inter Milan", 15, "Inter", "Internazionale"], ["Chelsea", 20],
        ["Real Madrid", 40], ["Everton", 45], ["Mallorca", 50, "RCD Mallorca"], ["Anzhi Makhachkala", 60, "Anzhi"],
        ["Sampdoria", 75], ["Antalyaspor", 85], ["Konyaspor", 88], ["Espanyol", 90], ["Leganes", 92],
        ["Qatar SC", 95],
      ],
    },
    {
      prompt: "Name a club Kaká played for (senior career)",
      answers: [
        ["AC Milan", 5, "Milan"], ["Real Madrid", 10], ["Orlando City", 60, "Orlando"], ["Sao Paulo", 86],
      ],
    },
    {
      prompt: "Name a club Andrea Pirlo played for (loans count)",
      answers: [
        ["Juventus", 5, "Juve"], ["AC Milan", 10, "Milan"], ["Inter Milan", 50, "Inter", "Internazionale"],
        ["New York City FC", 60, "NYCFC", "New York City"], ["Brescia", 75], ["Reggina", 92],
      ],
    },
    {
      prompt: "Name a club David Villa played for (loans count)",
      answers: [
        ["Barcelona", 5, "Barca"], ["Valencia", 10], ["Atletico Madrid", 30, "Atletico", "Atleti"],
        ["New York City FC", 40, "NYCFC", "New York City"], ["Real Zaragoza", 70, "Zaragoza"],
        ["Vissel Kobe", 75], ["Sporting Gijon", 85, "Gijon"], ["Melbourne City", 88],
      ],
    },
    {
      prompt: "Name a club Gerard Piqué played for (loans count)",
      answers: [
        ["Barcelona", 5, "Barca"], ["Manchester United", 40, "Man United", "Man Utd"], ["Real Zaragoza", 90, "Zaragoza"],
      ],
    },
    {
      prompt: "Name a club Olivier Giroud has played for (loans count, up to 2025)",
      answers: [
        ["Arsenal", 5], ["Chelsea", 10], ["AC Milan", 20, "Milan"], ["Montpellier", 45], ["Los Angeles FC", 50, "LAFC"],
        ["Lille", 70], ["Tours", 85], ["Grenoble", 88], ["Istres", 92],
      ],
    },
    {
      prompt: "Name a club Hugo Lloris has played for (senior career, up to 2025)",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Lyon", 40, "Olympique Lyonnais"],
        ["Los Angeles FC", 45, "LAFC"], ["Nice", 86, "OGC Nice"],
      ],
    },
    {
      prompt: "Name a club Petr Čech played for (senior career)",
      answers: [
        ["Chelsea", 5], ["Arsenal", 15], ["Rennes", 70], ["Sparta Prague", 80, "Sparta Praha"],
        ["Chmel Blsany", 95, "Blsany"],
      ],
    },
    {
      prompt: "Name a club Edwin van der Sar played for (senior career)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Ajax", 25], ["Fulham", 45], ["Juventus", 86, "Juve"],
      ],
    },
    {
      prompt: "Name a club Rio Ferdinand played for (loans count)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Leeds United", 20, "Leeds"], ["West Ham United", 20, "West Ham"],
        ["Queens Park Rangers", 60, "QPR"], ["Bournemouth", 90, "AFC Bournemouth"],
      ],
    },
    {
      prompt: "Name a club John Terry played for (loans count)",
      answers: [
        ["Chelsea", 5], ["Aston Villa", 40, "Villa"], ["Nottingham Forest", 88, "Forest", "Nottm Forest"],
      ],
    },
    {
      prompt: "Name a club Sol Campbell played for",
      answers: [
        ["Arsenal", 5], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Portsmouth", 50, "Pompey"],
        ["Newcastle United", 70, "Newcastle"], ["Notts County", 88],
      ],
    },
    {
      prompt: "Name a club Scott Parker played for (loans count)",
      answers: [
        ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["West Ham United", 20, "West Ham"], ["Chelsea", 30],
        ["Charlton Athletic", 40, "Charlton"], ["Newcastle United", 45, "Newcastle"], ["Fulham", 45],
        ["Norwich City", 90, "Norwich"],
      ],
    },
    {
      prompt: "Name a club Gareth Barry played for",
      answers: [
        ["Aston Villa", 10, "Villa"], ["Manchester City", 15, "Man City"], ["Everton", 35],
        ["West Bromwich Albion", 86, "West Brom", "WBA"],
      ],
    },
    {
      prompt: "Name a club James Milner has played for (loans count, up to 2025)",
      answers: [
        ["Liverpool", 5], ["Manchester City", 20, "Man City"], ["Aston Villa", 35, "Villa"], ["Leeds United", 40, "Leeds"],
        ["Newcastle United", 45, "Newcastle"], ["Brighton & Hove Albion", 45, "Brighton"], ["Swindon Town", 92, "Swindon"],
      ],
    },
    {
      prompt: "Name a club Ashley Young has played for (senior career, up to 2025)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Aston Villa", 15, "Villa"], ["Everton", 40],
        ["Inter Milan", 55, "Inter", "Internazionale"], ["Ipswich Town", 70, "Ipswich"], ["Watford", 86],
      ],
    },
    {
      prompt: "Name a club Kieran Trippier has played for (loans count, up to 2025)",
      answers: [
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Newcastle United", 10, "Newcastle"],
        ["Atletico Madrid", 25, "Atletico", "Atleti"], ["Burnley", 45], ["Barnsley", 90],
      ],
    },
    {
      prompt: "Name a club Kyle Walker has played for (loans count, up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["AC Milan", 40, "Milan"],
        ["Sheffield United", 45, "Sheff Utd"], ["Burnley", 45], ["Aston Villa", 75, "Villa"],
        ["Queens Park Rangers", 80, "QPR"], ["Northampton Town", 95, "Northampton"],
      ],
    },
    {
      prompt: "Name a club Jordan Pickford has played for (loans count, up to 2025)",
      answers: [
        ["Everton", 5], ["Sunderland", 20], ["Preston North End", 60, "Preston"], ["Bradford City", 70, "Bradford"],
        ["Carlisle United", 80, "Carlisle"], ["Burton Albion", 80, "Burton"], ["Darlington", 88], ["Alfreton Town", 95, "Alfreton"],
      ],
    },
    {
      prompt: "Name a club Harry Maguire has played for (loans count, up to 2025)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Leicester City", 15, "Leicester"], ["Hull City", 30, "Hull"],
        ["Sheffield United", 45, "Sheff Utd"], ["Wigan Athletic", 90, "Wigan"],
      ],
    },
    {
      prompt: "Name a club Jack Grealish has played for (loans count, up to 2025)",
      answers: [
        ["Aston Villa", 5, "Villa"], ["Manchester City", 5, "Man City"], ["Everton", 40], ["Notts County", 92],
      ],
    },
    {
      prompt: "Name a club Dele Alli has played for (loans count, up to 2025)",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Everton", 25], ["Milton Keynes Dons", 55, "MK Dons"],
        ["Besiktas", 70], ["Como", 88],
      ],
    },
    {
      prompt: "Name a club Christian Eriksen played for between 2010 and 2025",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Manchester United", 15, "Man United", "Man Utd"],
        ["Inter Milan", 30, "Inter", "Internazionale"], ["Ajax", 45], ["Brentford", 86],
      ],
    },
    {
      prompt: "Name a club Riyad Mahrez has played for (senior career, up to 2025)",
      answers: [
        ["Leicester City", 5, "Leicester"], ["Manchester City", 10, "Man City"], ["Al Ahli", 50, "Al-Ahli"],
        ["Le Havre", 88],
      ],
    },
    {
      prompt: "Name a club Son Heung-min has played for (senior career, up to 2025)",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Los Angeles FC", 35, "LAFC"],
        ["Bayer Leverkusen", 60, "Leverkusen"], ["Hamburg", 88, "Hamburger SV", "HSV"],
      ],
    },
    {
      prompt: "Name a club Ian Wright played for (loans count)",
      answers: [
        ["Arsenal", 5], ["Crystal Palace", 20, "Palace"], ["West Ham United", 50, "West Ham"], ["Celtic", 75],
        ["Burnley", 80], ["Nottingham Forest", 88, "Forest", "Nottm Forest"],
      ],
    },
    {
      prompt: "Name a club Paul Gascoigne played for",
      answers: [
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Newcastle United", 15, "Newcastle"], ["Lazio", 25],
        ["Rangers", 25], ["Middlesbrough", 50, "Boro"], ["Everton", 55], ["Burnley", 80],
        ["Boston United", 92, "Boston"], ["Gansu Tianma", 95],
      ],
    },
    {
      prompt: "Name a club Teddy Sheringham played for (loans count)",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"],
        ["West Ham United", 40, "West Ham"], ["Millwall", 50], ["Portsmouth", 55, "Pompey"],
        ["Nottingham Forest", 60, "Forest", "Nottm Forest"], ["Colchester United", 80, "Colchester"],
        ["Aldershot", 92], ["Djurgarden", 95, "Djurgardens IF"],
      ],
    },
    {
      prompt: "Name a club Robbie Fowler played for",
      answers: [
        ["Liverpool", 5], ["Leeds United", 30, "Leeds"], ["Manchester City", 30, "Man City"], ["Cardiff City", 60, "Cardiff"],
        ["Blackburn Rovers", 70, "Blackburn"], ["Perth Glory", 85], ["North Queensland Fury", 92, "North Queensland"],
        ["Muangthong United", 95, "Muangthong"],
      ],
    },
    {
      prompt: "Name a club Gianfranco Zola played for",
      answers: [
        ["Chelsea", 5], ["Napoli", 30], ["Parma", 30], ["Cagliari", 60], ["Torres", 95], ["Nuorese", 95],
      ],
    },
    {
      prompt: "Name a club Eric Cantona played for (loans count)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Leeds United", 20, "Leeds"], ["Marseille", 50, "OM"],
        ["Auxerre", 60], ["Montpellier", 70], ["Bordeaux", 80], ["Nimes", 85], ["Martigues", 95],
      ],
    },
    {
      prompt: "Name a club Ruud Gullit played for",
      answers: [
        ["AC Milan", 10, "Milan"], ["Chelsea", 15], ["Feyenoord", 50], ["PSV Eindhoven", 50, "PSV"],
        ["Sampdoria", 60], ["Haarlem", 92, "HFC Haarlem"],
      ],
    },
    {
      prompt: "Name a club Jürgen Klinsmann played for",
      answers: [
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Bayern Munich", 20, "Bayern"],
        ["Inter Milan", 30, "Inter", "Internazionale"], ["Stuttgart", 40, "VfB Stuttgart"], ["Monaco", 50, "AS Monaco"],
        ["Sampdoria", 70], ["Stuttgarter Kickers", 92], ["Orange County Blue Star", 98],
      ],
    },
    {
      prompt: "Name a club Jay-Jay Okocha played for (senior career)",
      answers: [
        ["Bolton Wanderers", 5, "Bolton"], ["Paris Saint-Germain", 25, "PSG", "Paris"], ["Fenerbahce", 50],
        ["Eintracht Frankfurt", 55, "Frankfurt"], ["Hull City", 65, "Hull"], ["Qatar SC", 90],
        ["Borussia Neunkirchen", 95, "Neunkirchen"],
      ],
    },
    {
      prompt: "Name a club Tim Cahill played for",
      answers: [
        ["Everton", 5], ["Millwall", 30], ["New York Red Bulls", 45, "Red Bulls", "NY Red Bulls"],
        ["Melbourne City", 70], ["Shanghai Shenhua", 75, "Shanghai"], ["Hangzhou Greentown", 90, "Hangzhou"],
        ["Jamshedpur", 95, "Jamshedpur FC"],
      ],
    },
    {
      prompt: "Name a club Clint Dempsey played for",
      answers: [
        ["Fulham", 10], ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["Seattle Sounders", 35, "Seattle"],
        ["New England Revolution", 88, "New England"],
      ],
    },
    {
      prompt: "Name a club Landon Donovan played for (loans count)",
      answers: [
        ["LA Galaxy", 10, "Galaxy"], ["Everton", 25], ["Bayern Munich", 50, "Bayern"], ["Bayer Leverkusen", 60, "Leverkusen"],
        ["San Jose Earthquakes", 70, "San Jose"], ["Leon", 95, "Club Leon"],
      ],
    },
    {
      prompt: "Name a club Kevin Keegan played for",
      answers: [
        ["Liverpool", 5], ["Newcastle United", 20, "Newcastle"], ["Hamburg", 35, "Hamburger SV", "HSV"],
        ["Southampton", 60], ["Scunthorpe United", 90, "Scunthorpe"],
      ],
    },
    {
      prompt: "Name a club Michael Carrick played for (loans count)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Tottenham Hotspur", 25, "Tottenham", "Spurs"],
        ["West Ham United", 30, "West Ham"], ["Swindon Town", 90, "Swindon"], ["Birmingham City", 92, "Birmingham"],
      ],
    },
    {
      prompt: "Name a club Owen Hargreaves played for",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Bayern Munich", 15, "Bayern"],
        ["Manchester City", 88, "Man City"],
      ],
    },
    {
      prompt: "Name a club Glen Johnson played for (loans count)",
      answers: [
        ["Liverpool", 10], ["Chelsea", 25], ["Portsmouth", 40, "Pompey"], ["West Ham United", 45, "West Ham"],
        ["Stoke City", 60, "Stoke"], ["Millwall", 92],
      ],
    },
    {
      prompt: "Name a club Joey Barton played for (loans count)",
      answers: [
        ["Manchester City", 15, "Man City"], ["Newcastle United", 15, "Newcastle"], ["Queens Park Rangers", 30, "QPR"],
        ["Burnley", 50], ["Rangers", 60], ["Marseille", 86, "OM"],
      ],
    },
    {
      prompt: "Name a club Mario Balotelli has played for (loans count, up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["AC Milan", 15, "Milan"], ["Inter Milan", 15, "Inter", "Internazionale"],
        ["Liverpool", 15], ["Nice", 40, "OGC Nice"], ["Marseille", 50, "OM"], ["Brescia", 60], ["Adana Demirspor", 70, "Adana"],
        ["Monza", 75], ["Genoa", 75], ["Basel", 85, "FC Basel"], ["Sion", 90, "FC Sion"], ["Lumezzane", 95],
      ],
    },
    {
      prompt: "Name a club Javier 'Chicharito' Hernández has played for (loans count, up to 2025)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["West Ham United", 25, "West Ham"], ["Real Madrid", 30],
        ["Bayer Leverkusen", 45, "Leverkusen"], ["LA Galaxy", 50, "Galaxy"], ["Guadalajara", 70, "Chivas", "Chivas Guadalajara"],
        ["Sevilla", 86],
      ],
    },
    {
      prompt: "Name a club Radamel Falcao played for (loans count)",
      answers: [
        ["Atletico Madrid", 10, "Atletico", "Atleti"], ["Porto", 20, "FC Porto"], ["Monaco", 20, "AS Monaco"],
        ["Manchester United", 25, "Man United", "Man Utd"], ["Chelsea", 35], ["Galatasaray", 55, "Gala"],
        ["River Plate", 60, "River"], ["Rayo Vallecano", 70, "Rayo"], ["Millonarios", 85], ["Lanceros Boyaca", 95, "Lanceros"],
      ],
    },
    {
      prompt: "Name a club Ángel Di María has played for (senior career, up to 2025)",
      answers: [
        ["Real Madrid", 10], ["Paris Saint-Germain", 15, "PSG", "Paris"], ["Manchester United", 15, "Man United", "Man Utd"],
        ["Juventus", 40, "Juve"], ["Benfica", 40], ["Rosario Central", 86, "Rosario"],
      ],
    },
    {
      prompt: "Name a club Gonzalo Higuaín played for (loans count)",
      answers: [
        ["Real Madrid", 10], ["Napoli", 10], ["Juventus", 10, "Juve"], ["Chelsea", 40], ["AC Milan", 50, "Milan"],
        ["Inter Miami", 60], ["River Plate", 86, "River"],
      ],
    },
    {
      prompt: "Name a club Juan Mata has played for (senior career, up to 2025)",
      answers: [
        ["Chelsea", 5], ["Manchester United", 10, "Man United", "Man Utd"], ["Valencia", 30], ["Galatasaray", 60, "Gala"],
        ["Vissel Kobe", 80], ["Real Madrid Castilla", 85, "Real Madrid", "Castilla"], ["Western Sydney Wanderers", 92, "Western Sydney"],
      ],
    },
    {
      prompt: "Name a club Santi Cazorla played for (loans count, up to 2025)",
      answers: [
        ["Arsenal", 5], ["Villarreal", 20], ["Malaga", 50], ["Al Sadd", 70, "Al-Sadd"], ["Real Oviedo", 75, "Oviedo"],
        ["Recreativo Huelva", 92, "Recreativo"],
      ],
    },
    {
      prompt: "Name a club Victor Moses played for (loans count, up to 2025)",
      answers: [
        ["Chelsea", 5], ["Wigan Athletic", 30, "Wigan"], ["Crystal Palace", 40, "Palace"], ["Liverpool", 40],
        ["West Ham United", 50, "West Ham"], ["Inter Milan", 55, "Inter", "Internazionale"], ["Stoke City", 60, "Stoke"],
        ["Fenerbahce", 65], ["Luton Town", 70, "Luton"], ["Spartak Moscow", 88, "Spartak"],
      ],
    },
    {
      prompt: "Name a club Christian Benteke played for (loans count, up to 2025)",
      answers: [
        ["Aston Villa", 10, "Villa"], ["Crystal Palace", 10, "Palace"], ["Liverpool", 15], ["Genk", 50, "KRC Genk"],
        ["DC United", 60, "D.C. United"], ["Standard Liege", 70, "Standard"], ["Mechelen", 88, "KV Mechelen"],
        ["Kortrijk", 92, "KV Kortrijk"],
      ],
    },
    {
      prompt: "Name a club Marouane Fellaini played for",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Everton", 10], ["Standard Liege", 60, "Standard"],
        ["Shandong Luneng", 88, "Shandong Taishan", "Shandong"],
      ],
    },
    {
      prompt: "Name a club Jan Vertonghen played for (loans count)",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Ajax", 25], ["Benfica", 45], ["Anderlecht", 60],
        ["RKC Waalwijk", 95, "RKC"],
      ],
    },
    {
      prompt: "Name a club Toby Alderweireld played for (loans count)",
      answers: [
        ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Ajax", 30], ["Southampton", 45], ["Atletico Madrid", 50, "Atletico", "Atleti"],
        ["Antwerp", 70, "Royal Antwerp"], ["Al Duhail", 88, "Al-Duhail"],
      ],
    },
    {
      prompt: "Name a club Thibaut Courtois has played for (loans count, up to 2025)",
      answers: [
        ["Real Madrid", 5], ["Chelsea", 10], ["Atletico Madrid", 20, "Atletico", "Atleti"], ["Genk", 88, "KRC Genk"],
      ],
    },
    {
      prompt: "Name a club İlkay Gündoğan has played for (senior career, up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Borussia Dortmund", 25, "Dortmund", "BVB"], ["Barcelona", 30, "Barca"],
        ["Galatasaray", 50, "Gala"], ["Nurnberg", 85, "Nuremberg", "1. FC Nurnberg"], ["Bochum", 92, "VfL Bochum"],
      ],
    },
    {
      prompt: "Name a club Leroy Sané has played for (senior career, up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Bayern Munich", 10, "Bayern"], ["Galatasaray", 45, "Gala"], ["Schalke", 86, "Schalke 04"],
      ],
    },
    {
      prompt: "Name a club Raúl played for (senior career)",
      answers: [
        ["Real Madrid", 5], ["Schalke", 50, "Schalke 04"], ["Al Sadd", 80, "Al-Sadd"], ["New York Cosmos", 90, "NY Cosmos", "Cosmos"],
      ],
    },
    {
      prompt: "Name a club Michael Ballack played for",
      answers: [
        ["Chelsea", 10], ["Bayern Munich", 10, "Bayern"], ["Bayer Leverkusen", 25, "Leverkusen"],
        ["Kaiserslautern", 75], ["Chemnitzer FC", 92, "Chemnitz"],
      ],
    },
    {
      prompt: "Name a club Bastian Schweinsteiger played for",
      answers: [
        ["Bayern Munich", 5, "Bayern"], ["Manchester United", 15, "Man United", "Man Utd"], ["Chicago Fire", 88, "Chicago"],
      ],
    },
    {
      prompt: "Name a club Arjen Robben played for",
      answers: [
        ["Bayern Munich", 5, "Bayern"], ["Chelsea", 10], ["Real Madrid", 25], ["PSV Eindhoven", 45, "PSV"], ["Groningen", 86],
      ],
    },
    {
      prompt: "Name a club Clarence Seedorf played for",
      answers: [
        ["AC Milan", 10, "Milan"], ["Real Madrid", 20], ["Ajax", 30], ["Inter Milan", 50, "Inter", "Internazionale"],
        ["Sampdoria", 75], ["Botafogo", 88],
      ],
    },
    {
      prompt: "Name a club Edgar Davids played for (loans count)",
      answers: [
        ["Juventus", 10, "Juve"], ["Ajax", 15], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"], ["Barcelona", 40, "Barca"],
        ["AC Milan", 50, "Milan"], ["Inter Milan", 55, "Inter", "Internazionale"], ["Crystal Palace", 70, "Palace"], ["Barnet", 92],
      ],
    },
    {
      prompt: "Name a club Patrick Kluivert played for",
      answers: [
        ["Barcelona", 10, "Barca"], ["Ajax", 15], ["Newcastle United", 35, "Newcastle"], ["AC Milan", 55, "Milan"],
        ["Valencia", 65], ["PSV Eindhoven", 70, "PSV"], ["Lille", 88],
      ],
    },
    {
      prompt: "Name a club Marc Overmars played for",
      answers: [
        ["Arsenal", 5], ["Ajax", 20], ["Barcelona", 25, "Barca"], ["Willem II", 85], ["Go Ahead Eagles", 92],
      ],
    },
    {
      prompt: "Name a club Emmanuel Petit played for",
      answers: [
        ["Arsenal", 5], ["Chelsea", 30], ["Barcelona", 50, "Barca"], ["Monaco", 86, "AS Monaco"],
      ],
    },
    {
      prompt: "Name a club Claude Makélélé played for",
      answers: [
        ["Chelsea", 5], ["Real Madrid", 15], ["Paris Saint-Germain", 50, "PSG", "Paris"], ["Nantes", 70],
        ["Marseille", 80, "OM"], ["Celta Vigo", 88, "Celta"],
      ],
    },
    {
      prompt: "Name a club Robert Pires played for",
      answers: [
        ["Arsenal", 5], ["Marseille", 40, "OM"], ["Villarreal", 50], ["Metz", 60, "FC Metz"], ["Aston Villa", 60, "Villa"],
        ["FC Goa", 95, "Goa"],
      ],
    },
    {
      prompt: "Name a club William Gallas played for",
      answers: [
        ["Chelsea", 5], ["Arsenal", 10], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"], ["Marseille", 60, "OM"],
        ["Caen", 80, "SM Caen"], ["Perth Glory", 92],
      ],
    },
    {
      prompt: "Name a club Florent Malouda played for",
      answers: [
        ["Chelsea", 5], ["Lyon", 30, "Olympique Lyonnais"], ["Guingamp", 60], ["Trabzonspor", 65], ["Metz", 75, "FC Metz"],
        ["Chateauroux", 85], ["Delhi Dynamos", 88, "Delhi"], ["Wadi Degla", 95],
      ],
    },
    {
      prompt: "Name a club Franck Ribéry played for",
      answers: [
        ["Bayern Munich", 5, "Bayern"], ["Marseille", 30, "OM"], ["Fiorentina", 50], ["Galatasaray", 60, "Gala"],
        ["Salernitana", 70], ["Metz", 75, "FC Metz"], ["Brest", 80, "Stade Brestois"], ["Boulogne", 88, "US Boulogne"],
        ["Ales", 95, "Olympique Ales"],
      ],
    },
    {
      prompt: "Name a club Xherdan Shaqiri has played for (senior career, up to 2025)",
      answers: [
        ["Liverpool", 10], ["Stoke City", 15, "Stoke"], ["Bayern Munich", 20, "Bayern"], ["Basel", 40, "FC Basel"],
        ["Inter Milan", 55, "Inter", "Internazionale"], ["Lyon", 70, "Olympique Lyonnais"], ["Chicago Fire", 88, "Chicago"],
      ],
    },
    {
      prompt: "Name a club Granit Xhaka has played for (senior career, up to 2025)",
      answers: [
        ["Arsenal", 5], ["Bayer Leverkusen", 15, "Leverkusen"], ["Borussia Monchengladbach", 45, "Gladbach", "Monchengladbach"],
        ["Sunderland", 50], ["Basel", 86, "FC Basel"],
      ],
    },
    {
      prompt: "Name a club Emmanuel Adebayor played for (loans count)",
      answers: [
        ["Arsenal", 5], ["Manchester City", 15, "Man City"], ["Tottenham Hotspur", 15, "Tottenham", "Spurs"],
        ["Real Madrid", 40], ["Crystal Palace", 50, "Palace"], ["Monaco", 55, "AS Monaco"], ["Metz", 75, "FC Metz"],
        ["Istanbul Basaksehir", 80, "Basaksehir"], ["Kayserispor", 88], ["Olimpia", 95, "Club Olimpia"],
      ],
    },
    {
      prompt: "Name a club George Weah played for",
      answers: [
        ["AC Milan", 5, "Milan"], ["Paris Saint-Germain", 20, "PSG", "Paris"], ["Chelsea", 25], ["Monaco", 30, "AS Monaco"],
        ["Manchester City", 40, "Man City"], ["Marseille", 60, "OM"], ["Al Jazira", 85, "Al-Jazira"],
        ["Tonnerre Yaounde", 92, "Tonnerre"], ["Africa Sports", 95], ["Invincible Eleven", 95], ["Mighty Barrolle", 95],
      ],
    },
    {
      prompt: "Name a club David James played for",
      answers: [
        ["Liverpool", 15], ["Portsmouth", 15, "Pompey"], ["West Ham United", 30, "West Ham"], ["Manchester City", 30, "Man City"],
        ["Aston Villa", 35, "Villa"], ["Watford", 55], ["Bristol City", 70], ["Bournemouth", 75, "AFC Bournemouth"],
        ["Kerala Blasters", 90, "Kerala"], ["IBV", 95, "IBV Vestmannaeyjar"],
      ],
    },
    {
      prompt: "Name a club Shay Given played for (loans count)",
      answers: [
        ["Newcastle United", 5, "Newcastle"], ["Manchester City", 25, "Man City"], ["Aston Villa", 45, "Villa"],
        ["Blackburn Rovers", 50, "Blackburn"], ["Stoke City", 55, "Stoke"], ["Middlesbrough", 75, "Boro"],
        ["Sunderland", 85], ["Swindon Town", 92, "Swindon"],
      ],
    },
    {
      prompt: "Name a club Paul Robinson played for (goalkeeper, senior career)",
      answers: [
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Leeds United", 20, "Leeds"], ["Blackburn Rovers", 40, "Blackburn"],
        ["Burnley", 88],
      ],
    },
    {
      prompt: "Name a club Joe Hart played for (loans count)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Celtic", 30], ["Burnley", 40], ["West Ham United", 40, "West Ham"],
        ["Tottenham Hotspur", 45, "Tottenham", "Spurs"], ["Torino", 50], ["Birmingham City", 55, "Birmingham"],
        ["Shrewsbury Town", 75, "Shrewsbury"], ["Blackpool", 85], ["Tranmere Rovers", 92, "Tranmere"],
      ],
    },
    {
      prompt: "Name a club Jens Lehmann played for",
      answers: [
        ["Arsenal", 5], ["Borussia Dortmund", 35, "Dortmund", "BVB"], ["Schalke", 45, "Schalke 04"],
        ["Stuttgart", 70, "VfB Stuttgart"], ["AC Milan", 88, "Milan"],
      ],
    },
    {
      prompt: "Name a club Jude Bellingham has played for (senior career, up to 2025)",
      answers: [
        ["Real Madrid", 5], ["Borussia Dortmund", 10, "Dortmund", "BVB"], ["Birmingham City", 86, "Birmingham"],
      ],
    },
    {
      prompt: "Name a club Darwin Núñez has played for (senior career, up to 2025)",
      answers: [
        ["Liverpool", 5], ["Benfica", 20], ["Al Hilal", 40, "Al-Hilal"], ["Almeria", 75], ["Penarol", 88],
      ],
    },
    {
      prompt: "Name a club Bruno Fernandes has played for (senior career, up to 2025)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Sporting CP", 20, "Sporting Lisbon", "Sporting"],
        ["Sampdoria", 60], ["Udinese", 65], ["Novara", 92],
      ],
    },
    {
      prompt: "Name a club Casemiro has played for (loans count, up to 2025)",
      answers: [
        ["Real Madrid", 5], ["Manchester United", 10, "Man United", "Man Utd"], ["Sao Paulo", 70], ["Porto", 88, "FC Porto"],
      ],
    },
    {
      prompt: "Name a club Ollie Watkins has played for (loans count, up to 2025)",
      answers: [
        ["Aston Villa", 5, "Villa"], ["Brentford", 20], ["Exeter City", 60, "Exeter"], ["Weston-super-Mare", 95, "Weston"],
      ],
    },
    {
      prompt: "Name a club Dominic Calvert-Lewin has played for (loans count, up to 2025)",
      answers: [
        ["Everton", 5], ["Leeds United", 30, "Leeds"], ["Sheffield United", 60, "Sheff Utd"],
        ["Northampton Town", 80, "Northampton"], ["Stalybridge Celtic", 95, "Stalybridge"],
      ],
    },
    {
      prompt: "Name a club Callum Wilson has played for (loans count, up to 2025)",
      answers: [
        ["Newcastle United", 5, "Newcastle"], ["Bournemouth", 10, "AFC Bournemouth"], ["West Ham United", 40, "West Ham"],
        ["Coventry City", 60, "Coventry"], ["Kettering Town", 90, "Kettering"], ["Tamworth", 95],
      ],
    },
    {
      prompt: "Name a club Ivan Toney has played for (loans count, up to 2025)",
      answers: [
        ["Brentford", 5], ["Al Ahli", 30, "Al-Ahli"], ["Peterborough United", 40, "Peterborough", "Posh"],
        ["Northampton Town", 55, "Northampton"], ["Newcastle United", 60, "Newcastle"], ["Wigan Athletic", 75, "Wigan"],
        ["Scunthorpe United", 80, "Scunthorpe"], ["Shrewsbury Town", 85, "Shrewsbury"], ["Barnsley", 88],
      ],
    },
    {
      prompt: "Name a club Rickie Lambert played for",
      answers: [
        ["Southampton", 5], ["Liverpool", 15], ["West Bromwich Albion", 50, "West Brom", "WBA"], ["Cardiff City", 55, "Cardiff"],
        ["Bristol Rovers", 60], ["Blackpool", 75], ["Rochdale", 80], ["Stockport County", 85, "Stockport"],
        ["Macclesfield Town", 92, "Macclesfield"],
      ],
    },
    {
      prompt: "Name a club Troy Deeney played for (loans count)",
      answers: [
        ["Watford", 5], ["Birmingham City", 40, "Birmingham"], ["Walsall", 60], ["Forest Green Rovers", 70, "Forest Green"],
        ["Halesowen Town", 95, "Halesowen"],
      ],
    },
    {
      prompt: "Name a club Jarrod Bowen has played for (senior career, up to 2025)",
      answers: [
        ["West Ham United", 5, "West Ham"], ["Hull City", 30, "Hull"], ["Hereford", 88, "Hereford United"],
      ],
    },
    {
      prompt: "Name a club Jack Wilshere played for (loans count)",
      answers: [
        ["Arsenal", 5], ["Bournemouth", 30, "AFC Bournemouth"], ["West Ham United", 30, "West Ham"],
        ["Bolton Wanderers", 70, "Bolton"], ["AGF", 92, "Aarhus", "AGF Aarhus"],
      ],
    },
    {
      prompt: "Name a club Pablo Zabaleta played for",
      answers: [
        ["Manchester City", 5, "Man City"], ["West Ham United", 25, "West Ham"], ["Espanyol", 60],
        ["San Lorenzo", 86],
      ],
    },
    {
      prompt: "Name a club Tim Howard played for",
      answers: [
        ["Everton", 5], ["Manchester United", 15, "Man United", "Man Utd"], ["Colorado Rapids", 60, "Colorado"],
        ["MetroStars", 75, "NY/NJ MetroStars"], ["Memphis 901", 92, "Memphis"], ["North Jersey Imperials", 95],
      ],
    },
    {
      prompt: "Name a club Brad Friedel played for",
      answers: [
        ["Blackburn Rovers", 10, "Blackburn"], ["Aston Villa", 25, "Villa"], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"],
        ["Liverpool", 50], ["Columbus Crew", 85, "Columbus"], ["Galatasaray", 92, "Gala"],
      ],
    },
    {
      prompt: "Name a club David de Gea has played for (senior career, up to 2025)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Fiorentina", 30], ["Atletico Madrid", 86, "Atletico", "Atleti"],
      ],
    },
    {
      prompt: "Name a club Pepe Reina has played for (loans count, up to 2025)",
      answers: [
        ["Liverpool", 5], ["Napoli", 30], ["Villarreal", 40], ["AC Milan", 55, "Milan"], ["Aston Villa", 55, "Villa"],
        ["Lazio", 60], ["Barcelona", 65, "Barca"], ["Bayern Munich", 75, "Bayern"], ["Como", 88],
      ],
    },
    {
      prompt: "Name a club Mark Viduka played for",
      answers: [
        ["Leeds United", 10, "Leeds"], ["Middlesbrough", 25, "Boro"], ["Celtic", 30], ["Newcastle United", 40, "Newcastle"],
        ["Dinamo Zagreb", 80, "Croatia Zagreb"], ["Melbourne Knights", 95],
      ],
    },
    {
      prompt: "Name a club Harry Kewell played for",
      answers: [
        ["Leeds United", 10, "Leeds"], ["Liverpool", 10], ["Galatasaray", 50, "Gala"], ["Melbourne Victory", 70],
        ["Al Gharafa", 88, "Al-Gharafa"], ["Melbourne Heart", 92],
      ],
    },
    {
      prompt: "Name a club Fabrizio Ravanelli played for",
      answers: [
        ["Juventus", 10, "Juve"], ["Middlesbrough", 15, "Boro"], ["Lazio", 40], ["Marseille", 45, "OM"], ["Derby County", 45, "Derby"],
        ["Perugia", 60], ["Dundee", 75], ["Reggiana", 80], ["Avellino", 90], ["Casertana", 95],
      ],
    },
    {
      prompt: "Name a club Paolo Di Canio played for",
      answers: [
        ["West Ham United", 5, "West Ham"], ["Sheffield Wednesday", 25, "Sheff Wed"], ["Lazio", 25], ["Celtic", 35],
        ["Charlton Athletic", 50, "Charlton"], ["Juventus", 60, "Juve"], ["Napoli", 70], ["AC Milan", 70, "Milan"],
        ["Ternana", 90], ["Cisco Roma", 95],
      ],
    },
    {
      prompt: "Name a club Benni McCarthy played for",
      answers: [
        ["Porto", 15, "FC Porto"], ["Blackburn Rovers", 15, "Blackburn"], ["Ajax", 35], ["West Ham United", 40, "West Ham"],
        ["Celta Vigo", 60, "Celta"], ["Orlando Pirates", 70], ["Cape Town Spurs", 90], ["Seven Stars", 95],
      ],
    },
    {
      prompt: "Name a club Nwankwo Kanu played for",
      answers: [
        ["Arsenal", 5], ["Portsmouth", 20, "Pompey"], ["Ajax", 35], ["Inter Milan", 40, "Inter", "Internazionale"],
        ["West Bromwich Albion", 50, "West Brom", "WBA"], ["Iwuanyanwu Nationale", 95, "Heartland"],
      ],
    },
    {
      prompt: "Name a club Michael Essien played for (loans count)",
      answers: [
        ["Chelsea", 5], ["Lyon", 30, "Olympique Lyonnais"], ["Real Madrid", 35], ["AC Milan", 50, "Milan"],
        ["Bastia", 70, "SC Bastia"], ["Panathinaikos", 75], ["Persib Bandung", 92, "Persib"], ["Sabail", 95, "Sabail FK"],
      ],
    },
    {
      prompt: "Name a club Andriy Shevchenko played for (loans count)",
      answers: [
        ["AC Milan", 5, "Milan"], ["Chelsea", 10], ["Dynamo Kyiv", 86, "Dynamo Kiev"],
      ],
    },
    {
      prompt: "Name a club Hernán Crespo played for (loans count)",
      answers: [
        ["Chelsea", 10], ["Inter Milan", 25, "Inter", "Internazionale"], ["Lazio", 30], ["AC Milan", 30, "Milan"],
        ["Parma", 30], ["River Plate", 60, "River"], ["Genoa", 88],
      ],
    },
    {
      prompt: "Name a club Gabriel Batistuta played for (loans count)",
      answers: [
        ["Fiorentina", 5], ["Roma", 20, "AS Roma"], ["Inter Milan", 50, "Inter", "Internazionale"], ["Boca Juniors", 55, "Boca"],
        ["River Plate", 60, "River"], ["Newell's Old Boys", 75, "Newells"], ["Al Arabi", 92, "Al-Arabi"],
      ],
    },
    {
      prompt: "Name a club Alessandro Del Piero played for",
      answers: [
        ["Juventus", 5, "Juve"], ["Sydney FC", 40, "Sydney"], ["Delhi Dynamos", 80, "Delhi"], ["Padova", 88],
      ],
    },

    // ---------- Managers ----------
    {
      prompt: "Name a club Diego Simeone has managed (up to 2025)",
      answers: [
        ["Atletico Madrid", 5, "Atletico", "Atleti"], ["River Plate", 50, "River"], ["Racing Club", 60, "Racing"],
        ["Estudiantes", 70], ["San Lorenzo", 80], ["Catania", 88],
      ],
    },
    {
      prompt: "Name a club Luis Enrique has managed (club sides only, B teams count)",
      answers: [
        ["Barcelona", 5, "Barca"], ["Paris Saint-Germain", 5, "PSG", "Paris"], ["Roma", 50, "AS Roma"],
        ["Celta Vigo", 75, "Celta"], ["Barcelona B", 90],
      ],
    },
    {
      prompt: "Name a club Massimiliano Allegri has managed (up to 2025)",
      answers: [
        ["Juventus", 5, "Juve"], ["AC Milan", 10, "Milan"], ["Cagliari", 60], ["Sassuolo", 75], ["SPAL", 85],
        ["Grosseto", 90], ["Aglianese", 95],
      ],
    },
    {
      prompt: "Name a club Frank Lampard has managed (up to 2025)",
      answers: [
        ["Chelsea", 5], ["Everton", 20], ["Derby County", 35, "Derby"], ["Coventry City", 86, "Coventry"],
      ],
    },
    {
      prompt: "Name a club Steven Gerrard has managed (up to 2025)",
      answers: [
        ["Rangers", 10], ["Aston Villa", 15, "Villa"], ["Al Ettifaq", 88, "Al-Ettifaq", "Ettifaq"],
      ],
    },
    {
      prompt: "Name a club Graham Potter has managed (club sides only, up to 2025)",
      answers: [
        ["Brighton & Hove Albion", 10, "Brighton"], ["Chelsea", 10], ["West Ham United", 25, "West Ham"],
        ["Swansea City", 50, "Swansea"], ["Ostersund", 90, "Ostersunds FK"],
      ],
    },
    {
      prompt: "Name a club Eddie Howe has managed (up to 2025)",
      answers: [
        ["Newcastle United", 5, "Newcastle"], ["Bournemouth", 10, "AFC Bournemouth"], ["Burnley", 88],
      ],
    },
    {
      prompt: "Name a club Sean Dyche has managed (up to 2024–25)",
      answers: [
        ["Burnley", 5], ["Everton", 10], ["Watford", 88],
      ],
    },
    {
      prompt: "Name a club David Moyes has managed (club sides only, up to 2025)",
      answers: [
        ["Everton", 5], ["West Ham United", 10, "West Ham"], ["Manchester United", 15, "Man United", "Man Utd"],
        ["Sunderland", 50], ["Preston North End", 75, "Preston"], ["Real Sociedad", 86],
      ],
    },
    {
      prompt: "Name a club Nuno Espírito Santo has managed (up to 2024–25)",
      answers: [
        ["Wolverhampton Wanderers", 5, "Wolves"], ["Nottingham Forest", 10, "Forest", "Nottm Forest"],
        ["Tottenham Hotspur", 15, "Tottenham", "Spurs"], ["Porto", 50, "FC Porto"], ["Valencia", 60],
        ["Al Ittihad", 70, "Al-Ittihad"], ["Rio Ave", 92],
      ],
    },
    {
      prompt: "Name a club Marco Silva has managed (up to 2025)",
      answers: [
        ["Fulham", 5], ["Everton", 20], ["Watford", 30], ["Hull City", 40, "Hull"], ["Sporting CP", 75, "Sporting Lisbon", "Sporting"],
        ["Olympiacos", 80, "Olympiakos"], ["Estoril", 92],
      ],
    },
    {
      prompt: "Name a club Thomas Frank has managed (up to 2025)",
      answers: [
        ["Brentford", 5], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Brondby", 88, "Brøndby"],
      ],
    },
    {
      prompt: "Name a club Steve Bruce has managed",
      answers: [
        ["Newcastle United", 10, "Newcastle"], ["Sunderland", 15], ["Hull City", 20, "Hull"], ["Aston Villa", 25, "Villa"],
        ["Birmingham City", 25, "Birmingham"], ["Wigan Athletic", 40, "Wigan"], ["West Bromwich Albion", 45, "West Brom", "WBA"],
        ["Sheffield Wednesday", 50, "Sheff Wed"], ["Crystal Palace", 60, "Palace"], ["Blackpool", 70],
        ["Sheffield United", 85, "Sheff Utd"], ["Huddersfield Town", 88, "Huddersfield"],
      ],
    },
    {
      prompt: "Name a club Tony Pulis has managed",
      answers: [
        ["Stoke City", 5, "Stoke"], ["Crystal Palace", 20, "Palace"], ["West Bromwich Albion", 25, "West Brom", "WBA"],
        ["Middlesbrough", 45, "Boro"], ["Sheffield Wednesday", 60, "Sheff Wed"], ["Portsmouth", 70, "Pompey"],
        ["Plymouth Argyle", 75, "Plymouth"], ["Gillingham", 75], ["Bristol City", 80], ["Bournemouth", 90, "AFC Bournemouth"],
      ],
    },
    {
      prompt: "Name a club Kenny Dalglish managed (caretaker spells count)",
      answers: [
        ["Liverpool", 5], ["Blackburn Rovers", 30, "Blackburn"], ["Newcastle United", 45, "Newcastle"], ["Celtic", 90],
      ],
    },
    {
      prompt: "Name a club Ronald Koeman has managed (club sides only)",
      answers: [
        ["Barcelona", 10, "Barca"], ["Everton", 15], ["Southampton", 15], ["Ajax", 35], ["Valencia", 55],
        ["PSV Eindhoven", 55, "PSV"], ["Feyenoord", 60], ["Benfica", 65], ["AZ Alkmaar", 80, "AZ"], ["Vitesse", 92],
      ],
    },
    {
      prompt: "Name a club Louis van Gaal managed (club sides only)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Ajax", 20], ["Barcelona", 30, "Barca"],
        ["Bayern Munich", 35, "Bayern"], ["AZ Alkmaar", 88, "AZ"],
      ],
    },
    {
      prompt: "Name a club Guus Hiddink managed (club sides only)",
      answers: [
        ["Chelsea", 5], ["PSV Eindhoven", 25, "PSV"], ["Real Madrid", 45], ["Valencia", 60], ["Real Betis", 75, "Betis"],
        ["Fenerbahce", 80], ["Anzhi Makhachkala", 88, "Anzhi"],
      ],
    },
    {
      prompt: "Name a club Roberto Mancini managed (club sides only, up to 2024)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Inter Milan", 10, "Inter", "Internazionale"], ["Lazio", 55],
        ["Galatasaray", 60, "Gala"], ["Zenit St Petersburg", 75, "Zenit"], ["Fiorentina", 88],
      ],
    },
    {
      prompt: "Name a club Fabio Capello managed (club sides only)",
      answers: [
        ["Real Madrid", 15], ["AC Milan", 15, "Milan"], ["Juventus", 20, "Juve"], ["Roma", 40, "AS Roma"],
        ["Jiangsu Suning", 92, "Jiangsu"],
      ],
    },
    {
      prompt: "Name a club Marcelo Bielsa has managed (club sides only, up to 2025)",
      answers: [
        ["Leeds United", 5, "Leeds"], ["Athletic Bilbao", 25, "Athletic Club", "Bilbao"], ["Marseille", 40, "OM"],
        ["Lille", 60], ["Newell's Old Boys", 65, "Newells"], ["Velez Sarsfield", 80, "Velez"], ["Espanyol", 85],
        ["Atlas", 88], ["Club America", 88, "America"], ["Lazio", 95],
      ],
    },
    {
      prompt: "Name a club Sven-Göran Eriksson managed (club sides only)",
      answers: [
        ["Manchester City", 10, "Man City"], ["Lazio", 20], ["Leicester City", 40, "Leicester"], ["Benfica", 40],
        ["Roma", 55, "AS Roma"], ["Sampdoria", 60], ["Fiorentina", 65], ["IFK Goteborg", 75, "Goteborg"],
        ["Guangzhou R&F", 85, "Guangzhou"], ["Shanghai SIPG", 85, "SIPG"], ["Shenzhen", 90], ["Degerfors", 92],
      ],
    },
    {
      prompt: "Name a club Glenn Hoddle managed",
      answers: [
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Chelsea", 20], ["Southampton", 35],
        ["Wolverhampton Wanderers", 50, "Wolves"], ["Swindon Town", 88, "Swindon"],
      ],
    },
    {
      prompt: "Name a club Gordon Strachan managed",
      answers: [
        ["Celtic", 10], ["Southampton", 30], ["Coventry City", 40, "Coventry"], ["Middlesbrough", 86, "Boro"],
      ],
    },
    {
      prompt: "Name a club Martin O'Neill has managed (club sides only, up to 2025)",
      answers: [
        ["Aston Villa", 10, "Villa"], ["Celtic", 10], ["Leicester City", 15, "Leicester"], ["Sunderland", 30],
        ["Nottingham Forest", 50, "Forest", "Nottm Forest"], ["Norwich City", 80, "Norwich"], ["Wycombe Wanderers", 88, "Wycombe"],
      ],
    },
    {
      prompt: "Name a club Roberto Martínez managed (club sides only)",
      answers: [
        ["Everton", 10], ["Wigan Athletic", 15, "Wigan"], ["Swansea City", 86, "Swansea"],
      ],
    },
    {
      prompt: "Name a European club Manuel Pellegrini has managed (up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["West Ham United", 20, "West Ham"], ["Real Madrid", 35], ["Real Betis", 40, "Betis"],
        ["Villarreal", 55], ["Malaga", 86],
      ],
    },
    {
      prompt: "Name a club Julen Lopetegui has managed (club sides only, B teams count, up to 2025)",
      answers: [
        ["Wolverhampton Wanderers", 10, "Wolves"], ["West Ham United", 10, "West Ham"], ["Real Madrid", 20], ["Sevilla", 25],
        ["Porto", 50, "FC Porto"], ["Real Madrid Castilla", 88, "Castilla"], ["Rayo Vallecano", 92, "Rayo"],
      ],
    },
    {
      prompt: "Name a club Xabi Alonso has managed (B teams count, up to 2025)",
      answers: [
        ["Bayer Leverkusen", 5, "Leverkusen"], ["Real Madrid", 10], ["Real Sociedad B", 90, "Real Sociedad", "Sanse"],
      ],
    },
    {
      prompt: "Name a club Vincent Kompany has played for or managed (up to 2025)",
      answers: [
        ["Manchester City", 5, "Man City"], ["Bayern Munich", 15, "Bayern"], ["Burnley", 20], ["Anderlecht", 45],
        ["Hamburg", 88, "Hamburger SV", "HSV"],
      ],
    },
    {
      prompt: "Name a club Bobby Robson managed",
      answers: [
        ["Newcastle United", 10, "Newcastle"], ["Ipswich Town", 15, "Ipswich"], ["Barcelona", 25, "Barca"],
        ["Porto", 45, "FC Porto"], ["PSV Eindhoven", 50, "PSV"], ["Sporting CP", 70, "Sporting Lisbon", "Sporting"],
        ["Fulham", 88],
      ],
    },
    {
      prompt: "Name a club Brian Clough managed",
      answers: [
        ["Nottingham Forest", 5, "Forest", "Nottm Forest"], ["Derby County", 15, "Derby"], ["Leeds United", 25, "Leeds"],
        ["Brighton & Hove Albion", 70, "Brighton"], ["Hartlepool United", 88, "Hartlepools United", "Hartlepool"],
      ],
    },
    {
      prompt: "Name a club Steve McClaren has managed (club sides only)",
      answers: [
        ["Middlesbrough", 10, "Boro"], ["Newcastle United", 25, "Newcastle"], ["Derby County", 30, "Derby"], ["Twente", 40, "FC Twente"],
        ["Queens Park Rangers", 55, "QPR"], ["Nottingham Forest", 65, "Forest", "Nottm Forest"], ["Wolfsburg", 88, "VfL Wolfsburg"],
      ],
    },
    {
      prompt: "Name a club Alan Pardew has managed (up to 2025)",
      answers: [
        ["Newcastle United", 5, "Newcastle"], ["West Ham United", 15, "West Ham"], ["Crystal Palace", 20, "Palace"],
        ["West Bromwich Albion", 40, "West Brom", "WBA"], ["Southampton", 50], ["Charlton Athletic", 55, "Charlton"],
        ["Reading", 60], ["CSKA Sofia", 85], ["ADO Den Haag", 88, "Den Haag"],
      ],
    },
    {
      prompt: "Name a club Chris Hughton has managed (club sides only)",
      answers: [
        ["Brighton & Hove Albion", 10, "Brighton"], ["Newcastle United", 15, "Newcastle"], ["Norwich City", 30, "Norwich"],
        ["Nottingham Forest", 50, "Forest", "Nottm Forest"], ["Birmingham City", 88, "Birmingham"],
      ],
    },
    {
      prompt: "Name a club Wayne Rooney has managed (up to 2025)",
      answers: [
        ["Derby County", 10, "Derby"], ["Birmingham City", 15, "Birmingham"], ["Plymouth Argyle", 25, "Plymouth"],
        ["DC United", 86, "D.C. United"],
      ],
    },
    {
      prompt: "Name a club Patrick Vieira has managed (up to 2025)",
      answers: [
        ["Crystal Palace", 5, "Palace"], ["Nice", 40, "OGC Nice"], ["New York City FC", 60, "NYCFC", "New York City"],
        ["Genoa", 70], ["Strasbourg", 88, "RC Strasbourg"],
      ],
    },
    {
      prompt: "Name a club Frank de Boer managed (club sides only)",
      answers: [
        ["Crystal Palace", 10, "Palace"], ["Ajax", 15], ["Inter Milan", 35, "Inter", "Internazionale"], ["Atlanta United", 86, "Atlanta"],
      ],
    },
    {
      prompt: "Name a club Slaven Bilić has managed (club sides only, up to 2025)",
      answers: [
        ["West Ham United", 5, "West Ham"], ["West Bromwich Albion", 20, "West Brom", "WBA"], ["Watford", 40],
        ["Besiktas", 55], ["Hajduk Split", 65, "Hajduk"], ["Lokomotiv Moscow", 75, "Lokomotiv"], ["Al Ittihad", 80, "Al-Ittihad"],
        ["Beijing Guoan", 85, "Beijing"], ["Al Fateh", 92, "Al-Fateh"],
      ],
    },
    {
      prompt: "Name a club Paul Lambert has managed",
      answers: [
        ["Norwich City", 10, "Norwich"], ["Aston Villa", 10, "Villa"], ["Ipswich Town", 25, "Ipswich"], ["Wolverhampton Wanderers", 50, "Wolves"],
        ["Blackburn Rovers", 55, "Blackburn"], ["Stoke City", 55, "Stoke"], ["Colchester United", 75, "Colchester"],
        ["Wycombe Wanderers", 80, "Wycombe"], ["Livingston", 92],
      ],
    },
    {
      prompt: "Name a club Nigel Pearson has managed",
      answers: [
        ["Leicester City", 5, "Leicester"], ["Watford", 30], ["Hull City", 40, "Hull"], ["Derby County", 45, "Derby"],
        ["Bristol City", 50], ["Southampton", 70], ["Carlisle United", 85, "Carlisle"], ["OH Leuven", 92, "Leuven"],
      ],
    },
    {
      prompt: "Name a club Tony Adams managed",
      answers: [
        ["Portsmouth", 15, "Pompey"], ["Wycombe Wanderers", 50, "Wycombe"], ["Granada", 60], ["Gabala", 92, "Qabala"],
      ],
    },
    {
      prompt: "Name a club Gianfranco Zola managed",
      answers: [
        ["West Ham United", 10, "West Ham"], ["Watford", 25], ["Birmingham City", 50, "Birmingham"], ["Cagliari", 60],
        ["Al Arabi", 92, "Al-Arabi"],
      ],
    },
    {
      prompt: "Name a manager who won the Champions League between 2000 and 2025",
      answers: [
        ["Carlo Ancelotti", 5, "Ancelotti"], ["Pep Guardiola", 5, "Guardiola", "Pep"], ["Zinedine Zidane", 10, "Zidane"],
        ["Jose Mourinho", 15, "Mourinho"], ["Jurgen Klopp", 15, "Klopp"], ["Alex Ferguson", 20, "Ferguson", "Fergie", "Sir Alex"],
        ["Luis Enrique", 25], ["Rafael Benitez", 30, "Benitez", "Rafa Benitez"], ["Thomas Tuchel", 35, "Tuchel"],
        ["Roberto Di Matteo", 40, "Di Matteo"], ["Hansi Flick", 50, "Flick"], ["Vicente del Bosque", 60, "Del Bosque"],
        ["Jupp Heynckes", 60, "Heynckes"], ["Frank Rijkaard", 65, "Rijkaard"], ["Ottmar Hitzfeld", 88, "Hitzfeld"],
      ],
    },
    {
      prompt: "Name a manager who won the FA Cup between 2010 and 2025",
      answers: [
        ["Pep Guardiola", 5, "Guardiola", "Pep"], ["Arsene Wenger", 10, "Wenger"], ["Jurgen Klopp", 15, "Klopp"],
        ["Mikel Arteta", 20, "Arteta"], ["Erik ten Hag", 20, "ten Hag"], ["Antonio Conte", 30, "Conte"],
        ["Oliver Glasner", 35, "Glasner"], ["Brendan Rodgers", 40, "Rodgers"], ["Roberto Mancini", 45, "Mancini"],
        ["Carlo Ancelotti", 50, "Ancelotti"], ["Roberto Di Matteo", 55, "Di Matteo"], ["Louis van Gaal", 55, "van Gaal", "LVG"],
        ["Roberto Martinez", 88, "Martinez"],
      ],
    },
    {
      prompt: "Name a manager who won the League Cup between 2010 and 2025",
      answers: [
        ["Pep Guardiola", 5, "Guardiola", "Pep"], ["Jurgen Klopp", 10, "Klopp"], ["Erik ten Hag", 15, "ten Hag"],
        ["Eddie Howe", 15, "Howe"], ["Jose Mourinho", 20, "Mourinho"], ["Manuel Pellegrini", 45, "Pellegrini"],
        ["Alex Ferguson", 50, "Ferguson", "Fergie", "Sir Alex"], ["Kenny Dalglish", 55, "Dalglish"],
        ["Michael Laudrup", 80, "Laudrup"], ["Alex McLeish", 90, "McLeish"],
      ],
    },
    {
      prompt: "Name a manager who won the Europa League between 2010 and 2025",
      answers: [
        ["Unai Emery", 5, "Emery"], ["Jose Mourinho", 15, "Mourinho"], ["Diego Simeone", 20, "Simeone"],
        ["Ange Postecoglou", 20, "Postecoglou", "Ange"], ["Rafael Benitez", 35, "Benitez", "Rafa Benitez"],
        ["Maurizio Sarri", 40, "Sarri"], ["Gian Piero Gasperini", 50, "Gasperini"], ["Julen Lopetegui", 55, "Lopetegui"],
        ["Andre Villas-Boas", 60, "Villas-Boas", "AVB"], ["Oliver Glasner", 70, "Glasner"],
        ["Jose Luis Mendilibar", 80, "Mendilibar"], ["Quique Sanchez Flores", 90, "Sanchez Flores", "Quique Flores"],
      ],
    },

    // ---------- Premier League & EFL ----------
    {
      prompt: "Name a club that played in the first Premier League season (1992–93)",
      answers: [
        ["Arsenal", 5], ["Liverpool", 5], ["Manchester United", 5, "Man United", "Man Utd"], ["Chelsea", 10],
        ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Everton", 15], ["Aston Villa", 20, "Villa"],
        ["Manchester City", 20, "Man City"], ["Leeds United", 25, "Leeds"], ["Blackburn Rovers", 30, "Blackburn"],
        ["Southampton", 30], ["Nottingham Forest", 40, "Forest", "Nottm Forest"], ["Crystal Palace", 40, "Palace"],
        ["Norwich City", 45, "Norwich"], ["Coventry City", 50, "Coventry"], ["Sheffield Wednesday", 50, "Sheff Wed"],
        ["Queens Park Rangers", 55, "QPR"], ["Middlesbrough", 60, "Boro"], ["Ipswich Town", 60, "Ipswich"],
        ["Sheffield United", 60, "Sheff Utd"], ["Wimbledon", 70], ["Oldham Athletic", 90, "Oldham"],
      ],
    },
    {
      prompt: "Name a club that has played in every Premier League season (1992–93 to 2025–26)",
      answers: [
        ["Arsenal", 5], ["Manchester United", 5, "Man United", "Man Utd"], ["Liverpool", 5], ["Chelsea", 10],
        ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["Everton", 86],
      ],
    },
    {
      prompt: "Name a club relegated from the Premier League in the 1990s (1992–93 to 1999–2000)",
      answers: [
        ["Nottingham Forest", 20, "Forest", "Nottm Forest"], ["Crystal Palace", 25, "Palace"], ["Middlesbrough", 35, "Boro"],
        ["Manchester City", 35, "Man City"], ["Wimbledon", 40], ["Sunderland", 45], ["Blackburn Rovers", 45, "Blackburn"],
        ["Bolton Wanderers", 45, "Bolton"], ["Sheffield United", 50, "Sheff Utd"], ["Norwich City", 50, "Norwich"],
        ["Leicester City", 55, "Leicester"], ["Ipswich Town", 55, "Ipswich"], ["Queens Park Rangers", 55, "QPR"],
        ["Sheffield Wednesday", 55, "Sheff Wed"], ["Barnsley", 65], ["Watford", 65], ["Charlton Athletic", 70, "Charlton"],
        ["Swindon Town", 75, "Swindon"], ["Oldham Athletic", 88, "Oldham"],
      ],
    },
    {
      prompt: "Name a club relegated from the Premier League in the 2000s (2000–01 to 2009–10)",
      answers: [
        ["Leeds United", 15, "Leeds"], ["Newcastle United", 15, "Newcastle"], ["West Ham United", 20, "West Ham"],
        ["Portsmouth", 25, "Pompey"], ["Sunderland", 25], ["West Bromwich Albion", 25, "West Brom", "WBA"],
        ["Southampton", 30], ["Middlesbrough", 30, "Boro"], ["Derby County", 30, "Derby"], ["Birmingham City", 35, "Birmingham"],
        ["Leicester City", 35, "Leicester"], ["Charlton Athletic", 40, "Charlton"], ["Burnley", 40], ["Hull City", 40, "Hull"],
        ["Sheffield United", 40, "Sheff Utd"], ["Watford", 45], ["Manchester City", 50, "Man City"], ["Reading", 50],
        ["Crystal Palace", 55, "Palace"], ["Wolverhampton Wanderers", 55, "Wolves"], ["Norwich City", 55, "Norwich"],
        ["Ipswich Town", 60, "Ipswich"], ["Coventry City", 70, "Coventry"], ["Bradford City", 88, "Bradford"],
      ],
    },
    {
      prompt: "Name a club relegated from the Premier League in the 2010s (2010–11 to 2018–19)",
      answers: [
        ["Sunderland", 15], ["Aston Villa", 20, "Villa"], ["Newcastle United", 20, "Newcastle"], ["Stoke City", 25, "Stoke"],
        ["Swansea City", 25, "Swansea"], ["Queens Park Rangers", 30, "QPR"], ["Norwich City", 30, "Norwich"],
        ["Cardiff City", 30, "Cardiff"], ["Fulham", 30], ["Huddersfield Town", 35, "Huddersfield"],
        ["Hull City", 35, "Hull"], ["West Bromwich Albion", 35, "West Brom", "WBA"], ["Middlesbrough", 40, "Boro"],
        ["Burnley", 45], ["Wigan Athletic", 45, "Wigan"], ["Blackpool", 45], ["West Ham United", 50, "West Ham"],
        ["Reading", 55], ["Bolton Wanderers", 55, "Bolton"], ["Blackburn Rovers", 55, "Blackburn"],
        ["Wolverhampton Wanderers", 60, "Wolves"], ["Birmingham City", 88, "Birmingham"],
      ],
    },
    {
      prompt: "Name a club that finished bottom of the Premier League (1992–93 to 2024–25)",
      answers: [
        ["Derby County", 10, "Derby"], ["Sunderland", 15], ["Southampton", 20], ["Sheffield United", 20, "Sheff Utd"],
        ["Norwich City", 25, "Norwich"], ["Aston Villa", 30, "Villa"], ["Huddersfield Town", 35, "Huddersfield"],
        ["Queens Park Rangers", 40, "QPR"], ["West Bromwich Albion", 40, "West Brom", "WBA"], ["Portsmouth", 45, "Pompey"],
        ["Cardiff City", 45, "Cardiff"], ["Wolverhampton Wanderers", 50, "Wolves"], ["Watford", 50],
        ["Nottingham Forest", 55, "Forest", "Nottm Forest"], ["West Ham United", 60, "West Ham"], ["Swindon Town", 60, "Swindon"],
        ["Leicester City", 65, "Leicester"], ["Bradford City", 70, "Bradford"], ["Crystal Palace", 75, "Palace"],
        ["Ipswich Town", 75, "Ipswich"], ["Bolton Wanderers", 88, "Bolton"],
      ],
    },
    {
      prompt: "Name a club that was promoted to the Premier League for 2024–25 or 2025–26",
      answers: [
        ["Leeds United", 10, "Leeds"], ["Sunderland", 10], ["Burnley", 15], ["Ipswich Town", 20, "Ipswich"],
        ["Leicester City", 25, "Leicester"], ["Southampton", 86],
      ],
    },
    {
      prompt: "Name a club in the 2025–26 Premier League",
      answers: [
        ["Arsenal", 3], ["Liverpool", 3], ["Manchester City", 3, "Man City"], ["Manchester United", 3, "Man United", "Man Utd"],
        ["Chelsea", 3], ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Newcastle United", 5, "Newcastle"],
        ["Aston Villa", 8, "Villa"], ["West Ham United", 10, "West Ham"], ["Everton", 10],
        ["Nottingham Forest", 15, "Forest", "Nottm Forest"], ["Brighton & Hove Albion", 15, "Brighton"],
        ["Leeds United", 20, "Leeds"], ["Crystal Palace", 20, "Palace"], ["Fulham", 25], ["Sunderland", 25],
        ["Wolverhampton Wanderers", 30, "Wolves"], ["Bournemouth", 35, "AFC Bournemouth"], ["Brentford", 40],
        ["Burnley", 86],
      ],
    },
    {
      prompt: "Name a club that played in the 2024–25 Championship",
      answers: [
        ["Leeds United", 5, "Leeds"], ["Sunderland", 10], ["Burnley", 10], ["Sheffield United", 15, "Sheff Utd"],
        ["Middlesbrough", 25, "Boro"], ["West Bromwich Albion", 25, "West Brom", "WBA"], ["Norwich City", 25, "Norwich"],
        ["Coventry City", 30, "Coventry"], ["Luton Town", 30, "Luton"], ["Sheffield Wednesday", 30, "Sheff Wed"],
        ["Watford", 35], ["Swansea City", 35, "Swansea"], ["Cardiff City", 35, "Cardiff"], ["Stoke City", 35, "Stoke"],
        ["Hull City", 40, "Hull"], ["Queens Park Rangers", 40, "QPR"], ["Millwall", 40], ["Derby County", 40, "Derby"],
        ["Portsmouth", 45, "Pompey"], ["Blackburn Rovers", 45, "Blackburn"], ["Bristol City", 50], ["Preston North End", 55, "Preston"],
        ["Plymouth Argyle", 55, "Plymouth"], ["Oxford United", 88, "Oxford"],
      ],
    },
    {
      prompt: "Name a club that won the League One title between 2009–10 and 2024–25",
      answers: [
        ["Birmingham City", 10, "Birmingham"], ["Wigan Athletic", 20, "Wigan"], ["Portsmouth", 25, "Pompey"],
        ["Plymouth Argyle", 30, "Plymouth"], ["Sheffield United", 35, "Sheff Utd"], ["Luton Town", 40, "Luton"],
        ["Hull City", 45, "Hull"], ["Coventry City", 45, "Coventry"], ["Wolverhampton Wanderers", 50, "Wolves"],
        ["Norwich City", 60, "Norwich"], ["Brighton & Hove Albion", 65, "Brighton"], ["Charlton Athletic", 70, "Charlton"],
        ["Bristol City", 75], ["Doncaster Rovers", 88, "Doncaster"],
      ],
    },
    {
      prompt: "Name a club that won the League Two title between 2009–10 and 2024–25",
      answers: [
        ["Stockport County", 20, "Stockport"], ["Doncaster Rovers", 25, "Doncaster"], ["Leyton Orient", 35, "Orient"],
        ["Swindon Town", 40, "Swindon"], ["Portsmouth", 40, "Pompey"], ["Forest Green Rovers", 45, "Forest Green"],
        ["Lincoln City", 50, "Lincoln"], ["Cheltenham Town", 55, "Cheltenham"], ["Chesterfield", 60],
        ["Accrington Stanley", 65, "Accrington"], ["Northampton Town", 70, "Northampton"], ["Burton Albion", 75, "Burton"],
        ["Gillingham", 80], ["Notts County", 88],
      ],
    },
    {
      prompt: "Name a club that won the Championship play-off final between 2000 and 2009",
      answers: [
        ["West Ham United", 20, "West Ham"], ["Hull City", 30, "Hull"], ["Burnley", 35], ["Crystal Palace", 40, "Palace"],
        ["Wolverhampton Wanderers", 45, "Wolves"], ["Watford", 50], ["Derby County", 50, "Derby"],
        ["Birmingham City", 60, "Birmingham"], ["Ipswich Town", 75, "Ipswich"], ["Bolton Wanderers", 88, "Bolton"],
      ],
    },
    {
      prompt: "Name a Welsh club that played in the English Football League in 2024–25",
      answers: [
        ["Wrexham", 10], ["Swansea City", 15, "Swansea"], ["Cardiff City", 15, "Cardiff"], ["Newport County", 86, "Newport"],
      ],
    },
    {
      prompt: "Name a Premier League or EFL club with 'Albion' in its name",
      answers: [
        ["Brighton & Hove Albion", 10, "Brighton"], ["West Bromwich Albion", 10, "West Brom", "WBA"], ["Burton Albion", 88, "Burton"],
      ],
    },
    {
      prompt: "Name a club with 'Town' in its name that played in the 2024–25 Premier League or EFL",
      answers: [
        ["Ipswich Town", 10, "Ipswich"], ["Luton Town", 15, "Luton"], ["Huddersfield Town", 25, "Huddersfield"],
        ["Swindon Town", 40, "Swindon"], ["Northampton Town", 45, "Northampton"], ["Mansfield Town", 50, "Mansfield"],
        ["Shrewsbury Town", 50, "Shrewsbury"], ["Grimsby Town", 55, "Grimsby"], ["Cheltenham Town", 60, "Cheltenham"],
        ["Crawley Town", 65, "Crawley"], ["Fleetwood Town", 70, "Fleetwood"], ["Harrogate Town", 88, "Harrogate"],
      ],
    },
    {
      prompt: "Name a 2024–25 Premier League club with an animal or bird on its crest",
      answers: [
        ["Liverpool", 10], ["Tottenham Hotspur", 15, "Tottenham", "Spurs"], ["Wolverhampton Wanderers", 15, "Wolves"],
        ["Leicester City", 20, "Leicester"], ["Chelsea", 30], ["Aston Villa", 30, "Villa"], ["Crystal Palace", 40, "Palace"],
        ["Brighton & Hove Albion", 45, "Brighton"], ["Brentford", 60], ["Ipswich Town", 75, "Ipswich"],
        ["Newcastle United", 92, "Newcastle"],
      ],
    },
    {
      prompt: "Name the sponsor-named home stadium of a 2024–25 Premier League club",
      answers: [
        ["Emirates Stadium", 5, "Emirates"], ["Etihad Stadium", 10, "Etihad"], ["King Power Stadium", 30, "King Power"],
        ["Amex Stadium", 40, "Amex", "American Express Stadium"], ["Vitality Stadium", 60, "Vitality"],
        ["Gtech Community Stadium", 88, "Gtech"],
      ],
    },
    {
      prompt: "Name a ground a club played Premier League home games at, but no longer uses (up to 2025–26)",
      answers: [
        ["Highbury", 10], ["White Hart Lane", 10], ["Upton Park", 15, "Boleyn Ground"], ["Goodison Park", 20, "Goodison"],
        ["Maine Road", 25], ["The Dell", 40, "Dell"], ["Wembley Stadium", 50, "Wembley"], ["Filbert Street", 60],
        ["Highfield Road", 70], ["Roker Park", 70], ["Baseball Ground", 75], ["Burnden Park", 80],
        ["Ayresome Park", 88],
      ],
    },
    {
      prompt: "Name a goalkeeper who has scored a Premier League goal (up to 2024–25)",
      answers: [
        ["Alisson", 10, "Alisson Becker"], ["Peter Schmeichel", 35, "Schmeichel"], ["Asmir Begovic", 50, "Begovic"],
        ["Tim Howard", 55, "Howard"], ["Paul Robinson", 70, "Robinson"], ["Brad Friedel", 88, "Friedel"],
      ],
    },
    {
      prompt: "Name a player with 150 or more Premier League goals (up to 2024–25)",
      answers: [
        ["Alan Shearer", 5, "Shearer"], ["Harry Kane", 10, "Kane"], ["Wayne Rooney", 10, "Rooney"],
        ["Mohamed Salah", 15, "Salah", "Mo Salah"], ["Thierry Henry", 20, "Henry"], ["Sergio Aguero", 20, "Aguero"],
        ["Frank Lampard", 30, "Lampard"], ["Andy Cole", 40, "Andrew Cole", "Cole"], ["Robbie Fowler", 55, "Fowler"],
        ["Jermain Defoe", 65, "Defoe"], ["Michael Owen", 88, "Owen"],
      ],
    },
    {
      prompt: "Name a winner of the Premier League Player of the Season award (2010–11 to 2024–25)",
      answers: [
        ["Mohamed Salah", 10, "Salah", "Mo Salah"], ["Kevin De Bruyne", 15, "De Bruyne", "KDB"], ["Erling Haaland", 20, "Haaland"],
        ["Virgil van Dijk", 25, "van Dijk", "VVD"], ["Eden Hazard", 30, "Hazard"], ["Phil Foden", 30, "Foden"],
        ["N'Golo Kante", 35, "Kante"], ["Luis Suarez", 40, "Suarez"], ["Gareth Bale", 45, "Bale"], ["Jamie Vardy", 50, "Vardy"],
        ["Ruben Dias", 60, "Dias"], ["Vincent Kompany", 70, "Kompany"], ["Nemanja Vidic", 88, "Vidic"],
      ],
    },
    {
      prompt: "Name a winner of the Premier League Young Player of the Season award (2019–20 to 2024–25)",
      answers: [
        ["Phil Foden", 10, "Foden"], ["Bukayo Saka", 15, "Saka"], ["Cole Palmer", 20, "Palmer"],
        ["Trent Alexander-Arnold", 40, "Alexander-Arnold", "Trent", "TAA"], ["Ryan Gravenberch", 88, "Gravenberch"],
      ],
    },
    {
      prompt: "Name a player who joined or left a Premier League club for a fee of £100m or more (up to September 2025)",
      answers: [
        ["Jack Grealish", 15, "Grealish"], ["Alexander Isak", 15, "Isak"], ["Declan Rice", 20, "Rice"],
        ["Florian Wirtz", 20, "Wirtz"], ["Moises Caicedo", 25, "Caicedo"], ["Enzo Fernandez", 30, "Enzo"],
        ["Philippe Coutinho", 88, "Coutinho"],
      ],
    },
    {
      prompt: "Name a player who broke the world transfer record between 2000 and 2025",
      answers: [
        ["Neymar", 10], ["Cristiano Ronaldo", 15, "Ronaldo", "CR7"], ["Gareth Bale", 25, "Bale"], ["Paul Pogba", 25, "Pogba"],
        ["Zinedine Zidane", 40, "Zidane"], ["Luis Figo", 45, "Figo"], ["Kaka", 88],
      ],
    },

    // ---------- English cups ----------
    {
      prompt: "Name a club that won the FA Cup in the 1990s (1990–1999)",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Arsenal", 15], ["Chelsea", 30], ["Liverpool", 35],
        ["Everton", 65], ["Tottenham Hotspur", 88, "Tottenham", "Spurs"],
      ],
    },
    {
      prompt: "Name a club that lost an FA Cup final between 2000 and 2025",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Chelsea", 10], ["Manchester City", 15, "Man City"],
        ["Liverpool", 30], ["Arsenal", 35], ["Aston Villa", 35, "Villa"], ["Crystal Palace", 40, "Palace"], ["Watford", 45],
        ["Hull City", 50, "Hull"], ["Everton", 55], ["Stoke City", 55, "Stoke"], ["Portsmouth", 60, "Pompey"],
        ["West Ham United", 60, "West Ham"], ["Southampton", 70], ["Cardiff City", 80, "Cardiff"], ["Millwall", 88],
      ],
    },
    {
      prompt: "Name a club that won the League Cup between 1990 and 2009",
      answers: [
        ["Liverpool", 10], ["Chelsea", 15], ["Manchester United", 15, "Man United", "Man Utd"], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"],
        ["Aston Villa", 35, "Villa"], ["Arsenal", 45], ["Leicester City", 50, "Leicester"], ["Middlesbrough", 55, "Boro"],
        ["Blackburn Rovers", 65, "Blackburn"], ["Nottingham Forest", 75, "Forest", "Nottm Forest"],
        ["Sheffield Wednesday", 88, "Sheff Wed"],
      ],
    },
    {
      prompt: "Name a player who scored in an FA Cup final between 2015 and 2025 (own goals don't count)",
      answers: [
        ["Eberechi Eze", 10, "Eze"], ["Alejandro Garnacho", 20, "Garnacho"], ["Kobbie Mainoo", 20, "Mainoo"],
        ["Ilkay Gundogan", 25, "Gundogan"], ["Raheem Sterling", 30, "Sterling"], ["Pierre-Emerick Aubameyang", 30, "Aubameyang", "Auba"],
        ["Alexis Sanchez", 35, "Sanchez"], ["Gabriel Jesus", 40, "Jesus"], ["Bruno Fernandes", 40, "Fernandes"],
        ["Youri Tielemans", 40, "Tielemans"], ["Eden Hazard", 45, "Hazard"], ["Theo Walcott", 50, "Walcott"],
        ["Christian Pulisic", 50, "Pulisic"], ["Aaron Ramsey", 50, "Ramsey"], ["Kevin De Bruyne", 50, "De Bruyne", "KDB"],
        ["David Silva", 55, "Silva"], ["Juan Mata", 55, "Mata"], ["Jesse Lingard", 55, "Lingard"], ["Olivier Giroud", 60, "Giroud"],
        ["Diego Costa", 60, "Costa"], ["Jeremy Doku", 70, "Doku"], ["Per Mertesacker", 75, "Mertesacker"],
        ["Jason Puncheon", 88, "Puncheon"],
      ],
    },

    // ---------- Europe ----------
    {
      prompt: "Name a stadium that hosted a Champions League final between 2000 and 2025",
      answers: [
        ["Wembley", 5, "Wembley Stadium"], ["Stade de France", 15], ["San Siro", 20, "Giuseppe Meazza"],
        ["Allianz Arena", 25], ["Santiago Bernabeu", 30, "Bernabeu"], ["Ataturk Olympic Stadium", 30, "Ataturk Stadium", "Ataturk"],
        ["Estadio da Luz", 40, "Da Luz", "Stadium of Light"], ["Old Trafford", 40], ["Wanda Metropolitano", 45, "Metropolitano"],
        ["Millennium Stadium", 50, "Principality Stadium"], ["Stadio Olimpico", 50, "Olimpico"],
        ["Luzhniki Stadium", 55, "Luzhniki"], ["Olympiastadion", 60, "Olympiastadion Berlin", "Olympic Stadium Berlin"],
        ["Estadio do Dragao", 60, "Dragao"], ["Hampden Park", 65, "Hampden"], ["NSC Olimpiyskiy", 75, "Olimpiyskiy"],
        ["Veltins-Arena", 85, "Arena AufSchalke", "AufSchalke"], ["Olympic Stadium Athens", 88, "OAKA", "Spyros Louis"],
      ],
    },
    {
      prompt: "Name a club that played in a Europa League final between 2010 and 2025 (winners or losers)",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Sevilla", 10], ["Chelsea", 20], ["Tottenham Hotspur", 20, "Tottenham", "Spurs"],
        ["Atletico Madrid", 25, "Atletico", "Atleti"], ["Arsenal", 30], ["Liverpool", 35], ["Atalanta", 40], ["Bayer Leverkusen", 40, "Leverkusen"],
        ["Rangers", 45], ["Inter Milan", 45, "Inter", "Internazionale"], ["Roma", 50, "AS Roma"], ["Villarreal", 50],
        ["Eintracht Frankfurt", 55, "Frankfurt"], ["Ajax", 55], ["Benfica", 55], ["Marseille", 60, "OM"], ["Porto", 60, "FC Porto"],
        ["Fulham", 65], ["Athletic Bilbao", 70, "Athletic Club", "Bilbao"], ["Braga", 80, "Sporting Braga"],
        ["Dnipro", 92, "Dnipro Dnipropetrovsk"],
      ],
    },
    {
      prompt: "Name a club that won the European Cup or Champions League final on penalties",
      answers: [
        ["Liverpool", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Chelsea", 15], ["Real Madrid", 30],
        ["AC Milan", 35, "Milan"], ["Bayern Munich", 40, "Bayern"], ["Juventus", 50, "Juve"], ["PSV Eindhoven", 75, "PSV"],
        ["Red Star Belgrade", 80, "Red Star", "Crvena Zvezda"], ["Steaua Bucharest", 88, "Steaua", "FCSB"],
      ],
    },
    {
      prompt: "Name an English club that has played in a European Cup or Champions League final",
      answers: [
        ["Liverpool", 5], ["Manchester United", 5, "Man United", "Man Utd"], ["Chelsea", 10], ["Manchester City", 15, "Man City"],
        ["Tottenham Hotspur", 30, "Tottenham", "Spurs"], ["Arsenal", 35], ["Nottingham Forest", 60, "Forest", "Nottm Forest"],
        ["Aston Villa", 70, "Villa"], ["Leeds United", 88, "Leeds"],
      ],
    },
    {
      prompt: "Name a German club that has played in a European Cup or Champions League final",
      answers: [
        ["Bayern Munich", 5, "Bayern"], ["Borussia Dortmund", 15, "Dortmund", "BVB"], ["Bayer Leverkusen", 50, "Leverkusen"],
        ["Hamburg", 75, "Hamburger SV", "HSV"], ["Borussia Monchengladbach", 85, "Gladbach", "Monchengladbach"],
        ["Eintracht Frankfurt", 90, "Frankfurt"],
      ],
    },
    {
      prompt: "Name an Italian club that has played in a European Cup or Champions League final",
      answers: [
        ["AC Milan", 5, "Milan"], ["Juventus", 5, "Juve"], ["Inter Milan", 10, "Inter", "Internazionale"],
        ["Roma", 70, "AS Roma"], ["Sampdoria", 75], ["Fiorentina", 90],
      ],
    },
    {
      prompt: "Name a Spanish club that has played in a European Cup or Champions League final",
      answers: [
        ["Real Madrid", 5], ["Barcelona", 5, "Barca"], ["Atletico Madrid", 25, "Atletico", "Atleti"], ["Valencia", 86],
      ],
    },
    {
      prompt: "Name a French club that has played in a European Cup or Champions League final",
      answers: [
        ["Paris Saint-Germain", 5, "PSG", "Paris"], ["Marseille", 15, "OM"], ["Monaco", 40, "AS Monaco"],
        ["Saint-Etienne", 75, "St Etienne"], ["Reims", 90, "Stade de Reims"],
      ],
    },
    {
      prompt: "Name a Scottish club that has played in a major UEFA final (European Cup, Cup Winners' Cup, UEFA Cup/Europa League)",
      answers: [
        ["Celtic", 10], ["Rangers", 10], ["Aberdeen", 60], ["Dundee United", 88],
      ],
    },
    {
      prompt: "Name a club that won the Cup Winners' Cup in the 1990s (1990–1999)",
      answers: [
        ["Chelsea", 15], ["Arsenal", 20], ["Manchester United", 30, "Man United", "Man Utd"], ["Barcelona", 40, "Barca"],
        ["Lazio", 55], ["Parma", 60], ["Paris Saint-Germain", 65, "PSG", "Paris"], ["Real Zaragoza", 75, "Zaragoza"],
        ["Werder Bremen", 80, "Bremen"], ["Sampdoria", 88],
      ],
    },
    {
      prompt: "Name a club that won the UEFA Super Cup between 2000 and 2025",
      answers: [
        ["Real Madrid", 5], ["Barcelona", 15, "Barca"], ["Liverpool", 20], ["Atletico Madrid", 25, "Atletico", "Atleti"],
        ["AC Milan", 30, "Milan"], ["Bayern Munich", 30, "Bayern"], ["Chelsea", 30], ["Manchester City", 30, "Man City"],
        ["Paris Saint-Germain", 35, "PSG", "Paris"], ["Sevilla", 45], ["Valencia", 65], ["Galatasaray", 75, "Gala"],
        ["Zenit St Petersburg", 88, "Zenit"],
      ],
    },
    {
      prompt: "Name a club that won the Club World Cup between 2005 and 2025",
      answers: [
        ["Real Madrid", 5], ["Barcelona", 15, "Barca"], ["Chelsea", 15], ["Manchester City", 20, "Man City"],
        ["Bayern Munich", 20, "Bayern"], ["Liverpool", 20], ["Manchester United", 30, "Man United", "Man Utd"],
        ["AC Milan", 50, "Milan"], ["Inter Milan", 55, "Inter", "Internazionale"], ["Corinthians", 75],
        ["Sao Paulo", 85], ["Internacional", 92],
      ],
    },
    {
      prompt: "Name a club that has won a continental treble (league, domestic cup and European Cup/Champions League, up to 2025)",
      answers: [
        ["Manchester United", 10, "Man United", "Man Utd"], ["Barcelona", 10, "Barca"], ["Manchester City", 10, "Man City"],
        ["Bayern Munich", 15, "Bayern"], ["Inter Milan", 25, "Inter", "Internazionale"], ["Paris Saint-Germain", 25, "PSG", "Paris"],
        ["Celtic", 60], ["Ajax", 60], ["PSV Eindhoven", 88, "PSV"],
      ],
    },
    {
      prompt: "Name a player who scored in a Champions League final between 2010 and 2025 (own goals don't count)",
      answers: [
        ["Cristiano Ronaldo", 5, "Ronaldo", "CR7"], ["Gareth Bale", 10, "Bale"], ["Lionel Messi", 10, "Messi"],
        ["Sergio Ramos", 15, "Ramos"], ["Vinicius Junior", 15, "Vinicius", "Vini Jr"], ["Mohamed Salah", 20, "Salah", "Mo Salah"],
        ["Rodri", 20, "Rodrigo Hernandez"], ["Didier Drogba", 25, "Drogba"], ["Arjen Robben", 25, "Robben"],
        ["Kai Havertz", 25, "Havertz"], ["Divock Origi", 30, "Origi"], ["Karim Benzema", 30, "Benzema"],
        ["Sadio Mane", 30, "Mane"], ["Luis Suarez", 35, "Suarez"], ["Neymar", 35], ["Desire Doue", 35, "Doue"],
        ["Kingsley Coman", 40, "Coman"], ["Thomas Muller", 40, "Muller"], ["Wayne Rooney", 40, "Rooney"],
        ["Mario Mandzukic", 45, "Mandzukic"], ["Casemiro", 45], ["Dani Carvajal", 45, "Carvajal"], ["Achraf Hakimi", 45, "Hakimi"],
        ["Marcelo", 50], ["Khvicha Kvaratskhelia", 50, "Kvaratskhelia", "Kvara"], ["David Villa", 55, "Villa"],
        ["Pedro", 55, "Pedro Rodriguez"], ["Ilkay Gundogan", 55, "Gundogan"], ["Marco Asensio", 55, "Asensio"],
        ["Alvaro Morata", 60, "Morata"], ["Diego Godin", 60, "Godin"], ["Ivan Rakitic", 60, "Rakitic"],
        ["Yannick Carrasco", 70, "Carrasco"], ["Diego Milito", 75, "Milito"], ["Senny Mayulu", 92, "Mayulu"],
      ],
    },

    // ---------- Other leagues & cups ----------
    {
      prompt: "Name a club that won the Copa del Rey between 2010 and 2025",
      answers: [
        ["Barcelona", 5, "Barca"], ["Real Madrid", 15], ["Atletico Madrid", 45, "Atletico", "Atleti"], ["Sevilla", 50],
        ["Athletic Bilbao", 50, "Athletic Club", "Bilbao"], ["Valencia", 55], ["Real Betis", 55, "Betis"],
        ["Real Sociedad", 88],
      ],
    },
    {
      prompt: "Name a club that won the DFB-Pokal (German Cup) between 2010 and 2025",
      answers: [
        ["Bayern Munich", 5, "Bayern"], ["Borussia Dortmund", 15, "Dortmund", "BVB"], ["RB Leipzig", 35, "Leipzig"],
        ["Bayer Leverkusen", 40, "Leverkusen"], ["Eintracht Frankfurt", 50, "Frankfurt"], ["Stuttgart", 55, "VfB Stuttgart"],
        ["Schalke", 70, "Schalke 04"], ["Wolfsburg", 88, "VfL Wolfsburg"],
      ],
    },
    {
      prompt: "Name a club that won the Coppa Italia between 2010 and 2025",
      answers: [
        ["Juventus", 5, "Juve"], ["Inter Milan", 15, "Inter", "Internazionale"], ["Napoli", 30], ["Lazio", 45], ["Bologna", 88],
      ],
    },
    {
      prompt: "Name a club that won Ligue 1 between 2000–01 and 2024–25",
      answers: [
        ["Paris Saint-Germain", 5, "PSG", "Paris"], ["Lyon", 20, "Olympique Lyonnais"], ["Monaco", 40, "AS Monaco"],
        ["Lille", 45], ["Marseille", 50, "OM"], ["Montpellier", 70], ["Bordeaux", 75], ["Nantes", 92],
      ],
    },
    {
      prompt: "Name a club that won the Eredivisie between 2000–01 and 2024–25",
      answers: [
        ["Ajax", 5], ["PSV Eindhoven", 5, "PSV"], ["Feyenoord", 30], ["AZ Alkmaar", 75, "AZ"], ["Twente", 88, "FC Twente"],
      ],
    },
    {
      prompt: "Name a club that won the Portuguese Primeira Liga between 1999–2000 and 2024–25",
      answers: [
        ["Porto", 5, "FC Porto"], ["Benfica", 10], ["Sporting CP", 20, "Sporting Lisbon", "Sporting"], ["Boavista", 92],
      ],
    },
    {
      prompt: "Name a club that has won the Scottish top flight since 1985 (up to 2024–25)",
      answers: [
        ["Celtic", 5], ["Rangers", 5], ["Aberdeen", 90],
      ],
    },
    {
      prompt: "Name a club that won the Scottish Cup between 2000 and 2025",
      answers: [
        ["Celtic", 5], ["Rangers", 10], ["Hearts", 40, "Heart of Midlothian"], ["Hibernian", 50, "Hibs"], ["Aberdeen", 50],
        ["St Johnstone", 60], ["Dundee United", 75], ["Inverness Caledonian Thistle", 88, "Inverness", "Inverness CT"],
      ],
    },
    {
      prompt: "Name a club that won the Turkish Süper Lig between 1999–2000 and 2024–25",
      answers: [
        ["Galatasaray", 5, "Gala"], ["Fenerbahce", 10], ["Besiktas", 25], ["Trabzonspor", 60],
        ["Istanbul Basaksehir", 75, "Basaksehir"], ["Bursaspor", 92],
      ],
    },
    {
      prompt: "Name a club that won the MLS Cup between 2010 and 2024",
      answers: [
        ["LA Galaxy", 5, "Galaxy"], ["Seattle Sounders", 20, "Seattle"], ["Toronto FC", 30, "Toronto"], ["Los Angeles FC", 30, "LAFC"],
        ["Atlanta United", 35, "Atlanta"], ["New York City FC", 40, "NYCFC", "New York City"], ["Columbus Crew", 45, "Columbus"],
        ["Portland Timbers", 60, "Portland"], ["Sporting Kansas City", 70, "Sporting KC", "Kansas City"],
        ["Colorado Rapids", 88, "Colorado"],
      ],
    },

    // ---------- International ----------
    {
      prompt: "Name a country that won the men's World Cup as the host nation (up to 2022)",
      answers: [
        ["England", 5], ["France", 15], ["Argentina", 30], ["Germany", 40, "West Germany"], ["Italy", 50], ["Uruguay", 90],
      ],
    },
    {
      prompt: "Name a country that hosted or co-hosted the Women's World Cup (up to 2023)",
      answers: [
        ["Australia", 15], ["New Zealand", 30], ["France", 20], ["Canada", 30], ["United States", 30, "USA", "America", "US"],
        ["Germany", 40], ["China", 60], ["Sweden", 88],
      ],
    },
    {
      prompt: "Name a country that hosted or co-hosted a men's European Championship (excluding the multi-country Euro 2020)",
      answers: [
        ["Germany", 10, "West Germany"], ["England", 10], ["France", 20], ["Portugal", 25], ["Poland", 30], ["Ukraine", 30],
        ["Netherlands", 35, "Holland"], ["Belgium", 35], ["Austria", 40], ["Switzerland", 40], ["Italy", 55], ["Spain", 60],
        ["Sweden", 60], ["Yugoslavia", 92],
      ],
    },
    {
      prompt: "Name a country that played in a men's European Championship final (up to 2024)",
      answers: [
        ["Spain", 5], ["England", 5], ["Italy", 10], ["France", 15], ["Portugal", 15], ["Germany", 20, "West Germany"],
        ["Greece", 40], ["Netherlands", 45, "Holland"], ["Denmark", 50], ["Czech Republic", 60, "Czechia"],
        ["Soviet Union", 70, "USSR"], ["Czechoslovakia", 75], ["Belgium", 85], ["Yugoslavia", 88],
      ],
    },
    {
      prompt: "Name a country that played at Euro 2024",
      answers: [
        ["England", 3], ["Germany", 3], ["Spain", 3], ["France", 3], ["Portugal", 5], ["Italy", 5], ["Netherlands", 8, "Holland"],
        ["Belgium", 10], ["Scotland", 10], ["Croatia", 15], ["Denmark", 15], ["Switzerland", 20], ["Austria", 25],
        ["Turkey", 25, "Turkiye"], ["Poland", 30], ["Serbia", 35], ["Ukraine", 35], ["Hungary", 40], ["Czech Republic", 45, "Czechia"],
        ["Slovakia", 50], ["Slovenia", 55], ["Romania", 55], ["Albania", 65], ["Georgia", 88],
      ],
    },
    {
      prompt: "Name a team England played at Euro 2024",
      answers: [
        ["Spain", 5], ["Netherlands", 15, "Holland"], ["Switzerland", 25], ["Slovakia", 30], ["Serbia", 45],
        ["Denmark", 50], ["Slovenia", 88],
      ],
    },
    {
      prompt: "Name a team England played at the 2022 men's World Cup",
      answers: [
        ["France", 5], ["Wales", 20], ["United States", 30, "USA", "America", "US"], ["Iran", 40], ["Senegal", 88],
      ],
    },
    {
      prompt: "Name a team England played at the 2018 men's World Cup",
      answers: [
        ["Croatia", 5], ["Colombia", 15], ["Sweden", 25], ["Belgium", 35], ["Tunisia", 45], ["Panama", 88],
      ],
    },
    {
      prompt: "Name a team England beat in a knockout match at a major tournament under Gareth Southgate (2018–2024)",
      answers: [
        ["Germany", 10], ["Colombia", 20], ["Denmark", 20], ["Netherlands", 25, "Holland"], ["Sweden", 30], ["Switzerland", 35],
        ["Slovakia", 40], ["Ukraine", 50], ["Senegal", 86],
      ],
    },
    {
      prompt: "Name a team that knocked England out of a men's World Cup in a knockout match (1990–2022)",
      answers: [
        ["Croatia", 10], ["France", 10], ["Portugal", 15], ["Germany", 20, "West Germany"], ["Argentina", 25], ["Brazil", 88],
      ],
    },
    {
      prompt: "Name a team that knocked England out of a men's Euros in a knockout match (1996–2024)",
      answers: [
        ["Spain", 5], ["Italy", 10], ["Iceland", 15], ["Portugal", 70], ["Germany", 88],
      ],
    },
    {
      prompt: "Name an England men's player who scored at the 2022 World Cup",
      answers: [
        ["Harry Kane", 5, "Kane"], ["Bukayo Saka", 10, "Saka"], ["Marcus Rashford", 15, "Rashford"], ["Jude Bellingham", 20, "Bellingham"],
        ["Phil Foden", 40, "Foden"], ["Jack Grealish", 50, "Grealish"], ["Jordan Henderson", 65, "Henderson"],
        ["Raheem Sterling", 86, "Sterling"],
      ],
    },
    {
      prompt: "Name an England men's player who scored at the 2018 World Cup",
      answers: [
        ["Harry Kane", 5, "Kane"], ["Kieran Trippier", 20, "Trippier"], ["Harry Maguire", 30, "Maguire"], ["John Stones", 40, "Stones"],
        ["Dele Alli", 50, "Alli", "Dele"], ["Jesse Lingard", 86, "Lingard"],
      ],
    },
    {
      prompt: "Name a country that reached the quarter-finals of the 2022 men's World Cup",
      answers: [
        ["Argentina", 5], ["France", 5], ["England", 10], ["Morocco", 15], ["Croatia", 20], ["Brazil", 20],
        ["Portugal", 30], ["Netherlands", 86, "Holland"],
      ],
    },
    {
      prompt: "Name an African country that played at the 2022 men's World Cup",
      answers: [
        ["Morocco", 5], ["Senegal", 15], ["Ghana", 25], ["Cameroon", 30], ["Tunisia", 86],
      ],
    },
    {
      prompt: "Name an AFC (Asian Football Confederation) country that played at the 2022 men's World Cup",
      answers: [
        ["Qatar", 5], ["Japan", 10], ["Saudi Arabia", 15], ["South Korea", 20, "Korea"], ["Iran", 30], ["Australia", 88],
      ],
    },
    {
      prompt: "Name an African country that has reached a men's World Cup quarter-final (up to 2022)",
      answers: [
        ["Morocco", 5], ["Ghana", 40], ["Cameroon", 60], ["Senegal", 88],
      ],
    },
    {
      prompt: "Name a country that won the AFC Asian Cup (up to 2023)",
      answers: [
        ["Japan", 10], ["Qatar", 20], ["Saudi Arabia", 25], ["South Korea", 30, "Korea"], ["Iran", 40], ["Australia", 40],
        ["Iraq", 70], ["Kuwait", 85], ["Israel", 92],
      ],
    },
    {
      prompt: "Name a country that won the FIFA Confederations Cup (1992–2017)",
      answers: [
        ["Brazil", 5], ["Germany", 25], ["France", 40], ["Mexico", 60], ["Argentina", 70], ["Denmark", 90],
      ],
    },
    {
      prompt: "Name a country that went out in the group stage of a men's World Cup as defending champions (1998–2022)",
      answers: [
        ["Germany", 10], ["Spain", 20], ["Italy", 30], ["France", 86],
      ],
    },
    {
      prompt: "Name the captain of a men's World Cup-winning team between 1990 and 2022",
      answers: [
        ["Lionel Messi", 5, "Messi"], ["Hugo Lloris", 20, "Lloris"], ["Fabio Cannavaro", 30, "Cannavaro"],
        ["Iker Casillas", 30, "Casillas"], ["Philipp Lahm", 35, "Lahm"], ["Didier Deschamps", 40, "Deschamps"],
        ["Cafu", 50], ["Lothar Matthaus", 70, "Matthaus", "Matthaeus"], ["Dunga", 88],
      ],
    },
    {
      prompt: "Name the manager of a men's World Cup-winning team between 1990 and 2022",
      answers: [
        ["Didier Deschamps", 10, "Deschamps"], ["Lionel Scaloni", 15, "Scaloni"], ["Joachim Low", 20, "Low", "Loew"],
        ["Vicente del Bosque", 30, "Del Bosque"], ["Luiz Felipe Scolari", 40, "Scolari", "Big Phil"],
        ["Marcello Lippi", 45, "Lippi"], ["Franz Beckenbauer", 55, "Beckenbauer"], ["Aime Jacquet", 80, "Jacquet"],
        ["Carlos Alberto Parreira", 88, "Parreira"],
      ],
    },
    {
      prompt: "Name the manager of a men's Euros-winning team between 1996 and 2024",
      answers: [
        ["Luis de la Fuente", 15, "de la Fuente"], ["Roberto Mancini", 15, "Mancini"], ["Vicente del Bosque", 25, "Del Bosque"],
        ["Fernando Santos", 30, "Santos"], ["Otto Rehhagel", 45, "Rehhagel"], ["Luis Aragones", 55, "Aragones"],
        ["Roger Lemerre", 85, "Lemerre"], ["Berti Vogts", 88, "Vogts"],
      ],
    },
    {
      prompt: "Name a winner of the Golden Ball (best player) at a men's World Cup between 1990 and 2022",
      answers: [
        ["Lionel Messi", 5, "Messi"], ["Luka Modric", 15, "Modric"], ["Zinedine Zidane", 25, "Zidane"],
        ["Ronaldo Nazario", 40, "Ronaldo", "R9"], ["Diego Forlan", 50, "Forlan"], ["Oliver Kahn", 55, "Kahn"],
        ["Romario", 65], ["Salvatore Schillaci", 88, "Schillaci", "Toto Schillaci"],
      ],
    },
    {
      prompt: "Name the top scorer (Golden Boot winner) at a men's World Cup between 1990 and 2022 (shared winners count)",
      answers: [
        ["Kylian Mbappe", 5, "Mbappe"], ["Harry Kane", 10, "Kane"], ["James Rodriguez", 25, "James"],
        ["Ronaldo Nazario", 25, "Ronaldo", "R9"], ["Thomas Muller", 30, "Muller"], ["Miroslav Klose", 30, "Klose"],
        ["Davor Suker", 55, "Suker"], ["Hristo Stoichkov", 65, "Stoichkov"], ["Salvatore Schillaci", 75, "Schillaci", "Toto Schillaci"],
        ["Oleg Salenko", 95, "Salenko"],
      ],
    },

    // ---------- Women's football ----------
    {
      prompt: "Name a country that has won the Women's European Championship (up to 2025)",
      answers: [
        ["England", 5], ["Germany", 15], ["Netherlands", 35, "Holland"], ["Norway", 70], ["Sweden", 88],
      ],
    },
    {
      prompt: "Name a club that has won the Women's Champions League (2002–2025)",
      answers: [
        ["Barcelona", 5, "Barca"], ["Lyon", 10, "Olympique Lyonnais"], ["Arsenal", 15], ["Wolfsburg", 30, "VfL Wolfsburg"],
        ["Eintracht Frankfurt", 55, "Frankfurt", "FFC Frankfurt"], ["Turbine Potsdam", 80, "Potsdam"], ["Umea", 85, "Umea IK"],
        ["Duisburg", 92, "FCR Duisburg"],
      ],
    },
    {
      prompt: "Name a winner of the women's Ballon d'Or (2018–2025)",
      answers: [
        ["Aitana Bonmati", 10, "Bonmati", "Aitana"], ["Alexia Putellas", 15, "Putellas", "Alexia"],
        ["Megan Rapinoe", 40, "Rapinoe"], ["Ada Hegerberg", 86, "Hegerberg"],
      ],
    },

    // ---------- Extras ----------
    {
      prompt: "Name a team Scotland played at Euro 2020 or Euro 2024",
      answers: [
        ["England", 10], ["Germany", 10], ["Switzerland", 25], ["Hungary", 30], ["Croatia", 40],
        ["Czech Republic", 88, "Czechia"],
      ],
    },
    {
      prompt: "Name a club Roy Keane played for or managed",
      answers: [
        ["Manchester United", 5, "Man United", "Man Utd"], ["Nottingham Forest", 25, "Forest", "Nottm Forest"],
        ["Celtic", 35], ["Sunderland", 40], ["Ipswich Town", 55, "Ipswich"], ["Cobh Ramblers", 95, "Cobh"],
      ],
    },
    {
      prompt: "Name a club Gary Speed played for",
      answers: [
        ["Leeds United", 10, "Leeds"], ["Newcastle United", 15, "Newcastle"], ["Everton", 30],
        ["Bolton Wanderers", 40, "Bolton"], ["Sheffield United", 88, "Sheff Utd"],
      ],
    },
  ];

  // Fixed mix so every day gets a similar spread: each kind of prompt is
  // shuffled on its own, then dealt out in proportion to how many there are.
  let seed = 22026;
  const rand = () => (seed = (seed * 1664525 + 1013904223) % 4294967296) / 4294967296;
  const shuffle = (list) => {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  };
  const kindOf = (q) => (/managed|manager/i.test(q.prompt) ? "manager" : /played for/i.test(q.prompt) ? "career" : "other");
  const groups = { career: [], manager: [], other: [] };
  BATCH.forEach((q) => groups[kindOf(q)].push(q));
  Object.values(groups).forEach(shuffle);
  const dealt = { career: 0, manager: 0, other: 0 };
  for (let i = 0; i < BATCH.length; i++) {
    let next = null, bestGap = -Infinity;
    for (const k of Object.keys(groups)) {
      if (dealt[k] >= groups[k].length) continue;
      const gap = (groups[k].length * (i + 1)) / BATCH.length - dealt[k];
      if (gap > bestGap) { bestGap = gap; next = k; }
    }
    QUESTIONS.push(groups[next][dealt[next]++]);
  }
})();
