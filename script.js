auto.waitFor();//申请无障碍权限
$images.requestScreenCapture();//申请截图权限



const HEIGHT = device.height;
const WIDTH = device.width;
const Storage = storages.create("autoFlipper");
const scriptPath = engines.myEngine().cwd();
var packageName = Storage.get("packageName");
var shuagou = false;
var danren = true;
var flag = true;

//const events.broadcast = events.emitter();
events.broadcast.on("init", function () {
    toastLog("初始化中……");
    initPic("cy", 0, 1);
    initPic("切换账号", 1, 1);
    initPic("菜单", 2, 1);
    initPic("ok", 3, 0);
    initPic("等待", 4, 1);
    initPic("关闭", 5, 0);
    initPic("体力已满", 6, 1);
    initPic("邮件", 7, 1);
    initPic("公告", 8, 0);
    initPic("主城", 9, 1);
    initPic("放弃", 10, 0);
    initPic("旗子", 11, 1);
    initPic("推荐任务", 12, 1);
    //initPic("火素材", 13, 0);
    //initPic("水素材", 14, 0);
    //initPic("雷素材", 15, 0);
    //initPic("风素材", 16, 0);
    //initPic("光素材", 17, 0);
    //initPic("暗素材", 18, 0);
    initPic("玛娜", 19, 1);
    initPic("返回", 20, 1);
    //initPic("lv60", 21, 1);
    initPic("是", 22, 0);
    initPic("单倍挑战", 23, 1);
    initPic("双倍挑战", 24, 1);
    initPic("继续", 25, 1);
    initPic("再次挑战", 26, 1);
    initPic("离开房间", 27, 1);
    initPic("返回房间", 28, 1);
    initPic("续战", 29, 1);
    initPic("暂停", 30, 1);
    initPic("退出战斗", 31, 1);
    initPic("取消", 32, 0);
    initPic("挑战", 33, 0);
    initPic("小红", 34, 1);
    initPic("中红", 35, 1);
    initPic("大红", 36, 1);
    initPic("使用", 37, 1);
    initPic("深层", 38, 0);
    initPic("暗深层", 39, 1);
    initPic("光深层", 40, 0);
    initPic("风深层", 41, 0);
    initPic("雷深层", 42, 0);
    initPic("水深层", 43, 0);
    initPic("火深层", 44, 0);
    initPic("足体", 45, 0);
    initPic("铃铛", 46, 1);
    initPic("参加", 47, 0);
    initPic("准备", 48, 1);
    initPic("全部收取", 49, 1);
    initPic("领取", 50, 1);
    initPic("无法收取", 51, 1);
    //initPic("公主", 52, 1);
    initPic("多人领主", 53, 1);
    //initPic("刷新", 54, 0);
    let t0 = new pic(54, 2, WIDTH, HEIGHT * 0.5625, 0, 0);
    Storage.put("刷新", t0);
    //initPic("互关", 55, 0);
    let t1 = new pic(55, 2, WIDTH, HEIGHT * 0.76, 0, 0);
    Storage.put("互关", t1);
    initPic("紫色互关", 56, 0);
    initPic("已开续战", 57, 1);
    initPic("未开续战", 58, 1);
    initPic("出发前", 59, 0);
    initPic("主城2", 60, 1);
    initPic("主城3", 61, 1);
    initPic("领主", 62, 1);
    initPic("紫色领主", 63, 1);
    initPic("紫色出发前", 64, 0);
    initPic("单人铃铛", 65, 1);
    initPic("等待中", 66, 1);
    initPic("多人活动", 67, 0);
    initPic("管理者", 68, 0);
    initPic("弧魔", 69, 0);
    initPic("白虎", 70, 0);
    initPic("螃蟹", 71, 0);
    initPic("魔像", 72, 0);
    initPic("不死王", 73, 0);
    initPic("大蛇", 74, 0);
    initPic("机器人", 75, 0);
    initPic("鱿鱼", 76, 0);
    initPic("猫头鹰", 77, 0);
    initPic("超级", 78, 0);
    initPic("高+", 79, 0);
    initPic("高级", 80, 0);
    initPic("中级", 81, 0);
    initPic("初级", 82, 0);
    initPic("多人游戏", 83, 1);
    initPic("招募", 84, 1);
    initPic("已勾互关", 85, 1);
    initPic("未勾互关", 86, 1);
    initPic("招募互关", 87, 1);
    initPic("已勾单向", 88, 1);
    initPic("未勾单向", 89, 1);
    initPic("招募单向", 90, 1);
    initPic("已勾铃铛", 91, 1);
    initPic("未勾铃铛", 92, 1);
    initPic("招募铃铛", 93, 1);
    initPic("开始招募", 94, 0);
    initPic("解散", 95, 1);
    initPic("表情", 96, 1);
    initPic("商店", 97, 1);
    initPic("活动道具", 98, 0);
    initPic("水荒龙", 99, 0);
    initPic("每日兑换", 100, 1);
    initPic("兑换", 101, 1);
    initPic("扭蛋", 102, 1);
    initPic("角色单抽", 103, 1);
    initPic("武器单抽", 104, 1);
    initPic("角色抽过", 105, 1);
    initPic("武器抽过", 106, 1);
    initPic("抽取扭蛋", 107, 0);
    initPic("购买", 108, 1);
    initPic("巨龙高+", 109, 0);
    initPic("名字", 110, 0);
    initPic("紫色名字", 111, 0);
    initPic("高难", 112, 0);
    initPic("光高难", 113, 0);
    initPic("雷高难", 114, 0);
    initPic("暗高难", 115, 0);
    initPic("水高难", 116, 0);
    initPic("火高难", 117, 0);
    initPic("风高难", 118, 0);
    initPic("超+", 119, 0);
    initPic("地狱", 120, 0);
    initPic("0次", 121, 0);
    initPic("无限池", 122, 0);
    initPic("抽取", 123, 0);
    initPic("抽完", 124, 1);
    initPic("下页", 125, 1);
    //initPic("挑战关卡", 126, 1);
    let t2 = new pic(126, 2, WIDTH, HEIGHT * 0.5625, 0, 0);
    Storage.put("挑战关卡", t2);
    initPic("一次", 127, 0);
    initPic("单人活动", 128, 0);
    initPic("黄色铃铛", 129, 1);
    initPic("黄色参加", 130, 0);
    initPic("培育道具", 131, 0);
    initPic("火素材", 132, 0);
    initPic("水素材", 133, 0);
    initPic("雷素材", 134, 0);
    initPic("风素材", 135, 0);
    initPic("光素材", 136, 0);
    initPic("暗素材", 137, 0);





    toastLog("初始化完成")
    Storage.put("init", true);
});

function initPic(name, id, fixed) {
    var p = new pic(id, fixed);
    getSize(p);
    Storage.put(name, p);
    return 0;
}


function getSize(p) {
    p.img = images.read("./res/" + WIDTH + "/" + p.id + ".png");
    p.w = p.img.getWidth() + 40;
    p.h = p.img.getHeight() + 40;
    p.img.recycle();
    p.img = null;
    return 0;
}


function pic(id, fixed, w, h, rx, ry, img) {
    this.id = id;
    this.fixed = fixed;
    this.w = w;
    this.h = h;
    this.rx = rx;
    this.ry = ry;
    this.img = img;
}



events.broadcast.on("start", function () {//监听到"start"消息
    console.info("start");
    flag = true;
    start();

});

events.broadcast.on("dengluqian", () => {
    console.info("登陆前");
    if (flag == false) {
        return 0;
    }
    events.broadcast.emit("message2", "登陆中");
    for (let i = 0; i < 3;) {
        var re = findPicTimes(60, 1000, [WIDTH / 4, HEIGHT / 4], "放弃", "关闭", "ok", "公告");
        if (re[0] < 3) {
            clickp(re[1]);
        } else if (re[0] == 3) {
            i++;
        } else if (re == 0) {
            qqerror(screen, "登录失败")
            events.broadcast.emit("kasi");
            console.info("from登陆前to卡死");
            return 0;
        }
    }
    if (Storage.get("youjian") == true) {
        events.broadcast.emit("message2", "领取邮件");
        let y = findPicTimes(1, 0, 0, "邮件")
        if (y != 0) {
            clickp(y[1]);
            sleep(2000);
            let p = findPic("全部收取", "无法收取");
            if (p[0] == 0) {
                clickp(p[1]);
                { let a = findPic("领取"); if (a == false) return 0; else clickp(a[1]) };
                { let a = findPic("关闭"); if (a == false) return 0; else clickp(a[1]) };
            } else if (p == false) return 0;
            { let a = findPic("返回"); if (a == false) return 0; else clickp(a[1]) };
        }
    }
    if (Storage.get("wuxian") == true) {
        console.info("无限池");
        events.broadcast.emit("message2", "抽无限池");
        while (1) {
            let jr = findPic("抽取", "无限池", "活动道具", "商店"); if (jr == false) return 0;
            if (jr[0] == 3) {
                clickp(jr[1]);
            } else if (jr[0] == 2) {
                clickp(jr[1]);
            } else if (jr[0] == 1) {
                clickp(jr[1]);
            } else if (jr[0] == 0) {
                break;
            }
        }
        while (1) {
            let c = findPic("抽完", "刷新", "抽取"); if (c == false) return 0;
            clickp(c[1]);
            if (c[0] == 1) {
                while (1) {
                    let o = findPic("抽取", "ok"); if (o == false) return0;
                    if (o[0] == 1) {
                        clickp(o[1]);
                    } else if (o[0] == 0) {
                        break;
                    }
                }
            } else if (c[0] == 2) {
                clickp(c[1]);
            } else if (c[0] == 0) {
                break;
            }
        }
        backHome();
    }
    /*if (Storage.get("goumai") == true) {
        events.broadcast.emit("message2", "购买每日素材");
        { let a = findPic("商店"); if (a == false) return 0; else clickp(a[1]) };
        { let a = findPic("活动道具"); if (a == false) return 0; else clickp(a[1]) };
        { let a = findPic("水荒龙"); if (a == false) return 0; else clickp(a[1]) };
        let dh = findPicTimes(10, 1000, 0, "每日兑换");
        if (dh == 0) {
        }
        else {
            clickp(dh[1]);
            { let a = findPic("兑换"); if (a == false) return 0; else clickp(a[1]) };

        }
        events.broadcast.emit("message2", "每日素材已购买");
        backHome();
        events.broadcast.emit("zhuye");
        console.info("from登陆前to主页");
    }*/
    if (Storage.get("juese") == true) {
        events.broadcast.emit("message2", "角色单抽");
        let j = Storage.get("jinrijuese");
        if (j.state == false) {
            while (1) {
                let p = findPic("扭蛋", "角色单抽", "角色抽过");
                if (p == false) {
                    return 0;
                } else if (p[0] == 0) {
                    clickp(p[1]);
                } else if (p[0] == 1) {
                    clickp(p[1]);
                    sleep(2000);
                    let a = findPic("抽取扭蛋", "购买");
                    if (a == false) {
                        return 0;
                    } else if (a[0] == 0) {
                        clickp(a[1]);
                        let c = findPicTimes(30, 2000, [WIDTH / 2, HEIGHT * 0.7], "返回");
                        if (c == 0) {
                            qqerror(screen, "怎么没抽到？");
                            return 0;
                        } else if (c[0] == 0) {
                            j.state = true;
                            qqnotice(screen, "快看看你抽到了什么");
                            clickp(c[1]);
                            break;
                        }
                    } else if (a[0] == 1) {
                        j.state = true;
                        qqnotice(screen, "好好想想自己是不是该充钱了");
                        break;
                    }
                } else if (p[0] == 2) {
                    j.state = true;
                    break;
                }
            }
        }
        Storage.put("jinrijuese", j);
    }
    if (Storage.get("wuqi") == true) {
        events.broadcast.emit("message2", "武器单抽");
        let j = Storage.get("jinriwuqi");
        if (j.state == false) {
            while (1) {
                let p = findPic("扭蛋", "角色单抽", "角色抽过", "武器单抽", "武器抽过");
                if (p == false) {
                    return 0;
                } else if (p[0] == 0) {
                    clickp(p[1]);
                } else if (p[0] == 1 || p[0] == 2) {
                    click(WIDTH * 0.9, HEIGHT * 0.43);
                }
                else if (p[0] == 3) {
                    clickp(p[1]);
                    sleep(2000);
                    let a = findPic("抽取扭蛋", "购买");
                    if (a == false) {
                        return 0;
                    } else if (a[0] == 0) {
                        clickp(a[1]);
                        let c = findPicTimes(30, 2000, [WIDTH / 2, HEIGHT * 0.7], "返回");
                        if (c == 0) {
                            qqerror(screen, "怎么没抽到？");
                            return 0;
                        } else if (c[0] == 0) {
                            j.state = true;
                            qqnotice(screen, "快看看你抽到了什么");
                            clickp(c[1]);
                            break;
                        }
                    } else if (a[0] == 1) {
                        j.state = true;
                        qqnotice(screen, "好好想想自己是不是该充钱了");
                        break;
                    }
                } else if (p[0] == 4) {
                    j.state = true;
                    break;
                }
            }
        }
        Storage.put("jinriwuqi", j);
    }
    events.broadcast.emit("zhuye");
    console.info("from登陆前to主页");
    return 0;
})

