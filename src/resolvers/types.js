const types = (parent, args, context, info) => {
  const data = parent.types;

  console.log("PARENT DATA", parent);

  return data.map((each) => ({
    name: each.type.name,
    typeUrl: each.type.url,
  }));
};

module.exports = types;
