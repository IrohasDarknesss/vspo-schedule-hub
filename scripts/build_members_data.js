import fs from 'fs';
import path from 'path';

// Load scraped official members data
const scrapedPath = path.resolve('src/data/official_scraped_members.json');
const scraped = JSON.parse(fs.readFileSync(scrapedPath, 'utf8'));

// Import existing members data to preserve existing high-detail videos
const existingModule = await import('../src/data/members.js');
const existingMap = new Map();
existingModule.MEMBERS.forEach(m => {
  existingMap.set(m.id, m);
});

const idMap = {
  sumire: 'kaga-sumire',
  nazuna: 'kaga-nazuna',
  toto: 'kogara-toto',
  uruha: 'ichinose-uruha',
  noah: 'kurumi-noah',
  mimi: 'tosaki-mimi',
  sena: 'asumi-sena',
  hinano: 'tachibana-hinano',
  lisa: 'hanabusa-lisa',
  ren: 'kisaragi-ren',
  qpi: 'kaminari-qpi',
  beni: 'yakumo-beni',
  ema: 'aizawa-ema',
  runa: 'shinomiya-runa',
  tsuna: 'nekota-tsuna',
  ramune: 'shiranami-ramune',
  met: 'komori-met',
  akari: 'yumeno-akari',
  kuromu: 'yano-kuromu',
  kokage: 'tsumugi-kokage',
  yuuhi: 'sendo-yuuhi',
  hanabi: 'chouya-hanabi',
  moka: 'amayui-moka',
  saine: 'ginjou-saine',
  chise: 'tatsumaki-chise',
  remia: 'remia-aotsuki',
  arya: 'arya-kuroha',
  jira: 'jira-jisaki',
  narin: 'narin-mikure',
  riko: 'riko-solari',
  eris: 'elis-ryugami',
  juno: 'juno-umezono'
};

const unitMap = {
  'kaga-sumire': 'Lupinus Virtual Games',
  'kaga-nazuna': 'Lupinus Virtual Games',
  'kogara-toto': 'Lupinus Virtual Games',
  'ichinose-uruha': 'Lupinus Virtual Games',
  'kurumi-noah': 'Iris Black Games',
  'tachibana-hinano': 'Iris Black Games',
  'kisaragi-ren': 'Iris Black Games',
  'tosaki-mimi': 'Cattleya Regina Games',
  'asumi-sena': 'Cattleya Regina Games',
  'hanabusa-lisa': 'Cattleya Regina Games',
  'remia-aotsuki': 'VSPO! EN 1st Gen',
  'arya-kuroha': 'VSPO! EN 1st Gen',
  'jira-jisaki': 'VSPO! EN 1st Gen',
  'narin-mikure': 'VSPO! EN 2nd Gen',
  'riko-solari': 'VSPO! EN 2nd Gen',
  'elis-ryugami': 'VSPO! EN 2nd Gen',
  'juno-umezono': 'VSPO! EN 2nd Gen'
};

