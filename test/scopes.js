import nock from 'nock';

const scopeGetUserList = () => nock('https://erniacademyusercrd.azurewebsites.net')
  .defaultReplyHeaders({
    'access-control-allow-origin': '*',
    'access-control-allow-credentials': 'true'
  })
  .get('/users')
  .reply(200, [{id: 1, name: 'mockUser'}]);

export {
  scopeGetUserList
};
