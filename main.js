if (!$power_manager.isIgnoringBatteryOptimizations()) {
    console.log("未开启忽略电池优化");
    $power_manager.requestIgnoreBatteryOptimizations();
}
auto.waitFor();//申请无障碍权限

Storage = storages.create("autoFlipper");
const scriptPath = engines.myEngine().cwd();
const HEIGHT = device.height;
const WIDTH = device.width;

function jinri(date, state) {
    this.date = date;
    this.state = state;
}

upDate();


TIME = new Array();
STATE = false;
timer = null;
scr = null;
N = 0;
Floaty();
function Floaty() {
    window = floaty.rawWindow(
        <vertical gravity="center_vertical">
            <img id="icon" src="file://res/icon.png" w="30" h="30" alpha="0.8" circle="true" borderWidth="1dp" borderColor="black" />
        </vertical>
    );
    window.setPosition(0, HEIGHT / 3);
    //window.exitOnClose();
    setInterval(() => { }, 1000);
    //window.list.visibility = 8;//visibility属性决定了悬浮窗是否显示，8为隐藏，0为显示
    state = true;//悬浮球状态
    place = true;//true为悬浮球处于左侧
    prompt = null;
    menu = null;
    var x = 0,
        y = 0;
    var windowX, windowY;
    var downTime;
    setTimeout(function () {
        if (menu == null && state == true) {
            if (place == true) {
                window.setPosition(-window.getWidth() / 2, window.getY());
                if (prompt == null) { } else {
                    prompt.setPosition(window.getWidth() / 2, window.getY());
                }
                state = false;
            } else {
                window.setPosition(WIDTH - window.getWidth() / 2, window.getY());
                if (prompt == null) { } else {
                    prompt.setPosition(WIDTH - window.getWidth() / 2 - prompt.getWidth(), window.getY());
                }
                state = false;
            }
        }
    }, 5000);
    window.icon.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN://监听到按下悬浮窗
                x = event.getRawX();
                y = event.getRawY();//获取点击坐标
                windowX = window.getX();
                windowY = window.getY();//获取悬浮窗坐标
                downTime = new Date().getTime();//获取按下时间
                return true;
            case event.ACTION_MOVE://监听移动悬浮窗                
                window.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));//随移动变化位置
                if (window.getX() < WIDTH / 2) {
                    place = true;
                } else {
                    place = false;
                }

                if (prompt == null) { } else {
                    if (place == true) {
                        prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                    } else {
                        prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());

                    }
                }

                return true;
            case event.ACTION_UP://监听弹起手指
                //toastLog("click……");
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {//移动距离较小视为点击
                    if (state == false) {
                        state = true;
                        if (place == true) {
                            window.setPosition(0, window.getY());
                            if (prompt != null) {
                                prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                            }
                        } else {
                            window.setPosition(WIDTH - window.getWidth(), window.getY());
                            if (prompt != null) {
                                prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());
                            }
                        }
                    } else {
                        if (menu == null) {
                            Menu();
                        } else {
                            menu.close();
                            menu = null;
                            //todo:添加关闭脚本
                            //events.broadcast.emit("close");
                        }
                    }
                } else {
                    if (window.getX() < WIDTH / 2) {
                        window.setPosition(0, window.getY());
                    } else {
                        window.setPosition(WIDTH - window.getWidth(), window.getY());
                    }//贴边停靠
                    if (window.getY() < 0 || window.getY() > HEIGHT) {
                        window.setPosition(0, HEIGHT / 3);
                        place = true;
                    }
                    if (prompt == null) { } else {
                        if (place == true) {
                            prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                        } else {
                            prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());

                        }
                    }
                    state = true;
                }
                setTimeout(function () {
                    if (menu == null && state == true) {
                        if (place == true) {
                            window.setPosition(-window.getWidth() / 2, window.getY());
                            if (prompt != null) {
                                prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                            }
                            state = false;
                        } else {
                            window.setPosition(WIDTH - window.getWidth() / 2, window.getY());
                            if (prompt != null) {
                                prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());
                            }
                            state = false;
                        }
                    }
                }, 5000);
                return true;
        }
        return true;
    });
    /*function liststate() {
        if (window.list.visibility == 8) {
            window.list.visibility = 0;
        } else {
            window.list.visibility = 8;
        }//点击时切换显示、隐藏
    }
    window.exit.setOnTouchListener(function (view, event) {
        if (event.getAction() == event.ACTION_UP) {//点击退出按钮
            engines.stopAllAndToast();//停止所有正在运行的脚本并显示停止的脚本数量
        }
        return true;
    });
    window.clear.setOnTouchListener(function (view, event) {
        if (event.getAction() == event.ACTION_UP) {//点击清除按钮
            toastLog("已打" + N + "次铃铛，计数已清零");
            N = 0;//输出N并清零
        }
        return true;
    });
    window.start.setOnTouchListener(function (view, event) {
        if (event.getAction() == event.ACTION_UP) {//点击启停按钮
            if (state == false) {//开始脚本
                window.start.text("停");//切换显示文字
                Menu();
                /*toastLog("定时任务启动");
                if (timer != null) {
                    toastLog("有定时任务")
                    st = threads.start(function () {
                        if (scr == null) {
                            scr = engines.execScriptFile("./script.js");
                            sleep(2000);
                            events.broadcast.emit("start", DOUBLE);
                        }
                        st.interrupt();
                    });

                } else {
                    timer = threads.start(function () {
                        //在新线程执行的代码{
                        if (scr == null) {
                            scr = engines.execScriptFile("./script.js");
                            sleep(2000);
                            events.broadcast.emit("start", DOUBLE);
                        }
                        while (1) {
                            var now = new Date();
                            nowhour = now.getHours();
                            nowminute = now.getMinutes();
                            if (nowhour == 5 && nowminute == 0) {
                                DOUBLE = true;
                            }
                            if (nowhour == TIME[0] && nowminute == 0) {
                                if (scr == null) {
                                    scr = engines.execScriptFile("./script.js");
                                    sleep(2000);
                                    events.broadcast.emit("start", DOUBLE);
                                }
                            } else if (nowhour == TIME[1] && nowminute == 30) {
                                toastLog("关闭应用");
                                closeApp("com.leiting.wf.bilibili");
                                if (scr != null) {
                                    scr.getEngine().forceStop();
                                    scr = null;
                                }
                            } else if (nowhour == TIME[2] && nowminute == 0) {
                                if (scr == null) {
                                    scr = engines.execScriptFile("./script.js");
                                    sleep(2000);
                                    events.broadcast.emit("start", DOUBLE);
                                }
                            } else if (nowhour == TIME[3] && nowminute == 30) {
                                toastLog("关闭应用");
                                closeApp("com.leiting.wf.bilibili");
                                if (scr != null) {
                                    scr.getEngine().forceStop();
                                    scr = null;
                                }
                            } else if (nowhour == TIME[4] && nowminute == 0) {
                                if (scr == null) {
                                    scr = engines.execScriptFile("./script.js");
                                    sleep(2000);
                                    events.broadcast.emit("start", DOUBLE);
                                }
                            } else if (nowhour == TIME[5] && nowminute == 30) {
                                toastLog("关闭应用");
                                closeApp("com.leiting.wf.bilibili");
                                if (scr != null) {
                                    scr.getEngine().forceStop();
                                    scr = null;
                                }
                            }
                            sleep(60000);
                        }

                    });
                }
                state = true;
                setTimeout(function () {
                    if (window.start.text() == "停") {
                        liststate();
                    }
                }, 3000)//三秒不点击停止，则隐藏列表    
            } else {//停止脚本
                //let s = scr.getEngine();
                state = false;
                window.start.text("启");
                closeApp("com.leiting.wf.bilibili");
                toastLog("关闭应用");
                if (scr != null) {
                    scr.getEngine().forceStop();
                    scr = null;
                }
            }
        }
        return true;
    });
}*/
}
function Menu() {
    menu = floaty.rawWindow(
        <frame bg="#aa66ccff" padding="5">
            <vertical marginBottom="30">
                <text id="resolution" gravity="top|center" textColor="red" textSize="14sp" />
                <tabs id="tabs" h="20" textSize="18sp" textColor="aqua" />
                <viewpager id="viewpager" >
                    <scroll>
                        <vertical id="huangchong">
                            <horizontal>
                                <checkbox textSize="8sp" id="youjian" text="领取邮件" />
                                <text w="5" />
                                <checkbox textSize="8sp" id="huodongdanren" text="每日挑战" />
                                <text w="5" />
                                <checkbox textSize="8sp" id="duihuan" textColor="gray" text="每日素材" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="juese" text="角色单抽" />
                                <text w="5" />
                                <checkbox textSize="8sp" id="wuqi" textColor="gray" text="武器单抽" />
                                <text w="5" />
                                <checkbox textSize="8sp" id="zhenpin" textColor="gray" text="珍品购买" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="wuxian" text="抽无限池" />
                                <text w="5" />
                                <checkbox textSize="8sp" id="zhanzhen" textColor="red" text="我tm刷爆战阵！" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="shuangbei" text="双倍素材" />
                                <text w="10" />
                                <spinner textSize="8sp" id="shuangbeishuxing" bg="#aa65c294" gravity="center" h="18" w="50" entries="火|水|雷|风|光|暗|玛娜" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="gaonan" h="20" text="高难关卡" />
                                <text w="5" />
                                <spinner textSize="8sp" id="gaonanshuxing" bg="#aa65c294" gravity="center" h="20" w="30" entries="光|雷|暗|水|火|风" />
                                <text w="5" />
                                <spinner textSize="8sp" id="gaonannandu" bg="#aa65c294" gravity="center" h="20" w="50" entries="超+|地狱" />
                            </horizontal>
                            <text h="20" />
                            <horizontal>
                                <checkbox textSize="8sp" id="sucai" text="体力刷素材" />
                                <text w="10" />
                                <spinner textSize="8sp" id="sucaishuxing" bg="#aa65c294" gravity="center" h="18" w="50" entries="火|水|雷|风|光|暗|玛娜" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="shenceng" text="体力刷深层" />
                                <text w="10" />
                                <spinner textSize="8sp" id="shencengshuxing" bg="#aa65c294" gravity="center" h="18" w="50" entries="暗|光|风|雷|水|火" />
                            </horizontal>
                            <horizontal id="tiliyao">
                                <checkbox textSize="8sp" id="chiyao" text="吃体力药直到刷够" />
                                <input textSize="8sp" inputType="number" id="shuatucishu" focusable="true" text="50" gravity="center" h="30" w="40" ></input>
                                <text textSize="8sp" text="次" textColor="black"></text>
                            </horizontal>
                            <horizontal id="jiuzhishua">
                                <checkbox id="zhishua" textSize="8sp" text="只刷" />
                                <input inputType="number" textSize="8sp" id="zhishuacishu" focusable="true" text="3" gravity="center" h="30" w="30"></input>
                                <text text="次后便停止" textSize="8sp" textColor="black"></text>
                            </horizontal>
                            <text h="20" />
                            <horizontal>
                                <checkbox textSize="8sp" id="lingdang" text="接铃铛" />
                                <text w="10" />
                                <checkbox textSize="8sp" id="lingzhu" text="找领主" />
                                <text w="10" />
                                <checkbox textSize="8sp" id="huodong" text="找活动" />
                            </horizontal>
                            <horizontal id="gongdou">
                                <checkbox id="gongdouci" textSize="8sp" text="打" />
                                <input inputType="number" textSize="8sp" id="gongdoucishu" focusable="true" text="50"></input>
                                <text text="次共斗后退出脚本" textSize="8sp" textColor="black"></text>
                            </horizontal>
                            <vertical id="zuoche">
                                <horizontal>
                                    <checkbox id="chaoshi" textSize="8sp" text="共斗开始" />
                                    <input inputType="number" textSize="8sp" id="chaoshishijian" focusable="true" text="20"></input>
                                    <text text="秒后退出房间(踢罐翻车时使用)" textSize="8sp" textColor="black"></text>
                                </horizontal>
                                <horizontal>
                                    <checkbox textSize="8sp" id="auto" text="只坐固定用户名开的车" />
                                    <text text="请将开车账号用户名设置为auto开头" textSize="8sp" textColor="red"></text>
                                </horizontal>
                            </vertical>
                        </vertical>
                    </scroll>
                    <scroll>
                        <vertical>
                            <text text="此页功能已可以使用，请多多尝试" textColor="red" gravity="center" textSize="12sp" />
                            <horizontal>
                                <checkbox textSize="8sp" id="kaiche1" h="20" text="开车" />
                                <text w="5" />
                                <spinner textSize="8sp" id="boss1" bg="#aa65c294" gravity="center" h="20" w="50" entries="活动|管理者|弧魔|白虎|螃蟹|魔像|不死王" />
                                <text w="5" />
                                <spinner textSize="8sp" id="nandu1" bg="#aa65c294" gravity="center" h="20" w="50" entries="超级|高+|高级|中级" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="kaiche2" h="20" text="开车" />
                                <text w="5" />
                                <spinner textSize="8sp" id="boss2" bg="#aa65c294" gravity="center" h="20" w="50" entries="大蛇|机器人|鱿鱼|猫头鹰" />
                                <text w="5" />
                                <spinner textSize="8sp" id="nandu2" bg="#aa65c294" gravity="center" h="20" w="50" entries="高级|中级|初级" />
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="huxiangguanzhu" h="20" text="互相关注" />
                                <text w="10" />
                                <checkbox textSize="8sp" id="danxiangguanzhu" h="20" text="单向关注" />
                                <text w="10" />
                                <checkbox textSize="8sp" id="yaolingdang" h="20" text="摇铃铛" />
                            </horizontal>
                            <horizontal id="dengdaiyaoling">
                                <text w="20" />
                                <checkbox textSize="8sp" id="dengdai" h="20" text="经过" />
                                <input inputType="number" textSize="8sp" id="dengdaishijian" focusable="true" text="30" gravity="center" h="30" w="25" ></input>
                                <text text="秒后再摇铃铛" textSize="8sp" textColor="black"></text>
                            </horizontal>
                            <horizontal>
                                <checkbox textSize="8sp" id="shuangren" h="20" text="双人即开" />
                                <text w="20" />
                                <checkbox textSize="8sp" id="sanren" h="20" text="人满再开" />
                            </horizontal>
                            <checkbox textSize="8sp" id="lingche" h="20" text="灵车模式，战斗开始即退出，不耗体力无奖励" />
                            <horizontal id="mantilishi">
                                <text w="20" />
                                <checkbox textSize="8sp" id="manti" h="20" text="体力满时不灵车，正常拿一次奖励" />
                            </horizontal>
                            <checkbox textSize="8sp" id="xuzhan" h="20" text="续战模式，消耗体力获得奖励" />
                            <horizontal id="chiyaogongdou">
                                <checkbox id="chiyaokaiche" textSize="8sp" text="(续战模式会自动吃体力药)直到开够" />
                                <input inputType="number" textSize="8sp" id="kaichecishu" focusable="true" text="50" gravity="center" h="30" w="25" ></input>
                                <text text="次车" textSize="8sp" textColor="black"></text>
                            </horizontal>
                            <checkbox textSize="8sp" id="fache" h="20" text="开始开车时发送qq通知" />
                        </vertical>
                    </scroll>
                    <scroll>
                        <vertical>
                            <text gravity="top|center" textColor="red" textSize="8sp" text="未root或无法勾选不再询问录屏权限的手机如需使用定时任务请勾选从容退出！"></text>
                            <horizontal>
                                <checkbox textSize="8sp" id="qudao" text="选择游戏渠道" />
                                <text w="10" />
                                <spinner textSize="8sp" id="qudaoxuanze" bg="#aa65c294" gravity="center" h="18" w="50" entries="自动|官服|b服" />
                            </horizontal>
                            <checkbox id="zidingyi" textSize="8sp" text="自定义包名" />
                            <input textSize="14sp" id="baoming" focusable="true" text="com.leiting.wf"></input>
                            <checkbox id="dingshiqidong" textSize="8sp" text="定时启动，请输入时间（如5:00 14:00 20:00则脚本将在5点、14点、20点自动启动，若到点时脚本正在运行则不执行操作）" />
                            <input digit="1234567890: " textSize="14sp" id="qidongshijian" focusable="true" text="5:00 14:00 20:00"></input>
                            <checkbox id="dingshiguanbi" textSize="8sp" text="定时关闭，请输入时间（如9:30 17:00 1:40则脚本将在9点30分、17点3、1点40分自动关闭，若到点时脚本未在运行则不执行操作）" />
                            <input digit="1234567890: " textSize="14sp" id="guanbishijian" focusable="true" text="9:30 17:00 1:40"></input>
                            <checkbox id="qqtongzhi" textSize="8sp" text="启用qq通知，将在任务完成或卡死时对指定qq发送通知，使用时需添加2407265126为好友或将其拉入群聊，并将自己的qq号或群号填入下方" />
                            <text textColor="red" textSize="8sp" text="推荐加入交流群，直接填下方群号，方便作者检查问题" />
                            <input digit="1234567890" textSize="14sp" id="qq" focusable="true" text=""></input>
                            <checkbox id="dianban" textSize="8sp" text="启用开局点板，将在战斗开始时快速点击数次弹板，让你启动快人一步" />
                            <checkbox id="congrong" textSize="8sp" text="启用从容退出，脚本将在当前任务完成后退出而不是立刻退出" />
                            <button id="clear" text="清除数据" padding="0" bg="#aac37e00" textSize="14sp" layout_gravity="bottom|left" w="60" h="30" />
                            <horizontal>
                                <text id="congrong" textSize="14sp" text="交流群682604932" />
                                <button id="copy" text="点击复制" padding="0" bg="#aac37e00" textSize="8sp" h="25" />
                            </horizontal>
                            <button id="logs" text="显示日志" padding="0" bg="#aac37e00" textSize="14sp" layout_gravity="bottom|left" w="60" h="30" />
                        </vertical>
                    </scroll>
                    <scroll>
                        <vertical>
                            <text textColor="black" text="v2.51" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、适配新版本" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v2.3" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、添加了刷地狱功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v2.2" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、优化了查找房间的方式" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、添加了只做固定id车的功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、添加了共斗超时退出的功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="4、修复了续战车重复招募的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="5、修复了开车次数计数未成功重置的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v2.1" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了540分辨率缺失图片的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了部分情况下高级+无法开车的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、添加了游戏包名选择功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v2.0" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了铃铛结算异常异常的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了部分情况下开始招募失效的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、添加了每日单抽功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="4、适配了大海的遗产活动" gravity="left" textSize="8sp" />
                            <text textColor="black" text="5、脚本启动时将会提示待执行任务" gravity="left" textSize="8sp" />
                            <text textColor="black" text="6、每日任务和日期绑定" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.9" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了铃铛结算异常后会停止运行的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了未勾选每日素材时后续功能均不执行的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、修复了未勾选从容退出时消息提示框无法正常关闭的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="4、修复了勾选从容退出时退出后点击开始无法正常运行脚本的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="5、修复了多次点击开始会创建多个提示框的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="6、修复了在查找活动房间时有时会停留在领主房间的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.8" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了刷深层结算异常的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、添加了购买每日素材的功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.7" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了刷深层结算异常的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了刷深层体力耗尽时出错的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.6" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、为所有找图添加了查找超时的处理办法，以后查找超时不会导致脚本停止运行了" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了部分情况下关卡加载时断开连接无法处理的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.5" gravity="left" textSize="12sp" />
                            <text textColor="red" text="1、添加了(可能会有很多问题的)开车功能" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、优化了活动关卡的进入方式" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、优化了战斗结算流程" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.4" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、添加了跳转时的日志提示" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.3" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了找图超时时报错的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="1、优化了开局点板的实现方式" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.2" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了1.1版本完全无法使用的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.1" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修改了部分任务逻辑，找图超时后不会卡死了" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了进入共斗时偶发的跳转异常问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、修复了共斗房主关闭房间时的异常报错" gravity="left" textSize="8sp" />
                            <text textColor="black" text="4、修复了勾选邮件但没有邮件可领取时无法处理的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v1.0" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、增加了一些状态提示" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、刷单人本前会先返回主页了" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、修复了停止脚本时报错的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v0.9" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、现在退出时将会保存设置了" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、更新了540和1080分辨率下体力判断的图片" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v0.8" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了部分情况下返回主页失败的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、添加了日志按钮。可以打开日志" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v0.7" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、修复了加入房间失败时卡死的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了卡死时真的会卡死的问题（可能吧）" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v0.3" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、现在单人战斗时会关闭铃铛接取" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、修复了在加入共斗房间后房主结束连战时卡死的问题" gravity="left" textSize="8sp" />
                            <text textColor="black" text="v0.2" gravity="left" textSize="12sp" />
                            <text textColor="black" text="1、添加退出按钮，可以结束autoFlipper运行" gravity="left" textSize="8sp" />
                            <text textColor="black" text="2、在未开启从容退出时点击停止可以正确关闭状态提示了" gravity="left" textSize="8sp" />
                            <text textColor="black" text="3、修复了在加入共斗房间后房主结束连战时卡死的问题" gravity="left" textSize="8sp" />
                        </vertical>
                    </scroll>
                </viewpager>
            </vertical>
            <horizontal layout_gravity="bottom" gravity="bottom">
                <button id="start" text="启动" padding="0" bg="#aac37e00" textSize="14sp" layout_gravity="bottom|left" w="60" h="30" />
                <text layout_width="wrap_content" layout_height="wrap_content" layout_weight="1" />
                <button id="end" text="停止" padding="0" bg="#aac37e00" textSize="14sp" layout_gravity="bottom|right" w="60" h="30" />
                <text layout_width="wrap_content" layout_height="wrap_content" layout_weight="1" />
                <button id="exit" text="退出" padding="0" bg="#aac37e00" textSize="14sp" layout_gravity="bottom|center" w="60" h="30" />
            </horizontal>
        </frame>
    )
    menu.setPosition(WIDTH / 5, HEIGHT / 5);
    menu.setSize(WIDTH * 3 / 5, HEIGHT * 3 / 5);
    menu.resolution.text("当前系统分辨率:" + WIDTH + "*" + HEIGHT);
    if (WIDTH != 720 && WIDTH != 1080 && WIDTH != 540) {
        menu.resolution.text("当前系统分辨率:" + WIDTH + "*" + HEIGHT + "暂不支持该分辨率，请联系作者！");
    } else if (WIDTH == 1080 && HEIGHT != 1920) {
        menu.resolution.text("当前系统分辨率:" + WIDTH + "*" + HEIGHT + "可能不支持该分辨率");
    }
    menu.viewpager.setTitles(["蝗虫", "开车", "设置", "关于"]);
    menu.tabs.setupWithViewPager(menu.viewpager);


    if (Storage.get("youjian")) {
        menu.youjian.attr("checked", Storage.get("youjian"));
    }
    if (Storage.get("huodongdanren")) {
        menu.huodongdanren.attr("checked", Storage.get("huodongdanren"));
    }
    if (Storage.get("duihuan")) {
        menu.duihuan.attr("checked", Storage.get("duihuan"));
    }
    if (Storage.get("juese")) {
        menu.juese.attr("checked", Storage.get("juese"));
    }
    if (Storage.get("wuqi")) {
        menu.wuqi.attr("checked", Storage.get("wuqi"));
    }
    if (Storage.get("zhenpin")) {
        menu.zhenpin.attr("checked", Storage.get("zhenpin"));
    }
    if (Storage.get("wuxian")) {
        menu.wuxian.attr("checked", Storage.get("wuxian"));
    }
    if (Storage.get("zhanzhen")) {
        menu.zhanzhen.attr("checked", Storage.get("zhanzhen"));
    }
    if (Storage.get("shuangbei")) {
        menu.shuangbei.attr("checked", Storage.get("shuangbei"));
    }
    if (Storage.get("gaonan")) {
        menu.gaonan.attr("checked", Storage.get("gaonan"));
    }
    if (Storage.get("gaonanshuxing")) {
        menu.gaonanshuxing.setSelection(Storage.get("gaonanshuxing"));
    }
    if (Storage.get("gaonannandu")) {
        menu.gaonannandu.setSelection(Storage.get("gaonannandu"));
    }
    if (Storage.get("shuangbeishuxing")) {
        menu.shuangbeishuxing.setSelection(Storage.get("shuangbeishuxing"));
    }
    if (Storage.get("sucai")) {
        menu.sucai.attr("checked", Storage.get("sucai"));
    }
    if (Storage.get("sucaishuxing")) {
        menu.sucaishuxing.setSelection(Storage.get("sucaishuxing"));
    }
    if (Storage.get("shenceng")) {
        menu.shenceng.attr("checked", Storage.get("shenceng"));
    }
    if (Storage.get("shencengshuxing")) {
        menu.shencengshuxing.setSelection(Storage.get("shencengshuxing"));
    }
    if (Storage.get("chiyao")) {
        menu.chiyao.attr("checked", Storage.get("chiyao"));
    }
    if (Storage.get("shuatucishu")) {
        menu.shuatucishu.attr("text", Storage.get("shuatucishu"));
    }
    if (Storage.get("zhishua")) {
        menu.zhishua.attr("checked", Storage.get("zhishua"));
    }
    if (Storage.get("zhishuacishu")) {
        menu.zhishuacishu.attr("text", Storage.get("zhishuacishu"));
    }
    if (Storage.get("lingdang")) {
        menu.lingdang.attr("checked", Storage.get("lingdang"));
    }
    if (Storage.get("lingzhu")) {
        menu.lingzhu.attr("checked", Storage.get("lingzhu"));
    }
    if (Storage.get("huodong")) {
        menu.huodong.attr("checked", Storage.get("huodong"));
    }
    if (Storage.get("gongdouci")) {
        menu.gongdouci.attr("checked", Storage.get("gongdouci"));
    }
    if (Storage.get("gongdoucishu")) {
        menu.gongdoucishu.attr("text", Storage.get("gongdoucishu"));
    }
    if (Storage.get("chaoshi")) {
        menu.chaoshi.attr("checked", Storage.get("chaoshi"));
    }
    if (Storage.get("chaoshishijian")) {
        menu.chaoshishijian.attr("text", Storage.get("chaoshishijian"));
    }
    if (Storage.get("auto")) {
        menu.auto.attr("checked", Storage.get("auto"));
    }



    if (Storage.get("kaiche1")) {
        menu.kaiche1.attr("checked", Storage.get("kaiche1"));
    }
    if (Storage.get("boss1")) {
        menu.boss1.setSelection(Storage.get("boss1"));
    }
    if (Storage.get("nandu1")) {
        menu.nandu1.setSelection(Storage.get("nandu1"));
    }
    if (Storage.get("kaiche2")) {
        menu.kaiche2.attr("checked", Storage.get("kaiche2"));
    }
    if (Storage.get("boss2")) {
        menu.boss2.setSelection(Storage.get("boss2"));
    }
    if (Storage.get("nandu2")) {
        menu.nandu2.setSelection(Storage.get("nandu2"));
    }
    if (Storage.get("huxiangguanzhu")) {
        menu.huxiangguanzhu.attr("checked", Storage.get("huxiangguanzhu"));
    }
    if (Storage.get("danxiangguanzhu")) {
        menu.danxiangguanzhu.attr("checked", Storage.get("danxiangguanzhu"));
    }
    if (Storage.get("yaolingdang")) {
        menu.yaolingdang.attr("checked", Storage.get("yaolingdang"));
    }
    if (Storage.get("dengdai")) {
        menu.dengdai.attr("checked", Storage.get("dengdai"));
    }
    if (Storage.get("dengdaishijian")) {
        menu.dengdaishijian.attr("text", Storage.get("dengdaishijian"));
    }
    if (Storage.get("shuangren")) {
        menu.shuangren.attr("checked", Storage.get("shuangren"));
    }
    if (Storage.get("sanren")) {
        menu.sanren.attr("checked", Storage.get("sanren"));
    }
    if (Storage.get("lingche")) {
        menu.lingche.attr("checked", Storage.get("lingche"));
    }
    if (Storage.get("manti")) {
        menu.manti.attr("checked", Storage.get("manti"));
    }
    if (Storage.get("xuzhan")) {
        menu.xuzhan.attr("checked", Storage.get("xuzhan"));
    }
    if (Storage.get("chiyaokaiche")) {
        menu.chiyaokaiche.attr("checked", Storage.get("chiyaokaiche"));
    }
    if (Storage.get("kaichecishu")) {
        menu.kaichecishu.attr("text", Storage.get("kaichecishu"));
    }
    if (Storage.get("fache")) {
        menu.fache.attr("checked", Storage.get("fache"));
    }




    if (Storage.get("qudao")) {
        menu.qudao.attr("checked", Storage.get("qudao"));
    }
    if (Storage.get("qudaoxuanze")) {
        menu.qudaoxuanze.setSelection(Storage.get("qudaoxuanze"));
    }
    if (Storage.get("zidingyi")) {
        menu.zidingyi.attr("checked", Storage.get("zidingyi"));
    }
    if (Storage.get("baoming")) {
        menu.baoming.attr("text", Storage.get("baoming"));
    }
    if (Storage.get("dingshiqidong")) {
        menu.dingshiqidong.attr("checked", Storage.get("dingshiqidong"));
    }
    if (Storage.get("qidongshijian")) {
        menu.qidongshijian.attr("text", Storage.get("qidongshijian"));
    }
    if (Storage.get("dingshiguanbi")) {
        menu.dingshiguanbi.attr("checked", Storage.get("dingshiguanbi"));
    }
    if (Storage.get("guanbishijian")) {
        menu.guanbishijian.attr("text", Storage.get("guanbishijian"));
    }
    if (Storage.get("qqtongzhi")) {
        menu.qqtongzhi.attr("checked", Storage.get("qqtongzhi"));
    }
    if (Storage.get("qq")) {
        menu.qq.attr("text", Storage.get("qq"));
    }
    if (Storage.get("dianban")) {
        menu.dianban.attr("checked", Storage.get("dianban"));
    }
    if (Storage.get("congrong")) {
        menu.congrong.attr("checked", Storage.get("congrong"));
    }



    if (menu.sucai.checked == false && menu.shenceng.checked == false) {
        menu.tiliyao.visibility = 8;
    }
    if (menu.sucai.checked == false && menu.shenceng.checked == false) {
        menu.jiuzhishua.visibility = 8;
    }
    if (menu.lingzhu.checked == false && menu.huodong.checked == false && menu.lingdang.checked == false) {
        menu.gongdou.visibility = 8;
        menu.zuoche.visibility = 8;
    }
    if (menu.dingshiqidong.checked == false) {
        menu.qidongshijian.visibility = 8;
    }
    if (menu.dingshiguanbi.checked == false) {
        menu.guanbishijian.visibility = 8;
    }
    if (menu.lingche.checked == false) {
        menu.mantilishi.visibility = 8;
    }
    if (menu.yaolingdang.checked == false) {
        menu.dengdaiyaoling.visibility = 8;
    }



    ui.run(function () {
        menu.shuatucishu.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.shuatucishu.on("touch_down", () => {
            menu.requestFocus();
            menu.shuatucishu.requestFocus();
        });
        menu.zhishuacishu.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.zhishuacishu.on("touch_down", () => {
            menu.requestFocus();
            menu.zhishuacishu.requestFocus();
        });
        menu.gongdoucishu.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.gongdoucishu.on("touch_down", () => {
            menu.requestFocus();
            menu.gongdoucishu.requestFocus();
        });
        menu.qidongshijian.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.qidongshijian.on("touch_down", () => {
            menu.requestFocus();
            menu.qidongshijian.requestFocus();
        });
        menu.guanbishijian.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.guanbishijian.on("touch_down", () => {
            menu.requestFocus();
            menu.guanbishijian.requestFocus();
        });
        menu.qq.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.qq.on("touch_down", () => {
            menu.requestFocus();
            menu.qq.requestFocus();
        });
        menu.kaichecishu.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.kaichecishu.on("touch_down", () => {
            menu.requestFocus();
            menu.kaichecishu.requestFocus();
        });
        menu.dengdaishijian.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.dengdaishijian.on("touch_down", () => {
            menu.requestFocus();
            menu.dengdaishijian.requestFocus();
        });
        menu.baoming.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.baoming.on("touch_down", () => {
            menu.requestFocus();
            menu.baoming.requestFocus();
        });
        menu.chaoshishijian.on("key", function (keyCode, event) {
            if (event.getAction() == event.ACTION_DOWN && keyCode == keys.back) {
                menu.disableFocus();
                event.consumed = true;
            }
        });
        menu.chaoshishijian.on("touch_down", () => {
            menu.requestFocus();
            menu.chaoshishijian.requestFocus();
        });





        menu.start.click(function () {
            toastLog("准备开始脚本");
            if (menu.dingshiqidong.checked == true) {
                TIME = menu.qidongshijian.text().split(" ");
                STARTTIME = new Array();
                for (let i = 0; i < TIME.length; i++) {
                    STARTTIME[i] = new Array();
                    STARTTIME[i] = TIME[i].split(":");
                    if (STARTTIME[i][0] < 0 || STARTTIME[i][0] > 24 || STARTTIME[i][1] < 0 || STARTTIME[i][1] > 60) {
                        alert("时间不合法").then(() => {
                            return 0;
                        });
                    }
                }
            }
            if (menu.dingshiguanbi.checked == true) {
                TIME = menu.guanbishijian.text().split(" ");
                ENDTIME = new Array();
                for (let i = 0; i < TIME.length; i++) {
                    ENDTIME[i] = new Array();
                    ENDTIME[i] = TIME[i].split(":");
                    if (ENDTIME[i][0] < 0 || ENDTIME[i][0] > 24 || ENDTIME[i][1] < 0 || ENDTIME[i][1] > 60) {
                        alert("时间不合法").then(() => {
                            return 0;//当点击确定后会执行这里
                        });
                    }
                }
            }



            putStorage();
            initjinri();
            getPackage();
            Storage.put("yidagongdou", 0);
            Storage.put("yidadanren", 0);
            Storage.put("yidazhanzhen", 0);
            Storage.put("yikaicheshu", 0);



            menu.close();
            menu = null;
            setTimeout(function () {
                if (menu == null && state == true) {
                    if (place == true) {
                        window.setPosition(-window.getWidth() / 2, window.getY());
                        if (prompt == null) { } else {
                            prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                        }
                        state = false;
                    } else {
                        window.setPosition(WIDTH - window.getWidth() / 2, window.getY());
                        if (prompt == null) { } else {
                            prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());
                        }
                        state = false;
                    }
                }
            }, 5000);


            tmp = threads.start(function () {

                //在新线程执行的代码
                if (scr == null) {
                    scr = engines.execScriptFile("./script.js");
                    sleep(2000);
                } else {
                    scr.getEngine().forceStop();
                    sleep(2000);
                    scr = engines.execScriptFile("./script.js");
                    sleep(2000);
                }
                bubble = threads.start(function () {
                    //在新线程执行的代码
                    Prompt();

                });
                tmp.interrupt();
            });

            if (Storage.get("dingshiqidong") == true && Storage.get("dingshiguanbi") == true) {
                timer = threads.start(function () {
                    //在新线程执行的代码
                    setTimer([1, 1]);

                });
            } else if (Storage.get("dingshiqidong") == true && Storage.get("dingshiguanbi") == false) {
                timer = threads.start(function () {
                    //在新线程执行的代码
                    setTimer([1, 0]);

                });
            } else if (Storage.get("dingshiqidong") == false && Storage.get("dingshiguanbi") == true) {
                timer = threads.start(function () {
                    //在新线程执行的代码
                    setTimer([0, 1]);

                });
            } else if (Storage.get("dingshiqidong") == false && Storage.get("dingshiguanbi") == false) {
                timer = threads.start(function () {
                    //在新线程执行的代码
                    setTimer([0, 0]);

                });
            }

        });


        menu.end.click(function () {
            toastLog("准备停止脚本");
            putStorage();
            menu.close();
            if (Storage.get("congrong") == true) {
                events.broadcast.emit("close");
            } else {
                if (scr != null) {
                    scr.getEngine().forceStop();
                    scr = null;
                }
                if (prompt != null) {
                    prompt.close();
                    prompt = null;
                }
                //exit();
            }
            setTimeout(function () {
                if (menu == null && state == true) {
                    if (place == true) {
                        window.setPosition(-window.getWidth() / 2, window.getY());
                        if (prompt != null) {
                            prompt.setPosition(window.getX() + window.getWidth(), window.getY());
                        }
                        state = false;
                    } else {
                        window.setPosition(WIDTH - window.getWidth() / 2, window.getY());
                        if (prompt != null) {
                            prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());
                        }
                        state = false;
                    }
                }
            }, 5000);
        });

        menu.exit.click(function () {
            putStorage();
            toastLog("退出autoFlipper");
            java.lang.System.exit(0);
        })

        menu.clear.click(function () {
            Storage.clear();
            toastLog("数据已清除");
        })
        menu.copy.click(function () {
            setClip("682604932");
            toastLog("群号已复制");
        })
        menu.logs.click(function () {
            $settings.setEnabled('not_show_console', false);
            launch("com.frost.autoflipper");
        })




        menu.sucai.on("check", (checked) => {
            if (checked) {
                menu.shenceng.attr("checked", "false");
                menu.tiliyao.visibility = 0;
                menu.jiuzhishua.visibility = 0;
            } else {
                menu.tiliyao.visibility = 8;
                menu.jiuzhishua.visibility = 8;
            }
        });
        menu.shenceng.on("check", (checked) => {
            if (checked) {
                menu.sucai.attr("checked", "false");
                menu.tiliyao.visibility = 0;
                menu.jiuzhishua.visibility = 0;
            } else {
                menu.tiliyao.visibility = 8;
                menu.jiuzhishua.visibility = 8;
            }
        });
        menu.chiyao.on("check", (checked) => {
            if (checked) {
                menu.zhishua.attr("checked", "false");
            }
        });
        menu.zhishua.on("check", (checked) => {
            if (checked) {
                menu.chiyao.attr("checked", "false");
            }
        });
        menu.lingdang.on("check", (checked) => {
            if (checked) {
                menu.gongdou.visibility = 0;
                menu.zuoche.visibility = 0;
            } else {
                if (menu.lingzhu.checked == false && menu.huodong.checked == false) {
                    menu.gongdou.visibility = 8;
                    menu.zuoche.visibility = 8;
                }
            }
        });
        menu.lingzhu.on("check", (checked) => {
            if (checked) {
                menu.huodong.attr("checked", "false");
                menu.gongdou.visibility = 0;
                menu.zuoche.visibility = 0;
            } else {
                if (menu.lingdang.checked == false) {
                    menu.gongdou.visibility = 8;
                    menu.zuoche.visibility = 8;
                }
            }
        });
        menu.huodong.on("check", (checked) => {
            if (checked) {
                menu.lingzhu.attr("checked", "false");
                menu.gongdou.visibility = 0;
                menu.zuoche.visibility = 0;
            } else {
                if (menu.lingdang.checked == false) {
                    menu.gongdou.visibility = 8;
                    menu.zuoche.visibility = 8;
                }
            }
        });
        menu.qudao.on("check", (checked) => {
            if (checked) {
                menu.zidingyi.attr("checked", "false");
            }
        });
        menu.zidingyi.on("check", (checked) => {
            if (checked) {
                menu.qudao.attr("checked", "false");
            }
        });
        menu.dingshiqidong.on("check", (checked) => {
            if (checked) {
                menu.qidongshijian.visibility = 0;
            } else {
                menu.qidongshijian.visibility = 8;
            }
        });
        menu.dingshiguanbi.on("check", (checked) => {
            if (checked) {
                menu.guanbishijian.visibility = 0;
            } else {
                menu.guanbishijian.visibility = 8;
            }
        });
        menu.qqtongzhi.on("check", (checked) => {
            if (checked) {
                menu.qq.visibility = 0;
            } else {
                menu.qq.visibility = 8;
            }
        });
        menu.kaiche1.on("check", (checked) => {
            if (checked) {
                menu.kaiche2.attr("checked", "false");
            }
        });
        menu.kaiche2.on("check", (checked) => {
            if (checked) {
                menu.kaiche1.attr("checked", "false");
            }
        });
        menu.yaolingdang.on("check", (checked) => {
            if (checked) {
                menu.dengdaiyaoling.visibility = 0;
            } else {
                menu.dengdaiyaoling.visibility = 8;
            }
        });
        menu.shuangren.on("check", (checked) => {
            if (checked) {
                menu.sanren.attr("checked", "false");
            }
        });
        menu.sanren.on("check", (checked) => {
            if (checked) {
                menu.shuangren.attr("checked", "false");
            }
        });
        menu.lingche.on("check", (checked) => {
            if (checked) {
                menu.xuzhan.attr("checked", "false");
                menu.mantilishi.visibility = 0;
            } else {
                menu.mantilishi.visibility = 8;
            }
        });
        menu.xuzhan.on("check", (checked) => {
            if (checked) {
                menu.lingche.attr("checked", "false");
            }
        });
    });

}







