import nock from 'nock';

const scopeGetUserList = nock('https://erniacademyusercrd.azurewebsites.net')
  .get('/users')
  .reply(200, [{id: 1, name: 'mockUser'}]);

export {
  scopeGetUserList
};
