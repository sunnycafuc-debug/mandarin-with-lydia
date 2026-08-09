export const en = {
  nav: {
    about: 'About',
    courses: 'Courses',
    pricing: 'Pricing',
    testimonials: 'Testimonials',
    contact: 'Contact',
    library: 'Resource Library',
  },
  hero: {
    eyebrow: 'Online Mandarin Teacher',
    title: 'Lydia Mandarin',
    subtitle:
      'Personalized online Chinese lessons for kids, adults, HSK prep and business — taught with patience, energy and a plan made just for you.',
    ctaPrimary: 'Book a free consultation',
    ctaSecondary: 'Explore courses',
    badge: 'Three course tracks · All levels · Online worldwide',
  },
  about: {
    eyebrow: 'About me',
    title: "Hi, I'm Lydia",
    p1: "I'm a Chinese language teacher who loves helping learners fall in love with Mandarin — one confident conversation at a time. Over the years I've taught heritage kids, curious adults, and HSK-focused students from all over the world.",
    p2: 'My lessons are warm, structured and practical. You leave every class with something you can actually use: a new phrase, a clearer accent, a real conversation.',
    points: [
      'Tailored lesson plans for your goals',
      'Patient, encouraging teaching style',
      'Flexible scheduling across time zones',
      'All ages, all levels, all online',
    ],
    photoCaption: 'Portrait placeholder — replace with a real photo.',
  },
  courses: {
    eyebrow: 'Courses',
    title: 'Three ways to learn',
    subtitle: 'Whatever your goal, there is a track for you.',
    cta: 'Start with this track',
    cards: [
      {
        tag: 'Ages 6–17',
        title: 'Kids & Teenagers',
        desc: 'Fun, playful lessons for heritage kids and young beginners — listening, speaking, character recognition and a real love for Chinese.',
        points: [
          'TPR-based, game-filled lessons',
          'Heritage & beginner tracks',
          'Characters, stories & songs',
        ],
      },
      {
        tag: 'Everyday fluency',
        title: 'Adult General Mandarin',
        desc: 'Practical Mandarin for daily life: conversation, travel, workday small talk and clearer pronunciation.',
        points: [
          'Real-life conversation practice',
          'Pronunciation & tone coaching',
          'Lessons built around your life',
        ],
      },
      {
        tag: 'Exam + workplace',
        title: 'HSK & Business Mandarin',
        desc: 'Structured prep for HSK 1–6 and professional Chinese for meetings, negotiations and email.',
        points: [
          'HSK 1–6 exam strategies',
          'Business & workplace scenarios',
          'Progress you can measure',
        ],
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Simple, honest pricing',
    subtitle: 'Sample rates — let us find the plan that fits your goals and schedule.',
    popular: 'Most popular',
    cta: 'Get started',
    note: 'All sample prices are placeholders. We will confirm rates when you book.',
    tiers: [
      {
        name: 'Single Lesson',
        price: '$30',
        unit: 'per 60-minute lesson',
        features: ['1-on-1 online lesson', 'Personalized plan & feedback', 'Free lesson materials'],
        popular: false,
      },
      {
        name: '10-Lesson Pack',
        price: '$280',
        unit: '$28 per lesson · save $20',
        features: ['All Single Lesson benefits', 'Progress review every 5 lessons', 'Flexible rescheduling'],
        popular: true,
      },
      {
        name: '20-Lesson Pack',
        price: '$520',
        unit: '$26 per lesson · save $80',
        features: ['All 10-Lesson benefits', 'Priority scheduling', 'Free level assessment'],
        popular: false,
      },
    ],
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'What students say',
    subtitle: 'From learners around the world.',
    items: [
      {
        quote: 'Lydia made me feel comfortable speaking from day one. Six months later I held a whole meeting in Chinese.',
        name: 'Emma',
        role: 'Adult learner · UK',
      },
      {
        quote: 'My kids actually look forward to class — that says everything.',
        name: 'Daniel',
        role: 'Parent of two heritage learners · Canada',
      },
      {
        quote: 'I passed HSK 4 thanks to her structured prep and clear feedback.',
        name: 'Marco',
        role: 'HSK student · Italy',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: "Let's find your starting point",
    subtitle:
      'Tell me a little about yourself and I will reply within 24 hours with next steps. No spam, ever.',
    emailLabel: 'Prefer email?',
    form: {
      name: 'Your name',
      email: 'Email address',
      course: 'Which course are you interested in?',
      courseOptions: {
        any: 'Not sure yet',
        kids: 'Kids & Teenagers · 少儿与青少',
        adult: 'Adult General Mandarin · 成人通用普通话',
        hsk: 'HSK & Business Mandarin · HSK备考与商务中文',
      },
      message: 'Tell me about your goals…',
      submit: 'Send message',
      note: 'Your details stay private.',
      success: 'Thanks! Your message has been sent — Lydia will get back to you soon.',
      error: 'Could not send the form here. Please email hello@lydiamandarin.com instead.',
    },
  },
  footer: {
    tagline: 'Personalized Mandarin lessons, online, for learners everywhere.',
    rights: 'All rights reserved.',
  },
  library: {
    eyebrow: 'Resource Library',
    title: 'Resource Library — Coming Soon',
    badge: 'Coming soon',
    body: 'Free worksheets, vocabulary lists, HSK guides and lesson notes are on the way. Check back soon — or say hello and Lydia will let you know when the first resources are ready.',
    cta: 'Say hello',
    planned: [
      {
        title: 'Printable Worksheets',
        desc: 'Handwriting practice and grammar drills for every level.',
      },
      {
        title: 'HSK Prep Guides',
        desc: 'Vocabulary lists, exam strategies and mock-test tips.',
      },
      {
        title: 'Podcast & Audio',
        desc: 'Listening practice and bite-sized lessons for on the go.',
      },
    ],
  },
  meta: {
    title: 'Lydia Mandarin | Online Chinese Lessons for Kids, Adults & HSK',
    description:
      'Personalized online Mandarin lessons with Lydia — kids & teens, adult conversation, HSK 1–6 prep and business Chinese. Book a free consultation.',
  },
} as const;

export type Dict = typeof en;
