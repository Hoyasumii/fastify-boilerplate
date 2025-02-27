export const commands = {
  set: {
    env: null,
    "db-url": null,
    port: null,
  },
  add: {
    controller: null,
    route: null,
    model: null,
    repository: {
      interface: null,
      device: null,
      instance: null,
    },
    generator: null,
    middleware: null,
    schema: null,
  },
  kit: {
    enable: ["jwt", "bcrypt", "multipart", "scheduler", "cookies", "cors"],
  },
};

// ruin add controller path my controller
