import PocketBase from "pocketbase";
const pb = new PocketBase("https://festivhalloween.nicolas-thai.eu:443");

export { pb };

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
  const film = await pb.collection("films").getOne(id, {
    expand: "invite_associes",
  });

  film.img = pb.files.getURL(film, film.img);

  if (film.expand?.invite_associes) {
    film.expand.invite_associes.img = pb.files.getURL(
      film.expand.invite_associes,
      film.expand.invite_associes.img
    );
  }

  return film;
}

export async function getActivitesById(id) {
  const activite = await pb.collection("activites").getOne(id, {
    expand: "animateur",
  });
  activite.img = pb.files.getURL(activite, activite.img);

  if (activite.expand?.animateur) {
    activite.expand.animateur.img = pb.files.getURL(
      activite.expand.animateur,
      activite.expand.animateur.img
    );
  }

  return activite;
}

export async function getInviteById(id) {
  const invite = await pb.collection("invites").getOne(id, {
    expand: "evenement",
  });

  invite.img = pb.files.getURL(invite, invite.img);

  if (invite.expand?.evenement && invite.expand.evenement.img) {
    invite.expand.evenement.img = pb.files.getURL(
      invite.expand.evenement,
      invite.expand.evenement.img
    );
  }

  return invite;
}

export async function getActivitesByAnimateurId(animateurId) {
  const activites = await pb.collection("activites").getFullList({
    filter: `animateur ="${animateurId}"`,
    sort: "date_projection",
  });
  return activites;
}

export async function allActiviteByAnimateurName(nom) {
  const activites = await pb.collection("activites").getFullList({
    filter: `animateur.nom = '${nom}'`,
    expand: "animateur",
  });
  return activites;
}

export async function addFilm(data) {
  await pb.collection("films").create(data);
}

//Autres fonctions pour mon projets (en dehors des fonctions demandées)

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

export async function getAllEvents() {
  try {
    let evenements = await pb.collection("evenements").getFullList({
      sort: "date",
      expand: "invite_associes",
    });

    evenements = evenements.map((evenement) => {
      evenement.img = pb.files.getURL(evenement, evenement.img);

      if (evenement.expand?.invite_associes) {
        evenement.expand.invite_associes.img = pb.files.getURL(
          evenement.expand.invite_associes,
          evenement.expand.invite_associes.img
        );
      }

      return evenement;
    });

    return evenements;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getEventById(id) {
  const evenement = await pb.collection("evenements").getOne(id, {
    expand: "invite_associes",
  });

  evenement.img = pb.files.getURL(evenement, evenement.img);

  if (evenement.expand?.invite_associes) {
    evenement.expand.invite_associes.img = pb.files.getURL(
      evenement.expand.invite_associes,
      evenement.expand.invite_associes.img
    );
  }

  return evenement;
}

export async function formatDate(dateString) {
  const date = new Date(dateString);

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const hours = date.getUTCHours();

  return `Le ${day} ${month} à ${hours}h`;
}

export async function addFormMessage(data) {
  try {
    await pb.collection("formulaire").create(data);
    return {
      success: true,
      message: "Votre message a été envoyé avec succès.",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi de votre message.",
    };
  }
}
