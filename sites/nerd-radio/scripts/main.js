'use strict';
const dataEntries = [
  {
    "id": 0,
    "date": "2/27",
    "title": "Change",
    "artist": "Yoshida Brothers x Monkey Majik",
    "vid": "zc4AkEC_UWU",
    "userId": "5"
  },
  {
    "id": 1,
    "date": "3/1",
    "title": "Free Fallin'",
    "artist": "John Mayer",
    "vid": "20Ov0cDPZy8",
    "userId": "4"
  },
  {
    "id": 2,
    "date": "3/1",
    "title": "Say You Won't Let Go",
    "artist": "James Arthur",
    "vid": "0yW7w8F2TVA",
    "userId": "0"
  },
  {
    "id": 3,
    "date": "3/1",
    "title": "讓我留在你身邊",
    "artist": "陳奕迅",
    "vid": "y_cRDZXc3Hk",
    "userId": "1"
  },
  {
    "id": 4,
    "date": "3/2",
    "title": "Jan Egeland",
    "artist": "Ylvis",
    "vid": "Yn-oemgzlEU",
    "userId": "2"
  },
  {
    "id": 5,
    "date": "3/4",
    "title": "Work from Home",
    "artist": "Fifth Harmony",
    "vid": "5GL9JoH4Sws",
    "userId": "0"
  },
  {
    "id": 6,
    "date": "3/5",
    "title": "什麼時候她",
    "artist": "李英宏 ft. 蛋堡",
    "vid": "4TundgWpJA4",
    "userId": "5"
  },
  {
    "id": 7,
    "date": "3/5",
    "title": "Closer",
    "artist": "The Chainsmokers",
    "vid": "PT2_F-1esPk",
    "userId": "1"
  },
  {
    "id": 8,
    "date": "3/6",
    "title": "Supermarket Flowers",
    "artist": "Ed Sheeran",
    "vid": "bIB8EWqCPrQ",
    "userId": "4"
  },
  {
    "id": 9,
    "date": "3/7",
    "title": "愛如潮水",
    "artist": "張信哲 cover by 藍采韻",
    "vid": "3o7JM-HcN9M",
    "userId": "5"
  },
  {
    "id": 10,
    "date": "3/7",
    "title": "飛",
    "artist": "林宥嘉",
    "vid": "fxD1_KYic20",
    "userId": "4"
  },
  {
    "id": 11,
    "date": "3/8",
    "title": "How Far I'll Go",
    "artist": "Alessia Cara",
    "vid": "ZNra8eK0K6k",
    "userId": "0"
  },
  {
    "id": 12,
    "date": "3/10",
    "title": "下雨的晚上",
    "artist": "黃玠",
    "vid": "aR8BSYCvbvo",
    "userId": "5"
  },
  {
    "id": 13,
    "date": "3/13",
    "title": "Go Now (from Sing Street)",
    "artist": "Adam Levine",
    "vid": "xIY_b10iehY",
    "userId": "0"
  },
  {
    "id": 14,
    "date": "3/14",
    "title": "手機仔（一）",
    "artist": "盧廣仲",
    "vid": "YmIxmbGZbAQ",
    "userId": "4"
  },
  {
    "id": 15,
    "date": "3/15",
    "title": "Just A Dream (Cover)",
    "artist": "Sam Tsui & Christina Grimmie",
    "vid": "a2RA0vsZXf8",
    "userId": "1"
  },
  {
    "id": 16,
    "date": "3/15",
    "title": "Stress Out",
    "artist": "21 Pilots",
    "vid": "pXRviuL6vMY",
    "userId": "3"
  },
  {
    "id": 17,
    "date": "3/15",
    "title": "Boom Clap",
    "artist": "Charli XCX ",
    "vid": "AOPMlIIg_38",
    "userId": "3"
  },
  {
    "id": 18,
    "date": "3/15",
    "title": "平凡之路",
    "artist": "低調組合",
    "vid": "HmupSES_nAI",
    "userId": "3"
  },
  {
    "id": 19,
    "date": "3/15",
    "title": "泡沫",
    "artist": "宇宙大皮褲",
    "vid": "GHXr4bBxHCo",
    "userId": "3"
  },
  {
    "id": 20,
    "date": "3/19",
    "title": "Something Just Like This",
    "artist": "The Chainsmoker & Coldplay",
    "vid": "FM7MFYoylVs",
    "userId": "6"
  },
  {
    "id": 21,
    "date": "3/19",
    "title": "On the road 在路上",
    "artist": "Nightcap 睡帽樂團",
    "vid": "LHXixwIPqW4",
    "userId": "5"
  },
  {
    "id": 22,
    "date": "3/19",
    "title": "Belief",
    "artist": "John Mayer",
    "vid": "21UivrZ91vQ",
    "userId": "4"
  },
  {
    "id": 23,
    "date": "3/20",
    "title": "Solo Dance",
    "artist": "Martin Jensen",
    "vid": "ginBV6aeVlc",
    "userId": "6"
  },
  {
    "id": 24,
    "date": "3/21",
    "title": "演員",
    "artist": "薛之謙",
    "vid": "XKuL5xaKZHM",
    "userId": "0"
  },
  {
    "id": 25,
    "date": "3/21",
    "title": "Back to the World",
    "artist": "滅火器",
    "vid": "9cQsz732UsA",
    "userId": "1"
  },
  {
    "id": 26,
    "date": "3/21",
    "title": "Stolen Dance",
    "artist": "Milky Chance",
    "vid": "iX-QaNzd-0Y",
    "userId": "5"
  },
  {
    "id": 27,
    "date": "3/22",
    "title": "LOVEマシーン",
    "artist": "モーニング娘",
    "vid": "6A7j6eryPV4",
    "userId": "5"
  },
  {
    "id": 28,
    "date": "3/22",
    "title": "Inside the Lines",
    "artist": "Mike Perry",
    "vid": "kbYbvDK-HlY",
    "userId": "6"
  },
  {
    "id": 29,
    "date": "3/23",
    "title": "Hotel Ceiling",
    "artist": "Rixton",
    "vid": "hLS2ZTMayyI",
    "userId": "4"
  },
  {
    "id": 30,
    "date": "3/23",
    "title": "Habits (Stay High)",
    "artist": "Tove Lo (Hippie Sabotage Remix)",
    "vid": "SYM-RJwSGQ8",
    "userId": "5"
  },
  {
    "id": 31,
    "date": "3/25",
    "title": "小步舞曲",
    "artist": "陳綺貞",
    "vid": "1iujiTGBeaw",
    "userId": "5"
  },
  {
    "id": 32,
    "date": "3/25",
    "title": "Shed a Light",
    "artist": "David Guetta",
    "vid": "TXRCGKFCH-0",
    "userId": "6"
  },
  {
    "id": 33,
    "date": "3/26",
    "title": "誰",
    "artist": "蔡健雅",
    "vid": "0ROch80boOs",
    "userId": "5"
  },
  {
    "id": 34,
    "date": "3/26",
    "title": "Goodbye",
    "artist": "Air Supply",
    "vid": "J6qxMP3deU8",
    "userId": "2"
  },
  {
    "id": 35,
    "date": "3/26",
    "title": "She",
    "artist": "Elvis Costello",
    "vid": "O040xuq2FR0",
    "userId": "2"
  },
  {
    "id": 36,
    "date": "3/26",
    "title": "一點點",
    "artist": "周杰倫",
    "vid": "COhiu3c7Sgc",
    "userId": "4"
  },
  {
    "id": 37,
    "date": "3/27",
    "title": "Supermassive Black Hole",
    "artist": "Muse",
    "vid": "Xsp3_a-PMTw",
    "userId": "5"
  },
  {
    "id": 38,
    "date": "3/27",
    "title": "I Could Be The One",
    "artist": "Avicii & Nicky Romero",
    "vid": "bek1y2uiQGA",
    "userId": "6"
  },
  {
    "id": 39,
    "date": "3/28",
    "title": "Yesterday Once More",
    "artist": "The Carpenters ",
    "vid": "YTaWayUE5XA",
    "userId": "2"
  },
  {
    "id": 40,
    "date": "3/28",
    "title": "You'll Be In My Heart",
    "artist": "Phil Collins",
    "vid": "w0ZHlp6atUQ",
    "userId": "2"
  },
  {
    "id": 41,
    "date": "3/28",
    "title": "Emotion",
    "artist": "Bee Gees ",
    "vid": "zPwpVJ-eIgg",
    "userId": "2"
  },
  {
    "id": 42,
    "date": "3/28",
    "title": "君の知らない物語",
    "artist": "supercell",
    "vid": "eLPs_w-FepA",
    "userId": "5"
  },
  {
    "id": 43,
    "date": "3/28",
    "title": "GINGER",
    "artist": "土屋アンナ ft. MONKEY MAJIK",
    "vid": "RdMXfELxYrY",
    "userId": 5
  },
  {
    "id": 44,
    "date": "3/28",
    "title": "Catgroove",
    "artist": "Parov Stelar",
    "vid": "WXrdYwG17PE",
    "userId": "5"
  },
  {
    "id": 45,
    "date": "3/28",
    "title": "Hearts Burst Into Fire",
    "artist": "Bullet For My Valentine",
    "vid": "0n3cUPTKnl0",
    "userId": "4"
  },
  {
    "id": 46,
    "date": "3/29",
    "title": "Safe and Sound",
    "artist": "Capital Cities",
    "vid": "47dtFZ8CFo8",
    "userId": "0"
  },
  {
    "id": 47,
    "date": "3/29",
    "title": "龐麥郎",
    "artist": "我的滑板鞋",
    "vid": "HzXLJyHLStc",
    "userId": -1
  },
  {
    "id": 48,
    "date": "3/29",
    "title": "Still Ain't Enough For Me",
    "artist": "Mr. Big",
    "vid": "0EexzQ2nlio",
    "userId": "4"
  },
  {
    "id": 49,
    "date": "3/31",
    "title": "君=花",
    "artist": "pigstar",
    "vid": "Wu_12QBxuM4",
    "userId": "1"
  },
  {
    "date": "3/31",
    "title": "‬i‭ ‬will be fine‭",
    "artist": "魏如萱",
    "vid": "r1MLmoxNbyk",
    "userId": "5",
    "id": 50
  },
  {
    "date": "3/31",
    "title": "Pacific Rim OST - Main Theme",
    "artist": "Ramin Djwadi",
    "vid": "1vU7XqToZso",
    "userId": "5",
    "id": 51
  },
  {
    "date": "4/1",
    "title": "Ocean",
    "artist": "Mike Perry",
    "vid": "5JxgDJvqGmM",
    "userId": "6",
    "id": 52
  },
  {
    "date": "4/1",
    "title": "Up&Up",
    "artist": "Coldplay",
    "vid": "BPNTC7uZYrI",
    "userId": "5",
    "id": 53
  },
  {
    "date": "4/4",
    "title": "Lost Stars",
    "artist": "Adam Levine (cover by PoPol 波波爾樂團)",
    "vid": "swVwo_hd0Qc",
    "userId": "5",
    "id": 54
  },
  {
    "date": "4/4",
    "title": "The Nights",
    "artist": "Avicii",
    "vid": "UtF6Jej8yb4",
    "userId": "6",
    "id": 55
  },
  {
    "date": "4/4",
    "title": "Don't Go Away",
    "artist": "Noel Gallagher",
    "vid": "AD3dBMCuy4s",
    "userId": "4",
    "id": 56
  },
  {
    "date": "4/6",
    "title": "心裡有鬼",
    "artist": "佛跳牆 BUDDHA JUMP",
    "vid": "iZk8Gn2BxMo",
    "userId": "5",
    "id": 57
  },
  {
    "date": "4/6",
    "title": "Faded",
    "artist": "Alan Walker",
    "vid": "60ItHLz5WEA",
    "userId": "5",
    "id": 58
  },
  {
    "date": "4/6",
    "title": "Levels",
    "artist": "Avicii",
    "vid": "_ovdm2yX4MA",
    "userId": "5",
    "id": 59
  },
  {
    "date": "4/7",
    "title": "Waiting For The End",
    "artist": "Linkin Park",
    "vid": "5qF_qbaWt3Q",
    "userId": "5",
    "id": 60
  },
  {
    "date": "4/7",
    "title": "Bailando",
    "artist": "Enrique Iglesias",
    "vid": "NUsoVlDFqZg",
    "userId": "5",
    "id": 61
  },
  {
    "date": "4/7",
    "title": "Something just like this",
    "artist": "The Chainsmokers & Coldplay",
    "vid": "FM7MFYoylVs",
    "userId": "0",
    "id": 62
  },
  {
    "date": "4/7",
    "title": "抓不住之最",
    "artist": "吳汶芳",
    "vid": "f-yy8QPAtYM",
    "userId": "4",
    "id": 63
  },
  {
    "date": "4/10",
    "title": "L.I.F.E.",
    "artist": "Remady & Manu-L",
    "vid": "d4M4aDJPYD8",
    "userId": "6",
    "id": 64
  },
  {
    "date": "4/11",
    "title": "We Don't Talk Anymore",
    "artist": "Charlie Puth ft. Selena Gomez (Anthony El Mejor & DJ Nil Remix)",
    "vid": "UV5TZae2JNc",
    "userId": "5",
    "id": 65
  },
  {
    "date": "4/11",
    "title": "Without You",
    "artist": "Oh Wonder",
    "vid": "zLAhRiUeJ8E",
    "userId": "5",
    "id": 66
  },
  {
    "date": "4/13",
    "title": "A Sky Full of Stars",
    "artist": "Coldplay",
    "vid": "VPRjCeoBqrI",
    "userId": "1",
    "id": 67
  },
  {
    "date": "4/14",
    "title": "Tennis Court",
    "artist": "Lorde",
    "vid": "D8Ymd-OCucs",
    "userId": "5",
    "id": 68
  },
  {
    "date": "4/14",
    "title": "Bad Girls",
    "artist": "M.I.A.",
    "vid": "3Yuqxl284cg",
    "userId": "5",
    "id": 69
  },
  {
    "date": "4/15",
    "title": "Snow",
    "artist": "Red Hot Chili Peppers",
    "vid": "yuFI5KSPAt4",
    "userId": "4",
    "id": 70
  },
  {
    "date": "4/15",
    "title": "Les Rois du Monde",
    "artist": "Romeo et Juliette",
    "vid": "yJ2L1WYdTLU",
    "userId": "5",
    "id": 71
  },
  {
    "date": "4/15",
    "title": "Hitohira No Hanabira",
    "artist": "Stereopony",
    "vid": "vYV-XJdzupY",
    "userId": "5",
    "id": 72
  },
  {
    "date": "4/16",
    "title": "Sign of the Times ",
    "artist": "Harry Styles",
    "vid": "z0GKGpObgPY",
    "userId": "5",
    "id": 73
  },
  {
    "date": "4/16",
    "title": "Liability",
    "artist": "Lorde",
    "vid": "BtvJaNeELic",
    "userId": "5",
    "id": 74
  },
  {
    "date": "4/16",
    "title": "Stuck",
    "artist": "Stacie Orrico",
    "vid": "rbR73AITYz0",
    "userId": "5",
    "id": 75
  },
  {
    "date": "4/16",
    "title": "Dark Necessities",
    "artist": "Red Hot Chili Peppers",
    "vid": "Q0oIoR9mLwc",
    "userId": "5",
    "id": 76
  },
  {
    "date": "4/16",
    "title": "私生活",
    "artist": "東京事変",
    "vid": "rz3iNCJLs9U",
    "userId": "4",
    "id": 77
  },
  {
    "date": "4/18",
    "title": "Byte",
    "artist": "Martin Garrix & Brooks",
    "vid": "zH9sXggRlxc",
    "userId": "5",
    "id": 78
  },
  {
    "date": "4/19",
    "title": "The Cure",
    "artist": "Lady Gaga",
    "vid": "vp8VZe5kqEM",
    "userId": "5",
    "id": 79
  },
  {
    "date": "4/20",
    "title": "Hall of Fame",
    "artist": "The Script ft. will.i.am",
    "vid": "mk48xRzuNvA",
    "userId": "5",
    "id": 80
  },
  {
    "date": "4/20",
    "title": "Pompeii",
    "artist": "Bastille",
    "vid": "F90Cw4l-8NY",
    "userId": "5",
    "id": 81
  },
  {
    "date": "4/21",
    "title": "Don't",
    "artist": "Ed Sheeran ft. John Mayer",
    "vid": "dWPGCssnq3E",
    "userId": "4",
    "id": 82
  },
  {
    "date": "4/22",
    "title": "Borders",
    "artist": "M.I.A.",
    "vid": "r-Nw7HbaeWY",
    "userId": "5",
    "id": 83
  },
  {
    "date": "4/23",
    "title": "Dat $tick",
    "artist": "Rich Chigga",
    "vid": "rzc3_b_KnHc",
    "userId": "5",
    "id": 84
  },
  {
    "date": "4/24",
    "title": "Together",
    "artist": "Martin Garrix",
    "vid": "UYFAtesQ1A8",
    "userId": "6",
    "id": 85
  },
  {
    "date": "4/26",
    "title": "It Ain't Me",
    "artist": "Kygo, Selena Gomez",
    "vid": "u3VTKvdAuIY",
    "userId": "5",
    "id": 86
  },
  {
    "date": "5/8",
    "title": "Sweet Nothing",
    "artist": "Calvin Harris ft. Florence Welch",
    "vid": "17ozSeGw-fY",
    "userId": "4",
    "id": 87
  },
  {
    "date": "5/21",
    "title": "暴風雨",
    "artist": "陳奕迅",
    "vid": "JeIC2Z0teAI",
    "userId": "4",
    "id": 88
  }
]

