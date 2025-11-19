

// === Global sanitize: remove punctuation ===
function sanitizeText(t){
    try { return t.replace(/[，。、“”‘’？！,.!?]/g, ''); }
    catch(e){ return t; }
}

        // 1. 基础数据定义
        const brands = [
            { name: "比亚迪", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.86WsP1pGwpDYKWSci6SlagHaEK?w=253&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["国产", "新能源"] },
            { name: "奥迪", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.iqkPWNlzRABHrQW-nlU1ZgHaE8?w=287&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["德系"] },
            { name: "宝马", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.rCDEgP0fkJeKrZbTP10w3AHaHa?w=172&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["德系"] },
            { name: "奔驰", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.yA86J8vMspt-1XMOQLXr3gHaE8?w=278&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["德系"] },
            { name: "大众", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.A_fHHOQppzXaryWBLOI-ZgHaHJ?w=195&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["德系"] },
            { name: "保时捷", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.BLSlwmB_oWxMFFt1qU4gQAHaH_?w=157&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["德系"] },
            { name: "丰田", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.UpG4hg2gtVopo6fKietOQAHaFG?w=268&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["日系"] },
            { name: "本田", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.hjy0ZLjRn-bgie8cnGpHkwHaEA?w=241&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["日系"] },
            { name: "日产", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.yIE6Q-L3JXIl-ZpX-Mr7vgHaEK?w=287&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["日系"] },
            { name: "马自达", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.e7EddAXHle2zLJWJiSbfpgHaF4?w=233&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["日系"] },
            { name: "雷克萨斯", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.ouN7EyCtcrMv3QDkTFV_qwHaHa?w=191&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["日系"] },
            { name: "福特", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.gpos2A276BK53PeyLd41KwHaHa?w=196&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["美系"] },
            { name: "别克", logo: "https://ts1.tc.mm.bing.net/th/id/OIP-C.mmQ0WBHNMXU0zhgJMY6QWAHaID?w=180&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimgc1&dpr=1.5&pid=3.1&rm=2", categories: ["美系"] },
            { name: "雪佛兰", logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.vQrkdBRvMAy_bU04IPN7LQHaEb?w=290&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["美系"] },
            { name: "凯迪拉克", logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.4Y3zxfXpoceIURgqUlnilQHaHa?w=192&h=192&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["美系"] },
            { name: "特斯拉", logo: "https://tse1-mm.cn.bing.net/th/id/OIP-C.zpU9mg9vLlMxJGqXoTYthgHaDt?w=325&h=174&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["新能源"] },
            { name: "蔚来", logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.LIdhkI-rQMlEsmu9YYPbYgAAAA?w=154&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["新能源"] },
            { name: "小鹏", logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.-t6lFLVMgMQtXggsDHrfyAHaDR?w=299&h=154&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["新能源"] },
            { name: "理想", logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.ahYXugXx2-zOZJ9zsjQRcgHaHa?w=164&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["新能源"] },
            { name: "吉利", logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.EJD6LJpnQ8aHRhW2qp_2FAHaHa?w=156&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["国产"] },
            { name: "长城", logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.AWjwp7jBKW8T5ufJQI0smwHaE8?w=266&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["国产"] },
            { name: "红旗", logo: "https://tse2-mm.cn.bing.net/th/id/OIP-C.XgGjWwuJhEvSA94ZunMoagHaGI?w=203&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["国产"] },
            { name: "现代", logo: "https://tse4-mm.cn.bing.net/th/id/OIP-C.hnA7Qr8DEg3_bb2WnPHMDAHaES?w=280&h=180&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["韩系"] },
            { name: "起亚", logo: "https://tse3-mm.cn.bing.net/th/id/OIP-C.nzaPQFuK_aXjZ3vBSyXrIgHaD0?w=348&h=179&c=7&r=0&o=7&cb=ucfimgc2&dpr=1.5&pid=1.7&rm=3", categories: ["韩系"] }
        ];

        const models = {
            "比亚迪": ["汉", "唐", "宋", "秦", "元", "海豚", "海豹", "驱逐舰05", "护卫舰07", "海狮", "仰望U8", "腾势D9", "秦PLUS EV 荣耀版"],
            "奥迪": ["A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "e-tron", "RS6", "RS7", "S4", "S8"],
            "宝马": ["1系", "3系", "5系", "7系", "X1", "X3", "X5", "X7", "i3", "i8", "iX3", "iX", "Z4", "M3", "M5"],
            "奔驰": ["A级", "C级", "E级", "S级", "GLA", "GLC", "GLE", "GLS", "EQC", "EQE", "EQS", "AMG GT", "迈巴赫S级"],
            "大众": ["Polo", "Golf", "Passat", "Tiguan", "Touran", "ID.3", "ID.4", "ID.6", "途昂", "途观L", "迈腾", "速腾"],
            "保时捷": ["911", "Panamera", "Cayenne", "Macan", "Taycan", "718 Boxster", "718 Cayman"],
            "丰田": ["卡罗拉", "凯美瑞", "RAV4", "汉兰达", "普拉多", "亚洲龙", "威兰达", "奕泽", "雷凌", "赛那"],
            "本田": ["飞度", "思域", "雅阁", "CR-V", "XR-V", "皓影", "缤智", "冠道", "UR-V", "奥德赛", "艾力绅"],
            "日产": ["轩逸", "天籁", "奇骏", "逍客", "骐达", "蓝鸟", "劲客", "楼兰", "途达", "纳瓦拉"],
            "马自达": ["马自达3", "马自达6", "CX-4", "CX-5", "CX-8", "CX-30", "MX-5"],
            "雷克萨斯": ["ES", "LS", "RX", "NX", "UX", "LX", "GX", "LC"],
            "福特": ["福克斯", "蒙迪欧", "锐界", "探险者", "Mustang", "锐际", "领界", "撼路者", "F-150"],
            "别克": ["英朗", "君威", "君越", "昂科威", "GL8", "昂科旗", "威朗", "凯越"],
            "雪佛兰": ["科鲁泽", "迈锐宝", "探界者", "开拓者", "创酷", "创界", "科沃兹", "畅巡"],
            "凯迪拉克": ["CT4", "CT5", "CT6", "XT4", "XT5", "XT6", "LYRIQ", "凯雷德"],
            "特斯拉": ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck", "Roadster"],
            "蔚来": ["ES6", "ES8", "EC6", "ET7", "ET5", "ES7"],
            "小鹏": ["G3", "P5", "P7", "G9"],
            "理想": ["理想ONE", "理想L9", "理想L8", "理想L7"],
            "吉利": ["帝豪", "博越", "星越", "星瑞", "缤越", "豪越", "嘉际", "几何A", "几何C"],
            "长城": ["哈弗H6", "哈弗大狗", "坦克300", "欧拉好猫", "哈弗神兽", "哈弗酷狗", "魏牌摩卡", "魏牌拿铁"],
            "红旗": ["H5", "H7", "H9", "HS5", "HS7", "E-HS9", "L5", "HQ9"],
            "现代": ["伊兰特", "索纳塔", "胜达", "途胜", "ix35", "悦动", "名图", "库斯途"],
            "起亚": ["K3", "K5", "智跑", "奕跑", "嘉华", "KX3", "KX5", "狮铂拓界"]
        };
        // 年份数据（2024-2000年，按倒序排列）
        const years = [];
        for (let i = 2024; i >= 2000; i--) {
            years.push(i);
        }
        // 诊断流程数据（针对汽车故障的阶梯式提问）
        const diagnosisFlow = [
            { question: "车辆是否能上高压电？", options: ["是", "否"] },
            { question: "动力电池SOC是否满足充电条件？", options: ["是", "否"] },
            { question: "组合仪表充电连接是否点亮？", options: ["是", "否"] },
            { question: "仪表是否显示充电连接中界面？", options: ["是", "否"] },
            { question: "组合仪表是否跳转至连接成功充电中界面？", options: ["是", "否"] },
            { question: "测量CP信号波形是否为-12V至9VPWM波信号？", options: ["是", "否"] },
            { question: "观察数据流S2开关状态是否闭合？", options: ["是", "否"] },
            { question: "观察数据流脉宽调制占空比是否正常？", options: ["是", "否"] }
        ];
        // 全局状态变量（管理页面交互与数据）
        let currentStep = 0;          // 当前诊断步骤
        let diagnosisSubtitleTimer = null; // 控制头像下方字幕逐字浮现的计时器
        let selectedBrand = null;     // 选中的汽车品牌
        let currentProblem = "";      // 用户描述的问题
        let currentCarInfo = "";      // 完整车辆信息（品牌+型号+年份）
        let conversationHistory = []; // 对话历史（用于AI交互）
        let isAIConnected = false;    // AI服务连接状态
        let isChargingProblem = false;// 是否为充电类问题
        let chatHistoryData = [];     // 诊断历史记录
        let currentChatId = null;     // 当前聊天会话ID
        let recognition = null;       // 语音识别实例
        let synthesis = null;         // 语音合成实例
        let preferredVoice = null;    // 播音腔语音缓存（优先选择系统播音风格）
        let isUserSpeaking = false;   // 用户说话状态（控制头像波动）
        let isAISpeaking = false;    // AI说话状态（控制头像波动）

        // DOM元素获取（关联页面所有交互元素）
        const introScreen = document.getElementById('intro-screen');
        const apiStatus = document.getElementById('api-status');
        const pageAuth = document.getElementById('page-auth');
        const navbar = document.getElementById('navbar');
        const pageBrand = document.getElementById('page-brand');
        const pageVehicle = document.getElementById('page-vehicle');
        const pageProblem = document.getElementById('page-problem');
        const pageChat = document.getElementById('page-chat');
        const pageProfile = document.getElementById('page-profile');
        const brandsGrid = document.getElementById('brands-grid');
        const selectedBrandDisplay = document.getElementById('selected-brand-display');
        const vinInput = document.getElementById('vin-input');
        const voiceInputBtn = document.getElementById('voice-input-btn');
        const modelSelect = document.getElementById('model-select');
        const yearSelect = document.getElementById('year-select');
        const startDiagnosisBtn = document.getElementById('start-diagnosis-btn');
        const backToBrandsBtn = document.getElementById('back-to-brands');
        const backToVehicleBtn = document.getElementById('back-to-vehicle');
        const backToProblemBtn = document.getElementById('back-to-problem');
        const backToHomeBtn = document.getElementById('back-to-home');
        const problemInput = document.getElementById('problem-input');
        const problemVoiceBtn = document.getElementById('problem-voice-btn');
        const submitProblemBtn = document.getElementById('submit-problem-btn');
        const suggestedProblems = document.querySelectorAll('.suggested-problem');
        const diagnosisContent = document.getElementById('diagnosis-content');
        const diagnosisQuestion = document.getElementById('diagnosis-question');
        const diagnosisSubtitle = document.getElementById('diagnosis-subtitle');
        const diagnosisInput = document.getElementById('diagnosis-input');
        const diagnosisVoiceBtn = document.getElementById('diagnosis-voice-btn');
        const diagnosisSendBtn = document.getElementById('diagnosis-send-btn');
        const restartDiagnosisBtn = document.getElementById('restart-diagnosis-btn');
        const navLinks = document.querySelectorAll('.nav-link');
        const profilePhone = document.getElementById('profile-phone');
        const profilePlate = document.getElementById('profile-plate');
        const saveProfileBtn = document.getElementById('save-profile-btn');
        const diagnosisCount = document.getElementById('diagnosis-count');
        const solvedCount = document.getElementById('solved-count');
        const savedCount = document.getElementById('saved-count');
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        const loginBtn = document.getElementById('login-btn');
        const registerBtn = document.getElementById('register-btn');
        const logoutBtn = document.getElementById('logout-btn');
        const voiceIndicator = document.getElementById('voice-indicator');
        const profileNavBtns = document.querySelectorAll('.profile-nav-btn');
        const profileContents = document.querySelectorAll('.profile-content');
        const diagnosisHistoryList = document.getElementById('diagnosis-history-list');
        const clearDataBtn = document.getElementById('clear-data-btn');
        const authError = document.getElementById('auth-error');
        const logoutProfileBtn = document.getElementById('logout-profile-btn');
        const brandSearchInput = document.getElementById('brand-search-input');
        const categoryTabs = document.querySelectorAll('.category-tab');
        const voiceInputToggle = document.getElementById('voice-input-toggle');
        const voiceOutputToggle = document.getElementById('voice-output-toggle');
        const chatAvatar = document.getElementById('chat-avatar'); // 动态波动头像元素

        // 后端API配置（对接AI诊断服务）
        const API_BASE_URL = 'http://localhost:3001';
        const API_ENDPOINTS = {
            chat: `${API_BASE_URL}/api/chat`,    // AI对话接口
            health: `${API_BASE_URL}/health`,  // 服务健康检查接口
            status: `${API_BASE_URL}/api/status`// 服务状态查询接口
        };

        // 初始化函数（应用入口，统一启动逻辑）
        function init() {
            // 开场动画结束后加载核心内容（4秒后隐藏开场页）
            setTimeout(() => {
                introScreen.style.display = 'none';
                showPage(pageAuth);          // 默认显示登录页
                renderBrands();             // 渲染品牌卡片
                populateYearSelect();       // 填充年份下拉框
                loadProfileData();          // 加载个人中心数据
                renderDiagnosisHistory();   // 渲染诊断历史
                loadChatHistory();          // 加载聊天历史
                
                // 检查登录状态与AI服务连接
                checkLoginStatus();
                checkAPIConnection();
                
                // 初始化语音功能（播音腔+识别）
                initSpeechRecognition();
                initSpeechSynthesis();
            }, 4000);
            
            // 绑定所有页面交互事件
            setupEventListeners();
        }

        // 初始化语音识别（支持VIN码自动识别+填充）
        function initSpeechRecognition() {
            // 检查浏览器是否支持语音识别
            if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                recognition = new SpeechRecognition();
                recognition.continuous = false;    // 不连续识别
                recognition.interimResults = true; // 返回临时结果（实时显示）
                recognition.lang = 'zh-CN';       // 识别语言：中文
                recognition.maxAlternatives = 3;   // 返回3个备选结果（提高准确率）
                
                // 识别开始：显示语音指示器+激活头像波动
                recognition.onstart = function() {
                    console.log('语音识别已启动');
                    voiceIndicator.classList.add('active');
                    isUserSpeaking = true;
                    toggleAvatarWave(true);
                };
                
                // 实时处理识别结果（填充对应输入框）
                recognition.onresult = function(event) {
                    let interimTranscript = ''; // 临时结果（未确认）
                    let finalTranscript = '';   // 最终结果（已确认）
                    
                    for (let i = event.resultIndex; i < event.results.length; ++i) {
                        const transcript = event.results[i][0].transcript.trim();
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript + ' ';
                        } else {
                            interimTranscript += transcript + ' ';
                        }
                    }
                    
                    // 根据当前激活的输入框填充结果
                    // 优先使用实时的 interimTranscript，让文字一边说一边出现；若没有临时结果，则回退到最终结果
                    const mergedText = (interimTranscript || finalTranscript).trim();
                    
                    if (voiceInputBtn.classList.contains('listening')) {
                        // VIN 识别：使用实时文字，并做基础清洗，做到“说一个字出现一个字”的效果
                        vinInput.value = sanitizeText(mergedText);
                    } else if (problemVoiceBtn.classList.contains('listening')) {
                        // 问题描述页：实时将语音转成文字
                        problemInput.value = mergedText;
                    } else if (diagnosisVoiceBtn.classList.contains('listening')) {
                        // 诊断对话页：实时填充当前回答
                        diagnosisInput.value = mergedText;
                    }
                };
                
                // 识别结束说话的瞬间：一旦检测到用户停止说话，立刻结束本次识别，加快响应
                recognition.onspeechend = function() {
                    console.log('检测到用户停止说话，立即结束本次识别');
                    try {
                        recognition.stop();
                    } catch (e) {
                        console.warn('停止识别时出现异常:', e);
                    }
                };

                
                // 识别错误：隐藏指示器+停止头像波动
                recognition.onerror = function(event) {
                    console.error('语音识别错误:', event.error);
                    voiceIndicator.classList.remove('active');
                    isUserSpeaking = false;
                    toggleAvatarWave(false);
                };
                
                // 识别结束：VIN码自动填充逻辑（比亚迪秦PLUS EV 荣耀版）
                recognition.onend = function() {
                    console.log('语音识别已结束');
                    voiceIndicator.classList.remove('active');
                    isUserSpeaking = false;
                    toggleAvatarWave(false);

                    // 在清除状态前记录当前是哪个按钮在进行语音输入
                    const wasVIN = voiceInputBtn.classList.contains('listening');
                    const wasProblem = problemVoiceBtn.classList.contains('listening');
                    const wasDiagnosis = diagnosisVoiceBtn.classList.contains('listening');

                    // 清除所有监听按钮状态
                    voiceInputBtn.classList.remove('listening');
                    problemVoiceBtn.classList.remove('listening');
                    diagnosisVoiceBtn.classList.remove('listening');

                    // 识别自然结束后，隐藏所有“结束”按钮
                    const voiceEndVin = document.getElementById('voice-end-vin');
                    const voiceEndProblem = document.getElementById('voice-end-problem');
                    const voiceEndChat = document.getElementById('voice-end-chat');
                    if (voiceEndVin) voiceEndVin.classList.remove('visible');
                    if (voiceEndProblem) voiceEndProblem.classList.remove('visible');
                    if (voiceEndChat) voiceEndChat.classList.remove('visible');

                    // VIN识别：固定自动识别车型
                    if (wasVIN) {
                        autoFillVehicleInfo('比亚迪', '秦PLUS EV 荣耀版', '2024');
                        speakText("VIN码识别成功，已自动填充为2024款比亚迪秦PLUS EV荣耀版");
                    }

                    // 诊断聊天页：语音识别结束后自动发送当前回答
                    if (wasDiagnosis && diagnosisInput && diagnosisInput.value.trim()) {
                        // 走原有发送逻辑（本地诊断/AI诊断分支完全复用）
                        sendMessage();
                    }
                };
            } else {
                alert('您的浏览器不支持语音识别功能，建议使用Chrome或Edge浏览器以体验完整功能');
            }
        }

        // 初始化语音合成（优先配置播音腔语音）
        function initSpeechSynthesis() {
            // 检查浏览器是否支持语音合成
            if ('speechSynthesis' in window) {
                synthesis = window.speechSynthesis;
                // 延迟1.5秒加载语音库（确保语音列表已初始化）
                setTimeout(() => {
                    const voices = synthesis.getVoices();
                    // 筛选播音腔风格语音：中文+包含"Microsoft"（系统播音）、"慧涛"、"晓燕"
                    const broadcastVoices = voices.filter(voice => 
                        voice.lang === 'zh-CN' && 
                        (voice.name.includes('Microsoft') || voice.name.includes('慧涛') || voice.name.includes('晓燕'))
                    );
                    
                    // 优先使用第一个符合条件的播音腔语音
                    if (broadcastVoices.length > 0) {
                        preferredVoice = broadcastVoices[0];
                        console.log('已加载播音腔语音:', preferredVoice.name);
                    } else {
                        // 降级使用默认中文语音
                        const chineseVoices = voices.filter(voice => voice.lang === 'zh-CN');
                        if (chineseVoices.length > 0) {
                            preferredVoice = chineseVoices[0];
                        }
                        console.log('使用默认中文语音:', preferredVoice?.name || '无可用语音');
                    }
                }, 1500);
            } else {
                alert('您的浏览器不支持语音合成功能，无法体验播音腔语音反馈');
            }
        }

        // 播音腔语音输出函数（控制语速、音调、音量）
        
        
        function speakText(text) {
            // 所有AI语音输出，都统一在头像下方显示当前这句话（逐字浮现）
            try {
                renderDiagnosisQuestion(text);
            } catch (e) {
                console.warn('renderDiagnosisQuestion error:', e);
            }

            // 跳过条件：无合成实例 / 未开启语音输出
            if (!synthesis || !voiceOutputToggle || !voiceOutputToggle.checked) return;

            // 停止当前语音（避免多个语音叠加）
            try {
                synthesis.cancel();
            } catch (e) {
                console.warn('synthesis.cancel error:', e);
            }

            // 按照「旧文件」中的音色参数配置：更偏播音风格但略带亲和力
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'zh-CN';
            utterance.rate = 0.9;   // 语速略慢，保证清晰度
            utterance.pitch = 1.1;  // 音调稍高，听起来更精神
            utterance.volume = 0.8; // 音量稍柔和，避免刺耳

            // 按旧逻辑选择中文女声音色（尽量贴近你喜欢的那种音色）
            try {
                const voices = synthesis.getVoices();
                const chineseVoices = voices.filter(voice =>
                    voice.lang.includes('zh') || voice.lang.includes('CN') || voice.lang.includes('cn')
                );

                if (chineseVoices.length > 0) {
                    // 优先选择女声：名称包含 Female / 女 / Microsoft Xiaoxiao / Google 普通话
                    const femaleVoice = chineseVoices.find(voice =>
                        voice.name.includes('Female') ||
                        voice.name.includes('女') ||
                        voice.name.includes('Microsoft Xiaoxiao') ||
                        voice.name.includes('Google 普通话')
                    );

                    if (femaleVoice) {
                        utterance.voice = femaleVoice;
                    } else {
                        utterance.voice = chineseVoices[0];
                    }
                }
            } catch (e) {
                console.warn('voice select error:', e);
            }

            // AI 说话时激活头像波动
            isAISpeaking = true;
            toggleAvatarWave(true);

            // 语音结束后停止头像波动
            utterance.onend = function () {
                isAISpeaking = false;
                toggleAvatarWave(false);
            };

            // 开始播放语音
            synthesis.speak(utterance);
        }


// 动态头像波动控制（用户/AI说话时激活）

function toggleAvatarWave(isWave) {
            const avatarContainer = document.querySelector('.avatar-container');
            // 仅当用户或AI说话时，才显示头像波动
            if (isWave && (isUserSpeaking || isAISpeaking)) {
                if (chatAvatar) chatAvatar.classList.add('speaking');
                if (avatarContainer) avatarContainer.classList.add('speaking');
            } else {
                if (chatAvatar) chatAvatar.classList.remove('speaking');
                if (avatarContainer) avatarContainer.classList.remove('speaking');
            }
        }


// VIN识别后自动填充车辆信息（品牌+型号+年份）
        function autoFillVehicleInfo(brandName, modelName, year) {
            // 查找选中的品牌
            selectedBrand = brands.find(brand => brand.name === brandName);
            if (selectedBrand) {
                renderSelectedBrand();       // 渲染选中的品牌信息
                populateModelSelect();       // 填充车型下拉框
                
                // 强制选中对应车型和年份
                modelSelect.value = modelName;
                yearSelect.value = year;
                
                // 视觉提示：边框高亮2秒（告知用户已自动填充）
                modelSelect.style.borderColor = 'var(--accent)';
                yearSelect.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    modelSelect.style.borderColor = '';
                    yearSelect.style.borderColor = '';
                }, 2000);
            }
        }

        // 检查AI服务连接状态（健康检查）
        async function checkAPIConnection() {
            try {
                // 初始状态：连接中
                apiStatus.className = 'api-status connecting';
                apiStatus.innerHTML = '<i class="fas fa-circle"></i> 连接AI服务中...';
                
                // 发送健康检查请求（5秒超时）
                const response = await fetch(API_ENDPOINTS.health, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    timeout: 5000
                });
                
                // 连接成功
                if (response.ok) {
                    isAIConnected = true;
                    apiStatus.className = 'api-status connected';
                    apiStatus.innerHTML = '<i class="fas fa-circle"></i> AI服务已连接';
                } else {
                    throw new Error('API响应状态异常');
                }
            } catch (error) {
                // 连接失败
                isAIConnected = false;
                apiStatus.className = 'api-status disconnected';
                apiStatus.innerHTML = '<i class="fas fa-circle"></i> AI服务未连接';
                console.error('AI服务连接失败:', error);
            }
        }

        // 检查登录状态（本地存储判断）
        function checkLoginStatus() {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            
            if (isLoggedIn === 'true' && currentUser) {
                // 已登录：显示导航栏+首页（品牌选择页）
                navbar.style.display = 'flex';
                showPage(pageBrand);
                
                // 更新个人中心数据
                profilePhone.value = currentUser.phone || '';
                profilePlate.value = currentUser.plate || '';
                diagnosisCount.textContent = currentUser.diagnosisCount || 0;
                solvedCount.textContent = currentUser.solvedCount || 0;
                savedCount.textContent = currentUser.savedCount || 0;
            } else {
                // 未登录：显示登录页
                showPage(pageAuth);
            }
        }

        // 渲染品牌卡片（动态生成所有品牌）
        function renderBrands() {
            brandsGrid.innerHTML = ''; // 清空原有品牌卡片
            brands.forEach(brand => {
                const brandCard = document.createElement('div');
                brandCard.className = 'brand-card';
                brandCard.innerHTML = `
                    <img src="${brand.logo}" alt="${brand.name}" class="brand-logo" 
                         onerror="this.src='https://via.placeholder.com/80x80?text=${brand.name}'">
                    <div class="brand-name">${brand.name}</div>
                `;
                
                // 品牌卡片点击事件：跳转至车辆信息页
                brandCard.addEventListener('click', () => {
                    selectedBrand = brand;
                    showPage(pageVehicle);
                    renderSelectedBrand();
                    populateModelSelect();
                    // 播音腔提示
                    speakText("请输入您的VIN码");
                });
                
                brandsGrid.appendChild(brandCard);
            });
        }

        // 渲染选中的品牌信息（车辆信息页顶部显示）
        function renderSelectedBrand() {
            if (!selectedBrand) return;
            
            selectedBrandDisplay.innerHTML = `
                <img src="${selectedBrand.logo}" alt="${selectedBrand.name}" class="selected-brand-logo" 
                     onerror="this.src='https://via.placeholder.com/50x50?text=${selectedBrand.name}'">
                <div class="selected-brand-name">${selectedBrand.name}</div>
            `;
        }

        // 填充年份下拉框（2024-2000年）
        function populateYearSelect() {
            yearSelect.innerHTML = '<option value="">请选择年份</option>';
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });
        }

        // 填充车型下拉框（根据选中的品牌）
        function populateModelSelect() {
            if (!selectedBrand) return;
            
            modelSelect.innerHTML = '<option value="">请选择型号</option>';
            const brandModels = models[selectedBrand.name] || [];
            brandModels.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                modelSelect.appendChild(option);
            });
        }

        // 绑定所有页面交互事件（统一管理事件监听）
        function setupEventListeners() {
            // 1. 品牌搜索功能（实时过滤品牌卡片）
            brandSearchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                document.querySelectorAll('.brand-card').forEach(card => {
                    const brandName = card.querySelector('.brand-name').textContent.toLowerCase();
                    card.style.display = brandName.includes(searchTerm) ? 'block' : 'none';
                });
            });

            // 2. 品牌分类切换（按德系/日系等筛选）
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // 更新分类标签激活状态
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    
                    const category = tab.getAttribute('data-category');
                    if (category === 'all') {
                        renderBrands(); // 显示所有品牌
                    } else {
                        // 过滤对应分类的品牌
                        const filteredBrands = brands.filter(brand => brand.categories.includes(category));
                        renderFilteredBrands(filteredBrands);
                    }
                });
            });

            // 3. 个人中心标签切换（个人信息/诊断历史/设置）
            profileNavBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // 更新导航按钮激活状态
                    profileNavBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    const tabId = btn.getAttribute('data-tab');
                    // 显示对应内容区
                    profileContents.forEach(content => {
                        content.classList.remove('active');
                        if (content.id === tabId) content.classList.add('active');
                    });
                });
            });

            // 4. 登录/注册标签切换
            loginTab.addEventListener('click', () => {
                loginTab.classList.add('active');
                registerTab.classList.remove('active');
                loginForm.classList.add('active');
                registerForm.classList.remove('active');
                hideAuthError(); // 隐藏错误提示
            });
            registerTab.addEventListener('click', () => {
                registerTab.classList.add('active');
                loginTab.classList.remove('active');
                registerForm.classList.add('active');
                loginForm.classList.remove('active');
                hideAuthError(); // 隐藏错误提示
            });

            // 5. 登录/注册/退出按钮事件
            loginBtn.addEventListener('click', handleLogin);
            registerBtn.addEventListener('click', handleRegister);
            logoutBtn.addEventListener('click', handleLogout);
            logoutProfileBtn.addEventListener('click', handleLogout);

            // 6. 语音输入按钮事件（VIN页/问题描述页/诊断聊天页）
            // 6.x 语音识别“结束”按钮：可在任意阶段手动停止识别，避免一直处于监听状态
            const voiceEndVin = document.getElementById('voice-end-vin');
            const voiceEndProblem = document.getElementById('voice-end-problem');
            const voiceEndChat = document.getElementById('voice-end-chat');

            function stopRecognitionManually() {
                if (!recognition) return;
                try {
                    recognition.stop();
                } catch (e) {
                    console.warn('手动停止语音识别时出现异常:', e);
                }
                // 手动停止后，隐藏所有结束按钮
                if (voiceEndVin) voiceEndVin.classList.remove('visible');
                if (voiceEndProblem) voiceEndProblem.classList.remove('visible');
                if (voiceEndChat) voiceEndChat.classList.remove('visible');
            }

            if (voiceEndVin) {
                voiceEndVin.addEventListener('click', () => {
                    stopRecognitionManually();
                });
            }
            if (voiceEndProblem) {
                voiceEndProblem.addEventListener('click', () => {
                    stopRecognitionManually();
                });
            }
            if (voiceEndChat) {
                voiceEndChat.addEventListener('click', () => {
                    stopRecognitionManually();
                });
            }

            voiceInputBtn.addEventListener('click', () => {
                if (voiceInputToggle.checked) startVoiceInput(vinInput, voiceInputBtn);
            });
            problemVoiceBtn.addEventListener('click', () => {
                if (voiceInputToggle.checked) startVoiceInput(problemInput, problemVoiceBtn);
            });
            diagnosisVoiceBtn.addEventListener('click', () => {
                if (voiceInputToggle.checked) startVoiceInput(diagnosisInput, diagnosisVoiceBtn);
            });

            // 7. 开始诊断按钮（车辆信息页→问题描述页）
            startDiagnosisBtn.addEventListener('click', () => {
                // 校验必填项
                if (!vinInput.value.trim()) {
                    alert('请输入17位VIN码');
                    return;
                }
                if (!modelSelect.value) {
                    alert('请选择汽车型号');
                    return;
                }
                if (!yearSelect.value) {
                    alert('请选择生产年份');
                    return;
                }
                
                // 保存完整车辆信息
                currentCarInfo = `${selectedBrand.name} ${modelSelect.value} ${yearSelect.value}年款`;
                showPage(pageProblem);
                // 播音腔引导用户描述问题
                speakText("请输入您遇到的问题");
            });

            // 8. 返回按钮系列（页面导航）
            backToBrandsBtn.addEventListener('click', () => showPage(pageBrand));
            backToVehicleBtn.addEventListener('click', () => {
                showPage(pageVehicle);
                // 返回车辆信息页时，立即引导用户输入VIN码
                speakText("请输入您的VIN码");
            });
            backToProblemBtn.addEventListener('click', () => {
                showPage(pageProblem);
                // 返回问题描述页时，立即引导用户描述问题
                speakText("请输入您遇到的问题");
            });
            backToHomeBtn.addEventListener('click', () => showPage(pageBrand));

            // 9. 提交问题按钮（问题描述页→诊断聊天页）
            submitProblemBtn.addEventListener('click', () => {
                if (!problemInput.value.trim()) {
                    alert('请输入车辆问题描述');
                    return;
                }
                
                // 保存问题描述，更新诊断标题
                currentProblem = problemInput.value.trim();
                diagnosisSubtitle.textContent = `正在诊断：${currentProblem}`;
                showPage(pageChat);
                
                // 初始化聊天会话
                currentChatId = Date.now().toString(); // 用时间戳作为会话ID
                isChargingProblem = currentProblem.includes('交流无法充电') || currentProblem.includes('无法充电');
                currentStep = 0;
                
                // 重置聊天内容区（保留动态头像）
                diagnosisContent.innerHTML = `
                    <div class="avatar-container">
    <div class="waveform-bars"><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div></div>
                        <div class="chat-avatar" id="chat-avatar">
                            <div class="avatar-wave"></div>
                            <div class="avatar-wave"></div>
                            <div class="avatar-wave"></div>
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                `;
                
                // 启动诊断流程（充电问题用本地流程，其他用AI）
                if (isChargingProblem) {
                    startOriginalDiagnosis();
                } else {
                    startAIDiagnosis();
                }
                
                // 记录诊断历史，更新诊断次数
                addToHistory();
                updateDiagnosisCount();
            });

            // 10. 建议问题点击填充（快速选择常见问题）
            suggestedProblems.forEach(problem => {
                problem.addEventListener('click', () => {
                    problemInput.value = problem.textContent;
                });
            });

            // 11. 诊断聊天页：发送消息（回车/按钮）
            diagnosisSendBtn.addEventListener('click', sendMessage);
            diagnosisInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });

            // 12. 重新诊断按钮（重置诊断流程）
            restartDiagnosisBtn.addEventListener('click', () => {
                currentStep = 0;
                // 重置聊天内容区
                diagnosisContent.innerHTML = `
                    <div class="avatar-container">
    <div class="waveform-bars"><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div></div>
                        <div class="chat-avatar" id="chat-avatar">
                            <div class="avatar-wave"></div>
                            <div class="avatar-wave"></div>
                            <div class="avatar-wave"></div>
                            <i class="fas fa-robot"></i>
                        </div>
                    </div>
                `;
                // 重新启动诊断流程
                if (isChargingProblem) {
                    startOriginalDiagnosis();
                } else {
                    startAIDiagnosis();
                }
            });

            // 13. 导航栏切换页面（首页/个人中心）
            navLinks.forEach(link => {
                if (link.id !== 'logout-btn') {
                    link.addEventListener('click', () => {
                        const pageId = link.getAttribute('data-page');
                        showPage(document.getElementById(pageId));
                        // 更新导航栏激活状态
                        navLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    });
                }
            });

            // 14. 个人中心：保存资料/清除数据
            saveProfileBtn.addEventListener('click', saveProfileData);
            clearDataBtn.addEventListener('click', () => {
                if (confirm('确定要清除所有本地数据吗？此操作不可撤销！')) {
                    localStorage.clear();
                    alert('所有数据已清除，页面将刷新');
                    location.reload();
                }
            });
        }

        // 启动语音输入（绑定指定输入框）
        function startVoiceInput(inputElement, buttonElement) {
            if (!recognition) {
                alert('您的浏览器不支持语音识别功能');
                return;
            }
            // 标记按钮为"监听中"状态
            buttonElement.classList.add('listening');

            // 根据当前按钮，显示对应的“结束”按钮
            const voiceEndVin = document.getElementById('voice-end-vin');
            const voiceEndProblem = document.getElementById('voice-end-problem');
            const voiceEndChat = document.getElementById('voice-end-chat');
            if (buttonElement.id === 'voice-input-btn' && voiceEndVin) {
                voiceEndVin.classList.add('visible');
            } else if (buttonElement.id === 'problem-voice-btn' && voiceEndProblem) {
                voiceEndProblem.classList.add('visible');
            } else if (buttonElement.id === 'diagnosis-voice-btn' && voiceEndChat) {
                voiceEndChat.classList.add('visible');
            }

            // 清空输入框并聚焦
            if (inputElement) {
                inputElement.value = '';
                inputElement.focus();
            }

            // 启动语音识别
            recognition.start();
        }