events.broadcast.on("kasi", () => {
    console.warn("卡死");
    if (flag == false) {
        return 0;
    }
    toastLog("卡死，尝试重新启动");
    state();
})

events.broadcast.on("zhuye", () => {
    console.info("主页");
    if (flag == false) {
        return 0;
    }
    events.broadcast.emit("message1", "等待下一项任务");
    for (let t = 0; ;) {
        t = findPicTimes(1, 500, 0, "公告");
        if (t == 0) {
            backHome();
        } else {
            break;
        }
    }
    if (findPicTimes(1, 600, 0, "足体") == 0) {
        events.broadcast.emit("tilihaojin");
        console.info("from主页to体力耗尽");
        return 0;
    } else {
        console.log("今日活动挑战完成情况：" + Storage.get("jinrigaonan").state);
        console.log("今日地狱完成情况：" + Storage.get("jinrigaonan").state);
        console.log("今日双倍完成情况：" + Storage.get("jinrigaonan").state);
        if (Storage.get("jinrigaonan").state == false && Storage.get("gaonan") == true) {
            events.broadcast.emit("shuagaonan");
            console.info("from主页to刷高难");
            return 0;
        } else if (Storage.get("jinrihuodong").state == false && Storage.get("huodongdanren") == true) {
            events.broadcast.emit("shuahuodong");
            console.info("from主页to刷活动");
            return 0;
        } else if (Storage.get("jinrishuangbei").state == false && Storage.get("shuangbei") == true) {
            events.broadcast.emit("shuashuangbei");
            console.info("from主页to刷双倍");
            return 0;
        } else if (Storage.get("sucai") == true && shuagou == false) {
            events.broadcast.emit("shuasucai");
            console.info("from主页to刷素材");
            return 0;
        } else if (Storage.get("shenceng") == true && shuagou == false) {
            events.broadcast.emit("shuashenceng");
            console.info("from主页to刷深层");
            return 0;
        } else {
            danren = false;
            events.broadcast.emit("budadanren");
            console.info("from主页to不打单人");
            return 0;
        }
    }

})

events.broadcast.on("tilihaojin", () => {
    console.info("体力耗尽");
    if (flag == false) {
        return 0;
    }
    if (Storage.get("lingdang") == true) {
        if (Storage.get("lingzhu") == true) {
            events.broadcast.emit("lingzhulingdang");
            console.info("from体力耗尽to领主铃铛");
            return 0;
        } else if (Storage.get("huodong") == true) {
            events.broadcast.emit("huodonglingdang");
            console.info("from体力耗尽to活动铃铛");
            return 0;
        } else {
            events.broadcast.emit("lingdang");
            console.info("from体力耗尽to铃铛");
            return 0;
        }
    } else if (Storage.get("lingzhu") == true) {
        events.broadcast.emit("lingzhu");
        console.info("from体力耗尽to领主");
        return 0;
    } else if (Storage.get("huodong") == true) {
        events.broadcast.emit("huodong");
        console.info("from体力耗尽to活动");
        return 0;
    } else {
        events.broadcast.emit("close");
        console.info("from体力耗尽to关闭");
        return 0;
    }
})

events.broadcast.on("budadanren", () => {
    console.info("无可执行单人任务");
    if (flag == false) {
        return 0;
    }
    if (Storage.get("lingdang") == true) {
        if (Storage.get("lingzhu") == true) {
            events.broadcast.emit("lingzhulingdang");
            console.info("from不打单人to领主铃铛");
            return 0;
        } else if (Storage.get("huodong") == true) {
            events.broadcast.emit("huodonglingdang");
            console.info("from不打单人to活动铃铛");
            return 0;
        } else {
            events.broadcast.emit("lingdang");
            console.info("from不打单人to铃铛");
            return 0;
        }
    } else if (Storage.get("lingzhu") == true) {
        events.broadcast.emit("lingzhu");
        console.info("from不打单人to领主");
        return 0;
    } else if (Storage.get("huodong") == true) {
        events.broadcast.emit("huodong");
        console.info("from不打单人to活动");
        return 0;
    } else if (Storage.get("kaiche1") == true || Storage.get("kaiche2") == true) {
        events.broadcast.emit("kaiche");
        console.info("from不打单人to开车");
        return 0;
    }
})

events.broadcast.on("shuagaonan", () => {
    console.info("刷高难关卡");
    if (flag == false) {
        return 0;
    }
    backHome();
    var sx = Storage.get("gaonanshuxing");
    switch (sx) {
        case 0:
            sx = "光高难";
            break;
        case 1:
            sx = "雷高难";
            break;
        case 2:
            sx = "暗高难";
            break;
        case 3:
            sx = "水高难";
            break;
        case 4:
            sx = "火高难";
            break;
        case 5:
            sx = "风高难";
            break;
    }
    var nd = Storage.get("gaonannandu");
    switch (nd) {
        case 0:
            nd = "超+";
            break;
        case 1:
            nd = "地狱";
            break;
    }
    events.broadcast.emit("message1", "刷" + sx + nd);
    events.broadcast.emit("message2", "查找" + sx);
    { let a = findPic("旗子"); if (a == false) return 0; else clickp(a[1]) }
    { let a = findPic("推荐任务"); if (a == false) return 0; }
    swipeup();
    swipeup();
    let sy = findPic("0次", "高难");
    if (sy[0] == 0) {
        let j = Storage.get("jinrigaonan");
        j.state = true;
        Storage.put("jinrigaonan", j);
        events.broadcast.emit("message1", "高难关卡已刷完");
        backHome();
        events.broadcast.emit("zhuye");
        console.info("from刷高难to主页");
        return 0;
    } else if (sy[0] == 1) {
        clickp(sy[1]);
        { let a = findPic("光高难"); if (a == false) return 0; }
        for (let i = 0; ; i++) {
            var p = findPicTimes(2, 800, 0, sx);
            if (p == 0) {
                swipeup();
            } else {
                clickp(p[1]);
                break;
            }
            if (i > 3) {
                var text = "未找到" + sx;
                events.broadcast.emit("message2", text);
                qqerror(screen, text);
                backHome();
                events.broadcast.emit("zhuye");
                console.info("from刷高难to主页");
                return 0;
            }
        }
        events.broadcast.emit("message2", "开始刷" + sx + nd);
        { let a = findPic(nd); if (a == false) return 0; else click(a[1].x, a[1].y) }
        { let a = findPic("是"); if (a == false) return 0; else clickp(a[1]) }
        { let a = findPic("挑战"); if (a == false) return 0; else clickp(a[1]) }
        events.broadcast.emit("message2", "判断体力");
        sleep(2000);
        var tl = findPicTimes(1, 1000, 0, "取消");
        if (tl == 0) {
            var q = quest(false);
            if (q == 0) {
                backHome();
                events.broadcast.emit("shuagaonan");
                console.info("from刷高难to刷高难");
                return 0;
            } else {
                backHome();
                events.broadcast.emit("shuagaonan");
                console.info("from刷高难to刷高难");
                return 0;
            }
        } else {
            clickp(tl[1]);
            events.broadcast.emit("message1", "体力耗尽");
            sleep(1000);
            backHome();
            events.broadcast.emit("tilihaojin");
            console.info("from刷高难to体力耗尽");
            return 0;
        }

    }


})

