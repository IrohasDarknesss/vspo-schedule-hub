// VSPO Schedule Data (Holodule-style)
// Real-time Dynamic Scheduler - Chronologically strict and accurate
// NO PAID APIS / NO BILLING - pure client-side dynamic real-time engine

import { getRelativeJSTDateString, evaluateStreamRealtime } from '../utils/realtimeDate.js';

// Raw schedule templates with strict relative day offsets
// -1 = 昨日 (10/3: スクリムDAY2 & 昨日のアーカイブ)
//  0 = 今日 (10/4: スクリムDAY3 & 本日のLIVE/予定)
//  1 = 明日 (10/5: スクリム最終日 & 明日の予定)
// 2+ = 週間 (10/6〜: 大会本番・大型コラボ)
const SCHEDULE_TEMPLATES = [
  {
    "id": "stream-yest-uruha",
    "offsetDays": -1,
    "time": "16:30",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "title": "【APEX】CRカップ スクリム DAY2(^^)/【ぶいすぽ/一ノ瀬うるは】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=67MMEUIV_EA",
    "thumbnail": "https://i.ytimg.com/vi/67MMEUIV_EA/hqdefault.jpg",
    "duration": "5h 12m",
    "tags": [
      "ApexLegends",
      "CRカップ",
      "スクリムDAY2"
    ],
    "collabMembers": [
      "tachibana-hinano",
      "kurumi-noah"
    ],
    "description": "CRカップスクリムDAY2！連携を深めてチャンピオン獲るぞー！"
  },
  {
    "id": "stream-yest-hinano",
    "offsetDays": -1,
    "time": "19:00",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "title": "【 Apex Legends 】 CRCUP スクリム day2【ぶいすぽっ！/橘ひなの】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=-DyueUeSWiw",
    "thumbnail": "https://i.ytimg.com/vi/-DyueUeSWiw/hqdefault.jpg",
    "duration": "4h 40m",
    "tags": [
      "ApexLegends",
      "CRCUP",
      "橘ひなの"
    ],
    "collabMembers": [
      "kurumi-noah",
      "ichinose-uruha"
    ],
    "description": "スクリム2日目！昨日の反省を生かして構成を詰めていきます。"
  },
  {
    "id": "stream-yest-tsuna",
    "offsetDays": -1,
    "time": "21:00",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "title": "【APEX】CRカップスクリム２日目！一番の強敵はラグ【ぶいすぽ / 猫汰つな】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=TYyz29rNX2U",
    "thumbnail": "https://i.ytimg.com/vi/TYyz29rNX2U/hqdefault.jpg",
    "duration": "4h 15m",
    "tags": [
      "APEX",
      "CRカップ",
      "猫汰つな"
    ],
    "collabMembers": [],
    "description": "前線で撃ち合ってキルポイント稼ぎます！"
  },
  {
    "id": "stream-yest-sumire",
    "offsetDays": -1,
    "time": "19:30",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "title": "【APEX】CRCUP SCRIM day2 あのIeNaGaコーチ【ぶいすぽっ！/花芽すみれ】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=pRGcQq8Jq3E",
    "thumbnail": "https://i.ytimg.com/vi/pRGcQq8Jq3E/hqdefault.jpg",
    "duration": "5h 30m",
    "tags": [
      "APEX",
      "CRCUP",
      "花芽すみれ"
    ],
    "collabMembers": [
      "kaga-nazuna"
    ],
    "description": "コーチの指導を受けながらスクリムDAY2！"
  },
  {
    "id": "stream-yest-nazuna",
    "offsetDays": -1,
    "time": "18:00",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "title": "【APEX】え？この３人で出場ってコト…！？【ぶいすぽ/花芽なずな】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=LO9u_wTdMls",
    "thumbnail": "https://i.ytimg.com/vi/LO9u_wTdMls/hqdefault.jpg",
    "duration": "4h 10m",
    "tags": [
      "APEX",
      "花芽なずな"
    ],
    "collabMembers": [
      "kaga-sumire"
    ],
    "description": "チーム初顔合わせスクリム！"
  },
  {
    "id": "stream-yest-beni",
    "offsetDays": -1,
    "time": "19:30",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "title": "【APEX】 CRcupスクリム２日目🍸 w/kamito 渋谷ハル【ぶいすぽ/八雲べに】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=YakU-fUjgaY",
    "thumbnail": "https://i.ytimg.com/vi/YakU-fUjgaY/hqdefault.jpg",
    "duration": "4h 25m",
    "tags": [
      "APEX",
      "CRカップ",
      "八雲べに"
    ],
    "collabMembers": [],
    "description": "スクリム2日目！チームファイトを磨きます。"
  },
  {
    "id": "stream-yest-ramune",
    "offsetDays": -1,
    "time": "20:00",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "title": "【キングダムハーツHD1.5+2.5】KINGDOM HEARTS II FINAL MIX ＃７【ぶいすぽ/白波らむね】",
    "game": "キングダムハーツ",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=A7o_YZfllMo",
    "thumbnail": "https://i.ytimg.com/vi/A7o_YZfllMo/hqdefault.jpg",
    "duration": "3h 50m",
    "tags": [
      "キングダムハーツ",
      "白波らむね"
    ],
    "collabMembers": [],
    "description": "KH2実況第7回！ロクサス編からの続き。"
  },
  {
    "id": "stream-yest-sena",
    "offsetDays": -1,
    "time": "21:00",
    "memberId": "asumi-sena",
    "branch": "JP",
    "title": "【LoL】大好きなアカリが今、強いと聞いて。【空澄セナ/ぶいすぽっ！】",
    "game": "League of Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=OW7LrJpp-dE",
    "thumbnail": "https://i.ytimg.com/vi/OW7LrJpp-dE/hqdefault.jpg",
    "duration": "3h 30m",
    "tags": [
      "LoL",
      "空澄セナ"
    ],
    "collabMembers": [],
    "description": "アカリでミッドレーン無双したい配信！"
  },
  {
    "id": "stream-yest-remia",
    "offsetDays": -1,
    "time": "16:00",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "title": "【GUESS THE FOOD】 Interactive BOTchi play! 【#VSPOEN #RemiaAotsuki】",
    "game": "Interactive Chat",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=I4_uSB6ZW0w",
    "thumbnail": "https://i.ytimg.com/vi/I4_uSB6ZW0w/hqdefault.jpg",
    "duration": "2h 15m",
    "tags": [
      "Interactive",
      "VSPO_EN",
      "Remia"
    ],
    "collabMembers": [],
    "description": "Guess the food mini-game with viewers and chat."
  },
  {
    "id": "stream-yest-arya",
    "offsetDays": -1,
    "time": "15:30",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "title": "【MINECRAFT】visiting the vspo server in autumn !!【#VSPOEN #AryaKuroha】",
    "game": "Minecraft",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=5SarhnVfy3g",
    "thumbnail": "https://i.ytimg.com/vi/5SarhnVfy3g/hqdefault.jpg",
    "duration": "3h 10m",
    "tags": [
      "Minecraft",
      "VSPO_Server",
      "Arya"
    ],
    "collabMembers": [],
    "description": "Exploring the autumn updates in the official VSPO server!"
  },
  {
    "id": "stream-yest-met",
    "offsetDays": -1,
    "time": "12:00",
    "memberId": "komori-met",
    "branch": "JP",
    "title": "【 APEX 】うおおおおおおお w/ すみー ぷーさん【 ぶいすぽっ！ / 小森めと 】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=nHVrZaPlCbM",
    "thumbnail": "https://i.ytimg.com/vi/nHVrZaPlCbM/hqdefault.jpg",
    "duration": "4h 00m",
    "tags": [
      "APEX",
      "小森めと"
    ],
    "collabMembers": [],
    "description": "昼活ランク！すみーとぷーさんと突撃！"
  },
  {
    "id": "stream-today-noah",
    "offsetDays": 0,
    "time": "17:00",
    "estimatedDurationMins": 240,
    "memberId": "kurumi-noah",
    "branch": "JP",
    "title": "【 APEX 】CRカップスクリム３日目！本番直前カスタム！ #わんちゃんWIN 【 ぶいすぽっ！胡桃のあ 】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=anq1F3UhITM",
    "thumbnail": "https://i.ytimg.com/vi/anq1F3UhITM/hqdefault.jpg",
    "tags": [
      "APEX",
      "CRカップ",
      "スクリムDAY3",
      "胡桃のあ"
    ],
    "collabMembers": [
      "ichinose-uruha",
      "tachibana-hinano"
    ],
    "description": "スクリム3日目！ポジション取りと最終円の戦い方を固めていきます！"
  },
  {
    "id": "stream-today-jira",
    "offsetDays": 0,
    "time": "18:00",
    "estimatedDurationMins": 180,
    "memberId": "jira-jisaki",
    "branch": "EN",
    "title": "【League of Legends】DIA IKUZOOOOOOOOOOO【#VSPOEN #JiraJisaki】",
    "game": "League of Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=UTD1eqEo_Ac",
    "thumbnail": "https://i.ytimg.com/vi/UTD1eqEo_Ac/hqdefault.jpg",
    "tags": [
      "LoL",
      "VSPO_EN",
      "Jira"
    ],
    "collabMembers": [],
    "description": "Grinding Solo/Duo queue to Diamond! Wish me good teammates!"
  },
  {
    "id": "stream-today-qpi",
    "offsetDays": 0,
    "time": "16:45",
    "estimatedDurationMins": 200,
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "title": "【スト6】マスター帯MR1800目指す！春麗で熱血ランクマッチ！【神成きゅぴ / ぶいすぽ】",
    "game": "ストリートファイター6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=TYyz29rNX2U",
    "thumbnail": "https://i.ytimg.com/vi/TYyz29rNX2U/hqdefault.jpg",
    "tags": [
      "スト6",
      "神成きゅぴ",
      "春麗"
    ],
    "collabMembers": [],
    "description": "春麗で高みを目指す！MR盛りまくるぞおおお！"
  },
  {
    "id": "stream-today-elis",
    "offsetDays": 0,
    "time": "16:15",
    "estimatedDurationMins": 180,
    "memberId": "elis-ryugami",
    "branch": "EN",
    "title": "【VALORANT】Immortal lobby grind! Tapping heads all afternoon! 【#VSPOEN #ElisRyugami】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=rlZ-9PavIKk",
    "thumbnail": "https://i.ytimg.com/vi/rlZ-9PavIKk/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "VSPO_EN",
      "Elis"
    ],
    "collabMembers": [],
    "description": "Grinding competitive matches in Immortal lobby!"
  },
  {
    "id": "stream-today-toto",
    "offsetDays": 0,
    "time": "18:00",
    "estimatedDurationMins": 180,
    "memberId": "kogara-toto",
    "branch": "JP",
    "title": "【Apex Legends】今夜こそソロマス到達！ダイヤ1から駆け抜ける！【小雀とと / ぶいすぽ】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=3KLsBuksi88",
    "thumbnail": "https://i.ytimg.com/vi/3KLsBuksi88/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "ソロマス",
      "小雀とと"
    ],
    "collabMembers": [],
    "description": "あと少しでマスター！落ち着いてスナイプ決めていきます！"
  },
  {
    "id": "stream-today-mimi",
    "offsetDays": 0,
    "time": "18:30",
    "estimatedDurationMins": 180,
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "title": "【VALORANT】コンペティティブ！アセンダント目指して集中ランク🔥【兎咲ミミ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=rX8-kvdsccw",
    "thumbnail": "https://i.ytimg.com/vi/rX8-kvdsccw/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "ランク",
      "兎咲ミミ"
    ],
    "collabMembers": [],
    "description": "勝つぞ勝つぞ勝つぞ！エイム調整ばっちりです！"
  },
  {
    "id": "stream-today-lisa",
    "offsetDays": 0,
    "time": "19:00",
    "estimatedDurationMins": 200,
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "title": "【ぶいすぽフルパ】うるさすぎて鼓膜崩壊VALORANTマッチｗｗ【英リサ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=jOsI8gGkwSc",
    "thumbnail": "https://i.ytimg.com/vi/jOsI8gGkwSc/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "ぶいすぽフルパ",
      "英リサ"
    ],
    "collabMembers": [
      "kisaragi-ren",
      "shinomiya-runa",
      "yumeno-akari",
      "sendo-yuuhi"
    ],
    "description": "いつものメンバーで大騒ぎVALORANT！勝っても負けても楽しいやつ！"
  },
  {
    "id": "stream-today-ren",
    "offsetDays": 0,
    "time": "19:30",
    "estimatedDurationMins": 180,
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "title": "【VALORANT】冷静沈着に勝ち切るソロコンペ。イモータルへ【如月れん / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=FhUsZr6il-I",
    "thumbnail": "https://i.ytimg.com/vi/FhUsZr6il-I/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "如月れん"
    ],
    "collabMembers": [],
    "description": "コールと立ち回りを徹底して着実にポイントを積み上げます。"
  },
  {
    "id": "stream-today-narin",
    "offsetDays": 0,
    "time": "20:00",
    "estimatedDurationMins": 150,
    "memberId": "narin-mikure",
    "branch": "EN",
    "title": "【VALORANT】 diamond 3 10rr ~ chill weekend grind 【#VSPOEN #NarinMikure】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=yK62q7V_JvE",
    "thumbnail": "https://i.ytimg.com/vi/yK62q7V_JvE/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "VSPO_EN",
      "Narin"
    ],
    "collabMembers": [],
    "description": "Chill Sunday grind! Trying to reach Ascendant before the act ends."
  },
  {
    "id": "stream-today-akari",
    "offsetDays": 0,
    "time": "20:30",
    "estimatedDurationMins": 200,
    "memberId": "yumeno-akari",
    "branch": "JP",
    "title": "【スト6】キャミィでMR1700到達へ！絶対に諦めない🔥【夢野あかり / ぶいすぽ】",
    "game": "ストリートファイター6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=2nz9F90qViE",
    "thumbnail": "https://i.ytimg.com/vi/2nz9F90qViE/hqdefault.jpg",
    "tags": [
      "スト6",
      "夢野あかり",
      "キャミィ"
    ],
    "collabMembers": [],
    "description": "練習してきたセットプレイを実戦で決める！気合十分！"
  },
  {
    "id": "stream-today-runa",
    "offsetDays": 0,
    "time": "21:00",
    "estimatedDurationMins": 180,
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "title": "【歌枠】癒やしの高音ボイスで秋の名曲を熱唱♪【紫宮るな / ぶいすぽ】",
    "game": "歌枠",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=dNoHoT0wsN4",
    "thumbnail": "https://i.ytimg.com/vi/dNoHoT0wsN4/hqdefault.jpg",
    "tags": [
      "歌枠",
      "Singing",
      "紫宮るな"
    ],
    "collabMembers": [],
    "description": "ゆったりした夜のお供に。リクエストもお待ちしてます！"
  },
  {
    "id": "stream-today-kuromu",
    "offsetDays": 0,
    "time": "21:00",
    "estimatedDurationMins": 180,
    "memberId": "yano-kuromu",
    "branch": "JP",
    "title": "【Overwatch 2】サポート専でグラマス目指す！ナノブーストで勝つ！【夜乃くろむ / ぶいすぽ】",
    "game": "Overwatch 2",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=NYAESF1LZ4c",
    "thumbnail": "https://i.ytimg.com/vi/NYAESF1LZ4c/hqdefault.jpg",
    "tags": [
      "Overwatch2",
      "OW2",
      "夜乃くろむ"
    ],
    "collabMembers": [],
    "description": "アナとキリコで味方をキャリーする夜！深夜テンションで行きます！"
  },
  {
    "id": "stream-today-kokage",
    "offsetDays": 0,
    "time": "21:30",
    "estimatedDurationMins": 180,
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "title": "【VALORANT】ソーヴァの矢で全てを暴く！アセンダント昇格戦🔥【紡木こかげ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=A7o_YZfllMo",
    "thumbnail": "https://i.ytimg.com/vi/A7o_YZfllMo/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "紡木こかげ",
      "ソーヴァ"
    ],
    "collabMembers": [],
    "description": "定点を駆使して味方に情報をもたらす！昇格戦絶対に勝ちたい！"
  },
  {
    "id": "stream-today-ema",
    "offsetDays": 0,
    "time": "22:00",
    "estimatedDurationMins": 180,
    "memberId": "aizawa-ema",
    "branch": "JP",
    "title": "【スト6】たくさんねてしまった・・・夜更かしランク！【ぶいすぽっ！/ 藍沢エマ】",
    "game": "ストリートファイター6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=BxSkvIN-FZs",
    "thumbnail": "https://i.ytimg.com/vi/BxSkvIN-FZs/hqdefault.jpg",
    "tags": [
      "スト6",
      "藍沢エマ"
    ],
    "collabMembers": [],
    "description": "深夜のランクマッチ！コンボ練習の成果を発揮するぞ！"
  },
  {
    "id": "stream-today-yuuhi",
    "offsetDays": 0,
    "time": "22:00",
    "estimatedDurationMins": 180,
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "title": "【VALORANT】デュエリストの誇りをかけて勝ち抜くランク戦！【千燈ゆうひ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=OW7LrJpp-dE",
    "thumbnail": "https://i.ytimg.com/vi/OW7LrJpp-dE/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "千燈ゆうひ"
    ],
    "collabMembers": [],
    "description": "前線で敵を薙ぎ倒す！熱い試合をお届けします！"
  },
  {
    "id": "stream-today-hanabi",
    "offsetDays": 0,
    "time": "22:30",
    "estimatedDurationMins": 180,
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "title": "【VALORANT】初弾ヘッドショットで全てを撃ち抜く！暴れランク【蝶屋はなび / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=rX8-kvdsccw",
    "thumbnail": "https://i.ytimg.com/vi/rX8-kvdsccw/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "蝶屋はなび"
    ],
    "collabMembers": [],
    "description": "華麗に撃ち合ってド派手に勝つ！深夜のワンタップ祭り！"
  },
  {
    "id": "stream-today-moka",
    "offsetDays": 0,
    "time": "23:00",
    "estimatedDurationMins": 200,
    "memberId": "amayui-moka",
    "branch": "JP",
    "title": "【Apex Legends】チャンピオン獲るまで終われません！気合の連続出撃🔥【甘結もか / ぶいすぽ】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=PK9Ucd729oo",
    "thumbnail": "https://i.ytimg.com/vi/PK9Ucd729oo/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "甘結もか",
      "耐久"
    ],
    "collabMembers": [],
    "description": "深夜のチャンピオン耐久！早く終わらせて寝たいです（切実）！"
  },
  {
    "id": "stream-today-saine",
    "offsetDays": 0,
    "time": "23:30",
    "estimatedDurationMins": 150,
    "memberId": "ginjou-saine",
    "branch": "JP",
    "title": "【VALORANT】オーメン＆ヴァイパーで戦場を支配する！【銀城サイネ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=FhUsZr6il-I",
    "thumbnail": "https://i.ytimg.com/vi/FhUsZr6il-I/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "銀城サイネ"
    ],
    "collabMembers": [],
    "description": "スモークの心理戦。静かに、確実に勝利を手繰り寄せます。"
  },
  {
    "id": "stream-today-chise",
    "offsetDays": 0,
    "time": "23:45",
    "estimatedDurationMins": 150,
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "title": "【VALORANT】ジェットで最前線エントリー！フラグトップ取るぞ！【龍巻ちせ / ぶいすぽ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=TYyz29rNX2U",
    "thumbnail": "https://i.ytimg.com/vi/TYyz29rNX2U/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "龍巻ちせ",
      "新人"
    ],
    "collabMembers": [],
    "description": "嵐のように駆け抜けるエントリー！初見さんもぜひ遊びに来てね！"
  },
  {
    "id": "stream-tomo-sumire",
    "offsetDays": 1,
    "time": "18:00",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "title": "【APEX】CRカップ本番直前！最終調整スクリム！【ぶいすぽっ！/花芽すみれ】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=yyitOUS_y-E",
    "thumbnail": "https://i.ytimg.com/vi/yyitOUS_y-E/hqdefault.jpg",
    "tags": [
      "APEX",
      "CRカップ",
      "スクリム最終日"
    ],
    "collabMembers": [
      "kaga-nazuna"
    ],
    "description": "本番前日の最終スクリム！悔いのないように戦います！"
  },
  {
    "id": "stream-tomo-uruha",
    "offsetDays": 1,
    "time": "19:00",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "title": "【APEX】CRカップ スクリム DAY4＆チーム作戦会議【ぶいすぽ/一ノ瀬うるは】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=lSvLABLEhO0",
    "thumbnail": "https://i.ytimg.com/vi/lSvLABLEhO0/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "CRカップ",
      "一ノ瀬うるは"
    ],
    "collabMembers": [
      "kurumi-noah",
      "tachibana-hinano"
    ],
    "description": "スクリム最終日！チームの動きを仕上げます！"
  },
  {
    "id": "stream-tomo-hinano",
    "offsetDays": 1,
    "time": "19:30",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "title": "【 Apex Legends 】 CRCUP スクリム 最終日【ぶいすぽっ！/橘ひなの】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=CBeDk7H0zPQ",
    "thumbnail": "https://i.ytimg.com/vi/CBeDk7H0zPQ/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "CRCUP",
      "橘ひなの"
    ],
    "collabMembers": [
      "kurumi-noah",
      "ichinose-uruha"
    ],
    "description": "明日はいよいよ本番！絶対優勝するぞー！"
  },
  {
    "id": "stream-tomo-ramune",
    "offsetDays": 1,
    "time": "20:00",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "title": "【VALORANT】アセンダント昇格耐久！集中ランク戦【ぶいすぽ/白波らむね】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=OZjJpDbk4gA",
    "thumbnail": "https://i.ytimg.com/vi/OZjJpDbk4gA/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "白波らむね"
    ],
    "collabMembers": [],
    "description": "アセンダント上がるまで終わりません！"
  },
  {
    "id": "stream-tomo-sena",
    "offsetDays": 1,
    "time": "21:00",
    "memberId": "asumi-sena",
    "branch": "JP",
    "title": "【歌枠】日曜日の夜にゆったり歌うSinging Stream♪【空澄セナ/ぶいすぽっ！】",
    "game": "歌枠",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=1MSAb0Opz90",
    "thumbnail": "https://i.ytimg.com/vi/1MSAb0Opz90/hqdefault.jpg",
    "tags": [
      "歌枠",
      "空澄セナ"
    ],
    "collabMembers": [],
    "description": "週末の終わりに癒やしの歌声を。"
  },
  {
    "id": "stream-tomo-riko",
    "offsetDays": 1,
    "time": "23:00",
    "memberId": "riko-solari",
    "branch": "EN",
    "title": "【KARAOKE】Midnight Singing Stream ~ J-Pop, English Pop & Anime! 【#VSPOEN #RikoSolari】",
    "game": "Karaoke",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=77lG-Kx3xjY",
    "thumbnail": "https://i.ytimg.com/vi/77lG-Kx3xjY/hqdefault.jpg",
    "tags": [
      "Karaoke",
      "Singing",
      "VSPO_EN",
      "Riko"
    ],
    "collabMembers": [],
    "description": "Midnight chill karaoke session! Singing Japanese and Western favorites."
  },
  {
    "id": "stream-tomo-juno",
    "offsetDays": 1,
    "time": "23:30",
    "memberId": "juno-umezono",
    "branch": "EN",
    "title": "【Apex Legends】Ranked grinding with the squad! Let's get that RP! 【#VSPOEN #JunoUmezono】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=UTD1eqEo_Ac",
    "thumbnail": "https://i.ytimg.com/vi/UTD1eqEo_Ac/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "VSPO_EN",
      "Juno"
    ],
    "collabMembers": [
      "elis-ryugami",
      "narin-mikure"
    ],
    "description": "Late night ranked grind with the EN crew! Full trio energy!"
  },
  {
    "id": "stream-week-tourney",
    "offsetDays": 2,
    "time": "18:00",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "title": "【APEX】第11回 CRカップ 本番当日！決戦の時！【ぶいすぽ/一ノ瀬うるは】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=67MMEUIV_EA",
    "thumbnail": "https://i.ytimg.com/vi/67MMEUIV_EA/hqdefault.jpg",
    "tags": [
      "CRカップ本番",
      "ApexLegends"
    ],
    "collabMembers": [
      "tachibana-hinano",
      "kurumi-noah"
    ],
    "description": "ついに本番！全チーム全力の戦い！応援よろしくお願いします！"
  },
  {
    "id": "stream-week-collab",
    "offsetDays": 3,
    "time": "20:00",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "title": "【ぶいすぽ大会振り返り】みんなでお疲れ様打ち上げコラボ！【胡桃のあ】",
    "game": "雑談",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=JawD7Ojzwvg",
    "thumbnail": "https://i.ytimg.com/vi/JawD7Ojzwvg/hqdefault.jpg",
    "tags": [
      "振り返り",
      "雑談",
      "胡桃のあ"
    ],
    "collabMembers": [
      "ichinose-uruha",
      "tachibana-hinano",
      "kaga-sumire"
    ],
    "description": "大会の思い出を語り尽くす夜！"
  }
];

// Function to generate dynamically bound schedules based on current real-time JST
export function getLiveSchedules() {
  return SCHEDULE_TEMPLATES.map(item => {
    const dynamicDate = getRelativeJSTDateString(item.offsetDays || 0);
    const stream = {
      ...item,
      date: dynamicDate,
    };
    return evaluateStreamRealtime(stream);
  });
}

// Initial export
export const SCHEDULES = getLiveSchedules();