// 登录处理函数（本地存储验证用户）
        function handleLogin() {
            const phone = document.getElementById('login-phone').value;
            const password = document.getElementById('login-password').value;
            
            // 校验输入
            if (!phone || !password) {
                showAuthError('请输入手机号和密码');
                return;
            }
            
            // 从本地存储获取用户列表
            const users = JSON.parse(localStorage.getItem('users')) || [];
            // 查找匹配的用户
            const user = users.find(u => u.phone === phone && u.password === password);
            
            if (user) {
                // 登录成功：保存登录状态
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(user));
                
                // 显示导航栏+首页
                navbar.style.display = 'flex';
                showPage(pageBrand);
                
                // 更新个人中心数据
                profilePhone.value = user.phone || '';
                profilePlate.value = user.plate || '';
                diagnosisCount.textContent = user.diagnosisCount || 0;
                solvedCount.textContent = user.solvedCount || 0;
                savedCount.textContent = user.savedCount || 0;
                
                hideAuthError();
                // 播音腔欢迎
                speakText(`欢迎回来，${user.phone}！已为您加载个人数据，可前往首页选择车辆品牌开始诊断`);
            } else {
                // 登录失败：显示错误
                showAuthError('手机号或密码错误，请重新输入');
            }
        }

        // 注册处理函数（本地存储保存用户）
        function handleRegister() {
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirm = document.getElementById('register-confirm').value;
            
            // 校验输入
            if (!phone || !password || !confirm) {
                showAuthError('请填写所有注册信息');
                return;
            }
            if (password !== confirm) {
                showAuthError('两次输入的密码不一致，请重新确认');
                return;
            }
            if (!/^1[3-9]\d{9}$/.test(phone)) {
                showAuthError('请输入有效的手机号');
                return;
            }
            
            // 从本地存储获取用户列表
            const users = JSON.parse(localStorage.getItem('users')) || [];
            // 检查手机号是否已注册
            if (users.find(u => u.phone === phone)) {
                showAuthError('该手机号已注册，请直接登录或更换手机号');
                return;
            }
            
            // 创建新用户
            const newUser = {
                phone,
                password,
                plate: '', // 车牌号（默认空）
                diagnosisCount: 0, // 诊断次数
                solvedCount: 0,    // 已解决问题数
                savedCount: 0      // 保存的诊断数
            };
            
            // 保存新用户到列表
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            // 自动登录
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            // 显示导航栏+首页
            navbar.style.display = 'flex';
            showPage(pageBrand);
            
            // 更新个人中心数据
            profilePhone.value = newUser.phone;
            profilePlate.value = newUser.plate;
            diagnosisCount.textContent = newUser.diagnosisCount;
            solvedCount.textContent = newUser.solvedCount;
            savedCount.textContent = newUser.savedCount;
            
            hideAuthError();
            alert('注册成功！已为您自动登录');
            // 播音腔引导
            speakText(`注册成功！欢迎使用汽车AI智能诊断系统，请选择车辆品牌并输入VIN码，开始故障诊断`);
        }

        // 退出登录处理函数
        function handleLogout() {
            // 清除登录状态和用户数据
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            
            // 隐藏导航栏，显示登录页
            navbar.style.display = 'none';
            showPage(pageAuth);
            
            // 清空登录表单
            document.getElementById('login-phone').value = '';
            document.getElementById('login-password').value = '';
            hideAuthError();
        }

        // 显示登录/注册错误提示
        function showAuthError(message) {
            authError.textContent = message;
            authError.classList.add('show');
        }

        // 隐藏登录/注册错误提示
        function hideAuthError() {
            authError.classList.remove('show');
        }

        // 渲染过滤后的品牌（按分类筛选）
        function renderFilteredBrands(filteredBrands) {
            brandsGrid.innerHTML = '';
            filteredBrands.forEach(brand => {
                const brandCard = document.createElement('div');
                brandCard.className = 'brand-card';
                brandCard.innerHTML = `
                    <img src="${brand.logo}" alt="${brand.name}" class="brand-logo" 
                         onerror="this.src='https://via.placeholder.com/80x80?text=${brand.name}'">
                    <div class="brand-name">${brand.name}</div>
                `;
                // 品牌卡片点击事件
                brandCard.addEventListener('click', () => {
                    selectedBrand = brand;
                    showPage(pageVehicle);
                    renderSelectedBrand();
                    populateModelSelect();
                });
                brandsGrid.appendChild(brandCard);
            });
        }

        // 页面切换函数（控制页面显示/隐藏）
        function showPage(page) {
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
            });
            page.classList.add('active');
        }

        // 启动AI诊断流程（调用后端AI服务）
        async function startAIDiagnosis() {
            // AI未连接：切换到本地诊断
            if (!isAIConnected) {
                renderDiagnosisQuestion("⚠️ AI服务未连接，已自动切换到本地诊断引擎");
                speakText("AI服务未连接，已自动切换到本地诊断引擎为您服务");
                startOriginalDiagnosis();
                return;
            }
            
            try {
                // 构建初始提示词（包含车辆信息和问题）
                const carInfo = currentCarInfo || `${selectedBrand.name} ${modelSelect.value} ${yearSelect.value}年款`;
                const initialPrompt = `
                    用户车辆信息：${carInfo}
                    用户问题描述：${currentProblem}
                    角色：你是专业的汽车诊断专家，语气需使用播音腔（清晰、沉稳、专业），先友好介绍自己，再提出第一个诊断问题（简洁明确，帮助定位故障）。
                `;
                
                // 调用AI对话接口
                const aiResponse = await callDeepSeekCarDiagnosis(
                    initialPrompt,
                    conversationHistory,
                    carInfo,
                    currentProblem
                );
                
                // 显示AI回复（带打字机效果）
                renderDiagnosisQuestion(aiResponse);
                // 播音腔播放AI回复
                speakText(aiResponse);
                
                // 更新对话历史（用于后续交互）
                conversationHistory.push(
                    { role: 'user', content: initialPrompt },
                    { role: 'assistant', content: aiResponse }
                );
            } catch (error) {
                // AI调用失败：切换到本地诊断
                renderDiagnosisQuestion("⚠️ AI诊断服务暂时不可用，已切换到本地诊断流程");
                speakText("AI诊断服务暂时不可用，已切换到本地诊断流程");
                console.error('AI诊断启动失败:', error);
                startOriginalDiagnosis();
            }
        }

        // 调用DeepSeek 汽车AI智能诊断接口
        async function callDeepSeekCarDiagnosis(message, history = [], carInfo = '', problem = '') {
            if (!isAIConnected) throw new Error('AI服务未连接，请检查后端服务');
            
            try {
                const response = await fetch(API_ENDPOINTS.chat, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        message: message,
                        history: history,
                        carInfo: carInfo,
                        problem: problem,
                        voiceStyle: 'broadcast' // 告知AI返回播音腔风格文本
                    })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || 'AI诊断接口请求失败');
                }
                
                const data = await response.json();
                return data.reply || 'AI未返回有效诊断内容，请补充问题细节';
            } catch (error) {
                console.error('调用AI诊断接口失败:', error);
                throw error;
            }
        }

        // 启动本地诊断流程（固定阶梯式提问）
        
        // 启动本地诊断流程（固定阶梯式提问）
        function startOriginalDiagnosis() {
            // 直接从第一个诊断问题开始，不再输出额外欢迎语，界面更简洁
            currentStep = 0;
            askQuestion(currentStep);
        }


