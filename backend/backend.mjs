import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export async function getFilmsByDate() {
  const films = await pb.collection("films").getFullList({
    sort: "date_projection",
  });
  return films;
}

export async function getActivitesByDate() {
  const activites = await pb.collection("activites").getFullList({
    sort: "date_projection",
  });
  return activites;
}

export async function getInvitesByName() {
  const invites = await pb.collection("invites").getFullList({
    sort: "nom",
  });
  return invites;
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
