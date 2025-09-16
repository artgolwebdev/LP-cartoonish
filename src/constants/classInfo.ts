// Class information constants
export const CLASS_INFO = {
  TITLE: 'ברייקדאנס',
  LOCATION: 'מגוונים אלון-הדר',
  GRADES: 'כיתות א׳-ו׳',
  DAY: 'יום ראשון',
  DESCRIPTION: 'ריקוד רחוב מאתגר קצבי ומלא אנרגיה, המשלב תנועות ריקוד עם תרגילי אקרובטיקה',
} as const;

// Benefits data
export const BENEFITS = [
  {
    icon: 'Target',
    text: 'פיתוח חוש קצב',
    color: 'bg-purple-100 border-purple-300',
    emoji: '⚡',
  },
  {
    icon: 'Users',
    text: 'יכולת משחק',
    color: 'bg-pink-100 border-pink-300',
    emoji: '🎭',
  },
  {
    icon: 'Sparkles',
    text: 'ביטחון עצמי',
    color: 'bg-yellow-100 border-yellow-300',
    emoji: '🚀',
  },
  {
    icon: 'Trophy',
    text: 'עמידה מול קהל',
    color: 'bg-green-100 border-green-300',
    emoji: '🏆',
  },
] as const;

// Instructor information
export const INSTRUCTOR_INFO = {
  NAME: 'ארטיום גולובן (ארט.ארטיק)',
  BIO: 'ארטיום החל לרקוד בגיל 10 יחד עם קבוצת ברייקדאנס מובילה בסצנת הברייקדאנס העולמית. בגיל 14 זכה במקום שני באוקראינה.',
  ACHIEVEMENTS: [
    {
      icon: 'Award',
      text: 'מקום שני באוקראינה בגיל 14',
      year: '2006',
      color: 'bg-yellow-100 border-yellow-400',
    },
    {
      icon: 'Star',
      text: 'מקום ראשון בישראל',
      year: '2006',
      color: 'bg-orange-100 border-orange-400',
    },
    {
      icon: 'Globe',
      text: 'ייצוג ישראל בגרמניה',
      year: '2006',
      color: 'bg-blue-100 border-blue-400',
    },
    {
      icon: 'Tv',
      text: '"הדבר הגדול הבא"',
      year: '',
      color: 'bg-purple-100 border-purple-400',
    },
  ],
  CREWS: [
    { name: 'ברייקרהוליקס', color: 'bg-pink-400' },
    { name: 'אנסטופבולז', color: 'bg-cyan-400' },
    { name: 'אריות ציון', color: 'bg-green-400' },
  ],
} as const;

// Registration URL
export const REGISTRATION_URL = 'https://www.migvanim.com/html5/ProLookup.taf?_ID=49047&did=4455&G=12550&SM=';
