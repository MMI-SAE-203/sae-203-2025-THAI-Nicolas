/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // remove field
  collection.fields.removeById("file2093472300")

  // add field
  collection.fields.addAt(14, new Field({
    "exceptDomains": null,
    "hidden": false,
    "id": "url3110319451",
    "name": "url_video",
    "onlyDomains": null,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "url"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_95057082")

  // add field
  collection.fields.addAt(10, new Field({
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
  }))

  // remove field
  collection.fields.removeById("url3110319451")

  return app.save(collection)
})