function renderDiagnosisQuestion(text) {
            let questionDiv = document.getElementById('diagnosis-question');
            // 如果不存在，就创建一个新的诊断文本容器
            if (!questionDiv) {
                questionDiv = document.createElement('div');
                questionDiv.id = 'diagnosis-question';
                diagnosisContent.appendChild(questionDiv);
            }
            // 重置样式以应用浮现动画
            questionDiv.className = 'diagnosis-question fade-in-text';
            // 每次输出前先清空内容
            questionDiv.textContent = '';

            // 若之前有未完成的字幕计时器，先清除
            if (diagnosisSubtitleTimer) {
                clearInterval(diagnosisSubtitleTimer);
                diagnosisSubtitleTimer = null;
            }

            // 逐字浮现字幕，让文字与AI语音同步感更强
            const fullText = (text || '').toString().replace(/^\s+/, '');
            let index = 0;
            diagnosisSubtitleTimer = setInterval(() => {
                index++;
                questionDiv.textContent = fullText.slice(0, index);
                if (index >= fullText.length) {
                    clearInterval(diagnosisSubtitleTimer);
                    diagnosisSubtitleTimer = null;
                }
                // 滚动到最新内容
                diagnosisContent.scrollTop = diagnosisContent.scrollHeight;
            }, 40);
        }


