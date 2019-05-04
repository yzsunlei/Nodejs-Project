'use strict';

module.exports = function(User) {
  User.sayHi = function(callback) {
    callback(null, 'Hi');
  };

  User.remoteMethod(
    'sayHi',
    {
      'accepts': [],
      'returns': [
        {'arg': 'result', 'type': 'string'}
      ],
      'http': {
        'verb': 'get',
        'path': '/say-hi'
      }
    }
  );
};