events.broadcast.on("shuahuodong", () => {
    console.info("刷活动单人");
    events.broadcast.emit("message1", "刷活动单人挑战");
    events.broadcast.emit("message2", "进入活动单人挑战");
    if (flag == false) {
        return 0;
    }
    backHome();
    { let a = findPic("旗子"); if (a == false) return 0; else clickp(a[1]) }
    { let a = findPic("推荐任务"); if (a == false) return 0; }
    { let a = findPic("单人活动"); if (a == false) return 0; else clickp(a[1]) }
    { let a = findPic("挑战关卡"); if (a == false) return 0; else clickp(a[1]) }
    sleep(2000);
    let yc = findPicTimes(4, 500, 0, "一次");
    if (yc == 0) {
        let j = Storage.get("jinrihuodong");
        j.state = true;
        Storage.put("jinrihuodong", j);
        events.broadcast.emit("message1", "活动单人已刷完");
        backHome();
        events.broadcast.emit("zhuye");
        console.info("from刷活动to主页");
    } else {
        clickp(yc[1]);
        { let a = findPic("是"); if (a == false) return 0; else clickp(a[1]) }
        { let a = findPic("挑战"); if (a == false) return 0; else clickp(a[1]) }
        events.broadcast.emit("message2", "判断体力");
        sleep(2000);
        var tl = findPicTimes(1, 1000, 0, "取消");
        if (tl == 0) {
            var q = quest(false);
            if (q == 0) {
                backHome();
                events.broadcast.emit("shuahuodong");
                console.info("from刷活动to刷活动");
                return 0;
            } else {
                backHome();
                events.broadcast.emit("shuahuodong");
                console.info("from刷活动to刷活动");
                return 0;
            }
        } else {
            clickp(tl[1]);
            events.broadcast.emit("message1", "体力耗尽");
            sleep(1000);
            backHome();
            events.broadcast.emit("tilihaojin");
            console.info("from刷活动to体力耗尽");
            return 0;
        }
    }
})

events.broadcast.on("shuashuangbei", () => {
    console.info("刷双倍素材");
    if (flag == false) {
        return 0;
    }
    backHome();
    var sx = Storage.get("shuangbeishuxing");
    switch (sx) {
        case 0:
            sx = "火素材";
            break;
        case 1:
            sx = "水素材";
            break;
        case 2:
            sx = "雷素材";
            break;
        case 3:
            sx = "风素材";
            break;
        case 4:
            sx = "光素材";
            break;
        case 5:
            sx = "暗素材";
            break;
        case 6:
            sx = "玛娜";
            break;
    }
    events.broadcast.emit("message1", "刷双倍" + sx);
    events.broadcast.emit("message2", "查找" + sx);
    { let a = findPic("旗子"); if (a == false) return 0; else clickp(a[1]) };
    { let a = findPic("推荐任务"); if (a == false) return 0; }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, "培育道具");
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 3) {
            var text = "未找到培育道具";
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷双倍to主页");
            return 0;
        }
    }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, sx);
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 5) {
            var text = "未找到" + sx;
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷双倍to主页");
            return 0;
        }
    }
    events.broadcast.emit("message2", "开始刷双倍" + sx);
    let sb = findPic("是", "单倍挑战");
    if (sb[0] == 0) {
        clickp(sb[1]);
        while (1) {
            let sbtz = findPic("双倍挑战", "单倍挑战");
            if (sbtz[0] == 0) {
                let tmp = findPicTimes(1, 0, 0, "单人铃铛");
                if (tmp != 0) {
                    clickp(tmp[1]);
                }
                clickp(sbtz[1]);
                events.broadcast.emit("message2", "判断体力");
                sleep(2000);
                var tl = findPicTimes(1, 1000, 0, "取消");
                if (tl == 0) {
                    let q = quest(false);
                    if (q == 0) {
                        { let a = findPic("lv60"); if (a == false) return 0; else clickp(a[1]) };
                        let tmp = findPicTimes(1, 1000, 0, "是");
                        if (tmp != 0) {
                            clickp(tmp[1]);
                        }
                        continue;
                    } else if (q[0] == 3) {
                        events.broadcast.emit("message2", "准备下次战斗");
                        clickp(q[1]);
                        continue;
                    } else {
                        events.broadcast.emit("message2", "发生甚麽事了");
                        qqerror(screen, "发生甚麽事了");
                        events.broadcast.emit("kasi");
                        console.info("from刷双倍to卡死");
                        return 0;
                    }
                } else {
                    clickp(tl[1]);
                    events.broadcast.emit("message1", "体力耗尽");
                    sleep(1000);
                    backHome();
                    events.broadcast.emit("tilihaojin");
                    console.info("from刷双倍to体力耗尽");
                    return 0;
                }
            } else {
                break;
            }
        }
    } else if (sb == false) return 0;
    let j = Storage.get("jinrishuangbei");
    j.state = true;
    Storage.put("jinrishuangbei", j);
    events.broadcast.emit("message1", "双倍素材已刷完");
    backHome();
    events.broadcast.emit("zhuye");
    console.info("from刷双倍to主页");
    return 0;
})

events.broadcast.on("shuasucai", () => {
    console.info("刷素材");
    if (flag == false) {
        return 0;
    }
    backHome();
    var cs = Storage.get("yidadanren");
    var h = new Array(0, 0, 0);
    var sx = Storage.get("sucaishuxing");
    switch (sx) {
        case 0:
            sx = "火素材";
            break;
        case 1:
            sx = "水素材";
            break;
        case 2:
            sx = "雷素材";
            break;
        case 3:
            sx = "风素材";
            break;
        case 4:
            sx = "光素材";
            break;
        case 5:
            sx = "暗素材";
            break;
        case 6:
            sx = "玛娜";
            break;
    }
    events.broadcast.emit("message1", "刷" + sx + "，已刷" + cs + "次");
    events.broadcast.emit("message2", "查找" + sx);
    { let a = findPic("旗子"); if (a == false) return 0; else clickp(a[1]) };
    { let a = findPic("推荐任务"); if (a == false) return 0; }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, "培育道具");
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 3) {
            var text = "未找到培育道具";
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷双倍to主页");
            return 0;
        }
    }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, sx);
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 3) {
            var text = "未找到" + sx;
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷素材to主页");
            return 0;
        }
    }
    events.broadcast.emit("message2", "开始刷" + sx);
    sleep(1000);
    let tmp = findPicTimes(1, 1000, 0, "是");
    if (tmp != 0) {
        clickp(tmp[1]);
    }
    while (1) {
        if (Storage.get("zhishua") == true && Storage.get("shishuacishu") <= cs) {
            shuagou = true;
            events.broadcast.emit("message2", "已刷够" + cs + "次");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from刷素材to主页");
            return 0;
        }
        let tmp = findPic("挑战", "ok");
        if (tmp[0] == 0) {
            let tmp2 = findPicTimes(1, 0, 0, "单人铃铛");
            if (tmp2 != 0) {
                clickp(tmp2[1]);
            }
        } else if (tmp == false) return 0;
        clickp(tmp[1]);
        events.broadcast.emit("message2", "判断体力");
        sleep(2000);
        var tl = findPicTimes(1, 1000, 0, "取消");
        if (tl == 0) {
            let q = quest(false);
            if (q == 0) {
                { let a = findPic("lv60"); if (a == false) return 0; else clickp(a[1]) };
                let tmp = findPicTimes(1, 1000, 0, "是");
                if (tmp != 0) {
                    clickp(tmp[1]);
                }
                continue;
            } else if (q[0] == 3) {
                cs++;
                var text = "已刷" + cs + "次" + sx + ",";
                if (h[0] > 0) {
                    text += h[0] + "小红";
                }
                if (h[1] > 0) {
                    text += h[1] + "中红";
                }
                if (h[2] > 0) {
                    text += h[2] + "大红";
                }
                events.broadcast.emit("message1", text);
                events.broadcast.emit("message2", "准备下次战斗");
                clickp(q[1]);
                sleep(1000);
                continue;
            } else {
                events.broadcast.emit("message2", "发生甚麽事了");
                qqerror(screen, "发生甚麽事了");
                events.broadcast.emit("kasi");
                console.info("from刷素材to卡死");
                return 0;
            }
        } else {
            if (Storage.get("chiyao") == true && cs < Storage.get("shuatucishu")) {
                let y = findPicTimes(1, 200, 0, "小红", "中红", "大红");
                if (y == 0) {
                    qqerror(screen, "你药没啦！");
                    break;
                } else {
                    clickp(y[1]);
                    { let a = findPic("使用"); if (a == false) return 0; else clickp(a[1]) };
                    { let a = findPic("ok"); if (a == false) return 0; else clickp(a[1]) };
                    h[y[0]]++;
                    var text = "已刷" + cs + "次" + sx + ",";
                    if (h[0] > 0) {
                        text += h[0] + "小红";
                    }
                    if (h[1] > 0) {
                        text += h[1] + "中红";
                    }
                    if (h[2] > 0) {
                        text += h[2] + "大红";
                    }
                    events.broadcast.emit("message1", text);
                }
            } else if (Storage.get("chiyao") == true && cs >= Storage.get("shuatucishu")) {
                qqerror(screen, "刷素材完成," + text);
                break;
            } else {
                break;
            }

        }
    }
    clickp(tl[1]);
    Storage.put("yidadanren", cs);
    events.broadcast.emit("message1", "体力耗尽");
    sleep(1000);
    backHome();
    events.broadcast.emit("tilihaojin");
    console.info("from刷素材to体力耗尽");
    return 0;
})