const dataUsers = [
  {
      "id": 0,
      "name": "Alice",
      "avatarUrl": "alice.jpg",
      "numOfSongs": 7
  },
  {
      "id": 1,
      "name": "Chelsea",
      "avatarUrl": "chelsea.jpg",
      "numOfSongs": 6
  },
  {
      "id": 2,
      "name": "Jason",
      "avatarUrl": "jason.jpg",
      "numOfSongs": 6
  },
  {
      "id": 3,
      "name": "KJ",
      "avatarUrl": "kj.jpg",
      "numOfSongs": 4
  },
  {
      "id": 4,
      "name": "Sam",
      "avatarUrl": "sam.jpg",
      "numOfSongs": 16
  },
  {
      "id": 5,
      "name": "Ryan",
      "avatarUrl": "ryan.jpg",
      "numOfSongs": 40
  },
  {
      "id": 6,
      "name": "CheshireCat",
      "avatarUrl": "cheshirecat.jpg",
      "numOfSongs": 9
  }
]

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var data = {},
    displayMode = 'card',
    entryFilter = void 0,
    newSongTitle = void 0,
    newSongArtist = void 0,
    newSongVid = void 0,
    newSongUserSelect = void 0,
    editSongTitle = void 0,
    editSongArtist = void 0,
    editSongVid = void 0;

