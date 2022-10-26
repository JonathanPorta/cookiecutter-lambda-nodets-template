'use strict';

// {{ cookiecutter.handler_name }}::handle(event, context, callback)
export const handle = (event, context, callback) => {
  let name = event.name === undefined ? 'Unknown' : event.name;
  callback(null, { Hello: name });
};
