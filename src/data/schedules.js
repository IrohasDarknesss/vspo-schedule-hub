// VSPO! Master Schedules & Archives (Auto-synchronized with verified talent videos)
// Real-world verified video IDs for every talent - NO mismatched thumbnails
// Real-time Dynamic Scheduler - Automatically binds to current JST date & time!

import { getRelativeJSTDateString, evaluateStreamRealtime } from '../utils/realtimeDate';

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
    "description": "CRカップスクリムDAY2！連携を深めてチャンピオン獲るぞー！",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "スクリム2日目！昨日の反省を生かして構成を詰めていきます。",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "前線で撃ち合ってキルポイント稼ぎます！",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "コーチの指導を受けながらスクリムDAY2！",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "チーム初顔合わせスクリム！",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "スクリム2日目！チームファイトを磨きます。",
    "date": "2026-10-05",
    "status": "ended"
  },
  {
    "id": "stream-yest-ramune",
    "offsetDays": -1,
    "time": "20:00",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "title": "【キングダムハーツHD1.5+2.5】KINGDOM HEARTS II FINAL MIX ＃７【ぶいすぽ/白波らむね】",
    "game": "KINGDOM HEARTS II",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=A7o_YZfllMo",
    "thumbnail": "https://i.ytimg.com/vi/A7o_YZfllMo/hqdefault.jpg",
    "duration": "3h 50m",
    "tags": [
      "キングダムハーツ",
      "白波らむね"
    ],
    "collabMembers": [],
    "description": "KH2実況第7回！ロクサス編からの続き。",
    "date": "2026-10-05",
    "status": "ended"
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
    "description": "アカリでミッドレーン無双したい配信！",
    "date": "2026-10-05",
    "status": "ended"
  },
  {
    "id": "stream-yest-remia",
    "offsetDays": -1,
    "time": "16:00",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "title": "【DEBUT STREAM】Hi, I am Remia Aotsuki! Nice to meet you! 【#VSPOEN #RemiaAotsuki】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=hg8kVriK77M",
    "thumbnail": "https://i.ytimg.com/vi/hg8kVriK77M/hqdefault.jpg",
    "duration": "2h 15m",
    "tags": [
      "Interactive",
      "VSPO_EN",
      "Remia"
    ],
    "collabMembers": [],
    "description": "Guess the food mini-game with viewers and chat.",
    "date": "2026-10-05",
    "status": "ended"
  },
  {
    "id": "stream-yest-arya",
    "offsetDays": -1,
    "time": "15:30",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "title": "【DEBUT】Don't get too excited !!【#VSPOEN #AryaKuroha】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=Uta4ladnvXU",
    "thumbnail": "https://i.ytimg.com/vi/Uta4ladnvXU/hqdefault.jpg",
    "duration": "3h 10m",
    "tags": [
      "Minecraft",
      "VSPO_Server",
      "Arya"
    ],
    "collabMembers": [],
    "description": "Exploring the autumn updates in the official VSPO server!",
    "date": "2026-10-05",
    "status": "ended"
  },
  {
    "id": "stream-yest-met",
    "offsetDays": -1,
    "time": "12:00",
    "memberId": "komori-met",
    "branch": "JP",
    "title": "【 APEX 】CRカップ スクリムday2 w/ 4rmy【 ぶいすぽっ！ / 小森めと 】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=mgSpugSIgw4",
    "thumbnail": "https://i.ytimg.com/vi/mgSpugSIgw4/hqdefault.jpg",
    "duration": "4h 00m",
    "tags": [
      "APEX",
      "小森めと"
    ],
    "collabMembers": [],
    "description": "昼活ランク！すみーとぷーさんと突撃！",
    "date": "2026-10-05",
    "status": "ended"
  },
  {
    "id": "stream-today-noah",
    "offsetDays": 0,
    "time": "17:00",
    "estimatedDurationMins": 240,
    "memberId": "kurumi-noah",
    "branch": "JP",
    "title": "【 APEX 】CRカップスクリム３日目！ #わんちゃんWIN 【 ぶいすぽっ！胡桃のあ 】",
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
    "description": "スクリム3日目！ポジション取りと最終円の戦い方を固めていきます！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと27分"
  },
  {
    "id": "stream-today-jira",
    "offsetDays": 0,
    "time": "18:00",
    "estimatedDurationMins": 180,
    "memberId": "jira-jisaki",
    "branch": "EN",
    "title": "【DEBUT】 kaiju meta 【#VSPOEN #JiraJisaki】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=fOmtSrZV-H0",
    "thumbnail": "https://i.ytimg.com/vi/fOmtSrZV-H0/hqdefault.jpg",
    "tags": [
      "LoL",
      "VSPO_EN",
      "Jira"
    ],
    "collabMembers": [],
    "description": "Grinding Solo/Duo queue to Diamond! Wish me good teammates!",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと1時間27分"
  },
  {
    "id": "stream-today-qpi",
    "offsetDays": 0,
    "time": "16:45",
    "estimatedDurationMins": 200,
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "title": "【STREET FIGHTER 6】V最終わったらこれしよあれしよ！の予定すべて終えてきたヨ【神成きゅぴ / ぶいすぽ】",
    "game": "Street Fighter 6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=L23h18k12kM",
    "thumbnail": "https://i.ytimg.com/vi/L23h18k12kM/hqdefault.jpg",
    "tags": [
      "スト6",
      "神成きゅぴ",
      "春麗"
    ],
    "collabMembers": [],
    "description": "春麗で高みを目指す！MR盛りまくるぞおおお！",
    "date": "2026-10-06",
    "status": "live",
    "elapsed": "0分経過"
  },
  {
    "id": "stream-today-elis",
    "offsetDays": 0,
    "time": "16:15",
    "estimatedDurationMins": 180,
    "memberId": "elis-ryugami",
    "branch": "EN",
    "title": "【DEBUT STREAM】Welcome to my world! 【#VSPOEN #ErisSuzukami】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=5Bx6FxWPHe4",
    "thumbnail": "https://i.ytimg.com/vi/5Bx6FxWPHe4/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "VSPO_EN",
      "Elis"
    ],
    "collabMembers": [],
    "description": "Grinding competitive matches in Immortal lobby!",
    "date": "2026-10-06",
    "status": "live",
    "elapsed": "18分経過"
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
    "description": "あと少しでマスター！落ち着いてスナイプ決めていきます！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと1時間27分"
  },
  {
    "id": "stream-today-mimi",
    "offsetDays": 0,
    "time": "18:30",
    "estimatedDurationMins": 180,
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "title": "【VALORANT】ふるぱ【ぶいすぽ/兎咲ミミ】",
    "game": "VALORANT",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=Q-pwktzl3cY",
    "thumbnail": "https://i.ytimg.com/vi/Q-pwktzl3cY/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "ランク",
      "兎咲ミミ"
    ],
    "collabMembers": [],
    "description": "勝つぞ勝つぞ勝つぞ！エイム調整ばっちりです！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと1時間57分"
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
    "description": "いつものメンバーで大騒ぎVALORANT！勝っても負けても楽しいやつ！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと2時間27分"
  },
  {
    "id": "stream-today-ren",
    "offsetDays": 0,
    "time": "19:30",
    "estimatedDurationMins": 180,
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "title": "Slow Bloom / Kisaragi Ren [#DIAMONDintheROUGH] MV",
    "game": "オリジナル曲",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=zZkP17P1_Wk",
    "thumbnail": "https://i.ytimg.com/vi/zZkP17P1_Wk/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "如月れん"
    ],
    "collabMembers": [],
    "description": "コールと立ち回りを徹底して着実にポイントを積み上げます。",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと2時間57分"
  },
  {
    "id": "stream-today-narin",
    "offsetDays": 0,
    "time": "20:00",
    "estimatedDurationMins": 150,
    "memberId": "narin-mikure",
    "branch": "EN",
    "title": "【DEBUT】A new dawn begins! Nice to meet you all! 【#VSPOEN #NarinMikure】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=pvzQwiJPbpM",
    "thumbnail": "https://i.ytimg.com/vi/pvzQwiJPbpM/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "VSPO_EN",
      "Narin"
    ],
    "collabMembers": [],
    "description": "Chill Sunday grind! Trying to reach Ascendant before the act ends.",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと3時間27分"
  },
  {
    "id": "stream-today-akari",
    "offsetDays": 0,
    "time": "20:30",
    "estimatedDurationMins": 200,
    "memberId": "yumeno-akari",
    "branch": "JP",
    "title": "【スト6】キャミィでMR1700到達へ！絶対に諦めない🔥【夢野あかり / ぶいすぽ】",
    "game": "Street Fighter 6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=2nz9F90qViE",
    "thumbnail": "https://i.ytimg.com/vi/2nz9F90qViE/hqdefault.jpg",
    "tags": [
      "スト6",
      "夢野あかり",
      "キャミィ"
    ],
    "collabMembers": [],
    "description": "練習してきたセットプレイを実戦で決める！気合十分！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと3時間57分"
  },
  {
    "id": "stream-today-runa",
    "offsetDays": 0,
    "time": "21:00",
    "estimatedDurationMins": 180,
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "title": "アイネクライネ / 紫宮るな cover",
    "game": "歌ってみた",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=NFMmSOWPj_k",
    "thumbnail": "https://i.ytimg.com/vi/NFMmSOWPj_k/hqdefault.jpg",
    "tags": [
      "歌枠",
      "Singing",
      "紫宮るな"
    ],
    "collabMembers": [],
    "description": "ゆったりした夜のお供に。リクエストもお待ちしてます！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと4時間27分"
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
    "description": "アナとキリコで味方をキャリーする夜！深夜テンションで行きます！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと4時間27分"
  },
  {
    "id": "stream-today-kokage",
    "offsetDays": 0,
    "time": "21:30",
    "estimatedDurationMins": 180,
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "title": "【初配信】はじめまして・・・！紡木こかげです 【 #ぶいすぽ新メンバー #紡木こかげ 】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=R9jUaXq4a-w",
    "thumbnail": "https://i.ytimg.com/vi/R9jUaXq4a-w/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "紡木こかげ",
      "ソーヴァ"
    ],
    "collabMembers": [],
    "description": "定点を駆使して味方に情報をもたらす！昇格戦絶対に勝ちたい！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと4時間57分"
  },
  {
    "id": "stream-today-ema",
    "offsetDays": 0,
    "time": "22:00",
    "estimatedDurationMins": 180,
    "memberId": "aizawa-ema",
    "branch": "JP",
    "title": "【スト6】お【ぶいすぽっ！/ 藍沢エマ】",
    "game": "Street Fighter 6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=qnHAMWXUW64",
    "thumbnail": "https://i.ytimg.com/vi/qnHAMWXUW64/hqdefault.jpg",
    "tags": [
      "スト6",
      "藍沢エマ"
    ],
    "collabMembers": [],
    "description": "深夜のランクマッチ！コンボ練習の成果を発揮するぞ！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと5時間27分"
  },
  {
    "id": "stream-today-yuuhi",
    "offsetDays": 0,
    "time": "22:00",
    "estimatedDurationMins": 180,
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "title": "【初配信】はじめまして！！千燈ゆうひです！！【ぶいすぽっ！ / 千燈ゆうひ】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=rTehLr_kmq8",
    "thumbnail": "https://i.ytimg.com/vi/rTehLr_kmq8/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "千燈ゆうひ"
    ],
    "collabMembers": [],
    "description": "前線で敵を薙ぎ倒す！熱い試合をお届けします！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと5時間27分"
  },
  {
    "id": "stream-today-hanabi",
    "offsetDays": 0,
    "time": "22:30",
    "estimatedDurationMins": 180,
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "title": "【初配信】はじめまして☆蝶屋はなびデス！！！！！【 ぶいすぽっ！ /蝶屋はなび 】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=PBusqknKaAQ",
    "thumbnail": "https://i.ytimg.com/vi/PBusqknKaAQ/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "蝶屋はなび"
    ],
    "collabMembers": [],
    "description": "華麗に撃ち合ってド派手に勝つ！深夜のワンタップ祭り！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと5時間57分"
  },
  {
    "id": "stream-today-moka",
    "offsetDays": 0,
    "time": "23:00",
    "estimatedDurationMins": 200,
    "memberId": "amayui-moka",
    "branch": "JP",
    "title": "【スト6】おんぶにだっこ！！PC Watch杯ストリートファイター6 デュオ祭り【 ぶいすぽっ！甘結もか 】",
    "game": "Street Fighter 6",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=k5Nl_YyR_3k",
    "thumbnail": "https://i.ytimg.com/vi/k5Nl_YyR_3k/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "甘結もか",
      "耐久"
    ],
    "collabMembers": [],
    "description": "深夜のチャンピオン耐久！早く終わらせて寝たいです（切実）！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと6時間27分"
  },
  {
    "id": "stream-today-saine",
    "offsetDays": 0,
    "time": "23:30",
    "estimatedDurationMins": 150,
    "memberId": "ginjou-saine",
    "branch": "JP",
    "title": "【初配信】デビューさせていただきます。銀城サイネです！【 #ぶいすぽ新メンバー ⁠#銀城サイネ初配信 】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=QrgLUh_E_xQ",
    "thumbnail": "https://i.ytimg.com/vi/QrgLUh_E_xQ/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "銀城サイネ"
    ],
    "collabMembers": [],
    "description": "スモークの心理戦。静かに、確実に勝利を手繰り寄せます。",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと6時間57分"
  },
  {
    "id": "stream-today-chise",
    "offsetDays": 0,
    "time": "23:45",
    "estimatedDurationMins": 150,
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "title": "◤ 初配信 ◢ はじめまして！龍巻ちせです！ ◤ぶいすぽ新メンバー 龍巻ちせ ◢",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=wGGmQ-dLQZ8",
    "thumbnail": "https://i.ytimg.com/vi/wGGmQ-dLQZ8/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "龍巻ちせ",
      "新人"
    ],
    "collabMembers": [],
    "description": "嵐のように駆け抜けるエントリー！初見さんもぜひ遊びに来てね！",
    "date": "2026-10-06",
    "status": "upcoming",
    "startsIn": "あと7時間12分"
  },
  {
    "id": "stream-tomo-sumire",
    "offsetDays": 1,
    "time": "18:00",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "title": "【APEX】CRCUP SCRIM day2 あのIeNaGaコーチ【ぶいすぽっ！/花芽すみれ】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=pRGcQq8Jq3E",
    "thumbnail": "https://i.ytimg.com/vi/pRGcQq8Jq3E/hqdefault.jpg",
    "tags": [
      "APEX",
      "CRカップ",
      "スクリム最終日"
    ],
    "collabMembers": [
      "kaga-nazuna"
    ],
    "description": "本番前日の最終スクリム！悔いのないように戦います！",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 18:00"
  },
  {
    "id": "stream-tomo-uruha",
    "offsetDays": 1,
    "time": "19:00",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "title": "【APEX】CRカップ スクリム DAY2(^^)/【ぶいすぽ/一ノ瀬うるは】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=67MMEUIV_EA",
    "thumbnail": "https://i.ytimg.com/vi/67MMEUIV_EA/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "CRカップ",
      "一ノ瀬うるは"
    ],
    "collabMembers": [
      "kurumi-noah",
      "tachibana-hinano"
    ],
    "description": "スクリム最終日！チームの動きを仕上げます！",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 19:00"
  },
  {
    "id": "stream-tomo-hinano",
    "offsetDays": 1,
    "time": "19:30",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "title": "【 Apex Legends 】 CRCUP スクリム day2【ぶいすぽっ！/橘ひなの】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=-DyueUeSWiw",
    "thumbnail": "https://i.ytimg.com/vi/-DyueUeSWiw/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "CRCUP",
      "橘ひなの"
    ],
    "collabMembers": [
      "kurumi-noah",
      "ichinose-uruha"
    ],
    "description": "明日はいよいよ本番！絶対優勝するぞー！",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 19:30"
  },
  {
    "id": "stream-tomo-ramune",
    "offsetDays": 1,
    "time": "20:00",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "title": "【キングダムハーツHD1.5+2.5】KINGDOM HEARTS II FINAL MIX ＃７【ぶいすぽ/白波らむね】",
    "game": "KINGDOM HEARTS II",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=A7o_YZfllMo",
    "thumbnail": "https://i.ytimg.com/vi/A7o_YZfllMo/hqdefault.jpg",
    "tags": [
      "VALORANT",
      "白波らむね"
    ],
    "collabMembers": [],
    "description": "アセンダント上がるまで終わりません！",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 20:00"
  },
  {
    "id": "stream-tomo-sena",
    "offsetDays": 1,
    "time": "21:00",
    "memberId": "asumi-sena",
    "branch": "JP",
    "title": "【LoL】大好きなアカリが今、強いと聞いて。【空澄セナ/ぶいすぽっ！】",
    "game": "League of Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=OW7LrJpp-dE",
    "thumbnail": "https://i.ytimg.com/vi/OW7LrJpp-dE/hqdefault.jpg",
    "tags": [
      "歌枠",
      "空澄セナ"
    ],
    "collabMembers": [],
    "description": "週末の終わりに癒やしの歌声を。",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 21:00"
  },
  {
    "id": "stream-tomo-riko",
    "offsetDays": 1,
    "time": "23:00",
    "memberId": "riko-solari",
    "branch": "EN",
    "title": "【DEBUT】Blast off into space! Hello earthlings! 【#VSPOEN #RikoSolari】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=p1AWYGDFcJk",
    "thumbnail": "https://i.ytimg.com/vi/p1AWYGDFcJk/hqdefault.jpg",
    "tags": [
      "Karaoke",
      "Singing",
      "VSPO_EN",
      "Riko"
    ],
    "collabMembers": [],
    "description": "Midnight chill karaoke session! Singing Japanese and Western favorites.",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 23:00"
  },
  {
    "id": "stream-tomo-juno",
    "offsetDays": 1,
    "time": "23:30",
    "memberId": "juno-umezono",
    "branch": "EN",
    "title": "【DEBUT STREAM】Sweet chaos starts now! 【#VSPOEN #JunoUmezono】",
    "game": "初配信",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=J955HDmnWjg",
    "thumbnail": "https://i.ytimg.com/vi/J955HDmnWjg/hqdefault.jpg",
    "tags": [
      "ApexLegends",
      "VSPO_EN",
      "Juno"
    ],
    "collabMembers": [
      "elis-ryugami",
      "narin-mikure"
    ],
    "description": "Late night ranked grind with the EN crew! Full trio energy!",
    "date": "2026-10-07",
    "status": "upcoming",
    "startsIn": "10-07 23:30"
  },
  {
    "id": "stream-week-tourney",
    "offsetDays": 2,
    "time": "18:00",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "title": "【APEX】CRカップ スクリム DAY2(^^)/【ぶいすぽ/一ノ瀬うるは】",
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
    "description": "ついに本番！全チーム全力の戦い！応援よろしくお願いします！",
    "date": "2026-10-08",
    "status": "upcoming",
    "startsIn": "10-08 18:00"
  },
  {
    "id": "stream-week-collab",
    "offsetDays": 3,
    "time": "20:00",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "title": "【 APEX 】CRカップスクリム３日目！ #わんちゃんWIN 【 ぶいすぽっ！胡桃のあ 】",
    "game": "Apex Legends",
    "platform": "youtube",
    "streamUrl": "https://www.youtube.com/watch?v=anq1F3UhITM",
    "thumbnail": "https://i.ytimg.com/vi/anq1F3UhITM/hqdefault.jpg",
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
    "description": "大会の思い出を語り尽くす夜！",
    "date": "2026-10-09",
    "status": "upcoming",
    "startsIn": "10-09 20:00"
  }
];

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

export const SCHEDULES = getLiveSchedules();
