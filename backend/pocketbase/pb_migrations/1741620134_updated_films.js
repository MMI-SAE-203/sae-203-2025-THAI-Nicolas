/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(12, new Field({
    "hidden": false,
    "id": "select2203071480",
    "maxSelect": 6,
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
      "Gore",
      "Fantastique"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // update field
  collection.fields.addAt(12, new Field({
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
  }))

  return app.save(collection)
})
