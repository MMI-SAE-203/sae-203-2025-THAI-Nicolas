import {
  getFilmsByDate,
  getActivitesByDate,
  getInvitesByName,
  getFilmById,
  getActivitesById,
  getInviteById,
  getActivitesByAnimateurId,
  allActiviteByAnimateurName,
  addFilm,
} from "./backend.mjs";
/*
try {
  const films = await getFilmsByDate();
  console.table(films);
} catch (error) {
  console.error(error);
}
 

try {
  const activites = await getActivitesByDate();
  console.table(activites);
} catch (error) {
  console.error(error);
}


try {
  const invites = await getInvitesByName();
  console.table(invites);
} catch (error) {
  console.error(error);
}
   
try {
  const id = "ewsh6v7g741y2mu";
  const film = await getFilmById(id);
  console.table(film);
} catch (error) {
  console.error(error);
}
  
try {
  const id = "a2l9w5x4h2k11dq";
  const activite = await getActivitesById(id);
  console.table(activite);
} catch (error) {
  console.error(error);
}

try {
  const id = "153f29vax8lrqly";
  const invite = await getInviteById(id);
  console.table(invite);
} catch (error) {
  console.error(error);
}


try {
  const animateurId = "x81yp5i9dyz27dh";
  const activite = await getActivitesByAnimateurId(animateurId);
  console.table(activite);
} catch (error) {
  console.error(error);
}

try {
  const activites = await allActiviteByAnimateurName("Doumbe");
  console.table(activites);
} catch (error) {
  console.error(error);
}
  */
try {
  const data = {
    titre: "Les 4 fantastiques",
    date_sortie: "2025",
    realisateur: "Stan Lee",
  };
  await addFilm(data);
  console.log("Film ajouté");
} catch (error) {
  console.error(error);
}
