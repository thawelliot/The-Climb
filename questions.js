// Question bank.
// Each answer is [name, points, ...aliases]. Points run 1–100: the more
// obvious the answer, the fewer points it earns. Every prompt needs at
// least one Worldie (86+).
// Prompts say exactly what counts: the time range, whether "ever" or
// "current", and whether loans count. Ranges stop where the facts are
// confirmed; extend them (and the answers) as new seasons finish.

const QUESTIONS = [
  // ---------- International ----------
  {
    prompt: "Name a country that won the men's World Cup between 1930 and 2022",
    answers: [
      ["Brazil", 10], ["Argentina", 15], ["Germany", 20, "West Germany"],
      ["France", 25], ["Italy", 35], ["England", 40], ["Spain", 45],
      ["Uruguay", 90],
    ],
  },
  {
    prompt: "Name a country that has won the men's European Championship (up to Euro 2024)",
    answers: [
      ["Spain", 15], ["Portugal", 25], ["Italy", 30], ["Germany", 30, "West Germany"],
      ["France", 35], ["Netherlands", 60, "Holland"], ["Greece", 70],
      ["Denmark", 75], ["Czechoslovakia", 90], ["Soviet Union", 95, "USSR"],
    ],
  },
  {
    prompt: "Name a country that has hosted or co-hosted a men's World Cup (up to and including 2026)",
    answers: [
      ["Qatar", 10], ["Russia", 15], ["Brazil", 15], ["Germany", 20, "West Germany"],
      ["United States", 20, "USA", "America", "US"], ["South Africa", 25], ["France", 30],
      ["England", 35], ["Japan", 40], ["Mexico", 40], ["South Korea", 45, "Korea"],
      ["Spain", 45], ["Italy", 45], ["Canada", 50], ["Argentina", 60],
      ["Uruguay", 75], ["Chile", 85], ["Sweden", 85], ["Switzerland", 90],
    ],
  },
  {
    prompt: "Name a country that reached a men's World Cup final between 1930 and 2022 but has never won one",
    answers: [
      ["Netherlands", 15, "Holland"], ["Croatia", 20], ["Hungary", 60],
      ["Sweden", 70], ["Czechoslovakia", 88],
    ],
  },
  {
    prompt: "Name a country that reached a men's World Cup semi-final between 1990 and 2022",
    answers: [
      ["Brazil", 10], ["Germany", 10, "West Germany"], ["France", 10], ["Argentina", 15],
      ["England", 20], ["Croatia", 25], ["Netherlands", 25, "Holland"], ["Italy", 30],
      ["Spain", 35], ["Morocco", 40], ["Portugal", 45], ["Belgium", 50], ["Uruguay", 60],
      ["South Korea", 70, "Korea"], ["Turkey", 75, "Turkiye"], ["Sweden", 80], ["Bulgaria", 92],
    ],
  },
  {
    prompt: "Name a player who scored in a men's World Cup final between 1998 and 2022 (own goals don't count)",
    answers: [
      ["Lionel Messi", 10, "Messi"], ["Kylian Mbappe", 10, "Mbappe"], ["Zinedine Zidane", 15, "Zidane"],
      ["Andres Iniesta", 25, "Iniesta"], ["Mario Gotze", 30, "Gotze", "Goetze"],
      ["Angel Di Maria", 35, "Di Maria"], ["Ronaldo Nazario", 40, "Ronaldo", "R9"],
      ["Paul Pogba", 45, "Pogba"], ["Antoine Griezmann", 45, "Griezmann"],
      ["Marco Materazzi", 60, "Materazzi"], ["Emmanuel Petit", 75, "Petit"],
      ["Ivan Perisic", 80, "Perisic"], ["Mario Mandzukic", 88, "Mandzukic"],
    ],
  },
  {
    prompt: "Name a country that has won the Women's World Cup (up to 2023)",
    answers: [
      ["United States", 10, "USA", "America", "US"], ["Spain", 25], ["Germany", 30],
      ["Japan", 50], ["Norway", 88],
    ],
  },
  {
    prompt: "Name a country that won the men's Olympic football tournament between 1992 and 2024",
    answers: [
      ["Brazil", 20], ["Spain", 25], ["Argentina", 30], ["Nigeria", 70],
      ["Mexico", 75], ["Cameroon", 90],
    ],
  },
  {
    prompt: "Name a country that has won the Africa Cup of Nations (up to and including 2023)",
    answers: [
      ["Egypt", 15], ["Nigeria", 15], ["Cameroon", 20], ["Senegal", 20],
      ["Ivory Coast", 25, "Cote d'Ivoire"], ["Ghana", 25], ["Algeria", 40], ["Morocco", 40],
      ["South Africa", 50], ["Tunisia", 60], ["Zambia", 65], ["DR Congo", 80, "Zaire", "Democratic Republic of the Congo", "DRC"],
      ["Sudan", 90], ["Congo", 95, "Congo-Brazzaville", "Republic of the Congo"], ["Ethiopia", 95],
    ],
  },
  {
    prompt: "Name a country that has won the Copa América (up to 2024)",
    answers: [
      ["Argentina", 5], ["Brazil", 10], ["Uruguay", 25], ["Chile", 40], ["Colombia", 50],
      ["Peru", 70], ["Paraguay", 75], ["Bolivia", 90],
    ],
  },
  {
    prompt: "Name the nickname of any men's national team",
    answers: [
      ["Three Lions", 5], ["Les Bleus", 10], ["Azzurri", 15], ["Selecao", 20, "Seleção"],
      ["Oranje", 20, "Clockwork Orange"], ["La Roja", 20], ["Die Mannschaft", 20],
      ["Albiceleste", 30, "La Albiceleste"], ["Red Devils", 35], ["Super Eagles", 35],
      ["Socceroos", 40], ["Black Stars", 45], ["Atlas Lions", 45], ["Indomitable Lions", 50],
      ["Pharaohs", 50], ["Dragons", 50, "The Dragons"], ["El Tri", 55], ["Samurai Blue", 55],
      ["Bafana Bafana", 55], ["La Celeste", 60], ["Teranga Lions", 60, "Lions of Teranga"],
      ["Boys in Green", 60], ["Elephants", 65, "Les Elephants"], ["Vatreni", 70, "Blazers", "Kockasti"],
      ["All Whites", 75], ["Desert Foxes", 75], ["Fennecs", 85, "Les Fennecs"],
      ["Eagles of Carthage", 85], ["Taeguk Warriors", 85], ["Team Melli", 88], ["Green Falcons", 88],
    ],
  },
  {
    prompt: "Name an England men's player who has won 100 or more caps",
    answers: [
      ["Wayne Rooney", 10, "Rooney"], ["Harry Kane", 10, "Kane"], ["David Beckham", 15, "Beckham"],
      ["Steven Gerrard", 20, "Gerrard"], ["Frank Lampard", 30, "Lampard"], ["Ashley Cole", 45, "Cole"],
      ["Peter Shilton", 45, "Shilton"], ["Bobby Moore", 60, "Moore"], ["Bobby Charlton", 70, "Charlton"],
      ["Billy Wright", 92, "Wright"],
    ],
  },
  {
    prompt: "Name a man who managed England between 1990 and 2025 (caretakers count)",
    answers: [
      ["Gareth Southgate", 5, "Southgate"], ["Thomas Tuchel", 10, "Tuchel"], ["Roy Hodgson", 20, "Hodgson"],
      ["Fabio Capello", 20, "Capello"], ["Sven-Goran Eriksson", 25, "Eriksson", "Sven"],
      ["Steve McClaren", 30, "McClaren"], ["Sam Allardyce", 35, "Allardyce", "Big Sam"],
      ["Glenn Hoddle", 45, "Hoddle"], ["Kevin Keegan", 45, "Keegan"], ["Terry Venables", 55, "Venables"],
      ["Bobby Robson", 60, "Robson"], ["Lee Carsley", 60, "Carsley"], ["Graham Taylor", 70],
      ["Stuart Pearce", 85, "Pearce"], ["Peter Taylor", 90], ["Howard Wilkinson", 95, "Wilkinson"],
    ],
  },

  // ---------- Awards ----------
  {
    prompt: "Name a player who won the Ballon d'Or between 2000 and 2024",
    answers: [
      ["Lionel Messi", 5, "Messi"], ["Cristiano Ronaldo", 10, "Ronaldo", "CR7"],
      ["Luka Modric", 40, "Modric"], ["Karim Benzema", 40, "Benzema"],
      ["Rodri", 50, "Rodrigo Hernandez"], ["Ronaldinho", 50],
      ["Kaka", 60], ["Ronaldo Nazario", 70, "R9", "Ronaldo Nazario de Lima", "Brazilian Ronaldo"],
      ["Fabio Cannavaro", 85, "Cannavaro"], ["Andriy Shevchenko", 85, "Shevchenko"],
      ["Michael Owen", 90, "Owen"], ["Pavel Nedved", 90, "Nedved"], ["Luis Figo", 90, "Figo"],
    ],
  },
  {
    prompt: "Name a player who won the Ballon d'Or in the 1990s (1990–1999)",
    answers: [
      ["Zinedine Zidane", 15, "Zidane"], ["Ronaldo Nazario", 20, "Ronaldo", "R9"], ["Roberto Baggio", 35, "Baggio"],
      ["Marco van Basten", 40, "van Basten"], ["George Weah", 45, "Weah"], ["Rivaldo", 45],
      ["Lothar Matthaus", 55, "Matthaus", "Matthaeus"], ["Hristo Stoichkov", 60, "Stoichkov"],
      ["Jean-Pierre Papin", 85, "Papin"], ["Matthias Sammer", 88, "Sammer"],
    ],
  },
  {
    prompt: "Name a Premier League Golden Boot winner from 1992–93 to 2024–25 (shared winners count)",
    answers: [
      ["Erling Haaland", 10, "Haaland"], ["Mohamed Salah", 10, "Salah", "Mo Salah"],
      ["Harry Kane", 15, "Kane"], ["Thierry Henry", 20, "Henry"], ["Alan Shearer", 25, "Shearer"],
      ["Didier Drogba", 40, "Drogba"], ["Robin van Persie", 40, "van Persie", "RVP"],
      ["Sergio Aguero", 40, "Aguero"], ["Cristiano Ronaldo", 45, "Ronaldo"],
      ["Luis Suarez", 45, "Suarez"], ["Jamie Vardy", 50, "Vardy"], ["Son Heung-min", 50, "Son", "Heung-min Son"],
      ["Ruud van Nistelrooy", 60, "van Nistelrooy", "Van Nistelrooij"], ["Michael Owen", 65, "Owen"],
      ["Sadio Mane", 70, "Mane"], ["Pierre-Emerick Aubameyang", 70, "Aubameyang", "Auba"],
      ["Andy Cole", 75, "Andrew Cole", "Cole"], ["Jimmy Floyd Hasselbaink", 75, "Hasselbaink"],
      ["Dimitar Berbatov", 75, "Berbatov"], ["Carlos Tevez", 75, "Tevez"],
      ["Nicolas Anelka", 80, "Anelka"], ["Teddy Sheringham", 85, "Sheringham"],
      ["Chris Sutton", 90, "Sutton"], ["Dwight Yorke", 90, "Yorke"],
      ["Dion Dublin", 95, "Dublin"], ["Kevin Phillips", 95, "Phillips"],
    ],
  },
  {
    prompt: "Name an African player who has won the Premier League Golden Boot (up to 2024–25)",
    answers: [
      ["Mohamed Salah", 5, "Salah", "Mo Salah"], ["Didier Drogba", 30, "Drogba"],
      ["Sadio Mane", 50, "Mane"], ["Pierre-Emerick Aubameyang", 88, "Aubameyang", "Auba"],
    ],
  },
  {
    prompt: "Name a player who scored 30 or more goals in a single Premier League season (up to 2024–25)",
    answers: [
      ["Erling Haaland", 10, "Haaland"], ["Mohamed Salah", 15, "Salah", "Mo Salah"],
      ["Alan Shearer", 25, "Shearer"], ["Harry Kane", 25, "Kane"], ["Cristiano Ronaldo", 35, "Ronaldo"],
      ["Thierry Henry", 35, "Henry"], ["Luis Suarez", 45, "Suarez"], ["Robin van Persie", 50, "van Persie", "RVP"],
      ["Andy Cole", 65, "Andrew Cole", "Cole"], ["Kevin Phillips", 88, "Phillips"],
    ],
  },
  {
    prompt: "Name a goalkeeper who won the Premier League Golden Glove between 2004–05 and 2024–25",
    answers: [
      ["Ederson", 15], ["Petr Cech", 15, "Cech"], ["David de Gea", 20, "de Gea"], ["Alisson", 20, "Alisson Becker"],
      ["David Raya", 30, "Raya"], ["Joe Hart", 35, "Hart"], ["Thibaut Courtois", 45, "Courtois"],
      ["Edwin van der Sar", 70, "van der Sar"], ["Pepe Reina", 86, "Reina"],
    ],
  },
  {
    prompt: "Name a winner of the PFA Players' Player of the Year award between 2010 and 2025",
    answers: [
      ["Mohamed Salah", 10, "Salah", "Mo Salah"], ["Kevin De Bruyne", 15, "De Bruyne", "KDB"],
      ["Erling Haaland", 15, "Haaland"], ["Virgil van Dijk", 25, "van Dijk", "VVD"], ["Gareth Bale", 30, "Bale"],
      ["N'Golo Kante", 35, "Kante"], ["Phil Foden", 35, "Foden"], ["Luis Suarez", 40, "Suarez"],
      ["Eden Hazard", 40, "Hazard"], ["Riyad Mahrez", 55, "Mahrez"], ["Robin van Persie", 60, "van Persie", "RVP"],
      ["Wayne Rooney", 86, "Rooney"],
    ],
  },

  // ---------- Premier League ----------
  {
    prompt: "Name a club that has won the Premier League (1992–93 to 2024–25)",
    answers: [
      ["Manchester United", 10, "Man United", "Man Utd"], ["Manchester City", 10, "Man City"],
      ["Liverpool", 20], ["Chelsea", 25], ["Arsenal", 25],
      ["Leicester City", 60, "Leicester"], ["Blackburn Rovers", 88, "Blackburn"],
    ],
  },
  {
    prompt: "Name a club that finished second in the Premier League (1992–93 to 2024–25)",
    answers: [
      ["Arsenal", 5], ["Liverpool", 10], ["Manchester United", 15, "Man United", "Man Utd"],
      ["Manchester City", 20, "Man City"], ["Chelsea", 25], ["Tottenham Hotspur", 45, "Tottenham", "Spurs"],
      ["Newcastle United", 50, "Newcastle"], ["Blackburn Rovers", 80, "Blackburn"], ["Aston Villa", 90, "Villa"],
    ],
  },
  {
    prompt: "Name a manager who won the Premier League (1992–93 to 2024–25)",
    answers: [
      ["Alex Ferguson", 5, "Ferguson", "Fergie", "Sir Alex"], ["Pep Guardiola", 5, "Guardiola", "Pep"],
      ["Jurgen Klopp", 10, "Klopp"], ["Arsene Wenger", 10, "Wenger"], ["Jose Mourinho", 15, "Mourinho"],
      ["Arne Slot", 30, "Slot"], ["Claudio Ranieri", 30, "Ranieri"], ["Antonio Conte", 40, "Conte"],
      ["Carlo Ancelotti", 45, "Ancelotti"], ["Roberto Mancini", 45, "Mancini"],
      ["Manuel Pellegrini", 60, "Pellegrini"], ["Kenny Dalglish", 88, "Dalglish"],
    ],
  },
  {
    prompt: "Name a London club that has played in the Premier League at any point since 1992",
    answers: [
      ["Arsenal", 5], ["Chelsea", 5], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"],
      ["West Ham United", 20, "West Ham"], ["Crystal Palace", 35, "Palace"],
      ["Fulham", 40], ["Brentford", 45], ["Queens Park Rangers", 70, "QPR"],
      ["Charlton Athletic", 80, "Charlton"], ["Wimbledon", 90],
    ],
  },
  {
    prompt: "Name a club with 'City' or 'United' in its name that has played in the Premier League at any point since 1992",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Manchester City", 5, "Man City"],
      ["Newcastle United", 15, "Newcastle"], ["West Ham United", 20, "West Ham"], ["Leeds United", 20, "Leeds"],
      ["Leicester City", 20, "Leicester"], ["Norwich City", 35, "Norwich"], ["Sheffield United", 35, "Sheff Utd"],
      ["Stoke City", 40, "Stoke"], ["Swansea City", 45, "Swansea"], ["Hull City", 50, "Hull"],
      ["Cardiff City", 55, "Cardiff"], ["Coventry City", 60, "Coventry"], ["Birmingham City", 65, "Birmingham"],
      ["Bradford City", 90, "Bradford"],
    ],
  },
  {
    prompt: "Name a club with 'Athletic', 'Rovers' or 'Wanderers' in its full name that has played in the Premier League at any point since 1992",
    answers: [
      ["Wolverhampton Wanderers", 15, "Wolves", "Wolverhampton"], ["Blackburn Rovers", 30, "Blackburn"],
      ["Bolton Wanderers", 30, "Bolton"], ["Wigan Athletic", 35, "Wigan"],
      ["Charlton Athletic", 45, "Charlton"], ["Oldham Athletic", 90, "Oldham"],
    ],
  },
  {
    prompt: "Name a club that spent exactly one season in the Premier League (up to 2024–25)",
    answers: [
      ["Luton Town", 20, "Luton"], ["Blackpool", 40], ["Barnsley", 70], ["Swindon Town", 88, "Swindon"],
    ],
  },
  {
    prompt: "Name a club relegated from the Premier League in any season from 2019–20 to 2024–25",
    answers: [
      ["Southampton", 15], ["Leicester City", 15, "Leicester"], ["Leeds United", 20, "Leeds"],
      ["Burnley", 20], ["Sheffield United", 25, "Sheff Utd"], ["Norwich City", 30, "Norwich"],
      ["Watford", 30], ["Luton Town", 30, "Luton"], ["Ipswich Town", 30, "Ipswich"],
      ["West Bromwich Albion", 50, "West Brom", "WBA"], ["Fulham", 75], ["Bournemouth", 86, "AFC Bournemouth"],
    ],
  },
  {
    prompt: "Name the home stadium of a club that played in the 2024–25 Premier League",
    answers: [
      ["Old Trafford", 5], ["Anfield", 5], ["Emirates Stadium", 10, "Emirates"], ["Etihad Stadium", 10, "Etihad", "City of Manchester Stadium"],
      ["Stamford Bridge", 10], ["St James' Park", 15, "St James Park"], ["Tottenham Hotspur Stadium", 20],
      ["Goodison Park", 20, "Goodison"], ["Villa Park", 20], ["London Stadium", 25, "Olympic Stadium"],
      ["Selhurst Park", 30, "Selhurst"], ["Craven Cottage", 35], ["Molineux", 35, "Molineux Stadium"],
      ["King Power Stadium", 35, "King Power"], ["City Ground", 40], ["Amex Stadium", 45, "Amex", "American Express Stadium", "Falmer Stadium"],
      ["St Mary's Stadium", 50, "St Marys", "St Mary's"], ["Vitality Stadium", 65, "Dean Court"], ["Portman Road", 70],
      ["Gtech Community Stadium", 88, "Gtech", "Brentford Community Stadium"],
    ],
  },
  {
    prompt: "Name the nickname of any club that has played in the Premier League since 1992",
    answers: [
      ["Red Devils", 5], ["Gunners", 5], ["Spurs", 10], ["Hammers", 15, "Irons"], ["Wolves", 15],
      ["Toffees", 20], ["Magpies", 20], ["Foxes", 20], ["Toon", 30], ["Villans", 30, "Villa"],
      ["Seagulls", 30, "Albion"], ["Saints", 30], ["Cherries", 35], ["Eagles", 35],
      ["Bees", 40], ["Canaries", 40], ["Citizens", 45, "Cityzens"], ["Hornets", 50], ["Blades", 50],
      ["Baggies", 50, "Throstles"], ["Black Cats", 50], ["Clarets", 50], ["Swans", 50, "Jacks"],
      ["Sky Blues", 50], ["Potters", 55], ["Pompey", 55], ["Tractor Boys", 60], ["Hatters", 60],
      ["Cottagers", 60], ["Rams", 60], ["Boro", 60, "Smoggies"], ["Royals", 70], ["Tigers", 70],
      ["Bluebirds", 70], ["Rovers", 70], ["Trotters", 75, "Wanderers"], ["Terriers", 75],
      ["Lilywhites", 80], ["Owls", 80], ["Latics", 85], ["Seasiders", 85], ["Dons", 85, "Crazy Gang"],
      ["Addicks", 90], ["Tricky Trees", 90],
    ],
  },
  {
    prompt: "Name a player who made a Premier League appearance for Arsenal in the 2003–04 Invincibles season",
    answers: [
      ["Thierry Henry", 5, "Henry"], ["Patrick Vieira", 10, "Vieira"], ["Dennis Bergkamp", 15, "Bergkamp"],
      ["Robert Pires", 20, "Pires"], ["Sol Campbell", 25, "Campbell"], ["Ashley Cole", 25, "Cole"],
      ["Jens Lehmann", 35, "Lehmann"], ["Freddie Ljungberg", 35, "Ljungberg"],
      ["Kolo Toure", 40, "Toure"], ["Gilberto Silva", 45, "Gilberto"], ["Ray Parlour", 55, "Parlour"],
      ["Lauren", 60], ["Martin Keown", 60, "Keown"], ["Edu", 65], ["Jose Antonio Reyes", 65, "Reyes"],
      ["Kanu", 65, "Nwankwo Kanu"], ["Sylvain Wiltord", 70, "Wiltord"], ["Gael Clichy", 75, "Clichy"],
      ["Pascal Cygan", 85, "Cygan"], ["Jeremie Aliadiere", 90, "Aliadiere"],
    ],
  },
  {
    prompt: "Name someone who managed Manchester United (permanent or interim) between 2013 and 2024",
    answers: [
      ["Erik ten Hag", 10, "ten Hag"], ["Jose Mourinho", 15, "Mourinho"], ["David Moyes", 20, "Moyes"],
      ["Ole Gunnar Solskjaer", 20, "Solskjaer", "Ole"], ["Ruben Amorim", 25, "Amorim"],
      ["Louis van Gaal", 30, "van Gaal", "LVG"], ["Ralf Rangnick", 50, "Rangnick"],
      ["Ryan Giggs", 70, "Giggs"], ["Ruud van Nistelrooy", 70, "van Nistelrooy"],
      ["Michael Carrick", 88, "Carrick"],
    ],
  },

  // ---------- English cups & the EFL ----------
  {
    prompt: "Name a club that won the FA Cup between 2000 and 2025",
    answers: [
      ["Arsenal", 10], ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"],
      ["Manchester City", 15, "Man City"], ["Liverpool", 20], ["Crystal Palace", 35, "Palace"],
      ["Leicester City", 45, "Leicester"], ["Wigan Athletic", 75, "Wigan"], ["Portsmouth", 88, "Pompey"],
    ],
  },
  {
    prompt: "Name a club that played in an FA Cup final between 2010 and 2025 (winners or losers)",
    answers: [
      ["Chelsea", 10], ["Manchester City", 10, "Man City"], ["Arsenal", 15],
      ["Manchester United", 15, "Man United", "Man Utd"], ["Liverpool", 25], ["Crystal Palace", 30, "Palace"],
      ["Leicester City", 40, "Leicester"], ["Watford", 55], ["Aston Villa", 55, "Villa"],
      ["Wigan Athletic", 60, "Wigan"], ["Hull City", 70, "Hull"], ["Stoke City", 75, "Stoke"],
      ["Portsmouth", 88, "Pompey"],
    ],
  },
  {
    prompt: "Name a club that won the League Cup between 2010 and 2025",
    answers: [
      ["Manchester City", 10, "Man City"], ["Liverpool", 20], ["Manchester United", 20, "Man United", "Man Utd"],
      ["Newcastle United", 30, "Newcastle"], ["Chelsea", 45], ["Swansea City", 75, "Swansea"],
      ["Birmingham City", 90, "Birmingham"],
    ],
  },
  {
    prompt: "Name a club that won the Championship title (2004–05 to 2024–25)",
    answers: [
      ["Leeds United", 15, "Leeds"], ["Burnley", 20], ["Leicester City", 20, "Leicester"],
      ["Newcastle United", 30, "Newcastle"], ["Norwich City", 35, "Norwich"],
      ["Wolverhampton Wanderers", 40, "Wolves"], ["Fulham", 45], ["Bournemouth", 55, "AFC Bournemouth"],
      ["Sunderland", 60], ["Reading", 65], ["West Bromwich Albion", 65, "West Brom", "WBA"],
      ["Cardiff City", 70, "Cardiff"], ["Queens Park Rangers", 88, "QPR"],
    ],
  },
  {
    prompt: "Name a club that won the Championship play-off final between 2010 and 2025",
    answers: [
      ["Sunderland", 15], ["Southampton", 25], ["Luton Town", 30, "Luton"],
      ["Nottingham Forest", 30, "Forest", "Nottm Forest"], ["Brentford", 35], ["Fulham", 40],
      ["Aston Villa", 45, "Villa"], ["Huddersfield Town", 55, "Huddersfield"], ["Hull City", 60, "Hull"],
      ["Norwich City", 60, "Norwich"], ["Queens Park Rangers", 65, "QPR"], ["Crystal Palace", 70, "Palace"],
      ["West Ham United", 70, "West Ham"], ["Swansea City", 75, "Swansea"], ["Blackpool", 88],
    ],
  },

  // ---------- Europe ----------
  {
    prompt: "Name a club that won the Champions League between 1993 and 2025",
    answers: [
      ["Real Madrid", 5], ["Barcelona", 15, "Barca"], ["Liverpool", 15],
      ["Bayern Munich", 20, "Bayern"], ["Manchester United", 25, "Man United", "Man Utd"],
      ["Chelsea", 30], ["Manchester City", 30, "Man City"], ["AC Milan", 35, "Milan"],
      ["Paris Saint-Germain", 50, "PSG", "Paris"], ["Inter Milan", 55, "Inter", "Internazionale"],
      ["Juventus", 60, "Juve"], ["Porto", 65, "FC Porto"], ["Ajax", 70],
      ["Borussia Dortmund", 75, "Dortmund", "BVB"], ["Marseille", 90, "Olympique de Marseille", "OM"],
    ],
  },
  {
    prompt: "Name a club that lost a Champions League final between 1993 and 2025",
    answers: [
      ["Liverpool", 15], ["Manchester United", 20, "Man United", "Man Utd"], ["Juventus", 20, "Juve"],
      ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["Bayern Munich", 25, "Bayern"],
      ["Atletico Madrid", 30, "Atletico", "Atleti"], ["Borussia Dortmund", 30, "Dortmund", "BVB"],
      ["Inter Milan", 35, "Inter", "Internazionale"], ["Arsenal", 35], ["Chelsea", 40],
      ["Manchester City", 40, "Man City"], ["Paris Saint-Germain", 40, "PSG", "Paris"], ["AC Milan", 50, "Milan"],
      ["Barcelona", 70, "Barca"], ["Ajax", 75], ["Valencia", 75], ["Bayer Leverkusen", 80, "Leverkusen"],
      ["Monaco", 88, "AS Monaco"],
    ],
  },
  {
    prompt: "Name an English club that has won the European Cup or Champions League (up to 2025)",
    answers: [
      ["Liverpool", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Chelsea", 25],
      ["Manchester City", 30, "Man City"], ["Nottingham Forest", 70, "Forest", "Nottm Forest"],
      ["Aston Villa", 88, "Villa"],
    ],
  },
  {
    prompt: "Name a Dutch club that has won the European Cup or Champions League",
    answers: [
      ["Ajax", 10], ["PSV Eindhoven", 60, "PSV"], ["Feyenoord", 88],
    ],
  },
  {
    prompt: "Name a club that won the UEFA Cup or Europa League between 2000 and 2025",
    answers: [
      ["Sevilla", 10], ["Chelsea", 20], ["Manchester United", 20, "Man United", "Man Utd"],
      ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["Atletico Madrid", 30, "Atletico", "Atleti"],
      ["Liverpool", 40], ["Porto", 45, "FC Porto"], ["Atalanta", 45], ["Villarreal", 55],
      ["Eintracht Frankfurt", 60, "Frankfurt"], ["Valencia", 70], ["Galatasaray", 75, "Gala"],
      ["Feyenoord", 80], ["Zenit St Petersburg", 85, "Zenit"], ["Shakhtar Donetsk", 85, "Shakhtar"],
      ["CSKA Moscow", 90, "CSKA"],
    ],
  },
  {
    prompt: "Name a winner of the Europa Conference League (2022 to 2025)",
    answers: [
      ["Chelsea", 15], ["West Ham United", 25, "West Ham"], ["Roma", 40, "AS Roma"], ["Olympiacos", 88, "Olympiakos"],
    ],
  },
  {
    prompt: "Name an English club that won the Champions League, UEFA Cup/Europa League or Conference League between 2000 and 2025",
    answers: [
      ["Liverpool", 10], ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"],
      ["Manchester City", 15, "Man City"], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"],
      ["West Ham United", 88, "West Ham"],
    ],
  },

  // ---------- Other leagues ----------
  {
    prompt: "Name a club that has won La Liga since the 1995–96 season (up to 2024–25)",
    answers: [
      ["Real Madrid", 5], ["Barcelona", 5, "Barca"], ["Atletico Madrid", 30, "Atletico", "Atleti"],
      ["Valencia", 65], ["Deportivo La Coruna", 90, "Deportivo", "Depor"],
    ],
  },
  {
    prompt: "Name a club that has won Serie A since the 1999–2000 season (up to 2024–25)",
    answers: [
      ["Juventus", 5, "Juve"], ["Inter Milan", 10, "Inter", "Internazionale"], ["AC Milan", 15, "Milan"],
      ["Napoli", 25], ["Roma", 80, "AS Roma"], ["Lazio", 88],
    ],
  },
  {
    prompt: "Name a club that has won the Bundesliga since the 1999–2000 season (up to 2024–25)",
    answers: [
      ["Bayern Munich", 5, "Bayern"], ["Borussia Dortmund", 15, "Dortmund", "BVB"],
      ["Bayer Leverkusen", 25, "Leverkusen"], ["Wolfsburg", 70, "VfL Wolfsburg"],
      ["Stuttgart", 75, "VfB Stuttgart"], ["Werder Bremen", 88, "Bremen"],
    ],
  },
  {
    prompt: "Name a club that won the Scottish League Cup in a final played between 2000 and 2024",
    answers: [
      ["Celtic", 5], ["Rangers", 10], ["Aberdeen", 50], ["Hibernian", 60, "Hibs"],
      ["St Johnstone", 70], ["Kilmarnock", 80], ["Ross County", 80], ["St Mirren", 85],
      ["Livingston", 92],
    ],
  },
  {
    prompt: "Name a club that has won the Women's Super League (2011 to 2024–25)",
    answers: [
      ["Chelsea", 5], ["Arsenal", 15], ["Manchester City", 45, "Man City"], ["Liverpool", 88],
    ],
  },

  // ---------- Players' clubs ----------
  {
    prompt: "Name a club Zlatan Ibrahimović played for (senior career)",
    answers: [
      ["Paris Saint-Germain", 15, "PSG", "Paris"], ["Manchester United", 20, "Man United", "Man Utd"],
      ["AC Milan", 25, "Milan"], ["Barcelona", 40, "Barca"], ["LA Galaxy", 45, "Galaxy"],
      ["Juventus", 50, "Juve"], ["Inter Milan", 55, "Inter", "Internazionale"],
      ["Ajax", 60], ["Malmö", 90, "Malmo FF", "Malmo"],
    ],
  },
  {
    prompt: "Name a club Cristiano Ronaldo has played for (senior career, up to 2025)",
    answers: [
      ["Manchester United", 10, "Man United", "Man Utd"], ["Real Madrid", 10],
      ["Juventus", 30, "Juve"], ["Al Nassr", 45, "Al-Nassr"],
      ["Sporting CP", 88, "Sporting Lisbon", "Sporting"],
    ],
  },
  {
    prompt: "Name a club David Beckham played for (loans count)",
    answers: [
      ["Manchester United", 10, "Man United", "Man Utd"], ["Real Madrid", 20],
      ["LA Galaxy", 40, "Galaxy"], ["Paris Saint-Germain", 70, "PSG", "Paris"],
      ["AC Milan", 75, "Milan"], ["Preston North End", 95, "Preston"],
    ],
  },
  {
    prompt: "Name a club Peter Crouch played for (loans count)",
    answers: [
      ["Liverpool", 10], ["Stoke City", 30, "Stoke"], ["Tottenham Hotspur", 30, "Tottenham", "Spurs"],
      ["Portsmouth", 35, "Pompey"], ["Southampton", 45], ["Aston Villa", 50, "Villa"],
      ["Burnley", 70], ["Queens Park Rangers", 80, "QPR"], ["Norwich City", 85, "Norwich"],
      ["Dagenham & Redbridge", 95, "Dagenham"], ["IFK Hassleholm", 100, "Hassleholm"],
    ],
  },
  {
    prompt: "Name a club Romelu Lukaku has played for (loans count, up to 2025)",
    answers: [
      ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Inter Milan", 20, "Inter", "Internazionale"],
      ["Everton", 25], ["Napoli", 40], ["Roma", 45, "AS Roma"], ["Anderlecht", 70],
      ["West Bromwich Albion", 86, "West Brom", "WBA"],
    ],
  },
  {
    prompt: "Name a club Nicolas Anelka played for (loans count)",
    answers: [
      ["Arsenal", 10], ["Chelsea", 10], ["Real Madrid", 30], ["Liverpool", 35],
      ["Paris Saint-Germain", 35, "PSG", "Paris"], ["Manchester City", 40, "Man City"],
      ["Bolton Wanderers", 45, "Bolton"], ["Fenerbahce", 65], ["West Bromwich Albion", 65, "West Brom", "WBA"],
      ["Juventus", 70, "Juve"], ["Shanghai Shenhua", 85, "Shanghai"], ["Mumbai City", 95, "Mumbai"],
    ],
  },
  {
    prompt: "Name a club Ronaldinho played for (senior career)",
    answers: [
      ["Barcelona", 5, "Barca"], ["AC Milan", 25, "Milan"], ["Paris Saint-Germain", 30, "PSG", "Paris"],
      ["Flamengo", 55], ["Gremio", 60], ["Atletico Mineiro", 70], ["Fluminense", 85], ["Queretaro", 90],
    ],
  },
  {
    prompt: "Name a club Thierry Henry played for (senior career)",
    answers: [
      ["Arsenal", 5], ["Barcelona", 15, "Barca"], ["Monaco", 40, "AS Monaco"],
      ["New York Red Bulls", 45, "Red Bulls", "NY Red Bulls"], ["Juventus", 86, "Juve"],
    ],
  },
  {
    prompt: "Name a club Gareth Bale played for (senior career, loans count)",
    answers: [
      ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Real Madrid", 10], ["Southampton", 45],
      ["Los Angeles FC", 88, "LAFC"],
    ],
  },
  {
    prompt: "Name a club Jamie Vardy has played for (senior career, up to 2025)",
    answers: [
      ["Leicester City", 5, "Leicester"], ["Cremonese", 50], ["Fleetwood Town", 60, "Fleetwood"],
      ["FC Halifax Town", 80, "Halifax", "Halifax Town"], ["Stocksbridge Park Steels", 90, "Stocksbridge"],
    ],
  },
  {
    prompt: "Name a club Erling Haaland has played for (senior career)",
    answers: [
      ["Manchester City", 5, "Man City"], ["Borussia Dortmund", 15, "Dortmund", "BVB"],
      ["Red Bull Salzburg", 40, "Salzburg"], ["Molde", 60], ["Bryne", 90],
    ],
  },
  {
    prompt: "Name a club Harry Kane has played for (loans count)",
    answers: [
      ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Bayern Munich", 10, "Bayern"],
      ["Leyton Orient", 60, "Orient"], ["Millwall", 65], ["Leicester City", 75, "Leicester"],
      ["Norwich City", 86, "Norwich"],
    ],
  },
  {
    prompt: "Name a club Mohamed Salah has played for (senior career, loans count)",
    answers: [
      ["Liverpool", 5], ["Chelsea", 25], ["Roma", 40, "AS Roma"], ["Basel", 50, "FC Basel"],
      ["Fiorentina", 55], ["El Mokawloon", 90, "Arab Contractors", "Al Mokawloon"],
    ],
  },
  {
    prompt: "Name a club Kevin De Bruyne has played for (loans count, up to 2025)",
    answers: [
      ["Manchester City", 5, "Man City"], ["Chelsea", 25], ["Napoli", 30], ["Wolfsburg", 40, "VfL Wolfsburg"],
      ["Genk", 50, "KRC Genk"], ["Werder Bremen", 86, "Bremen"],
    ],
  },
  {
    prompt: "Name a club Luka Modrić has played for (loans count, up to 2025)",
    answers: [
      ["Real Madrid", 5], ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["AC Milan", 35, "Milan"],
      ["Dinamo Zagreb", 50, "Dinamo"], ["Zrinjski Mostar", 90, "Zrinjski"], ["Inter Zapresic", 90, "Zapresic"],
    ],
  },
  {
    prompt: "Name a club Neymar has played for (senior career, up to 2025)",
    answers: [
      ["Barcelona", 10, "Barca"], ["Paris Saint-Germain", 10, "PSG", "Paris"], ["Santos", 35],
      ["Al Hilal", 88, "Al-Hilal"],
    ],
  },
  {
    prompt: "Name a club Robert Lewandowski has played for (senior career, up to 2025)",
    answers: [
      ["Bayern Munich", 10, "Bayern"], ["Barcelona", 10, "Barca"], ["Borussia Dortmund", 20, "Dortmund", "BVB"],
      ["Lech Poznan", 60, "Lech"], ["Legia Warsaw", 90, "Legia"], ["Znicz Pruszkow", 90, "Znicz"],
      ["Delta Warsaw", 95, "Delta"],
    ],
  },
  {
    prompt: "Name a club Didier Drogba played for (senior career)",
    answers: [
      ["Chelsea", 5], ["Marseille", 40, "Olympique de Marseille", "OM"], ["Galatasaray", 45, "Gala"],
      ["Shanghai Shenhua", 70, "Shanghai"], ["Montreal Impact", 70, "Montreal", "CF Montreal"],
      ["Guingamp", 75], ["Le Mans", 80], ["Phoenix Rising", 92, "Phoenix"],
    ],
  },
  {
    prompt: "Name a club Wayne Rooney played for (senior career)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Everton", 10], ["Derby County", 60, "Derby"],
      ["DC United", 88, "D.C. United"],
    ],
  },
  {
    prompt: "Name a club Michael Owen played for (senior career)",
    answers: [
      ["Liverpool", 5], ["Real Madrid", 25], ["Newcastle United", 30, "Newcastle"],
      ["Manchester United", 35, "Man United", "Man Utd"], ["Stoke City", 88, "Stoke"],
    ],
  },
  {
    prompt: "Name a club Frank Lampard played for (loans count)",
    answers: [
      ["Chelsea", 5], ["West Ham United", 20, "West Ham"], ["Manchester City", 50, "Man City"],
      ["New York City FC", 70, "NYCFC", "New York City"], ["Swansea City", 92, "Swansea"],
    ],
  },
  {
    prompt: "Name a club Carlos Tevez played for (senior career)",
    answers: [
      ["Manchester City", 15, "Man City"], ["Boca Juniors", 20, "Boca"], ["Manchester United", 20, "Man United", "Man Utd"],
      ["West Ham United", 25, "West Ham"], ["Juventus", 35, "Juve"], ["Corinthians", 55],
      ["Shanghai Shenhua", 88, "Shanghai"],
    ],
  },
  {
    prompt: "Name a club Edinson Cavani played for (senior career, up to 2025)",
    answers: [
      ["Paris Saint-Germain", 10, "PSG", "Paris"], ["Manchester United", 15, "Man United", "Man Utd"],
      ["Napoli", 30], ["Boca Juniors", 50, "Boca"], ["Valencia", 60], ["Palermo", 70],
      ["Danubio", 95],
    ],
  },
  {
    prompt: "Name a club Robbie Keane played for (loans count)",
    answers: [
      ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Liverpool", 30], ["LA Galaxy", 30, "Galaxy"],
      ["Leeds United", 45, "Leeds"], ["Wolverhampton Wanderers", 50, "Wolves"], ["Coventry City", 60, "Coventry"],
      ["West Ham United", 65, "West Ham"], ["Celtic", 70], ["Aston Villa", 75, "Villa"],
      ["Inter Milan", 80, "Inter", "Internazionale"], ["ATK", 92, "Atletico de Kolkata"],
    ],
  },
  {
    prompt: "Name a club Gary Lineker played for",
    answers: [
      ["Leicester City", 15, "Leicester"], ["Tottenham Hotspur", 20, "Tottenham", "Spurs"],
      ["Barcelona", 25, "Barca"], ["Everton", 40], ["Nagoya Grampus", 88, "Nagoya Grampus Eight", "Nagoya"],
    ],
  },
  {
    prompt: "Name a club Ruud van Nistelrooy played for (senior career)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Real Madrid", 20], ["PSV Eindhoven", 35, "PSV"],
      ["Hamburg", 55, "Hamburger SV", "HSV"], ["Heerenveen", 60], ["Malaga", 75], ["Den Bosch", 88, "FC Den Bosch"],
    ],
  },
  {
    prompt: "Name a club Fernando Torres played for (senior career)",
    answers: [
      ["Liverpool", 5], ["Atletico Madrid", 10, "Atletico", "Atleti"], ["Chelsea", 10],
      ["AC Milan", 50, "Milan"], ["Sagan Tosu", 88],
    ],
  },
  {
    prompt: "Name a club Luis Suárez has played for (senior career, up to 2025)",
    answers: [
      ["Liverpool", 5], ["Barcelona", 10, "Barca"], ["Ajax", 30], ["Inter Miami", 30],
      ["Atletico Madrid", 35, "Atletico", "Atleti"], ["Nacional", 60, "Club Nacional"], ["Gremio", 60],
      ["Groningen", 88],
    ],
  },
  {
    prompt: "Name a club Sergio Agüero played for (senior career)",
    answers: [
      ["Manchester City", 5, "Man City"], ["Atletico Madrid", 30, "Atletico", "Atleti"],
      ["Barcelona", 40, "Barca"], ["Independiente", 86],
    ],
  },
  {
    prompt: "Name a club Virgil van Dijk has played for (senior career, up to 2025)",
    answers: [
      ["Liverpool", 5], ["Southampton", 25], ["Celtic", 35], ["Groningen", 88],
    ],
  },
  {
    prompt: "Name a club N'Golo Kanté has played for (senior career, up to 2025)",
    answers: [
      ["Chelsea", 5], ["Leicester City", 20, "Leicester"], ["Al Ittihad", 40, "Al-Ittihad"],
      ["Caen", 70], ["Boulogne", 92, "US Boulogne"],
    ],
  },
  {
    prompt: "Name a club Jordan Henderson has played for (loans count, up to 2025)",
    answers: [
      ["Liverpool", 5], ["Sunderland", 20], ["Brentford", 30], ["Ajax", 35],
      ["Al Ettifaq", 40, "Al-Ettifaq", "Ettifaq"], ["Coventry City", 88, "Coventry"],
    ],
  },
  {
    prompt: "Name a club Ashley Cole played for (loans count)",
    answers: [
      ["Arsenal", 10], ["Chelsea", 10], ["LA Galaxy", 45, "Galaxy"], ["Roma", 50, "AS Roma"],
      ["Derby County", 60, "Derby"], ["Crystal Palace", 88, "Palace"],
    ],
  },
  {
    prompt: "Name a club Jermain Defoe played for (loans count)",
    answers: [
      ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["West Ham United", 25, "West Ham"], ["Sunderland", 25],
      ["Portsmouth", 30, "Pompey"], ["Rangers", 50], ["Bournemouth", 60, "AFC Bournemouth"],
      ["Toronto FC", 88, "Toronto"],
    ],
  },
  {
    prompt: "Name a club Emile Heskey played for",
    answers: [
      ["Liverpool", 10], ["Leicester City", 30, "Leicester"], ["Birmingham City", 40, "Birmingham"],
      ["Aston Villa", 40, "Villa"], ["Wigan Athletic", 45, "Wigan"], ["Bolton Wanderers", 70, "Bolton"],
      ["Newcastle Jets", 88],
    ],
  },
  {
    prompt: "Name a club Jimmy Floyd Hasselbaink played for (senior career)",
    answers: [
      ["Chelsea", 10], ["Leeds United", 25, "Leeds"], ["Middlesbrough", 40, "Boro"],
      ["Atletico Madrid", 50, "Atletico", "Atleti"], ["Charlton Athletic", 50, "Charlton"],
      ["Cardiff City", 60, "Cardiff"], ["Boavista", 75], ["AZ Alkmaar", 85, "AZ"],
      ["Campomaiorense", 90], ["Telstar", 95],
    ],
  },
  {
    prompt: "Name a club Dimitar Berbatov played for",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Tottenham Hotspur", 15, "Tottenham", "Spurs"],
      ["Fulham", 35], ["Bayer Leverkusen", 50, "Leverkusen"], ["Monaco", 60, "AS Monaco"],
      ["CSKA Sofia", 80], ["PAOK", 85], ["Kerala Blasters", 92, "Kerala"],
    ],
  },
  {
    prompt: "Name a club Andy Cole played for (loans count)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Newcastle United", 20, "Newcastle"],
      ["Blackburn Rovers", 40, "Blackburn"], ["Manchester City", 50, "Man City"], ["Arsenal", 60],
      ["Portsmouth", 65, "Pompey"], ["Fulham", 70], ["Sunderland", 70], ["Burnley", 70],
      ["Bristol City", 75], ["Birmingham City", 75, "Birmingham"], ["Nottingham Forest", 88, "Forest", "Nottm Forest"],
    ],
  },
  {
    prompt: "Name a club Peter Schmeichel played for",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Aston Villa", 40, "Villa"],
      ["Manchester City", 45, "Man City"], ["Brondby", 50, "Brøndby"], ["Sporting CP", 60, "Sporting Lisbon", "Sporting"],
      ["Hvidovre", 85], ["Gladsaxe-Hero", 95, "Gladsaxe"],
    ],
  },
  {
    prompt: "Name a club Mikel Arteta played for (loans count, B teams count)",
    answers: [
      ["Arsenal", 5], ["Everton", 20], ["Rangers", 50], ["Real Sociedad", 60],
      ["Paris Saint-Germain", 75, "PSG", "Paris"], ["Barcelona B", 88, "Barcelona", "Barca"],
    ],
  },

  // ---------- Managers ----------
  {
    prompt: "Name a club José Mourinho has managed (club sides only, up to 2025)",
    answers: [
      ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Real Madrid", 25],
      ["Tottenham Hotspur", 30, "Tottenham", "Spurs"], ["Inter Milan", 35, "Inter", "Internazionale"],
      ["Porto", 40, "FC Porto"], ["Roma", 45, "AS Roma"], ["Benfica", 60], ["Fenerbahce", 60],
      ["Uniao de Leiria", 95, "Leiria", "Uniao Leiria"],
    ],
  },
  {
    prompt: "Name a club Carlo Ancelotti has managed (club sides only)",
    answers: [
      ["Real Madrid", 10], ["Chelsea", 15], ["AC Milan", 25, "Milan"], ["Everton", 30],
      ["Bayern Munich", 40, "Bayern"], ["Juventus", 50, "Juve"], ["Paris Saint-Germain", 50, "PSG", "Paris"],
      ["Napoli", 55], ["Parma", 70], ["Reggiana", 95],
    ],
  },
  {
    prompt: "Name a club Pep Guardiola has played for or managed (club sides only)",
    answers: [
      ["Manchester City", 5, "Man City"], ["Barcelona", 10, "Barca"], ["Bayern Munich", 15, "Bayern"],
      ["Brescia", 80], ["Roma", 80, "AS Roma"], ["Al Ahli", 90, "Al-Ahli"],
      ["Dorados de Sinaloa", 95, "Dorados"],
    ],
  },
  {
    prompt: "Name a club Antonio Conte has managed (club sides only, up to 2025)",
    answers: [
      ["Chelsea", 10], ["Tottenham Hotspur", 15, "Tottenham", "Spurs"], ["Juventus", 20, "Juve"],
      ["Inter Milan", 30, "Inter", "Internazionale"], ["Napoli", 35], ["Bari", 70],
      ["Atalanta", 85], ["Siena", 85], ["Arezzo", 95],
    ],
  },
  {
    prompt: "Name a Premier League club Sam Allardyce has managed",
    answers: [
      ["Bolton Wanderers", 20, "Bolton"], ["West Ham United", 25, "West Ham"], ["Leeds United", 30, "Leeds"],
      ["Everton", 35], ["Newcastle United", 40, "Newcastle"], ["Sunderland", 40],
      ["West Bromwich Albion", 45, "West Brom", "WBA"], ["Crystal Palace", 70, "Palace"],
      ["Blackburn Rovers", 86, "Blackburn"],
    ],
  },
  {
    prompt: "Name a club Arsène Wenger managed",
    answers: [
      ["Arsenal", 5], ["Monaco", 40, "AS Monaco"], ["Nagoya Grampus", 75, "Nagoya Grampus Eight", "Nagoya"],
      ["Nancy", 90, "AS Nancy"],
    ],
  },
  {
    prompt: "Name a club Sir Alex Ferguson managed (club sides only)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Aberdeen", 25], ["St Mirren", 70],
      ["East Stirlingshire", 95, "East Stirling"],
    ],
  },
  {
    prompt: "Name a club Rafael Benítez has managed (club sides only, up to 2025)",
    answers: [
      ["Liverpool", 10], ["Newcastle United", 15, "Newcastle"], ["Chelsea", 20], ["Everton", 25],
      ["Valencia", 35], ["Napoli", 40], ["Real Madrid", 40], ["Inter Milan", 45, "Inter", "Internazionale"],
      ["Celta Vigo", 60, "Celta"], ["Panathinaikos", 65], ["Tenerife", 80], ["Osasuna", 85],
      ["Real Valladolid", 88, "Valladolid"], ["Extremadura", 90], ["Dalian Professional", 92, "Dalian", "Dalian Yifang"],
    ],
  },
  {
    prompt: "Name a club Harry Redknapp managed (club sides only)",
    answers: [
      ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Portsmouth", 15, "Pompey"], ["West Ham United", 25, "West Ham"],
      ["Southampton", 35], ["Bournemouth", 40, "AFC Bournemouth"], ["Queens Park Rangers", 45, "QPR"],
      ["Birmingham City", 88, "Birmingham"],
    ],
  },
  {
    prompt: "Name a club Mark Hughes has managed (club sides only)",
    answers: [
      ["Stoke City", 25, "Stoke"], ["Manchester City", 30, "Man City"], ["Blackburn Rovers", 40, "Blackburn"],
      ["Queens Park Rangers", 45, "QPR"], ["Fulham", 50], ["Southampton", 50], ["Bradford City", 88, "Bradford"],
    ],
  },
  {
    prompt: "Name an English club Roy Hodgson has managed",
    answers: [
      ["Crystal Palace", 15, "Palace"], ["Fulham", 20], ["Liverpool", 25], ["West Bromwich Albion", 35, "West Brom", "WBA"],
      ["Watford", 45], ["Blackburn Rovers", 70, "Blackburn"], ["Bristol City", 92],
    ],
  },
  {
    prompt: "Name a club Thomas Tuchel has managed (first teams only)",
    answers: [
      ["Chelsea", 10], ["Bayern Munich", 15, "Bayern"], ["Paris Saint-Germain", 20, "PSG", "Paris"],
      ["Borussia Dortmund", 30, "Dortmund", "BVB"], ["Mainz", 88, "Mainz 05"],
    ],
  },
  {
    prompt: "Name a club Mauricio Pochettino has managed (club sides only)",
    answers: [
      ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Chelsea", 15], ["Paris Saint-Germain", 30, "PSG", "Paris"],
      ["Southampton", 40], ["Espanyol", 88],
    ],
  },
  {
    prompt: "Name a club Unai Emery has managed",
    answers: [
      ["Aston Villa", 5, "Villa"], ["Arsenal", 15], ["Sevilla", 25], ["Paris Saint-Germain", 30, "PSG", "Paris"],
      ["Villarreal", 30], ["Valencia", 50], ["Almeria", 75], ["Spartak Moscow", 80, "Spartak"],
      ["Lorca Deportiva", 95, "Lorca"],
    ],
  },
  {
    prompt: "Name a club Ole Gunnar Solskjær has managed (up to 2025)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Molde", 60], ["Cardiff City", 70, "Cardiff"],
      ["Besiktas", 88, "Beşiktaş"],
    ],
  },
  {
    prompt: "Name a club Erik ten Hag has managed (up to 2025, B teams count)",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Ajax", 15], ["Bayer Leverkusen", 40, "Leverkusen"],
      ["Utrecht", 70, "FC Utrecht"], ["Go Ahead Eagles", 85], ["Bayern Munich II", 92, "Bayern II", "Bayern Munich B"],
    ],
  },
];