/**
 * Components related
 */
function render(callback) {
  ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
  if (callback) callback();
}

function App() {
  return React.createElement(
    'div',
    null,
    React.createElement(Sidebar, null),
    React.createElement(Main, null),
    React.createElement(AddDialog, null),
    React.createElement(EditDialog, null)
  );
}

/* [Component] Sidebar */
function Sidebar(props) {
  return React.createElement(
    'div',
    { id: 'sidebar' },
    React.createElement(Navigation, null),
    React.createElement(UserList, null),
    React.createElement(GitHubLink, null)
  );
}

function Navigation(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(NavigationButton, { text: 'Home', icon: 'home', action: 'loadAllEntries' }),
    React.createElement(NavigationButton, { text: 'Add New Song', icon: 'plus', action: 'showAddDialog' }),
    React.createElement(NavigationButton, { text: 'Shuffle', icon: 'play', action: 'shuffle' })
  );
}

function NavigationButton(props) {
  function handleClick(e) {
    switch (props.action) {
      case 'loadAllEntries':
        loadData('entries', 'all', function () {
          render(function () {
            resetActiveButtons();
            scrollToTop();
          });
        });
        break;
      case 'showAddDialog':
        document.getElementById('add-dialog').style.display = 'flex';
        break;
      case 'shuffle':
        var i = Math.floor(Math.random() * data.entries.length);
        setYouTubePlayerSrc(data.entries[i], true);
        break;
    }
  }

  return React.createElement(
    'button',
    { onClick: handleClick },
    React.createElement('i', { className: 'fa fa-lg fa-' + props.icon }),
    React.createElement(
      'span',
      null,
      props.text
    )
  );
}