events.broadcast.on("shuashenceng", () => {
    console.info("刷深层");
    if (flag == false) {
        return 0;
    }
    backHome();
    var cs = Storage.get("yidadanren");
    var h = new Array(0, 0, 0);
    var sx = Storage.get("shencengshuxing");
    switch (sx) {
        case 0:
            sx = "暗深层";
            break;
        case 1:
            sx = "光深层";
            break;
        case 2:
            sx = "风深层";
            break;
        case 3:
            sx = "雷深层";
            break;
        case 4:
            sx = "水深层";
            break;
        case 5:
            sx = "火深层";
            break;
    }
    events.broadcast.emit("message1", "刷" + sx + "，已刷" + cs + "次");
    events.broadcast.emit("message2", "查找" + sx);
    { let a = findPic("旗子"); if (a == false) return 0; else clickp(a[1]) };
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, "深层");
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 3) {
            var text = "未找到深层";
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷双倍to主页");
            return 0;
        }
    }
    { let a = findPic("暗深层"); if (a == false) return 0; }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, sx);
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 4) {
            var text = "未找到" + sx;
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from刷深层to主页");
            return 0;
        }
    }
    events.broadcast.emit("message2", "开始刷" + sx);
    while (1) {
        if (Storage.get("zhishua") == true && Storage.get("shishuacishu") <= cs) {
            shuagou = true;
            events.broadcast.emit("message2", "已刷够" + cs + "次");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from刷深层to主页");
            return 0;
        }
        let tmp = findPic("挑战", "ok");
        if (tmp[0] == 0) {
            let tmp2 = findPicTimes(1, 0, 0, "单人铃铛");
            if (tmp2 != 0) {
                clickp(tmp2[1]);
            }
        } else if (tmp == false) return 0;
        clickp(tmp[1]);
        events.broadcast.emit("message2", "判断体力");
        sleep(2000);
        var tl = findPicTimes(1, 1000, 0, "取消");
        if (tl == 0) {
            let q = quest(false);
            if (q == 0) {
                { let a = findPic("暗深层"); if (a == false) return 0; }
                for (let i = 0; ; i++) {
                    var p = findPicTimes(2, 800, 0, sx);
                    if (p == 0) {
                        swipeup();
                    } else {
                        clickp(p[1]);
                        break;
                    }
                    if (i > 4) {
                        var text = "未找到" + sx;
                        events.broadcast.emit("message2", text);
                        qqerror(screen, text);
                        backHome();
                        events.broadcast.emit("zhuye")
                        console.info("from刷深层to主页");
                        return 0;
                    }
                }
                continue;
            } else if (q[0] == 3) {
                cs++;
                var text = "已刷" + cs + "次" + sx + ",";
                if (h[0] > 0) {
                    text += h[0] + "小红";
                }
                if (h[1] > 0) {
                    text += h[1] + "中红";
                }
                if (h[2] > 0) {
                    text += h[2] + "大红";
                }
                events.broadcast.emit("message1", text);
                events.broadcast.emit("message2", "准备下次战斗");
                clickp(q[1]);
                sleep(1000);
                continue;
            } else {
                events.broadcast.emit("message2", "发生甚麽事了");
                qqerror(screen, "发生甚麽事了");
                events.broadcast.emit("kasi");
                console.info("from刷深层to卡死");
                return 0;
            }
        } else {
            if (Storage.get("chiyao") == true && cs < Storage.get("shuatucishu")) {
                let y = findPicTimes(1, 200, 0, "小红", "中红", "大红");
                if (y == 0) {
                    qqerror(screen, "你药没啦！");
                    break;
                } else {
                    clickp(y[1]);
                    { let a = findPic("使用"); if (a == false) return 0; else clickp(a[1]) };
                    { let a = findPic("ok"); if (a == false) return 0; else clickp(a[1]) };
                    h[y[0]]++;
                    var text = "已刷" + cs + "次" + sx + ",";
                    if (h[0] > 0) {
                        text += h[0] + "小红";
                    }
                    if (h[1] > 0) {
                        text += h[1] + "中红";
                    }
                    if (h[2] > 0) {
                        text += h[2] + "大红";
                    }
                    events.broadcast.emit("message1", text);
                }
            } else if (Storage.get("chiyao") == true && cs >= Storage.get("shuatucishu")) {
                qqerror(screen, "刷深层完成," + text);
                break;
            } else {
                break;
            }

        }
    }
    clickp(tl[1]);
    Storage.put("yidadanren", cs);
    events.broadcast.emit("message1", "体力耗尽");
    sleep(1000);
    backHome();
    events.broadcast.emit("tilihaojin");
    console.info("from刷深层to体力耗尽");
    return 0;
})