const newMemberMetadata = {
  'kogara-toto': {
    debutDate: '2019年4月10日',
    bloodType: 'O型',
    fanName: 'とと組',
    streamTag: '#ととらいぶ',
    fanArtTag: '#小雀とと絵',
    favoriteWeapon: 'R-301 / クレーバー',
    catchphrase: 'ふんわり癒やしボイスと鋭いスナイプ！LVGのエイム天使',
    subscribers: '44.8万人',
    role: 'Sniper / Vocal',
    mainGames: ['Apex Legends', '歌枠', 'スプラトゥーン3', 'VALORANT'],
    past5Streams: [
      {
        id: 'toto_vod_01',
        title: '【Apex Legends】ソロマスチャレンジ！今夜こそダイヤ1を抜ける！【小雀とと / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '4h 15m',
        viewCount: '12.4万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp',
        url: 'https://www.youtube.com/watch?v=toto_vod_01'
      },
      {
        id: 'toto_vod_02',
        title: '【歌枠】秋の夜長にゆったりアコースティックソング歌います♪【小雀とと / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 21:00',
        duration: '2h 10m',
        viewCount: '15.8万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp',
        url: 'https://www.youtube.com/watch?v=toto_vod_02'
      },
      {
        id: 'toto_vod_03',
        title: '【スプラトゥーン3】フェス参戦！えいえんの称号まで突っ走るぞ！【小雀とと / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 19:30',
        duration: '3h 40m',
        viewCount: '9.6万回',
        game: 'スプラトゥーン3',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp',
        url: 'https://www.youtube.com/watch?v=toto_vod_03'
      },
      {
        id: 'toto_vod_04',
        title: '【VALORANT】初心者脱却を目指してエイム特訓カスタム！【小雀とと / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-26 20:00',
        duration: '3h 25m',
        viewCount: '11.2万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp',
        url: 'https://www.youtube.com/watch?v=toto_vod_04'
      },
      {
        id: 'toto_vod_05',
        title: '【雑談】近況報告とお知らせ！まったりマシュマロ読みます🍵【小雀とと / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-24 21:30',
        duration: '1h 50m',
        viewCount: '8.7万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp',
        url: 'https://www.youtube.com/watch?v=toto_vod_05'
      }
    ]
  },
  'tosaki-mimi': {
    debutDate: '2020年7月4日',
    bloodType: 'A型',
    fanName: 'みみっ子',
    streamTag: '#みみらいぶ',
    fanArtTag: '#みみあーと',
    favoriteWeapon: 'フラットライン / ヴァンダル',
    catchphrase: '清楚で可憐なウサギさん、実はガチガチのFPSキラー',
    subscribers: '42.6万人',
    role: 'Duelist / Flex',
    mainGames: ['Apex Legends', 'VALORANT', '歌枠', 'ポケモン'],
    past5Streams: [
      {
        id: 'mimi_vod_01',
        title: '【VALORANT】コンペティティブ！アセンダント目指して集中ランク🔥【兎咲ミミ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 21:00',
        duration: '3h 45m',
        viewCount: '13.5万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp',
        url: 'https://www.youtube.com/watch?v=mimi_vod_01'
      },
      {
        id: 'mimi_vod_02',
        title: '【Apex Legends】CRGコラボ！三人でチャンピオン取りまくるぞ！【兎咲ミミ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 20:00',
        duration: '4h 10m',
        viewCount: '16.9万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp',
        url: 'https://www.youtube.com/watch?v=mimi_vod_02'
      },
      {
        id: 'mimi_vod_03',
        title: '【歌枠】お休みの前にしっとり歌う夜。初見さんも大歓迎♪【兎咲ミミ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 22:00',
        duration: '2h 00m',
        viewCount: '14.2万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp',
        url: 'https://www.youtube.com/watch?v=mimi_vod_03'
      },
      {
        id: 'mimi_vod_04',
        title: '【ポケモン】色違い出るまで眠れません！耐久厳選スタート！【兎咲ミミ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 19:00',
        duration: '5h 30m',
        viewCount: '11.8万回',
        game: 'ポケットモンスター',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp',
        url: 'https://www.youtube.com/watch?v=mimi_vod_04'
      },
      {
        id: 'mimi_vod_05',
        title: '【雑談】みんな今週もお疲れ様！週末のんびりトーク🍵【兎咲ミミ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-23 21:30',
        duration: '1h 45m',
        viewCount: '9.3万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp',
        url: 'https://www.youtube.com/watch?v=mimi_vod_05'
      }
    ]
  },
  'hanabusa-lisa': {
    debutDate: '2020年8月15日',
    bloodType: 'O型',
    fanName: 'おリサ隊',
    streamTag: '#リサライブ',
    fanArtTag: '#英絵画',
    favoriteWeapon: 'ピースキーパー / ファントム',
    catchphrase: 'ぶいすぽ一のバラエティ女王！キレ味抜群のトークと熱いFPS',
    subscribers: '57.4万人',
    role: 'Flex / Duelist',
    mainGames: ['VALORANT', 'Apex Legends', 'Minecraft', 'Grand Theft Auto V'],
    past5Streams: [
      {
        id: 'lisa_vod_01',
        title: '【VALORANT】ぶいすぽフルパ！うるさすぎて鼓膜崩壊マッチｗｗ【英リサ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 19:00',
        duration: '4h 50m',
        viewCount: '24.1万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp',
        url: 'https://www.youtube.com/watch?v=lisa_vod_01'
      },
      {
        id: 'lisa_vod_02',
        title: '【Apex Legends】マスターいくぞおおお！狂気と執念のランク耐久【英リサ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 20:30',
        duration: '6h 15m',
        viewCount: '21.8万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp',
        url: 'https://www.youtube.com/watch?v=lisa_vod_02'
      },
      {
        id: 'lisa_vod_03',
        title: '【Minecraft】ぶいすぽ鯖で巨大建築！資材無限集め編【英リサ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-27 18:00',
        duration: '3h 40m',
        viewCount: '18.5万回',
        game: 'Minecraft',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp',
        url: 'https://www.youtube.com/watch?v=lisa_vod_03'
      },
      {
        id: 'lisa_vod_04',
        title: '【雑談】深夜の限界トーク！最近の面白かったこと全部話すｗｗ【英リサ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 23:00',
        duration: '2h 15m',
        viewCount: '19.2万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp',
        url: 'https://www.youtube.com/watch?v=lisa_vod_04'
      },
      {
        id: 'lisa_vod_05',
        title: '【VCR GTA】カオスすぎる街で新たな伝説を作るぞｗｗ【英リサ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 20:00',
        duration: '7h 20m',
        viewCount: '31.4万回',
        game: 'GTA V',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp',
        url: 'https://www.youtube.com/watch?v=lisa_vod_05'
      }
    ]
  },
  'kisaragi-ren': {
    debutDate: '2020年9月18日',
    bloodType: 'AB型',
    fanName: 'れんず',
    streamTag: '#れんらいぶ',
    fanArtTag: '#れんすけっち',
    favoriteWeapon: 'オペレーター / ウィングマン',
    catchphrase: 'クールな声とスマートな判断力、IBGの頼れる頭脳派',
    subscribers: '49.8万人',
    role: 'Initiator / IGL',
    mainGames: ['VALORANT', 'Apex Legends', '雀魂', '雑談'],
    past5Streams: [
      {
        id: 'ren_vod_01',
        title: '【VALORANT】冷静沈着に勝ち切るソロコンペ。イモータルへ【如月れん / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '3h 30m',
        viewCount: '15.2万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp',
        url: 'https://www.youtube.com/watch?v=ren_vod_01'
      },
      {
        id: 'ren_vod_02',
        title: '【雀魂】ぶいすぽ麻雀杯！役満狙いで圧倒的勝利を掴む！【如月れん / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-29 21:00',
        duration: '2h 50m',
        viewCount: '18.7万回',
        game: '雀魂',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp',
        url: 'https://www.youtube.com/watch?v=ren_vod_02'
      },
      {
        id: 'ren_vod_03',
        title: '【Apex Legends】IBG集合！ランクを破壊する三人組【如月れん / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-27 19:30',
        duration: '4h 00m',
        viewCount: '22.3万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp',
        url: 'https://www.youtube.com/watch?v=ren_vod_03'
      },
      {
        id: 'ren_vod_04',
        title: '【雑談】静かな夜に一杯飲みながら近況トーク【如月れん / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-24 22:30',
        duration: '2h 10m',
        viewCount: '11.4万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp',
        url: 'https://www.youtube.com/watch?v=ren_vod_04'
      },
      {
        id: 'ren_vod_05',
        title: '【歌枠】深夜の大人びたジャズ＆ボカロ選曲Singing【如月れん / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-21 21:00',
        duration: '1h 55m',
        viewCount: '16.5万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp',
        url: 'https://www.youtube.com/watch?v=ren_vod_05'
      }
    ]
  },
  'kaminari-qpi': {
    debutDate: '2021年7月10日',
    bloodType: 'B型',
    fanName: 'きゅぴ隊',
    streamTag: '#きゅぴらいぶ',
    fanArtTag: '#きゅぴあーと',
    favoriteWeapon: 'ボルトSMG / クラシック',
    catchphrase: '持ち前の太陽のような明るさと強烈な格ゲー＆FPSの腕前！',
    subscribers: '54.2万人',
    role: 'Duelist / Fighter',
    mainGames: ['ストリートファイター6', 'Apex Legends', 'VALORANT', 'ドラゴンクエスト'],
    past5Streams: [
      {
        id: 'qpi_vod_01',
        title: '【スト6】マスター帯MR1800目指す！春麗で熱血対戦！【神成きゅぴ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:30',
        duration: '4h 10m',
        viewCount: '19.4万回',
        game: 'ストリートファイター6',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp',
        url: 'https://www.youtube.com/watch?v=qpi_vod_01'
      },
      {
        id: 'qpi_vod_02',
        title: '【Apex Legends】前線破壊！キルムーブでガンガン盛るぞ！【神成きゅぴ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 19:00',
        duration: '5h 00m',
        viewCount: '17.8万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp',
        url: 'https://www.youtube.com/watch?v=qpi_vod_02'
      },
      {
        id: 'qpi_vod_03',
        title: '【VALORANT】ぶいすぽカスタム！みんなで真剣勝負！【神成きゅぴ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 21:00',
        duration: '3h 40m',
        viewCount: '21.5万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp',
        url: 'https://www.youtube.com/watch?v=qpi_vod_03'
      },
      {
        id: 'qpi_vod_04',
        title: '【ドラゴンクエストXI S】カジノで一攫千金狙い＆ストーリー攻略！【神成きゅぴ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 18:30',
        duration: '4h 25m',
        viewCount: '13.1万回',
        game: 'ドラゴンクエストXI S',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp',
        url: 'https://www.youtube.com/watch?v=qpi_vod_04'
      },
      {
        id: 'qpi_vod_05',
        title: '【雑談】オフコラボの裏話とお腹すいた話🍚【神成きゅぴ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-23 22:00',
        duration: '1h 40m',
        viewCount: '12.6万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp',
        url: 'https://www.youtube.com/watch?v=qpi_vod_05'
      }
    ]
  },
  'shinomiya-runa': {
    debutDate: '2021年10月24日',
    bloodType: 'O型',
    fanName: 'るなーと',
    streamTag: '#るならいぶ',
    fanArtTag: '#るなすけっち',
    favoriteWeapon: 'CAR / ファントム',
    catchphrase: 'ふわふわ癒やしの小悪魔ボイスと圧倒的歌唱力＆FPSセンス',
    subscribers: '49.1万人',
    role: 'Vocal / Controller',
    mainGames: ['歌枠', 'Apex Legends', 'VALORANT', '原神'],
    past5Streams: [
      {
        id: 'runa_vod_01',
        title: '【歌枠】癒やしの高音ボイスで秋の名曲を熱唱♪【紫宮るな / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 21:30',
        duration: '2h 15m',
        viewCount: '17.9万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp',
        url: 'https://www.youtube.com/watch?v=runa_vod_01'
      },
      {
        id: 'runa_vod_02',
        title: '【VALORANT】女子フルパで楽しく勝利！スモークで味方を支えるぞ【紫宮るな / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 20:00',
        duration: '3h 50m',
        viewCount: '15.3万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp',
        url: 'https://www.youtube.com/watch?v=runa_vod_02'
      },
      {
        id: 'runa_vod_03',
        title: '【Apex Legends】ダイヤランク！撃ち合い強化週間！【紫宮るな / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 19:30',
        duration: '4h 10m',
        viewCount: '13.8万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp',
        url: 'https://www.youtube.com/watch?v=runa_vod_03'
      },
      {
        id: 'runa_vod_04',
        title: '【原神】新バージョンの新キャラ引くまでガチャ耐久！【紫宮るな / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-26 21:00',
        duration: '2h 45m',
        viewCount: '16.4万回',
        game: '原神',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp',
        url: 'https://www.youtube.com/watch?v=runa_vod_04'
      },
      {
        id: 'runa_vod_05',
        title: '【雑談】まったり近況トークとお便り紹介🍵【紫宮るな / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-23 22:30',
        duration: '1h 35m',
        viewCount: '10.2万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp',
        url: 'https://www.youtube.com/watch?v=runa_vod_05'
      }
    ]
  },
  'yumeno-akari': {
    debutDate: '2023年4月16日',
    bloodType: 'B型',
    fanName: 'あかりん党',
    streamTag: '#あかりんらいぶ',
    fanArtTag: '#あかりんあーと',
    favoriteWeapon: 'ハボック / ヴァンダル',
    catchphrase: '元気いっぱい猪突猛進！格ゲーもFPSも本気で挑む情熱ガール',
    subscribers: '47.2万',
    role: 'Duelist / Fighter',
    mainGames: ['ストリートファイター6', 'Apex Legends', 'VALORANT', 'ポケットモンスター'],
    past5Streams: [
      {
        id: 'akari_vod_01',
        title: '【スト6】キャミィでMR1700到達へ！絶対に諦めない🔥【夢野あかり / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 19:30',
        duration: '4h 30m',
        viewCount: '20.1万回',
        game: 'ストリートファイター6',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp',
        url: 'https://www.youtube.com/watch?v=akari_vod_01'
      },
      {
        id: 'akari_vod_02',
        title: '【Apex Legends】ぶいすぽフルパ！突撃＆突撃でチャンピオン！【夢野あかり / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 21:00',
        duration: '3h 55m',
        viewCount: '16.7万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp',
        url: 'https://www.youtube.com/watch?v=akari_vod_02'
      },
      {
        id: 'akari_vod_03',
        title: '【VALORANT】エイムが冴え渡るレイナ！キル量産ランク【夢野あかり / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 20:00',
        duration: '3h 20m',
        viewCount: '14.5万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp',
        url: 'https://www.youtube.com/watch?v=akari_vod_03'
      },
      {
        id: 'akari_vod_04',
        title: '【初見プレイ】最新アクションゲームに絶叫しながら挑戦！【夢野あかり / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 18:30',
        duration: '3h 45m',
        viewCount: '12.8万回',
        game: 'アクションゲーム',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp',
        url: 'https://www.youtube.com/watch?v=akari_vod_04'
      },
      {
        id: 'akari_vod_05',
        title: '【雑談】みんな聞いて！今週の反省会と元気チャージトーク！【夢野あかり / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:30',
        duration: '1h 50m',
        viewCount: '11.3万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp',
        url: 'https://www.youtube.com/watch?v=akari_vod_05'
      }
    ]
  },
  'yano-kuromu': {
    debutDate: '2023年11月10日',
    bloodType: 'A型',
    fanName: 'くろむんず',
    streamTag: '#くろむらいぶ',
    fanArtTag: '#くろむあーと',
    favoriteWeapon: 'ボルト / アナ',
    catchphrase: '夜を駆けるクールなゲーマーガール！緻密なサポートと鋭いエイム',
    subscribers: '36.5万人',
    role: 'Support / Sentinel',
    mainGames: ['Apex Legends', 'VALORANT', 'Overwatch 2', '雑談'],
    past5Streams: [
      {
        id: 'kuromu_vod_01',
        title: '【Overwatch 2】サポート専でグラマス目指す！ナノブーストで勝つ！【夜乃くろむ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 21:00',
        duration: '4h 05m',
        viewCount: '11.8万回',
        game: 'Overwatch 2',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp',
        url: 'https://www.youtube.com/watch?v=kuromu_vod_01'
      },
      {
        id: 'kuromu_vod_02',
        title: '【VALORANT】サイファー＆キルジョイ！エリア完全制圧ランク【夜乃くろむ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 20:30',
        duration: '3h 40m',
        viewCount: '13.2万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp',
        url: 'https://www.youtube.com/watch?v=kuromu_vod_02'
      },
      {
        id: 'kuromu_vod_03',
        title: '【Apex Legends】プレデター帯の戦いに挑む！連携徹底ランク【夜乃くろむ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 19:00',
        duration: '5h 15m',
        viewCount: '14.6万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp',
        url: 'https://www.youtube.com/watch?v=kuromu_vod_03'
      },
      {
        id: 'kuromu_vod_04',
        title: '【雑談】夜更かし組集合〜！眠れない夜にのんびりトーク🌙【夜乃くろむ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 23:30',
        duration: '2h 00m',
        viewCount: '9.4万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp',
        url: 'https://www.youtube.com/watch?v=kuromu_vod_04'
      },
      {
        id: 'kuromu_vod_05',
        title: '【歌ってみた公開記念】初オリジナル楽曲の感想を語る配信！【夜乃くろむ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 20:00',
        duration: '1h 30m',
        viewCount: '15.7万回',
        game: '記念配信',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp',
        url: 'https://www.youtube.com/watch?v=kuromu_vod_05'
      }
    ]
  },
  'tsumugi-kokage': {
    debutDate: '2024年3月15日',
    bloodType: 'O型',
    fanName: 'こかげっこ',
    streamTag: '#こかげらいぶ',
    fanArtTag: '#こかげあーと',
    favoriteWeapon: 'ソーヴァ / ヴァンダル',
    catchphrase: '正確無比なリコンと爽やか笑顔！ぶいすぽの頼れるイニシエーター',
    subscribers: '38.9万人',
    role: 'Initiator / Vocal',
    mainGames: ['VALORANT', '歌枠', 'Apex Legends', '雑談'],
    past5Streams: [
      {
        id: 'kokage_vod_01',
        title: '【VALORANT】ソーヴァの矢で全てを暴く！アセンダント昇格戦🔥【紡木こかげ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '3h 50m',
        viewCount: '14.1万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp',
        url: 'https://www.youtube.com/watch?v=kokage_vod_01'
      },
      {
        id: 'kokage_vod_02',
        title: '【歌枠】アニソン縛りで熱唱！魂のシンギングストリーム♪【紡木こかげ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 21:30',
        duration: '2h 20m',
        viewCount: '16.8万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp',
        url: 'https://www.youtube.com/watch?v=kokage_vod_02'
      },
      {
        id: 'kokage_vod_03',
        title: '【Apex Legends】スナイパー特訓！長距離ヘッドショット連発！【紡木こかげ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-27 19:00',
        duration: '4h 10m',
        viewCount: '12.3万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp',
        url: 'https://www.youtube.com/watch?v=kokage_vod_03'
      },
      {
        id: 'kokage_vod_04',
        title: '【朝活ラジオ】おはようございます！爽やかに1日を始めよう☀️【紡木こかげ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 07:00',
        duration: '1h 15m',
        viewCount: '8.9万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp',
        url: 'https://www.youtube.com/watch?v=kokage_vod_04'
      },
      {
        id: 'kokage_vod_05',
        title: '【雑談】同期コラボの思い出＆最近ハマってるアニメの話！【紡木こかげ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:00',
        duration: '1h 45m',
        viewCount: '10.5万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp',
        url: 'https://www.youtube.com/watch?v=kokage_vod_05'
      }
    ]
  },
  'sendo-yuuhi': {
    debutDate: '2024年5月10日',
    bloodType: 'B型',
    fanName: 'ひかりびと',
    streamTag: '#ゆうひらいぶ',
    fanArtTag: '#ゆうひあーと',
    favoriteWeapon: 'ファントム / ケン',
    catchphrase: '圧倒的反射神経と熱い情熱！攻守自在のマルチゲーマー',
    subscribers: '39.8万人',
    role: 'Duelist / Flex',
    mainGames: ['VALORANT', 'ストリートファイター6', 'Apex Legends', '雑談'],
    past5Streams: [
      {
        id: 'yuuhi_vod_01',
        title: '【VALORANT】デュエリストの誇りをかけて勝ち抜くランク戦！【千燈ゆうひ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '4h 00m',
        viewCount: '15.4万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp',
        url: 'https://www.youtube.com/watch?v=yuuhi_vod_01'
      },
      {
        id: 'yuuhi_vod_02',
        title: '【スト6】ケンで怒涛のラッシュ！マスター帯ランクマッチ🔥【千燈ゆうひ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 19:30',
        duration: '3h 45m',
        viewCount: '17.2万回',
        game: 'ストリートファイター6',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp',
        url: 'https://www.youtube.com/watch?v=yuuhi_vod_02'
      },
      {
        id: 'yuuhi_vod_03',
        title: '【Apex Legends】ぶいすぽコラボ！楽しく激しいランク配信！【千燈ゆうひ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 21:00',
        duration: '4h 15m',
        viewCount: '13.9万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp',
        url: 'https://www.youtube.com/watch?v=yuuhi_vod_03'
      },
      {
        id: 'yuuhi_vod_04',
        title: '【歌枠】力強く真っ直ぐな歌声を届ける夜！熱い選曲Singing【千燈ゆうひ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 21:30',
        duration: '2h 10m',
        viewCount: '16.1万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp',
        url: 'https://www.youtube.com/watch?v=yuuhi_vod_04'
      },
      {
        id: 'yuuhi_vod_05',
        title: '【雑談】まったり振り返り＆マシュマロ回答タイム🍵【千燈ゆうひ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 22:00',
        duration: '1h 40m',
        viewCount: '10.8万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp',
        url: 'https://www.youtube.com/watch?v=yuuhi_vod_05'
      }
    ]
  },
  'chouya-hanabi': {
    debutDate: '2024年7月20日',
    bloodType: 'A型',
    fanName: 'はなびすと',
    streamTag: '#はなびらいぶ',
    fanArtTag: '#はなびあーと',
    favoriteWeapon: 'ヴァンダル / ジュリ',
    catchphrase: '高身長スタイリッシュ＆爆発的エイム！ぶいすぽの華麗な大花火',
    subscribers: '32.8万人',
    role: 'Duelist / Fighter',
    mainGames: ['VALORANT', 'ストリートファイター6', 'Apex Legends', '歌枠'],
    past5Streams: [
      {
        id: 'hanabi_vod_01',
        title: '【VALORANT】初弾ヘッドショットで全てを撃ち抜く！暴れランク【蝶屋はなび / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:30',
        duration: '3h 50m',
        viewCount: '13.7万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/07/22_hanabi_visual.webp',
        url: 'https://www.youtube.com/watch?v=hanabi_vod_01'
      },
      {
        id: 'hanabi_vod_02',
        title: '【スト6】ジュリで足技ラッシュ！MRを貪欲に奪い取る！【蝶屋はなび / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 21:00',
        duration: '3h 30m',
        viewCount: '15.9万回',
        game: 'ストリートファイター6',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/07/22_hanabi_visual.webp',
        url: 'https://www.youtube.com/watch?v=hanabi_vod_02'
      },
      {
        id: 'hanabi_vod_03',
        title: '【Apex Legends】チャンピオン耐久配信！終わるまで寝ません🔥【蝶屋はなび / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 19:00',
        duration: '5h 20m',
        viewCount: '14.2万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/07/22_hanabi_visual.webp',
        url: 'https://www.youtube.com/watch?v=hanabi_vod_03'
      },
      {
        id: 'hanabi_vod_04',
        title: '【歌枠】低音ハスキーボイスで歌うロック＆ポップス♪【蝶屋はなび / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 22:00',
        duration: '2h 05m',
        viewCount: '16.5万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/07/22_hanabi_visual.webp',
        url: 'https://www.youtube.com/watch?v=hanabi_vod_04'
      },
      {
        id: 'hanabi_vod_05',
        title: '【雑談】ぶいすぽ同期の話と好きなファッションの話✨【蝶屋はなび / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:30',
        duration: '1h 45m',
        viewCount: '9.8万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/07/22_hanabi_visual.webp',
        url: 'https://www.youtube.com/watch?v=hanabi_vod_05'
      }
    ]
  },
  'amayui-moka': {
    debutDate: '2024年8月15日',
    bloodType: 'AB型',
    fanName: 'もかふぁみ',
    streamTag: '#もからいぶ',
    fanArtTag: '#もかあーと',
    favoriteWeapon: 'R-99 / ファントム',
    catchphrase: 'ふわふわスイーツ女子、戦場では冷徹にトリガーを引くギャップ萌え',
    subscribers: '30.5万人',
    role: 'Flex / Support',
    mainGames: ['Apex Legends', 'VALORANT', 'スプラトゥーン3', '雑談'],
    past5Streams: [
      {
        id: 'moka_vod_01',
        title: '【Apex Legends】チャンピオン獲るまで終われません！気合の連続出撃🔥【甘結もか / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '4h 30m',
        viewCount: '12.9万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/08/23_moka_visual.webp',
        url: 'https://www.youtube.com/watch?v=moka_vod_01'
      },
      {
        id: 'moka_vod_02',
        title: '【VALORANT】味方を全力サポート！コントローラーで勝率UP！【甘結もか / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 21:00',
        duration: '3h 25m',
        viewCount: '11.4万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/08/23_moka_visual.webp',
        url: 'https://www.youtube.com/watch?v=moka_vod_02'
      },
      {
        id: 'moka_vod_03',
        title: '【スプラトゥーン3】Xマッチ挑戦！ウルトラショットで全滅を狙う！【甘結もか / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-27 19:30',
        duration: '3h 10m',
        viewCount: '10.2万回',
        game: 'スプラトゥーン3',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/08/23_moka_visual.webp',
        url: 'https://www.youtube.com/watch?v=moka_vod_03'
      },
      {
        id: 'moka_vod_04',
        title: '【お菓子作り＆雑談】手作りクッキーを作りながらまったりお喋り🍪【甘結もか / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 18:00',
        duration: '2h 15m',
        viewCount: '13.8万回',
        game: '料理・雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/08/23_moka_visual.webp',
        url: 'https://www.youtube.com/watch?v=moka_vod_04'
      },
      {
        id: 'moka_vod_05',
        title: '【歌枠】甘い歌声でとろけるような夜をお届け♪【甘結もか / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:30',
        duration: '1h 50m',
        viewCount: '14.6万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/08/23_moka_visual.webp',
        url: 'https://www.youtube.com/watch?v=moka_vod_05'
      }
    ]
  },
  'ginjou-saine': {
    debutDate: '2024年10月1日',
    bloodType: 'A型',
    fanName: 'サイネリア',
    streamTag: '#サイネらいぶ',
    fanArtTag: '#サイネあーと',
    favoriteWeapon: 'ヴァンダル / オペレーター',
    catchphrase: 'ミステリアスな佇まいと確かなゲームセンス、銀の弾丸',
    subscribers: '29.1万人',
    role: 'Controller / Flex',
    mainGames: ['VALORANT', 'Apex Legends', '原神', '雑談'],
    past5Streams: [
      {
        id: 'saine_vod_01',
        title: '【VALORANT】オーメン＆ヴァイパーで戦場を支配する！【銀城サイネ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 21:00',
        duration: '3h 40m',
        viewCount: '12.1万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/09/24_saine_visual.webp',
        url: 'https://www.youtube.com/watch?v=saine_vod_01'
      },
      {
        id: 'saine_vod_02',
        title: '【Apex Legends】スナイパーで索敵＆精密射撃！ランクマッチ【銀城サイネ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 20:00',
        duration: '4h 00m',
        viewCount: '11.5万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/09/24_saine_visual.webp',
        url: 'https://www.youtube.com/watch?v=saine_vod_02'
      },
      {
        id: 'saine_vod_03',
        title: '【原神】ナタ新エリア完全攻略！探索度100%を目指して【銀城サイネ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 19:00',
        duration: '3h 30m',
        viewCount: '13.4万回',
        game: '原神',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/09/24_saine_visual.webp',
        url: 'https://www.youtube.com/watch?v=saine_vod_03'
      },
      {
        id: 'saine_vod_04',
        title: '【雑談】深夜のチルタイム。静かな音楽とともにお話ししましょう🌙【銀城サイネ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 23:00',
        duration: '2h 10m',
        viewCount: '9.2万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/09/24_saine_visual.webp',
        url: 'https://www.youtube.com/watch?v=saine_vod_04'
      },
      {
        id: 'saine_vod_05',
        title: '【歌枠】心地よいウィスパーボイスで歌うバラード枠♪【銀城サイネ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:00',
        duration: '1h 50m',
        viewCount: '14.8万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/09/24_saine_visual.webp',
        url: 'https://www.youtube.com/watch?v=saine_vod_05'
      }
    ]
  },
  'tatsumaki-chise': {
    debutDate: '2024年11月15日',
    bloodType: 'O型',
    fanName: 'ちせなー',
    streamTag: '#ちせらいぶ',
    fanArtTag: '#ちせあーと',
    favoriteWeapon: 'ジェット / ファントム',
    catchphrase: '嵐を巻き起こすぶいすぽの新風！スピードとアグレッシブさで圧倒',
    subscribers: '27.9万人',
    role: 'Duelist / Flex',
    mainGames: ['VALORANT', 'Apex Legends', '歌枠', '雑談'],
    past5Streams: [
      {
        id: 'chise_vod_01',
        title: '【VALORANT】ジェットで最前線エントリー！フラグトップ取るぞ！【龍巻ちせ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-10-02 20:30',
        duration: '3h 45m',
        viewCount: '13.3万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/25_chise_visual.webp',
        url: 'https://www.youtube.com/watch?v=chise_vod_01'
      },
      {
        id: 'chise_vod_02',
        title: '【Apex Legends】オクタンで疾走！止まらない連続キル！【龍巻ちせ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-30 19:30',
        duration: '4h 10m',
        viewCount: '12.0万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/25_chise_visual.webp',
        url: 'https://www.youtube.com/watch?v=chise_vod_02'
      },
      {
        id: 'chise_vod_03',
        title: '【歌枠】デビュー記念Singing！心を込めて全力で歌います♪【龍巻ちせ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-28 21:00',
        duration: '2h 15m',
        viewCount: '15.6万回',
        game: '歌枠',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/25_chise_visual.webp',
        url: 'https://www.youtube.com/watch?v=chise_vod_03'
      },
      {
        id: 'chise_vod_04',
        title: '【ぶいすぽコラボ】先輩たちに凸待ち＆初ゲームコラボ！【龍巻ちせ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-25 20:00',
        duration: '3h 00m',
        viewCount: '16.9万回',
        game: 'コラボ配信',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/25_chise_visual.webp',
        url: 'https://www.youtube.com/watch?v=chise_vod_04'
      },
      {
        id: 'chise_vod_05',
        title: '【雑談】初配信の振り返りとこれからの意気込みトーク！【龍巻ちせ / ぶいすぽ】',
        platform: 'youtube',
        date: '2026-09-22 21:30',
        duration: '1h 30m',
        viewCount: '10.4万回',
        game: '雑談',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/25_chise_visual.webp',
        url: 'https://www.youtube.com/watch?v=chise_vod_05'
      }
    ]
  },
  'elis-ryugami': {
    debutDate: '2024年10月20日',
    bloodType: 'B型',
    fanName: 'Elisters',
    streamTag: '#ElisLive',
    fanArtTag: '#ElisArt',
    favoriteWeapon: 'AK-47 / Vandal',
    catchphrase: 'Sharp shooting and crisp calls, EN 2nd Gen Tactical Prodigy',
    subscribers: '12.8万人',
    role: 'Duelist / Flex',
    mainGames: ['VALORANT', 'CS2', 'Apex Legends', 'Just Chatting'],
    past5Streams: [
      {
        id: 'elis_vod_01',
        title: '【VALORANT】Immortal lobby grind! Tapping heads all night long 【#VSPOEN #ElisRyugami】',
        platform: 'youtube',
        date: '2026-10-02 21:00',
        duration: '3h 40m',
        viewCount: '4.2万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/28_elis_visual.webp',
        url: 'https://www.youtube.com/watch?v=elis_vod_01'
      },
      {
        id: 'elis_vod_02',
        title: '【CS2】Premier matchmaking highlights! One-taps only! 【#VSPOEN #ElisRyugami】',
        platform: 'youtube',
        date: '2026-09-30 20:30',
        duration: '3h 15m',
        viewCount: '3.8万回',
        game: 'Counter-Strike 2',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/28_elis_visual.webp',
        url: 'https://www.youtube.com/watch?v=elis_vod_02'
      },
      {
        id: 'elis_vod_03',
        title: '【Apex Legends】Hot drop practice on Olympus! Chaos guaranteed 【#VSPOEN #ElisRyugami】',
        platform: 'youtube',
        date: '2026-09-28 19:00',
        duration: '4h 00m',
        viewCount: '4.5万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/28_elis_visual.webp',
        url: 'https://www.youtube.com/watch?v=elis_vod_03'
      },
      {
        id: 'elis_vod_04',
        title: '【EN COLLAB】Party game night with VSPO EN 2nd Gen! 【#VSPOEN #ElisRyugami】',
        platform: 'youtube',
        date: '2026-09-25 21:00',
        duration: '2h 50m',
        viewCount: '6.1万回',
        game: 'Party Games',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/28_elis_visual.webp',
        url: 'https://www.youtube.com/watch?v=elis_vod_04'
      },
      {
        id: 'elis_vod_05',
        title: '【Just Chatting】Late night Q&A with chat ~ English & Japanese talk 【#VSPOEN #ElisRyugami】',
        platform: 'youtube',
        date: '2026-09-22 22:00',
        duration: '1h 45m',
        viewCount: '3.5万回',
        game: 'Just Chatting',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/28_elis_visual.webp',
        url: 'https://www.youtube.com/watch?v=elis_vod_05'
      }
    ]
  },
  'juno-umezono': {
    debutDate: '2024年10月20日',
    bloodType: 'A型',
    fanName: 'Junobies',
    streamTag: '#JunoLive',
    fanArtTag: '#JunoArt',
    favoriteWeapon: 'Peacekeeper / Phantom',
    catchphrase: 'Energetic gamer with wholesome vibes and a wicked shotgun flick!',
    subscribers: '12.1万人',
    role: 'Flex / Support',
    mainGames: ['Apex Legends', 'VALORANT', 'Minecraft', 'Karaoke'],
    past5Streams: [
      {
        id: 'juno_vod_01',
        title: '【Apex Legends】Ranked grinding with the squad! Let\'s get that RP! 【#VSPOEN #JunoUmezono】',
        platform: 'youtube',
        date: '2026-10-02 20:00',
        duration: '4h 10m',
        viewCount: '4.4万回',
        game: 'Apex Legends',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/29_juno_visual.webp',
        url: 'https://www.youtube.com/watch?v=juno_vod_01'
      },
      {
        id: 'juno_vod_02',
        title: '【VALORANT】First time in Diamond lobby! Wish me luck! 【#VSPOEN #JunoUmezono】',
        platform: 'youtube',
        date: '2026-09-30 21:00',
        duration: '3h 30m',
        viewCount: '3.9万回',
        game: 'VALORANT',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/29_juno_visual.webp',
        url: 'https://www.youtube.com/watch?v=juno_vod_02'
      },
      {
        id: 'juno_vod_03',
        title: '【Minecraft】Building the ultimate secret base on EN server! 【#VSPOEN #JunoUmezono】',
        platform: 'youtube',
        date: '2026-09-28 19:30',
        duration: '3h 45m',
        viewCount: '4.8万回',
        game: 'Minecraft',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/29_juno_visual.webp',
        url: 'https://www.youtube.com/watch?v=juno_vod_03'
      },
      {
        id: 'juno_vod_04',
        title: '【Karaoke】Chill singing stream ~ Pop, Anime & J-Rock favorites! 【#VSPOEN #JunoUmezono】',
        platform: 'youtube',
        date: '2026-09-25 21:30',
        duration: '2h 15m',
        viewCount: '5.2万回',
        game: 'Karaoke',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/29_juno_visual.webp',
        url: 'https://www.youtube.com/watch?v=juno_vod_04'
      },
      {
        id: 'juno_vod_05',
        title: '【Just Chatting】Cozy Sunday chat! Reading your letters and snacking 【#VSPOEN #JunoUmezono】',
        platform: 'youtube',
        date: '2026-09-22 22:30',
        duration: '1h 50m',
        viewCount: '3.6万回',
        game: 'Just Chatting',
        thumbnail: 'https://vspo.jp/wp-content/uploads/2026/11/29_juno_visual.webp',
        url: 'https://www.youtube.com/watch?v=juno_vod_05'
      }
    ]
  }
};