// 提问函数（根据当前步骤显示问题）
        function askQuestion(step) {
            if (step >= diagnosisFlow.length) return;
            
            const question = diagnosisFlow[step].question;
            renderDiagnosisQuestion(question);
            speakText(question);
        }

        // 发送消息（用户与AI/本地诊断交互）
        async function sendMessage() {
            const message = diagnosisInput.value.trim();
            if (!message) return; // 空消息不处理
            
            // 清空输入框
            diagnosisInput.value = '';
            
            // 1. 充电类问题：只用头像+字幕形式的阶梯式诊断，不保留历史气泡
            if (isChargingProblem) {
                handleAnswer(message);
                return;
            }
            
            // 显示用户消息（右侧气泡，仅非充电类问题保留聊天记录）
            const userMsgDiv = document.createElement('div');
            userMsgDiv.className = 'message message-user';
            userMsgDiv.textContent = message;
            diagnosisContent.appendChild(userMsgDiv);
            // 滚动到最新消息
            diagnosisContent.scrollTop = diagnosisContent.scrollHeight;
            
            // 2. 非充电类问题：走AI流程
            if (!isAIConnected) {
                // AI未连接：本地默认回复
                setTimeout(() => {
                    const defaultReply = `
                        感谢您的反馈：${message}。由于AI服务暂时未连接，无法提供精准诊断，
                        建议您检查车辆对应系统的传感器状态，或补充更多故障细节（如故障发生场景、伴随现象），以便进一步分析。
                    `;
                    renderDiagnosisQuestion(defaultReply);
                    speakText(defaultReply);
                }, 1000);
                return;
            }
            
            // 3. AI已连接：调用AI获取回复
            try {
                const carInfo = currentCarInfo || `${selectedBrand.name} ${modelSelect.value} ${yearSelect.value}年款`;
                const aiResponse = await callDeepSeekCarDiagnosis(
                    message,
                    conversationHistory,
                    carInfo,
                    currentProblem
                );
                
                // 显示AI回复（带打字机效果）
                renderDiagnosisQuestion(aiResponse);
                // 播音腔播放AI回复
                speakText(aiResponse);
                
                // 更新对话历史
                conversationHistory.push(
                    { role: 'user', content: message },
                    { role: 'assistant', content: aiResponse }
                );
            } catch (error) {
                // AI调用失败：显示错误提示
                const errorReply = `
                    抱歉，AI服务暂时无法响应您的反馈：${message}。
                    请检查网络连接或稍后重试，也可直接联系品牌授权服务中心获取技术支持。
                `;
                renderDiagnosisQuestion(errorReply);
                speakText(errorReply);
                console.error('发送消息到AI失败:', error);
            }
        }

        // 处理本地诊断的用户回答
        
        // 处理本地诊断的用户回答
        function handleAnswer(answer) {
            // 不再额外输出“已收到您的反馈”，直接根据对话逻辑进入下一步

            // 进入下一步
            currentStep++;

            // 轻微延迟后继续提问或结束诊断，保证语音节奏自然
            setTimeout(() => {
                if (currentStep < diagnosisFlow.length) {
                    askQuestion(currentStep); // 继续下一个问题
                } else {
                    // 诊断完成：显示故障点与建议
                    const completionMsg = `
                        故障点为高压多合一模块内部S2开关的控制线路及原件。
                        建议解决方案：
                        1. 使用万用表检查S2开关控制线路是否存在松动、短路或断路；
                        2. 通过诊断仪检测S2开关元件通断状态，判断是否需要更换；
                        3. 若您不具备维修条件，建议联系比亚迪品牌授权服务中心进行专业维修。
                        如需重新诊断，请点击页面上方的“重新诊断”按钮。
                    `;
                    renderDiagnosisQuestion(completionMsg);
                    speakText(completionMsg);
                    updateSolvedCount(); // 更新已解决问题数
                }
            }, 200);
        }

        // 加载聊天历史（从本地存储）
