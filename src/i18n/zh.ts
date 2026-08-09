import type { Dict } from './en';

export const zh: Dict = {
  nav: {
    about: '关于我',
    courses: '课程',
    pricing: '课时与价格',
    testimonials: '学生评价',
    contact: '联系我',
    library: '资源库',
  },
  hero: {
    eyebrow: '在线中文教师',
    title: 'Lydia Mandarin',
    subtitle:
      '专为儿童、成人、HSK 备考与商务人士量身定制的在线中文课——耐心、热情，以及一套为你而设的学习计划。',
    ctaPrimary: '预约免费咨询',
    ctaSecondary: '了解课程',
    badge: '三大课程方向 · 覆盖全水平 · 全球在线授课',
  },
  about: {
    eyebrow: '关于我',
    title: '你好，我是 Lydia',
    p1: '我是一位中文教师，热爱帮助学习者一句一句地爱上中文。多年来，我教过来自世界各地的华裔孩子、成人学习者，以及备考 HSK 的学生。',
    p2: '我的课堂温暖、有条理，也足够实用——每次下课，你都能带走真正用得上的东西：一个新表达、更清晰的发音、一场真实的对话。',
    points: [
      '为你量身定制的学习计划',
      '耐心、鼓励式的教学风格',
      '跨时区灵活约课',
      '全年龄、全水平、全线上',
    ],
    photoCaption: '肖像占位图——请替换为真实照片。',
  },
  courses: {
    eyebrow: '课程',
    title: '四种学习方式',
    subtitle: '无论你的目标是什么，总有适合你的方向。',
    cta: '选择这个方向',
    cards: [
      {
        tag: '5-17岁',
        title: '少儿与青少年',
        desc: '为 5 岁以上华裔孩子和少儿初学者设计的趣味课堂——听说、识字，加上一份对中文真正的喜爱。',
        points: ['TPR 教学 + 游戏化课堂', '华裔传承 & 零基础两条路径', '识字、故事与儿歌'],
      },
      {
        tag: '日常流利沟通',
        title: '成人通用普通话',
        desc: '贴近日常生活的实用中文：会话、旅行、工作闲聊，以及更清晰的发音。',
        points: ['真实场景会话练习', '发音与声调纠音', '围绕你的生活定制课程'],
      },
      {
        tag: '考试备考',
        title: 'HSK 备考',
        desc: 'HSK 1–6 全套系统辅导，梳理词汇语法，训练听力阅读，掌握应试技巧，冲刺目标分数。',
        points: ['HSK 1–6 专项备考训练', '听力、阅读真题练习', '针对性补强个人薄弱点'],
      },
      {
        tag: '职场应用',
        title: '商务中文',
        desc: '面向职场人士，学习会议、谈判、商务邮件，适配工作场景的正式中文（需要基础）。',
        points: ['商务谈判与职场对话演练', '会议、邮件正式中文表达', '根据行业定制教学案例'],
      },
    ],
  },
  pricing: {
    eyebrow: '课时与价格',
    title: '简单透明的价格',
    subtitle: '选择适合你的方案——每节课 60 分钟，一对一在线授课。',
    popular: '最受欢迎',
    cta: '开始咨询',
    note: '价格为美元计价；每节课 60 分钟，一对一在线授课。',
    tiers: [
      {
        name: '单次体验课',
        price: '$30',
        unit: '60 分钟 / 节',
        features: ['一对一在线课程', '个性化计划与反馈', '免费课程资料'],
        popular: false,
      },
      {
        name: '5 节课包',
        price: '$130',
        unit: '折合 $26/节 · 87折',
        features: ['包含单次课全部权益', '进度回顾与课堂笔记', '灵活改期'],
        popular: true,
      },
      {
        name: '10 节课包',
        price: '$240',
        unit: '折合 $24/节 · 80折',
        features: ['包含 5 节包全部权益', '免费水平测试', '优先排课'],
        popular: false,
      },
      {
        name: '20 节课包',
        price: '$460',
        unit: '折合 $23/节 · 77折',
        features: ['包含 10 节包全部权益', '优先排课', '免费水平测试'],
        popular: false,
      },
    ],
  },
  testimonials: {
    eyebrow: '学生评价',
    title: '学生这样说',
    subtitle: '来自世界各地学习者的反馈。',
    items: [
      {
        quote: '从第一节课起，Lydia 就让我敢开口说中文。六个月后，我可以用中文开完整场会议。',
        name: 'Emma',
        role: '成人学员 · 英国',
      },
      {
        quote: '我的孩子居然会期待上中文课——这已经说明了一切。',
        name: 'Daniel',
        role: '两位华裔孩子的家长 · 加拿大',
      },
      {
        quote: '在她的系统备考和清晰反馈下，我顺利通过了 HSK 4。',
        name: 'Marco',
        role: 'HSK 学员 · 意大利',
      },
      {
        quote: '商务中文课让我有了用普通话谈业务的底气——客户都注意到了我的变化。',
        name: 'Sofia',
        role: '商务人士 · 西班牙',
      },
    ],
  },
  contact: {
    eyebrow: '联系我',
    title: '找到你的起点',
    subtitle: '简单介绍一下自己，我会在 24 小时内回复下一步安排。绝无垃圾邮件。',
    emailLabel: '更想直接发邮件？',
    form: {
      name: '你的姓名',
      email: '邮箱地址',
      course: '你对哪门课程感兴趣？',
      courseOptions: {
        any: '还不确定',
        kids: 'Kids & Teenagers · 少儿与青少',
        adult: 'Adult General Mandarin · 成人通用普通话',
        hsk: 'HSK & Business Mandarin · HSK备考与商务中文',
      },
      message: '说说你的目标…',
      submit: '发送留言',
      note: '你的信息会被保密。',
      success: '谢谢！留言已发送，Lydia 很快会回复你。',
      error: '表单暂时无法发送，请直接邮件联系 hello@lydiamandarin.com。',
    },
  },
  footer: {
    tagline: '为世界各地学习者提供的个性化线上中文课。',
    rights: '版权所有。',
  },
  library: {
    eyebrow: '资源库',
    title: '资源库｜即将上线',
    badge: '即将上线',
    body: '免费练习纸、词汇表、HSK 指南和学习笔记正在准备中。敬请期待——或者先来打个招呼，第一批资源上线时 Lydia 会告诉你。',
    cta: '联系我',
    planned: [
      {
        title: '练习纸',
        desc: '适合各个水平的汉字书写与语法练习。',
      },
      {
        title: 'HSK 备考指南',
        desc: '词汇表、考试策略与模拟题技巧。',
      },
      {
        title: '播客与音频',
        desc: '随时随地练听力的碎片化课程。',
      },
    ],
  },
  meta: {
    title: 'Lydia Mandarin | 中文教师线上课程 · 少儿 / 成人 / HSK',
    description:
      '与 Lydia 一起学习普通话——少儿与青少年、成人会话、HSK 1–6 备考及商务中文，一对一在线授课。立即预约免费咨询。',
  },
};