function UserList(props) {
  var listItems = data.users.map(function (user) {
    return React.createElement(Avatar, { key: user.id, user: user });
  });
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h3',
      null,
      'Users'
    ),
    React.createElement(
      'div',
      null,
      listItems
    )
  );
}

function Avatar(props) {
  function filtByUserId(e) {
    loadData('entries', props.user.id, function () {
      render(function () {
        resetActiveButtons();
        $('#avatar-' + props.user.id).addClass('active');
        scrollToTop();
      });
    });
  }

  return React.createElement(
    'button',
    { id: 'avatar-' + props.user.id, onClick: filtByUserId },
    React.createElement('img', { src: 'img/avatars/' + props.user.avatarUrl }),
    React.createElement(
      'span',
      null,
      '(',
      props.user.numOfSongs,
      ') ',
      props.user.name
    )
  );
}

function GitHubLink(props) {
  return React.createElement(
    'div',
    { id: 'gitHubLink' },
    React.createElement(
      'a',
      { href: 'https://github.com/dont-hurry/nerd-radio', target: '_blank' },
      React.createElement('i', { className: 'fa fa-github' }),
      React.createElement(
        'span',
        null,
        'GitHub'
      )
    )
  );
}

/* [Component] Main */
function Main(props) {
  var heading = entryFilter !== undefined && entryFilter !== 'all' ? 'Nerd Radio: ' + data.users[entryFilter].name : 'Nerd Radio';
  return React.createElement(
    'div',
    { id: 'main' },
    React.createElement(
      'h1',
      null,
      heading
    ),
    React.createElement(
      'div',
      { id: 'main-content' },
      React.createElement(YouTubePlayer, null),
      React.createElement(DisplayModeSwitch, null),
      React.createElement(EntryContainer, null)
    )
  );
}