function setTimer(flag) {
    log("setTimer");
    if (flag[0] == 0 && flag[1] == 0) {
        while (1) {
            var now = new Date();
            nowhour = now.getHours();
            nowminute = now.getMinutes();
            if (nowhour == 5 && nowminute == 0) {
                startScript();
            } else if (nowhour == 4 && nowhour == 59) {
                closeScript();
            }
            sleep(60000);
        }
    } else if (flag[0] == 1 && flag[1] == 0) {
        while (1) {
            var now = new Date();
            nowhour = now.getHours();
            nowminute = now.getMinutes();
            if (nowhour == 5 && nowminute == 0) {
                startScript();
            } else if (nowhour == 4 && nowhour == 59) {
                closeScript();
            } else {
                for (let i = 0; i < STARTTIME.length; i++) {
                    if (nowhour == STARTTIME[i][0] && nowminute == STARTTIME[i][1]) {
                        startScript();
                    }
                }
            }
            sleep(60000);
        }
    } else if (flag[0] == 0 && flag[1] == 1) {
        while (1) {
            var now = new Date();
            nowhour = now.getHours();
            nowminute = now.getMinutes();
            if (nowhour == 5 && nowminute == 0) {
                startScript();
            } else if (nowhour == 4 && nowhour == 59) {
                closeScript();
            } else {
                for (let i = 0; i < ENDTIME.length; i++) {
                    if (nowhour == ENDTIME[i][0] && nowminute == ENDTIME[i][1]) {
                        closeScript();
                    }
                }
            }
            sleep(60000);
        }
    } else if (flag[0] == 1 && flag[1] == 1) {
        while (1) {
            var now = new Date();
            nowhour = now.getHours();
            nowminute = now.getMinutes();
            if (nowhour == 5 && nowminute == 0) {
                startScript();
            } else if (nowhour == 4 && nowhour == 59) {
                closeScript();
            } else {
                for (let i = 0; i < STARTTIME.length; i++) {
                    if (nowhour == STARTTIME[i][0] && nowminute == STARTTIME[i][1]) {
                        startScript();
                    }
                }
                for (let i = 0; i < ENDTIME.length; i++) {
                    if (nowhour == ENDTIME[i][0] && nowminute == ENDTIME[i][1]) {
                        closeScript();
                    }
                }
            }
            sleep(60000);
        }
    }
}


