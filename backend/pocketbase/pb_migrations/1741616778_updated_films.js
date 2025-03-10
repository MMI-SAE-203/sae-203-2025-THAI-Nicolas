/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("date3633048593")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3633048593",
    "max": null,
    "min": null,
    "name": "date_sortie",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date3633048593",
    "max": "",
    "min": "",
    "name": "date_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // remove field
  collection.fields.removeById("number3633048593")

  return app.save(collection)
})
