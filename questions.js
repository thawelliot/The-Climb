// Question bank.
// Each answer is [name, points, ...aliases]. Points run 0–100: the more
// obvious the answer, the fewer points it earns.
// Prompts with a date range are capped where the facts are confirmed;
// extend the range (and the answers) as new seasons finish.

const QUESTIONS = [
  {
    prompt: "Name a country that has won the men's World Cup",
    answers: [
      ["Brazil", 10], ["Argentina", 15], ["Germany", 20, "West Germany"],
      ["France", 25], ["Italy", 35], ["England", 40], ["Spain", 45],
      ["Uruguay", 80],
    ],
  },
  {
    prompt: "Name a country that has won the men's European Championship",
    answers: [
      ["Spain", 15], ["Portugal", 25], ["Italy", 30], ["Germany", 30, "West Germany"],
      ["France", 35], ["Netherlands", 60, "Holland"], ["Greece", 70],
      ["Denmark", 75], ["Czechoslovakia", 90], ["Soviet Union", 95, "USSR"],
    ],
  },
  {
    prompt: "Name a club that has won the Premier League",
    answers: [
      ["Manchester United", 10, "Man United", "Man Utd"], ["Manchester City", 10, "Man City"],
      ["Liverpool", 20], ["Chelsea", 25], ["Arsenal", 25],
      ["Leicester City", 60, "Leicester"], ["Blackburn Rovers", 85, "Blackburn"],
    ],
  },
  {
    prompt: "Name a Ballon d'Or winner from 2000 to 2024",
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
    prompt: "Name a club Zlatan Ibrahimović played for",
    answers: [
      ["Paris Saint-Germain", 15, "PSG", "Paris"], ["Manchester United", 20, "Man United", "Man Utd"],
      ["AC Milan", 25, "Milan"], ["Barcelona", 40, "Barca"], ["LA Galaxy", 45, "Galaxy"],
      ["Juventus", 50, "Juve"], ["Inter Milan", 55, "Inter", "Internazionale"],
      ["Ajax", 60], ["Malmö", 90, "Malmo FF", "Malmo"],
    ],
  },
  {
    prompt: "Name a club Cristiano Ronaldo has played for",
    answers: [
      ["Manchester United", 10, "Man United", "Man Utd"], ["Real Madrid", 10],
      ["Juventus", 30, "Juve"], ["Al Nassr", 40, "Al-Nassr"],
      ["Sporting CP", 75, "Sporting Lisbon", "Sporting"],
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
    prompt: "Name a Premier League Golden Boot winner (1993–2025)",
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
    prompt: "Name a country that has hosted the men's World Cup",
    answers: [
      ["Qatar", 10], ["Russia", 15], ["Brazil", 15], ["Germany", 20, "West Germany"],
      ["United States", 20, "USA", "America", "US"], ["South Africa", 25], ["France", 30],
      ["England", 35], ["Japan", 40], ["Mexico", 40], ["South Korea", 45, "Korea"],
      ["Spain", 45], ["Italy", 45], ["Canada", 50], ["Argentina", 60],
      ["Uruguay", 75], ["Chile", 85], ["Sweden", 85], ["Switzerland", 90],
    ],
  },
  {
    prompt: "Name a club that won the Champions League (1993–2025)",
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
    prompt: "Name an English club that has won the European Cup or Champions League (up to 2025)",
    answers: [
      ["Liverpool", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Chelsea", 25],
      ["Manchester City", 30, "Man City"], ["Nottingham Forest", 70, "Forest", "Nottm Forest"],
      ["Aston Villa", 85, "Villa"],
    ],
  },
  {
    prompt: "Name a London club that has played in the Premier League",
    answers: [
      ["Arsenal", 5], ["Chelsea", 5], ["Tottenham Hotspur", 10, "Tottenham", "Spurs"],
      ["West Ham United", 20, "West Ham"], ["Crystal Palace", 35, "Palace"],
      ["Fulham", 40], ["Brentford", 45], ["Queens Park Rangers", 70, "QPR"],
      ["Charlton Athletic", 80, "Charlton"], ["Wimbledon", 90],
    ],
  },
  {
    prompt: "Name someone who managed Man Utd (incl. interim) between 2013 and 2024",
    answers: [
      ["Erik ten Hag", 10, "ten Hag"], ["Jose Mourinho", 15, "Mourinho"], ["David Moyes", 20, "Moyes"],
      ["Ole Gunnar Solskjaer", 20, "Solskjaer", "Ole"], ["Ruben Amorim", 25, "Amorim"],
      ["Louis van Gaal", 30, "van Gaal", "LVG"], ["Ralf Rangnick", 50, "Rangnick"],
      ["Ryan Giggs", 70, "Giggs"], ["Ruud van Nistelrooy", 70, "van Nistelrooy"],
      ["Michael Carrick", 75, "Carrick"],
    ],
  },
  {
    prompt: "Name a player who played for Arsenal in the 2003–04 Invincibles season",
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
    prompt: "Name a country that reached a men's World Cup final before 2026 but has never won it",
    answers: [
      ["Netherlands", 15, "Holland"], ["Croatia", 20], ["Hungary", 60],
      ["Sweden", 70], ["Czechoslovakia", 80],
    ],
  },
  {
    prompt: "Name a country that has won the Africa Cup of Nations",
    answers: [
      ["Egypt", 15], ["Nigeria", 15], ["Cameroon", 20], ["Senegal", 20],
      ["Ivory Coast", 25, "Cote d'Ivoire"], ["Ghana", 25], ["Algeria", 40], ["Morocco", 40],
      ["South Africa", 50], ["Tunisia", 60], ["Zambia", 65], ["DR Congo", 80, "Zaire", "Democratic Republic of the Congo", "DRC"],
      ["Sudan", 90], ["Congo", 95, "Congo-Brazzaville", "Republic of the Congo"], ["Ethiopia", 95],
    ],
  },
  {
    prompt: "Name the nickname of a club that has played in the Premier League",
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
    prompt: "Name a club José Mourinho has managed",
    answers: [
      ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Real Madrid", 25],
      ["Tottenham Hotspur", 30, "Tottenham", "Spurs"], ["Inter Milan", 35, "Inter", "Internazionale"],
      ["Porto", 40, "FC Porto"], ["Roma", 45, "AS Roma"], ["Benfica", 60], ["Fenerbahce", 60],
      ["Uniao de Leiria", 95, "Leiria", "Uniao Leiria"],
    ],
  },
  {
    prompt: "Name a club Carlo Ancelotti has managed",
    answers: [
      ["Real Madrid", 10], ["Chelsea", 15], ["AC Milan", 25, "Milan"], ["Everton", 30],
      ["Bayern Munich", 40, "Bayern"], ["Juventus", 50, "Juve"], ["Paris Saint-Germain", 50, "PSG", "Paris"],
      ["Napoli", 55], ["Parma", 70], ["Reggiana", 95],
    ],
  },
  {
    prompt: "Name a club Pep Guardiola has played for or managed",
    answers: [
      ["Manchester City", 5, "Man City"], ["Barcelona", 10, "Barca"], ["Bayern Munich", 15, "Bayern"],
      ["Brescia", 80], ["Roma", 80, "AS Roma"], ["Al Ahli", 90, "Al-Ahli"],
      ["Dorados de Sinaloa", 95, "Dorados"],
    ],
  },
  {
    prompt: "Name a goalkeeper who has won the Premier League Golden Glove (2005–2025)",
    answers: [
      ["Ederson", 15], ["Petr Cech", 15, "Cech"], ["David de Gea", 20, "de Gea"], ["Alisson", 20, "Alisson Becker"],
      ["David Raya", 30, "Raya"], ["Joe Hart", 35, "Hart"], ["Thibaut Courtois", 40, "Courtois"],
      ["Edwin van der Sar", 45, "van der Sar"], ["Pepe Reina", 60, "Reina"],
    ],
  },
  {
    prompt: "Name a club that has won La Liga since 1995",
    answers: [
      ["Real Madrid", 5], ["Barcelona", 5, "Barca"], ["Atletico Madrid", 30, "Atletico", "Atleti"],
      ["Valencia", 65], ["Deportivo La Coruna", 85, "Deportivo", "Depor"],
    ],
  },
  {
    prompt: "Name a club that has won Serie A since 2000",
    answers: [
      ["Juventus", 5, "Juve"], ["Inter Milan", 10, "Inter", "Internazionale"], ["AC Milan", 15, "Milan"],
      ["Napoli", 25], ["Roma", 70, "AS Roma"], ["Lazio", 75],
    ],
  },
  {
    prompt: "Name a club that has won the Bundesliga since 2000",
    answers: [
      ["Bayern Munich", 5, "Bayern"], ["Borussia Dortmund", 15, "Dortmund", "BVB"],
      ["Bayer Leverkusen", 25, "Leverkusen"], ["Wolfsburg", 70, "VfL Wolfsburg"],
      ["Stuttgart", 75, "VfB Stuttgart"], ["Werder Bremen", 80, "Bremen"],
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
    prompt: "Name a club Romelu Lukaku has played for (loans count)",
    answers: [
      ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"], ["Inter Milan", 20, "Inter", "Internazionale"],
      ["Everton", 25], ["Napoli", 40], ["Roma", 45, "AS Roma"],
      ["West Bromwich Albion", 55, "West Brom", "WBA"], ["Anderlecht", 60],
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
    prompt: "Name an England men's manager since 1990 (caretakers count)",
    answers: [
      ["Gareth Southgate", 5, "Southgate"], ["Thomas Tuchel", 10, "Tuchel"], ["Roy Hodgson", 20, "Hodgson"],
      ["Fabio Capello", 20, "Capello"], ["Sven-Goran Eriksson", 25, "Eriksson", "Sven"],
      ["Steve McClaren", 30, "McClaren"], ["Sam Allardyce", 35, "Allardyce", "Big Sam"],
      ["Glenn Hoddle", 45, "Hoddle"], ["Kevin Keegan", 45, "Keegan"], ["Terry Venables", 55, "Venables"],
      ["Bobby Robson", 60, "Robson"], ["Lee Carsley", 60, "Carsley"], ["Graham Taylor", 70],
      ["Stuart Pearce", 85, "Pearce"], ["Peter Taylor", 90], ["Howard Wilkinson", 95, "Wilkinson"],
    ],
  },
  {
    prompt: "Name a club that won the FA Cup between 2000 and 2025",
    answers: [
      ["Arsenal", 10], ["Chelsea", 10], ["Manchester United", 15, "Man United", "Man Utd"],
      ["Manchester City", 15, "Man City"], ["Liverpool", 20], ["Crystal Palace", 35, "Palace"],
      ["Leicester City", 45, "Leicester"], ["Wigan Athletic", 75, "Wigan"], ["Portsmouth", 80, "Pompey"],
    ],
  },
  {
    prompt: "Name a club that won the League Cup between 2010 and 2025",
    answers: [
      ["Manchester City", 10, "Man City"], ["Liverpool", 20], ["Manchester United", 20, "Man United", "Man Utd"],
      ["Newcastle United", 30, "Newcastle"], ["Chelsea", 45], ["Swansea City", 75, "Swansea"],
      ["Birmingham City", 85, "Birmingham"],
    ],
  },
  {
    prompt: "Name a club relegated from the Premier League between 2020 and 2025",
    answers: [
      ["Southampton", 15], ["Leicester City", 15, "Leicester"], ["Leeds United", 20, "Leeds"],
      ["Burnley", 20], ["Sheffield United", 25, "Sheff Utd"], ["Norwich City", 30, "Norwich"],
      ["Watford", 30], ["Luton Town", 30, "Luton"], ["Ipswich Town", 30, "Ipswich"],
      ["West Bromwich Albion", 50, "West Brom", "WBA"], ["Fulham", 55], ["Bournemouth", 60, "AFC Bournemouth"],
    ],
  },
  {
    prompt: "Name a Premier League club with 'City' or 'United' in its name",
    answers: [
      ["Manchester United", 5, "Man United", "Man Utd"], ["Manchester City", 5, "Man City"],
      ["Newcastle United", 15, "Newcastle"], ["West Ham United", 20, "West Ham"], ["Leeds United", 20, "Leeds"],
      ["Leicester City", 20, "Leicester"], ["Norwich City", 35, "Norwich"], ["Sheffield United", 35, "Sheff Utd"],
      ["Stoke City", 40, "Stoke"], ["Swansea City", 45, "Swansea"], ["Hull City", 50, "Hull"],
      ["Cardiff City", 55, "Cardiff"], ["Coventry City", 60, "Coventry"], ["Birmingham City", 65, "Birmingham"],
      ["Bradford City", 85, "Bradford"],
    ],
  },
  {
    prompt: "Name a country that has won the Copa América",
    answers: [
      ["Argentina", 5], ["Brazil", 10], ["Uruguay", 25], ["Chile", 40], ["Colombia", 50],
      ["Peru", 70], ["Paraguay", 75], ["Bolivia", 90],
    ],
  },
  {
    prompt: "Name a club Ronaldinho played for",
    answers: [
      ["Barcelona", 5, "Barca"], ["AC Milan", 25, "Milan"], ["Paris Saint-Germain", 30, "PSG", "Paris"],
      ["Flamengo", 55], ["Gremio", 60], ["Atletico Mineiro", 70], ["Fluminense", 85], ["Queretaro", 90],
    ],
  },
  {
    prompt: "Name a club Thierry Henry played for",
    answers: [
      ["Arsenal", 5], ["Barcelona", 15, "Barca"], ["Monaco", 40, "AS Monaco"],
      ["New York Red Bulls", 45, "Red Bulls", "NY Red Bulls"], ["Juventus", 50, "Juve"],
    ],
  },
  {
    prompt: "Name a club Gareth Bale played for",
    answers: [
      ["Tottenham Hotspur", 10, "Tottenham", "Spurs"], ["Real Madrid", 10], ["Southampton", 45],
      ["Los Angeles FC", 70, "LAFC"],
    ],
  },
  {
    prompt: "Name a manager who won the Premier League (1993–2025)",
    answers: [
      ["Alex Ferguson", 5, "Ferguson", "Fergie", "Sir Alex"], ["Pep Guardiola", 5, "Guardiola", "Pep"],
      ["Jurgen Klopp", 10, "Klopp"], ["Arsene Wenger", 10, "Wenger"], ["Jose Mourinho", 15, "Mourinho"],
      ["Arne Slot", 30, "Slot"], ["Claudio Ranieri", 30, "Ranieri"], ["Antonio Conte", 40, "Conte"],
      ["Carlo Ancelotti", 45, "Ancelotti"], ["Roberto Mancini", 45, "Mancini"],
      ["Manuel Pellegrini", 60, "Pellegrini"], ["Kenny Dalglish", 70, "Dalglish"],
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
    prompt: "Name a club Jamie Vardy has played for",
    answers: [
      ["Leicester City", 5, "Leicester"], ["Cremonese", 50], ["Fleetwood Town", 60, "Fleetwood"],
      ["FC Halifax Town", 80, "Halifax", "Halifax Town"], ["Stocksbridge Park Steels", 85, "Stocksbridge"],
    ],
  },
  {
    prompt: "Name a club Zinedine Zidane played for or managed",
    answers: [
      ["Real Madrid", 5], ["Juventus", 20, "Juve"], ["Bordeaux", 50, "Girondins de Bordeaux"], ["Cannes", 70, "AS Cannes"],
    ],
  },
  {
    prompt: "Name a club Antonio Conte has managed",
    answers: [
      ["Chelsea", 10], ["Tottenham Hotspur", 15, "Tottenham", "Spurs"], ["Juventus", 20, "Juve"],
      ["Inter Milan", 30, "Inter", "Internazionale"], ["Napoli", 35], ["Bari", 70],
      ["Atalanta", 85], ["Siena", 85], ["Arezzo", 95],
    ],
  },
  {
    prompt: "Name a club Erling Haaland has played for",
    answers: [
      ["Manchester City", 5, "Man City"], ["Borussia Dortmund", 15, "Dortmund", "BVB"],
      ["Red Bull Salzburg", 40, "Salzburg"], ["Molde", 60], ["Bryne", 80],
    ],
  },
  {
    prompt: "Name a club Harry Kane has played for (loans count)",
    answers: [
      ["Tottenham Hotspur", 5, "Tottenham", "Spurs"], ["Bayern Munich", 10, "Bayern"],
      ["Leyton Orient", 60, "Orient"], ["Millwall", 65], ["Norwich City", 75, "Norwich"],
      ["Leicester City", 75, "Leicester"],
    ],
  },
  {
    prompt: "Name a club Mohamed Salah has played for",
    answers: [
      ["Liverpool", 5], ["Chelsea", 25], ["Roma", 40, "AS Roma"], ["Basel", 50, "FC Basel"],
      ["Fiorentina", 55], ["El Mokawloon", 90, "Arab Contractors", "Al Mokawloon"],
    ],
  },
  {
    prompt: "Name a club Kevin De Bruyne has played for (loans count)",
    answers: [
      ["Manchester City", 5, "Man City"], ["Chelsea", 25], ["Napoli", 30], ["Wolfsburg", 40, "VfL Wolfsburg"],
      ["Genk", 50, "KRC Genk"], ["Werder Bremen", 60, "Bremen"],
    ],
  },
  {
    prompt: "Name a club Luka Modrić has played for (loans count)",
    answers: [
      ["Real Madrid", 5], ["Tottenham Hotspur", 20, "Tottenham", "Spurs"], ["AC Milan", 35, "Milan"],
      ["Dinamo Zagreb", 50, "Dinamo"], ["Zrinjski Mostar", 90, "Zrinjski"], ["Inter Zapresic", 90, "Zapresic"],
    ],
  },
  {
    prompt: "Name a club Neymar has played for",
    answers: [
      ["Barcelona", 10, "Barca"], ["Paris Saint-Germain", 10, "PSG", "Paris"], ["Santos", 35],
      ["Al Hilal", 60, "Al-Hilal"],
    ],
  },
  {
    prompt: "Name a club Robert Lewandowski has played for",
    answers: [
      ["Bayern Munich", 10, "Bayern"], ["Barcelona", 10, "Barca"], ["Borussia Dortmund", 20, "Dortmund", "BVB"],
      ["Lech Poznan", 60, "Lech"], ["Legia Warsaw", 90, "Legia"], ["Znicz Pruszkow", 90, "Znicz"],
      ["Delta Warsaw", 95, "Delta"],
    ],
  },
  {
    prompt: "Name a Premier League club Sam Allardyce has managed",
    answers: [
      ["Bolton Wanderers", 20, "Bolton"], ["West Ham United", 25, "West Ham"], ["Leeds United", 30, "Leeds"],
      ["Everton", 35], ["Newcastle United", 40, "Newcastle"], ["Sunderland", 40],
      ["West Bromwich Albion", 45, "West Brom", "WBA"], ["Blackburn Rovers", 50, "Blackburn"],
      ["Crystal Palace", 50, "Palace"],
    ],
  },
];