function startScript() {

    initjinri();
    Storage.put("yidagongdou", 0);
    Storage.put("yidadanren", 0);
    Storage.put("yidazhanzhen", 0);
    Storage.put("yikaicheshu", 0);
    tmp = threads.start(function () {
        //在新线程执行的代码
        if (scr == null) {
            scr = engines.execScriptFile("./script.js");
            sleep(2000);
        } else {
            events.broadcast.emit("start");
        }
        bubble = threads.start(function () {
            //在新线程执行的代码
            Prompt();

        });
        if (Storage.get("dingshiguanbi") == true) {
            var diff = 24;
            var next = null;
            for (let j = 0; j < ENDTIME.length; j++) {
                let th = ENDTIME[j][0] - nowhour;
                let tm = ENDTIME[j][1] - nowminute;
                if (th > 0 && th <= diff) {
                    diff = th;
                    next = j;
                } else if (th == 0 && tm >= 0) {
                    diff = th;
                    next = j;
                } else if (th < 0) {
                    th = 24 + th;
                    if (th <= diff) {
                        diff = th;
                        next = j;
                    }
                }
            }
            events.broadcast.emit("message1", "下次关闭时间" + ENDTIME[next][0] + ":" + ENDTIME[next][1]);
            text += "下次关闭时间" + ENDTIME[next][0] + ":" + ENDTIME[next][1];
        }
        tmp.interrupt();
    });

    return 0;
}

