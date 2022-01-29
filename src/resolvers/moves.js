const moves = (parent, args, context, info) => {
  const data = parent.moves;

  return data.map((each) => ({
    name: each.move.name,
    moveUrl: each.move.url,
  }));
};

module.exports = moves;