function YouTubePlayer(props) {
  return React.createElement(
    'div',
    { id: 'youtube-player-wrapper' },
    React.createElement('iframe', { id: 'youtube-player-frame',
      width: '560', height: '315',
      frameBorder: '0',
      allowFullScreen: 'allowfullscreen'
    })
  );
}

function DisplayModeSwitch(props) {
  return React.createElement(
    'div',
    { id: 'display-mode-switch' },
    React.createElement(DisplayModeSwitchButton, { icon: 'th-large', mode: 'card', checked: 'true' }),
    React.createElement(DisplayModeSwitchButton, { icon: 'th', mode: 'card-small' }),
    React.createElement(DisplayModeSwitchButton, { icon: 'list', mode: 'list' })
  );
}

function DisplayModeSwitchButton(props) {
  function handleClick(e) {
    displayMode = props.mode;
    render();
  }

  var checked = props.checked ? true : false;
  return React.createElement(
    'div',
    null,
    React.createElement('input', { type: 'radio',
      name: 'display-mode',
      id: 'display-mode-' + props.mode,
      defaultChecked: checked
    }),
    React.createElement(
      'label',
      {
        htmlFor: 'display-mode-' + props.mode,
        onClick: handleClick },
      React.createElement('i', { className: 'fa fa-' + props.icon })
    )
  );
}