function closeScript() {
    if (Storage.get("congrong") == true) {
        events.broadcast.emit("close");
    } else {
        tmp = threads.start(function () {
            //在新线程执行的代码
            if (scr != null) {
                scr.getEngine().forceStop();
                scr = null;
            }
            try {
                shell('am force-stop ' + packageName, true);
            } catch (e) {
                //toastLog("错误" + e)
            }
            home();
            if (prompt == null) { } else {
                prompt.close();
                prompt = null;
            }
            tmp.interrupt();
        });

    }
    if (Storage.get("dingshiqidong") == true) {
        var diff = 24;
        var next = null;
        for (let j = 0; j < STARTTIME.length; j++) {
            let th = STARTTIME[j][0] - nowhour;
            let tm = STARTTIME[j][1] - nowminute;
            if (th > 0 && th <= diff) {
                diff = th;
                next = j;
            } else if (th == 0 && tm >= 0) {
                diff = th;
                next = j;
            } else if (th < 0) {
                th = 24 + th;
                if (th <= diff) {
                    diff = th;
                    next = j;
                }
            }
        }
        events.broadcast.emit("message1", "下次启动时间" + STARTTIME[next][0] + ":" + STARTTIME[next][1]);
    }
    return 0;
}



function Prompt() {
    if (prompt == null) {
        prompt = floaty.rawWindow(
            <vertical id="box" bg="#66ccff" alpha="0.5" minHeight="30" gravity="center">
                <text id="message1" text="test" textSize="12sp" minHeight="15" w="auto" textColor="black" gravity="center"></text>
                <text id="message2" text="test" textSize="12sp" minHeight="15" w="auto" textColor="black" gravity="center"></text>
            </vertical>
        )
        prompt.setTouchable(false);//设置不可点击
        if (place == true) {
            prompt.setPosition(window.getX() + window.getWidth(), window.getY());
        } else {
            prompt.setPosition(window.getX() - prompt.getWidth(), window.getY());

        }
    }

}
events.broadcast.on("message1", function (m) {
    if (prompt == null) { } else {
        ui.run(function () {
            prompt.message1.setText(m);
        });
    }
});
events.broadcast.on("message2", function (m) {
    if (prompt == null) { } else {
        ui.run(function () {
            prompt.message2.setText(m);
        });
    }
});

