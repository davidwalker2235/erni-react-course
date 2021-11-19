import nock from 'nock';

const scopeGetUserList = () => nock('https://erniacademyusercrd.azurewebsites.net')
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true'
  })
  .get('/users')
  .reply(200, [{id: 1, name: 'mockUser'}]);

const scopeGetNoUserList = () => nock('https://erniacademyusercrd.azurewebsites.net')
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true'
  })
  .get('/users')
  .reply(200, []);

const scopeDeleteUser = () => nock('https://erniacademyusercrd.azurewebsites.net')
  .persist()
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true'
  })
  .intercept("/users/1", "OPTIONS")
  .reply(200, null, {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application:json"
  })
  .delete('/users/1')
  .reply(200);

export {
  scopeGetUserList,
  scopeGetNoUserList,
  scopeDeleteUser
};
