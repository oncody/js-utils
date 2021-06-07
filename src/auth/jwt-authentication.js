import jwt from 'jsonwebtoken';

const DEFAULT_OPTIONS = {
  algorithms: [
    'HS256'
  ]
};

export default class JwtAuthentication {
  constructor(privateKey = process.env.JWT_PRIVATE_KEY, options = DEFAULT_OPTIONS) {
    this.privateKey = privateKey;
    this.options = options;
  }

  verify(request, response) {
    return new Promise((resolve, reject) => {
      let token = request.headers.authorization;
      if (!token || !token.includes('Bearer ')) {
        response.status(401).send();
        reject(Error());
      }

      token = token.substring('Bearer '.length);
      jwt.verify(token, this.privateKey, this.options, err => {
        if (err) {
          response.status(401).send();
          reject(Error());
        } else {
          response.status(200).send();
          resolve();
        }
      });
    });
  }
}
