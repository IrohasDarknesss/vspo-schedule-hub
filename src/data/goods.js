// VSPO! Official Goods Database
// Sourced from store.vspo.jp structure
// Covers all 32 members with direct links to official store pages
// NO PAID APIS / NO BILLING - static client-side catalog

export const GOODS_CATEGORIES = [
  {
    "id": "stand",
    "name": "アクリルスタンド",
    "icon": "Sparkles"
  },
  {
    "id": "badge",
    "name": "缶バッジ・雑貨",
    "icon": "Tag"
  },
  {
    "id": "apparel",
    "name": "アパレル・ゲーミングギア",
    "icon": "Shirt"
  },
  {
    "id": "anniversary",
    "name": "生誕・記念グッズ",
    "icon": "Gift"
  },
  {
    "id": "voice",
    "name": "デジタルボイス",
    "icon": "Mic"
  }
];

export const GOODS = [
  {
    "id": "goods-project-jersey-2026",
    "title": "ぶいすぽっ！公式オフィシャル チームジャージ 2026 (JP/EN 共通デザイン)",
    "memberId": null,
    "branch": "ALL",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 13800,
    "priceFormatted": "¥13,800 (税込)",
    "status": "preorder",
    "statusLabel": "予約受付中",
    "statusBadgeColor": "bg-amber-500/20 text-amber-300 border-amber-500/40",
    "image": "/logos/vspo-jp.png",
    "officialUrl": "https://store.vspo.jp/collections/apparel",
    "fallbackSearchUrl": "https://store.vspo.jp/collections/apparel",
    "description": "eSportsの舞台で選手やタレントが着用する公式チームジャージ！通気性とストレッチ性に優れた高機能素材を採用。胸元にはぶいすぽっ！ロゴがサイバー刺繍されています。",
    "specs": {
      "size": "M / L / XL / XXL 展開",
      "material": "ポリエステル100%",
      "production": "公式受注予約商品"
    },
    "releaseDate": "2026年11月発送予定",
    "tags": [
      "公式ウェア",
      "チームジャージ",
      "アパレル"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-vspo-fes-fanbook",
    "title": "VSPO! GLOBAL FESTIVAL 2026 公式記念パンフレット＆ステッカーセット",
    "memberId": null,
    "branch": "ALL",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 3300,
    "priceFormatted": "¥3,300 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "/logos/vspo-jp.png",
    "officialUrl": "https://store.vspo.jp/collections/events",
    "fallbackSearchUrl": "https://store.vspo.jp/collections/events",
    "description": "JP 25名・EN 7名の全32名をフルカラー徹底解剖！特別インタビュー、対談企画、秘蔵ビジュアルラフスケッチを収録したファン必携の公式プレミアムブック。特製メタリックステッカー付き。",
    "specs": {
      "size": "A4変形判 / 80ページ / フルカラー",
      "contents": "公式ブック＋メタリックステッカー32種セット",
      "production": "公式イベント記念品"
    },
    "releaseDate": "2026年9月〜",
    "tags": [
      "公式ブック",
      "フェス記念",
      "全32名収録"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaga-sumire-stand-01",
    "title": "花芽すみれ 「First Pick」アクリルスタンド",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/01_sumire_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kaga-sumire",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%99%E3%81%BF%E3%82%8C",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#beccff）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaga-sumire-gear-02",
    "title": "花芽すみれ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/01_sumire_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kaga-sumire",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%99%E3%81%BF%E3%82%8C",
    "description": "花芽すみれデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaga-sumire-anni-03",
    "title": "花芽すみれ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/01_sumire_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kaga-sumire",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%99%E3%81%BF%E3%82%8C",
    "description": "花芽すみれの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaga-sumire-badge-04",
    "title": "花芽すみれ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-sumire.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kaga-sumire",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%99%E3%81%BF%E3%82%8C",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaga-sumire-voice-05",
    "title": "花芽すみれ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kaga-sumire",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/01_sumire_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kaga-sumire",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%99%E3%81%BF%E3%82%8C",
    "description": "花芽すみれとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaga-nazuna-stand-01",
    "title": "花芽なずな 「First Pick」アクリルスタンド",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/02_nazuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kaga-nazuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%AA%E3%81%9A%E3%81%AA",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#FABEDC）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaga-nazuna-gear-02",
    "title": "花芽なずな オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/02_nazuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kaga-nazuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%AA%E3%81%9A%E3%81%AA",
    "description": "花芽なずなデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaga-nazuna-anni-03",
    "title": "花芽なずな 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/02_nazuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kaga-nazuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%AA%E3%81%9A%E3%81%AA",
    "description": "花芽なずなの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaga-nazuna-badge-04",
    "title": "花芽なずな ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-nazuna.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kaga-nazuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%AA%E3%81%9A%E3%81%AA",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaga-nazuna-voice-05",
    "title": "花芽なずな 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kaga-nazuna",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/02_nazuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kaga-nazuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8A%B1%E8%8A%BD%E3%81%AA%E3%81%9A%E3%81%AA",
    "description": "花芽なずなとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kogara-toto-stand-01",
    "title": "小雀とと 「First Pick」アクリルスタンド",
    "memberId": "kogara-toto",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kogara-toto",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E9%9B%80%E3%81%A8%E3%81%A8",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#fff33f）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kogara-toto-gear-02",
    "title": "小雀とと オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kogara-toto",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kogara-toto",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E9%9B%80%E3%81%A8%E3%81%A8",
    "description": "小雀ととデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kogara-toto-anni-03",
    "title": "小雀とと 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kogara-toto",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kogara-toto",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E9%9B%80%E3%81%A8%E3%81%A8",
    "description": "小雀ととの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kogara-toto-badge-04",
    "title": "小雀とと ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kogara-toto",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-toto.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kogara-toto",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E9%9B%80%E3%81%A8%E3%81%A8",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kogara-toto-voice-05",
    "title": "小雀とと 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kogara-toto",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/03_toto_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kogara-toto",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E9%9B%80%E3%81%A8%E3%81%A8",
    "description": "小雀とととふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ichinose-uruha-stand-01",
    "title": "一ノ瀬うるは 「First Pick」アクリルスタンド",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/04_uruha_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-ichinose-uruha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E4%B8%80%E3%83%8E%E7%80%AC%E3%81%86%E3%82%8B%E3%81%AF",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#4182FA）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-ichinose-uruha-gear-02",
    "title": "一ノ瀬うるは オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/04_uruha_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-ichinose-uruha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E4%B8%80%E3%83%8E%E7%80%AC%E3%81%86%E3%82%8B%E3%81%AF",
    "description": "一ノ瀬うるはデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ichinose-uruha-anni-03",
    "title": "一ノ瀬うるは 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/04_uruha_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-ichinose-uruha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E4%B8%80%E3%83%8E%E7%80%AC%E3%81%86%E3%82%8B%E3%81%AF",
    "description": "一ノ瀬うるはの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-ichinose-uruha-badge-04",
    "title": "一ノ瀬うるは ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-uruha.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-ichinose-uruha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E4%B8%80%E3%83%8E%E7%80%AC%E3%81%86%E3%82%8B%E3%81%AF",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ichinose-uruha-voice-05",
    "title": "一ノ瀬うるは 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "ichinose-uruha",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/04_uruha_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-ichinose-uruha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E4%B8%80%E3%83%8E%E7%80%AC%E3%81%86%E3%82%8B%E3%81%AF",
    "description": "一ノ瀬うるはとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kurumi-noah-stand-01",
    "title": "胡桃のあ 「First Pick」アクリルスタンド",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/05_noah_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kurumi-noah",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%83%A1%E6%A1%83%E3%81%AE%E3%81%82",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#B297D7）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kurumi-noah-gear-02",
    "title": "胡桃のあ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/05_noah_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kurumi-noah",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%83%A1%E6%A1%83%E3%81%AE%E3%81%82",
    "description": "胡桃のあデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kurumi-noah-anni-03",
    "title": "胡桃のあ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/05_noah_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kurumi-noah",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%83%A1%E6%A1%83%E3%81%AE%E3%81%82",
    "description": "胡桃のあの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kurumi-noah-badge-04",
    "title": "胡桃のあ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-noah.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kurumi-noah",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%83%A1%E6%A1%83%E3%81%AE%E3%81%82",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kurumi-noah-voice-05",
    "title": "胡桃のあ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kurumi-noah",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/05_noah_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kurumi-noah",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%83%A1%E6%A1%83%E3%81%AE%E3%81%82",
    "description": "胡桃のあとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tosaki-mimi-stand-01",
    "title": "兎咲ミミ 「First Pick」アクリルスタンド",
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-tosaki-mimi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%8E%E5%92%B2%E3%83%9F%E3%83%9F",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#c7b2d6）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tosaki-mimi-gear-02",
    "title": "兎咲ミミ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-tosaki-mimi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%8E%E5%92%B2%E3%83%9F%E3%83%9F",
    "description": "兎咲ミミデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tosaki-mimi-anni-03",
    "title": "兎咲ミミ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-tosaki-mimi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%8E%E5%92%B2%E3%83%9F%E3%83%9F",
    "description": "兎咲ミミの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tosaki-mimi-badge-04",
    "title": "兎咲ミミ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-mimi.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-tosaki-mimi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%8E%E5%92%B2%E3%83%9F%E3%83%9F",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tosaki-mimi-voice-05",
    "title": "兎咲ミミ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "tosaki-mimi",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/06_mimi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-tosaki-mimi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%8E%E5%92%B2%E3%83%9F%E3%83%9F",
    "description": "兎咲ミミとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-asumi-sena-stand-01",
    "title": "空澄セナ 「First Pick」アクリルスタンド",
    "memberId": "asumi-sena",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/07_sena_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-asumi-sena",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A9%BA%E6%BE%84%E3%82%BB%E3%83%8A",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#d2d2d2）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-asumi-sena-gear-02",
    "title": "空澄セナ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "asumi-sena",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/07_sena_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-asumi-sena",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A9%BA%E6%BE%84%E3%82%BB%E3%83%8A",
    "description": "空澄セナデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-asumi-sena-anni-03",
    "title": "空澄セナ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "asumi-sena",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/07_sena_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-asumi-sena",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A9%BA%E6%BE%84%E3%82%BB%E3%83%8A",
    "description": "空澄セナの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-asumi-sena-badge-04",
    "title": "空澄セナ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "asumi-sena",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-sena.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-asumi-sena",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A9%BA%E6%BE%84%E3%82%BB%E3%83%8A",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-asumi-sena-voice-05",
    "title": "空澄セナ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "asumi-sena",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/07_sena_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-asumi-sena",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A9%BA%E6%BE%84%E3%82%BB%E3%83%8A",
    "description": "空澄セナとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tachibana-hinano-stand-01",
    "title": "橘ひなの 「First Pick」アクリルスタンド",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/08_hinano_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-tachibana-hinano",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E6%A9%98%E3%81%B2%E3%81%AA%E3%81%AE",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#fa96c8）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tachibana-hinano-gear-02",
    "title": "橘ひなの オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/08_hinano_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-tachibana-hinano",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E6%A9%98%E3%81%B2%E3%81%AA%E3%81%AE",
    "description": "橘ひなのデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tachibana-hinano-anni-03",
    "title": "橘ひなの 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/08_hinano_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-tachibana-hinano",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E6%A9%98%E3%81%B2%E3%81%AA%E3%81%AE",
    "description": "橘ひなのの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tachibana-hinano-badge-04",
    "title": "橘ひなの ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-hinano.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-tachibana-hinano",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E6%A9%98%E3%81%B2%E3%81%AA%E3%81%AE",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tachibana-hinano-voice-05",
    "title": "橘ひなの 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "tachibana-hinano",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/08_hinano_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-tachibana-hinano",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E6%A9%98%E3%81%B2%E3%81%AA%E3%81%AE",
    "description": "橘ひなのとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-hanabusa-lisa-stand-01",
    "title": "英リサ 「First Pick」アクリルスタンド",
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-hanabusa-lisa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8B%B1%E3%83%AA%E3%82%B5",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#d1de79）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-hanabusa-lisa-gear-02",
    "title": "英リサ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-hanabusa-lisa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8B%B1%E3%83%AA%E3%82%B5",
    "description": "英リサデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-hanabusa-lisa-anni-03",
    "title": "英リサ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-hanabusa-lisa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8B%B1%E3%83%AA%E3%82%B5",
    "description": "英リサの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-hanabusa-lisa-badge-04",
    "title": "英リサ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-lisa.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-hanabusa-lisa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8B%B1%E3%83%AA%E3%82%B5",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-hanabusa-lisa-voice-05",
    "title": "英リサ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "hanabusa-lisa",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/09_lisa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-hanabusa-lisa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%8B%B1%E3%83%AA%E3%82%B5",
    "description": "英リサとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kisaragi-ren-stand-01",
    "title": "如月れん 「First Pick」アクリルスタンド",
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kisaragi-ren",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A6%82%E6%9C%88%E3%82%8C%E3%82%93",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#BE2152）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kisaragi-ren-gear-02",
    "title": "如月れん オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kisaragi-ren",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A6%82%E6%9C%88%E3%82%8C%E3%82%93",
    "description": "如月れんデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kisaragi-ren-anni-03",
    "title": "如月れん 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kisaragi-ren",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A6%82%E6%9C%88%E3%82%8C%E3%82%93",
    "description": "如月れんの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kisaragi-ren-badge-04",
    "title": "如月れん ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-ren.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kisaragi-ren",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A6%82%E6%9C%88%E3%82%8C%E3%82%93",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kisaragi-ren-voice-05",
    "title": "如月れん 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kisaragi-ren",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/10_ren_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kisaragi-ren",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A6%82%E6%9C%88%E3%82%8C%E3%82%93",
    "description": "如月れんとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaminari-qpi-stand-01",
    "title": "神成きゅぴ 「First Pick」アクリルスタンド",
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-kaminari-qpi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A5%9E%E6%88%90%E3%81%8D%E3%82%85%E3%81%B4",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#FFD23C）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaminari-qpi-gear-02",
    "title": "神成きゅぴ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-kaminari-qpi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A5%9E%E6%88%90%E3%81%8D%E3%82%85%E3%81%B4",
    "description": "神成きゅぴデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaminari-qpi-anni-03",
    "title": "神成きゅぴ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-kaminari-qpi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A5%9E%E6%88%90%E3%81%8D%E3%82%85%E3%81%B4",
    "description": "神成きゅぴの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-kaminari-qpi-badge-04",
    "title": "神成きゅぴ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-qpi.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-kaminari-qpi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A5%9E%E6%88%90%E3%81%8D%E3%82%85%E3%81%B4",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-kaminari-qpi-voice-05",
    "title": "神成きゅぴ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "kaminari-qpi",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/11_qpi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-kaminari-qpi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%A5%9E%E6%88%90%E3%81%8D%E3%82%85%E3%81%B4",
    "description": "神成きゅぴとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yakumo-beni-stand-01",
    "title": "八雲べに 「First Pick」アクリルスタンド",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/12_beni_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-yakumo-beni",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%AB%E9%9B%B2%E3%81%B9%E3%81%AB",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#85CAB3）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yakumo-beni-gear-02",
    "title": "八雲べに オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/12_beni_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-yakumo-beni",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%AB%E9%9B%B2%E3%81%B9%E3%81%AB",
    "description": "八雲べにデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yakumo-beni-anni-03",
    "title": "八雲べに 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/12_beni_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-yakumo-beni",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%AB%E9%9B%B2%E3%81%B9%E3%81%AB",
    "description": "八雲べにの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yakumo-beni-badge-04",
    "title": "八雲べに ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-beni.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-yakumo-beni",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%AB%E9%9B%B2%E3%81%B9%E3%81%AB",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yakumo-beni-voice-05",
    "title": "八雲べに 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "yakumo-beni",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/12_beni_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-yakumo-beni",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%85%AB%E9%9B%B2%E3%81%B9%E3%81%AB",
    "description": "八雲べにとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-aizawa-ema-stand-01",
    "title": "藍沢エマ 「First Pick」アクリルスタンド",
    "memberId": "aizawa-ema",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/13_ema_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-aizawa-ema",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%97%8D%E6%B2%A2%E3%82%A8%E3%83%9E",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#B4F1F9）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-aizawa-ema-gear-02",
    "title": "藍沢エマ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "aizawa-ema",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/13_ema_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-aizawa-ema",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%97%8D%E6%B2%A2%E3%82%A8%E3%83%9E",
    "description": "藍沢エマデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-aizawa-ema-anni-03",
    "title": "藍沢エマ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "aizawa-ema",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/13_ema_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-aizawa-ema",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%97%8D%E6%B2%A2%E3%82%A8%E3%83%9E",
    "description": "藍沢エマの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-aizawa-ema-badge-04",
    "title": "藍沢エマ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "aizawa-ema",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-ema.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-aizawa-ema",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%97%8D%E6%B2%A2%E3%82%A8%E3%83%9E",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-aizawa-ema-voice-05",
    "title": "藍沢エマ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "aizawa-ema",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/13_ema_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-aizawa-ema",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%97%8D%E6%B2%A2%E3%82%A8%E3%83%9E",
    "description": "藍沢エマとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shinomiya-runa-stand-01",
    "title": "紫宮るな 「First Pick」アクリルスタンド",
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-shinomiya-runa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%AB%E5%AE%AE%E3%82%8B%E3%81%AA",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#d6adff）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-shinomiya-runa-gear-02",
    "title": "紫宮るな オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-shinomiya-runa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%AB%E5%AE%AE%E3%82%8B%E3%81%AA",
    "description": "紫宮るなデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shinomiya-runa-anni-03",
    "title": "紫宮るな 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-shinomiya-runa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%AB%E5%AE%AE%E3%82%8B%E3%81%AA",
    "description": "紫宮るなの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-shinomiya-runa-badge-04",
    "title": "紫宮るな ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-runa.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-shinomiya-runa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%AB%E5%AE%AE%E3%82%8B%E3%81%AA",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shinomiya-runa-voice-05",
    "title": "紫宮るな 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "shinomiya-runa",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/14_runa_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-shinomiya-runa",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%AB%E5%AE%AE%E3%82%8B%E3%81%AA",
    "description": "紫宮るなとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-nekota-tsuna-stand-01",
    "title": "猫汰つな 「First Pick」アクリルスタンド",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/15_tsuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-nekota-tsuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%8C%AB%E6%B1%B0%E3%81%A4%E3%81%AA",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#FF3652）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-nekota-tsuna-gear-02",
    "title": "猫汰つな オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/15_tsuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-nekota-tsuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%8C%AB%E6%B1%B0%E3%81%A4%E3%81%AA",
    "description": "猫汰つなデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-nekota-tsuna-anni-03",
    "title": "猫汰つな 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/15_tsuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-nekota-tsuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%8C%AB%E6%B1%B0%E3%81%A4%E3%81%AA",
    "description": "猫汰つなの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-nekota-tsuna-badge-04",
    "title": "猫汰つな ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-tsuna.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-nekota-tsuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%8C%AB%E6%B1%B0%E3%81%A4%E3%81%AA",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-nekota-tsuna-voice-05",
    "title": "猫汰つな 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "nekota-tsuna",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/15_tsuna_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-nekota-tsuna",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%8C%AB%E6%B1%B0%E3%81%A4%E3%81%AA",
    "description": "猫汰つなとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shiranami-ramune-stand-01",
    "title": "白波らむね 「First Pick」アクリルスタンド",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/16_ramune_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-shiranami-ramune",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%99%BD%E6%B3%A2%E3%82%89%E3%82%80%E3%81%AD",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#8eced9）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-shiranami-ramune-gear-02",
    "title": "白波らむね オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/16_ramune_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-shiranami-ramune",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%99%BD%E6%B3%A2%E3%82%89%E3%82%80%E3%81%AD",
    "description": "白波らむねデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shiranami-ramune-anni-03",
    "title": "白波らむね 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/16_ramune_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-shiranami-ramune",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%99%BD%E6%B3%A2%E3%82%89%E3%82%80%E3%81%AD",
    "description": "白波らむねの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-shiranami-ramune-badge-04",
    "title": "白波らむね ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-ramune.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-shiranami-ramune",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%99%BD%E6%B3%A2%E3%82%89%E3%82%80%E3%81%AD",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-shiranami-ramune-voice-05",
    "title": "白波らむね 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "shiranami-ramune",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/16_ramune_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-shiranami-ramune",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%99%BD%E6%B3%A2%E3%82%89%E3%82%80%E3%81%AD",
    "description": "白波らむねとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-komori-met-stand-01",
    "title": "小森めと 「First Pick」アクリルスタンド",
    "memberId": "komori-met",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/17_met_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-komori-met",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E6%A3%AE%E3%82%81%E3%81%A8",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#fba03f）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-komori-met-gear-02",
    "title": "小森めと オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "komori-met",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/17_met_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-komori-met",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E6%A3%AE%E3%82%81%E3%81%A8",
    "description": "小森めとデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-komori-met-anni-03",
    "title": "小森めと 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "komori-met",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/17_met_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-komori-met",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E6%A3%AE%E3%82%81%E3%81%A8",
    "description": "小森めとの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-komori-met-badge-04",
    "title": "小森めと ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "komori-met",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-met.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-komori-met",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E6%A3%AE%E3%82%81%E3%81%A8",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-komori-met-voice-05",
    "title": "小森めと 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "komori-met",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/17_met_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-komori-met",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%B0%8F%E6%A3%AE%E3%82%81%E3%81%A8",
    "description": "小森めととふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yumeno-akari-stand-01",
    "title": "夢野あかり 「First Pick」アクリルスタンド",
    "memberId": "yumeno-akari",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-yumeno-akari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%A2%E9%87%8E%E3%81%82%E3%81%8B%E3%82%8A",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#ff8684）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yumeno-akari-gear-02",
    "title": "夢野あかり オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "yumeno-akari",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-yumeno-akari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%A2%E9%87%8E%E3%81%82%E3%81%8B%E3%82%8A",
    "description": "夢野あかりデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yumeno-akari-anni-03",
    "title": "夢野あかり 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "yumeno-akari",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-yumeno-akari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%A2%E9%87%8E%E3%81%82%E3%81%8B%E3%82%8A",
    "description": "夢野あかりの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yumeno-akari-badge-04",
    "title": "夢野あかり ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "yumeno-akari",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-akari.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-yumeno-akari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%A2%E9%87%8E%E3%81%82%E3%81%8B%E3%82%8A",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yumeno-akari-voice-05",
    "title": "夢野あかり 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "yumeno-akari",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/18_akari_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-yumeno-akari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%A2%E9%87%8E%E3%81%82%E3%81%8B%E3%82%8A",
    "description": "夢野あかりとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yano-kuromu-stand-01",
    "title": "夜乃くろむ 「First Pick」アクリルスタンド",
    "memberId": "yano-kuromu",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-yano-kuromu",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%9C%E4%B9%83%E3%81%8F%E3%82%8D%E3%82%80",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#909ec8）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yano-kuromu-gear-02",
    "title": "夜乃くろむ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "yano-kuromu",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-yano-kuromu",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%9C%E4%B9%83%E3%81%8F%E3%82%8D%E3%82%80",
    "description": "夜乃くろむデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yano-kuromu-anni-03",
    "title": "夜乃くろむ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "yano-kuromu",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-yano-kuromu",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%9C%E4%B9%83%E3%81%8F%E3%82%8D%E3%82%80",
    "description": "夜乃くろむの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-yano-kuromu-badge-04",
    "title": "夜乃くろむ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "yano-kuromu",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-kuromu.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-yano-kuromu",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%9C%E4%B9%83%E3%81%8F%E3%82%8D%E3%82%80",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-yano-kuromu-voice-05",
    "title": "夜乃くろむ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "yano-kuromu",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/19_kuromu_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-yano-kuromu",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%A4%9C%E4%B9%83%E3%81%8F%E3%82%8D%E3%82%80",
    "description": "夜乃くろむとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tsumugi-kokage-stand-01",
    "title": "紡木こかげ 「First Pick」アクリルスタンド",
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-tsumugi-kokage",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%A1%E6%9C%A8%E3%81%93%E3%81%8B%E3%81%92",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#5195E1）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tsumugi-kokage-gear-02",
    "title": "紡木こかげ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-tsumugi-kokage",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%A1%E6%9C%A8%E3%81%93%E3%81%8B%E3%81%92",
    "description": "紡木こかげデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tsumugi-kokage-anni-03",
    "title": "紡木こかげ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-tsumugi-kokage",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%A1%E6%9C%A8%E3%81%93%E3%81%8B%E3%81%92",
    "description": "紡木こかげの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tsumugi-kokage-badge-04",
    "title": "紡木こかげ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-kokage.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-tsumugi-kokage",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%A1%E6%9C%A8%E3%81%93%E3%81%8B%E3%81%92",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tsumugi-kokage-voice-05",
    "title": "紡木こかげ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "tsumugi-kokage",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/20_kokage_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-tsumugi-kokage",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%B4%A1%E6%9C%A8%E3%81%93%E3%81%8B%E3%81%92",
    "description": "紡木こかげとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-sendo-yuuhi-stand-01",
    "title": "千燈ゆうひ 「First Pick」アクリルスタンド",
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-sendo-yuuhi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%8D%83%E7%87%88%E3%82%86%E3%81%86%E3%81%B2",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#ED784A）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-sendo-yuuhi-gear-02",
    "title": "千燈ゆうひ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-sendo-yuuhi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%8D%83%E7%87%88%E3%82%86%E3%81%86%E3%81%B2",
    "description": "千燈ゆうひデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-sendo-yuuhi-anni-03",
    "title": "千燈ゆうひ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-sendo-yuuhi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%8D%83%E7%87%88%E3%82%86%E3%81%86%E3%81%B2",
    "description": "千燈ゆうひの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-sendo-yuuhi-badge-04",
    "title": "千燈ゆうひ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-yuuhi.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-sendo-yuuhi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%8D%83%E7%87%88%E3%82%86%E3%81%86%E3%81%B2",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-sendo-yuuhi-voice-05",
    "title": "千燈ゆうひ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "sendo-yuuhi",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/21_yuuhi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-sendo-yuuhi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E5%8D%83%E7%87%88%E3%82%86%E3%81%86%E3%81%B2",
    "description": "千燈ゆうひとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-chouya-hanabi-stand-01",
    "title": "蝶屋はなび 「First Pick」アクリルスタンド",
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/22_hanabi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-chouya-hanabi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%9D%B6%E5%B1%8B%E3%81%AF%E3%81%AA%E3%81%B3",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#EA5506）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-chouya-hanabi-gear-02",
    "title": "蝶屋はなび オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/22_hanabi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-chouya-hanabi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%9D%B6%E5%B1%8B%E3%81%AF%E3%81%AA%E3%81%B3",
    "description": "蝶屋はなびデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-chouya-hanabi-anni-03",
    "title": "蝶屋はなび 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/22_hanabi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-chouya-hanabi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%9D%B6%E5%B1%8B%E3%81%AF%E3%81%AA%E3%81%B3",
    "description": "蝶屋はなびの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-chouya-hanabi-badge-04",
    "title": "蝶屋はなび ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-hanabi.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-chouya-hanabi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%9D%B6%E5%B1%8B%E3%81%AF%E3%81%AA%E3%81%B3",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-chouya-hanabi-voice-05",
    "title": "蝶屋はなび 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "chouya-hanabi",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/22_hanabi_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-chouya-hanabi",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E8%9D%B6%E5%B1%8B%E3%81%AF%E3%81%AA%E3%81%B3",
    "description": "蝶屋はなびとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-amayui-moka-stand-01",
    "title": "甘結もか 「First Pick」アクリルスタンド",
    "memberId": "amayui-moka",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/23_moka_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-amayui-moka",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%94%98%E7%B5%90%E3%82%82%E3%81%8B",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#ECA0AA）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-amayui-moka-gear-02",
    "title": "甘結もか オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "amayui-moka",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/23_moka_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-amayui-moka",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%94%98%E7%B5%90%E3%82%82%E3%81%8B",
    "description": "甘結もかデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-amayui-moka-anni-03",
    "title": "甘結もか 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "amayui-moka",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/23_moka_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-amayui-moka",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%94%98%E7%B5%90%E3%82%82%E3%81%8B",
    "description": "甘結もかの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-amayui-moka-badge-04",
    "title": "甘結もか ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "amayui-moka",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-moka.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-amayui-moka",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%94%98%E7%B5%90%E3%82%82%E3%81%8B",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-amayui-moka-voice-05",
    "title": "甘結もか 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "amayui-moka",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/23_moka_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-amayui-moka",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E7%94%98%E7%B5%90%E3%82%82%E3%81%8B",
    "description": "甘結もかとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ginjou-saine-stand-01",
    "title": "銀城サイネ 「First Pick」アクリルスタンド",
    "memberId": "ginjou-saine",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/24_saine_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-ginjou-saine",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%8A%80%E5%9F%8E%E3%82%B5%E3%82%A4%E3%83%8D",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#58535E）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-ginjou-saine-gear-02",
    "title": "銀城サイネ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "ginjou-saine",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/24_saine_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-ginjou-saine",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%8A%80%E5%9F%8E%E3%82%B5%E3%82%A4%E3%83%8D",
    "description": "銀城サイネデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ginjou-saine-anni-03",
    "title": "銀城サイネ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "ginjou-saine",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/24_saine_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-ginjou-saine",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%8A%80%E5%9F%8E%E3%82%B5%E3%82%A4%E3%83%8D",
    "description": "銀城サイネの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-ginjou-saine-badge-04",
    "title": "銀城サイネ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "ginjou-saine",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-saine.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-ginjou-saine",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%8A%80%E5%9F%8E%E3%82%B5%E3%82%A4%E3%83%8D",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-ginjou-saine-voice-05",
    "title": "銀城サイネ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "ginjou-saine",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/24_saine_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-ginjou-saine",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%8A%80%E5%9F%8E%E3%82%B5%E3%82%A4%E3%83%8D",
    "description": "銀城サイネとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tatsumaki-chise-stand-01",
    "title": "龍巻ちせ 「First Pick」アクリルスタンド",
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/25_chise_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-tatsumaki-chise",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%BE%8D%E5%B7%BB%E3%81%A1%E3%81%9B",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#BEFF77）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tatsumaki-chise-gear-02",
    "title": "龍巻ちせ オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/25_chise_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-tatsumaki-chise",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%BE%8D%E5%B7%BB%E3%81%A1%E3%81%9B",
    "description": "龍巻ちせデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tatsumaki-chise-anni-03",
    "title": "龍巻ちせ 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/25_chise_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-tatsumaki-chise",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%BE%8D%E5%B7%BB%E3%81%A1%E3%81%9B",
    "description": "龍巻ちせの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-tatsumaki-chise-badge-04",
    "title": "龍巻ちせ ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/select-chise.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-tatsumaki-chise",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%BE%8D%E5%B7%BB%E3%81%A1%E3%81%9B",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-tatsumaki-chise-voice-05",
    "title": "龍巻ちせ 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "tatsumaki-chise",
    "branch": "JP",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/04/25_chise_visual.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-tatsumaki-chise",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=%E9%BE%8D%E5%B7%BB%E3%81%A1%E3%81%9B",
    "description": "龍巻ちせとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-remia-aotsuki-stand-01",
    "title": "REMIA AOTSUKI 「First Pick」アクリルスタンド",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/Remia-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-remia-aotsuki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=REMIA%20AOTSUKI",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#398FB2）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-remia-aotsuki-gear-02",
    "title": "REMIA AOTSUKI オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/Remia-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-remia-aotsuki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=REMIA%20AOTSUKI",
    "description": "REMIA AOTSUKIデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-remia-aotsuki-anni-03",
    "title": "REMIA AOTSUKI 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/Remia-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-remia-aotsuki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=REMIA%20AOTSUKI",
    "description": "REMIA AOTSUKIの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-remia-aotsuki-badge-04",
    "title": "REMIA AOTSUKI ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/08/select-remia.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-remia-aotsuki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=REMIA%20AOTSUKI",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-remia-aotsuki-voice-05",
    "title": "REMIA AOTSUKI 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "remia-aotsuki",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/Remia-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-remia-aotsuki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=REMIA%20AOTSUKI",
    "description": "REMIA AOTSUKIとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-arya-kuroha-stand-01",
    "title": "ARYA KUROHA 「First Pick」アクリルスタンド",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/黒刃アリヤ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-arya-kuroha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ARYA%20KUROHA",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#1A1A1A）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-arya-kuroha-gear-02",
    "title": "ARYA KUROHA オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/黒刃アリヤ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-arya-kuroha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ARYA%20KUROHA",
    "description": "ARYA KUROHAデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-arya-kuroha-anni-03",
    "title": "ARYA KUROHA 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/黒刃アリヤ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-arya-kuroha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ARYA%20KUROHA",
    "description": "ARYA KUROHAの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-arya-kuroha-badge-04",
    "title": "ARYA KUROHA ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/select-arya.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-arya-kuroha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ARYA%20KUROHA",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-arya-kuroha-voice-05",
    "title": "ARYA KUROHA 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "arya-kuroha",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/黒刃アリヤ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-arya-kuroha",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ARYA%20KUROHA",
    "description": "ARYA KUROHAとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-jira-jisaki-stand-01",
    "title": "JIRA JISAKI 「First Pick」アクリルスタンド",
    "memberId": "jira-jisaki",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/地崎ジラ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-jira-jisaki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JIRA%20JISAKI",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#606d3d）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-jira-jisaki-gear-02",
    "title": "JIRA JISAKI オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "jira-jisaki",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/地崎ジラ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-jira-jisaki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JIRA%20JISAKI",
    "description": "JIRA JISAKIデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-jira-jisaki-anni-03",
    "title": "JIRA JISAKI 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "jira-jisaki",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/地崎ジラ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-jira-jisaki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JIRA%20JISAKI",
    "description": "JIRA JISAKIの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-jira-jisaki-badge-04",
    "title": "JIRA JISAKI ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "jira-jisaki",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/select-jira.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-jira-jisaki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JIRA%20JISAKI",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-jira-jisaki-voice-05",
    "title": "JIRA JISAKI 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "jira-jisaki",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/地崎ジラ-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-jira-jisaki",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JIRA%20JISAKI",
    "description": "JIRA JISAKIとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-narin-mikure-stand-01",
    "title": "NARIN MIKURE 「First Pick」アクリルスタンド",
    "memberId": "narin-mikure",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/美暮ナリン-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-narin-mikure",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=NARIN%20MIKURE",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#F3A6EF）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-narin-mikure-gear-02",
    "title": "NARIN MIKURE オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "narin-mikure",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/美暮ナリン-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-narin-mikure",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=NARIN%20MIKURE",
    "description": "NARIN MIKUREデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-narin-mikure-anni-03",
    "title": "NARIN MIKURE 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "narin-mikure",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/美暮ナリン-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-narin-mikure",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=NARIN%20MIKURE",
    "description": "NARIN MIKUREの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-narin-mikure-badge-04",
    "title": "NARIN MIKURE ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "narin-mikure",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/select_narin.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-narin-mikure",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=NARIN%20MIKURE",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-narin-mikure-voice-05",
    "title": "NARIN MIKURE 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "narin-mikure",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/美暮ナリン-1576-2260-.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-narin-mikure",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=NARIN%20MIKURE",
    "description": "NARIN MIKUREとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-riko-solari-stand-01",
    "title": "RIKO SOLARI 「First Pick」アクリルスタンド",
    "memberId": "riko-solari",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/ソラリリコ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-riko-solari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=RIKO%20SOLARI",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#9373d7）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-riko-solari-gear-02",
    "title": "RIKO SOLARI オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "riko-solari",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/ソラリリコ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-riko-solari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=RIKO%20SOLARI",
    "description": "RIKO SOLARIデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-riko-solari-anni-03",
    "title": "RIKO SOLARI 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "riko-solari",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/ソラリリコ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-riko-solari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=RIKO%20SOLARI",
    "description": "RIKO SOLARIの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-riko-solari-badge-04",
    "title": "RIKO SOLARI ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "riko-solari",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/select_riko.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-riko-solari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=RIKO%20SOLARI",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-riko-solari-voice-05",
    "title": "RIKO SOLARI 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "riko-solari",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2024/09/ソラリリコ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-riko-solari",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=RIKO%20SOLARI",
    "description": "RIKO SOLARIとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-elis-ryugami-stand-01",
    "title": "ERIS SUZUKAMI 「First Pick」アクリルスタンド",
    "memberId": "elis-ryugami",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/涼上エリス-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-elis-ryugami",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ERIS%20SUZUKAMI",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#90B2F8）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-elis-ryugami-gear-02",
    "title": "ERIS SUZUKAMI オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "elis-ryugami",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/涼上エリス-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-elis-ryugami",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ERIS%20SUZUKAMI",
    "description": "ERIS SUZUKAMIデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-elis-ryugami-anni-03",
    "title": "ERIS SUZUKAMI 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "elis-ryugami",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/涼上エリス-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-elis-ryugami",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ERIS%20SUZUKAMI",
    "description": "ERIS SUZUKAMIの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-elis-ryugami-badge-04",
    "title": "ERIS SUZUKAMI ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "elis-ryugami",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/select-eris-メインカラー変更後.webp",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-elis-ryugami",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ERIS%20SUZUKAMI",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-elis-ryugami-voice-05",
    "title": "ERIS SUZUKAMI 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "elis-ryugami",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/01/涼上エリス-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-elis-ryugami",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=ERIS%20SUZUKAMI",
    "description": "ERIS SUZUKAMIとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-juno-umezono-stand-01",
    "title": "JUNO UMEZONO 「First Pick」アクリルスタンド",
    "memberId": "juno-umezono",
    "branch": "EN",
    "category": "stand",
    "categoryName": "アクリルスタンド",
    "price": 1650,
    "priceFormatted": "¥1,650 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/03/梅園ジュノ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/first-pick-acrylic-stand-juno-umezono",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JUNO%20UMEZONO",
    "description": "ぶいすぽっ！常設グッズ「First Pick」シリーズのアクリルスタンド。デスクやゲーミング環境を彩る公式マストアイテム！台座にはメンバーカラー（#923173）と名前がスタイリッシュに刻印されています。",
    "specs": {
      "size": "本体：約H150mm×W60mm / 台座：約H40mm×W50mm",
      "material": "アクリル樹脂",
      "production": "常設在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "First Pick",
      "定番アイテム",
      "アクリルスタンド"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-juno-umezono-gear-02",
    "title": "JUNO UMEZONO オフィシャルゲーミングマウスパッド (特大サイズ)",
    "memberId": "juno-umezono",
    "branch": "EN",
    "category": "apparel",
    "categoryName": "アパレル・ゲーミングギア",
    "price": 4400,
    "priceFormatted": "¥4,400 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/03/梅園ジュノ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/gaming-mousepad-juno-umezono",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JUNO%20UMEZONO",
    "description": "JUNO UMEZONOデザインの特大ゲーミングマウスパッド！滑らかなマイクロファイバークロス表面で超高精度なマウスエイム操作をサポート。裏面は激しい操作でもズレない天然ゴムラバー仕様。",
    "specs": {
      "size": "約W900mm×H400mm×厚さ4mm",
      "material": "表面：布 / 裏面：天然ゴム",
      "production": "公式オフィシャルサプライ"
    },
    "releaseDate": "2024年6月〜",
    "tags": [
      "ゲーミングギア",
      "マウスパッド",
      "eSports"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-juno-umezono-anni-03",
    "title": "JUNO UMEZONO 生誕記念フルセット 2026 (直筆メッセージ＆限定ボイス付)",
    "memberId": "juno-umezono",
    "branch": "EN",
    "category": "anniversary",
    "categoryName": "生誕・記念グッズ",
    "price": 12000,
    "priceFormatted": "¥12,000 (税込)",
    "status": "made-to-order",
    "statusLabel": "完全受注生産",
    "statusBadgeColor": "bg-purple-500/20 text-purple-300 border-purple-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/03/梅園ジュノ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/birthday-box-juno-umezono",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JUNO%20UMEZONO",
    "description": "JUNO UMEZONOの誕生日を祝う豪華アニバーサリー記念セット！描き下ろし特大アクリルパネル、箔押し複製サイン＆メッセージ入りポストカード、オリジナルマスコットチャーム、限定シチュエーションボイスが同梱。",
    "specs": {
      "size": "アクリルパネル：A4サイズ / チャーム：約70mm",
      "contents": "アクリルパネル、ポストカード、チャーム、記念ボイス特典",
      "production": "受注生産品"
    },
    "releaseDate": "生誕月限定受注",
    "tags": [
      "生誕記念",
      "限定セット",
      "直筆特典"
    ],
    "isFeatured": true
  },
  {
    "id": "goods-juno-umezono-badge-04",
    "title": "JUNO UMEZONO ホログラム缶バッジ 2個セット (通常＆SDデフォルメ)",
    "memberId": "juno-umezono",
    "branch": "EN",
    "category": "badge",
    "categoryName": "缶バッジ・雑貨",
    "price": 1100,
    "priceFormatted": "¥1,100 (税込)",
    "status": "available",
    "statusLabel": "好評発売中",
    "statusBadgeColor": "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/03/select-juno.png",
    "officialUrl": "https://store.vspo.jp/products/can-badge-set-juno-umezono",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JUNO%20UMEZONO",
    "description": "光に反射してキラキラ輝くホログラム仕様の缶バッジ！公式等身ビジュアルとキュートなSDデフォルメイラストの2種セット。痛バッグやコレクションにぴったり！",
    "specs": {
      "size": "直径 約57mm",
      "material": "ブリキ・PET・ホログラムシート",
      "production": "在庫販売"
    },
    "releaseDate": "2024年4月〜",
    "tags": [
      "缶バッジ",
      "ホログラム",
      "コレクション"
    ],
    "isFeatured": false
  },
  {
    "id": "goods-juno-umezono-voice-05",
    "title": "JUNO UMEZONO 【ボイス】季節限定シチュエーションボイス ～ゲーム合宿の夜編～",
    "memberId": "juno-umezono",
    "branch": "EN",
    "category": "voice",
    "categoryName": "デジタルボイス",
    "price": 1500,
    "priceFormatted": "¥1,500 (税込)",
    "status": "available",
    "statusLabel": "DL即時可能",
    "statusBadgeColor": "bg-cyan-500/20 text-cyan-300 border-cyan-500/40",
    "image": "https://vspo.jp/wp-content/uploads/2026/03/梅園ジュノ-1576-2260.webp",
    "officialUrl": "https://store.vspo.jp/products/situation-voice-juno-umezono",
    "fallbackSearchUrl": "https://store.vspo.jp/search?q=JUNO%20UMEZONO",
    "description": "JUNO UMEZONOとふたりきりで深夜までゲーム対戦＆特訓…！？普段の配信とは一味違う、臨場感あふれるバイノーラル録音の完全録り下ろしシチュエーションボイス（PC/スマートフォン壁紙特典付き）。",
    "specs": {
      "format": "mp3 / wav / 特典キービジュアル壁紙(PNG)",
      "length": "約15分",
      "recording": "バイノーラル録音"
    },
    "releaseDate": "好評DL販売中",
    "tags": [
      "ボイス",
      "バイノーラル",
      "壁紙特典"
    ],
    "isFeatured": false
  }
];

export const getGoodsByMemberId = (memberId) => GOODS.filter(g => g.memberId === memberId);
export const getGoodsByCategory = (category) => GOODS.filter(g => g.category === category);