events.broadcast.on("closed", function () {
    if (prompt == null) { } else {
        prompt.close();
        prompt = null;
    }
})

function initjinri() {
    var text = "";
    var now = new Date();
    if (now.getHours() < 5) {
        nowdate = now.getDate() - 1;
    } else {
        nowdate = now.getDate();
    }
    if (Storage.get("jinrihuodong") == undefined) {
        var jinrihuodong = new jinri(nowdate, false);
        Storage.put("jinrihuodong", jinrihuodong);
    }
    if (Storage.get("jinrishuangbei") == undefined) {
        var jinrishuangbei = new jinri(nowdate, false);
        Storage.put("jinrishuangbei", jinrishuangbei);
    }
    if (Storage.get("jinrigaonan") == undefined) {
        var jinrigaonan = new jinri(nowdate, false);
        Storage.put("jinrigaonan", jinrigaonan);
    }
    if (Storage.get("jinriduihuan") == undefined) {
        var jinriduihuan = new jinri(nowdate, false);
        Storage.put("jinriduihuan", jinriduihuan);
    }
    if (Storage.get("jinrijuese") == undefined) {
        var jinrijuese = new jinri(nowdate, false);
        Storage.put("jinrijuese", jinrijuese);
    }
    if (Storage.get("jinriwuqi") == undefined) {
        var jinriwuqi = new jinri(nowdate, false);
        Storage.put("jinriwuqi", jinriwuqi);
    }
    if (Storage.get("jinrizhenpin") == undefined) {
        var jinrizhenpin = new jinri(nowdate, false);
        Storage.put("jinrizhenpin", jinrizhenpin);
    }
    tmp2 = threads.start(function () {
        if (Storage.get("youjian") == true) {
            text += "领取邮件\n";
        }
        if (Storage.get("wuxian") == true) {
            text += "抽无限池\n";
        }
        if (Storage.get("huodongdanren") == true) {
            let j = Storage.get("jinrihuodong");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日活动关卡\n";
            } else if (j.state == false) {
                text += "每日活动关卡\n";
            }
            Storage.put("jinrihuodong", j);
        }
        if (Storage.get("duihuan") == true) {
            let j = Storage.get("jinriduihuan");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日素材兑换(现在没有吧)\n";
            } else if (j.state == false) {
                text += "每日素材兑换(现在没有吧)\n";
            }
            Storage.put("jinriduihuan", j);
        }
        if (Storage.get("juese") == true) {
            let j = Storage.get("jinrijuese");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日角色单抽\n";
            } else if (j.state == false) {
                text += "每日角色单抽\n";
            }
            Storage.put("jinrijuese", j);
        }
        if (Storage.get("wuqi") == true) {
            let j = Storage.get("jinriwuqi");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日武器单抽\n";
            } else if (j.state == false) {
                text += "每日武器单抽\n";
            }
            Storage.put("jinriwuqi", j);
        }
        if (Storage.get("zhenpin") == true) {
            let j = Storage.get("jinrizhenpin");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日珍品购买(未实现)\n";
            } else if (j.state == false) {
                text += "每日珍品购买(未实现)\n";
            }
            Storage.put("jinrizhenpin", j);
        }
        if (Storage.get("shuangbei") == true) {
            let j = Storage.get("jinrishuangbei");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日双倍素材\n";
            } else if (j.state == false) {
                text += "每日双倍素材\n";
            }
            Storage.put("jinrishuangbei", j);
        }
        if (Storage.get("gaonan") == true) {
            let j = Storage.get("jinrigaonan");
            if (j.date < nowdate || nowdate == 1) {
                j.date = nowdate;
                j.state = false;
                text += "每日高难关卡\n";
            } else if (j.state == false) {
                text += "每日高难关卡\n";
            }
            Storage.put("jinrigaonan", j);
        }
        if (Storage.get("chiyao") == true) {
            text += "吃药刷\n";
        }
        if (Storage.get("sucai") == true) {
            text += "刷素材\n";
        }
        if (Storage.get("shenceng") == true) {
            text += "刷深层\n";
        }
        if (Storage.get("lingdang") == true) {
            text += "接铃铛\n";
        }
        if (Storage.get("lingzhu") == true) {
            text += "找领主\n";
        }
        if (Storage.get("huodong") == true) {
            text += "找活动\n";
        }
        if (Storage.get("kaiche1") == true || Storage.get("kaiche2") == true) {
            text += "开车\n";
        }
        if (Storage.get("zhanzhen") == true) {
            text = "我tm刷爆战阵！"
        }
        log(text);
        /*
        noti = floaty.rawWindow(
            <vertical bg="#66ccff" alpha="0.5" minHeight="30" gravity="center">
                <text text="待执行任务:" textSize="12sp" minHeight="15" w="auto" textColor="red" gravity="left"></text>
                <text id="text" textSize="12sp" minHeight="15" w="auto" textColor="black" gravity="left"></text>
            </vertical>
        )
        noti.setTouchable(false);
        noti.setPosition(WIDTH / 3, HEIGHT / 3);
        noti.text.setText(text);
        sleep(10000);
        noti.close();
        */
        tmp2.interrupt();
    })
}

