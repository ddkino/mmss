const body = (db, cache, message) => {
  console.log(message);
  const { query, options } = message;
  const collection = db.collection('posts');
  switch (query) {
    case 'byId':
      return collection.findOne({});
    case 'all':
    default:
      return collection.find();
  }
};

export default body;