function EntryContainer(props) {
  if (displayMode === 'card' || displayMode === 'card-small') {
    return React.createElement(
      'div',
      { id: 'entry-container' },
      React.createElement(CardContainer, null)
    );
  } else if (displayMode === 'list') {
    return React.createElement(
      'div',
      { id: 'entry-container' },
      React.createElement(ListContainer, null)
    );
  } else return false;
}

function CardContainer(props) {
  var entries = data.entries.slice(0).reverse().map(function (entry) {
    return React.createElement(Card, { key: entry.id, data: entry });
  });
  return React.createElement(
    'div',
    null,
    entries
  );
}

function Card(props) {
  function playYouTube(e) {
    setYouTubePlayerSrc(props.data, true);
  }

  if (props.data.userId !== -1) {
    var className = displayMode === 'card' ? 'card' : 'card card-small';
    return React.createElement(
      'div',
      { className: className },
      React.createElement('img', { src: 'https://img.youtube.com/vi/' + props.data.vid + '/0.jpg', onClick: playYouTube }),
      React.createElement(CardDescription, { data: props.data })
    );
  }
  return false;
}

function CardDescription(props) {
  return React.createElement(
    'div',
    { className: 'description' },
    React.createElement(
      'div',
      { className: 'entry-title' },
      props.data.title
    ),
    React.createElement(
      'div',
      { className: 'entry-artist' },
      props.data.artist
    ),
    React.createElement(
      'div',
      { className: 'entry-info' },
      props.data.date,
      ' ',
      data.users[props.data.userId].name
    ),
    React.createElement(EditIcon, { data: props.data })
  );
}

function EditIcon(props) {
  function showEditDialog(e) {
    e.preventDefault();
    editSongTitle.value = props.data.title;
    editSongArtist.value = props.data.artist;
    editSongVid.value = props.data.vid;
    document.getElementById('id-hidden').value = props.data.id;
    document.getElementById('uid-hidden').value = props.data.userId;
    document.getElementById('edit-dialog').style.display = 'flex';
  }

  return React.createElement(
    'a',
    { href: '#', className: 'edit-icon', onClick: showEditDialog },
    React.createElement('i', { className: 'fa fa-pencil' })
  );
}

function ListContainer(props) {
  var entries = data.entries.slice(0).reverse().map(function (entry) {
    return React.createElement(ListItem, { key: entry.id, data: entry });
  });
  return React.createElement(
    'div',
    { id: 'list-container' },
    React.createElement(
      'table',
      null,
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Title'
          ),
          React.createElement(
            'th',
            null,
            'Artist'
          ),
          React.createElement(
            'th',
            null,
            'Shared By'
          ),
          React.createElement('th', null),
          React.createElement('th', null)
        )
      ),
      React.createElement(
        'tbody',
        null,
        entries
      )
    )
  );
  return false;
}

function ListItem(props) {
  function showEditDialog(e) {
    e.preventDefault();
    editSongTitle.value = props.data.title;
    editSongArtist.value = props.data.artist;
    editSongVid.value = props.data.vid;
    document.getElementById('id-hidden').value = props.data.id;
    document.getElementById('uid-hidden').value = props.data.userId;
    document.getElementById('edit-dialog').style.display = 'flex';
  }

  function playYouTube(e) {
    e.preventDefault();
    setYouTubePlayerSrc(props.data, true);
  }

  if (props.data.userId !== -1) {
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        props.data.title
      ),
      React.createElement(
        'td',
        null,
        props.data.artist
      ),
      React.createElement(
        'td',
        null,
        data.users[props.data.userId].name
      ),
      React.createElement(
        'td',
        null,
        React.createElement(
          'a',
          { href: '#', onClick: showEditDialog },
          React.createElement('i', { className: 'fa fa-pencil' })
        )
      ),
      React.createElement(
        'td',
        null,
        React.createElement(
          'a',
          { href: '#', onClick: playYouTube },
          React.createElement('i', { className: 'fa fa-play' })
        )
      )
    );
  }
  return false;
}