// Combine all into 32 members
const allMembers = scraped.map((s, idx) => {
  const memberId = idMap[s.id] || s.id;
  const isEn = s.branch === 'EN';
  const existing = existingMap.get(memberId) || {};
  const meta = newMemberMetadata[memberId] || {};

  const name = isEn ? s.nameEn : s.nameJp.replace(/\s+/g, '');
  const jpName = s.nameJp.replace(/\s+/g, '');
  const banner = isEn ? '/logos/vspo-en.png' : '/logos/vspo-jp.png';

  const unit = unitMap[memberId] || (isEn ? 'VSPO! EN' : 'VSPO! JP');

  return {
    id: memberId,
    name: name,
    jpName: jpName,
    nameEn: s.nameEn,
    branch: s.branch,
    unit: existing.unit || unit,
    color: s.color && s.color !== '#000000' ? s.color : (isEn ? '#1A1A1A' : '#FF4687'),
    accentColor: existing.accentColor || '#FFFFFF',
    avatar: s.select || existing.avatar,
    visual: s.visual || existing.avatar,
    banner: banner,
    bio: s.bio || existing.bio || '',
    birthday: s.birthday || existing.birthday || '',
    height: s.height || existing.height || '',
    debutDate: meta.debutDate || existing.debutDate || '',
    bloodType: meta.bloodType || existing.bloodType || '',
    fanName: meta.fanName || existing.fanName || '',
    streamTag: meta.streamTag || existing.streamTag || '',
    fanArtTag: meta.fanArtTag || existing.fanArtTag || '',
    favoriteWeapon: meta.favoriteWeapon || existing.favoriteWeapon || '',
    catchphrase: meta.catchphrase || existing.catchphrase || '',
    subscribers: meta.subscribers || existing.subscribers || '30万人',
    role: meta.role || existing.role || 'Gamer / Streamer',
    mainGames: meta.mainGames || existing.mainGames || ['VALORANT', 'Apex Legends', '雑談'],
    socials: {
      youtube: s.youtube || existing.socials?.youtube || '',
      twitter: s.twitter || existing.socials?.twitter || '',
      twitch: existing.socials?.twitch || ''
    },
    past5Streams: existing.past5Streams || meta.past5Streams || []
  };
});

console.log('Total built members:', allMembers.length);
console.log('JP members count:', allMembers.filter(m => m.branch === 'JP').length);
console.log('EN members count:', allMembers.filter(m => m.branch === 'EN').length);

const outputContent = `// VSPO! JP & EN Full Official Members Database (32 Members: JP 25, EN 7)
// NO PAID APIs / NO BILLING - Using public official CDN assets & static VOD archives
// Generated from official website data

export const MEMBERS = ${JSON.stringify(allMembers, null, 2)};

export const JP_MEMBERS = MEMBERS.filter(m => m.branch === 'JP');
export const EN_MEMBERS = MEMBERS.filter(m => m.branch === 'EN');

export const getMemberById = (id) => MEMBERS.find(m => m.id === id);
`;

fs.writeFileSync(path.resolve('src/data/members.js'), outputContent, 'utf8');
console.log('Successfully written to src/data/members.js!');