function upDate() {
    const version = "3.4";
    const picNum = 147;
    const baseUrlproxy = "https://raw.kgithub.com/EFrostBlade/autoFlipper/main/";
    const baseUrl = "https://raw.githubusercontent.com/EFrostBlade/autoFlipper/main/";
    toastLog("检查更新……");
    var downUrl = baseUrl;
    try {
        var remoteVersion = http.get(baseUrl + "version.js").body.string();
    } catch (err) {
        log("github请求超时，正在切换至kgit。。。")
        var downUrl = baseUrlproxy;
        var remoteVersion = http.get(baseUrlproxy + "version.js").body.string();
    }
    if (isNaN(Number(remoteVersion))) {
        log(downUrl + "更新失败，错误信息：" + remoteVersion)
        toastLog("更新服务出错,请联系开发者，脚本将以离线模式运行");
        return true;
    }
    log(downUrl);
    if (Storage.get("oldVersion") == undefined) {
        var oldVersion = 0;
    } else {
        var oldVersion = Storage.get("oldVersion");
    }
    log("最新版本" + remoteVersion + "，当前版本" + version + "，历史版本" + oldVersion);
    if (Number(version) > Number(oldVersion) && Number(version) <= 1.0) {
        log("更新1.0图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/23.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/23.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/23.png");
            img.recycle();
        }
    }
    if (Number(version) > Number(oldVersion) && Number(version) <= 1.2) {
        log("更新1.2图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/34.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/34.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/34.png");
            img.recycle();
        }
        let img2 = images.load(downUrl + "res/" + WIDTH + "/35.png");
        if (img2 != null) {
            images.save(img2, scriptPath + "/res/" + WIDTH + "/35.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/35.png");
            img2.recycle();
        }
        let img3 = images.load(downUrl + "res/" + WIDTH + "/36.png");
        if (img3 != null) {
            images.save(img3, scriptPath + "/res/" + WIDTH + "/36.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/36.png");
            img3.recycle();
        }
    }
    if (Number(version) > Number(oldVersion) && Number(version) <= 2.0) {
        log("更新2.0图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/139.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/139.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/139.png");
            img.recycle();
        }
        let img2 = images.load(downUrl + "res/" + WIDTH + "/140.png");
        if (img2 != null) {
            images.save(img2, scriptPath + "/res/" + WIDTH + "/140.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/140.png");
            img2.recycle();
        }
    }
    if (Number(version) > Number(oldVersion) && Number(version) <= 2.1) {
        log("更新2.1图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/146.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/146.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/146.png");
            img.recycle();
        }
    }
    if (Number(version) > Number(oldVersion) && Number(version) <= 2.6) {
        log("更新2.6图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/122.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/122.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/122.png");
            img.recycle();
        }
        let img2 = images.load(downUrl + "res/" + WIDTH + "/138.png");
        if (img2 != null) {
            images.save(img2, scriptPath + "/res/" + WIDTH + "/138.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/138.png");
            img2.recycle();
        }
    }
    if (Number(version) > Number(oldVersion) && Number(version) <= 3.3) {
        log("更新3.3图片中")
        let img = images.load(downUrl + "res/" + WIDTH + "/122.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/122.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/122.png");
            img.recycle();
        }
    }
    var updateVersion = Number(remoteVersion) - Number(version);
    if (updateVersion > 0) {
        Storage.put("init", false);
        toastLog("开始更新……")
        for (let i = picNum + 1; ; i++) {
            let img = images.load(downUrl + "res/" + WIDTH + "/" + i + ".png");
            if (img != null) {
                images.save(img, scriptPath + "/res/" + WIDTH + "/" + i + ".png");
                log("保存图片于" + scriptPath + "/res/" + WIDTH + "/" + i + ".png");
                img.recycle();
            } else {
                toastLog("最新图片更新完成");
                break;
            }
        }
        var remoteMain = http.get(downUrl + "main.js").body.string();
        files.write(scriptPath + "/main.js", remoteMain);
        var remoteScript = http.get(downUrl + "script.js").body.string();
        files.write(scriptPath + "/script.js", remoteScript);
        toastLog("最新脚本更新完成");
        engines.execScriptFile("./main.js");
        exit();
    }
    /*
    else if (updateVersion > 0.01) {
        Storage.put("init", false);
        toastLog("开始更新……")
        let img = images.load(downUrl + "res/" + WIDTH + "/122.png");
        if (img != null) {
            images.save(img, scriptPath + "/res/" + WIDTH + "/122.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/122.png");
            img.recycle();
        }
        let img2 = images.load(downUrl + "res/" + WIDTH + "/128.png");
        if (img2 != null) {
            images.save(img2, scriptPath + "/res/" + WIDTH + "/128.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/128.png");
            img2.recycle();
        }
        let img3 = images.load(downUrl + "res/" + WIDTH + "/67.png");
        if (img3 != null) {
            images.save(img3, scriptPath + "/res/" + WIDTH + "/67.png");
            log("保存图片于" + scriptPath + "/res/" + WIDTH + "/67.png");
            img3.recycle();
        }
        for (let i = picNum + 1; ; i++) {
            let img = images.load(downUrl + "res/" + WIDTH + "/" + i + ".png");
            if (img != null) {
                images.save(img, scriptPath + "/res/" + WIDTH + "/" + i + ".png");
                log("保存图片于" + scriptPath + "/res/" + WIDTH + "/" + i + ".png");
                img.recycle();
            } else {
                toastLog("最新图片更新完成");
                break;
            }
        }
        var remoteMain = http.get(downUrl + "main.js").body.string();
        files.write(scriptPath + "/main.js", remoteMain);
        var remoteScript = http.get(downUrl + "script.js").body.string();
        files.write(scriptPath + "/script.js", remoteScript);
        toastLog("最新脚本更新完成");
        engines.execScriptFile("./main.js");
        exit();
    }
    */
    else {
        toastLog("当前已是最新版本");
    }
    Storage.put("oldVersion", version);

    return true;
}