/**
 * Dialog for adding a new song
 */
function AddDialog(props) {
  return React.createElement(
    'div',
    { id: 'add-dialog' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Add New Song'
      ),
      React.createElement(AddDialogContent, null),
      React.createElement(AddDialogButtonContainer, null)
    )
  );
}

function AddDialogContent(props) {
  return React.createElement(
    'div',
    { id: 'add-dialog-content' },
    React.createElement(
      'table',
      null,
      React.createElement(
        'tbody',
        null,
        React.createElement(DialogRow, { text: 'Song', inputId: 'new-song-title', inputPlaceholder: '\u9EBB\u5409' }),
        React.createElement(DialogRow, { text: 'Artist', inputId: 'new-song-artist', inputPlaceholder: 'Machi' }),
        React.createElement(DialogRow, { text: 'YouTube', inputId: 'new-song-vid', inputPlaceholder: 'https://www.youtube.com/watch?v=XY0Jrbn0Ebo' }),
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            'User'
          ),
          React.createElement(
            'td',
            null,
            React.createElement(AddDialogUserSelect, null)
          )
        )
      )
    )
  );
}

function AddDialogUserSelect(props) {
  var options = data.users.map(function (user) {
    return React.createElement(
      'option',
      { key: user.id, value: user.id },
      user.name
    );
  });
  return React.createElement(
    'div',
    { className: 'select-wrapper' },
    React.createElement(
      'select',
      { id: 'new-song-user-select' },
      React.createElement(
        'option',
        { value: '' },
        'Please select'
      ),
      options
    )
  );
}

function AddDialogButtonContainer(props) {
  function cancel(e) {
    document.getElementById('add-dialog').style.display = 'none';
    resetInputs([newSongTitle, newSongArtist, newSongVid, newSongUserSelect]);
  }

  function addConfirm(e) {
    if (!isInputsValid([newSongTitle, newSongArtist, newSongVid, newSongUserSelect])) {
      alert('Please fill in all inputs!');
      return;
    }

    var date = new Date(),
        vid = newSongVid.value.split('v=')[1];

    // Parse YouTube URL
    if (!vid) {
      alert('Wrong format of YouTube URL!');
      return;
    }
    var youtubeAmpersandPos = vid.indexOf('&');
    if (youtubeAmpersandPos !== -1) vid = vid.substring(0, youtubeAmpersandPos);

    var data = {
      date: date.getMonth() + 1 + '/' + date.getDate(),
      title: newSongTitle.value,
      artist: newSongArtist.value,
      vid: vid,
      userId: newSongUserSelect.value
    };

    sendRequest('add', data, function () {
      loadData('users', null, render);
      loadData('entries', 'all', render);
    });
    document.getElementById('add-dialog').style.display = 'none';
    resetActiveButtons();
    resetInputs([newSongTitle, newSongArtist, newSongVid, newSongUserSelect]);
  }

  return React.createElement(
    'div',
    { id: 'add-dialog-btn-container' },
    React.createElement(
      'button',
      { onClick: cancel },
      'Cancel'
    ),
    React.createElement(
      'button',
      { onClick: addConfirm },
      'Confirm'
    )
  );
}

/**
 * Dialog for editing an entry
 */
function EditDialog(props) {
  return React.createElement(
    'div',
    { id: 'edit-dialog' },
    React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Edit'
      ),
      React.createElement(EditDialogContent, null),
      React.createElement(EditDialogButtonContainer, null)
    )
  );
}

function EditDialogContent(props) {
  return React.createElement(
    'div',
    { id: 'edit-dialog-content' },
    React.createElement(
      'table',
      null,
      React.createElement(
        'tbody',
        null,
        React.createElement(DialogRow, { text: 'Song', inputId: 'edit-song-title' }),
        React.createElement(DialogRow, { text: 'Artist', inputId: 'edit-song-artist' }),
        React.createElement(DialogRow, { text: 'YouTube Video ID', inputId: 'edit-song-vid' })
      )
    ),
    React.createElement('input', { type: 'hidden', id: 'id-hidden' }),
    React.createElement('input', { type: 'hidden', id: 'uid-hidden' })
  );
}

