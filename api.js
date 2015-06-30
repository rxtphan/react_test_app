var candidates = {
  1: {
    id: 1,
    name: 'Jeb Bush',
    pic: '/images/jebbush.jpg',
    facebookUrl: 'https://www.facebook.com/jebbush',
    twitterUrl: 'https://twitter.com/jebbush',
    websiteUrl: 'https://jeb2016.com/'
  },
  2: {
    id: 2,
    name: 'Ted Cruz',
    pic: '/images/tedcruz.jpg'
  },
  3: {
    id: 3,
    name: 'Donald Trump',
    pic: '/images/donaldtrump.jpg'
  }
}

var api = {
  'candidate': function (id, cb) {
    // if (id === 'all')  {
    //   cb({ candidates: candidates });
    //   return;
    // }

    if (id === 'all')  {
      cb({ candidates: {
        1: {
          id: 1,
          name: 'Jeb Bush',
          pic: '/images/jebbush.jpg',
          facebookUrl: 'https://www.facebook.com/jebbush',
          twitterUrl: 'https://twitter.com/jebbush',
          websiteUrl: 'https://jeb2016.com/'
        },
        2: {
          id: 2,
          name: 'Ted Cruz',
          pic: '/images/tedcruz.jpg'
          }
        }
      });
      return;
    }

    var retObj = {};
    retObj[id] = candidates[id];
    cb({ candidates: retObj });
  }
}

module.exports = api