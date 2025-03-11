import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function getFilmsByDate() {
  try {
    let films = await pb.collection("films").getFullList({
      sort: "date_projection",
    });
    films = films.map((film) => {
      film.img = pb.files.getURL(film, film.img);
      return film;
    });
    return films;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getActivitesByDate() {
  try {
    let activites = await pb.collection("activites").getFullList({
      sort: "date_projection",
    });
    activites = activites.map((activite) => {
      activite.img = pb.files.getURL(activite, activite.img);
      return activite;
    });
    return activites;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getInvitesByName() {
  try {
    let invites = await pb.collection("invites").getFullList({
      sort: "nom",
    });
    invites = invites.map((invite) => {
      invite.img = pb.files.getURL(invite, invite.img);
      return invite;
    });
    return invites;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getFilmById(id) {
  const film = await pb.collection("films").getOne(id);
  return film;
}

export async function getActivitesById(id) {
  const activite = await pb.collection("activites").getOne(id);
  return activite;
}

export async function getInviteById(id) {
  const invite = await pb.collection("invites").getOne(id);
  return invite;
}

export async function getActivitesByAnimateurId(animateurId) {
  const activites = await pb.collection("activites").getFullList({
    filter: `animateur ="${animateurId}"`,
    sort: "date_projection",
  });
  return activites;
}

//Autres fonctions pour mon projets //

export async function getTarifs() {
  const tarifs = await pb.collection("tarifs").getFullList({
    sort: "prix",
  });
  return tarifs;
}

export async function getTarifsMiniature() {
  const minitarifs = await pb.collection("minitarifs").getFullList({
    sort: "prix",
  });
  return minitarifs;
}

export async function getEquipe() {
  const equipe = await pb.collection("equipe").getFullList({
    sort: "nom",
  });
  return equipe;
}