function EditDialogButtonContainer(props) {
  function deleteEntry() {
    if (confirm('Are you sure to delete this entry?')) {
      var payload = {
        id: document.getElementById('id-hidden').value,
        userId: document.getElementById('uid-hidden').value
      };
      sendRequest('delete', payload, function () {
        loadData('users', null, render);
        loadData('entries', 'all', function () {
          render();
          var latestEntry = data.entries.slice(0).reverse()[0];
          setYouTubePlayerSrc(latestEntry, false);
        });
      });
      document.getElementById('edit-dialog').style.display = 'none';
      resetActiveButtons();
    }
  }

  function cancel() {
    document.getElementById('edit-dialog').style.display = 'none';
  }

  function editConfirm() {
    if (!isInputsValid([editSongTitle, editSongArtist, editSongVid])) {
      alert('Please fill in all inputs!');
      return;
    }

    var data = {
      id: document.getElementById('id-hidden').value,
      title: editSongTitle.value,
      artist: editSongArtist.value,
      vid: editSongVid.value
    };

    sendRequest('edit', data, function () {
      loadData('entries', 'all', function () {
        render();
        var latestEntry = data.entries.slice(0).reverse()[0];
        setYouTubePlayerSrc(latestEntry, false);
      });
    });
    document.getElementById('edit-dialog').style.display = 'none';
    resetActiveButtons();
  }

  return React.createElement(
    'div',
    { id: 'edit-dialog-btn-container' },
    React.createElement(
      'table',
      null,
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'td',
            null,
            React.createElement(
              'button',
              { onClick: deleteEntry },
              'Delete'
            )
          ),
          React.createElement(
            'td',
            null,
            React.createElement(
              'button',
              { onClick: cancel },
              'Cancel'
            ),
            React.createElement(
              'button',
              { onClick: editConfirm },
              'Confirm'
            )
          )
        )
      )
    )
  );
}

function DialogRow(props) {
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      props.text
    ),
    React.createElement(
      'td',
      null,
      React.createElement('input', { type: 'text',
        id: props.inputId,
        placeholder: props.inputPlaceholder })
    )
  );
}

/**
 * Functions related to backend
 */
function sendRequest(action, payload, callback) {
  if (action === 'load') {
    if (payload.type === 'entries') {
      if (payload.filter === 'all') {
        callback(dataEntries)
      } else {
        callback(dataEntries.filter(({ userId }) => userId === String(payload.filter)))
      }
    }

    if (payload.type === 'users') {
      callback(dataUsers)
    }
  }
}

function loadData(type, filter, callback) {
  sendRequest('load', {
    type: type,
    filter: filter
  }, function (response) {
    data[type] = response;
    if (type === 'entries') entryFilter = filter;
    if (callback) callback();
  });
}

/**
 * Other functions
 */
function setYouTubePlayerSrc(entryData, autoPlay) {
  var vid = entryData.vid,
      src = 'https://www.youtube.com/embed/' + vid,
      targetElement = document.getElementById('youtube-player-frame');
  if (autoPlay) {
    src += '?autoplay=1';
    if (targetElement.src === src) return;
    var title = entryData.title,
        artist = entryData.artist,
        user = data.users[entryData.userId].name;
    notify('Now Playing:<br>' + artist + ' - ' + title + '<br>Shared by ' + user);
  }
  targetElement.src = src;
}

function resetActiveButtons() {
  $('#sidebar button').each(function () {
    $(this).removeClass('active');
  });
}

function scrollToTop() {
  var body = $('body');
  body.stop().animate({ scrollTop: 0 }, '1000', 'swing');
}

function resetInputs(inputList) {
  for (var i = 0; i < inputList.length; i++) {
    var input = inputList[i],
        type = input.type;
    if (type === 'text') input.value = '';else if (type === 'select-one') input.selectedIndex = 0;
  }
}

function isInputsValid(inputList) {
  for (var i = 0; i < inputList.length; i++) {
    var input = inputList[i];
    if (input.value === '') return false;
  }
  return true;
}

/**
 * Initialize
 */
(function init() {
  var loadedDataCount = 0;
  loadData('users', null, loadDataSucceed);
  loadData('entries', 'all', loadDataSucceed);

  function loadDataSucceed() {
    loadedDataCount++;
    if (loadedDataCount === 2) {
      render(function () {
        var latestEntry = data.entries.slice(0).reverse()[0];
        setYouTubePlayerSrc(latestEntry, false);
        newSongTitle = document.getElementById('new-song-title');
        newSongArtist = document.getElementById('new-song-artist');
        newSongVid = document.getElementById('new-song-vid');
        newSongUserSelect = document.getElementById('new-song-user-select');
        editSongTitle = document.getElementById('edit-song-title');
        editSongArtist = document.getElementById('edit-song-artist');
        editSongVid = document.getElementById('edit-song-vid');
      });
    }
  }
})();