events.broadcast.on("huodong", () => {
    console.info("找活动");
    if (flag == false) {
        return 0;
    }
    var f = 0;
    var cs = Storage.get("yidagongdou");
    if (Storage.get("gongdouci") == true && cs >= Storage.get("gongdoucishu")) {
        events.broadcast.emit("close");
        console.info("from找活动to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "找活动，已打" + cs + "次");
    events.broadcast.emit("message2", "查找活动房间");
    let s = findPic("领主", "紫色领主", "多人活动", "出发前", "刷新", "ok");
    if (s == false) return 0;
    if (s[0] < 3 || s[0] == 4) {
        clickp(s[1]);
    } else if (s[0] == 5) {
        clickp(s[1]);
        events.broadcast.emit("huodong");
        return 0;
    }
    var p = findPicTimes(1, 0, 0, "多人活动", "出发前", "刷新");
    if (p == 0) {
        events.broadcast.emit("huodong");
        console.info("from找活动to找活动");
        return 0;
    } else if (p[0] == 0) {
        clickp(p[1]);
        events.broadcast.emit("huodong");
        console.info("from找活动to找活动");
        return 0;
    } else if (p[0] == 1) {
        if (Storage.get("auto") == true) {
            var tmp = findPicTimes(3, 500, 0, "名字");
        } else {
            var tmp = findPicTimes(3, 500, 0, "互关");
        }
        if (tmp == 0) {
            let sx = findPicTimes(1, 0, 0, "刷新");
            if (sx != 0) {
                clickp(sx[1]);
            }
            events.broadcast.emit("huodong");
            console.info("from找活动to找活动");
            return 0;
        }
        clickp(tmp[1]);
        events.broadcast.emit("message2", "加入房间");
        while (1) {
            if (f == 0) {
                sleep(2000);
                let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
                let xz = findPicTimes(3, 200, 0, "未开续战");
                if (xz != 0) {
                    clickp(xz[1]);
                }
                if (mr[0] == 2) {
                    clickp(mr[1]);
                    events.broadcast.emit("huodong");
                    console.info("from找活动to找活动");
                    return 0;
                }
                clickp(mr[1]);
                events.broadcast.emit("message2", "准备完毕");
                if (mr[0] == 1) {
                    events.broadcast.emit("huodong");
                    console.info("from找活动to找活动");
                    return 0;
                }
            } else if (f == 1) {
                var tmp2 = findPic("刷新", "ok", "表情", "暂停"); if (tmp2 == false) return 0;
                if (tmp2[0] < 2) {
                    clickp(tmp2[1]);
                    events.broadcast.emit("huodong");
                    console.info("from找活动to找活动");
                    break;
                }
            }
            let js = quest(true);
            if (js == 0 || js[1] == 5) {
                events.broadcast.emit("huodong");
                console.info("from找活动to找活动");
                return 0;
            } else {
                cs++;
                events.broadcast.emit("message1", "找活动，已打" + cs + "次");
                Storage.put("yidagongdou", cs);
                f = 1;
            }
        }
    } else if (p[0] == 2) {
        let tmp = findPicTimes(1, 0, 0, "体力已满");
        if (tmp != 0 && danren == true) {
            events.broadcast.emit("message2", "体力已满");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from找活动to主页");
            return 0;
        }
        events.broadcast.emit("huodong");
        console.info("from找活动to找活动");
        return 0;
    }
})

events.broadcast.on("lingzhu", () => {
    console.info("找领主");
    if (flag == false) {
        return 0;
    }
    var f = 0;
    var cs = Storage.get("yidagongdou");
    if (Storage.get("gongdouci") == true && cs >= Storage.get("gongdoucishu")) {
        events.broadcast.emit("close");
        console.info("from找领主to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "找领主，已打" + cs + "次");
    events.broadcast.emit("message2", "查找领主房间");
    let s = findPic("领主", "紫色领主", "紫色出发前", "出发前", "刷新", "ok"); if (s == false) return 0;
    if (s[0] < 2 || s[0] == 4) {
        clickp(s[1]);
    } else if (s[0] == 5) {
        events.broadcast.emit("lingzhu");
        console.info("from找领主to找领主");
        return 0;
    }
    var p = findPicTimes(1, 0, 0, "紫色出发前", "出发前", "刷新");
    if (p == 0) {
        events.broadcast.emit("lingzhu");
        console.info("from找领主to找领主");
        return 0;
    } else if (p[0] < 2) {
        if (Storage.get("auto") == true) {
            var tmp = findPicTimes(3, 500, 0, "紫色名字", "名字");
        } else {
            var tmp = findPicTimes(3, 500, 0, "紫色互关", "互关");
        }
        if (tmp == 0) {
            let sx = findPicTimes(1, 0, 0, "刷新");
            if (sx != 0) {
                clickp(sx[1]);
            }
            events.broadcast.emit("lingzhu");
            console.info("from找领主to找领主");
            return 0;
        }
        clickp(tmp[1]);
        sleep(1000)
        var tmp2 = findPicTimes(1, 1000, 0, "是");
        if (tmp2 != 0) {
            clickp(tmp2[1]);
        }
        events.broadcast.emit("message2", "加入房间");
        while (1) {
            if (f == 0) {
                sleep(2000);
                let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
                let xz = findPicTimes(3, 200, 0, "未开续战"); 1
                if (xz != 0) {
                    clickp(xz[1]);
                }
                if (mr[0] == 2) {
                    clickp(mr[1]);
                    events.broadcast.emit("lingzhu");
                    console.info("from找领主to找领主");
                    return 0;
                }
                clickp(mr[1]);
                events.broadcast.emit("message2", "准备完毕");
                if (mr[0] == 1) {
                    events.broadcast.emit("lingzhu");
                    console.info("from找领主to找领主");
                    return 0;
                }
            } else if (f == 1) {
                var tmp2 = findPic("刷新", "ok", "表情", "暂停"); if (tmp2 == false) return 0;
                if (tmp2[0] < 2) {
                    clickp(tmp2[1]);
                    events.broadcast.emit("lingzhu");
                    console.info("from找领主to找领主");
                    return 0;
                }
            }
            let js = quest(true);
            if (js == 0 || js[1] == 5) {
                events.broadcast.emit("lingzhu");
                console.info("from找领主to找领主");
                return 0;
            } else {
                cs++;
                events.broadcast.emit("message1", "找领主，已打" + cs + "次");
                Storage.put("yidagongdou", cs);
                f = 1;
            }
        }
    } else if (p[0] == 2) {
        let tmp = findPicTimes(1, 0, 0, "体力已满");
        if (tmp != 0 && danren == true) {
            events.broadcast.emit("message2", "体力已满");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from找领主to主页");
            return 0;
        }
        events.broadcast.emit("lingzhu");
        console.info("from找领主to找领主");
        return 0;
    }
})

events.broadcast.on("lingdang", () => {
    console.info("找铃铛");
    if (flag == false) {
        return 0;
    }
    var cs = Storage.get("yidagongdou");
    if (Storage.get("gongdouci") == true && cs >= Storage.get("gongdoucishu")) {
        events.broadcast.emit("close");
        console.info("from找铃铛to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "打铃铛，已打" + cs + "次");
    events.broadcast.emit("message2", "等待铃铛");
    let a = findPicTimes(10, 600, 0, "铃铛", "黄色铃铛");
    if (a == 0) {
        events.broadcast.emit("lingdang");
        console.info("from找铃铛to找铃铛");
        return 0;
    }
    else clickp(a[1]);
    events.broadcast.emit("message2", "加入铃铛");
    while (1) {
        let p = findPicTimes(10, 600, 0, "黄色参加", "参加", "铃铛", "黄色铃铛");
        if (p == 0) {
            events.broadcast.emit("lingdang");
            console.info("from找铃铛to找铃铛");
            return 0;
        } else if (p[0] == 0 || p[0] == 1) {
            clickp(p[1]);
            break;
        } else if (p[0] == 2 || p[0] == 3) {
            clickp(p[1]);
            continue;
        }
    }
    sleep(5000);
    let mr = findPic("准备", "ok", "刷新", "公告"); if (mr == false) return 0;
    if (mr[0] > 1) {
        events.broadcast.emit("lingdang");
        console.info("from找铃铛to找铃铛");
        return 0;
    }
    let xz = findPicTimes(3, 200, 0, "已开续战");
    if (xz != 0) {
        clickp(xz[1]);
    }
    clickp(mr[1]);
    events.broadcast.emit("message2", "准备完毕");
    if (mr[0] == 1) {
        events.broadcast.emit("lingdang");
        console.info("from找铃铛to找铃铛");
        return 0;
    }
    let js = quest(true);
    if (js == 0) {
        events.broadcast.emit("lingdang");
        console.info("from找铃铛to找铃铛");
        return 0;
    } else if (js[0] == 4 || js[0] == 6) {
        clickp(js[1]);
        cs++;
        Storage.put("yidagongdou", cs);
        events.broadcast.emit("zhuye");
        console.info("from找铃铛to主页");
        return 0;
    } else {
        console.warn("铃铛结算异常");
        qqerror(screen, "铃铛结算异常");
        events.broadcast.emit("lingdang");
        console.info("from找铃铛to找铃铛");
        return 0;
    }
})

events.broadcast.on("huodonglingdang", () => {
    console.info("找活动和铃铛");
    if (flag == false) {
        return 0;
    }
    var f = 0;
    var cs = Storage.get("yidagongdou");
    if (Storage.get("gongdouci") == true && cs >= Storage.get("gongdoucishu")) {
        events.broadcast.emit("close");
        console.info("from活动铃铛to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "找活动和铃铛，已打" + cs + "次");
    events.broadcast.emit("message2", "查找活动房间或铃铛");
    let s = findPic("领主", "紫色领主", "多人活动", "出发前", "刷新", "ok"); if (s == false) return 0;
    if (s[0] < 3 || s[0] == 4) {
        clickp(s[1]);
    } else if (s[0] == 5) {
        clickp(s[1]);
        events.broadcast.emit("huodong");
        return 0;
    }
    var p = findPic("多人活动", "出发前", "黄色铃铛", "铃铛", "刷新"); if (p == false) return 0;
    if (p[0] == 0) {
        clickp(p[1]);
        events.broadcast.emit("huodonglingdang");
        console.info("from活动铃铛to活动铃铛");
        return 0;
    } else if (p[0] == 1) {
        if (Storage.get("auto") == true) {
            var tmp = findPicTimes(3, 500, 0, "名字");
        } else {
            var tmp = findPicTimes(3, 500, 0, "互关");
        }
        if (tmp == 0) {
            let sx = findPicTimes(1, 0, 0, "刷新");
            if (sx != 0) {
                clickp(sx[1]);
            }
            events.broadcast.emit("huodonglingdang");
            console.info("from活动铃铛to活动铃铛");
            return 0;
        }
        clickp(tmp[1]);
        events.broadcast.emit("message2", "加入房间");
        while (1) {
            if (f == 0) {
                sleep(2000);
                let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
                events.broadcast.emit("message2", "开启续战");
                let xz = findPicTimes(3, 200, 0, "未开续战");
                if (xz != 0) {
                    clickp(xz[1]);
                }
                if (mr[0] == 2) {
                    clickp(mr[1]);
                    events.broadcast.emit("huodonglingdang");
                    console.info("from活动铃铛to活动铃铛");
                    return 0;
                }
                clickp(mr[1]);
                events.broadcast.emit("message2", "准备完毕");
                if (mr[0] == 1) {
                    events.broadcast.emit("huodonglingdang");
                    console.info("from活动铃铛to活动铃铛");
                    return 0;
                }
            } else if (f == 1) {
                var tmp2 = findPic("刷新", "ok", "表情", "暂停"); if (tmp2 == false) return 0;
                if (tmp2[0] < 2) {
                    clickp(tmp2[1]);
                    events.broadcast.emit("huodonglingdang");
                    console.info("from活动铃铛to活动铃铛");
                    return 0;
                }
            }
            let js = quest(true);
            if (js == 0 || js[1] == 5) {
                events.broadcast.emit("huodonglingdang");
                console.info("from活动铃铛to活动铃铛");
                return 0;
            } else {
                cs++;
                events.broadcast.emit("message1", "找活动和铃铛，已打" + cs + "次");
                Storage.put("yidagongdou", cs);
                f = 1;
            }
        }
    } else if (p[0] == 2 || p[0] == 3) {
        clickp(p[1]);
        events.broadcast.emit("message2", "加入铃铛");
        while (1) {
            let tmp = findPicTimes(10, 600, 0, "黄色参加", "参加", "铃铛", "黄色铃铛");
            if (tmp == 0) {
                events.broadcast.emit("huodonglingdang");
                console.info("from活动铃铛to活动铃铛");
                return 0;
            } else if (tmp[0] == 0 || tmp[0] == 1) {
                clickp(tmp[1]);
                break;
            } else if (tmp[0] == 2 || tmp[0] == 3) {
                clickp(tmp[1]);
                continue;
            }
        }
        sleep(5000);
        let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
        let xz = findPicTimes(3, 200, 0, "已开续战");
        if (xz != 0) {
            clickp(xz[1]);
        }
        if (mr[0] == 2) {
            clickp(mr[1]);
            events.broadcast.emit("huodonglingdang");
            console.info("from活动铃铛to活动铃铛");
            return 0;
        }
        clickp(mr[1]);
        events.broadcast.emit("message2", "准备完毕");
        if (mr[0] == 1) {
            events.broadcast.emit("huodonglingdang");
            console.info("from活动铃铛to活动铃铛");
            return 0;
        }
        let js = quest(true);
        if (js == 0) {
            events.broadcast.emit("huodonglingdang");
            console.info("from活动铃铛to活动铃铛");
            return 0;
        } else if (js[0] == 4 || js[0] == 6) {
            clickp(js[1]);
            cs++;
            Storage.put("yidagongdou", cs);
            events.broadcast.emit("zhuye");
            console.info("from活动铃铛to主页");
            return 0;
        } else {
            console.warn("铃铛结算异常");
            qqerror(screen, "铃铛结算异常,error:" + js[0]);
            events.broadcast.emit("huodonglingdang");
            console.info("from活动铃铛to活动铃铛");
            return 0;
        }
    } else if (p[0] == 4) {
        let tmp = findPicTimes(1, 0, 0, "体力已满");
        if (tmp != 0 && danren == true) {
            events.broadcast.emit("message2", "体力已满");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from活动铃铛to主页");
            return 0;
        }
        events.broadcast.emit("huodonglingdang");
        console.info("from活动铃铛to活动铃铛");
        return 0;
    }
})

events.broadcast.on("lingzhulingdang", () => {
    console.info("找领主和铃铛");
    if (flag == false) {
        return 0;
    }
    var f = 0;
    var cs = Storage.get("yidagongdou");
    if (Storage.get("gongdouci") == true && cs >= Storage.get("gongdoucishu")) {
        events.broadcast.emit("close");
        console.info("from领主铃铛to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "找领主和铃铛，已打" + cs + "次");
    events.broadcast.emit("message2", "查找领主房间或铃铛");
    let s = findPic("领主", "紫色领主", "紫色出发前", "出发前", "刷新", "ok"); if (s == false) return 0;
    if (s[0] < 2 || s[0] == 4) {
        clickp(s[1]);
    } else if (s[0] == 5) {
        events.broadcast.emit("lingzhu");
        console.info("from找领主to找领主");
        return 0;
    }
    var p = findPic("紫色出发前", "出发前", "黄色铃铛", "铃铛", "刷新"); if (p == false) return 0;
    if (p[0] < 2) {
        if (Storage.get("auto") == true) {
            var tmp = findPicTimes(3, 500, 0, "紫色名字", "名字");
        } else {
            var tmp = findPicTimes(3, 500, 0, "紫色互关", "互关");
        }
        if (tmp == 0) {
            let sx = findPicTimes(1, 0, 0, "刷新");
            if (sx != 0) {
                clickp(sx[1]);
            }
            events.broadcast.emit("lingzhulingdang");
            console.info("from领主铃铛to领主铃铛");
            return 0;
        }
        clickp(tmp[1]);
        sleep(1000)
        var tmp2 = findPicTimes(1, 1000, 0, "是");
        if (tmp2 != 0) {
            clickp(tmp2[1]);
        }
        events.broadcast.emit("message2", "加入房间");
        while (1) {
            if (f == 0) {
                sleep(2000);
                let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
                let xz = findPicTimes(3, 200, 0, "未开续战");
                if (xz != 0) {
                    clickp(xz[1]);
                } if (mr[0] == 2) {
                    clickp(mr[1]);
                    events.broadcast.emit("lingzhulingdang");
                    console.info("from领主铃铛to领主铃铛");
                    return 0;
                }
                clickp(mr[1]);
                events.broadcast.emit("message2", "准备完毕");
                if (mr[0] == 1) {
                    events.broadcast.emit("lingzhulingdang");
                    console.info("from领主铃铛to领主铃铛");
                    return 0;
                }
            } else if (f == 1) {
                var tmp2 = findPic("刷新", "ok", "表情", "暂停"); if (tmp2 == false) return 0;
                if (tmp2[0] < 2) {
                    clickp(tmp2[1]);
                    events.broadcast.emit("huodonglingdang");
                    console.info("from领主铃铛to领主铃铛");
                    return 0;
                    break;
                }
            }
            let js = quest(true);
            if (js == 0 || js[1] == 5) {
                events.broadcast.emit("lingzhulingdang");
                console.info("from领主铃铛to领主铃铛");
                return 0;
            } else {
                cs++;
                events.broadcast.emit("message1", "找领主和铃铛，已打" + cs + "次");
                Storage.put("yidagongdou", cs);
                f = 1;
            }
        }
    } else if (p[0] == 2 || p[0] == 3) {
        clickp(p[1]);
        events.broadcast.emit("message2", "加入铃铛");
        while (1) {
            let tmp = findPicTimes(10, 600, 0, "黄色参加", "参加", "铃铛", "黄色铃铛");
            if (tmp == 0) {
                events.broadcast.emit("lingzhulingdang");
                console.info("from领主铃铛to领主铃铛");
                return 0;
            } else if (tmp[0] == 0 || tmp[0] == 1) {
                clickp(tmp[1]);
                break;
            } else if (tmp[0] == 2 || tmp[0] == 3) {
                clickp(tmp[1]);
                continue;
            }
        }
        sleep(5000);
        let mr = findPic("准备", "ok", "刷新"); if (mr == false) return 0;
        let xz = findPicTimes(3, 200, 0, "已开续战");
        if (xz != 0) {
            clickp(xz[1]);
        } if (mr[0] == 2) {
            clickp(mr[1]);
            events.broadcast.emit("hlingzhulingdang");
            console.info("from领主铃铛to领主铃铛");
            return 0;
        }
        clickp(mr[1]);
        events.broadcast.emit("message2", "准备完毕");
        if (mr[0] == 1) {
            events.broadcast.emit("lingzhulingdang");
            console.info("from领主铃铛to领主铃铛");
            return 0;
        }
        let js = quest(true);
        if (js == 0) {
            events.broadcast.emit("lingzhulingdang");
            console.info("from领主铃铛to领主铃铛");
            return 0;
        } else if (js[0] == 4 || js[0] == 6) {
            clickp(js[1]);
            cs++;
            Storage.put("yidagongdou", cs);
            events.broadcast.emit("zhuye");
            console.info("from领主铃铛to主页");
            return 0;
        } else {
            console.warn("铃铛结算异常");
            qqerror(screen, "铃铛结算异常");
            events.broadcast.emit("lingzhulingdang");
            console.info("from领主铃铛to领主铃铛");
            return 0;
        }
    } else if (p[0] == 4) {
        let tmp = findPicTimes(1, 0, 0, "体力已满");
        if (tmp != 0 && danren == true) {
            events.broadcast.emit("message2", "体力已满");
            backHome();
            events.broadcast.emit("zhuye");
            console.info("from领主铃铛to主页");
            return 0;
        }
        events.broadcast.emit("lingzhulingdang");
        console.info("from领主铃铛to领主铃铛");
        return 0;
    }
})

events.broadcast.on("kaiche", () => {
    ld = null;
    console.info("开车");
    if (flag == false) {
        return 0;
    }
    if (Storage.get("kaiche1") == true) {
        boss = Storage.get("boss1");
        switch (boss) {
            case 0:
                boss = "活动";
                break;
            case 1:
                boss = "管理者";
                break;
            case 2:
                boss = "弧魔";
                break;
            case 3:
                boss = "白虎";
                break;
            case 4:
                boss = "螃蟹";
                break;
            case 5:
                boss = "魔像";
                break;
            case 6:
                boss = "不死王";
                break;
        }
        diff = Storage.get("nandu1")
        switch (diff) {
            case 0:
                diff = "超级";
                break;
            case 1:
                diff = "高+";
                //if (boss == "活动") {
                //    diff = "巨龙高+"
                //}
                break;
            case 2:
                diff = "高级";
                break;
            case 3:
                diff = "中级";
                break;
        }
    } else if (Storage.get("kaiche2") == true) {
        boss = Storage.get("boss2");
        switch (boss) {
            case 0:
                boss = "大蛇";
                break;
            case 1:
                boss = "机器人";
                break;
            case 2:
                boss = "鱿鱼";
                break;
            case 3:
                boss = "猫头鹰";
                break;
        }
        diff = Storage.get("nandu2")
        switch (diff) {
            case 0:
                diff = "高级";
                break;
            case 1:
                diff = "中级";
                break;
            case 2:
                diff = "初级";
                break;
        }
    }
    events.broadcast.emit("message1", "开" + boss + diff + "车");
    events.broadcast.emit("message2", "进入" + boss + diff);
    { let a = findPic("领主", "紫色领主"); if (a == 0) return 0; else clickp(a[1]); }
    { let a = findPic("刷新"); if (a == false) return 0; }
    for (let i = 0; ; i++) {
        var p = findPicTimes(2, 800, 0, boss);
        if (p == 0) {
            swipeup();
        } else {
            clickp(p[1]);
            break;
        }
        if (i > 4) {
            var text = "未找到" + boss;
            events.broadcast.emit("message2", text);
            qqerror(screen, text);
            backHome();
            events.broadcast.emit("zhuye")
            console.info("from开车to主页");
            return 0;
        }
    }
    { let a = findPic(diff); if (a == 0) return 0; else clickp(a[1]); }
    if (Storage.get("xuzhan") == false && Storage.get("shuangren") == false) {
        events.broadcast.emit("sanrenlingche")
        var text = "开" + boss + diff + "三人灵车啦，快上车";
        console.info("from开车to三人灵车");
        return 0;
    } else if (Storage.get("xuzhan") == false && Storage.get("shuangren") == true) {
        events.broadcast.emit("shuangrenlingche")
        var text = "开" + boss + diff + "双人灵车啦，快上车";
        console.info("from开车to双人灵车");
        return 0;
    } else if (Storage.get("xuzhan") == true && Storage.get("shuangren") == false) {
        events.broadcast.emit("sanrenxuzhan")
        var text = "开" + boss + diff + "三人续战车啦，快上车";
        console.info("from开车to三人续战");
        return 0;
    } else if (Storage.get("xuzhan") == true && Storage.get("shuangren") == true) {
        events.broadcast.emit("shuangrenxuzhan")
        var text = "开" + boss + diff + "双人续战车啦，快上车";
        console.info("from开车to双人续战");
        return 0;
    }
    if (Storage.get("fache") == true) {
        qqnotice(screen, text);
    }
})

events.broadcast.on("sanrenlingche", () => {
    console.info("三人灵车");
    var cs = Storage.get("yikaicheshu");
    if (Storage.get("chiyaokaiche") == true && cs >= Storage.get("kaichecishu")) {
        toastLog("已开够指定次数");
        events.broadcast.emit("close");
        console.info("from三人灵车to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "开" + boss + diff + "三人灵车，已开" + cs + "次");
    events.broadcast.emit("message2", "创建房间");


    { let a = findPic("多人游戏", "招募"); if (a == 0) return 0; else if (a[0] == 0) clickp(a[1]); }
    sleep(2000);
    let tmp = findPicTimes(1, 0, 0, "是");
    if (tmp != 0) {
        clickp(tmp[1]);
    }
    events.broadcast.emit("message2", "准备招募");
    { let a = findPic("招募"); if (a == 0) return 0; else clickp(a[1]); }
    var z = findPic("开始招募"); if (z == false) return 0;
    if (Storage.get("huxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("huxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("danxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("danxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == false) {
        let p = findPicTimes(1, 0, 0, "未勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == false) {
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == true) {
        ld = threads.start(function () {
            sleep(Storage.get("dengdaishijian") * 1000);
            let zl = findPicTimes(1, 0, 0, "招募");
            if (zl != 0) {
                clickp(zl[1]);
                let z = findPic("开始招募"); if (z == false) return 0;
                let p = findPicTimes(1, 0, 0, "未勾铃铛");
                if (p != 0) {
                    clickp(p[1]);
                }
                clickp(z[1]);
            }
            ld = null;
        })
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    clickp(z[1]);
    sleep(1000);
    let qx = findPicTimes(1, 0, 0, "取消");
    if (qx != 0) {
        clickp(qx[1]);
    }
    let xz = findPicTimes(2, 1000, 0, "未开续战");
    if (xz != 0) {
        clickp(xz[1]);
    }
    let mt = findPicTimes(1, 0, 0, "体力已满");
    if (mt != 0 && Storage.get("manti") == true) {
        var q = quest(true);
        if (q == 0) {
            events.broadcast.emit("zhuye");
            console.info("from三人灵车to主页");
            return 0;
        } else if (q[0] == 9) {
            { let a = findPic("返回房间"); if (a == 0) return 0; else clickp(a[1]); }
            cs++;
            Storage.put("yikaicheshu", cs);
        } else {
            events.broadcast.emit("zhuye");
            console.info("from三人灵车to主页");
            return 0;
        }
    } else {
        events.broadcast.emit("message2", "等待战斗开始");
        while (1) {
            let zt = findPic("等待中", "暂停", "ok"); if (zt == false) return 0;
            if (zt[0] == 0) {
                continue;
            } else if (zt[0] == 1) {
                if (Storage.get("dianban") == true) {
                    events.broadcast.emit("message2", "点点板");
                    for (let i = 0; i < 8; i++) {
                        clickp(WIDTH * 0.5, HEIGHT * 0.7);
                        sleep(200);
                    }
                }

                for (var t = 0; t == 0;) {
                    clickp(zt[1]);
                    t = findPicTimes(1, 1000, 0, "退出战斗");
                }
                clickp(t[1]);
                { let a = findPic("是"); if (a == 0) return 0; else clickp(a[1]); }
                cs++;
                Storage.put("yikaicheshu", cs);
                break;
            }
            else if (zt[0] == 2) {
                clickp(zt[1]);
                events.broadcast.emit("zhuye");
                console.info("from双人灵车to主页");
                return 0;
            }
        }
    }
    if (ld != null) {
        ld.interrupt();
        ld = null;
    }
    events.broadcast.emit("sanrenlingche");
    console.info("from三人灵车to三人灵车");
    return 0;
})

events.broadcast.on("shuangrenlingche", () => {
    console.info("双人灵车");
    var cs = Storage.get("yikaicheshu");
    if (Storage.get("chiyaokaiche") == true && cs >= Storage.get("kaichecishu")) {
        toastLog("已开够指定次数");
        events.broadcast.emit("close");
        console.info("from双人灵车to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "开" + boss + diff + "双人灵车，已开" + cs + "次");
    events.broadcast.emit("message2", "创建房间");


    { let a = findPic("多人游戏", "招募"); if (a == 0) return 0; else if (a[0] == 0) clickp(a[1]); }
    sleep(2000);
    let tmp = findPicTimes(1, 0, 0, "是");
    if (tmp != 0) {
        clickp(tmp[1]);
    }
    events.broadcast.emit("message2", "准备招募");
    { let a = findPic("招募"); if (a == 0) return 0; else clickp(a[1]); }
    var z = findPic("开始招募"); if (z == false) return 0;
    if (Storage.get("huxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("huxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("danxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("danxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == false) {
        let p = findPicTimes(1, 0, 0, "未勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == false) {
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == true) {
        ld = threads.start(function () {
            sleep(Storage.get("dengdaishijian") * 1000);
            let zl = findPicTimes(1, 0, 0, "招募");
            if (zl != 0) {
                clickp(zl[1]);
                let z = findPic("开始招募"); if (z == false) return 0;
                let p = findPicTimes(1, 0, 0, "未勾铃铛");
                if (p != 0) {
                    clickp(p[1]);
                }
                clickp(z[1]);
            }
            ld = null;
        })
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    clickp(z[1]);
    sleep(1000);
    let qx = findPicTimes(1, 0, 0, "取消");
    if (qx != 0) {
        clickp(qx[1]);
    }
    let xz = findPicTimes(2, 1000, 0, "已开续战");
    if (xz != 0) {
        clickp(xz[1]);
    }
    let mt = findPicTimes(1, 0, 0, "体力已满");
    { let a = findPic("挑战"); if (a == 0) return 0; else clickp(a[1]); }
    if (mt != 0 && Storage.get("manti") == true) {
        var q = quest(true);
        if (q == 0) {
            events.broadcast.emit("zhuye");
            console.info("from双人灵车to主页");
            return 0;
        } else if (q[0] == 9) {
            { let a = findPic("返回房间"); if (a == 0) return 0; else clickp(a[1]); }
            cs++;
            Storage.put("yikaicheshu", cs);
        } else {
            events.broadcast.emit("zhuye");
            console.info("from双人灵车to主页");
            return 0;
        }
    } else {
        events.broadcast.emit("message2", "等待战斗开始");
        while (1) {
            let zt = findPic("等待中", "暂停", "ok"); if (zt == false) return 0;
            if (zt[0] == 0) {
                continue;
            } else if (zt[0] == 1) {
                if (Storage.get("dianban") == true) {
                    events.broadcast.emit("message2", "点点板");
                    for (let i = 0; i < 8; i++) {
                        clickp(WIDTH * 0.5, HEIGHT * 0.7);
                        sleep(200);
                    }
                }

                for (var t = 0; t == 0;) {
                    clickp(zt[1]);
                    t = findPicTimes(1, 1000, 0, "退出战斗");
                }
                clickp(t[1]);
                { let a = findPic("是"); if (a == 0) return 0; else clickp(a[1]); }
                cs++;
                Storage.put("yikaicheshu", cs);
                break;
            }
            else if (zt[0] == 2) {
                clickp(zt[1]);
                events.broadcast.emit("zhuye");
                console.info("from双人灵车to主页");
                return 0;
            }
        }
    }
    if (ld != null) {
        ld.interrupt();
        ld = null;
    }
    events.broadcast.emit("shuangrenlingche");
    console.info("from双人灵车to双人灵车");
    return 0;
})

events.broadcast.on("sanrenxuzhan", () => {
    console.info("三人续战");
    var cs = Storage.get("yikaicheshu");
    var h = new Array(0, 0, 0);
    if (Storage.get("chiyaokaiche") == true && cs >= Storage.get("kaichecishu")) {
        toastLog("已开够指定次数");
        events.broadcast.emit("close");
        console.info("from三人续战to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "开" + boss + diff + "三人续战，已开" + cs + "次");
    events.broadcast.emit("message2", "创建房间");


    let kc = findPic("多人游戏", "招募", "取消"); if (kc == false) return 0;
    if (kc == 0) {
        return 0;
    } else if (kc[0] == 0) {
        clickp(kc[1]);
        sleep(2000);
        let tmp = findPicTimes(1, 0, 0, "是");
        if (tmp != 0) {
            clickp(tmp[1]);
        }
        sleep(2000);
    }
    if (Storage.get("chiyaokaiche") == true) {
        events.broadcast.emit("message2", "吃点药");
        let y = findPicTimes(1, 200, 0, "小红", "中红", "大红");
        if (y == 0) {
            qqerror(screen, "你药没啦！");
            return 0;
        } else {
            clickp(y[1]);
            { let a = findPic("使用"); if (a == false) return 0; else clickp(a[1]) };
            { let a = findPic("ok"); if (a == false) return 0; else clickp(a[1]) };
            h[y[0]]++;
            var text = "已开" + cs + "次" + sx + diff + ",";
            if (h[0] > 0) {
                text += h[0] + "小红";
            }
            if (h[1] > 0) {
                text += h[1] + "中红";
            }
            if (h[2] > 0) {
                text += h[2] + "大红";
            }
            events.broadcast.emit("message1", text);
        }
    }
    events.broadcast.emit("message2", "准备招募");
    { let a = findPic("招募"); if (a == 0) return 0; else clickp(a[1]); }
    var z = findPic("开始招募"); if (z == false) return 0;
    if (Storage.get("huxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("huxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("danxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("danxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == false) {
        let p = findPicTimes(1, 0, 0, "未勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == false) {
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == true) {
        ld = threads.start(function () {
            sleep(Storage.get("dengdaishijian") * 1000);
            let zl = findPicTimes(1, 0, 0, "招募");
            if (zl != 0) {
                clickp(zl[1]);
                let z = findPic("开始招募"); if (z == false) return 0;
                let p = findPicTimes(1, 0, 0, "未勾铃铛");
                if (p != 0) {
                    clickp(p[1]);
                }
                clickp(z[1]);
            }
            ld = null;
        })
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    clickp(z[1]);
    sleep(1000);
    let qx = findPicTimes(1, 0, 0, "取消");
    if (qx != 0) {
        clickp(qx[1]);
    }
    let xz = findPicTimes(2, 1000, 0, "未开续战");
    if (xz != 0) {
        clickp(xz[1]);
    }
    var q = quest(true);
    if (q == 0) {
        events.broadcast.emit("zhuye");
        console.info("from三人续战to主页");
        return 0;
    } else if (q[0] == 7 || q[0] == 9) {
        cs++;
        Storage.put("yikaicheshu", cs);
    } else {
        events.broadcast.emit("zhuye");
        console.info("from三人续战to主页");
        return 0;
    }

    if (ld != null) {
        ld.interrupt();
        ld = null;
    }
    events.broadcast.emit("sanrenxuzhan");
    console.info("from三人续战to三人续战");
    return 0;
})

events.broadcast.on("shuangrenxuzhan", () => {
    console.info("双人续战");
    var cs = Storage.get("yikaicheshu");
    var h = new Array(0, 0, 0);
    if (Storage.get("chiyaokaiche") == true && cs >= Storage.get("kaichecishu")) {
        toastLog("已开够指定次数");
        events.broadcast.emit("close");
        console.info("from双人续战to关闭");
        return 0;
    }
    events.broadcast.emit("message1", "开" + boss + diff + "双人续战，已开" + cs + "次");
    events.broadcast.emit("message2", "创建房间");


    let kc = findPic("多人游戏", "招募", "取消"); if (kc == false) return 0;
    if (kc == 0) {
        return 0;
    } else if (kc[0] == 0) {
        clickp(kc[1]);
        sleep(2000);
        let tmp = findPicTimes(1, 0, 0, "是");
        if (tmp != 0) {
            clickp(tmp[1]);
        }
        sleep(2000);
    }
    if (Storage.get("chiyaokaiche") == true) {
        events.broadcast.emit("message2", "吃点药");
        let y = findPicTimes(1, 200, 0, "小红", "中红", "大红");
        if (y == 0) {
            qqerror(screen, "你药没啦！");
            return 0;
        } else {
            clickp(y[1]);
            { let a = findPic("使用"); if (a == false) return 0; else clickp(a[1]) };
            { let a = findPic("ok"); if (a == false) return 0; else clickp(a[1]) };
            h[y[0]]++;
            var text = "已开" + cs + "次" + sx + diff + ",";
            if (h[0] > 0) {
                text += h[0] + "小红";
            }
            if (h[1] > 0) {
                text += h[1] + "中红";
            }
            if (h[2] > 0) {
                text += h[2] + "大红";
            }
            events.broadcast.emit("message1", text);
        }
    }
    events.broadcast.emit("message2", "准备招募");
    { let a = findPic("招募"); if (a == 0) return 0; else clickp(a[1]); }
    var z = findPic("开始招募"); if (z == false) return 0;
    if (Storage.get("huxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("huxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾互关");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("danxiangguanzhu") == true) {
        let p = findPicTimes(1, 0, 0, "未勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("danxiangguanzhu") == false) {
        let p = findPicTimes(1, 0, 0, "已勾单向");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == false) {
        let p = findPicTimes(1, 0, 0, "未勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == false) {
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    } else if (Storage.get("yaolingdang") == true && Storage.get("dengdai") == true) {
        ld = threads.start(function () {
            sleep(Storage.get("dengdaishijian") * 1000);
            let zl = findPicTimes(1, 0, 0, "招募");
            if (zl != 0) {
                clickp(zl[1]);
                let z = findPic("开始招募"); if (z == false) return 0;
                let p = findPicTimes(1, 0, 0, "未勾铃铛");
                if (p != 0) {
                    clickp(p[1]);
                }
                clickp(z[1]);
            }
            ld = null;
        })
        let p = findPicTimes(1, 0, 0, "已勾铃铛");
        if (p != 0) {
            clickp(p[1]);
        }
    }
    clickp(z[1]);
    sleep(1000);
    let qx = findPicTimes(1, 0, 0, "取消");
    if (qx != 0) {
        clickp(qx[1]);
    }
    let xz = findPicTimes(2, 1000, 0, "未开续战");
    if (xz != 0) {
        clickp(xz[1]);
    }
    { let a = findPic("挑战"); if (a == 0) return 0; else clickp(a[1]); }
    var q = quest(true);
    if (q == 0) {
        events.broadcast.emit("zhuye");
        console.info("from双人续战to主页");
        return 0;
    } else if (q[0] == 7 || q[0] == 9) {
        cs++;
        Storage.put("yikaicheshu", cs);
    } else {
        events.broadcast.emit("zhuye");
        console.info("from双人续战to主页");
        return 0;
    }

    if (ld != null) {
        ld.interrupt();
        ld = null;
    }
    events.broadcast.emit("shuangrenxuzhan");
    console.info("from双人续战to双人续战");
    return 0;
})


function start() {
    events.broadcast.emit("message2", "等待应用启动");
    launch(packageName);
    waitForPackage(packageName);
    state();
    return 0;
}

function state() {
    console.info("判断当前状态");
    events.broadcast.emit("message2", "判断当前状态");
    while (1) {
        var f = findPic("cy", "切换账号", "菜单", "公告", "主城", "主城2", "主城3", "解散", "返回", "放弃", "关闭", "继续", "离开房间", "ok", "取消"); if (f == false) return 0;
        if (f[0] < 3) {
            events.broadcast.emit("dengluqian");
            console.info("from状态to登陆前");
            return 0;
        } else if (f[0] == 3) {
            events.broadcast.emit("zhuye");
            console.info("from状态to主页");
            return 0;
        } else if (f[0] < 7) {
            click(f[1].x, f[1].y)
            events.broadcast.emit("zhuye");
            console.info("from状态to主页");
            return 0;
        } else {
            clickp(f[1]);
        }
    }
    return 0;
}

function backHome() {
    console.info("返回主页");
    events.broadcast.emit("message2", "返回主页");
    for (let i = 0; i < 10; i++) {
        let p = findPic("公告", "主城", "主城2", "主城3", "解散", "返回", "放弃", "关闭", "继续", "离开房间", "ok", "取消"); if (p == false) return 0;
        if (p[0] == 0) {
            return 0;
        } else if (p[0] < 4) {
            click(p[1].x, p[1].y);
        } else {
            clickp(p[1]);
            sleep(1000);
        }
    }
    qqerror(screen, "返回主页时出现错误");
    events.broadcast.emit("kasi");
    console.info("from返回主页to卡死");
    return 0;
}

function findPic() {
    var text = "找图";
    var len = arguments.length;
    var img = new Array();
    for (let i = 0; i < len; i++) {
        img[i] = Storage.get(arguments[i]);
        img[i].img = images.read("./res/" + WIDTH + "/" + img[i].id + ".png");//读取图片
        //log("打开" + arguments[i]);
        text += arguments[i];
        text += " ";
    }
    log(text);
    var fll = 0;
    for (let time = 0; time < 500; time++) {
        var p = null;
        sleep(400);
        screen = captureScreen();//截图
        for (var j = 0; j < len; j++) {
            if (img[j].fixed < 2) {
                p = findImage(screen, img[j].img)
            } else if (img[j].fixed == 2) {
                //log(img[j].x, img[j].y, img[j].w, img[j].h);
                p = findImageInRegion(screen, img[j].img, img[j].x, img[j].y, img[j].w, img[j].h);
                if (fll == 0) {
                    if (arguments[j] == "开始招募") {
                        let reg = images.clip(screen, img[j].x, img[j].y, img[j].w, img[j].h);
                        qqnotice(reg, "在此区域查找开始招募");
                        reg.recycle();
                        fll = 1;
                    }
                }
            }
            //log("查找" + arguments[j]);
            if (p != null) {
                console.info("找到" + arguments[j]);
                for (let i = 0; i < len; i++) {
                    img[i].img.recycle();
                    img[i].img = null;
                    //log("回收" + arguments[i]);
                }
                if (img[j].fixed == 1) {
                    img[j].x = p.x - 20;
                    img[j].y = p.y - 20;
                    if (img[j].x < 0) {
                        img[j].x = 0;
                    }
                    if (img[j].x + img[j].w > WIDTH) {
                        img[j].w = WIDTH - img[j].x;
                    }
                    if (img[j].y < 0) {
                        img[j].y = 0;
                    }
                    if (img[j].y + img[j].h > HEIGHT) {
                        img[j].h = HEIGHT - img[j].y;
                    }
                    img[j].fixed = 2;
                    Storage.put(arguments[j], img[j]);
                    if (arguments[j] == "开始招募") {
                        let reg = images.clip(screen, img[j].x, img[j].y, img[j].w, img[j].h);
                        qqnotice(reg, "保存开始招募于此区域");
                        reg.recycle();
                    }
                }
                return [j, p];
            } else {
                //log("未找到");
                continue;
            }
        }
        sleep(400);
    }
    toastLog("等待时间过长，即将重启");
    var text = "查找";
    for (let i = 0; i < len; i++) {
        text += " ";
        text += arguments[i];
        img[i].img.recycle();
        img[i].img = null;
        //log("回收" + arguments[i]);
    }
    text += " 超时"
    qqerror(screen, text);
    events.broadcast.emit("kasi");
    console.info("from找图to卡死");
    return false;
}

function findPicTimes() {
    var text = "找图 "
    var len = arguments.length;
    var img = new Array();
    for (let i = 3; i < len; i++) {
        img[i] = Storage.get(arguments[i]);
        img[i].img = images.read("./res/" + WIDTH + "/" + img[i].id + ".png");//读取图片
        //log("打开" + arguments[i]);
        text += arguments[i];
        text += " ";
    }
    text += arguments[0];
    text += "次";
    log(text);
    for (let time = 0; time < arguments[0]; time++) {
        var p = null;
        sleep(arguments[1] / 2);
        screen = captureScreen();//截图
        for (var j = 3; j < len; j++) {
            if (img[j].fixed < 2) {
                p = findImage(screen, img[j].img)
            } else if (img[j].fixed == 2) {
                p = findImageInRegion(screen, img[j].img, img[j].x, img[j].y, img[j].w, img[j].h);
            }
            //log("查找" + arguments[j]);
            if (p != null) {
                console.info("找到" + arguments[j])
                for (let i = 3; i < len; i++) {
                    img[i].img.recycle();
                    img[i].img = null;
                    //log("回收" + arguments[i]);
                }
                if (img[j].fixed == 1) {
                    img[j].x = p.x - 20;
                    img[j].y = p.y - 20;
                    if (img[j].x < 0) {
                        img[j].x = 0;
                    }
                    if (img[j].x + img[j].w > WIDTH) {
                        img[j].w = WIDTH - img[j].x;
                    }
                    if (img[j].y < 0) {
                        img[j].y = 0;
                    }
                    if (img[j].y + img[j].h > HEIGHT) {
                        img[j].h = HEIGHT - img[j].y;
                    }
                    img[j].fixed = 2;
                    Storage.put(arguments[j], img[j]);
                }
                return [j - 3, p];
            } else {
                //log("未找到");
                continue;
            }
        }
        if (arguments[2] == 0) {

        } else {
            //log(arguments[2]);
            clickp(arguments[2]);
        }
        sleep(arguments[1] / 2);
    }
    for (let i = 3; i < len; i++) {
        img[i].img.recycle();
        img[i].img = null;
        //log("回收" + arguments[i]);
    }
    return 0;
}

function clickp() {
    sleep(200);
    if (arguments.length == 1) {
        if (arguments[0].x) {
            click(arguments[0].x + random(0, 50), arguments[0].y + random(0, 50));
        } else {
            click(arguments[0][0] + random(0, 50), arguments[0][1] + random(0, 50));
        }
        return 0;
    } else if (arguments.length == 2) {
        click(arguments[0] + random(0, 50), arguments[1] + random(0, 50));
        //log("点击" + arguments[0], arguments[1]);
        return 0;
    }
}

function swipeup() {
    log("上划");
    swipe(WIDTH / 2, HEIGHT / 3 + HEIGHT / 8, WIDTH / 2, HEIGHT / 3, 300);
    sleep(1000);
    return 0;
}

function swipedown() {
    log("下划");
    swipe(WIDTH / 2, HEIGHT / 3, WIDTH / 2, HEIGHT / 3 + HEIGHT / 8, 300);
    sleep(1000);
    return 0;
}

function quest(s) {
    chao = null;
    console.info("战斗");
    events.broadcast.emit("message2", "等待战斗开始");
    if (s == true) {
        while (1) {
            var p = findPic("等待中", "暂停", "ok", "继续"); if (p == false) return 0;
            if (p[0] == 2) {
                clickp(p[1]);
                sleep(2000);
                let tmp = findPicTimes(1, 1000, 0, "放弃");
                if (tmp != 0) {
                    clickp(tmp[1]);
                }
                return 0;
            } else if (p[0] == 1) {
                if (Storage.get("dianban") == true) {
                    events.broadcast.emit("message2", "准备开局点板");
                    for (let i = 0; i < 8; i++) {
                        clickp(WIDTH * 0.5, HEIGHT * 0.7);
                        sleep(200);
                    }
                }
                if (Storage.get("chaoshi") == true) {
                    chao = threads.start(function () {
                        events.broadcast.emit("message2", "等待战斗超时");
                        sleep(Storage.get("chaoshishijian") * 1000);
                        let tc = findPicTimes(1, 0, 0, "暂停");
                        if (tc != 0) {
                            for (var t = 0; t == 0;) {
                                clickp(tc[1]);
                                t = findPicTimes(1, 1000, 0, "退出战斗");
                            }
                            clickp(t[1]);
                            { let a = findPic("是"); if (a == 0) return 0; else clickp(a[1]); }
                            chao = null;
                            return 0;
                        }
                    })
                }
                break;
            } else if (p[0] == 0) {
                continue;
            } else if (p[0] == 3) {
                break;
            }
        }
    }

    while (1) {
        events.broadcast.emit("message2", "等待战斗结束");
        var tmp = findPic("放弃", "续战", "继续", "再次挑战", "离开房间", "解散", "ok");
        if (tmp[0] == 0) {
            events.broadcast.emit("message2", "战斗失败,重新开始");
            qqnotice(screen, "战斗失败");
            clickp(tmp[1]);
            { let a = findPic("ok"); if (a == false) return 0; else clickp(a[1]) };
            return 0;
        } else if (tmp[0] == 1) {
            sleep(10000);
            console.info("战斗失败")
            return 0;
        }
        console.info("战斗结束");
        if (chao != null) {
            chao.interrupt();
            chao = null;
        }
        events.broadcast.emit("message2", "等待战斗结算");
        while (1) {
            var que = findPicTimes(30, 500, [WIDTH / 5, HEIGHT / 5], "继续", "主城", "等待", "再次挑战", "离开房间", "刷新", "公告", "表情", "ok", "解散", "暂停");
            if (que == 0) {
                console.info("战斗结算异常");
                events.broadcast.emit("message2", "卡死，即将重启");
                qqerror(screen, "战斗结算异常");
                events.broadcast.emit("kasi");
                console.info("from战斗结算to卡死");
                return 0;
            } else if (que[0] == 0 || que[0] == 8) {
                clickp(que[1]);
            } else if (que[0] == 2 || que[0] == 10) {
                continue;
            } else if (que[0] == 1) {
                events.broadcast.emit("zhuye");
                console.info("from战斗结算to主页");
                return "zhuye";
            } else {
                console.info("战斗结算完成")
                return que;
            }
        }
    }
}



function qqerror(img, info) {
    toastLog("发送错误");
    var f = open(scriptPath + "/../logs/log.txt", mode = "r", encoding = "utf-8");
    var l = f.readlines();
    var len = l.length;
    for (let i = len - 20; i < len; i++) {
        info += l[i];
    }
    f.close();
    try {
        var res = http.post("http://124.220.182.169:49875", {
            "image": images.toBase64(img),
            "info": info,
            "to": Storage.get('qq')
        })
    } catch (error) {

    }
    return 0;
}

function qqnotice(img, info) {
    toastLog("发送消息");
    try {
        var res = http.post("http://124.220.182.169:49875", {
            "image": images.toBase64(img),
            "info": info,
            "to": Storage.get('qq')
        })
    } catch (error) {

    }
    return 0;
}

function closeApp() {

    console.info("关闭应用");
    try {
        shell('am force-stop ' + packageName, true);
    } catch (e) {
        //toastLog("错误" + e)
    }
    home();
    return 0;
}

events.broadcast.on("close", function () {
    flag = false;
    events.broadcast.emit("closed");
    console.info("from关闭to已关闭");
    toastLog("close");
    closeApp();
    return 0;
});

if (Storage.get("init") != true) {
    events.broadcast.emit("init");
    console.info("from初始化to初始化");
}

events.broadcast.emit("start");
console.info("from开始to开始");
setInterval(() => { }, 1000);