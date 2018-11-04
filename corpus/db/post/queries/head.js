const head = message => {
  if (message === undefined || message === {}) {
    return {};
  }
  // needs validation json
  return message;
};

export default head;