function putStorage() {
    /*
    Storage.put("double", true);
    Storage.put("yidagongdou", 0);
    Storage.put("yidadanren", 0);
    */


    Storage.put("youjian", menu.youjian.checked);
    Storage.put("huodongdanren", menu.huodongdanren.checked);
    Storage.put("duihuan", menu.duihuan.checked);
    Storage.put("juese", menu.juese.checked);
    Storage.put("wuqi", menu.wuqi.checked);
    Storage.put("zhenpin", menu.zhenpin.checked);
    Storage.put("wuxian", menu.wuxian.checked);
    Storage.put("zhanzhen", menu.zhanzhen.checked);
    Storage.put("shuangbei", menu.shuangbei.checked);
    Storage.put("shuangbeishuxing", menu.shuangbeishuxing.getSelectedItemPosition());
    Storage.put("gaonan", menu.gaonan.checked);
    Storage.put("gaonanshuxing", menu.gaonanshuxing.getSelectedItemPosition());
    Storage.put("gaonannandu", menu.gaonannandu.getSelectedItemPosition());
    Storage.put("sucai", menu.sucai.checked);
    Storage.put("sucaishuxing", menu.sucaishuxing.getSelectedItemPosition());
    Storage.put("shenceng", menu.shenceng.checked);
    Storage.put("shencengshuxing", menu.shencengshuxing.getSelectedItemPosition());
    Storage.put("chiyao", menu.chiyao.checked);
    Storage.put("shuatucishu", menu.shuatucishu.text());
    Storage.put("zhishua", menu.zhishua.checked);
    Storage.put("zhishuacishu", menu.zhishuacishu.text());
    Storage.put("lingdang", menu.lingdang.checked);
    Storage.put("lingzhu", menu.lingzhu.checked);
    Storage.put("huodong", menu.huodong.checked);
    Storage.put("gongdouci", menu.gongdouci.checked);
    Storage.put("gongdoucishu", menu.gongdoucishu.text());
    Storage.put("chaoshi", menu.chaoshi.checked);
    Storage.put("chaoshishijian", menu.chaoshishijian.text());
    Storage.put("auto", menu.auto.checked);


    Storage.put("kaiche1", menu.kaiche1.checked);
    Storage.put("boss1", menu.boss1.getSelectedItemPosition());
    Storage.put("nandu1", menu.nandu1.getSelectedItemPosition());
    Storage.put("kaiche2", menu.kaiche2.checked);
    Storage.put("boss2", menu.boss2.getSelectedItemPosition());
    Storage.put("nandu2", menu.nandu2.getSelectedItemPosition());
    Storage.put("huxiangguanzhu", menu.huxiangguanzhu.checked);
    Storage.put("danxiangguanzhu", menu.danxiangguanzhu.checked);
    Storage.put("yaolingdang", menu.yaolingdang.checked);
    Storage.put("dengdai", menu.dengdai.checked);
    Storage.put("dengdaishijian", menu.dengdaishijian.text());
    Storage.put("shuangren", menu.shuangren.checked);
    Storage.put("sanren", menu.sanren.checked);
    Storage.put("lingche", menu.lingche.checked);
    Storage.put("manti", menu.manti.checked);
    Storage.put("xuzhan", menu.xuzhan.checked);
    Storage.put("chiyaokaiche", menu.chiyaokaiche.checked);
    Storage.put("kaichecishu", menu.kaichecishu.text());
    Storage.put("fache", menu.fache.checked);


    Storage.put("qudao", menu.qudao.checked);
    Storage.put("qudaoxuanze", menu.qudaoxuanze.getSelectedItemPosition());
    Storage.put("zidingyi", menu.zidingyi.checked);
    Storage.put("baoming", menu.baoming.text());
    Storage.put("dingshiqidong", menu.dingshiqidong.checked);
    Storage.put("qidongshijian", menu.qidongshijian.text());
    Storage.put("dingshiguanbi", menu.dingshiguanbi.checked);
    Storage.put("guanbishijian", menu.guanbishijian.text());
    Storage.put("qqtongzhi", menu.qqtongzhi.checked);
    Storage.put("qq", menu.qq.text());
    Storage.put("dianban", menu.dianban.checked);
    Storage.put("congrong", menu.congrong.checked);

    return 0;
}

function getPackage() {
    if (Storage.get("qudao") == true) {
        var q = Storage.get("qudaoxuanze");
        switch (q) {
            case 0:
                packageName = getPackageName("世界弹射物语");
            case 1:
                packageName = "com.leiting.wf";
                break
            case 2:
                packageName = "com.leiting.wf.bilibili"
        }
    } else if (Storage.get("zidingyi") == true) {
        packageName = Storage.get("baoming");
    } else {
        packageName = getPackageName("世界弹射物语");
    }
    Storage.put("packageName", packageName);
}