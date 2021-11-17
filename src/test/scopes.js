import nock from 'nock';

const nockApi = () => nock('https://erniacademyusercrd.azurewebsites.net');

const scopeGetUserList = () => nockApi()
  .get(/users/i)
  .reply(200, [{id: 1, name: 'mockUser'}]);

export {
  scopeGetUserList
};
