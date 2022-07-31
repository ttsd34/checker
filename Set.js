var deta = [
    ,
    ,
    [, , , , , , {day:[]}, {day:[]}, {}, {}, {}, {}],
    [{}, {}, {}]
];
var fullyear = new Date().getFullYear();
var month = new Date().getMonth();
var date = new Date().getDate();
var day = new Date().getDay();
var year = fullyear % 10;
var check = 0;
var daylist = [
    "日",
    "月",
    "火",
    "水",
    "木",
    "金",
    "土"
]
var adaylist = [
    "A",
    "B",
    "C",
    "D",
    "E1",
    "E2",
    "F1",
    "F2"
]
var typelist = [
    "",
    "△",
    "◎",
    "▽"
]
var classlist = []
classlist [0] = [
    ,
    "代数",
    "地理",
    "体育",
    "国語b",
    "化学",
    "英語"
]
classlist [1] = [
    ,
    "生物",
    "幾何",
    "英語",
    "音楽",
    "歴史",
    "国語a"
]
classlist [2] = [
    ,
    "美術",
    "国語b",
    "化学",
    "英語",
    "体育",
    "代数"
]
classlist [3] = [
    ,
    "国語a",
    "技術",
    "技術",
    "幾何",
    "英語",
    "道徳"
]
classlist [4] = [
    ,
    "書道",
    "代数",
    "国語b",
    "地理",
    "体育",
    "EC"
]
classlist [5] = [
    ,
    "書道",
    "代数",
    "国語b",
    "地理",
    "体育",
    "EC"
]
classlist [6] = [
    ,
    "幾何",
    "歴史",
    "英語",
    "音楽",
    "生物",
    "国語a"
]
classlist [7] = [
    ,
    "幾何",
    "歴史",
    "英語",
    "美術",
    "生物",
    "国語a"
]
deta [2][6].schedule = []
deta [2][7].schedule = []
deta [2][7].schedule [9] = "M 広島 => 東京"
deta [2][7].schedule [12] = "T&K 広島 => 東京"
deta [2][7].schedule [18] = "T&M&K 東京 => 広島"
deta [2][7].schedule [26] = "学推模試"
deta [2][8].schedule = []
deta [2][9].schedule = []
var goallist = [
    10,
    9,
    11,
    9,
    12,
    12,
    9,
    10
];
function set() {
    const a = 0;
    const b = 1;
    const c = 2;
    const d = 3;
    const e1 = 4;
    const e2 = 5;
    const f1 = 6;
    const f2 = 7; 
    const m = t => t + 8;
    const g = t => t + 16;
    const x = 24;
    const y = 25;
    const z = 26;
    deta [2][8].day = [
        ,
        c,
        g(d),
        ,
        ,
        e1,
        f1,
        a,
        b,
        c,
        m(d),
        ,
        e2,
        f2,
        a,
        b,
        c,
        g(d),
        ,
        ,
        d,
        e1,
        f1
    ]
    deta [2][8].type = [
        ,
        2,
        0,
        ,
        ,
        0,
        0,
        0,
        0,
        0,
        0,
        ,
        0,
        0,
        0,
        0,
        0,
        0,
        ,
        ,
        0,
        2,
        0
    ]
    deta [2][9].day = [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        b,
        ,
        ,
        ,
        c,
        d,
        e2,
        f2,
        ,
        ,
        a,
        b,
        c,
        d,
        e1,
        ,
        ,
        f1,
        a,
        b,
        c,
        m(b)
    ]
    deta [2][9].type = [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        0,
        ,
        ,
        ,
        0,
        0,
        0,
        2,
        ,
        ,
        0,
        0,
        0,
        0,
        0,
        ,
        ,
        0,
        0,
        0,
        2,
        2
    ]
}