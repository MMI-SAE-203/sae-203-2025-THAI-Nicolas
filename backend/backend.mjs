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
  const film = await pb.collection("films").getOne(id, {
    expand: "invite_associes",
  });

  // Traiter l'URL de l'image principale du film
  film.img = pb.files.getURL(film, film.img);

  // Traiter l'URL de l'image de l'invité associé s'il existe
  if (film.expand?.invite_associes) {
    film.expand.invite_associes.img = pb.files.getURL(
      film.expand.invite_associes,
      film.expand.invite_associes.img
    );
  }

  return film;
}

export async function getActivitesById(id) {
  const activite = await pb.collection("activites").getOne(id);
  return activite;
}

export async function getInviteById(id) {
  const invite = await pb.collection("invites").getOne(id, {
    expand: "evenement", // Assurez-vous que le nom de la relation est correct (singulier)
  });

  // Traiter l'image de l'invité
  invite.img = pb.files.getURL(invite, invite.img);

  // Traiter l'image de l'événement associé si présent
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

export async function getAllEvents() {
  try {
    let evenements = await pb.collection("evenements").getFullList({
      sort: "date",
      expand: "invite_associes", // Ajouter cette ligne pour récupérer les relations
    });

    evenements = evenements.map((evenement) => {
      // Traiter l'image de l'événement
      evenement.img = pb.files.getURL(evenement, evenement.img);

      // Traiter l'image de l'invité associé s'il existe
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

  // Traiter l'URL de l'image principale de l'événement
  evenement.img = pb.files.getURL(evenement, evenement.img);

  // Traiter l'URL de l'image de l'invité associé s'il existe
  if (evenement.expand?.invite_associes) {
    evenement.expand.invite_associes.img = pb.files.getURL(
      evenement.expand.invite_associes,
      evenement.expand.invite_associes.img
    );
  }

  return evenement; // Corriger ici - retournez evenement au lieu de film
}

export async function formatDate(dateString) {
  const date = new Date(dateString);

  // Liste des mois en français
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

  // Récupération des valeurs
  const day = date.getUTCDate(); // Utiliser getUTCDate au lieu de getDate
  const month = months[date.getUTCMonth()]; // Utiliser getUTCMonth au lieu de getMonth
  const hours = date.getUTCHours(); // Utiliser getUTCHours au lieu de getHours

  // Construction de la chaîne formatée
  return `Le ${day} ${month} à ${hours}h`;
}
