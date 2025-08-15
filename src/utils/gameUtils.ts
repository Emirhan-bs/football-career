import { Player, SeasonRecord, TriviaQuestion } from '../types/Player';
import { TransferOffer } from '../types/Player';

// Sample clubs by league (renamed from CLUBS_BY_CONTINENT)
export const CLUBS_BY_LEAGUE = {
  'Premier League': [
    { name: 'Manchester City', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png' },
    { name: 'Arsenal', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Arsenal-Logo.png' },
    { name: 'Liverpool', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png' },
    { name: 'Chelsea', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png' },
    { name: 'Manchester United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-United-Logo.png' },
    { name: 'Tottenham Hotspur', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Tottenham-Logo.png' },
    { name: 'Newcastle United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Newcastle-United-Logo.png' },
    { name: 'Aston Villa', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Aston-Villa-Logo.png' },
    { name: 'Brighton', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Brighton-Logo.png' },
    { name: 'West Ham United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/West-Ham-Logo.png' },
    { name: 'AFC Bournemouth', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bournemouth-Logo.png' },
    { name: 'Brentford', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Brentford-Logo.png' },
    { name: 'Crystal Palace', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Crystal-Palace-Logo.png' },
    { name: 'Everton', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Everton-Logo.png' },
    { name: 'Fulham', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Fulham-Logo.png' },
    { name: 'Leeds United', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Leeds-United-Logo.png' },
    { name: 'Nottingham Forest', country: 'England', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/225px-Nottingham_Forest_F.C._logo.svg.png' },
    { name: 'Wolverhampton Wanderers', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Wolverhampton-Wanderers-Logo.png' },
    { name: 'Burnley', country: 'England', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/250px-Burnley_FC_Logo.svg.png' },
    { name: 'Sunderland', country: 'England', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Sunderland-Logo.png' },

  ],
  'La Liga': [
    { name: 'Real Madrid', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png' },
    { name: 'Barcelona', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png' },
    { name: 'Atletico Madrid', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/f/f4/Atletico_Madrid_2017_logo.svg/512px-Atletico_Madrid_2017_logo.svg.png' },
    { name: 'Sevilla', country: 'Spain', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Sevilla-Logo.png' },
    { name: 'Real Betis', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg' },
    { name: 'Villarreal', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5d/Logo_Villarreal_CF_2009.svg/500px-Logo_Villarreal_CF_2009.svg.png' },
    { name: 'Real Sociedad', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/sco/thumb/f/f1/Real_Sociedad_logo.svg/512px-Real_Sociedad_logo.svg.png' }, { name: 'Athletic Club', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/athletic.png' },
    { name: 'Osasuna', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/osasuna.png' },
    { name: 'Celta Vigo', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/celta.png' },
    { name: 'Deportivo Alaves', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/alaves.png' },
    { name: 'Elche', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/elche.png' },
    { name: 'Getafe', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/getafe.png' },
    { name: 'Girona', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/girona.png' },
    { name: 'Levante', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/levante.png' },
    { name: 'Rayo Vallecano', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/lv/thumb/d/d8/Rayo_Vallecano_logo.svg/544px-Rayo_Vallecano_logo.svg.png' },
    { name: 'Espanyol', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/espanyol.png' },
    { name: 'Mallorca', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/mallorca.png' },
    { name: 'Valencia', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/valencia.png' },
    { name: 'Real Oviedo', country: 'Spain', logo: 'https://assets.laliga.com/assets/2019/06/07/xsmall/oviedo.png' },
  ],
  'Serie A': [
    { name: 'Atalanta', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Atalanta%20Bergamo.svg' },
    { name: 'Bologna', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna%20F.C.%201909%20logo.svg' },
    { name: 'Cagliari', country: 'Italy', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Cagliari%20Calcio%201920%20logo.svg' },
    { name: 'Como', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Como%201907%20-%202019.svg' },
    { name: 'Cremonese', country: 'Italy', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/US%20Cremonese%20logo.svg' },
    { name: 'Fiorentina', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/ACF%20Fiorentina%20-%20logo%20(Italy,%202022).svg' },
    { name: 'Genoa', country: 'Italy', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Genoa%20CFC%20-%202022.svg' },
    { name: 'Hellas Verona', country: 'Italy', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Hellas%20Verona%20FC%20logo%20(2020).svg' },
    { name: 'Inter', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Internazionale%20Milano%202021.svg' },
    { name: 'Juventus', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Juventus%20FC%20-%20logo%20black%20(Italy,%202017).svg' },
    { name: 'Lazio', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/S.S.%20Lazio%20logo.svg' },
    { name: 'Lecce', country: 'Italy', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/US%20Lecce.svg' },
    { name: 'AC Milan', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20of%20AC%20Milan.svg' },
    { name: 'Napoli', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/SSC%20Napoli%202025%20(white%20and%20azure).svg' },
    { name: 'Parma', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Parma%20Calcio%201913%20(adozione%202016).svg' },
    { name: 'Pisa', country: 'Italy', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Pisa%20SC%202024.svg' },
    { name: 'AS Roma', country: 'Italy', logo: 'https://it.wikipedia.org/wiki/Special:FilePath/AS%20Roma%20Logo%202017.svg' },
    { name: 'Sassuolo', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stemma%20US%20Sassuolo%20Calcio%202008.svg' },
    { name: 'Torino', country: 'Italy', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/Torino%20FC%20Logo.svg' },
    { name: 'Udinese', country: 'Italy', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Udinese%20Calcio%202010.svg' }
  ],
  'Süper Lig': [
    { name: 'Alanyaspor', country: 'Turkey', logo: 'https://tr.wikipedia.org/wiki/Special:FilePath/Alanyaspor_logo.png' },
    { name: 'Antalyaspor', country: 'Turkey', logo: 'https://ar.wikipedia.org/wiki/Special:FilePath/Antalyaspor_logo.svg' },
    { name: 'Başakşehir', country: 'Turkey', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/Istanbul_Basaksehir_FK_Logo.svg' },
    { name: 'Beşiktaş', country: 'Turkey', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/BesiktasJK-Logo.svg' },
    { name: 'Eyüpspor', country: 'Turkey', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ey%C3%BCpspor_Logosu.png' },
    { name: 'Fatih Karagümrük', country: 'Turkey', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Fatih_Karag%C3%BCmr%C3%BCk_SK_%28logo%29.svg' },
    { name: 'Fenerbahçe', country: 'Turkey', logo: 'https://lv.wikipedia.org/wiki/Special:FilePath/Fenerbah%C3%A7e_logo.svg' },
    { name: 'Galatasaray', country: 'Turkey', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Galatasaray_Sports_Club_Logo.svg' },
    { name: 'Gaziantep', country: 'Turkey', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Gaziantep%20FK.svg' },
    { name: 'Gençlerbirliği', country: 'Turkey', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/Genclerbirligi.svg' },
    { name: 'Göztepe', country: 'Turkey', logo: 'https://pt.wikipedia.org/wiki/Special:FilePath/G%C3%B6ztepe_logo.png' },
    { name: 'Kasımpaşa', country: 'Turkey', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/Kasimpasa_Logo.svg' },
    { name: 'Kayserispor', country: 'Turkey', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Kayserispor.svg' },
    { name: 'Kocaelispor', country: 'Turkey', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/Kocaelispor.svg' },
    { name: 'Konyaspor', country: 'Turkey', logo: 'https://ar.wikipedia.org/wiki/Special:FilePath/Konyaspor_logo.svg' },
    { name: 'Rizespor', country: 'Turkey', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Caykur_Rizespor_%28logo%29.svg' },
    { name: 'Samsunspor', country: 'Turkey', logo: 'https://he.wikipedia.org/wiki/Special:FilePath/Logo_Samsunspor_2020.svg' },
    { name: 'Trabzonspor', country: 'Turkey', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Trabzonspor_logosu.svg' }
  ],
  'Bundesliga': [
    { name: 'Bayern Munich', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Bayern%20M%C3%BCnchen%20logo%20(2017).svg' },
    { name: 'Borussia Dortmund', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borussia_Dortmund_logo.svg' },
    { name: 'RB Leipzig', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Rb-Leipzig.svg' },
    { name: 'Bayer Leverkusen', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg' },
    { name: 'Eintracht Frankfurt', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/84/FC_Eintracht_Frankfurt_Logo.svg/512px-FC_Eintracht_Frankfurt_Logo.svg.png' },
    { name: 'VfL Wolfsburg', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/VfL_Wolfsburg_Logo.svg' },
    { name: 'SC Freiburg', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/als/thumb/f/f1/SC-Freiburg_Logo-neu.svg/500px-SC-Freiburg_Logo-neu.svg.png' },
    { name: 'Union Berlin', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Union_Berlin_Logo.svg' },
    { name: 'FC Augsburg', country: 'Germany', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20FC%20Augsburg%202024.svg' },
    { name: 'Werder Bremen', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/SV-Werder-Bremen-Logo.svg' },
    { name: 'Borussia Mönchengladbach', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borussia_M%C3%B6nchengladbach_logo.svg' },
    { name: 'Mainz 05', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Mainz%2005.svg' },
    { name: '1. FC Köln', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Koeln_Logo_2014%E2%80%93.svg' },
    { name: 'TSG Hoffenheim', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20TSG%20Hoffenheim.svg' },
    { name: '1. FC Heidenheim', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Heidenheim_1846.svg' },
    { name: 'VfB Stuttgart', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/VfB_Stuttgart_1893_Logo.svg' },
    { name: 'Hamburger SV', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hamburger%20SV%20logo.svg' },
    { name: 'FC St. Pauli', country: 'Germany', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fc_st_pauli_logo.svg' }],
  'Ligue 1': [
    { name: 'Paris Saint-Germain', country: 'France', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-Logo.png' },
    { name: 'Olympique Marseille', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Olympique%20Marseille%20logo.svg' },
    { name: 'Olympique Lyonnais', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a5/Logo_Olympique_Lyonnais_-_2022.svg/500px-Logo_Olympique_Lyonnais_-_2022.svg.png' },
    { name: 'AS Monaco', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/591px-Logo_AS_Monaco_FC_-_2021.svg.png' },
    { name: 'LOSC Lille', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_LOSC_Lille_2018.svg/630px-Logo_LOSC_Lille_2018.svg.png' },
    { name: 'RC Lens', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/d/d7/RC_Lens_Logo.svg/500px-RC_Lens_Logo.svg.png' },
    { name: 'OGC Nice', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20OGC%20Nice%20-%202023.svg' },
    { name: 'Stade Rennais', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Rennais%20FC%20Logo.svg' },
    { name: 'FC Nantes', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Nantes%202019%20logo.svg' },
    { name: 'RC Strasbourg Alsace', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/70/Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg/600px-Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg.png' },
    { name: 'Toulouse FC', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toulouse%20FC%202018%20logo.svg' },
    { name: 'Angers SCO', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/88/Logo_Angers_SCO_2024.svg/512px-Logo_Angers_SCO_2024.svg.png' },
    { name: 'AJ Auxerre', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f6/Logo_AJ_Auxerre_2024.svg/810px-Logo_AJ_Auxerre_2024.svg.png' },
    { name: 'Stade Brestois 29', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Brestois%2029%20logo.svg' },
    { name: 'Le Havre AC', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/e/e6/Logo_Havre_AC_2012.svg/500px-Logo_Havre_AC_2012.svg.png' },
    { name: 'FC Lorient', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Logo_FC_Lorient_Bretagne-Sud.svg/558px-Logo_FC_Lorient_Bretagne-Sud.svg.png' },
    { name: 'Paris FC', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Paris%20FC%202024.svg' },
    { name: 'FC Metz', country: 'France', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metz%202021%20Logo.svg' },
  ],
  'Eredivisie': [
    { name: 'Ajax', country: 'Netherlands', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Ajax-Logo.png' },
    { name: 'AZ Alkmaar', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/AZ_Alkmaar.svg' },
    { name: 'Excelsior', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Excelsior_Rotterdam_logo_2021.svg' },
    { name: 'Feyenoord', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Feyenoord_logo_since_2024.svg' },
    { name: 'Fortuna Sittard', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fortuna-sittard.svg' },
    { name: 'Go Ahead Eagles', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Go_Ahead_Eagles_logo.svg' },
    { name: 'FC Groningen', country: 'Netherlands', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Groningen_logo.svg' },
    { name: 'SC Heerenveen', country: 'Netherlands', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo_sc_Heerenveen_2024.svg' },
    { name: 'Heracles Almelo', country: 'Netherlands', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Heracles_Almelo_%28logo%29.svg' },
    { name: 'NAC Breda', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_NAC_Breda.svg' },
    { name: 'NEC Nijmegen', country: 'Netherlands', logo: 'https://de.wikipedia.org/wiki/Special:FilePath/NEC_Nijmegen.svg' },
    { name: 'PEC Zwolle', country: 'Netherlands', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/PEC%20Zwolle%20logo.svg' },
    { name: 'PSV Eindhoven', country: 'Netherlands', logo: 'https://sco.wikipedia.org/wiki/Special:FilePath/PSV_Eindhoven.svg' },
    { name: 'Sparta Rotterdam', country: 'Netherlands', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Sparta%20Rotterdam%20%28logo%29.svg' },
    { name: 'Telstar', country: 'Netherlands', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Telstar%20Logo.png' },
    { name: 'FC Twente', country: 'Netherlands', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC%20Twente.svg' },
    { name: 'FC Utrecht', country: 'Netherlands', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_FC_Utrecht.svg/949px-Logo_FC_Utrecht.svg.png' },
    { name: 'FC Volendam', country: 'Netherlands', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC%20Volendam%20logo.svg' },
  ],
  'Primeira Liga': [
    { name: 'S.L. Benfica', country: 'Portugal', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/512px-SL_Benfica_logo.svg.png' },
    { name: 'FC Porto', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Porto.svg' },
    { name: 'Sporting CP', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Sporting_CP_crest.svg' },
    { name: 'S.C. Braga', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/S.C._Braga_logo.svg' },
    { name: 'Vitória de Guimarães', country: 'Portugal', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Vit%C3%B3ria%20Guimar%C3%A3es%20(logo).svg' },
    { name: 'Rio Ave', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Rio_Ave_FC_logo.svg' },
    { name: 'Gil Vicente', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Gil_Vicente_F.C._logo.svg' },
    { name: 'Famalicão', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/F.C._Famalic%C3%A3o_logo.svg' },
    { name: 'Moreirense', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Moreirense_F.C._logo.svg' },
    { name: 'G.D. Estoril Praia', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/G.D._Estoril_Praia_logo.svg' },
    { name: 'Estrela da Amadora', country: 'Portugal', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%ADmbolo_Estrela_da_Amadora.svg' },
    { name: 'Arouca', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Arouca.png' },
    { name: 'Casa Pia', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Casa_Pia_A.C._logo.png' },
    { name: 'Nacional', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Nacional_logo.svg' },
    { name: 'Santa Clara', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Santa_Clara_logo.svg' },
    { name: 'Tondela', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Tondela_logo.svg' },
    { name: 'AVS', country: 'Portugal', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/AVS_Futebol_SAD.png' },
    { name: 'Alverca', country: 'Portugal', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/F.C._Alverca_logo.png' },
  ],
  'Brasileirão': [
    { name: 'Atlético Mineiro', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Clube%20Atl%C3%A9tico%20Mineiro%20crest.svg' },
    { name: 'Bahia', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Esporte_Clube_Bahia_logo.svg' },
    { name: 'Botafogo', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Botafogo_de_Futebol_e_Regatas_logo.svg' },
    { name: 'Ceará', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cear%C3%A1_Sporting_Club_logo.svg' },
    { name: 'Corinthians', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Sport_Club_Corinthians_Paulista_Logo.svg' },
    { name: 'Cruzeiro', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Cruzeiro_Esporte_Clube_%28logo%29.svg' },
    { name: 'Flamengo', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Flamengo_braz_logo.svg' },
    { name: 'Fluminense', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FFC_crest.svg' },
    { name: 'Fortaleza', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fortaleza_logo.svg' },
    { name: 'Grêmio', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gremio_logo.svg' },
    { name: 'Internacional', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/SC_Internacional_Brazil_Logo.svg' },
    { name: 'Juventude', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/EC_Juventude.svg' },
    { name: 'Mirassol', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mirassol_FC_logo.png' },
    { name: 'Palmeiras', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Palmeiras_logo.svg' },
    { name: 'Red Bull Bragantino', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red-bull-bragantino.svg' },
    { name: 'Santos', country: 'Brazil', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Santos_FC_logo.svg' },
    { name: 'São Paulo', country: 'Brazil', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brasao_do_Sao_Paulo_Futebol_Clube.svg' },
    { name: 'Sport', country: 'Brazil', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Sport%20Recife.svg' },
    { name: 'Vasco da Gama', country: 'Brazil', logo: 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Vasco%20da%20Gama%202024.svg' },
    { name: 'Vitória', country: 'Brazil', logo: 'https://tr.wikipedia.org/wiki/Special:FilePath/Esporte_Clube_Vit%C3%B3ria_logo.svg' },
  ],
  'MLS': [
    { name: 'Atlanta United', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Atlanta_United_FC_logo.svg' },
    { name: 'Austin FC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Austin_FC_logo.svg' },
    { name: 'CF Montréal', country: 'Canada', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f9/CF_Montr%C3%A9al_%28logo%2C_2023%29.svg/768px-CF_Montr%C3%A9al_%28logo%2C_2023%29.svg.png' },
    { name: 'Charlotte FC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Charlotte_FC_logo.svg' },
    { name: 'Chicago Fire', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Chicago_Fire_logo%2C_2021.svg' },
    { name: 'Columbus Crew', country: 'USA', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Crew_logo_2021.svg' },
    { name: 'FC Cincinnati', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Cincinnati_primary_logo.svg' },
    { name: 'FC Dallas', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Dallas_logo.svg' },
    { name: 'D.C. United', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/D.C._United_logo.svg' },
    { name: 'Houston Dynamo', country: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5a/Houston_Dynamo_FC_%28logo%29.svg/626px-Houston_Dynamo_FC_%28logo%29.svg.png' },
    { name: 'Inter Miami', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Inter_Miami_CF_logo.svg' },
    { name: 'LA Galaxy', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/LA_Galaxy_logo.svg' },
    { name: 'Los Angeles FC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Los_Angeles_FC_logo.svg' },
    { name: 'Minnesota United', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Minnesota_United_FC_logo.svg' },
    { name: 'Nashville SC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Nashville_SC_logo.svg' },
    { name: 'New England Revolution', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/New_England_Revolution_logo.svg' },
    { name: 'New York City FC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/New_York_City_FC_logo.svg' },
    { name: 'New York Red Bulls', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/New_York_Red_Bulls_logo.svg' },
    { name: 'Orlando City', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Orlando_City_SC_logo.svg' },
    { name: 'Philadelphia Union', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Philadelphia_Union_logo.svg' },
    { name: 'Portland Timbers', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Portland_Timbers_logo.svg' },
    { name: 'Real Salt Lake', country: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_Real_Salt_Lake.svg/760px-Logo_Real_Salt_Lake.svg.png' },
    { name: 'San Diego FC', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/San_Diego_FC_logo.svg' },
    { name: 'San Jose Earthquakes', country: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/9/98/San_Jose_Earthquakes_2014.svg/818px-San_Jose_Earthquakes_2014.svg.png' },
    { name: 'Seattle Sounders', country: 'USA', logo: 'https://upload.wikimedia.org/wikipedia/de/thumb/2/27/Seattle_Sounders_FC.svg/702px-Seattle_Sounders_FC.svg.png' },
    { name: 'Sporting Kansas City', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Sporting_Kansas_City_logo.svg' },
    { name: 'St. Louis City', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/St._Louis_City_SC_logo.svg' },
    { name: 'Toronto FC', country: 'Canada', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Toronto_FC_Logo.svg' },
    { name: 'Vancouver Whitecaps', country: 'Canada', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Vancouver_Whitecaps_FC_logo.svg' },
    { name: 'Colorado Rapids', country: 'USA', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Colorado_Rapids_badge.svg' },
  ],
  'Saudi Pro League': [
    { name: 'Al-Ahli', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Ahli_Saudi_FC_logo.svg' },
    { name: 'Al-Ittihad', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Ittihad_Club_logo.svg' },
    { name: 'Al-Ettifaq', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Ettifaq_FC_logo.svg' },
    { name: 'Al-Fateh', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Fateh_SC_logo.svg' },
    { name: 'Al-Fayha', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Fayha_FC_logo.svg' },
    { name: 'Al-Hazem', country: 'Saudi Arabia', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Al-Hazem_FC_Logo.svg/590px-Al-Hazem_FC_Logo.svg.png' },
    { name: 'Al-Hilal', country: 'Saudi Arabia', logo: 'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Hilal_SFC_logo.svg' },
    { name: 'Al-Nassr', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Nassr_FC_logo.svg' },
    { name: 'Al-Riyadh', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Riyadh_SC_logo.svg' },
    { name: 'Al-Shabab', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Shabab_FC_logo.svg' },
    { name: 'Al-Khaleej', country: 'Saudi Arabia', logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Khaleej_Club_2019.svg/512px-Logo_Khaleej_Club_2019.svg.png' },
    { name: 'Al-Kholood', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Kholood_Club_logo.svg' },
    { name: 'Al-Okhdood', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Okhdood_Club_logo.svg' },
    { name: 'Al-Najma', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Najma_SC_logo.svg' },
    { name: 'Al-Qadsiah', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Qadsiah_FC_logo.svg' },
    { name: 'Al-Taawoun', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Taawoun_FC_logo.svg' },
    { name: 'Damac', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/Damac_FC_logo.svg' },
    { name: 'Neom', country: 'Saudi Arabia', logo: 'https://en.wikipedia.org/wiki/Special:FilePath/NEOM_FC_logo.svg' },
  ]
};

// Mapping continents to their leagues
export const CONTINENT_TO_LEAGUES = {
  'Europe': ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Ligue 1', 'Eredivisie', 'Primeira Liga', 'Süper Lig'],
  'South America': ['Brasileirão'],
  'North America': ['MLS'],
  'Asia': ['Saudi Pro League'],
  'Africa': [],
  'Oceania': []
};

// Mapping countries to continents for transfer offers
export const COUNTRY_TO_CONTINENT = {
  'England': 'Europe',
  'Spain': 'Europe',
  'Italy': 'Europe',
  'Germany': 'Europe',
  'France': 'Europe',
  'Netherlands': 'Europe',
  'Portugal': 'Europe',
  'Turkey': 'Europe',
  'Brazil': 'South America',
  'USA': 'North America',
  'Saudi Arabia': 'Asia'
};

// Sample trivia questions
export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Science"
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: "Geography"
  },
  {
    id: 3,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
    category: "Art"
  },
  {
    id: 4,
    question: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: 3,
    category: "Geography"
  },
  {
    id: 5,
    question: "What is 15 × 8?",
    options: ["110", "120", "130", "140"],
    correctAnswer: 1,
    category: "Math"
  },
  {
    id: 6,
    question: "Which year did World War II end?",
    options: ["1944", "1945", "1946", "1947"],
    correctAnswer: 1,
    category: "History"
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science"
  },
  {
    id: 8,
    question: "Which continent is the largest by area?",
    options: ["Africa", "Asia", "North America", "Europe"],
    correctAnswer: 1,
    category: "Geography"
  }
];

export function getRandomTeam(continent: string): string {
  const leagues = CONTINENT_TO_LEAGUES[continent as keyof typeof CONTINENT_TO_LEAGUES] || CONTINENT_TO_LEAGUES['Europe'];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  const teams = CLUBS_BY_LEAGUE[randomLeague as keyof typeof CLUBS_BY_LEAGUE] || CLUBS_BY_LEAGUE['Premier League'];
  const randomTeam = teams[Math.floor(Math.random() * teams.length)];
  return randomTeam.name; // Return only the name string, not the entire object
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function generateRandomStats(position: string): any {
  const baseStats = () => Math.floor(Math.random() * 20) + 60; // 60-79

  if (position === 'GK') {
    return {
      diving: baseStats(),
      handling: baseStats(),
      kicking: baseStats(),
      reflexes: baseStats(),
      speed: baseStats(),
      positioning: baseStats()
    };
  } else {
    return {
      pace: baseStats(),
      shooting: baseStats(),
      passing: baseStats(),
      dribbling: baseStats(),
      defense: baseStats(),
      physical: baseStats()
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function calculateOverallRating(stats: any, position: string): number {
  if (position === 'GK') {
    const { diving, handling, kicking, reflexes, speed, positioning } = stats;
    return Math.round((diving + handling + kicking + reflexes + speed + positioning) / 6);
  } else {
    const { pace, shooting, passing, dribbling, defense, physical } = stats;
    return Math.round((pace + shooting + passing + dribbling + defense + physical) / 6);
  }
}

export function simulateSeasonStats(player: Player): Player {
  const updatedPlayer = { ...player };

  if (player.position === 'GK') {
    const saveRate = Math.round((player.stats.reflexes! + player.stats.diving! + player.stats.speed!) / 3);
    const goalsConceded = Math.max(0, 38 - Math.floor(saveRate / 3));
    const cleanSheets = Math.max(0, 20 - goalsConceded);

    updatedPlayer.seasonStats = {
      saveRate,
      goalsConceded,
      cleanSheets
    };

    // Update career stats
    const totalSeasons = player.careerHistory.length + 1;
    const prevAvgSaveRate = player.careerStats.averageSaveRate || 0;

    updatedPlayer.careerStats = {
      averageSaveRate: Math.round(((prevAvgSaveRate * (totalSeasons - 1)) + saveRate) / totalSeasons),
      totalGoalsConceded: (player.careerStats.totalGoalsConceded || 0) + goalsConceded,
      totalCleanSheets: (player.careerStats.totalCleanSheets || 0) + cleanSheets
    };
  } else {
    // Generate goals and assists based on position and overall rating
    const positionMultiplier = ['ST', 'LW', 'RW'].includes(player.position) ? 1.2 :
      ['CM', 'LM', 'RM'].includes(player.position) ? 0.8 : 0.4;

    const goals = Math.floor((player.overallRating / 10) * positionMultiplier * (Math.random() + 0.5));
    const assists = Math.floor((player.overallRating / 15) * (Math.random() + 0.5));

    updatedPlayer.seasonStats = { goals, assists };

    updatedPlayer.careerStats = {
      totalGoals: (player.careerStats.totalGoals || 0) + goals,
      totalAssists: (player.careerStats.totalAssists || 0) + assists
    };
  }

  return updatedPlayer;
}

export function simulateTransfer(player: Player): string {
  const currentRating = player.overallRating;
  const age = player.age;

  // Better players get better teams, but age matters
  const ageMultiplier = age <= 25 ? 1.1 : age <= 30 ? 1.0 : 0.9;
  const adjustedRating = currentRating * ageMultiplier;

  const leagues = CONTINENT_TO_LEAGUES[player.continent as keyof typeof CONTINENT_TO_LEAGUES] || CONTINENT_TO_LEAGUES['Europe'];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  const teams = CLUBS_BY_LEAGUE[randomLeague as keyof typeof CLUBS_BY_LEAGUE] || CLUBS_BY_LEAGUE['Premier League'];

  // Filter teams based on player rating
  let availableTeams = teams;
  if (adjustedRating >= 85) {
    availableTeams = teams.slice(0, Math.min(8, teams.length)); // Top tier teams
  } else if (adjustedRating >= 75) {
    availableTeams = teams.slice(3, Math.min(18, teams.length)); // Mid tier teams
  } else {
    availableTeams = teams.slice(Math.min(8, teams.length)); // Lower tier teams
  }

  // Ensure we don't stay at the same team
  const filteredTeams = availableTeams.filter(team => team.name !== player.currentTeam);
  const selectedTeam = filteredTeams.length > 0 ? filteredTeams[Math.floor(Math.random() * filteredTeams.length)] : availableTeams[0];
  return selectedTeam.name; // Return only the name string
}

export function generateTransferOffers(player: Player, includeCurrentTeam: boolean = true): TransferOffer[] {
  const currentRating = player.overallRating;
  const age = player.age;

  // Better players get better teams, but age matters
  const ageMultiplier = age <= 25 ? 1.1 : age <= 30 ? 1.0 : 0.9;
  const adjustedRating = currentRating * ageMultiplier;

  // Get teams from all leagues for global transfers
  const allTeams = Object.values(CLUBS_BY_LEAGUE).flat();

  // Create different tiers of teams from all leagues
  const topTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(0, 3),  // Premier League top clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(0, 3),         // La Liga top clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(0, 2),         // Serie A top clubs
  ];

  const midTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(3, 6),  // Premier League mid clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(3, 6),         // La Liga mid clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(2, 5),         // Serie A mid clubs
    ...CLUBS_BY_LEAGUE['Bundesliga'].slice(0, 4),      // Bundesliga mid clubs
    ...CLUBS_BY_LEAGUE['Ligue 1'].slice(0, 3),         // Ligue 1 mid clubs
  ];

  const lowerTierTeams = [
    ...CLUBS_BY_LEAGUE['Premier League'].slice(6),     // Premier League lower clubs
    ...CLUBS_BY_LEAGUE['La Liga'].slice(6),            // La Liga lower clubs
    ...CLUBS_BY_LEAGUE['Serie A'].slice(5),            // Serie A lower clubs
    ...CLUBS_BY_LEAGUE['Bundesliga'].slice(4),         // Bundesliga lower clubs
    ...CLUBS_BY_LEAGUE['Ligue 1'].slice(3),            // Ligue 1 lower clubs
    ...CLUBS_BY_LEAGUE['Eredivisie'],                  // Eredivisie clubs
    ...CLUBS_BY_LEAGUE['MLS'],                         // MLS clubs
  ];

  const offers: TransferOffer[] = [];

  // Add option to stay at current team
  if (includeCurrentTeam) {
    // Find current team's continent
    let currentTeamContinent = player.continent;
    for (const [league, teams] of Object.entries(CLUBS_BY_LEAGUE)) {
      const teamObj = teams.find(team => team.name === player.currentTeam);
      if (teamObj) {
        currentTeamContinent = COUNTRY_TO_CONTINENT[teamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || player.continent;
        break;
      }
    }

    offers.push({
      team: player.currentTeam,
      continent: currentTeamContinent,
      tier: 'mid',
      description: 'Stay with your current club and continue building your legacy'
    });
  }

  // Generate 3-5 offers based on player rating
  const numOffers = Math.floor(Math.random() * 3) + (includeCurrentTeam ? 2 : 3); // 3-5 total offers

  for (let i = 0; i < numOffers; i++) {
    let selectedTeamObj: { name: string; country: string; logo: string };
    let tier: 'top' | 'mid' | 'lower';
    let description: string;
    let continent: string;

    // Determine team tier based on player rating and some randomness
    const random = Math.random();

    if (adjustedRating >= 85 && random < 0.6) {
      // High-rated players get more top tier offers
      selectedTeamObj = topTierTeams[Math.floor(Math.random() * topTierTeams.length)];
      tier = 'top';
      description = 'A prestigious club competing at the highest level';
    } else if (adjustedRating >= 75 && random < 0.7) {
      // Mid-rated players get more mid tier offers
      selectedTeamObj = midTierTeams[Math.floor(Math.random() * midTierTeams.length)];
      tier = 'mid';
      description = 'A solid club with good development opportunities';
    } else {
      // Lower-rated or older players get more lower tier offers
      selectedTeamObj = lowerTierTeams[Math.floor(Math.random() * lowerTierTeams.length)];
      tier = 'lower';
      description = 'A developing club looking to build for the future';
    }

    // Get continent from country
    continent = COUNTRY_TO_CONTINENT[selectedTeamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || 'Europe';

    // Ensure we don't get duplicate teams or current team
    if (!offers.find(offer => offer.team === selectedTeamObj.name)) {
      offers.push({
        team: selectedTeamObj.name, // Use only the name string
        continent,
        tier,
        description
      });
    }
  }

  // If we don't have enough unique offers, fill with random teams from all leagues
  while (offers.length < (includeCurrentTeam ? 4 : 3)) {
    const randomTeamObj = allTeams[Math.floor(Math.random() * allTeams.length)];
    const teamContinent = COUNTRY_TO_CONTINENT[randomTeamObj.country as keyof typeof COUNTRY_TO_CONTINENT] || 'Europe';

    if (!offers.find(offer => offer.team === randomTeamObj.name)) {
      offers.push({
        team: randomTeamObj.name, // Use only the name string
        continent: teamContinent,
        tier: 'mid',
        description: 'An interesting opportunity for your career'
      });
    }
  }

  return offers.slice(0, 5); // Maximum 5 offers
}

export function getTeamLogo(teamName: string): string {
  // Team logo mappings to logo URLs
  const logoMap: { [key: string]: string } = {
    // Premier League
    'Manchester City': 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png',
    'Arsenal': 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    'Liverpool': 'https://logos-world.net/wp-content/uploads/2020/06/Liverpool-Logo.png',
    'Chelsea': 'https://upload.wikimedia.org/wikipedia/sco/c/cc/Chelsea_FC.svg',
    'Manchester United': 'https://upload.wikimedia.org/wikipedia/sco/7/7a/Manchester_United_FC_crest.svg',
    'Tottenham Hotspur': 'https://upload.wikimedia.org/wikipedia/sco/b/b4/Tottenham_Hotspur.svg',
    'Newcastle United': 'https://upload.wikimedia.org/wikipedia/sco/5/56/Newcastle_United_Logo.svg',
    'Aston Villa': 'https://logos-world.net/wp-content/uploads/2020/06/Aston-Villa-Logo.png',
    'Brighton': 'https://upload.wikimedia.org/wikipedia/sco/f/fd/Brighton_%26_Hove_Albion_logo.svg',
    'West Ham United': 'https://logos-world.net/wp-content/uploads/2020/06/West-Ham-Logo.png', 'AFC Bournemouth': 'https://upload.wikimedia.org/wikipedia/en/e/e5/AFC_Bournemouth_%282013%29.svg',
    'Brentford': 'https://upload.wikimedia.org/wikipedia/en/2/2a/Brentford_FC_crest.svg',
    'Crystal Palace': 'https://upload.wikimedia.org/wikipedia/en/b/bf/Crystal_Palace_FC_logo.svg',
    'Everton': 'https://upload.wikimedia.org/wikipedia/en/7/7c/Everton_FC_logo.svg',
    'Fulham': 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg',
    'Leeds United': 'https://logos-world.net/wp-content/uploads/2020/06/Leeds-United-Logo.png',
    'Nottingham Forest': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/225px-Nottingham_Forest_F.C._logo.svg.png',
    'Wolverhampton Wanderers': 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg',
    'Burnley': 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Burnley_FC_Logo.svg/250px-Burnley_FC_Logo.svg.png',
    'Luton Town': 'https://upload.wikimedia.org/wikipedia/en/8/8b/Luton_Town_FC_logo.svg',
    'Sheffield United': 'https://upload.wikimedia.org/wikipedia/en/f/f5/Sheffield_United_FC_logo.svg',
    'Sunderland': 'https://logos-world.net/wp-content/uploads/2020/06/Sunderland-Logo.png',



    // La Liga
    'Real Madrid': 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png',
    'Barcelona': 'https://logos-world.net/wp-content/uploads/2020/06/Barcelona-Logo.png',
    'Atletico Madrid': 'https://upload.wikimedia.org/wikipedia/ar/thumb/f/f4/Atletico_Madrid_2017_logo.svg/512px-Atletico_Madrid_2017_logo.svg.png',
    'Sevilla': 'https://logos-world.net/wp-content/uploads/2020/06/Sevilla-Logo.png',
    'Real Betis': 'https://upload.wikimedia.org/wikipedia/fr/1/13/Real_betis_logo.svg',
    'Villarreal': 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5d/Logo_Villarreal_CF_2009.svg/500px-Logo_Villarreal_CF_2009.svg.png',
    'Real Sociedad': 'https://upload.wikimedia.org/wikipedia/sco/thumb/f/f1/Real_Sociedad_logo.svg/512px-Real_Sociedad_logo.svg.png',
    'Athletic Club': 'https://assets.laliga.com/assets/2019/06/07/xsmall/athletic.png',
    'Osasuna': 'https://assets.laliga.com/assets/2019/06/07/xsmall/osasuna.png',
    'Celta Vigo': 'https://assets.laliga.com/assets/2019/06/07/xsmall/celta.png',
    'Deportivo Alaves': 'https://assets.laliga.com/assets/2019/06/07/xsmall/alaves.png',
    'Elche': 'https://assets.laliga.com/assets/2019/06/07/xsmall/elche.png',
    'Getafe': 'https://assets.laliga.com/assets/2019/06/07/xsmall/getafe.png',
    'Girona': 'https://assets.laliga.com/assets/2019/06/07/xsmall/girona.png',
    'Levante': 'https://assets.laliga.com/assets/2019/06/07/xsmall/levante.png',
    'Rayo Vallecano': 'https://upload.wikimedia.org/wikipedia/lv/thumb/d/d8/Rayo_Vallecano_logo.svg/544px-Rayo_Vallecano_logo.svg.png',
    'Espanyol': 'https://assets.laliga.com/assets/2019/06/07/xsmall/espanyol.png',
    'Mallorca': 'https://assets.laliga.com/assets/2019/06/07/xsmall/mallorca.png',
    'Valencia': 'https://assets.laliga.com/assets/2019/06/07/xsmall/valencia.png',
    'Real Oviedo': 'https://assets.laliga.com/assets/2019/06/07/xsmall/oviedo.png',

    // Bundesliga
    'Bayern Munich': 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Bayern%20M%C3%BCnchen%20logo%20(2017).svg',
    'Borussia Dortmund': 'https://commons.wikimedia.org/wiki/Special:FilePath/Borussia_Dortmund_logo.svg',
    'RB Leipzig': 'https://commons.wikimedia.org/wiki/Special:FilePath/Rb-Leipzig.svg',
    'Bayer Leverkusen': 'https://upload.wikimedia.org/wikipedia/de/f/f7/Bayer_Leverkusen_Logo.svg',
    'Eintracht Frankfurt': 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/84/FC_Eintracht_Frankfurt_Logo.svg/512px-FC_Eintracht_Frankfurt_Logo.svg.png',
    'VfL Wolfsburg': 'https://commons.wikimedia.org/wiki/Special:FilePath/VfL_Wolfsburg_Logo.svg',
    'SC Freiburg': 'https://upload.wikimedia.org/wikipedia/als/thumb/f/f1/SC-Freiburg_Logo-neu.svg/500px-SC-Freiburg_Logo-neu.svg.png',
    'Union Berlin': 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Union_Berlin_Logo.svg',
    'FC Augsburg': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20FC%20Augsburg%202024.svg',
    'Werder Bremen': 'https://commons.wikimedia.org/wiki/Special:FilePath/SV-Werder-Bremen-Logo.svg',
    'Borussia Mönchengladbach': 'https://commons.wikimedia.org/wiki/Special:FilePath/Borussia_M%C3%B6nchengladbach_logo.svg',
    'Mainz 05': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Mainz%2005.svg',
    '1. FC Köln': 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Koeln_Logo_2014%E2%80%93.svg',
    'TSG Hoffenheim': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20TSG%20Hoffenheim.svg',
    '1. FC Heidenheim': 'https://commons.wikimedia.org/wiki/Special:FilePath/1._FC_Heidenheim_1846.svg',
    'VfB Stuttgart': 'https://commons.wikimedia.org/wiki/Special:FilePath/VfB_Stuttgart_1893_Logo.svg',
    'Hamburger SV': 'https://commons.wikimedia.org/wiki/Special:FilePath/Hamburger%20SV%20logo.svg',
    'FC St. Pauli': 'https://commons.wikimedia.org/wiki/Special:FilePath/Fc_st_pauli_logo.svg',

    // Serie A
    'Juventus': 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png',
    'Atalanta': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Atalanta%20Bergamo.svg',
    'Bologna': 'https://commons.wikimedia.org/wiki/Special:FilePath/Bologna%20F.C.%201909%20logo.svg',
    'Cagliari': 'https://fr.wikipedia.org/wiki/Special:FilePath/Cagliari%20Calcio%201920%20logo.svg',
    'Como': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Como%201907%20-%202019.svg',
    'Cremonese': 'https://en.wikipedia.org/wiki/Special:FilePath/US%20Cremonese%20logo.svg',
    'Fiorentina': 'https://commons.wikimedia.org/wiki/Special:FilePath/ACF%20Fiorentina%20-%20logo%20(Italy,%202022).svg',
    'Genoa': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Genoa%20CFC%20-%202022.svg',
    'Hellas Verona': 'https://fr.wikipedia.org/wiki/Special:FilePath/Hellas%20Verona%20FC%20logo%20(2020).svg',
    'Inter': 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Internazionale%20Milano%202021.svg',
    'Lazio': 'https://commons.wikimedia.org/wiki/Special:FilePath/S.S.%20Lazio%20logo.svg',
    'Lecce': 'https://de.wikipedia.org/wiki/Special:FilePath/US%20Lecce.svg',
    'AC Milan': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20of%20AC%20Milan.svg',
    'Napoli': 'https://commons.wikimedia.org/wiki/Special:FilePath/SSC%20Napoli%202025%20(white%20and%20azure).svg',
    'Parma': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Parma%20Calcio%201913%20(adozione%202016).svg',
    'Pisa': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Pisa%20SC%202024.svg',
    'AS Roma': 'https://it.wikipedia.org/wiki/Special:FilePath/AS%20Roma%20Logo%202017.svg',
    'Sassuolo': 'https://commons.wikimedia.org/wiki/Special:FilePath/Stemma%20US%20Sassuolo%20Calcio%202008.svg',
    'Torino': 'https://de.wikipedia.org/wiki/Special:FilePath/Torino%20FC%20Logo.svg',
    'Udinese': 'https://commons.wikimedia.org/wiki/Special:FilePath/Udinese%20Calcio%202010.svg',

    // Ligue 1
    'Paris Saint-Germain': 'https://upload.wikimedia.org/wikipedia/sco/thumb/a/a7/Paris_Saint-Germain_F.C..svg/512px-Paris_Saint-Germain_F.C..svg.png ',
    'Olympique Marseille': 'https://commons.wikimedia.org/wiki/Special:FilePath/Olympique%20Marseille%20logo.svg',
    'Olympique Lyonnais': 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a5/Logo_Olympique_Lyonnais_-_2022.svg/500px-Logo_Olympique_Lyonnais_-_2022.svg.png',
    'AS Monaco': 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/58/Logo_AS_Monaco_FC_-_2021.svg/591px-Logo_AS_Monaco_FC_-_2021.svg.png',
    'LOSC Lille': 'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/Logo_LOSC_Lille_2018.svg/630px-Logo_LOSC_Lille_2018.svg.png',
    'RC Lens': 'https://upload.wikimedia.org/wikipedia/de/thumb/d/d7/RC_Lens_Logo.svg/500px-RC_Lens_Logo.svg.png',
    'OGC Nice': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20OGC%20Nice%20-%202023.svg',
    'Stade Rennais': 'https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Rennais%20FC%20Logo.svg',
    'FC Nantes': 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Nantes%202019%20logo.svg',
    'RC Strasbourg Alsace': 'https://upload.wikimedia.org/wikipedia/fr/thumb/7/70/Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg/600px-Racing_Club_de_Strasbourg_Alsace_%28RC_Strasbourg_-_RCS_-_RCSA%29_logo_officiel.svg.png',
    'Toulouse FC': 'https://commons.wikimedia.org/wiki/Special:FilePath/Toulouse%20FC%202018%20logo.svg',
    'Angers SCO': 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/88/Logo_Angers_SCO_2024.svg/512px-Logo_Angers_SCO_2024.svg.png',
    'AJ Auxerre': 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f6/Logo_AJ_Auxerre_2024.svg/810px-Logo_AJ_Auxerre_2024.svg.png',
    'Stade Brestois 29': 'https://commons.wikimedia.org/wiki/Special:FilePath/Stade%20Brestois%2029%20logo.svg',
    'Le Havre AC': 'https://upload.wikimedia.org/wikipedia/fr/thumb/d/d4/Logo_OGC_Nice_-_2023.svg/512px-Logo_OGC_Nice_-_2023.svg.png',
    'FC Lorient': 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/1d/Logo_FC_Lorient_Bretagne-Sud.svg/558px-Logo_FC_Lorient_Bretagne-Sud.svg.png',
    'Paris FC': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo%20Paris%20FC%202024.svg',
    'FC Metz': 'https://commons.wikimedia.org/wiki/Special:FilePath/FC%20Metz%202021%20Logo.svg',

    // Eredivisie
    'Ajax': 'https://logos-world.net/wp-content/uploads/2020/06/Ajax-Logo.png',
    'AZ Alkmaar': 'https://commons.wikimedia.org/wiki/Special:FilePath/AZ_Alkmaar.svg',
    'Excelsior': 'https://commons.wikimedia.org/wiki/Special:FilePath/Excelsior_Rotterdam_logo_2021.svg',
    'Feyenoord': 'https://commons.wikimedia.org/wiki/Special:FilePath/Feyenoord_logo_since_2024.svg',
    'Fortuna Sittard': 'https://commons.wikimedia.org/wiki/Special:FilePath/Fortuna-sittard.svg',
    'Go Ahead Eagles': 'https://commons.wikimedia.org/wiki/Special:FilePath/Go_Ahead_Eagles_logo.svg',
    'FC Groningen': 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Groningen_logo.svg',
    'SC Heerenveen': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo_sc_Heerenveen_2024.svg',
    'Heracles Almelo': 'https://fr.wikipedia.org/wiki/Special:FilePath/Heracles_Almelo_%28logo%29.svg',
    'NAC Breda': 'https://commons.wikimedia.org/wiki/Special:FilePath/Logo_NAC_Breda.svg',
    'NEC Nijmegen': 'https://de.wikipedia.org/wiki/Special:FilePath/NEC_Nijmegen.svg',
    'PEC Zwolle': 'https://en.wikipedia.org/wiki/Special:FilePath/PEC%20Zwolle%20logo.svg',
    'PSV Eindhoven': 'https://sco.wikipedia.org/wiki/Special:FilePath/PSV_Eindhoven.svg',
    'Sparta Rotterdam': 'https://fr.wikipedia.org/wiki/Special:FilePath/Sparta%20Rotterdam%20%28logo%29.svg',
    'Telstar': 'https://commons.wikimedia.org/wiki/Special:FilePath/Telstar%20Logo.png',
    'FC Twente': 'https://en.wikipedia.org/wiki/Special:FilePath/FC%20Twente.svg',
    'FC Utrecht': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_FC_Utrecht.svg/949px-Logo_FC_Utrecht.svg.png',
    'FC Volendam': 'https://en.wikipedia.org/wiki/Special:FilePath/FC%20Volendam%20logo.svg',

    // Primeira Liga
    'S.L. Benfica': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/512px-SL_Benfica_logo.svg.png',
    'FC Porto': 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Porto.svg',
    'Sporting CP': 'https://en.wikipedia.org/wiki/Special:FilePath/Sporting_CP_crest.svg',
    'S.C. Braga': 'https://en.wikipedia.org/wiki/Special:FilePath/S.C._Braga_logo.svg',
    'Vitória de Guimarães': 'https://fr.wikipedia.org/wiki/Special:FilePath/Vit%C3%B3ria%20Guimar%C3%A3es%20(logo).svg',
    'Rio Ave': 'https://en.wikipedia.org/wiki/Special:FilePath/Rio_Ave_FC_logo.svg',
    'Gil Vicente': 'https://en.wikipedia.org/wiki/Special:FilePath/Gil_Vicente_F.C._logo.svg',
    'Famalicão': 'https://en.wikipedia.org/wiki/Special:FilePath/F.C._Famalic%C3%A3o_logo.svg',
    'Moreirense': 'https://en.wikipedia.org/wiki/Special:FilePath/Moreirense_F.C._logo.svg',
    'G.D. Estoril Praia': 'https://en.wikipedia.org/wiki/Special:FilePath/G.D._Estoril_Praia_logo.svg',
    'Estrela da Amadora': 'https://commons.wikimedia.org/wiki/Special:FilePath/S%C3%ADmbolo_Estrela_da_Amadora.svg',
    'Arouca': 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Arouca.png',
    'Casa Pia': 'https://en.wikipedia.org/wiki/Special:FilePath/Casa_Pia_A.C._logo.png',
    'Nacional': 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Nacional_logo.svg',
    'Santa Clara': 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Santa_Clara_logo.svg',
    'Tondela': 'https://en.wikipedia.org/wiki/Special:FilePath/C.D._Tondela_logo.svg',
    'AVS': 'https://commons.wikimedia.org/wiki/Special:FilePath/AVS_Futebol_SAD.png',
    'Alverca': 'https://upload.wikimedia.org/wikipedia/it/thumb/a/a2/SL_Benfica_logo.svg/512px-SL_Benfica_logo.svg.png',

    // Süper Lig
    'Alanyaspor': 'https://tr.wikipedia.org/wiki/Special:FilePath/Alanyaspor_logo.png',
    'Antalyaspor': 'https://ar.wikipedia.org/wiki/Special:FilePath/Antalyaspor_logo.svg',
    'Başakşehir': 'https://de.wikipedia.org/wiki/Special:FilePath/Istanbul_Basaksehir_FK_Logo.svg',
    'Beşiktaş': 'https://commons.wikimedia.org/wiki/Special:FilePath/BesiktasJK-Logo.svg',
    'Eyüpspor': 'https://commons.wikimedia.org/wiki/Special:FilePath/Ey%C3%BCpspor_Logosu.png',
    'Fatih Karagümrük': 'https://fr.wikipedia.org/wiki/Special:FilePath/Fatih_Karag%C3%BCmr%C3%BCk_SK_%28logo%29.svg',
    'Fenerbahçe': 'https://lv.wikipedia.org/wiki/Special:FilePath/Fenerbah%C3%A7e_logo.svg',
    'Galatasaray': 'https://commons.wikimedia.org/wiki/Special:FilePath/Galatasaray_Sports_Club_Logo.svg',
    'Gaziantep': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Gaziantep%20FK.svg',
    'Gençlerbirliği': 'https://de.wikipedia.org/wiki/Special:FilePath/Genclerbirligi.svg',
    'Göztepe': 'https://pt.wikipedia.org/wiki/Special:FilePath/G%C3%B6ztepe_logo.png',
    'Kasımpaşa': 'https://de.wikipedia.org/wiki/Special:FilePath/Kasimpasa_Logo.svg',
    'Kayserispor': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Kayserispor.svg',
    'Kocaelispor': 'https://de.wikipedia.org/wiki/Special:FilePath/Kocaelispor.svg',
    'Konyaspor': 'https://ar.wikipedia.org/wiki/Special:FilePath/Konyaspor_logo.svg',
    'Rizespor': 'https://fr.wikipedia.org/wiki/Special:FilePath/Caykur_Rizespor_%28logo%29.svg',
    'Samsunspor': 'https://he.wikipedia.org/wiki/Special:FilePath/Logo_Samsunspor_2020.svg',
    'Trabzonspor': 'https://commons.wikimedia.org/wiki/Special:FilePath/Trabzonspor_logosu.svg',

    // Brasileirão
    'Atlético Mineiro': 'https://en.wikipedia.org/wiki/Special:FilePath/Clube%20Atl%C3%A9tico%20Mineiro%20crest.svg',
    'Bahia': 'https://en.wikipedia.org/wiki/Special:FilePath/Esporte_Clube_Bahia_logo.svg',
    'Botafogo': 'https://commons.wikimedia.org/wiki/Special:FilePath/Botafogo_de_Futebol_e_Regatas_logo.svg',
    'Ceará': 'https://commons.wikimedia.org/wiki/Special:FilePath/Cear%C3%A1_Sporting_Club_logo.svg',
    'Corinthians': 'https://en.wikipedia.org/wiki/Special:FilePath/Sport_Club_Corinthians_Paulista_Logo.svg',
    'Cruzeiro': 'https://en.wikipedia.org/wiki/Special:FilePath/Cruzeiro_Esporte_Clube_%28logo%29.svg',
    'Flamengo': 'https://en.wikipedia.org/wiki/Special:FilePath/Flamengo_braz_logo.svg',
    'Fluminense': 'https://en.wikipedia.org/wiki/Special:FilePath/FFC_crest.svg',
    'Fortaleza': 'https://commons.wikimedia.org/wiki/Special:FilePath/Fortaleza_logo.svg',
    'Grêmio': 'https://commons.wikimedia.org/wiki/Special:FilePath/Gremio_logo.svg',
    'Internacional': 'https://commons.wikimedia.org/wiki/Special:FilePath/SC_Internacional_Brazil_Logo.svg',
    'Juventude': 'https://commons.wikimedia.org/wiki/Special:FilePath/EC_Juventude.svg',
    'Mirassol': 'https://commons.wikimedia.org/wiki/Special:FilePath/Mirassol_FC_logo.png',
    'Palmeiras': 'https://en.wikipedia.org/wiki/Special:FilePath/Palmeiras_logo.svg',
    'Red Bull Bragantino': 'https://commons.wikimedia.org/wiki/Special:FilePath/Red-bull-bragantino.svg',
    'Santos': 'https://en.wikipedia.org/wiki/Special:FilePath/Santos_FC_logo.svg',
    'São Paulo': 'https://commons.wikimedia.org/wiki/Special:FilePath/Brasao_do_Sao_Paulo_Futebol_Clube.svg',
    'Sport': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Sport%20Recife.svg',
    'Vasco da Gama': 'https://fr.wikipedia.org/wiki/Special:FilePath/Logo%20Vasco%20da%20Gama%202024.svg',
    'Vitória': 'https://tr.wikipedia.org/wiki/Special:FilePath/Esporte_Clube_Vit%C3%B3ria_logo.svg',

    // MLS
    'Atlanta United': 'https://en.wikipedia.org/wiki/Special:FilePath/Atlanta_United_FC_logo.svg',
    'Austin FC': 'https://en.wikipedia.org/wiki/Special:FilePath/Austin_FC_logo.svg',
    'CF Montréal': 'https://upload.wikimedia.org/wikipedia/fr/thumb/f/f9/CF_Montr%C3%A9al_%28logo%2C_2023%29.svg/768px-CF_Montr%C3%A9al_%28logo%2C_2023%29.svg.png',
    'Charlotte FC': 'https://en.wikipedia.org/wiki/Special:FilePath/Charlotte_FC_logo.svg',
    'Chicago Fire': 'https://en.wikipedia.org/wiki/Special:FilePath/Chicago_Fire_logo%2C_2021.svg',
    'Columbus Crew': 'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Crew_logo_2021.svg',
    'FC Cincinnati': 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Cincinnati_primary_logo.svg',
    'FC Dallas': 'https://en.wikipedia.org/wiki/Special:FilePath/FC_Dallas_logo.svg',
    'D.C. United': 'https://en.wikipedia.org/wiki/Special:FilePath/D.C._United_logo.svg',
    'Houston Dynamo': 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/5a/Houston_Dynamo_FC_%28logo%29.svg/626px-Houston_Dynamo_FC_%28logo%29.svg.png',
    'Inter Miami': 'https://en.wikipedia.org/wiki/Special:FilePath/Inter_Miami_CF_logo.svg',
    'LA Galaxy': 'https://en.wikipedia.org/wiki/Special:FilePath/LA_Galaxy_logo.svg',
    'Los Angeles FC': 'https://en.wikipedia.org/wiki/Special:FilePath/Los_Angeles_FC_logo.svg',
    'Minnesota United': 'https://en.wikipedia.org/wiki/Special:FilePath/Minnesota_United_FC_logo.svg',
    'Nashville SC': 'https://en.wikipedia.org/wiki/Special:FilePath/Nashville_SC_logo.svg',
    'New England Revolution': 'https://en.wikipedia.org/wiki/Special:FilePath/New_England_Revolution_logo.svg',
    'New York City FC': 'https://en.wikipedia.org/wiki/Special:FilePath/New_York_City_FC_logo.svg',
    'New York Red Bulls': 'https://en.wikipedia.org/wiki/Special:FilePath/New_York_Red_Bulls_logo.svg',
    'Orlando City': 'https://en.wikipedia.org/wiki/Special:FilePath/Orlando_City_SC_logo.svg',
    'Philadelphia Union': 'https://en.wikipedia.org/wiki/Special:FilePath/Philadelphia_Union_logo.svg',
    'Portland Timbers': 'https://en.wikipedia.org/wiki/Special:FilePath/Portland_Timbers_logo.svg',
    'Real Salt Lake': 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/54/Logo_Real_Salt_Lake.svg/760px-Logo_Real_Salt_Lake.svg.png',
    'San Diego FC': 'https://en.wikipedia.org/wiki/Special:FilePath/San_Diego_FC_logo.svg',
    'San Jose Earthquakes': 'https://upload.wikimedia.org/wikipedia/de/thumb/9/98/San_Jose_Earthquakes_2014.svg/818px-San_Jose_Earthquakes_2014.svg.png',
    'Seattle Sounders': 'https://upload.wikimedia.org/wikipedia/de/thumb/2/27/Seattle_Sounders_FC.svg/702px-Seattle_Sounders_FC.svg.png',
    'Sporting Kansas City': 'https://en.wikipedia.org/wiki/Special:FilePath/Sporting_Kansas_City_logo.svg',
    'St. Louis City': 'https://en.wikipedia.org/wiki/Special:FilePath/St._Louis_City_SC_logo.svg',
    'Toronto FC': 'https://en.wikipedia.org/wiki/Special:FilePath/Toronto_FC_Logo.svg',
    'Vancouver Whitecaps': 'https://en.wikipedia.org/wiki/Special:FilePath/Vancouver_Whitecaps_FC_logo.svg',
    'Colorado Rapids': 'https://en.wikipedia.org/wiki/Special:FilePath/Colorado_Rapids_badge.svg',

    // Saudi Pro League
    'Al-Ahli': 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Ahli_Saudi_FC_logo.svg',
    'Al-Ittihad': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Ittihad_Club_logo.svg',
    'Al-Ettifaq': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Ettifaq_FC_logo.svg',
    'Al-Fateh': 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Fateh_SC_logo.svg',
    'Al-Fayha': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Fayha_FC_logo.svg',
    'Al-Hazem': 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Al-Hazem_FC_Logo.svg/590px-Al-Hazem_FC_Logo.svg.png',
    'Al-Hilal': 'https://commons.wikimedia.org/wiki/Special:FilePath/Al-Hilal_SFC_logo.svg',
    'Al-Nassr': 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Nassr_FC_logo.svg',
    'Al-Riyadh': 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Riyadh_SC_logo.svg',
    'Al-Shabab': 'https://en.wikipedia.org/wiki/Special:FilePath/Al_Shabab_FC_logo.svg',
    'Al-Khaleej': 'https://upload.wikimedia.org/wikipedia/fr/thumb/4/43/Logo_Khaleej_Club_2019.svg/512px-Logo_Khaleej_Club_2019.svg.png',
    'Al-Kholood': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Kholood_Club_logo.svg',
    'Al-Okhdood': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Okhdood_Club_logo.svg',
    'Al-Najma': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Najma_SC_logo.svg',
    'Al-Qadsiah': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Qadsiah_FC_logo.svg',
    'Al-Taawoun': 'https://en.wikipedia.org/wiki/Special:FilePath/Al-Taawoun_FC_logo.svg',
    'Damac': 'https://en.wikipedia.org/wiki/Special:FilePath/Damac_FC_logo.svg',
    'Neom': 'https://en.wikipedia.org/wiki/Special:FilePath/NEOM_FC_logo.svg',
  };

  // Return the logo URL if available, otherwise return a fallback
  return logoMap[teamName] || `https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=${getTeamInitials(teamName)}`;
}

function getTeamInitials(teamName: string): string {
  const words = teamName.split(' ');
  if (words.length >= 2) {
    return words[0].charAt(0) + words[1].charAt(0);
  }
  return teamName.substring(0, 2).toUpperCase();
}

export function checkRetirement(player: Player): boolean {
  return player.age >= 35;
}

export function generateRetirementStats(player: Player) {
  const totalSeasons = player.careerHistory.length;
  const peakRating = Math.max(...player.careerHistory.map(season => season.overallRating));
  const averageRating = Math.round(
    player.careerHistory.reduce((sum, season) => sum + season.overallRating, 0) / totalSeasons
  );

  // Calculate career highlights
  const teamsPlayedFor = [...new Set(player.careerHistory.map(season => season.team))];

  let bestSeason;
  if (player.position === 'GK') {
    bestSeason = player.careerHistory.reduce((best, season) =>
      (season.cleanSheets || 0) > (best.cleanSheets || 0) ? season : best
    );
  } else {
    bestSeason = player.careerHistory.reduce((best, season) =>
      ((season.goals || 0) + (season.assists || 0)) > ((best.goals || 0) + (best.assists || 0)) ? season : best
    );
  }

  return {
    totalSeasons,
    peakRating,
    averageRating,
    teamsPlayedFor,
    bestSeason,
    retirementAge: player.age
  };
}

export function updatePlayerAfterSeason(player: Player): Player {
  const updatedPlayer = simulateSeasonStats(player);

  // Add season to history
  const seasonRecord: SeasonRecord = {
    season: player.careerHistory.length + 1,
    team: player.currentTeam,
    age: player.age,
    overallRating: player.overallRating,
    ...(player.position === 'GK'
      ? {
        saveRate: updatedPlayer.seasonStats.saveRate,
        goalsConceded: updatedPlayer.seasonStats.goalsConceded,
        cleanSheets: updatedPlayer.seasonStats.cleanSheets
      }
      : {
        goals: updatedPlayer.seasonStats.goals,
        assists: updatedPlayer.seasonStats.assists
      }
    )
  };

  updatedPlayer.careerHistory = [...player.careerHistory, seasonRecord];

  // Age progression and transfer
  updatedPlayer.age += 3;
  // Note: Team transfer is now handled separately in the transfer selection phase

  return updatedPlayer;
}

export function getRandomTriviaQuestion(): TriviaQuestion {
  return TRIVIA_QUESTIONS[Math.floor(Math.random() * TRIVIA_QUESTIONS.length)];
}

export function calculateQuizScore(timeLeft: number, maxTime: number, correct: boolean): number {
  if (!correct) return -15;

  const timeBonus = (timeLeft / maxTime) * 10;

  if (timeBonus >= 8) return 15; // Very fast
  if (timeBonus >= 5) return 10; // Medium speed
  return 5; // Slow but correct
}