function loadChatHistory() {
            const savedHistory = localStorage.getItem('chatHistory');
            chatHistoryData = savedHistory ? JSON.parse(savedHistory) : [];
        }

        // 保存聊天历史（到本地存储）
        function saveChatHistory() {
            localStorage.setItem('chatHistory', JSON.stringify(chatHistoryData));
        }

        // 添加诊断记录到历史
        function addToHistory() {
            const chatItem = {
                id: currentChatId,
                date: new Date().toLocaleString(), // 诊断时间（本地时间）
                carInfo: currentCarInfo,          // 车辆信息
                problem: currentProblem,          // 问题描述
                status: "pending"                 // 状态：处理中
            };
            
            // 去重：若存在相同ID的记录，替换；否则新增到头部
            const existingIndex = chatHistoryData.findIndex(c => c.id === currentChatId);
            if (existingIndex !== -1) {
                chatHistoryData[existingIndex] = chatItem;
            } else {
                chatHistoryData.unshift(chatItem);
            }
            
            // 保存到本地存储
            saveChatHistory();
        }

        // 渲染诊断历史记录（个人中心）
        function renderDiagnosisHistory() {
            diagnosisHistoryList.innerHTML = '';
            
            // 优先使用本地存储的历史，无数据则显示模拟数据
            const historyData = chatHistoryData.length > 0 
                ? chatHistoryData.map(item => ({
                    date: item.date,
                    brand: item.carInfo || '未知车辆',
                    problem: item.problem,
                    solution: item.status === 'solved' ? '故障已定位，查看诊断详情' : '诊断中',
                    status: item.status
                }))
                : [
                    {
                        date: new Date().toLocaleDateString(),
                        brand: "比亚迪 秦PLUS EV 荣耀版 2024年款",
                        problem: "车辆无法启动",
                        solution: "检查电池正极连接线松动，重新插拔并紧固后故障排除",
                        status: "solved"
                    },
                    {
                        date: new Date(Date.now() - 86400000).toLocaleDateString(),
                        brand: "特斯拉 Model Y 2023年款",
                        problem: "交流充电速度慢（仅2kW）",
                        solution: "充电桩功率设置为“家用模式”，切换到“快充模式”后恢复至7kW",
                        status: "solved"
                    },
                    {
                        date: new Date(Date.now() - 172800000).toLocaleDateString(),
                        brand: "宝马 3系 2022年款",
                        problem: "发动机冷启动时有异响",
                        solution: "建议检查正时链条张紧器，冷启动时油压不足可能导致异响",
                        status: "pending"
                    }
                ];
            
            // 渲染每条历史记录
            historyData.forEach(item => {
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerHTML = `
                    <div class="history-header">
                        <div class="history-date">${item.date}</div>
                        <div class="history-brand">${item.brand}</div>
                    </div>
                    <div class="history-problem">问题：${item.problem}</div>
                    <div class="history-solution">解决方案：${item.solution}</div>
                    <div class="history-status ${item.status === 'solved' ? 'status-solved' : 'status-pending'}">
                        ${item.status === 'solved' ? '已解决' : '处理中'}
                    </div>
                `;
                diagnosisHistoryList.appendChild(historyItem);
            });
        }

        // 保存个人中心数据（手机号、车牌号、统计数）
        function saveProfileData() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                alert('请先登录后再保存个人信息');
                return;
            }
            
            // 获取用户列表
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // 更新当前用户信息
            currentUser.phone = profilePhone.value;
            currentUser.plate = profilePlate.value;
            currentUser.diagnosisCount = parseInt(diagnosisCount.textContent);
            currentUser.solvedCount = parseInt(solvedCount.textContent);
            currentUser.savedCount = parseInt(savedCount.textContent);
            
            // 更新用户列表中的对应用户
            const userIndex = users.findIndex(u => u.phone === currentUser.phone);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
            }
            
            // 保存到本地存储
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('个人信息已成功保存');
        }

        // 加载个人中心数据（从本地存储）
        function loadProfileData() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                profilePhone.value = currentUser.phone || '';
                profilePlate.value = currentUser.plate || '';
                diagnosisCount.textContent = currentUser.diagnosisCount || 0;
                solvedCount.textContent = currentUser.solvedCount || 0;
                savedCount.textContent = currentUser.savedCount || 0;
            }
        }

        // 更新诊断次数统计
        function updateDiagnosisCount() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                const newCount = parseInt(diagnosisCount.textContent) + 1;
                diagnosisCount.textContent = newCount;
                saveProfileData(); // 同步保存到本地存储
            }
        }

        // 更新已解决问题数统计
        function updateSolvedCount() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                const newCount = parseInt(solvedCount.textContent) + 1;
                solvedCount.textContent = newCount;
                saveProfileData(); // 同步保存到本地存储
            }
        }

        // 初始化应用（启动入口）
        init();
    