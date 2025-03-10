/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4286007220",
        "max": 0,
        "min": 0,
        "name": "titre",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "date3633048593",
        "max": "",
        "min": "",
        "name": "date_sortie",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "date1278724480",
        "max": "",
        "min": "",
        "name": "date_projection",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "file3150104748",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "img",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1200832254",
        "max": 0,
        "min": 0,
        "name": "realisateur",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2167367317",
        "max": 0,
        "min": 0,
        "name": "limite_age",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3555570144",
        "max": 0,
        "min": 0,
        "name": "production",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2220277813",
        "max": null,
        "min": null,
        "name": "duree",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1462424745",
        "max": 0,
        "min": 0,
        "name": "synopsis",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file2093472300",
        "maxSelect": 1,
        "maxSize": 0,
        "mimeTypes": [],
        "name": "video",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": [],
        "type": "file"
      },
      {
        "hidden": false,
        "id": "select1318551132",
        "maxSelect": 2,
        "name": "salle",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Salle 1",
          "Salle 2",
          "Salle 3",
          "Salle des ateliers"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1419297528",
        "max": 0,
        "min": 0,
        "name": "bio_realisateur",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select2203071480",
        "maxSelect": 1,
        "name": "genre",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Thriller",
          "Paranormal",
          "Zombie",
          "Slasher",
          "Psychologique",
          "Gore"
        ]
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_95057082",
    "indexes": [],
    "listRule": null,
    "name": "films",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082");

  return app.delete(collection);
})
