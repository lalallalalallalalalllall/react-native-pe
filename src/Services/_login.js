import Constance from '../Resources/Constance'
const { LOGIN } = Constance.api

module.exports = (phoneNumber, password) => {
  var result = null
  var url = LOGIN
  if (phoneNumber == '123' && password == '123') {
    result = {
      userId: '012345',
      username: 'food',
      securityKey: 'i_am_some_specific_user_security_key',
      item: [
        {
          id: '1',
          userId: '1',
          color: '#999999',
          username: 'friend 1',
          url: 'https://s3-ap-southeast-1.amazonaws.com/pegeon-vide-test-cdn/video/sample.mp4',
          createdAt: '2018-10-20',
          colorName : 'Black',
          seen : false
        },
        {
          id: '2',
          userId: '2',
          color: '#110011',
          username: 'friend 2',
          url: 'https://s3-ap-southeast-1.amazonaws.com/pegeon-vide-test-cdn/video/sample.mp4',
          createdAt: '2018-10-20',
          colorName : 'oren',
          seen : true
        },
      ],
      friendList: [
        {
          userId: '1',
          username: 'friend 1',
          color: '#9C8327',
          fav: false
        },
        {
          userId: '2',
          username: 'friend 2',
          color: '#465399',
          fav: true
        }
      ],
      notification: {
        friendsRequest: [
          // {
          //   id: '3',
          //   username: 'new friends 3',
          //   fav: false
          // }
        ],
        favUpdate: []
      }
    }
  }

  return result
}