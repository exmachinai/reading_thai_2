'use strict';

const COURSE_DATA = { chapters: [
  {
    "id": 1,
    "vocabulary": [
      {
        "thai": "ส่ง",
        "romanization": "song",
        "english": "to send",
        "german": "senden",
        "example_thai": "บริษัทส่งผมมาทํางาน",
        "example_english": "The company sent me",
        "example_german": "Das Unternehmen schickte mich"
      },
      {
        "thai": "สมาชิก",
        "romanization": "sa-maa-chik",
        "english": "member",
        "german": "Mitglied",
        "example_thai": "ครอบครัวมีสมาชิก 3 คน",
        "example_english": "Family has 3 members",
        "example_german": "Familie hat 3 Mitglieder"
      },
      {
        "thai": "แต่งงาน",
        "romanization": "dtaeng-ngaan",
        "english": "to marry",
        "german": "heiraten",
        "example_thai": "เขาแต่งงาน",
        "example_english": "He married",
        "example_german": "Er heiratete"
      },
      {
        "thai": "ตอน",
        "romanization": "dtoon",
        "english": "at (time)",
        "german": "zur Zeit",
        "example_thai": "ตอนคริสต์มาส",
        "example_english": "at Christmas",
        "example_german": "zu Weihnachten"
      },
      {
        "thai": "มักจะ",
        "romanization": "mak-ja",
        "english": "usually",
        "german": "gewöhnlich",
        "example_thai": "มักจะไปทุกปี",
        "example_english": "usually go yearly",
        "example_german": "gehen gewöhnlich jährlich"
      },
      {
        "thai": "พักผ่อน",
        "romanization": "phak-phon",
        "english": "to rest",
        "german": "ausruhen",
        "example_thai": "พักผ่อนที่ภูเก็ต",
        "example_english": "rest in Phuket",
        "example_german": "Erholung in Phuket"
      },
      {
        "thai": "กิจกรรม",
        "romanization": "git-jam",
        "english": "activity",
        "german": "Aktivität",
        "example_thai": "ทํากิจกรรมด้วยกัน",
        "example_english": "do activities together",
        "example_german": "Aktivitäten zusammen"
      },
      {
        "thai": "ด้วยกัน",
        "romanization": "duay-gan",
        "english": "together",
        "german": "zusammen",
        "example_thai": "ไปด้วยกัน",
        "example_english": "go together",
        "example_german": "zusammen gehen"
      },
      {
        "thai": "ชายหาด",
        "romanization": "chai-haat",
        "english": "beach",
        "german": "Strand",
        "example_thai": "ชายหาดสวย",
        "example_english": "beautiful beach",
        "example_german": "schöner Strand"
      },
      {
        "thai": "สะอาด",
        "romanization": "sa-aat",
        "english": "clean",
        "german": "sauber",
        "example_thai": "ชายหาดสะอาด",
        "example_english": "clean beach",
        "example_german": "sauberer Strand"
      },
      {
        "thai": "อากาศ",
        "romanization": "aa-gat",
        "english": "weather",
        "german": "Wetter",
        "example_thai": "อากาศดี",
        "example_english": "good weather",
        "example_german": "gutes Wetter"
      },
      {
        "thai": "คริส",
        "romanization": "khrit",
        "english": "Chris (name)",
        "german": "Chris",
        "example_thai": "คริสมาจากอังกฤษ",
        "example_english": "Chris from England",
        "example_german": "Chris aus England"
      },
      {
        "thai": "อังกฤษ",
        "romanization": "ang-grit",
        "english": "England",
        "german": "England",
        "example_thai": "ประเทศอังกฤษ",
        "example_english": "England country",
        "example_german": "England"
      },
      {
        "thai": "เอ็มมา",
        "romanization": "em-maa",
        "english": "Emma (name)",
        "german": "Emma",
        "example_thai": "เอ็มมาเป็นภรรยา",
        "example_english": "Emma is wife",
        "example_german": "Emma ist Ehefrau"
      },
      {
        "thai": "คริสต์มาส",
        "romanization": "khrit-mas",
        "english": "Christmas",
        "german": "Weihnachten",
        "example_thai": "ตอนคริสต์มาส",
        "example_english": "at Christmas",
        "example_german": "zu Weihnachten"
      },
      {
        "thai": "ช็อปปิ้ง",
        "romanization": "shop-ping",
        "english": "shopping",
        "german": "Einkaufen",
        "example_thai": "ช็อปปิ้งสนุก",
        "example_english": "fun shopping",
        "example_german": "spaßig Einkaufen"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ผมชื่อคริส มาจากประเทศอังกฤษ บริษัทที่อังกฤษส่งผมมาทํางานที่กรุงเทพฯ",
          "english": "My name is Chris, from England. My company sent me to work in Bangkok",
          "german": "Ich heiße Chris und komme aus England. Mein Unternehmen schickte mich nach Bangkok"
        }
      ]
    },
    "structures": [
      {
        "id": "S1",
        "pattern_thai": "verb + มา + time",
        "meaning_english": "has been doing for",
        "meaning_german": "seit [Zeit] etwas tun",
        "examples": [
          {
            "thai": "ผมอยู่มาสามปีแล้ว",
            "english": "I have been living for 3 years",
            "german": "Ich lebe seit 3 Jahren"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "thai": "คุณมาจากประเทศอะไร",
          "english": "What country?",
          "german": "Aus welchem Land?"
        }
      ],
      "pronunciation": {
        "thai": "ผมอยู่มา 3 ปีแล้ว",
        "romanization": "phom yoo maa 3 pee"
      },
      "translation": [
        {
          "source_english": "I have lived 3 years",
          "answer_thai": "ผมอยู่มาสามปีแล้ว"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'ครอบครัว'?",
        "question_en": "What does 'ครอบครัว' mean?",
        "options": [
          {
            "text_de": "Familie",
            "text_en": "family",
            "correct": true
          },
          {
            "text_de": "Arbeit",
            "text_en": "work",
            "correct": false
          },
          {
            "text_de": "Freizeit",
            "text_en": "free time",
            "correct": false
          },
          {
            "text_de": "Reise",
            "text_en": "travel",
            "correct": false
          }
        ],
        "explanation_de": "ครอบครัว = Familie",
        "explanation_en": "ครอบครัว = family"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'ส่ง'?",
        "question_en": "What does 'ส่ง' mean?",
        "options": [
          {
            "text_de": "senden",
            "text_en": "to send",
            "correct": true
          },
          {
            "text_de": "heiraten",
            "text_en": "to marry",
            "correct": false
          },
          {
            "text_de": "ausruhen",
            "text_en": "to rest",
            "correct": false
          },
          {
            "text_de": "wählen",
            "text_en": "to choose",
            "correct": false
          }
        ],
        "explanation_de": "ส่ง bedeutet senden/schicken",
        "explanation_en": "ส่ง means to send"
      },
      {
        "type": "A",
        "question_de": "Was ist ein 'สมาชิก'?",
        "question_en": "What is a 'สมาชิก'?",
        "options": [
          {
            "text_de": "Mitglied",
            "text_en": "member",
            "correct": true
          },
          {
            "text_de": "Berater",
            "text_en": "consultant",
            "correct": false
          },
          {
            "text_de": "Angestellter",
            "text_en": "employee",
            "correct": false
          },
          {
            "text_de": "Schriftsteller",
            "text_en": "writer",
            "correct": false
          }
        ],
        "explanation_de": "สมาชิก bedeutet Mitglied einer Gruppe",
        "explanation_en": "สมาชิก means member of a group"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'แต่งงาน'?",
        "question_en": "What does 'แต่งงาน' mean?",
        "options": [
          {
            "text_de": "heiraten",
            "text_en": "to marry",
            "correct": true
          },
          {
            "text_de": "schlafen",
            "text_en": "to sleep",
            "correct": false
          },
          {
            "text_de": "besuchen",
            "text_en": "to visit",
            "correct": false
          },
          {
            "text_de": "studieren",
            "text_en": "to study",
            "correct": false
          }
        ],
        "explanation_de": "แต่งงาน bedeutet heiraten",
        "explanation_en": "แต่งงาน means to marry"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'มักจะ'?",
        "question_en": "What does 'มักจะ' mean?",
        "options": [
          {
            "text_de": "gewöhnlich",
            "text_en": "usually",
            "correct": true
          },
          {
            "text_de": "selten",
            "text_en": "rarely",
            "correct": false
          },
          {
            "text_de": "niemals",
            "text_en": "never",
            "correct": false
          },
          {
            "text_de": "immer",
            "text_en": "always",
            "correct": false
          }
        ],
        "explanation_de": "มักจะ bedeutet gewöhnlich/normalerweise",
        "explanation_en": "มักจะ means usually/normally"
      },
      {
        "type": "A",
        "question_de": "Was ist 'พักผ่อน'?",
        "question_en": "What is 'พักผ่อน'?",
        "options": [
          {
            "text_de": "ausruhen",
            "text_en": "to rest",
            "correct": true
          },
          {
            "text_de": "arbeiten",
            "text_en": "to work",
            "correct": false
          },
          {
            "text_de": "spielen",
            "text_en": "to play",
            "correct": false
          },
          {
            "text_de": "essen",
            "text_en": "to eat",
            "correct": false
          }
        ],
        "explanation_de": "พักผ่อน bedeutet sich ausruhen/Erholung",
        "explanation_en": "พักผ่อน means to rest/relax"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'กิจกรรม'?",
        "question_en": "What does 'กิจกรรม' mean?",
        "options": [
          {
            "text_de": "Aktivität",
            "text_en": "activity",
            "correct": true
          },
          {
            "text_de": "Unterricht",
            "text_en": "class",
            "correct": false
          },
          {
            "text_de": "Sitzung",
            "text_en": "meeting",
            "correct": false
          },
          {
            "text_de": "Aufgabe",
            "text_en": "task",
            "correct": false
          }
        ],
        "explanation_de": "กิจกรรม bedeutet Aktivität",
        "explanation_en": "กิจกรรม means activity"
      },
      {
        "type": "D",
        "question_de": "Was bedeutet 'ด้วยกัน'?",
        "question_en": "What does 'ด้วยกัน' mean?",
        "options": [
          {
            "text_de": "zusammen",
            "text_en": "together",
            "correct": true
          },
          {
            "text_de": "allein",
            "text_en": "alone",
            "correct": false
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          },
          {
            "text_de": "langsam",
            "text_en": "slow",
            "correct": false
          }
        ],
        "explanation_de": "ด้วยกัน bedeutet zusammen/gemeinsam",
        "explanation_en": "ด้วยกัน means together"
      },
      {
        "type": "B",
        "question_de": "Was ist 'ชายหาด'?",
        "question_en": "What is 'ชายหาด'?",
        "options": [
          {
            "text_de": "Strand",
            "text_en": "beach",
            "correct": true
          },
          {
            "text_de": "Berg",
            "text_en": "mountain",
            "correct": false
          },
          {
            "text_de": "Fluss",
            "text_en": "river",
            "correct": false
          },
          {
            "text_de": "See",
            "text_en": "lake",
            "correct": false
          }
        ],
        "explanation_de": "ชายหาด bedeutet Strand",
        "explanation_en": "ชายหาด means beach"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'อากาศ'?",
        "question_en": "What does 'อากาศ' mean?",
        "options": [
          {
            "text_de": "Wetter",
            "text_en": "weather",
            "correct": true
          },
          {
            "text_de": "Temperatur",
            "text_en": "temperature",
            "correct": false
          },
          {
            "text_de": "Wind",
            "text_en": "wind",
            "correct": false
          },
          {
            "text_de": "Regen",
            "text_en": "rain",
            "correct": false
          }
        ],
        "explanation_de": "อากาศ bedeutet Wetter",
        "explanation_en": "อากาศ means weather"
      }
    ],
    "thai_title": "ครอบครัว",
    "english_title": "Family",
    "german_title": "Familie",
    "emoji": "👨‍👩‍👧"
  },
  {
    "id": 2,
    "vocabulary": [
      {
        "thai": "วัยรุ่น",
        "romanization": "wai-roon",
        "english": "teenager",
        "german": "Teenager",
        "example_thai": "เป็นวัยรุ่น",
        "example_english": "be teenager",
        "example_german": "Teenager sein"
      },
      {
        "thai": "เวลาว่าง",
        "romanization": "way-laa-wang",
        "english": "free time",
        "german": "Freizeit",
        "example_thai": "มีเวลาว่าง",
        "example_english": "have free time",
        "example_german": "freie Zeit haben"
      },
      {
        "thai": "ประเภท",
        "romanization": "bra-phayt",
        "english": "type",
        "german": "Typ",
        "example_thai": "ทุกประเภท",
        "example_english": "all types",
        "example_german": "alle Typen"
      },
      {
        "thai": "เกี่ยวกับ",
        "romanization": "giao-gap",
        "english": "about",
        "german": "über",
        "example_thai": "เกี่ยวกับสิ่ง",
        "example_english": "about something",
        "example_german": "über etwas"
      },
      {
        "thai": "กฎหมาย",
        "romanization": "got-mai",
        "english": "law",
        "german": "Gesetz",
        "example_thai": "เรียนกฎหมาย",
        "example_english": "study law",
        "example_german": "Gesetze studieren"
      },
      {
        "thai": "หลังจาก",
        "romanization": "lang-jaak",
        "english": "after",
        "german": "nach",
        "example_thai": "หลังจากเรียนจบ",
        "example_english": "after graduation",
        "example_german": "nach Abschluss"
      },
      {
        "thai": "เรียนจบ",
        "romanization": "rian-job",
        "english": "graduate",
        "german": "Abschluss",
        "example_thai": "เรียนจบแล้ว",
        "example_english": "graduated",
        "example_german": "abgeschlossen"
      },
      {
        "thai": "มัธยมปลาย",
        "romanization": "mat-thom-plai",
        "english": "high school",
        "german": "Gymnasium",
        "example_thai": "เรียนมัธยมปลาย",
        "example_english": "attend high school",
        "example_german": "Gymnasium besuchen"
      },
      {
        "thai": "จึง",
        "romanization": "jung",
        "english": "therefore",
        "german": "daher",
        "example_thai": "สนใจจึงเรียน",
        "example_english": "interested so studied",
        "example_german": "interessiert daher studiert"
      },
      {
        "thai": "เลือก",
        "romanization": "luak",
        "english": "choose",
        "german": "wählen",
        "example_thai": "เลือกเรียน",
        "example_english": "choose study",
        "example_german": "zum Studieren wählen"
      },
      {
        "thai": "สนใจ",
        "romanization": "son-jai",
        "english": "interested in",
        "german": "interessiert an",
        "example_thai": "สนใจภาษา",
        "example_english": "interested languages",
        "example_german": "an Sprachen interessiert"
      },
      {
        "thai": "น่าสนใจ",
        "romanization": "naa-son-jai",
        "english": "interesting",
        "german": "interessant",
        "example_thai": "น่าสนใจมาก",
        "example_english": "very interesting",
        "example_german": "sehr interessant"
      },
      {
        "thai": "ต่างประเทศ",
        "romanization": "tang-bra-thet",
        "english": "foreign",
        "german": "Fremd",
        "example_thai": "ภาษาต่างประเทศ",
        "example_english": "foreign languages",
        "example_german": "Fremdsprachen"
      },
      {
        "thai": "ตอนนี้",
        "romanization": "dtoon-nee",
        "english": "now",
        "german": "jetzt",
        "example_thai": "ตอนนี้เรียน",
        "example_english": "studying now",
        "example_german": "jetzt studieren"
      },
      {
        "thai": "คล่อง",
        "romanization": "khlong",
        "english": "fluent",
        "german": "fließend",
        "example_thai": "พูดคล่อง",
        "example_english": "speak fluently",
        "example_german": "fließend sprechen"
      },
      {
        "thai": "นักเขียน",
        "romanization": "nak-khian",
        "english": "writer",
        "german": "Schriftsteller",
        "example_thai": "เป็นนักเขียน",
        "example_english": "be writer",
        "example_german": "Schriftsteller sein"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ตอนเป็นวัยรุ่น ผมชอบอ่านหนังสือและดูหนัง",
          "english": "As teenager liked reading and movies",
          "german": "Als Teenager mochte ich lesen und Filme"
        }
      ]
    },
    "structures": [
      {
        "id": "S1",
        "pattern_thai": "นอกจาก…ยัง…ด้วย",
        "meaning_english": "not only but also",
        "meaning_german": "nicht nur sondern auch",
        "examples": [
          {
            "thai": "นอกจากอ่านแล้วยังดูหนังด้วย",
            "english": "not only read also watch",
            "german": "nicht nur lesen sondern auch ansehen"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "thai": "ถ้ามีเวลาว่าง ทำอะไร",
          "english": "What do free time?",
          "german": "Was mit freier Zeit?"
        }
      ],
      "pronunciation": {
        "thai": "ผมคิดว่าน่าสนใจ",
        "romanization": "phom khit waa naa-son-jai"
      },
      "translation": [
        {
          "source_english": "I think interesting",
          "answer_thai": "ผมคิดว่าน่าสนใจ"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'วัยรุ่น'?",
        "question_en": "What does 'วัยรุ่น' mean?",
        "options": [
          {
            "text_de": "Teenager",
            "text_en": "teenager",
            "correct": true
          },
          {
            "text_de": "Kind",
            "text_en": "child",
            "correct": false
          },
          {
            "text_de": "Erwachsener",
            "text_en": "adult",
            "correct": false
          },
          {
            "text_de": "Greis",
            "text_en": "elder",
            "correct": false
          }
        ],
        "explanation_de": "วัยรุ่น = Teenager",
        "explanation_en": "วัยรุ่น = teenager"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'เวลาว่าง'?",
        "question_en": "What does 'เวลาว่าง' mean?",
        "options": [
          {
            "text_de": "Freizeit",
            "text_en": "free time",
            "correct": true
          },
          {
            "text_de": "Arbeitsstunden",
            "text_en": "work time",
            "correct": false
          },
          {
            "text_de": "Schulzeit",
            "text_en": "school time",
            "correct": false
          },
          {
            "text_de": "Schlafenszeit",
            "text_en": "sleep time",
            "correct": false
          }
        ],
        "explanation_de": "เวลาว่าง bedeutet Freizeit",
        "explanation_en": "เวลาว่าง means free time"
      },
      {
        "type": "A",
        "question_de": "Was ist 'ประเภท'?",
        "question_en": "What is 'ประเภท'?",
        "options": [
          {
            "text_de": "Typ/Art",
            "text_en": "type/kind",
            "correct": true
          },
          {
            "text_de": "Ort",
            "text_en": "place",
            "correct": false
          },
          {
            "text_de": "Zeit",
            "text_en": "time",
            "correct": false
          },
          {
            "text_de": "Grund",
            "text_en": "reason",
            "correct": false
          }
        ],
        "explanation_de": "ประเภท bedeutet Typ oder Art",
        "explanation_en": "ประเภท means type or kind"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'กฎหมาย'?",
        "question_en": "What does 'กฎหมาย' mean?",
        "options": [
          {
            "text_de": "Gesetz",
            "text_en": "law",
            "correct": true
          },
          {
            "text_de": "Regel",
            "text_en": "rule",
            "correct": false
          },
          {
            "text_de": "Geld",
            "text_en": "money",
            "correct": false
          },
          {
            "text_de": "Strafe",
            "text_en": "punishment",
            "correct": false
          }
        ],
        "explanation_de": "กฎหมาย bedeutet Gesetz",
        "explanation_en": "กฎหมาย means law"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'เลือก'?",
        "question_en": "What does 'เลือก' mean?",
        "options": [
          {
            "text_de": "wählen",
            "text_en": "to choose",
            "correct": true
          },
          {
            "text_de": "geben",
            "text_en": "to give",
            "correct": false
          },
          {
            "text_de": "nehmen",
            "text_en": "to take",
            "correct": false
          },
          {
            "text_de": "kaufen",
            "text_en": "to buy",
            "correct": false
          }
        ],
        "explanation_de": "เลือก bedeutet wählen",
        "explanation_en": "เลือก means to choose"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'สนใจ'?",
        "question_en": "What does 'สนใจ' mean?",
        "options": [
          {
            "text_de": "interessiert sein",
            "text_en": "interested in",
            "correct": true
          },
          {
            "text_de": "verängstigt sein",
            "text_en": "scared",
            "correct": false
          },
          {
            "text_de": "glücklich sein",
            "text_en": "happy",
            "correct": false
          },
          {
            "text_de": "müde sein",
            "text_en": "tired",
            "correct": false
          }
        ],
        "explanation_de": "สนใจ bedeutet interessiert sein an",
        "explanation_en": "สนใจ means interested in"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'คล่อง'?",
        "question_en": "What does 'คล่อง' mean?",
        "options": [
          {
            "text_de": "fließend",
            "text_en": "fluent",
            "correct": true
          },
          {
            "text_de": "langsam",
            "text_en": "slow",
            "correct": false
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          },
          {
            "text_de": "unklar",
            "text_en": "unclear",
            "correct": false
          }
        ],
        "explanation_de": "คล่อง bedeutet fließend/geläufig",
        "explanation_en": "คล่อง means fluent/smooth"
      },
      {
        "type": "D",
        "question_de": "Was ist 'นักเขียน'?",
        "question_en": "What is 'นักเขียน'?",
        "options": [
          {
            "text_de": "Schriftsteller",
            "text_en": "writer",
            "correct": true
          },
          {
            "text_de": "Künstler",
            "text_en": "artist",
            "correct": false
          },
          {
            "text_de": "Lehrer",
            "text_en": "teacher",
            "correct": false
          },
          {
            "text_de": "Musiker",
            "text_en": "musician",
            "correct": false
          }
        ],
        "explanation_de": "นักเขียน bedeutet Schriftsteller",
        "explanation_en": "นักเขียน means writer"
      },
      {
        "type": "B",
        "question_de": "Was ist 'น่าสนใจ'?",
        "question_en": "What is 'น่าสนใจ'?",
        "options": [
          {
            "text_de": "interessant",
            "text_en": "interesting",
            "correct": true
          },
          {
            "text_de": "langweilig",
            "text_en": "boring",
            "correct": false
          },
          {
            "text_de": "schwierig",
            "text_en": "difficult",
            "correct": false
          },
          {
            "text_de": "einfach",
            "text_en": "easy",
            "correct": false
          }
        ],
        "explanation_de": "น่าสนใจ bedeutet interessant",
        "explanation_en": "น่าสนใจ means interesting"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'จึง'?",
        "question_en": "What does 'จึง' mean?",
        "options": [
          {
            "text_de": "daher",
            "text_en": "therefore",
            "correct": true
          },
          {
            "text_de": "aber",
            "text_en": "but",
            "correct": false
          },
          {
            "text_de": "weil",
            "text_en": "because",
            "correct": false
          },
          {
            "text_de": "obwohl",
            "text_en": "although",
            "correct": false
          }
        ],
        "explanation_de": "จึง bedeutet daher/deswegen",
        "explanation_en": "จึง means therefore/so"
      }
    ],
    "thai_title": "เวลาว่าง",
    "english_title": "Free Time",
    "german_title": "Freizeit",
    "emoji": "🎮"
  },
  {
    "id": 3,
    "vocabulary": [
      {
        "thai": "ฝ่าย",
        "romanization": "fai",
        "english": "division",
        "german": "Abteilung",
        "example_thai": "ฝ่ายกฎหมาย",
        "example_english": "legal division",
        "example_german": "Rechtsabteilung"
      },
      {
        "thai": "ย้ายไป",
        "romanization": "yai-pai",
        "english": "move to",
        "german": "umziehen",
        "example_thai": "ย้ายไปสิงคโปร์",
        "example_english": "move to Singapore",
        "example_german": "nach Singapur umziehen"
      },
      {
        "thai": "ธนาคาร",
        "romanization": "tha-na-kaan",
        "english": "bank",
        "german": "Bank",
        "example_thai": "ธนาคารใหญ่",
        "example_english": "big bank",
        "example_german": "große Bank"
      },
      {
        "thai": "ตําแหน่ง",
        "romanization": "tam-naeng",
        "english": "position",
        "german": "Position",
        "example_thai": "ตําแหน่งสูง",
        "example_english": "high position",
        "example_german": "hohe Position"
      },
      {
        "thai": "ที่ปรึกษา",
        "romanization": "thi-brik-saa",
        "english": "consultant",
        "german": "Berater",
        "example_thai": "เป็นที่ปรึกษา",
        "example_english": "be consultant",
        "example_german": "Berater sein"
      },
      {
        "thai": "ระหว่างประเทศ",
        "romanization": "ra-wang-bra-thet",
        "english": "international",
        "german": "international",
        "example_thai": "บริษัทระหว่างประเทศ",
        "example_english": "international company",
        "example_german": "internationales Unternehmen"
      },
      {
        "thai": "รับผิดชอบ",
        "romanization": "rab-phit-chop",
        "english": "responsible",
        "german": "verantwortlich",
        "example_thai": "รับผิดชอบงาน",
        "example_english": "responsible for work",
        "example_german": "für Arbeit verantwortlich"
      },
      {
        "thai": "การเงิน",
        "romanization": "kaan-ngoen",
        "english": "finance",
        "german": "Finanzen",
        "example_thai": "ฝ่ายการเงิน",
        "example_english": "finance division",
        "example_german": "Finanzabteilung"
      },
      {
        "thai": "เพื่อนร่วมงาน",
        "romanization": "phuan-ruam-ngaan",
        "english": "colleague",
        "german": "Kollege",
        "example_thai": "เพื่อนร่วมงาน",
        "example_english": "colleague at work",
        "example_german": "Arbeitskolleg"
      },
      {
        "thai": "ส่วนใหญ่",
        "romanization": "suan-yai",
        "english": "most",
        "german": "meistens",
        "example_thai": "ส่วนใหญ่เป็นไทย",
        "example_english": "mostly Thai",
        "example_german": "meistens Thai"
      },
      {
        "thai": "ไม่ค่อย",
        "romanization": "mai-khoi",
        "english": "not often",
        "german": "nicht oft",
        "example_thai": "ไม่ค่อยได้พูด",
        "example_english": "not often speak",
        "example_german": "nicht oft sprechen"
      },
      {
        "thai": "โอกาส",
        "romanization": "oh-kas",
        "english": "opportunity",
        "german": "Gelegenheit",
        "example_thai": "มีโอกาส",
        "example_english": "have opportunity",
        "example_german": "Gelegenheit haben"
      },
      {
        "thai": "ขยัน",
        "romanization": "kha-yan",
        "english": "hardworking",
        "german": "fleißig",
        "example_thai": "ขยันมาก",
        "example_english": "very hardworking",
        "example_german": "sehr fleißig"
      },
      {
        "thai": "สบายๆ",
        "romanization": "sa-bai-sa-bai",
        "english": "relaxed",
        "german": "entspannt",
        "example_thai": "คนสบายๆ",
        "example_english": "relaxed person",
        "example_german": "entspannte Person"
      },
      {
        "thai": "บางครั้ง",
        "romanization": "baang-khrang",
        "english": "sometimes",
        "german": "manchmal",
        "example_thai": "บางครั้งมีปัญหา",
        "example_english": "sometimes problem",
        "example_german": "manchmal Problem"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "หลังจากเรียนจบมหาวิทยาลัย ผมทํางานที่ฝ่ายกฎหมาย",
          "english": "After university worked in legal division",
          "german": "Nach Universität in Rechtsabteilung gearbeitet"
        }
      ]
    },
    "structures": [
      {
        "id": "S1",
        "pattern_thai": "noun + ส่วนใหญ่",
        "meaning_english": "most of noun",
        "meaning_german": "meistens Nomen",
        "examples": [
          {
            "thai": "เพื่อนส่วนใหญ่เป็นไทย",
            "english": "most friends are Thai",
            "german": "meiste Freunde sind Thai"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "thai": "คุณทํางานอะไร",
          "english": "What work?",
          "german": "Was ist Ihre Arbeit?"
        }
      ],
      "pronunciation": {
        "thai": "ผมชอบทํางานกับคนไทย",
        "romanization": "phom chop tham-ngaan gap khon-thai"
      },
      "translation": [
        {
          "source_english": "I like working Thai",
          "answer_thai": "ผมชอบทํางานกับคนไทย"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'ธนาคาร'?",
        "question_en": "What does 'ธนาคาร' mean?",
        "options": [
          {
            "text_de": "Bank",
            "text_en": "bank",
            "correct": true
          },
          {
            "text_de": "Geschäft",
            "text_en": "business",
            "correct": false
          },
          {
            "text_de": "Büro",
            "text_en": "office",
            "correct": false
          },
          {
            "text_de": "Laden",
            "text_en": "shop",
            "correct": false
          }
        ],
        "explanation_de": "ธนาคาร = Bank",
        "explanation_en": "ธนาคาร = bank"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'ฝ่าย'?",
        "question_en": "What does 'ฝ่าย' mean?",
        "options": [
          {
            "text_de": "Abteilung",
            "text_en": "division",
            "correct": true
          },
          {
            "text_de": "Gruppe",
            "text_en": "group",
            "correct": false
          },
          {
            "text_de": "Bereich",
            "text_en": "area",
            "correct": false
          },
          {
            "text_de": "Sektion",
            "text_en": "section",
            "correct": false
          }
        ],
        "explanation_de": "ฝ่าย bedeutet Abteilung",
        "explanation_en": "ฝ่าย means division/department"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'ตําแหน่ง'?",
        "question_en": "What does 'ตําแหน่ง' mean?",
        "options": [
          {
            "text_de": "Position",
            "text_en": "position",
            "correct": true
          },
          {
            "text_de": "Ort",
            "text_en": "place",
            "correct": false
          },
          {
            "text_de": "Rang",
            "text_en": "rank",
            "correct": false
          },
          {
            "text_de": "Stufe",
            "text_en": "level",
            "correct": false
          }
        ],
        "explanation_de": "ตําแหน่ง bedeutet Position/Posten",
        "explanation_en": "ตําแหน่ง means position/post"
      },
      {
        "type": "C",
        "question_de": "Was ist 'ที่ปรึกษา'?",
        "question_en": "What is 'ที่ปรึกษา'?",
        "options": [
          {
            "text_de": "Berater",
            "text_en": "consultant",
            "correct": true
          },
          {
            "text_de": "Manager",
            "text_en": "manager",
            "correct": false
          },
          {
            "text_de": "Direktor",
            "text_en": "director",
            "correct": false
          },
          {
            "text_de": "Analyst",
            "text_en": "analyst",
            "correct": false
          }
        ],
        "explanation_de": "ที่ปรึกษา bedeutet Berater",
        "explanation_en": "ที่ปรึกษา means consultant"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'รับผิดชอบ'?",
        "question_en": "What does 'รับผิดชอบ' mean?",
        "options": [
          {
            "text_de": "verantwortlich",
            "text_en": "responsible",
            "correct": true
          },
          {
            "text_de": "schuldig",
            "text_en": "guilty",
            "correct": false
          },
          {
            "text_de": "zuverlässig",
            "text_en": "reliable",
            "correct": false
          },
          {
            "text_de": "pünktlich",
            "text_en": "punctual",
            "correct": false
          }
        ],
        "explanation_de": "รับผิดชอบ bedeutet verantwortlich sein",
        "explanation_en": "รับผิดชอบ means to be responsible"
      },
      {
        "type": "A",
        "question_de": "Was ist 'เพื่อนร่วมงาน'?",
        "question_en": "What is 'เพื่อนร่วมงาน'?",
        "options": [
          {
            "text_de": "Kollege",
            "text_en": "colleague",
            "correct": true
          },
          {
            "text_de": "Freund",
            "text_en": "friend",
            "correct": false
          },
          {
            "text_de": "Chef",
            "text_en": "boss",
            "correct": false
          },
          {
            "text_de": "Mitarbeiter",
            "text_en": "employee",
            "correct": false
          }
        ],
        "explanation_de": "เพื่อนร่วมงาน bedeutet Arbeitskollege",
        "explanation_en": "เพื่อนร่วมงาน means colleague/coworker"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'ส่วนใหญ่'?",
        "question_en": "What does 'ส่วนใหญ่' mean?",
        "options": [
          {
            "text_de": "die meisten",
            "text_en": "most",
            "correct": true
          },
          {
            "text_de": "alle",
            "text_en": "all",
            "correct": false
          },
          {
            "text_de": "einige",
            "text_en": "some",
            "correct": false
          },
          {
            "text_de": "wenige",
            "text_en": "few",
            "correct": false
          }
        ],
        "explanation_de": "ส่วนใหญ่ bedeutet die meisten",
        "explanation_en": "ส่วนใหญ่ means most"
      },
      {
        "type": "D",
        "question_de": "Was bedeutet 'ขยัน'?",
        "question_en": "What does 'ขยัน' mean?",
        "options": [
          {
            "text_de": "fleißig",
            "text_en": "hardworking",
            "correct": true
          },
          {
            "text_de": "faul",
            "text_en": "lazy",
            "correct": false
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          },
          {
            "text_de": "klug",
            "text_en": "clever",
            "correct": false
          }
        ],
        "explanation_de": "ขยัน bedeutet fleißig/arbeitssam",
        "explanation_en": "ขยัน means hardworking/industrious"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'สบายๆ'?",
        "question_en": "What does 'สบายๆ' mean?",
        "options": [
          {
            "text_de": "entspannt",
            "text_en": "relaxed",
            "correct": true
          },
          {
            "text_de": "gestresst",
            "text_en": "stressed",
            "correct": false
          },
          {
            "text_de": "angespannt",
            "text_en": "tense",
            "correct": false
          },
          {
            "text_de": "nervös",
            "text_en": "nervous",
            "correct": false
          }
        ],
        "explanation_de": "สบายๆ bedeutet entspannt/gemütlich",
        "explanation_en": "สบายๆ means relaxed/comfortable"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'ย้ายไป'?",
        "question_en": "What does 'ย้ายไป' mean?",
        "options": [
          {
            "text_de": "umziehen",
            "text_en": "to move to",
            "correct": true
          },
          {
            "text_de": "gehen",
            "text_en": "to go",
            "correct": false
          },
          {
            "text_de": "fahren",
            "text_en": "to drive",
            "correct": false
          },
          {
            "text_de": "laufen",
            "text_en": "to run",
            "correct": false
          }
        ],
        "explanation_de": "ย้ายไป bedeutet umziehen/hinziehen",
        "explanation_en": "ย้ายไป means to move to"
      }
    ],
    "thai_title": "ทํางาน",
    "english_title": "Work",
    "german_title": "Arbeit",
    "emoji": "💼"
  },
  {
    "id": 4,
    "vocabulary": [
      {
        "thai": "ด่วน",
        "romanization": "duan",
        "english": "urgent",
        "german": "dringend",
        "example_thai": "งานด่วน",
        "example_english": "urgent work",
        "example_german": "dringende Arbeit"
      },
      {
        "thai": "ช่วงเช้า",
        "romanization": "chuang-chao",
        "english": "morning",
        "german": "Morgen",
        "example_thai": "ช่วงเช้า",
        "example_english": "in morning",
        "example_german": "am Morgen"
      },
      {
        "thai": "วางแผน",
        "romanization": "wang-phaaen",
        "english": "plan",
        "german": "planen",
        "example_thai": "วางแผนงาน",
        "example_english": "plan work",
        "example_german": "Arbeit planen"
      },
      {
        "thai": "แก้ปัญหา",
        "romanization": "gaeh-pan-haa",
        "english": "solve",
        "german": "lösen",
        "example_thai": "แก้ปัญหา",
        "example_english": "solve problem",
        "example_german": "Problem lösen"
      },
      {
        "thai": "ช่วงบ่าย",
        "romanization": "chuang-bai",
        "english": "afternoon",
        "german": "Nachmittag",
        "example_thai": "ช่วงบ่าย",
        "example_english": "in afternoon",
        "example_german": "am Nachmittag"
      },
      {
        "thai": "เสร็จ",
        "romanization": "set",
        "english": "finished",
        "german": "fertig",
        "example_thai": "ทํางานเสร็จ",
        "example_english": "work finished",
        "example_german": "Arbeit fertig"
      },
      {
        "thai": "ต่างกัน",
        "romanization": "tang-gan",
        "english": "different",
        "german": "verschieden",
        "example_thai": "ต่างกันมาก",
        "example_english": "very different",
        "example_german": "sehr verschieden"
      },
      {
        "thai": "ประวัติศาสตร์",
        "romanization": "bra-wit-sa-sat",
        "english": "history",
        "german": "Geschichte",
        "example_thai": "ประวัติศาสตร์เอเชีย",
        "example_english": "Asian history",
        "example_german": "Asiatische Geschichte"
      },
      {
        "thai": "แปลกใหม่",
        "romanization": "blaek-mai",
        "english": "new interesting",
        "german": "neu interessant",
        "example_thai": "สิ่งแปลกใหม่",
        "example_english": "new interesting thing",
        "example_german": "neuer interessanter Ort"
      },
      {
        "thai": "ใช้ชีวิต",
        "romanization": "chai-chee-wit",
        "english": "live",
        "german": "leben",
        "example_thai": "ใช้ชีวิตดี",
        "example_english": "live well",
        "example_german": "gut leben"
      },
      {
        "thai": "วันธรรมดา",
        "romanization": "wan-tham-ma-da",
        "english": "weekday",
        "german": "Wochentag",
        "example_thai": "วันธรรมดา",
        "example_english": "weekday",
        "example_german": "Wochentag"
      },
      {
        "thai": "วันเสาร์อาทิตย์",
        "romanization": "wan-sao-aa-thit",
        "english": "weekend",
        "german": "Wochenende",
        "example_thai": "วันเสาร์อาทิตย์",
        "example_english": "weekend",
        "example_german": "Wochenende"
      },
      {
        "thai": "ความสุข",
        "romanization": "khwaam-suk",
        "english": "happiness",
        "german": "Glück",
        "example_thai": "มีความสุข",
        "example_english": "be happy",
        "example_german": "glücklich sein"
      },
      {
        "thai": "อีเมล",
        "romanization": "ee-mail",
        "english": "email",
        "german": "E-Mail",
        "example_thai": "ตอบอีเมล",
        "example_english": "reply email",
        "example_german": "E-Mail antworten"
      },
      {
        "thai": "ออนไลน์",
        "romanization": "on-line",
        "english": "online",
        "german": "online",
        "example_thai": "ประชุมออนไลน์",
        "example_english": "online meeting",
        "example_german": "Online-Besprechung"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ผมทํางานวันจันทร์ถึงศุกร์",
          "english": "Work Monday Friday",
          "german": "Arbeite Montag Freitag"
        }
      ]
    },
    "structures": [
      {
        "id": "S1",
        "pattern_thai": "verb + เสร็จ",
        "meaning_english": "finish doing",
        "meaning_german": "beende Tun",
        "examples": [
          {
            "thai": "งานเสร็จแล้ว",
            "english": "work finished",
            "german": "Arbeit beendet"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "thai": "วันธรรมดาทําอะไร",
          "english": "What weekday?",
          "german": "Was Wochentag?"
        }
      ],
      "pronunciation": {
        "thai": "โชคดีไม่ต้องทําอาหาร",
        "romanization": "chok-dee mai-dtong tham-aa-haan"
      },
      "translation": [
        {
          "source_english": "Lucky not cook",
          "answer_thai": "โชคดีไม่ต้องทําอาหาร"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'ด่วน'?",
        "question_en": "What does 'ด่วน' mean?",
        "options": [
          {
            "text_de": "dringend",
            "text_en": "urgent",
            "correct": true
          },
          {
            "text_de": "leicht",
            "text_en": "easy",
            "correct": false
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          },
          {
            "text_de": "langsam",
            "text_en": "slow",
            "correct": false
          }
        ],
        "explanation_de": "ด่วน = dringend",
        "explanation_en": "ด่วน = urgent"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'วางแผน'?",
        "question_en": "What does 'วางแผน' mean?",
        "options": [
          {
            "text_de": "planen",
            "text_en": "to plan",
            "correct": true
          },
          {
            "text_de": "arbeiten",
            "text_en": "to work",
            "correct": false
          },
          {
            "text_de": "denken",
            "text_en": "to think",
            "correct": false
          },
          {
            "text_de": "entscheiden",
            "text_en": "to decide",
            "correct": false
          }
        ],
        "explanation_de": "วางแผน bedeutet planen",
        "explanation_en": "วางแผน means to plan"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'แก้ปัญหา'?",
        "question_en": "What does 'แก้ปัญหา' mean?",
        "options": [
          {
            "text_de": "Problem lösen",
            "text_en": "solve problem",
            "correct": true
          },
          {
            "text_de": "Problem schaffen",
            "text_en": "create problem",
            "correct": false
          },
          {
            "text_de": "Problem verstehen",
            "text_en": "understand problem",
            "correct": false
          },
          {
            "text_de": "Problem erklären",
            "text_en": "explain problem",
            "correct": false
          }
        ],
        "explanation_de": "แก้ปัญหา bedeutet ein Problem lösen",
        "explanation_en": "แก้ปัญหา means to solve a problem"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'เสร็จ'?",
        "question_en": "What does 'เสร็จ' mean?",
        "options": [
          {
            "text_de": "fertig",
            "text_en": "finished",
            "correct": true
          },
          {
            "text_de": "begonnen",
            "text_en": "started",
            "correct": false
          },
          {
            "text_de": "unterbrochen",
            "text_en": "interrupted",
            "correct": false
          },
          {
            "text_de": "pausiert",
            "text_en": "paused",
            "correct": false
          }
        ],
        "explanation_de": "เสร็จ bedeutet fertig/abgeschlossen",
        "explanation_en": "เสร็จ means finished/completed"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'ต่างกัน'?",
        "question_en": "What does 'ต่างกัน' mean?",
        "options": [
          {
            "text_de": "verschieden",
            "text_en": "different",
            "correct": true
          },
          {
            "text_de": "ähnlich",
            "text_en": "similar",
            "correct": false
          },
          {
            "text_de": "gleich",
            "text_en": "same",
            "correct": false
          },
          {
            "text_de": "identisch",
            "text_en": "identical",
            "correct": false
          }
        ],
        "explanation_de": "ต่างกัน bedeutet unterschiedlich/verschieden",
        "explanation_en": "ต่างกัน means different"
      },
      {
        "type": "A",
        "question_de": "Was ist 'ประวัติศาสตร์'?",
        "question_en": "What is 'ประวัติศาสตร์'?",
        "options": [
          {
            "text_de": "Geschichte",
            "text_en": "history",
            "correct": true
          },
          {
            "text_de": "Gegenwart",
            "text_en": "present",
            "correct": false
          },
          {
            "text_de": "Zukunft",
            "text_en": "future",
            "correct": false
          },
          {
            "text_de": "Kultur",
            "text_en": "culture",
            "correct": false
          }
        ],
        "explanation_de": "ประวัติศาสตร์ bedeutet Geschichte",
        "explanation_en": "ประวัติศาสตร์ means history"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'ความสุข'?",
        "question_en": "What does 'ความสุข' mean?",
        "options": [
          {
            "text_de": "Glück",
            "text_en": "happiness",
            "correct": true
          },
          {
            "text_de": "Trauer",
            "text_en": "sadness",
            "correct": false
          },
          {
            "text_de": "Angst",
            "text_en": "fear",
            "correct": false
          },
          {
            "text_de": "Wut",
            "text_en": "anger",
            "correct": false
          }
        ],
        "explanation_de": "ความสุข bedeutet Glück/Freude",
        "explanation_en": "ความสุข means happiness"
      },
      {
        "type": "D",
        "question_de": "Was ist ein 'ซีรีส์'?",
        "question_en": "What is a 'ซีรีส์'?",
        "options": [
          {
            "text_de": "Serie",
            "text_en": "series",
            "correct": true
          },
          {
            "text_de": "Film",
            "text_en": "movie",
            "correct": false
          },
          {
            "text_de": "Buch",
            "text_en": "book",
            "correct": false
          },
          {
            "text_de": "Dokumentation",
            "text_en": "documentary",
            "correct": false
          }
        ],
        "explanation_de": "ซีรีส์ bedeutet Serie/Fernsehserie",
        "explanation_en": "ซีรีส์ means series/TV series"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'ใช้ชีวิต'?",
        "question_en": "What does 'ใช้ชีวิต' mean?",
        "options": [
          {
            "text_de": "leben",
            "text_en": "to live",
            "correct": true
          },
          {
            "text_de": "arbeiten",
            "text_en": "to work",
            "correct": false
          },
          {
            "text_de": "spielen",
            "text_en": "to play",
            "correct": false
          },
          {
            "text_de": "studieren",
            "text_en": "to study",
            "correct": false
          }
        ],
        "explanation_de": "ใช้ชีวิต bedeutet sein Leben leben",
        "explanation_en": "ใช้ชีวิต means to live one's life"
      },
      {
        "type": "A",
        "question_de": "Was ist 'วันธรรมดา'?",
        "question_en": "What is 'วันธรรมดา'?",
        "options": [
          {
            "text_de": "Wochentag",
            "text_en": "weekday",
            "correct": true
          },
          {
            "text_de": "Wochenende",
            "text_en": "weekend",
            "correct": false
          },
          {
            "text_de": "Feiertag",
            "text_en": "holiday",
            "correct": false
          },
          {
            "text_de": "Arbeitstag",
            "text_en": "work day",
            "correct": false
          }
        ],
        "explanation_de": "วันธรรมดา bedeutet Wochentag",
        "explanation_en": "วันธรรมดา means weekday"
      }
    ],
    "thai_title": "ชีวิตประจําวัน",
    "english_title": "Daily Life",
    "german_title": "Alltag",
    "emoji": "📅"
  },
  {
    "id": 5,
    "vocabulary": [
      {
        "thai": "ของกินของใช้",
        "romanization": "khong-gin-khong-chai",
        "english": "products",
        "german": "Produkte",
        "example_thai": "ขายของกินของใช้",
        "example_english": "sell products",
        "example_german": "Produkte verkaufen"
      },
      {
        "thai": "หลากหลาย",
        "romanization": "lak-lai",
        "english": "various",
        "german": "verschieden",
        "example_thai": "มีหลากหลาย",
        "example_english": "have various",
        "example_german": "haben verschiedene"
      },
      {
        "thai": "สินค้า",
        "romanization": "sin-kha",
        "english": "goods",
        "german": "Waren",
        "example_thai": "สินค้านําเข้า",
        "example_english": "import goods",
        "example_german": "importierte Waren"
      },
      {
        "thai": "นําเข้า",
        "romanization": "nam-khao",
        "english": "import",
        "german": "importieren",
        "example_thai": "นําเข้าอาหาร",
        "example_english": "import food",
        "example_german": "Lebensmittel importieren"
      },
      {
        "thai": "โดยเฉพาะ",
        "romanization": "doi-cha-phah",
        "english": "especially",
        "german": "besonders",
        "example_thai": "โดยเฉพาะอาหาร",
        "example_english": "especially food",
        "example_german": "besonders Essen"
      },
      {
        "thai": "สวรรค์",
        "romanization": "sa-wan",
        "english": "heaven",
        "german": "Himmel",
        "example_thai": "เป็นสวรรค์",
        "example_english": "be heaven",
        "example_german": "Himmel sein"
      },
      {
        "thai": "บริการ",
        "romanization": "bor-ri-gaan",
        "english": "service",
        "german": "Service",
        "example_thai": "บริการดี",
        "example_english": "good service",
        "example_german": "guter Service"
      },
      {
        "thai": "ชิม",
        "romanization": "chim",
        "english": "taste",
        "german": "schmecken",
        "example_thai": "ชิมอาหาร",
        "example_english": "taste food",
        "example_german": "Essen probieren"
      },
      {
        "thai": "ระดับ",
        "romanization": "ra-dab",
        "english": "level",
        "german": "Niveau",
        "example_thai": "ทุกระดับ",
        "example_english": "all levels",
        "example_german": "alle Niveaus"
      },
      {
        "thai": "ทั้ง…ไปจนถึง…",
        "romanization": "thang-pai-jon-theung",
        "english": "from to",
        "german": "von bis",
        "example_thai": "ทั้งเล็กจนถึงใหญ่",
        "example_english": "from small to big",
        "example_german": "von klein bis groß"
      },
      {
        "thai": "ริมถนน",
        "romanization": "rim-thanon",
        "english": "street side",
        "german": "Straßenseite",
        "example_thai": "ร้านริมถนน",
        "example_english": "street shop",
        "example_german": "Straßenladen"
      },
      {
        "thai": "ห้องแถว",
        "romanization": "hong-thao",
        "english": "shophouse",
        "german": "Ladenhaus",
        "example_thai": "ร้านห้องแถว",
        "example_english": "shophouse restaurant",
        "example_german": "Ladenhaus-Restaurant"
      },
      {
        "thai": "ติดแอร์",
        "romanization": "tit-air",
        "english": "air con",
        "german": "Klimaanlage",
        "example_thai": "ร้านติดแอร์",
        "example_english": "air con shop",
        "example_german": "Laden mit Klimaanlage"
      },
      {
        "thai": "หรูๆ",
        "romanization": "ru-ru",
        "english": "luxury",
        "german": "Luxus",
        "example_thai": "โรงแรมหรู",
        "example_english": "luxury hotel",
        "example_german": "Luxushotel"
      },
      {
        "thai": "น่าตื่นเต้น",
        "romanization": "naa-tuen-toen",
        "english": "exciting",
        "german": "aufregend",
        "example_thai": "สิ่งน่าตื่นเต้น",
        "example_english": "exciting thing",
        "example_german": "aufregende Sache"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "กิจกรรมวันเสาร์อาทิตย์คือไปซื้อของ กินข้าว และออกกําลังกาย",
          "english": "Weekend activity shopping eating exercise",
          "german": "Wochenend-Aktivität Einkaufen Essen Trainieren"
        }
      ]
    },
    "structures": [],
    "exercises": {
      "conversation": [
        {
          "thai": "วันเสาร์อาทิตย์ทําอะไร",
          "english": "What weekend?",
          "german": "Was am Wochenende?"
        }
      ],
      "pronunciation": {
        "thai": "กรุงเทพเป็นสวรรค์ของคนชอบกิน",
        "romanization": "krung-thayp pen sa-wan khong khon chop gin"
      },
      "translation": [
        {
          "source_english": "Bangkok heaven food lovers",
          "answer_thai": "กรุงเทพเป็นสวรรค์ของคนชอบกิน"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'สวรรค์'?",
        "question_en": "What does 'สวรรค์' mean?",
        "options": [
          {
            "text_de": "Himmel",
            "text_en": "heaven",
            "correct": true
          },
          {
            "text_de": "Hölle",
            "text_en": "hell",
            "correct": false
          },
          {
            "text_de": "Erde",
            "text_en": "earth",
            "correct": false
          },
          {
            "text_de": "Meer",
            "text_en": "sea",
            "correct": false
          }
        ],
        "explanation_de": "สวรรค์ = Himmel",
        "explanation_en": "สวรรค์ = heaven"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'สินค้า'?",
        "question_en": "What does 'สินค้า' mean?",
        "options": [
          {
            "text_de": "Waren",
            "text_en": "goods",
            "correct": true
          },
          {
            "text_de": "Preise",
            "text_en": "prices",
            "correct": false
          },
          {
            "text_de": "Geld",
            "text_en": "money",
            "correct": false
          },
          {
            "text_de": "Laden",
            "text_en": "shop",
            "correct": false
          }
        ],
        "explanation_de": "สินค้า bedeutet Waren/Güter",
        "explanation_en": "สินค้า means goods/merchandise"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'นําเข้า'?",
        "question_en": "What does 'นําเข้า' mean?",
        "options": [
          {
            "text_de": "importieren",
            "text_en": "to import",
            "correct": true
          },
          {
            "text_de": "exportieren",
            "text_en": "to export",
            "correct": false
          },
          {
            "text_de": "herstellen",
            "text_en": "to produce",
            "correct": false
          },
          {
            "text_de": "verkaufen",
            "text_en": "to sell",
            "correct": false
          }
        ],
        "explanation_de": "นําเข้า bedeutet importieren",
        "explanation_en": "นําเข้า means to import"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'บริการ'?",
        "question_en": "What does 'บริการ' mean?",
        "options": [
          {
            "text_de": "Service",
            "text_en": "service",
            "correct": true
          },
          {
            "text_de": "Produkt",
            "text_en": "product",
            "correct": false
          },
          {
            "text_de": "Dienstleistung",
            "text_en": "professional service",
            "correct": false
          },
          {
            "text_de": "Preis",
            "text_en": "price",
            "correct": false
          }
        ],
        "explanation_de": "บริการ bedeutet Service/Dienstleistung",
        "explanation_en": "บริการ means service"
      },
      {
        "type": "B",
        "question_de": "Was bedeutet 'ชิม'?",
        "question_en": "What does 'ชิม' mean?",
        "options": [
          {
            "text_de": "probieren",
            "text_en": "to taste",
            "correct": true
          },
          {
            "text_de": "kochen",
            "text_en": "to cook",
            "correct": false
          },
          {
            "text_de": "essen",
            "text_en": "to eat",
            "correct": false
          },
          {
            "text_de": "trinken",
            "text_en": "to drink",
            "correct": false
          }
        ],
        "explanation_de": "ชิม bedeutet probieren/schmecken",
        "explanation_en": "ชิม means to taste"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'ริมถนน'?",
        "question_en": "What does 'ริมถนน' mean?",
        "options": [
          {
            "text_de": "am Straßenrand",
            "text_en": "street side",
            "correct": true
          },
          {
            "text_de": "auf der Straße",
            "text_en": "on street",
            "correct": false
          },
          {
            "text_de": "neben der Straße",
            "text_en": "beside street",
            "correct": false
          },
          {
            "text_de": "unter der Straße",
            "text_en": "under street",
            "correct": false
          }
        ],
        "explanation_de": "ริมถนน bedeutet am Straßenrand",
        "explanation_en": "ริมถนน means street side"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'หรูๆ'?",
        "question_en": "What does 'หรูๆ' mean?",
        "options": [
          {
            "text_de": "Luxus/elegant",
            "text_en": "luxury/elegant",
            "correct": true
          },
          {
            "text_de": "günstig",
            "text_en": "cheap",
            "correct": false
          },
          {
            "text_de": "einfach",
            "text_en": "simple",
            "correct": false
          },
          {
            "text_de": "alt",
            "text_en": "old",
            "correct": false
          }
        ],
        "explanation_de": "หรูๆ bedeutet elegant/luxuriös",
        "explanation_en": "หรูๆ means luxury/elegant"
      },
      {
        "type": "D",
        "question_de": "Was bedeutet 'น่าตื่นเต้น'?",
        "question_en": "What does 'น่าตื่นเต้น' mean?",
        "options": [
          {
            "text_de": "aufregend",
            "text_en": "exciting",
            "correct": true
          },
          {
            "text_de": "langweilig",
            "text_en": "boring",
            "correct": false
          },
          {
            "text_de": "traurig",
            "text_en": "sad",
            "correct": false
          },
          {
            "text_de": "ängstlich",
            "text_en": "scary",
            "correct": false
          }
        ],
        "explanation_de": "น่าตื่นเต้น bedeutet aufregend/spannend",
        "explanation_en": "น่าตื่นเต้น means exciting"
      },
      {
        "type": "B",
        "question_de": "Was ist 'ห้างสรรพสินค้า'?",
        "question_en": "What is 'ห้างสรรพสินค้า'?",
        "options": [
          {
            "text_de": "Einkaufszentrum",
            "text_en": "shopping mall",
            "correct": true
          },
          {
            "text_de": "Supermarkt",
            "text_en": "supermarket",
            "correct": false
          },
          {
            "text_de": "Markt",
            "text_en": "market",
            "correct": false
          },
          {
            "text_de": "Boutique",
            "text_en": "boutique",
            "correct": false
          }
        ],
        "explanation_de": "ห้างสรรพสินค้า bedeutet Kaufhaus/Einkaufszentrum",
        "explanation_en": "ห้างสรรพสินค้า means shopping mall/department store"
      },
      {
        "type": "A",
        "question_de": "Was ist 'สตรีทฟู้ด'?",
        "question_en": "What is 'สตรีทฟู้ด'?",
        "options": [
          {
            "text_de": "Street Food",
            "text_en": "street food",
            "correct": true
          },
          {
            "text_de": "Fast Food",
            "text_en": "fast food",
            "correct": false
          },
          {
            "text_de": "Restaurant",
            "text_en": "restaurant",
            "correct": false
          },
          {
            "text_de": "Café",
            "text_en": "cafe",
            "correct": false
          }
        ],
        "explanation_de": "สตรีทฟู้ด bedeutet Street Food",
        "explanation_en": "สตรีทฟู้ด means street food"
      }
    ],
    "thai_title": "วันเสาร์อาทิตย์",
    "english_title": "Weekend",
    "german_title": "Wochenende",
    "emoji": "🛒"
  },
  {
    "id": 6,
    "thai_title": "ซื้อของออนไลน์",
    "english_title": "Online Shopping",
    "german_title": "Online-Einkaufen",
    "emoji": "📦",
    "vocabulary": [
      {
        "thai": "สารคดี",
        "romanization": "saa-ra-kha-dii",
        "english": "documentary",
        "german": "Dokumentation"
      },
      {
        "thai": "ติดต่อ",
        "romanization": "dtìt-dtòr",
        "english": "to contact",
        "german": "Kontakt aufnehmen"
      },
      {
        "thai": "ทั่วโลก",
        "romanization": "thûa-lo-ok",
        "english": "all over the world",
        "german": "auf der ganzen Welt"
      },
      {
        "thai": "สะดวก",
        "romanization": "sa-dùak",
        "english": "convenient",
        "german": "bequem"
      },
      {
        "thai": "สั่งซื้อ",
        "romanization": "sàng-súu",
        "english": "to place order",
        "german": "bestellen"
      },
      {
        "thai": "จ่ายเงิน",
        "romanization": "jài-ngən",
        "english": "to pay",
        "german": "bezahlen"
      },
      {
        "thai": "บัตรเครดิต",
        "romanization": "bàt-khre-dit",
        "english": "credit card",
        "german": "Kreditkarte"
      },
      {
        "thai": "ยุ่ง",
        "romanization": "yûng",
        "english": "busy",
        "german": "beschäftigt"
      },
      {
        "thai": "ยุ่งยาก",
        "romanization": "yûng-yâak",
        "english": "complicated",
        "german": "kompliziert"
      },
      {
        "thai": "ถึงแม้ว่า",
        "romanization": "thǔng-mǎae-wâa",
        "english": "although",
        "german": "obwohl"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ฉันชื่อเอ็มมา เป็นภรรยาของคุณคริส",
          "english": "My name is Emma. I am the wife of Chris.",
          "german": "Mein Name ist Emma. Ich bin die Ehefrau von Chris."
        },
        {
          "thai": "ฉันเป็นนักเขียนสารคดีและทํางานที่บ้าน",
          "english": "I am a documentary writer and work at home.",
          "german": "Ich bin Dokumentarschriftstellerin und arbeite zu Hause."
        },
        {
          "thai": "ฉันติดต่อกับเพื่อนร่วมงานที่อยู่ทั่วโลกได้ทางอีเมล",
          "english": "I contact colleagues all over the world via email.",
          "german": "Ich kontaktiere Kollegen auf der ganzen Welt per E-Mail."
        },
        {
          "thai": "การที่โลกเรามีอินเทอร์เน็ตทําให้ชีวิตของเราสะดวกมาก",
          "english": "The fact that our world has internet makes our life very convenient.",
          "german": "Die Tatsache, dass unsere Welt das Internet hat, macht unser Leben sehr bequem."
        },
        {
          "thai": "ฉันชอบสั่งซื้อของใช้จากจีนเพราะไม่แพงและใช้เวลาส่งไม่นาน",
          "english": "I like ordering things from China because they are not expensive and delivery is fast.",
          "german": "Ich mag es, Dinge aus China zu bestellen, weil sie nicht teuer sind und die Lieferung schnell ist."
        }
      ]
    },
    "structures": [
      {
        "pattern": "ถึงแม้ว่า…แต่…",
        "meaning": "Although…, …",
        "german": "Obwohl…, …",
        "examples": [
          {
            "thai": "ถึงแม้ว่าฝนตก แต่ฉันก็ออกจากบ้านไปออกกําลังกาย",
            "english": "Although it rains, I still go out for exercise.",
            "german": "Obwohl es regnet, gehe ich trotzdem zum Sport."
          },
          {
            "thai": "ถึงแม้ว่าการซื้อของออนไลน์จะง่ายและสะดวกมาก แต่ฉันก็ยังชอบออกไปนอกบ้าน",
            "english": "Although online shopping is easy and convenient, I still like to go out.",
            "german": "Obwohl Online-Shopping leicht und bequem ist, gehe ich trotzdem gerne raus."
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "ทุกวันคุณใช้อินเทอร์เน็ตทําอะไรบ้าง",
          "english": "What do you use the internet for every day?"
        },
        {
          "question": "คุณชอบทํางานที่บ้านไหม",
          "english": "Do you like working at home?"
        },
        {
          "question": "คุณชอบซื้อของออนไลน์ไหม",
          "english": "Do you like online shopping?"
        },
        {
          "question": "อยู่ที่กรุงเทพฯ คุณซื้ออาหารออนไลน์ไหม",
          "english": "In Bangkok, do you order food online?"
        },
        {
          "question": "คุณคิดว่าจะใช้ชีวิตแบบไม่ออกจากบ้านเลยได้กี่วัน",
          "english": "How many days do you think you can stay home without going out?"
        },
        {
          "question": "การซื้อของออนไลน์ดีเพราะง่ายและสะดวก แต่คุณคิดว่ามีอะไรไม่ดีไหม",
          "english": "Online shopping is good because it's easy and convenient, but what do you think is not good?"
        },
        {
          "question": "แอปพลิเคชันที่คุณใช้บ่อยที่สุดเวลาทํางานคือแอปฯ อะไร",
          "english": "What is the application you use most often when working?"
        },
        {
          "question": "คุณมีแอปพลิเคชันที่ใช้ช่วยเรียนภาษาไทยไหม",
          "english": "Do you have any applications that help you learn Thai?"
        },
        {
          "question": "คุณเชื่อว่าอินเทอร์เน็ตทําให้ชีวิตดีขึ้นไหม",
          "english": "Do you believe the internet makes life better?"
        },
        {
          "question": "ถ้าไม่มีอินเทอร์เน็ต คุณจะทําอะไร",
          "english": "If there was no internet, what would you do?"
        }
      ],
      "pronunciation": {
        "word": "ช่วยวางไว้บนโต๊ะที่ล็อบบี นะคะ/นะครับ",
        "meaning": "Please leave it on the table in the lobby."
      },
      "translation": [
        {
          "english": "I usually connect with friends via email.",
          "thai": "ฉันติดต่อเพื่อนผ่านอีเมลเป็นปกติ"
        },
        {
          "english": "I like living in Bangkok because it is very convenient.",
          "thai": "ฉันชอบอยู่กรุงเทพฯ เพราะมันสะดวกมาก"
        },
        {
          "english": "I don't like ordering food via mobile applications.",
          "thai": "ฉันไม่ชอบสั่งอาหารผ่านแอปพลิเคชัน"
        },
        {
          "english": "Although I am very busy, I exercise every day.",
          "thai": "ถึงแม้ว่าฉันยุ่งมาก แต่ฉันก็ออกกําลังกายทุกวัน"
        },
        {
          "english": "Ordering food via mobile applications is not complicated.",
          "thai": "การสั่งอาหารผ่านแอปพลิเคชันไม่ยุ่งยาก"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'สารคดี' auf Deutsch?",
        "question_en": "What does 'สารคดี' mean in English?",
        "options": [
          {
            "text_de": "Dokumentation",
            "text_en": "documentary",
            "correct": true
          },
          {
            "text_de": "Zeitung",
            "text_en": "newspaper",
            "correct": false
          },
          {
            "text_de": "Geschichte",
            "text_en": "story",
            "correct": false
          },
          {
            "text_de": "Buch",
            "text_en": "book",
            "correct": false
          }
        ],
        "explanation_de": "สารคดี bedeutet 'Dokumentation' oder 'dokumentarischer Bericht'.",
        "explanation_en": "'สารคดี' means 'documentary' or 'documentary report'."
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'สะดวก' auf Deutsch?",
        "question_en": "What does 'สะดวก' mean in English?",
        "options": [
          {
            "text_de": "schwierig",
            "text_en": "difficult",
            "correct": false
          },
          {
            "text_de": "bequem",
            "text_en": "convenient",
            "correct": true
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          },
          {
            "text_de": "langsam",
            "text_en": "slow",
            "correct": false
          }
        ],
        "explanation_de": "สะดวก bedeutet 'bequem' oder 'praktisch'.",
        "explanation_en": "'สะดวก' means 'convenient' or 'comfortable'."
      },
      {
        "type": "B",
        "question_de": "Übersetze ins Deutsche: 'ฉันติดต่อกับเพื่อนร่วมงานที่อยู่ทั่วโลก'",
        "question_en": "Translate into English: 'ฉันติดต่อกับเพื่อนร่วมงานที่อยู่ทั่วโลก'",
        "options": [
          {
            "text_de": "Ich kontaktiere Kollegen auf der ganzen Welt",
            "text_en": "I contact colleagues all over the world",
            "correct": true
          },
          {
            "text_de": "Ich arbeite mit Kollegen auf der ganzen Welt",
            "text_en": "I work with colleagues all over the world",
            "correct": false
          },
          {
            "text_de": "Ich kenne Kollegen auf der ganzen Welt",
            "text_en": "I know colleagues all over the world",
            "correct": false
          },
          {
            "text_de": "Ich treffe Kollegen auf der ganzen Welt",
            "text_en": "I meet colleagues all over the world",
            "correct": false
          }
        ],
        "explanation_de": "'ติดต่อ' bedeutet 'Kontakt aufnehmen' oder 'kontaktieren'.",
        "explanation_en": "'ติดต่อ' means 'to contact' or 'to reach out'."
      },
      {
        "type": "C",
        "question_de": "Welche Struktur wird hier verwendet: 'ถึงแม้ว่าการซื้อของออนไลน์จะง่าย แต่ฉันก็ยังชอบออกไปนอกบ้าน'?",
        "question_en": "What structure is used in: 'ถึงแม้ว่าการซื้อของออนไลน์จะง่าย แต่ฉันก็ยังชอบออกไปนอกบ้าน'?",
        "options": [
          {
            "text_de": "ถึงแม้ว่า…แต่… (obwohl…)",
            "text_en": "ถึงแม้ว่า…แต่… (although…)",
            "correct": true
          },
          {
            "text_de": "เพราะ (weil)",
            "text_en": "เพราะ (because)",
            "correct": false
          },
          {
            "text_de": "ถ้า (wenn)",
            "text_en": "ถ้า (if)",
            "correct": false
          },
          {
            "text_de": "อย่างไรก็ตาม (jedoch)",
            "text_en": "อย่างไรก็ตาม (however)",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist die 'ถึงแม้ว่า…แต่…' Struktur für 'obwohl'.",
        "explanation_en": "This is the 'ถึงแม้ว่า…แต่…' structure meaning 'although'."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'ฉันสั่งซื้อของจากจีน เพราะ _____'",
        "question_en": "Fill in the blank: 'ฉันสั่งซื้อของจากจีน เพราะ _____'",
        "options": [
          {
            "text_de": "es ist teuer",
            "text_en": "it is expensive",
            "correct": false
          },
          {
            "text_de": "es ist nicht teuer und die Lieferung ist schnell",
            "text_en": "it is not expensive and delivery is fast",
            "correct": true
          },
          {
            "text_de": "es ist sehr langsam",
            "text_en": "it is very slow",
            "correct": false
          },
          {
            "text_de": "ich mag keine Einkäufe",
            "text_en": "I don't like shopping",
            "correct": false
          }
        ],
        "explanation_de": "Im Text sagt Emma: 'ฉันชอบสั่งซื้อของใช้จากจีนเพราะไม่แพงและใช้เวลาส่งไม่นาน'",
        "explanation_en": "In the text, Emma says: 'I like ordering things from China because they are not expensive and delivery is fast.'"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'จ่ายเงิน'?",
        "question_en": "What does 'จ่ายเงิน' mean?",
        "options": [
          {
            "text_de": "Geld verdienen",
            "text_en": "to earn money",
            "correct": false
          },
          {
            "text_de": "Geld ausleihen",
            "text_en": "to borrow money",
            "correct": false
          },
          {
            "text_de": "Geld bezahlen",
            "text_en": "to pay",
            "correct": true
          },
          {
            "text_de": "Geld sparen",
            "text_en": "to save money",
            "correct": false
          }
        ],
        "explanation_de": "'จ่ายเงิน' bedeutet 'Geld bezahlen' oder 'zahlen'.",
        "explanation_en": "'จ่ายเงิน' means 'to pay' or 'to pay money'."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'เวลาจ่ายเงินก็สะดวกเพราะตัดเงินจากบัตรเครดิต'",
        "question_en": "Translate: 'เวลาจ่ายเงินก็สะดวกเพราะตัดเงินจากบัตรเครดิต'",
        "options": [
          {
            "text_de": "Bezahlung ist bequem, weil das Geld von der Kreditkarte abgebucht wird",
            "text_en": "Payment is convenient because money is deducted from the credit card",
            "correct": true
          },
          {
            "text_de": "Bezahlung ist schwierig, weil die Kreditkarte nicht funktioniert",
            "text_en": "Payment is difficult because the credit card doesn't work",
            "correct": false
          },
          {
            "text_de": "Bezahlung ist teuer, weil die Kreditkarte Gebühren kostet",
            "text_en": "Payment is expensive because the credit card has fees",
            "correct": false
          },
          {
            "text_de": "Bezahlung ist schnell, weil man nur eine Karte braucht",
            "text_en": "Payment is fast because you only need one card",
            "correct": false
          }
        ],
        "explanation_de": "Der Satz bedeutet, dass die Zahlung bequem ist, da das Geld automatisch von der Kreditkarte abgebucht wird.",
        "explanation_en": "The sentence means that payment is convenient because money is automatically deducted from the credit card."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'Die Struktur ถึงแม้ว่า…แต่… wird verwendet, um ___ auszudrücken'",
        "question_en": "Fill in the blank: 'The structure ถึงแม้ว่า…แต่… is used to express ___'",
        "options": [
          {
            "text_de": "einen Grund",
            "text_en": "a reason",
            "correct": false
          },
          {
            "text_de": "Kontrast oder Widerspruch",
            "text_en": "contrast or contradiction",
            "correct": true
          },
          {
            "text_de": "eine Bedingung",
            "text_en": "a condition",
            "correct": false
          },
          {
            "text_de": "eine Folge",
            "text_en": "a consequence",
            "correct": false
          }
        ],
        "explanation_de": "ถึงแม้ว่า…แต่… wird verwendet, um Kontrast auszudrücken, obwohl etwas der Fall ist, aber etwas anderes passiert.",
        "explanation_en": "ถึงแม้ว่า…แต่… is used to express contrast - although something is true, something else happens."
      },
      {
        "type": "C",
        "question_de": "Welche Wortart ist 'ยุ่งยาก'?",
        "question_en": "What is the part of speech of 'ยุ่งยาก'?",
        "options": [
          {
            "text_de": "Nomen",
            "text_en": "noun",
            "correct": false
          },
          {
            "text_de": "Adjektiv",
            "text_en": "adjective",
            "correct": true
          },
          {
            "text_de": "Verb",
            "text_en": "verb",
            "correct": false
          },
          {
            "text_de": "Adverb",
            "text_en": "adverb",
            "correct": false
          }
        ],
        "explanation_de": "'ยุ่งยาก' ist ein Adjektiv und bedeutet 'kompliziert' oder 'schwierig'.",
        "explanation_en": "'ยุ่งยาก' is an adjective meaning 'complicated' or 'difficult'."
      },
      {
        "type": "A",
        "question_de": "Was ist 'บัตรเครดิต'?",
        "question_en": "What is 'บัตรเครดิต'?",
        "options": [
          {
            "text_de": "Personalausweis",
            "text_en": "ID card",
            "correct": false
          },
          {
            "text_de": "Kreditkarte",
            "text_en": "credit card",
            "correct": true
          },
          {
            "text_de": "Fahrkarte",
            "text_en": "ticket",
            "correct": false
          },
          {
            "text_de": "Bankkarte",
            "text_en": "debit card",
            "correct": false
          }
        ],
        "explanation_de": "'บัตรเครดิต' bedeutet 'Kreditkarte'.",
        "explanation_en": "'บัตรเครดิต' means 'credit card'."
      }
    ]
  },
  {
    "id": 7,
    "thai_title": "การเดินทางในกรุงเทพฯ",
    "english_title": "Travelling in Bangkok",
    "german_title": "Reisen in Bangkok",
    "emoji": "🚊",
    "vocabulary": [
      {
        "thai": "รถไฟฟ้า",
        "romanization": "rót-fai-fáa",
        "english": "sky train",
        "german": "Skytrain"
      },
      {
        "thai": "รถไฟใต้ดิน",
        "romanization": "rót-fai-tài-din",
        "english": "underground",
        "german": "U-Bahn"
      },
      {
        "thai": "สมัยก่อน",
        "romanization": "sa-mai-gòn",
        "english": "old days",
        "german": "früher"
      },
      {
        "thai": "แคบ",
        "romanization": "kháep",
        "english": "narrow",
        "german": "eng/schmal"
      },
      {
        "thai": "หนัก",
        "romanization": "nàk",
        "english": "heavy",
        "german": "schwer"
      },
      {
        "thai": "สมัยนี้",
        "romanization": "sa-mai-níi",
        "english": "these days",
        "german": "heutzutage"
      },
      {
        "thai": "การเดินทาง",
        "romanization": "kaan-dən-thaang",
        "english": "travelling",
        "german": "Reisen"
      },
      {
        "thai": "กว้าง",
        "romanization": "kwâang",
        "english": "wide",
        "german": "breiter"
      },
      {
        "thai": "ทางด่วน",
        "romanization": "thaang-duuan",
        "english": "express way",
        "german": "Schnellstraße"
      },
      {
        "thai": "สาย",
        "romanization": "sǎai",
        "english": "line, route",
        "german": "Linie"
      },
      {
        "thai": "เปรียบเทียบ",
        "romanization": "prian-thîap",
        "english": "to compare",
        "german": "vergleichen"
      },
      {
        "thai": "น้อยลง",
        "romanization": "nóoi-long",
        "english": "less",
        "german": "weniger"
      },
      {
        "thai": "ค่าครองชีพ",
        "romanization": "khâa-khroong-chîip",
        "english": "living expense",
        "german": "Lebenshaltungskosten"
      },
      {
        "thai": "ชั่วโมงเร่งด่วน",
        "romanization": "chuua-moong-rèng-duuan",
        "english": "rush hour",
        "german": "Stoßzeit"
      },
      {
        "thai": "มอเตอร์ไซค์รับจ้าง",
        "romanization": "motr-sai-ráp-jâang",
        "english": "motorcycle taxi",
        "german": "Motorradtaxi"
      },
      {
        "thai": "รถเมล์",
        "romanization": "rót-mee",
        "english": "bus",
        "german": "Bus"
      },
      {
        "thai": "แท็กซี่",
        "romanization": "thák-sîi",
        "english": "taxi",
        "german": "Taxi"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ผมโชคดีที่มาอยู่กรุงเทพฯ ตอนที่ที่นี่มีรถไฟฟ้าและรถไฟใต้ดินแล้ว",
          "english": "I was lucky to come to Bangkok when it already had the sky train and underground.",
          "german": "Ich war glücklich, nach Bangkok zu kommen, als es bereits den Skytrain und die U-Bahn gab."
        },
        {
          "thai": "สมัยก่อนมีแต่รถเมล์ แท็กซี่ ตุ๊กตุ๊ก มอเตอร์ไซค์",
          "english": "In the old days there were only buses, taxis, tuk-tuks, and motorcycles.",
          "german": "Früher gab es nur Busse, Taxis, Tuk-Tuks und Motorräder."
        },
        {
          "thai": "สมัยนี้การเดินทางในกรุงเทพฯ สะดวกขึ้นมาก",
          "english": "These days, travelling in Bangkok is much more convenient.",
          "german": "Heutzutage ist das Reisen in Bangkok viel bequemer."
        },
        {
          "thai": "ถนนกว้างขึ้นแล้วก็มีทางด่วนหลายสาย",
          "english": "Streets are wider and there are many expressways.",
          "german": "Die Straßen sind breiter und es gibt mehrere Schnellstraßen."
        },
        {
          "thai": "ชั่วโมงเร่งด่วนที่กรุงเทพฯ คือตอนเช้าและตอนเย็น",
          "english": "Rush hours in Bangkok are morning and evening.",
          "german": "Die Stoßzeiten in Bangkok sind morgens und abends."
        }
      ]
    },
    "structures": [
      {
        "pattern": "adjective + ขึ้น",
        "meaning": "Subject is more adjective than before",
        "german": "Subjekt ist mehr Adjektiv als zuvor",
        "examples": [
          {
            "thai": "ผมมีความสุขมากขึ้น",
            "english": "I have become happier.",
            "german": "Ich bin glücklicher geworden."
          },
          {
            "thai": "ค่าครองชีพที่กรุงเทพฯ แพงขึ้น",
            "english": "Living expenses in Bangkok have become more expensive.",
            "german": "Die Lebenshaltungskosten in Bangkok sind teurer geworden."
          }
        ]
      },
      {
        "pattern": "Subject + verb/adjective น้อยลง",
        "meaning": "Subject is less + verb/adjective than before",
        "german": "Subjekt ist weniger + Verb/Adjektiv als zuvor",
        "examples": [
          {
            "thai": "ผมมีความสุขน้อยลง",
            "english": "I have become less happy.",
            "german": "Ich bin weniger glücklich geworden."
          },
          {
            "thai": "เดือนนี้ฉันใช้เงินน้อยลงเพราะไม่ซื้อของออนไลน์เลย",
            "english": "This month I spent less money because I didn't buy anything online.",
            "german": "Diesen Monat habe ich weniger Geld ausgegeben, da ich nichts online gekauft habe."
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "การเดินทางในบ้านเมืองของคุณสะดวกไหม"
        },
        {
          "question": "คุณชอบใช้ยานพาหนะแบบไหน เพื่อไปทํางาน"
        },
        {
          "question": "เมืองของคุณมีรถไฟฟ้าหรือรถไฟใต้ดินไหม"
        },
        {
          "question": "ที่เมืองของคุณ ช่วงไหนคือชั่วโมงเร่งด่วน"
        },
        {
          "question": "คุณเคยนั่งมอเตอร์ไซค์รับจ้างไหม"
        },
        {
          "question": "คุณคิดว่าการเดินทางในกรุงเทพฯ ดีไหมเมื่อเปรียบเทียบกับเมืองอื่น"
        },
        {
          "question": "ค่าการเดินทางที่กรุงเทพฯ แพงไหม"
        },
        {
          "question": "ถ้าหากไม่มีรถไฟฟ้า การเดินทางในกรุงเทพฯ จะเป็นอย่างไร"
        },
        {
          "question": "คุณคิดว่าทํاไมค่าครองชีพที่กรุงเทพฯ แพงขึ้น"
        },
        {
          "question": "คุณอยากใช้มอเตอร์ไซค์รับจ้างหรือไม่ ทําไม"
        }
      ],
      "pronunciation": {
        "word": "ผม/ฉันไม่เคยนั่งมอไซค์ที่กรุงเทพฯ",
        "meaning": "I have never ridden a motorcycle taxi in Bangkok."
      },
      "translation": [
        {
          "english": "Travelling in Bangkok is very convenient.",
          "thai": "การเดินทางในกรุงเทพฯ สะดวกมาก"
        },
        {
          "english": "Comparing to many countries, the underground in Bangkok is very expensive.",
          "thai": "เมื่อเปรียบเทียบกับหลายประเทศ รถไฟใต้ดินที่กรุงเทพฯ แพงมาก"
        },
        {
          "english": "I have never taken a motorcycle taxi in Bangkok.",
          "thai": "ฉันไม่เคยนั่งมอเตอร์ไซค์รับจ้างที่กรุงเทพฯ"
        },
        {
          "english": "Bangkok has more cars but less traffic.",
          "thai": "กรุงเทพฯ มีรถมากขึ้นแต่รถติดน้อยลง"
        },
        {
          "english": "Although Bangkok has the sky train and the underground, it still has heavy traffic jam as usual.",
          "thai": "ถึงแม้ว่ากรุงเทพฯ มีรถไฟฟ้าและรถไฟใต้ดิน แต่ก็ยังมีรถติดหนักเหมือนเดิม"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was ist 'รถไฟฟ้า'?",
        "question_en": "What is 'รถไฟฟ้า'?",
        "options": [
          {
            "text_de": "U-Bahn",
            "text_en": "underground train",
            "correct": false
          },
          {
            "text_de": "Skytrain",
            "text_en": "sky train",
            "correct": true
          },
          {
            "text_de": "Straßenbahn",
            "text_en": "tram",
            "correct": false
          },
          {
            "text_de": "Zug",
            "text_en": "train",
            "correct": false
          }
        ],
        "explanation_de": "'รถไฟฟ้า' ist der Skytrain (Hochbahn) in Bangkok.",
        "explanation_en": "'รถไฟฟ้า' is the sky train (elevated railway) in Bangkok."
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'ชั่วโมงเร่งด่วน'?",
        "question_en": "What does 'ชั่วโมงเร่งด่วน' mean?",
        "options": [
          {
            "text_de": "Nachtzeit",
            "text_en": "night time",
            "correct": false
          },
          {
            "text_de": "Stoßzeit",
            "text_en": "rush hour",
            "correct": true
          },
          {
            "text_de": "freier Tag",
            "text_en": "free day",
            "correct": false
          },
          {
            "text_de": "Feierzeit",
            "text_en": "holiday time",
            "correct": false
          }
        ],
        "explanation_de": "'ชั่วโมงเร่งด่วน' bedeutet 'Stoßzeit', wenn viele Menschen reisen.",
        "explanation_en": "'ชั่วโมงเร่งด่วน' means 'rush hour' when many people travel."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'สมัยก่อนมีแต่รถเมล์ และแท็กซี่'",
        "question_en": "Translate: 'สมัยก่อนมีแต่รถเมล์ และแท็กซี่'",
        "options": [
          {
            "text_de": "Früher gab es nur Busse und Taxis",
            "text_en": "In the old days there were only buses and taxis",
            "correct": true
          },
          {
            "text_de": "Heutzutage gibt es nur Busse und Taxis",
            "text_en": "These days there are only buses and taxis",
            "correct": false
          },
          {
            "text_de": "Es wird nur Busse und Taxis geben",
            "text_en": "There will only be buses and taxis",
            "correct": false
          },
          {
            "text_de": "Es gibt viele Busse und Taxis",
            "text_en": "There are many buses and taxis",
            "correct": false
          }
        ],
        "explanation_de": "'สมัยก่อน' bedeutet 'früher', 'มีแต่' bedeutet 'es gab nur'.",
        "explanation_en": "'สมัยก่อน' means 'in the old days', 'มีแต่' means 'there were only'."
      },
      {
        "type": "C",
        "question_de": "Welche Struktur wird verwendet: 'ค่าครองชีพแพงขึ้น'?",
        "question_en": "What structure is used in: 'ค่าครองชีพแพงขึ้น'?",
        "options": [
          {
            "text_de": "adjective + ขึ้น",
            "text_en": "adjective + ขึ้น",
            "correct": true
          },
          {
            "text_de": "adjective + น้อยลง",
            "text_en": "adjective + น้อยลง",
            "correct": false
          },
          {
            "text_de": "subject + verb + น้อยลง",
            "text_en": "subject + verb + น้อยลง",
            "correct": false
          },
          {
            "text_de": "ถึงแม้ว่า…แต่…",
            "text_en": "ถึงแม้ว่า…แต่…",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist die 'adjective + ขึ้น' Struktur für 'mehr/teurer/größer geworden'.",
        "explanation_en": "This is the 'adjective + ขึ้น' structure meaning 'has become more/expensive/bigger'."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'เดือนนี้ฉันใช้เงิน ___ เพราะไม่ซื้อของออนไลน์'",
        "question_en": "Fill in the blank: 'เดือนนี้ฉันใช้เงิน ___ เพราะไม่ซื้อของออนไลน์'",
        "options": [
          {
            "text_de": "น้อยลง",
            "text_en": "less",
            "correct": true
          },
          {
            "text_de": "มากขึ้น",
            "text_en": "more",
            "correct": false
          },
          {
            "text_de": "เท่าเดิม",
            "text_en": "the same",
            "correct": false
          },
          {
            "text_de": "มากมาย",
            "text_en": "a lot",
            "correct": false
          }
        ],
        "explanation_de": "Die 'adjective + น้อยลง' Struktur wird verwendet für 'weniger geworden'.",
        "explanation_en": "The 'adjective + น้อยลง' structure is used for 'has become less'."
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'เปรียบเทียบ'?",
        "question_en": "What does 'เปรียบเทียบ' mean?",
        "options": [
          {
            "text_de": "trennen",
            "text_en": "to separate",
            "correct": false
          },
          {
            "text_de": "vergleichen",
            "text_en": "to compare",
            "correct": true
          },
          {
            "text_de": "tauschen",
            "text_en": "to exchange",
            "correct": false
          },
          {
            "text_de": "verbessern",
            "text_en": "to improve",
            "correct": false
          }
        ],
        "explanation_de": "'เปรียบเทียบ' bedeutet 'vergleichen'.",
        "explanation_en": "'เปรียบเทียบ' means 'to compare'."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'ถ้าเปรียบเทียบกับสมัยก่อน รถติดน้อยลง'",
        "question_en": "Translate: 'ถ้าเปรียบเทียบกับสมัยก่อน รถติดน้อยลง'",
        "options": [
          {
            "text_de": "Wenn man mit früher vergleicht, gibt es weniger Stau",
            "text_en": "If you compare with the old days, there is less traffic",
            "correct": true
          },
          {
            "text_de": "Früher gab es viel mehr Stau",
            "text_en": "In the old days there was much more traffic",
            "correct": false
          },
          {
            "text_de": "Jetzt gibt es mehr Stau als je zuvor",
            "text_en": "Now there is more traffic than ever",
            "correct": false
          },
          {
            "text_de": "Der Stau ändert sich immer wieder",
            "text_en": "The traffic is always changing",
            "correct": false
          }
        ],
        "explanation_de": "'ถ้าเปรียบเทียบ' bedeutet 'wenn man vergleicht', 'รถติดน้อยลง' bedeutet 'es gibt weniger Stau'.",
        "explanation_en": "'ถ้าเปรียบเทียบ' means 'if you compare', 'รถติดน้อยลง' means 'there is less traffic'."
      },
      {
        "type": "D",
        "question_de": "Welche Aussage ist wahr nach dem Text?",
        "question_en": "Which statement is true according to the text?",
        "options": [
          {
            "text_de": "Früher gab es keine Busse in Bangkok",
            "text_en": "There were no buses in Bangkok before",
            "correct": false
          },
          {
            "text_de": "Chris ist glücklich, dass die U-Bahn existiert",
            "text_en": "Chris is happy that the underground exists",
            "correct": true
          },
          {
            "text_de": "Die Lebenshaltungskosten sind billiger geworden",
            "text_en": "Living costs have become cheaper",
            "correct": false
          },
          {
            "text_de": "Es gibt weniger Motorräder heute",
            "text_en": "There are fewer motorcycles today",
            "correct": false
          }
        ],
        "explanation_de": "Chris sagt, dass er glücklich war, nach Bangkok zu kommen, als es bereits Skytrain und U-Bahn gab.",
        "explanation_en": "Chris says he was lucky to come to Bangkok when the sky train and underground already existed."
      },
      {
        "type": "C",
        "question_de": "Was ist die Bedeutung von 'ยังไม่เคย'?",
        "question_en": "What is the meaning of 'ยังไม่เคย'?",
        "options": [
          {
            "text_de": "ist Erfahrung gemacht",
            "text_en": "has experience",
            "correct": false
          },
          {
            "text_de": "hat noch nie Erfahrung gemacht",
            "text_en": "has never experienced",
            "correct": true
          },
          {
            "text_de": "wird Erfahrung machen",
            "text_en": "will experience",
            "correct": false
          },
          {
            "text_de": "hatte früher Erfahrung",
            "text_en": "had experience before",
            "correct": false
          }
        ],
        "explanation_de": "'ยังไม่เคย' bedeutet 'hat noch keine Erfahrung' oder 'hat noch nie erlebt'.",
        "explanation_en": "'ยังไม่เคย' means 'still has not experienced' or 'has never done'."
      },
      {
        "type": "A",
        "question_de": "Was ist ein 'มอเตอร์ไซค์รับจ้าง'?",
        "question_en": "What is a 'มอเตอร์ไซค์รับจ้าง'?",
        "options": [
          {
            "text_de": "Motorrad zum Verkauf",
            "text_en": "motorcycle for sale",
            "correct": false
          },
          {
            "text_de": "Motorradtaxi",
            "text_en": "motorcycle taxi",
            "correct": true
          },
          {
            "text_de": "Motorrad für den Rennsport",
            "text_en": "racing motorcycle",
            "correct": false
          },
          {
            "text_de": "Motorradwerkstatt",
            "text_en": "motorcycle repair shop",
            "correct": false
          }
        ],
        "explanation_de": "'มอเตอร์ไซค์รับจ้าง' ist ein Motorradtaxi, das man mieten kann.",
        "explanation_en": "'มอเตอร์ไซค์รับจ้าง' is a motorcycle taxi that you can hire."
      }
    ]
  },
  {
    "id": 8,
    "thai_title": "ไปเที่ยววัด",
    "english_title": "Visiting Temples",
    "german_title": "Tempel besuchen",
    "emoji": "🙏",
    "vocabulary": [
      {
        "thai": "ประมาณ",
        "romanization": "pra-maan",
        "english": "approximately",
        "german": "ungefähr"
      },
      {
        "thai": "ความสําคัญ",
        "romanization": "khwaam-sam-khung",
        "english": "importance",
        "german": "Bedeutung"
      },
      {
        "thai": "ทันสมัย",
        "romanization": "than-sa-mai",
        "english": "modern",
        "german": "modern"
      },
      {
        "thai": "แต่งตัว",
        "romanization": "dtaeng-dtua",
        "english": "to dress",
        "german": "sich anziehen"
      },
      {
        "thai": "สุภาพ",
        "romanization": "su-phaap",
        "english": "polite",
        "german": "höflich"
      },
      {
        "thai": "เพื่อ",
        "romanization": "phûea",
        "english": "for",
        "german": "um…zu"
      },
      {
        "thai": "ให้เกียรติ",
        "romanization": "hâi-kian",
        "english": "to provide honor/respect",
        "german": "Ehre erweisen"
      },
      {
        "thai": "พระ",
        "romanization": "phra",
        "english": "Buddhist monk",
        "german": "Mönch"
      },
      {
        "thai": "ทําบุญ",
        "romanization": "tham-bun",
        "english": "to make a merit",
        "german": "Verdienst machen"
      },
      {
        "thai": "ตกใจ",
        "romanization": "dtòk-jai",
        "english": "be surprised",
        "german": "überraschen"
      },
      {
        "thai": "ล้าง",
        "romanization": "lâang",
        "english": "to wash",
        "german": "waschen"
      },
      {
        "thai": "ปล่อย",
        "romanization": "plòi",
        "english": "to let",
        "german": "freilassen"
      },
      {
        "thai": "วันที่",
        "romanization": "wan-thii",
        "english": "date",
        "german": "Datum"
      },
      {
        "thai": "เรื่องแปลก",
        "romanization": "rûang-plàek",
        "english": "strange thing",
        "german": "seltsam"
      },
      {
        "thai": "สบายใจ",
        "romanization": "sa-baai-jai",
        "english": "feel peaceful/relaxed",
        "german": "sich wohlfühlen"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ฉันเป็นนักเขียนสารคดี ตอนนี้ฉันกําลังเขียนเกี่ยวกับวัดที่เมืองไทย",
          "english": "I am a documentary writer. Now I am writing about temples in Thailand.",
          "german": "Ich bin eine Dokumentarschriftstellerin. Jetzt schreibe ich über Tempel in Thailand."
        },
        {
          "thai": "ประเทศไทยมีวัดประมาณ 42,000 แห่ง",
          "english": "Thailand has approximately 42,000 temples.",
          "german": "Thailand hat ungefähr 42.000 Tempel."
        },
        {
          "thai": "ทุกครั้งที่ไปเที่ยววัด ฉันจะแต่งตัวสุภาพ เพื่อให้เกียรติพระ",
          "english": "Every time I visit a temple, I dress politely to show respect to the monks.",
          "german": "Jedes Mal, wenn ich einen Tempel besuche, ziehe ich mich höflich an, um den Mönchen Ehre zu erweisen."
        },
        {
          "thai": "ส่วนใหญ่ตอบว่ามาทําบุญ มาไหว้พระ",
          "english": "Most answered that they come to make merit and pay respect to the monks.",
          "german": "Die meisten antworteten, dass sie kommen, um Verdienst zu machen und den Mönchen zu respektieren."
        },
        {
          "thai": "วัดคือที่ที่ทําให้เราสบายใจ",
          "english": "A temple is a place that makes us feel at peace.",
          "german": "Ein Tempel ist ein Ort, an dem wir uns wohlfühlen."
        }
      ]
    },
    "structures": [
      {
        "pattern": "Subject do something เพื่อ + purpose",
        "meaning": "Subject do something for + purpose",
        "german": "Subjekt tut etwas um…zu + Zweck",
        "examples": [
          {
            "thai": "ฉันชอบแต่งตัวสวยๆ เพื่อความสบายใจ",
            "english": "I like dressing beautifully for peace of mind.",
            "german": "Ich mag es, mich schön anzuziehen, um mich wohl zu fühlen."
          },
          {
            "thai": "เราใช้แอปพลิเคชันซื้อของออนไลน์เพื่อความสะดวก",
            "english": "We use applications to shop online for convenience.",
            "german": "Wir verwenden Anwendungen zum Online-Einkaufen, um Bequemlichkeit zu erreichen."
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "คุณเคยไปเที่ยววัดไหม เพื่อทําอะไร"
        },
        {
          "question": "วัดในประเทศของคุณมีอะไรพิเศษไหม"
        },
        {
          "question": "คุณแต่งตัวไปวัดอย่างไร"
        },
        {
          "question": "คุณคิดว่าเพราะอะไรคนจึงไปวัด"
        },
        {
          "question": "คุณทําบุญไหม ที่ไหน"
        },
        {
          "question": "ประเทศของคุณมีพระหรือนักบวชไหม"
        },
        {
          "question": "คุณคิดว่าวัดสําคัญต่อประเทศไทยไหม เพราะอะไร"
        },
        {
          "question": "กิจกรรมแปลกๆ ที่คนไปทําที่วัดคืออะไร"
        },
        {
          "question": "คุณคิดว่าวัดควรจะทันสมัยหรือเก่าๆ ดี"
        },
        {
          "question": "คุณรู้สึกสบายใจที่ไหน ในเมืองของคุณ"
        }
      ],
      "pronunciation": {
        "word": "คุณ… มันไม่ใช่เรื่องแปลก",
        "meaning": "This is not a strange thing for you."
      },
      "translation": [
        {
          "english": "Where can I make a merit in Bangkok?",
          "thai": "ฉันสามารถทําบุญที่ไหนในกรุงเทพฯ"
        },
        {
          "english": "I feel more relaxing after I went shopping.",
          "thai": "ฉันรู้สึกสบายใจมากขึ้นหลังจากไปเลือกซื้อ"
        },
        {
          "english": "I was very surprised!",
          "thai": "ฉันตกใจมาก"
        },
        {
          "english": "I won't say this one is strange, but I will say this one is interesting.",
          "thai": "ฉันจะไม่บอกว่านี่แปลก แต่ฉันจะบอกว่านี่น่าสนใจ"
        },
        {
          "english": "We must wash hands before eating and after using toilet.",
          "thai": "เราต้องล้างมือก่อนกินและหลังจากใช้ห้องน้ํา"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'ทําบุญ'?",
        "question_en": "What does 'ทําบุญ' mean?",
        "options": [
          {
            "text_de": "zu beten",
            "text_en": "to pray",
            "correct": false
          },
          {
            "text_de": "Verdienst machen",
            "text_en": "to make a merit",
            "correct": true
          },
          {
            "text_de": "zu spenden",
            "text_en": "to donate",
            "correct": false
          },
          {
            "text_de": "zu meditieren",
            "text_en": "to meditate",
            "correct": false
          }
        ],
        "explanation_de": "'ทําบุญ' bedeutet 'Verdienst machen' - eine buddhistische Aktivität.",
        "explanation_en": "'ทําบุญ' means 'to make a merit' - a Buddhist activity."
      },
      {
        "type": "A",
        "question_de": "Was ist 'ประมาณ 42,000'?",
        "question_en": "What does 'ประมาณ 42,000' mean?",
        "options": [
          {
            "text_de": "genau 42.000",
            "text_en": "exactly 42,000",
            "correct": false
          },
          {
            "text_de": "ungefähr 42.000",
            "text_en": "approximately 42,000",
            "correct": true
          },
          {
            "text_de": "weniger als 42.000",
            "text_en": "less than 42,000",
            "correct": false
          },
          {
            "text_de": "mehr als 42.000",
            "text_en": "more than 42,000",
            "correct": false
          }
        ],
        "explanation_de": "'ประมาณ' bedeutet 'ungefähr' oder 'annähernd'.",
        "explanation_en": "'ประมาณ' means 'approximately' or 'about'."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'ฉันแต่งตัวสุภาพ เพื่อให้เกียรติพระ'",
        "question_en": "Translate: 'ฉันแต่งตัวสุภาพ เพื่อให้เกียรติพระ'",
        "options": [
          {
            "text_de": "Ich ziehe mich höflich an, um den Mönchen Ehre zu erweisen",
            "text_en": "I dress politely to show respect to the monks",
            "correct": true
          },
          {
            "text_de": "Ich ziehe mich schön an, um bemerkt zu werden",
            "text_en": "I dress beautifully to be noticed",
            "correct": false
          },
          {
            "text_de": "Ich ziehe mich teuer an für die Mönche",
            "text_en": "I dress expensively for the monks",
            "correct": false
          },
          {
            "text_de": "Ich ziehe mich warm an in der Nähe der Mönche",
            "text_en": "I dress warmly near the monks",
            "correct": false
          }
        ],
        "explanation_de": "'สุภาพ' bedeutet 'höflich', 'ให้เกียรติ' bedeutet 'Respekt zeigen/Ehre erweisen'.",
        "explanation_en": "'สุภาพ' means 'polite', 'ให้เกียรติ' means 'to show respect/honor'."
      },
      {
        "type": "C",
        "question_de": "Welche Struktur wird verwendet: 'แต่งตัวสุภาพ เพื่อให้เกียรติพระ'?",
        "question_en": "What structure is used in: 'แต่งตัวสุภาพ เพื่อให้เกียรติพระ'?",
        "options": [
          {
            "text_de": "subject + verb + purpose mit เพื่อ",
            "text_en": "subject + verb + purpose with เพื่อ",
            "correct": true
          },
          {
            "text_de": "ถึงแม้ว่า…แต่…",
            "text_en": "ถึงแม้ว่า…แต่…",
            "correct": false
          },
          {
            "text_de": "adjective + ขึ้น",
            "text_en": "adjective + ขึ้น",
            "correct": false
          },
          {
            "text_de": "negative form with ไม่",
            "text_en": "negative form with ไม่",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist die 'เพื่อ + Zweck' Struktur für den Grund einer Aktion.",
        "explanation_en": "This is the 'เพื่อ + purpose' structure for expressing the reason of an action."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'ประเทศไทยมีวัด _____ แห่ง'",
        "question_en": "Fill in the blank: 'ประเทศไทยมีวัด _____ แห่ง'",
        "options": [
          {
            "text_de": "ประมาณ 42,000",
            "text_en": "approximately 42,000",
            "correct": true
          },
          {
            "text_de": "ประมาณ 24,000",
            "text_en": "approximately 24,000",
            "correct": false
          },
          {
            "text_de": "ประมาณ 420,000",
            "text_en": "approximately 420,000",
            "correct": false
          },
          {
            "text_de": "ประมาณ 4,200",
            "text_en": "approximately 4,200",
            "correct": false
          }
        ],
        "explanation_de": "Im Text heißt es: 'ประเทศไทยมีวัดประมาณ 42,000 แห่ง'",
        "explanation_en": "The text says: 'Thailand has approximately 42,000 temples.'"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'ตกใจ'?",
        "question_en": "What does 'ตกใจ' mean?",
        "options": [
          {
            "text_de": "fallen",
            "text_en": "to fall",
            "correct": false
          },
          {
            "text_de": "überrascht sein",
            "text_en": "to be surprised",
            "correct": true
          },
          {
            "text_de": "erschrocken sein",
            "text_en": "to be scared",
            "correct": false
          },
          {
            "text_de": "verärgert sein",
            "text_en": "to be angry",
            "correct": false
          }
        ],
        "explanation_de": "'ตกใจ' bedeutet 'überrascht oder schockiert sein'.",
        "explanation_en": "'ตกใจ' means 'to be surprised or shocked'."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'วัดคือที่ที่ทําให้เราสบายใจ'",
        "question_en": "Translate: 'วัดคือที่ที่ทําให้เราสบายใจ'",
        "options": [
          {
            "text_de": "Ein Tempel ist ein Ort, der uns glücklich macht",
            "text_en": "A temple is a place that makes us happy",
            "correct": false
          },
          {
            "text_de": "Ein Tempel ist ein Ort, wo wir uns wohlfühlen",
            "text_en": "A temple is a place where we feel at peace",
            "correct": true
          },
          {
            "text_de": "Ein Tempel ist ein Ort für altgewordene Menschen",
            "text_en": "A temple is a place for old people",
            "correct": false
          },
          {
            "text_de": "Ein Tempel ist ein Ort zum Lernen",
            "text_en": "A temple is a place to learn",
            "correct": false
          }
        ],
        "explanation_de": "'สบายใจ' bedeutet 'sich wohlfühlen, Ruhe und Frieden spüren'.",
        "explanation_en": "'สบายใจ' means 'to feel at peace, feel relaxed'."
      },
      {
        "type": "D",
        "question_de": "Welche Aussage ist wahr nach dem Text?",
        "question_en": "Which statement is true according to the text?",
        "options": [
          {
            "text_de": "Es gibt in Thailand nur moderne Tempel",
            "text_en": "There are only modern temples in Thailand",
            "correct": false
          },
          {
            "text_de": "Emma überrascht es, dass Menschen auch andere Dinge als Verdienst machen im Tempel tun",
            "text_en": "Emma is surprised that people do other things besides making merit at the temple",
            "correct": true
          },
          {
            "text_de": "Emma glaubt, dass Tempel seltsam sind",
            "text_en": "Emma believes temples are strange",
            "correct": false
          },
          {
            "text_de": "Alle Tempel in Thailand sind alt",
            "text_en": "All temples in Thailand are old",
            "correct": false
          }
        ],
        "explanation_de": "Emma erzählt, dass einige Aktivitäten im Tempel sie überrascht haben, wie Fische freilassen oder Wünsche äußern.",
        "explanation_en": "Emma tells that some activities at temples surprised her, such as releasing fish or making wishes."
      },
      {
        "type": "C",
        "question_de": "Was ist 'เรื่องแปลก'?",
        "question_en": "What is 'เรื่องแปลก'?",
        "options": [
          {
            "text_de": "eine alte Geschichte",
            "text_en": "an old story",
            "correct": false
          },
          {
            "text_de": "eine seltsame Sache",
            "text_en": "a strange thing",
            "correct": true
          },
          {
            "text_de": "eine normale Sache",
            "text_en": "a normal thing",
            "correct": false
          },
          {
            "text_de": "eine schöne Geschichte",
            "text_en": "a beautiful story",
            "correct": false
          }
        ],
        "explanation_de": "'เรื่อง' bedeutet 'Sache/Geschichte', 'แปลก' bedeutet 'seltsam/eigenartig'.",
        "explanation_en": "'เรื่อง' means 'thing/story', 'แปลก' means 'strange/unusual'."
      },
      {
        "type": "A",
        "question_de": "Was ist 'พระ'?",
        "question_en": "What is 'พระ'?",
        "options": [
          {
            "text_de": "Priester",
            "text_en": "priest",
            "correct": false
          },
          {
            "text_de": "Buddhischer Mönch",
            "text_en": "Buddhist monk",
            "correct": true
          },
          {
            "text_de": "Nonne",
            "text_en": "nun",
            "correct": false
          },
          {
            "text_de": "Lehrer",
            "text_en": "teacher",
            "correct": false
          }
        ],
        "explanation_de": "'พระ' ist der buddhistische Mönch in Thailand.",
        "explanation_en": "'พระ' is the Buddhist monk in Thailand."
      }
    ]
  },
  {
    "id": 9,
    "thai_title": "สัตว์เลี้ยง",
    "english_title": "Pets",
    "german_title": "Haustiere",
    "emoji": "🐱",
    "vocabulary": [
      {
        "thai": "จริงๆ แล้ว",
        "romanization": "jing-jing-lâae",
        "english": "actually",
        "german": "eigentlich"
      },
      {
        "thai": "แมวจรจัด",
        "romanization": "maaeo-jon-jat",
        "english": "stray cat",
        "german": "streunende Katze"
      },
      {
        "thai": "ดูเหมือน",
        "romanization": "duu-mǔan",
        "english": "seem",
        "german": "scheinen"
      },
      {
        "thai": "กําลังจะ",
        "romanization": "gam-lang-jà",
        "english": "about to",
        "german": "dabei sein zu"
      },
      {
        "thai": "พา–เอา",
        "romanization": "paa–ao",
        "english": "to bring, to take",
        "german": "bringen/nehmen"
      },
      {
        "thai": "สัตวแพทย์",
        "romanization": "sat-wá-phâet",
        "english": "veterinarian",
        "german": "Tierarzt"
      },
      {
        "thai": "หน้าปากซอย",
        "romanization": "nâa-bpàak-sǒi",
        "english": "at the mouth of Soi",
        "german": "Eingang der Soi"
      },
      {
        "thai": "ดูแล",
        "romanization": "duu-aaen",
        "english": "to look after",
        "german": "sich kümmern"
      },
      {
        "thai": "แข็งแรง",
        "romanization": "khǎeng-raeng",
        "english": "strong",
        "german": "stark/gesund"
      },
      {
        "thai": "ได้รับ",
        "romanization": "dâi-ráp",
        "english": "receive",
        "german": "erhalten"
      },
      {
        "thai": "ครบ",
        "romanization": "khrop",
        "english": "complete",
        "german": "vollständig"
      },
      {
        "thai": "ทั้งตัว",
        "romanization": "thâng-dtua",
        "english": "whole body",
        "german": "ganzer Körper"
      },
      {
        "thai": "ยาม",
        "romanization": "yaam",
        "english": "a security guard",
        "german": "Wachmann"
      },
      {
        "thai": "แม่บ้าน",
        "romanization": "mâae-bâan",
        "english": "a cleaner",
        "german": "Reinigungskraft"
      },
      {
        "thai": "โชคร้าย–โชคดี",
        "romanization": "chôok-râai–chôok-dii",
        "english": "bad luck – good luck",
        "german": "Pech/Glück"
      },
      {
        "thai": "ไม่ถือ",
        "romanization": "mâi-thǔu",
        "english": "not take it seriously",
        "german": "nicht ernst nehmen"
      },
      {
        "thai": "เลี้ยงสัตว์",
        "romanization": "líang-sàt",
        "english": "to have a pet",
        "german": "Haustier halten"
      },
      {
        "thai": "อนุญาต",
        "romanization": "a-nu-yaat",
        "english": "to allow",
        "german": "erlauben"
      },
      {
        "thai": "ตอนแรก",
        "romanization": "dton-raek",
        "english": "at first",
        "german": "am Anfang"
      },
      {
        "thai": "คลินิก",
        "romanization": "khli-nik",
        "english": "clinic",
        "german": "Klinik"
      },
      {
        "thai": "วัคซีน",
        "romanization": "wák-sîin",
        "english": "vaccine",
        "german": "Impfstoff"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ที่บ้านฉันมีแมวหนึ่งตัว ชื่อโมโม่",
          "english": "I have one cat at home named Momo.",
          "german": "Ich habe zu Hause eine Katze namens Momo."
        },
        {
          "thai": "จริงๆ แล้วโมโม่เป็นแมวจรจัด",
          "english": "Actually, Momo is a stray cat.",
          "german": "Eigentlich ist Momo eine streunende Katze."
        },
        {
          "thai": "ฉันเห็นมันนอนอยู่ที่หน้าคอนโดฯ ตัวมันเล็กมาก ผอม สกปรก",
          "english": "I saw it lying in front of the condo. It was very small, skinny and dirty.",
          "german": "Ich sah es vor dem Kondo liegen. Es war sehr klein, dünn und schmutzig."
        },
        {
          "thai": "ดูเหมือนกําลังจะตาย",
          "english": "It seemed like it was about to die.",
          "german": "Es schien, als würde es gerade sterben."
        },
        {
          "thai": "ฉันก็เลยพามันไปที่คลินิกสัตวแพทย์หน้าปากซอย",
          "english": "So I took it to the veterinary clinic at the mouth of the soi.",
          "german": "Also brachte ich es in die Tierklinik am Eingang der Soi."
        }
      ]
    },
    "structures": [
      {
        "pattern": "Subject อนุญาต ให้ + someone do something",
        "meaning": "Subject allow + someone do something",
        "german": "Subjekt erlaubt + jemandem, etwas zu tun",
        "examples": [
          {
            "thai": "คอนโดฯ ส่วนใหญ่ไม่อนุญาตให้(เรา)เลี้ยงสัตว์",
            "english": "Most condos don't allow (us) to have pets.",
            "german": "Die meisten Kondos erlauben nicht, dass wir Haustiere halten."
          },
          {
            "thai": "สามีอนุญาตให้ฉันใช้เงินจากบัตรเครดิตของเขา",
            "english": "My husband allows me to use money from his credit card.",
            "german": "Mein Mann erlaubt mir, Geld von seiner Kreditkarte zu verwenden."
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "คุณเลี้ยงสัตว์ไหม เลี้ยงสัตว์ประเภทไหน"
        },
        {
          "question": "ทําไมคุณจึงเลือกเลี้ยงสัตว์นั้น"
        },
        {
          "question": "คุณเลี้ยงสัตว์ที่ไหน ที่บ้านหรือที่ไหน"
        },
        {
          "question": "คุณรักสัตว์เลี้ยงของคุณไหม"
        },
        {
          "question": "คุณเคยเห็นแมวจรจัดไหม ที่ไหน"
        },
        {
          "question": "คุณจะช่วยแมวจรจัดไหมถ้าเห็น"
        },
        {
          "question": "การเลี้ยงสัตว์มีข้อดีอะไรบ้าง"
        },
        {
          "question": "การเลี้ยงสัตว์มีข้อเสียอะไรบ้าง"
        },
        {
          "question": "คุณเชื่อเรื่องโชคร้ายเรื่องสัตว์ไหม"
        },
        {
          "question": "คุณเคยพาสัตว์ไปหมอสัตวแพทย์ไหม เมื่อไหร่"
        }
      ],
      "pronunciation": {
        "word": "ขอบคุณนะที่เอาแมวมาเลี้ยง",
        "meaning": "Thank you for bringing the cat to raise."
      },
      "translation": [
        {
          "english": "Now we have a dog at home.",
          "thai": "ตอนนี้เรามีหมาที่บ้าน"
        },
        {
          "english": "Actually, I don't want to have pets, but my son took a stray dog back home.",
          "thai": "จริงๆ แล้ว ฉันไม่อยากมีสัตว์เลี้ยง แต่ลูกชายของฉันเอาหมาจรจัดกลับมา"
        },
        {
          "english": "I allowed my son to have the dog.",
          "thai": "ฉันอนุญาตให้ลูกชายเลี้ยงหมา"
        },
        {
          "english": "He takes care of the dog very well and will bring it to see a veterinarian on Saturday.",
          "thai": "เขาดูแลหมาได้ดีมาก และจะพามันไปหมอสัตวแพทย์ในวันเสาร์"
        },
        {
          "english": "The dog's name is Lucky.",
          "thai": "ชื่อหมาคือ โชคดี"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'แมวจรจัด'?",
        "question_en": "What does 'แมวจรจัด' mean?",
        "options": [
          {
            "text_de": "Hauskatze",
            "text_en": "house cat",
            "correct": false
          },
          {
            "text_de": "streunende Katze",
            "text_en": "stray cat",
            "correct": true
          },
          {
            "text_de": "wilde Katze",
            "text_en": "wild cat",
            "correct": false
          },
          {
            "text_de": "schwarze Katze",
            "text_en": "black cat",
            "correct": false
          }
        ],
        "explanation_de": "'แมว' = Katze, 'จรจัด' = umherstreunen, streunend",
        "explanation_en": "'แมว' = cat, 'จรจัด' = wandering, stray"
      },
      {
        "type": "A",
        "question_de": "Was ist ein 'สัตวแพทย์'?",
        "question_en": "What is a 'สัตวแพทย์'?",
        "options": [
          {
            "text_de": "Zahnarzt",
            "text_en": "dentist",
            "correct": false
          },
          {
            "text_de": "Arzt",
            "text_en": "doctor",
            "correct": false
          },
          {
            "text_de": "Tierarzt",
            "text_en": "veterinarian",
            "correct": true
          },
          {
            "text_de": "Chirurg",
            "text_en": "surgeon",
            "correct": false
          }
        ],
        "explanation_de": "'สัตว์' = Tier, 'แพทย์' = Arzt, 'สัตวแพทย์' = Tierarzt",
        "explanation_en": "'สัตว์' = animal, 'แพทย์' = doctor, 'สัตวแพทย์' = veterinarian"
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'โมโม่เป็นแมวดําทั้งตัว'",
        "question_en": "Translate: 'โมโม่เป็นแมวดําทั้งตัว'",
        "options": [
          {
            "text_de": "Momo ist überall schwarz",
            "text_en": "Momo is black all over",
            "correct": true
          },
          {
            "text_de": "Momo ist komplett schwarz",
            "text_en": "Momo is completely black",
            "correct": false
          },
          {
            "text_de": "Momo hat einen schwarzen ganzen Körper",
            "text_en": "Momo has a black whole body",
            "correct": false
          },
          {
            "text_de": "Momo ist ein schwarzer ganzer Körper",
            "text_en": "Momo is a black whole body",
            "correct": false
          }
        ],
        "explanation_de": "'ทั้งตัว' bedeutet 'ganzer Körper' oder 'überall am Körper'.",
        "explanation_en": "'ทั้งตัว' means 'whole body' or 'all over the body'."
      },
      {
        "type": "C",
        "question_de": "Welche Struktur wird verwendet: 'คอนโดฯ อนุญาตให้เลี้ยงสัตว์'?",
        "question_en": "What structure is used in: 'คอนโดฯ อนุญาตให้เลี้ยงสัตว์'?",
        "options": [
          {
            "text_de": "subject + อนุญาต + ให้ + someone do something",
            "text_en": "subject + อนุญาต + ให้ + someone do something",
            "correct": true
          },
          {
            "text_de": "subject + verb + object",
            "text_en": "subject + verb + object",
            "correct": false
          },
          {
            "text_de": "ถึงแม้ว่า…แต่…",
            "text_en": "ถึงแม้ว่า…แต่…",
            "correct": false
          },
          {
            "text_de": "adjective + ขึ้น",
            "text_en": "adjective + ขึ้น",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist die 'อนุญาต + ให้' Struktur für 'erlauben'.",
        "explanation_en": "This is the 'อนุญาต + ให้' structure meaning 'to allow'."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'ฉันเห็นแมว _____ อยู่ที่หน้าคอนโดฯ'",
        "question_en": "Fill in the blank: 'ฉันเห็นแมว _____ อยู่ที่หน้าคอนโดฯ'",
        "options": [
          {
            "text_de": "นอน",
            "text_en": "lying",
            "correct": true
          },
          {
            "text_de": "วิ่ง",
            "text_en": "running",
            "correct": false
          },
          {
            "text_de": "นั่ง",
            "text_en": "sitting",
            "correct": false
          },
          {
            "text_de": "เดิน",
            "text_en": "walking",
            "correct": false
          }
        ],
        "explanation_de": "Im Text sagt Emma: 'ฉันเห็นมันนอนอยู่ที่หน้าคอนโดฯ'",
        "explanation_en": "In the text Emma says: 'I saw it lying in front of the condo.'"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'จริงๆ แล้ว'?",
        "question_en": "What does 'จริงๆ แล้ว' mean?",
        "options": [
          {
            "text_de": "für eine lange Zeit",
            "text_en": "for a long time",
            "correct": false
          },
          {
            "text_de": "eigentlich",
            "text_en": "actually",
            "correct": true
          },
          {
            "text_de": "in Wirklichkeit",
            "text_en": "in fact",
            "correct": false
          },
          {
            "text_de": "immer noch",
            "text_en": "still",
            "correct": false
          }
        ],
        "explanation_de": "'จริงๆ แล้ว' wird verwendet, um etwas zu korrigieren oder die Wahrheit zu sagen.",
        "explanation_en": "'จริงๆ แล้ว' is used to correct something or tell the truth."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'ฉันเลี้ยงแมวเพราะคอนโดฯ อนุญาต'",
        "question_en": "Translate: 'ฉันเลี้ยงแมวเพราะคอนโดฯ อนุญาต'",
        "options": [
          {
            "text_de": "Ich halte eine Katze, weil das Kondo erlaubt ist",
            "text_en": "I have a cat because the condo allows it",
            "correct": true
          },
          {
            "text_de": "Ich halte eine Katze und das Kondo nicht",
            "text_en": "I have a cat and the condo doesn't",
            "correct": false
          },
          {
            "text_de": "Das Kondo erlaubt mir, dass ich eine Katze habe",
            "text_en": "The condo allows me to have a cat",
            "correct": false
          },
          {
            "text_de": "Ich möchte eine Katze haben, aber das Kondo erlaubt nicht",
            "text_en": "I want to have a cat but the condo doesn't allow",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist eine einfache Ursache-Wirkungs-Aussage mit 'เพราะ' (weil).",
        "explanation_en": "This is a simple cause-effect statement with 'เพราะ' (because)."
      },
      {
        "type": "D",
        "question_de": "Welche Aussage ist wahr nach dem Text?",
        "question_en": "Which statement is true according to the text?",
        "options": [
          {
            "text_de": "Chris wollte keine Katze haben, aber jetzt mag er Momo",
            "text_en": "Chris didn't want a cat, but now he likes Momo",
            "correct": true
          },
          {
            "text_de": "Chris hat die Katze zuerst gefunden",
            "text_en": "Chris found the cat first",
            "correct": false
          },
          {
            "text_de": "Momo ist eine moderne Katze",
            "text_en": "Momo is a modern cat",
            "correct": false
          },
          {
            "text_de": "Emma mag keine Tiere",
            "text_en": "Emma doesn't like animals",
            "correct": false
          }
        ],
        "explanation_de": "Im Text sagt Emma, dass Chris anfangs die Katze nicht wollte, aber jetzt spielt und spricht er täglich mit Momo.",
        "explanation_en": "In the text Emma says Chris didn't want the cat at first, but now he plays and talks with Momo every day."
      },
      {
        "type": "C",
        "question_de": "Was bedeutet 'แข็งแรง'?",
        "question_en": "What does 'แข็งแรง' mean?",
        "options": [
          {
            "text_de": "dünn",
            "text_en": "thin",
            "correct": false
          },
          {
            "text_de": "stark/gesund",
            "text_en": "strong/healthy",
            "correct": true
          },
          {
            "text_de": "schwach",
            "text_en": "weak",
            "correct": false
          },
          {
            "text_de": "schnell",
            "text_en": "fast",
            "correct": false
          }
        ],
        "explanation_de": "'แข็งแรง' bedeutet 'stark' oder 'gesund und kräftig'.",
        "explanation_en": "'แข็งแรง' means 'strong' or 'healthy and robust'."
      },
      {
        "type": "A",
        "question_de": "Was ist 'วัคซีน'?",
        "question_en": "What is 'วัคซีน'?",
        "options": [
          {
            "text_de": "Medikament",
            "text_en": "medicine",
            "correct": false
          },
          {
            "text_de": "Impfstoff",
            "text_en": "vaccine",
            "correct": true
          },
          {
            "text_de": "Verband",
            "text_en": "bandage",
            "correct": false
          },
          {
            "text_de": "Pflaster",
            "text_en": "plaster",
            "correct": false
          }
        ],
        "explanation_de": "'วัคซีน' ist das englische Wort 'vaccine' auf Thai geschrieben.",
        "explanation_en": "'วัคซีน' is the English word 'vaccine' written in Thai."
      }
    ]
  },
  {
    "id": 10,
    "thai_title": "เพื่อนบ้าน",
    "english_title": "Neighbors",
    "german_title": "Nachbarn",
    "emoji": "👥",
    "vocabulary": [
      {
        "thai": "หา",
        "romanization": "hǎa",
        "english": "look for, search",
        "german": "suchen"
      },
      {
        "thai": "แถว",
        "romanization": "thǎew",
        "english": "around (area)",
        "german": "Gegend"
      },
      {
        "thai": "เงียบสงบ",
        "romanization": "ngîap-sa-ngop",
        "english": "quiet and peaceful",
        "german": "ruhig und friedlich"
      },
      {
        "thai": "ทั้งหมด",
        "romanization": "thâng-mot",
        "english": "all",
        "german": "insgesamt"
      },
      {
        "thai": "ชั้น",
        "romanization": "chán",
        "english": "floor",
        "german": "Etage"
      },
      {
        "thai": "เพื่อนบ้าน",
        "romanization": "phûean-bâan",
        "english": "neighbor",
        "german": "Nachbar"
      },
      {
        "thai": "อื่นๆ",
        "romanization": "ûun-ûun",
        "english": "other",
        "german": "andere"
      },
      {
        "thai": "รอบๆ",
        "romanization": "rób-rób",
        "english": "surround",
        "german": "rundherum"
      },
      {
        "thai": "เสียงดัง",
        "romanization": "sîang-dang",
        "english": "loud",
        "german": "laut"
      },
      {
        "thai": "กลิ่น",
        "romanization": "klin",
        "english": "smell",
        "german": "Geruch"
      },
      {
        "thai": "บุหรี่",
        "romanization": "bu-rîi",
        "english": "cigarette",
        "german": "Zigarette"
      },
      {
        "thai": "ละ",
        "romanization": "lá",
        "english": "per",
        "german": "pro"
      },
      {
        "thai": "บ่น",
        "romanization": "bòn",
        "english": "complain",
        "german": "beschweren"
      },
      {
        "thai": "แค่",
        "romanization": "khâe",
        "english": "just",
        "german": "nur"
      },
      {
        "thai": "แบ่ง",
        "romanization": "bàeng",
        "english": "to share",
        "german": "teilen"
      },
      {
        "thai": "สด",
        "romanization": "sòt",
        "english": "fresh",
        "german": "frisch"
      },
      {
        "thai": "สวน",
        "romanization": "suuan",
        "english": "garden, orchard",
        "german": "Obstgarten"
      },
      {
        "thai": "ต่างจังหวัด",
        "romanization": "dtàang-jang-wat",
        "english": "provinces other than Bangkok",
        "german": "Provinzen außerhalb Bangkoks"
      },
      {
        "thai": "เค้ก",
        "romanization": "khêk",
        "english": "cake",
        "german": "Kuchen"
      }
    ],
    "reading": {
      "sentences": [
        {
          "thai": "ตอนย้ายมาทํางานที่กรุงเทพฯ บริษัทของผมหาคอนโดฯ ให้ผมกับคุณเอ็มมาหลายแห่ง",
          "english": "When I moved to work in Bangkok, my company found several condos for me and Emma.",
          "german": "Als ich nach Bangkok zog, um zu arbeiten, fand mein Unternehmen mehrere Kondos für mich und Emma."
        },
        {
          "thai": "เราเลือกคอนโดฯ แถวช่องนนทรีเพราะไม่ไกลจากที่ทํางาน เดินทางสะดวกและเงียบสงบดี",
          "english": "We chose a condo around Chong Nonsi because it wasn't far from work, convenient to travel and quiet.",
          "german": "Wir wählten ein Kondo in der Nähe von Chong Nonsi, weil es nicht weit weg war, bequem zu erreichen und ruhig."
        },
        {
          "thai": "ที่คอนโดฯ เรามีเพื่อนบ้านที่ดีด้วย",
          "english": "At the condo, we also have good neighbors.",
          "german": "Im Kondo haben wir auch gute Nachbarn."
        },
        {
          "thai": "ห้องติดกันข้างซ้ายเป็นครอบครัวคนญี่ปุ่น มีลูกเรียนมัธยมสองคน",
          "english": "The room on the left is a Japanese family with two high school children.",
          "german": "Das Zimmer links ist eine japanische Familie mit zwei Gymnasiasten."
        },
        {
          "thai": "เพื่อนบ้านชาวญี่ปุ่นทําอาหารมาแบ่งให้เราบ่อยๆ",
          "english": "Our Japanese neighbors often cook and share food with us.",
          "german": "Unsere japanischen Nachbarn kochen häufig und teilen Essen mit uns."
        }
      ]
    },
    "structures": [
      {
        "pattern": "noun + ทั้งหมด",
        "meaning": "all + noun",
        "german": "alle + Substantiv"
      },
      {
        "pattern": "noun + classifier + อื่นๆ",
        "meaning": "other nouns",
        "german": "andere Substantive"
      },
      {
        "pattern": "วัน/อาทิตย์/เดือน/ปี + ละ + number + ครั้ง",
        "meaning": "…times per day/week/month/year",
        "german": "…mal pro Tag/Woche/Monat/Jahr"
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "คุณมีเพื่อนบ้านดีไหม"
        },
        {
          "question": "คุณคุยกับเพื่อนบ้านบ่อยไหม"
        },
        {
          "question": "เพื่อนบ้านของคุณมาจากประเทศไหน"
        },
        {
          "question": "คุณเคยแบ่งของให้เพื่อนบ้านไหม"
        },
        {
          "question": "ห้องข้างบน/ข้างล่าง/ข้างซ้าย/ข้างขวา มีเพื่อนบ้านไหม"
        },
        {
          "question": "เพื่อนบ้านของคุณ มีเด็กไหม"
        },
        {
          "question": "คุณรู้สึกกับเสียงดังจากเพื่อนบ้านไหม"
        },
        {
          "question": "คุณจะบ่นเรื่องเพื่อนบ้านไหม"
        },
        {
          "question": "บ้านของคุณรอบๆ เงียบไหม"
        },
        {
          "question": "คุณคิดว่ามีเพื่อนบ้านดีเป็นประโยชน์ไหม"
        }
      ],
      "pronunciation": {
        "word": "สวัสดีค่ะ ฉันทํา…มาให้ค่ะ ยังร้อนๆ อยู่เลย",
        "meaning": "Hello, I made... for you. It's still warm."
      },
      "translation": [
        {
          "english": "I am living in a condominium around Sukhumvit.",
          "thai": "ฉันอยู่ในคอนโดประมาณ สุขุมวิท"
        },
        {
          "english": "My condominium is quiet and peaceful.",
          "thai": "คอนโดของฉันเงียบและสงบ"
        },
        {
          "english": "I am living on the 12th floor.",
          "thai": "ฉันอยู่ที่ชั้น 12"
        },
        {
          "english": "I do not know any neighbors.",
          "thai": "ฉันไม่รู้จักเพื่อนบ้าน"
        },
        {
          "english": "We smile when we meet in the lift but we have never talked.",
          "thai": "เรายิ้มเมื่อเจอกันในลิฟต์ แต่ไม่เคยคุยกัน"
        }
      ]
    },
    "quiz": [
      {
        "type": "A",
        "question_de": "Was bedeutet 'เงียบสงบ'?",
        "question_en": "What does 'เงียบสงบ' mean?",
        "options": [
          {
            "text_de": "laut und lively",
            "text_en": "loud and lively",
            "correct": false
          },
          {
            "text_de": "ruhig und friedlich",
            "text_en": "quiet and peaceful",
            "correct": true
          },
          {
            "text_de": "heiß und stickig",
            "text_en": "hot and humid",
            "correct": false
          },
          {
            "text_de": "eng und dunkel",
            "text_en": "narrow and dark",
            "correct": false
          }
        ],
        "explanation_de": "'เงียบ' = leise/still, 'สงบ' = friedlich/ruhig",
        "explanation_en": "'เงียบ' = quiet, 'สงบ' = peaceful"
      },
      {
        "type": "A",
        "question_de": "Was ist ein 'เพื่อนบ้าน'?",
        "question_en": "What is a 'เพื่อนบ้าน'?",
        "options": [
          {
            "text_de": "Freund",
            "text_en": "friend",
            "correct": false
          },
          {
            "text_de": "Nachbar",
            "text_en": "neighbor",
            "correct": true
          },
          {
            "text_de": "Kollege",
            "text_en": "colleague",
            "correct": false
          },
          {
            "text_de": "Familie",
            "text_en": "family",
            "correct": false
          }
        ],
        "explanation_de": "'เพื่อน' = Freund, 'บ้าน' = Haus, 'เพื่อนบ้าน' = Nachbar",
        "explanation_en": "'เพื่อน' = friend, 'บ้าน' = house, 'เพื่อนบ้าน' = neighbor"
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'เราเลือกคอนโดเพราะไม่ไกลจากที่ทํางาน'",
        "question_en": "Translate: 'เราเลือกคอนโดเพราะไม่ไกลจากที่ทํางาน'",
        "options": [
          {
            "text_de": "Wir wählten ein Kondo, weil es nicht weit weg vom Arbeitsplatz war",
            "text_en": "We chose a condo because it wasn't far from work",
            "correct": true
          },
          {
            "text_de": "Wir wählten ein Kondo neben dem Arbeitsplatz",
            "text_en": "We chose a condo next to work",
            "correct": false
          },
          {
            "text_de": "Wir wählten ein Kondo, weil es nah beim Arbeitsplatz war",
            "text_en": "We chose a condo because it was close to work",
            "correct": false
          },
          {
            "text_de": "Wir wählten ein Kondo von unserem Arbeitsplatz aus",
            "text_en": "We chose a condo from our workplace",
            "correct": false
          }
        ],
        "explanation_de": "Dies ist ein einfacher kausaler Satz mit 'เพราะ' (weil).",
        "explanation_en": "This is a simple causal sentence with 'เพราะ' (because)."
      },
      {
        "type": "C",
        "question_de": "Welche Struktur zeigt 'ห้อง...อื่นๆ'?",
        "question_en": "What structure is shown in 'ห้อง...อื่นๆ'?",
        "options": [
          {
            "text_de": "noun + ทั้งหมด",
            "text_en": "noun + ทั้งหมด",
            "correct": false
          },
          {
            "text_de": "noun + classifier + อื่นๆ",
            "text_en": "noun + classifier + อื่นๆ",
            "correct": true
          },
          {
            "text_de": "adjective + ขึ้น",
            "text_en": "adjective + ขึ้น",
            "correct": false
          },
          {
            "text_de": "ถึงแม้ว่า…แต่…",
            "text_en": "ถึงแม้ว่า…แต่…",
            "correct": false
          }
        ],
        "explanation_de": "Dies zeigt die 'noun + classifier + อื่นๆ' Struktur für 'andere'.",
        "explanation_en": "This shows the 'noun + classifier + อื่นๆ' structure for 'others'."
      },
      {
        "type": "D",
        "question_de": "Ergänze: 'คอนโดมีทั้งหมด ___ ชั้น'",
        "question_en": "Fill in the blank: 'คอนโดมีทั้งหมด ___ ชั้น'",
        "options": [
          {
            "text_de": "12",
            "text_en": "12",
            "correct": true
          },
          {
            "text_de": "7",
            "text_en": "7",
            "correct": false
          },
          {
            "text_de": "17",
            "text_en": "17",
            "correct": false
          },
          {
            "text_de": "20",
            "text_en": "20",
            "correct": false
          }
        ],
        "explanation_de": "Im Text sagt Chris: 'คอนโดฯ มีทั้งหมด 12 ชั้น'",
        "explanation_en": "In the text Chris says: 'The condo has 12 floors in total.'"
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'กลิ่น'?",
        "question_en": "What does 'กลิ่น' mean?",
        "options": [
          {
            "text_de": "Farbe",
            "text_en": "color",
            "correct": false
          },
          {
            "text_de": "Geruch",
            "text_en": "smell",
            "correct": true
          },
          {
            "text_de": "Geschmack",
            "text_en": "taste",
            "correct": false
          },
          {
            "text_de": "Laut",
            "text_en": "sound",
            "correct": false
          }
        ],
        "explanation_de": "'กลิ่น' bedeutet 'Geruch' oder 'Duft'.",
        "explanation_en": "'กลิ่น' means 'smell' or 'scent'."
      },
      {
        "type": "B",
        "question_de": "Übersetze: 'เพื่อนบ้านชาวญี่ปุ่นทําอาหารมาแบ่งให้เราบ่อยๆ'",
        "question_en": "Translate: 'เพื่อนบ้านชาวญี่ปุ่นทําอาหารมาแบ่งให้เราบ่อยๆ'",
        "options": [
          {
            "text_de": "Unsere japanischen Nachbarn kochen häufig Essen für uns",
            "text_en": "Our Japanese neighbors cook food for us often",
            "correct": true
          },
          {
            "text_de": "Wir kochen Essen für unsere japanischen Nachbarn",
            "text_en": "We cook food for our Japanese neighbors",
            "correct": false
          },
          {
            "text_de": "Japanische Nachbarn mögen Essen",
            "text_en": "Japanese neighbors like food",
            "correct": false
          },
          {
            "text_de": "Essen wird von uns und den japanischen Nachbarn geteilt",
            "text_en": "Food is shared by us and Japanese neighbors",
            "correct": false
          }
        ],
        "explanation_de": "'ทําอาหารมาแบ่งให้' bedeutet 'Essen zubereiten und teilen'.",
        "explanation_en": "'ทําอาหารมาแบ่งให้' means 'cook food and share it with'."
      },
      {
        "type": "D",
        "question_de": "Welche Aussage ist wahr nach dem Text?",
        "question_en": "Which statement is true according to the text?",
        "options": [
          {
            "text_de": "Chris kennt alle Nachbarn im Kondo gut",
            "text_en": "Chris knows all neighbors in the condo well",
            "correct": false
          },
          {
            "text_de": "Die japanische Familie hat drei Kinder",
            "text_en": "The Japanese family has three children",
            "correct": false
          },
          {
            "text_de": "Chris mag seine Nachbarn und denkt, es ist Glück, sie zu haben",
            "text_en": "Chris likes his neighbors and thinks it's lucky to have them",
            "correct": true
          },
          {
            "text_de": "Der Geruch von Zigaretten ist immer stark",
            "text_en": "The smell of cigarettes is always strong",
            "correct": false
          }
        ],
        "explanation_de": "Im Text sagt Chris: 'เรารู้สึกโชคดีมากที่มีเพื่อนบ้านดีแบบนี้'",
        "explanation_en": "In the text Chris says: 'We feel very lucky to have neighbors like this.'"
      },
      {
        "type": "C",
        "question_de": "Was bedeutet die Struktur 'เดือนละหนึ่งครั้ง'?",
        "question_en": "What does the structure 'เดือนละหนึ่งครั้ง' mean?",
        "options": [
          {
            "text_de": "jeden Monat",
            "text_en": "every month",
            "correct": false
          },
          {
            "text_de": "einmal pro Monat",
            "text_en": "once per month",
            "correct": true
          },
          {
            "text_de": "am Ende des Monats",
            "text_en": "at the end of the month",
            "correct": false
          },
          {
            "text_de": "monatlich",
            "text_en": "monthly",
            "correct": false
          }
        ],
        "explanation_de": "'เดือนละหนึ่งครั้ง' ist die 'noun + ละ + number + ครั้ง' Struktur.",
        "explanation_en": "'เดือนละหนึ่งครั้ง' is the 'noun + ละ + number + ครั้ง' structure."
      },
      {
        "type": "A",
        "question_de": "Was bedeutet 'แค่'?",
        "question_en": "What does 'แค่' mean?",
        "options": [
          {
            "text_de": "vielleicht",
            "text_en": "maybe",
            "correct": false
          },
          {
            "text_de": "nur",
            "text_en": "just",
            "correct": true
          },
          {
            "text_de": "immer",
            "text_en": "always",
            "correct": false
          },
          {
            "text_de": "nie",
            "text_en": "never",
            "correct": false
          }
        ],
        "explanation_de": "'แค่' bedeutet 'nur' oder 'gerade'.",
        "explanation_en": "'แค่' means 'just' or 'only'."
      }
    ]
  },
  {
    "chapter": 11,
    "vocabulary": [
      {
        "thai": "ความปลอดภัย",
        "romanization": "khwam-plaat-phai",
        "english": "security",
        "german": "Sicherheit",
        "example_thai": "ยามดูแลความปลอดภัยของคอนโดฯ",
        "example_english": "The guard takes care of the condo's security",
        "example_german": "Der Wachmann kümmert sich um die Sicherheit der Eigentumswohnung"
      },
      {
        "thai": "ทางเข้า",
        "romanization": "thang-khao",
        "english": "entrance",
        "german": "Eingang",
        "example_thai": "ทางเข้าคอนโดฯ มีความปลอดภัยดีมาก",
        "example_english": "The condo entrance has good security",
        "example_german": "Der Eingang der Eigentumswohnung hat sehr gute Sicherheit"
      },
      {
        "thai": "พื้นที่ส่วนกลาง",
        "romanization": "phuun-thi-suan-klang",
        "english": "common space",
        "german": "Gemeinschaftsbereich",
        "example_thai": "พื้นที่ส่วนกลางสะอาดเสมอ",
        "example_english": "The common spaces are always clean",
        "example_german": "Die Gemeinschaftsbereiche sind immer sauber"
      },
      {
        "thai": "ห้องสมุด",
        "romanization": "hong-sa-mut",
        "english": "library",
        "german": "Bibliothek",
        "example_thai": "ห้องสมุดของคอนโดฯ มีหนังสือเยอะ",
        "example_english": "The condo library has many books",
        "example_german": "Die Bibliothek der Eigentumswohnung hat viele Bücher"
      },
      {
        "thai": "สระว่ายน้ำ",
        "romanization": "sa-wai-nam",
        "english": "swimming pool",
        "german": "Schwimmbad",
        "example_thai": "ผมชอบว่ายน้ำที่สระว่ายน้ำของคอนโดฯ",
        "example_english": "I like swimming at the condo pool",
        "example_german": "Ich mag im Schwimmbad der Eigentumswohnung schwimmen"
      },
      {
        "thai": "สนามเทนนิส",
        "romanization": "sa-nam-ten-ni",
        "english": "tennis court",
        "german": "Tennisplatz",
        "example_thai": "สนามเทนนิสของคอนโดฯ สำหรับลูกบ้านเท่านั้น",
        "example_english": "The tennis court is only for residents",
        "example_german": "Der Tennisplatz ist nur für Bewohner reserviert"
      },
      {
        "thai": "เจ้าหน้าที่สำนักงาน",
        "romanization": "jao-ha-na-thi-sam-nuk-ngan",
        "english": "officer",
        "german": "Büroangestellte(r)",
        "example_thai": "เจ้าหน้าที่สำนักงานช่วยลูกบ้านทุกคน",
        "example_english": "The officers help all residents",
        "example_german": "Der/Die Büroangestellte hilft allen Bewohnern"
      },
      {
        "thai": "ลูกบ้าน",
        "romanization": "luk-ban",
        "english": "resident",
        "german": "Bewohner",
        "example_thai": "ลูกบ้านทุกคนรู้สึกสบายใจ",
        "example_english": "All residents feel comfortable",
        "example_german": "Alle Bewohner fühlen sich wohl"
      },
      {
        "thai": "เต็มที่",
        "romanization": "tem-thi",
        "english": "to the utmost",
        "german": "mit vollem Einsatz",
        "example_thai": "พวกเขาช่วยแก้ปัญหาเต็มที่",
        "example_english": "They solve problems to the utmost",
        "example_german": "Sie lösen Probleme mit vollem Einsatz"
      },
      {
        "thai": "ช่าง",
        "romanization": "chang",
        "english": "a repair man",
        "german": "Handwerker",
        "example_thai": "ช่างของคอนโดฯ เก่งมาก",
        "example_english": "The condo repairman is very skilled",
        "example_german": "Der Handwerker der Eigentumswohnung ist sehr geschickt"
      },
      {
        "thai": "น้ำประปา",
        "romanization": "nam-pra-pa",
        "english": "water supply",
        "german": "Wasserversorgung",
        "example_thai": "ช่างดูแลเรื่องน้ำประปา",
        "example_english": "The repairman takes care of water supply",
        "example_german": "Der Handwerker kümmert sich um die Wasserversorgung"
      },
      {
        "thai": "ไฟฟ้า",
        "romanization": "fai-fa",
        "english": "electricity",
        "german": "Elektrizität",
        "example_thai": "ช่างดูแลไฟฟ้าด้วย",
        "example_english": "The repairman also takes care of electricity",
        "example_german": "Der Handwerker kümmert sich auch um die Elektrizität"
      },
      {
        "thai": "เสีย",
        "romanization": "sia",
        "english": "broken",
        "german": "kaputt",
        "example_thai": "ไฟฟ้าเสีย ช่างมาซ่อม",
        "example_english": "The electricity is broken and the repairman fixes it",
        "example_german": "Die Elektrizität ist kaputt und der Handwerker repariert sie"
      },
      {
        "thai": "ซ่อม",
        "romanization": "som",
        "english": "fix",
        "german": "reparieren",
        "example_thai": "ช่างมาซ่อมอากาศแต่งตัว",
        "example_english": "The repairman comes to fix the air conditioner",
        "example_german": "Der Handwerker kommt um die Klimaanlage zu reparieren"
      },
      {
        "thai": "คำแนะนำ",
        "romanization": "kham-naen-nam",
        "english": "advise",
        "german": "Ratschlag",
        "example_thai": "ช่างให้คำแนะนำที่ดี",
        "example_english": "The repairman gives good advice",
        "example_german": "Der Handwerker gibt gute Ratschläge"
      },
      {
        "thai": "พนักงาน",
        "romanization": "pha-nuk-ngan",
        "english": "a staff",
        "german": "Mitarbeiter",
        "example_thai": "พนักงานทุกคนใจดี",
        "example_english": "All the staff are kind-hearted",
        "example_german": "Alle Mitarbeiter sind freundlich"
      },
      {
        "thai": "ของฝาก",
        "romanization": "khong-fak",
        "english": "souvenir",
        "german": "Mitbringsel",
        "example_thai": "ฉันนำของฝากมาให้พนักงาน",
        "example_english": "I bring souvenirs for the staff",
        "example_german": "Ich bringe Mitbringsel für die Mitarbeiter"
      },
      {
        "thai": "เล็กๆ น้อยๆ",
        "romanization": "lek-lek-noi-noi",
        "english": "not special thing",
        "german": "Kleinigkeiten",
        "example_thai": "ฉันมีของฝากเล็กๆ น้อยๆ",
        "example_english": "I have small souvenirs",
        "example_german": "Ich habe kleine Mitbringsel"
      },
      {
        "thai": "ตลอดปี",
        "romanization": "ta-lod-pi",
        "english": "all through the year",
        "german": "das ganze Jahr",
        "example_thai": "พวกเขาทำงานหนักตลอดปี",
        "example_english": "They work hard all through the year",
        "example_german": "Sie arbeiten hart das ganze Jahr"
      },
      {
        "thai": "คุกกี้",
        "romanization": "kuk-ki",
        "english": "cookies",
        "german": "Kekse",
        "example_thai": "ฉันทำคุกกี้ให้พนักงาน",
        "example_english": "I make cookies for the staff",
        "example_german": "Ich backe Kekse für die Mitarbeiter"
      }
    ],
    "reading": [
      {
        "thai": "คอนโดฯ ที่ฉันอยู่ นอกจากเงียบสงบแล้ว ยังมีการดูแลที่ดีด้วย",
        "english": "Apart from being quiet, the condo I live in also has good care",
        "german": "Neben der Ruhe hat die Eigentumswohnung, in der ich lebe, auch gute Betreuung"
      },
      {
        "thai": "ยามทุกคนที่คอนโดฯ ดูแลเกี่ยวกับความปลอดภัยดีมาก",
        "english": "The guards at the condo take very good care of security",
        "german": "Die Wachen in der Eigentumswohnung kümmern sich sehr gut um die Sicherheit"
      },
      {
        "thai": "แม่บ้านทุกคนดูแลความสะอาดและช่วยให้ความสะดวกทุกอย่าง",
        "english": "All the maids maintain cleanliness and provide every convenience",
        "german": "Alle Reinigungspersonen kümmern sich um die Sauberkeit und bieten jeden Komfort"
      },
      {
        "thai": "เจ้าหน้าที่สำนักงานคอนโดฯ ช่วยให้ความสะดวกกับลูกบ้านทุกคน",
        "english": "The condo office officers provide convenience to all residents",
        "german": "Die Büroangestellten der Eigentumswohnung bieten allen Bewohnern Komfort"
      },
      {
        "thai": "ช่างของคอนโดฯ ก็เก่งมาก พวกเขาดูแลเกี่ยวกับน้ำประปา ไฟฟ้า และอื่นๆ",
        "english": "The condo repairman is also very skilled; they take care of water supply, electricity, and more",
        "german": "Der Handwerker der Eigentumswohnung ist auch sehr geschickt; er kümmert sich um Wasserversorgung, Elektrizität und vieles mehr"
      },
      {
        "thai": "พนักงานทุกคนที่นี่ใจดี สุภาพ และยิ้มเสมอ",
        "english": "All the staff here are kind-hearted, polite, and always smiling",
        "german": "Alle Mitarbeiter hier sind freundlich, höflich und lächeln immer"
      },
      {
        "thai": "ทุกครั้งที่ไปต่างจังหวัด ฉันมีของฝากเล็กๆ น้อยๆ มาให้พวกเขา",
        "english": "Every time I go to another province, I bring small souvenirs for them",
        "german": "Jedes Mal wenn ich in eine andere Provinz fahre, bringe ich kleine Mitbringsel für sie"
      }
    ],
    "structures": [
      {
        "pattern": "Subject + verb + เต็มที่",
        "meaning": "Subject does something to the utmost",
        "examples": [
          {
            "thai": "พวกเขาช่วยแก้ปัญหาเต็มที่",
            "english": "They solve problems to the utmost",
            "german": "Sie lösen Probleme mit vollem Einsatz"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        "คุณเอ็มมาและคุณคริสคิดว่าคอนโดฯ ที่เขาอยู่ดีอย่างไร",
        "อาชีพยาม มีหน้าที่อะไร",
        "อาชีพแม่บ้าน มีหน้าที่อะไร",
        "อาชีพเจ้าหน้าที่ นิติฯ มีหน้าที่อะไร",
        "อาชีพช่าง มีหน้าที่อะไร",
        "คุณเอ็มมาและคุณคริสคิดอย่างไรกับพนักงานที่คอนโดฯ",
        "คุณเอ็มมาและคุณคริสรู้สึกอย่างไรกับการอยู่ที่คอนโดฯ",
        "ทุกครั้งที่ไปต่างจังหวัด คุณเอ็มมาจะเอาอะไรมาให้พนักงาน",
        "ทุกๆ ปีใหม่ คุณเอ็มมาจะเอาอะไรมาให้พนักงาน",
        "ทำไมคุณเอ็มมาเอาของให้พนักงานที่คอนโดฯ"
      ],
      "pronunciation": [
        "สวัสดีค่ะ ฉันมีของฝากเล็กๆ น้อยๆ มาให้ค่ะ"
      ],
      "translation": [
        "My family is living in a หมู่บ้าน, not a condominium. My หมู่บ้าน has นิติฯ and security guards."
      ]
    },
    "quiz": [
      {
        "question": "คอนโดฯ ที่คุณเอ็มมาอยู่มีลักษณะอย่างไร",
        "options": {
          "A": "เงียบสงบและมีการดูแลที่ดี",
          "B": "สิ่งอำนวยความสะดวกน้อย",
          "C": "ไม่มีความปลอดภัย",
          "D": "ราคาแพงมาก"
        },
        "correct": "A",
        "explanation": "ตามข้อความ คอนโดฯ เงียบสงบและมีการดูแลที่ดี"
      },
      {
        "question": "ยามของคอนโดฯ ดูแลเรื่องอะไรมากที่สุด",
        "options": {
          "A": "ความสะอาด",
          "B": "ความปลอดภัย",
          "C": "การซ่อมแซม",
          "D": "การจดหมาย"
        },
        "correct": "B",
        "explanation": "ยามดูแลเกี่ยวกับความปลอดภัยของคอนโดฯ"
      },
      {
        "question": "พนักงานของคอนโดฯ มีลักษณะเป็นอย่างไร",
        "options": {
          "A": "ใจแคบและสูง",
          "B": "ใจดี สุภาพ และยิ้มเสมอ",
          "C": "ขึ้นซ่าและเกียจคร่อ",
          "D": "ใจเย็นและเงียบ"
        },
        "correct": "B",
        "explanation": "พนักงานทุกคนที่นี่ใจดี สุภาพ และยิ้มเสมอ"
      },
      {
        "question": "ช่างของคอนโดฯ ดูแลเรื่องอะไรบ้าง",
        "options": {
          "A": "เฉพาะน้ำประปา",
          "B": "เฉพาะไฟฟ้า",
          "C": "น้ำประปา ไฟฟ้า แอร์ และอื่นๆ",
          "D": "เฉพาะแอร์"
        },
        "correct": "C",
        "explanation": "ช่างดูแลเกี่ยวกับน้ำประปา ไฟฟ้า แอร์ และอื่นๆ"
      },
      {
        "question": "คุณเอ็มมาเอาของฝากให้พนักงานเพื่ออะไร",
        "options": {
          "A": "เพราะเขาเบื่อ",
          "B": "เพราะเขาอยากได้",
          "C": "เพื่อขอบคุณที่พวกเขาทำงานหนัก",
          "D": "เพราะเขาข่มขู่"
        },
        "correct": "C",
        "explanation": "ฉันเอาของให้พวกเขาเพื่อขอบคุณที่พวกเขาทำงานหนัก"
      },
      {
        "question": "ตอนปีใหม่ คุณเอ็มมาทำอะไรให้พนักงาน",
        "options": {
          "A": "ซื้อของขวัญแพง",
          "B": "ทำคุกกี้",
          "C": "แจกเงิน",
          "D": "ไม่ได้ทำอะไร"
        },
        "correct": "B",
        "explanation": "ตอนปีใหม่คุณเอ็มมาทำคุกกี้ให้ทุกคน"
      },
      {
        "question": "พื้นที่ส่วนกลางของคอนโดฯ เป็นอย่างไร",
        "options": {
          "A": "สกปรก",
          "B": "สะอาดเสมอ",
          "C": "ไม่มีแม่บ้าน",
          "D": "ไม่มีใครใช้"
        },
        "correct": "B",
        "explanation": "พื้นที่ส่วนกลางสะอาดเสมอ"
      },
      {
        "question": "เมื่อมีปัญหา เจ้าหน้าที่นิติฯ จะทำอย่างไร",
        "options": {
          "A": "ปล่อยปละเลย",
          "B": "ช่วยแก้ปัญหาเต็มที่",
          "C": "บอกให้ไปที่โรงแรม",
          "D": "เพิกเฉยต่อปัญหา"
        },
        "correct": "B",
        "explanation": "พวกเขาช่วยแก้ปัญหาเต็มที่"
      },
      {
        "question": "คุณเอ็มมาอยู่ที่คอนโดฯ แล้วรู้สึกอย่างไร",
        "options": {
          "A": "หวาดกลัว",
          "B": "ปลอดภัย สบายใจ และได้รับความสะดวก",
          "C": "เบื่อหน่าย",
          "D": "โดดเดี่ยว"
        },
        "correct": "B",
        "explanation": "อยู่ที่นี่ทำให้รู้สึกปลอดภัย สบายใจ และได้รับความสะดวกทุกอย่าง"
      },
      {
        "question": "ห้องสมุด สระว่ายน้ำ และสนามเทนนิส เป็นสิ่งอะไรของคอนโดฯ",
        "options": {
          "A": "สิ่งสำหรับส่วนตัว",
          "B": "พื้นที่ส่วนกลาง",
          "C": "สิ่งของที่เสีย",
          "D": "สิ่งของที่ห้าม"
        },
        "correct": "B",
        "explanation": "พื้นที่ส่วนกลางและพื้นที่อื่นๆ เช่น ห้องสมุด สระว่ายน้ำ สนามเทนนิส"
      }
    ],
    "id": 11,
    "thai_title": "อยู่คอนโดฯ",
    "english_title": "Living in a Condo"
  },
  {
    "chapter": 12,
    "vocabulary": [
      {
        "thai": "แรก",
        "romanization": "raek",
        "english": "the first",
        "german": "erste(r)",
        "example_thai": "ปีแรกที่มาอยู่กรุงเทพฯ",
        "example_english": "The first year living in Bangkok",
        "example_german": "Das erste Jahr in Bangkok"
      },
      {
        "thai": "อธิบาย",
        "romanization": "a-thi-bai",
        "english": "to explain",
        "german": "erklären",
        "example_thai": "เพื่อนบ้านอธิบายให้ฉันเข้าใจ",
        "example_english": "The neighbor explained so I would understand",
        "example_german": "Der Nachbar erklärte, damit ich verstehe"
      },
      {
        "thai": "สถานที่",
        "romanization": "sa-tha-ni",
        "english": "a place",
        "german": "Ort",
        "example_thai": "บ้านเป็นสถานที่สำคัญของชีวิต",
        "example_english": "Home is an important place in life",
        "example_german": "Das Zuhause ist ein wichtiger Ort im Leben"
      },
      {
        "thai": "อวยพร",
        "romanization": "uai-phon",
        "english": "to bless",
        "german": "segnen",
        "example_thai": "บ้านต้องได้รับการอวยพร",
        "example_english": "The house must receive a blessing",
        "example_german": "Das Haus muss gesegnet werden"
      },
      {
        "thai": "นิมนต์",
        "romanization": "ni-mon",
        "english": "to invite a Buddhist monk",
        "german": "Mönch einladen",
        "example_thai": "การทำบุญบ้านคือการนิมนต์พระ",
        "example_english": "Making merit for the house means inviting monks",
        "example_german": "Verdienste für das Haus zu generieren bedeutet, einen Mönch einzuladen"
      },
      {
        "thai": "ของที่จำเป็น",
        "romanization": "khong-thi-jam-pen",
        "english": "essential stuff",
        "german": "notwendige Dinge",
        "example_thai": "นำของที่จำเป็นมาให้พระ",
        "example_english": "Bring essential items for the monks",
        "example_german": "Notwendige Dinge zu den Mönchen bringen"
      },
      {
        "thai": "สวดมนต์",
        "romanization": "suad-mon",
        "english": "to pray",
        "german": "beten",
        "example_thai": "พระสวดมนต์ให้ความเป็นสิริมงคล",
        "example_english": "The monks pray for blessings",
        "example_german": "Die Mönche beten für Segnungen"
      },
      {
        "thai": "ให้พร",
        "romanization": "hai-phon",
        "english": "to bless",
        "german": "Segen geben",
        "example_thai": "พระให้พรลูกบ้าน",
        "example_english": "The monk gives blessings to the residents",
        "example_german": "Der Mönch gibt Segnungen an die Bewohner"
      },
      {
        "thai": "ธรรมะ",
        "romanization": "tham-ma",
        "english": "dharma",
        "german": "Dharma",
        "example_thai": "พระสอนธรรมะ",
        "example_english": "The monks teach dharma",
        "example_german": "Die Mönche unterrichten Dharma"
      },
      {
        "thai": "ความคิด",
        "romanization": "khwam-khit",
        "english": "thought",
        "german": "Gedanke",
        "example_thai": "ความคิดแบบนี้น่าสนใจมาก",
        "example_english": "This kind of thought is very interesting",
        "example_german": "Diese Art von Gedanke ist sehr interessant"
      },
      {
        "thai": "เตรียม",
        "romanization": "tre-iam",
        "english": "to prepare",
        "german": "vorbereiten",
        "example_thai": "ฉันเตรียมผลไม้ให้พระ",
        "example_english": "I prepare fruit for the monks",
        "example_german": "Ich bereite Obst für die Mönche vor"
      },
      {
        "thai": "ถวาย",
        "romanization": "thwai",
        "english": "to offer something to a Buddhist monk",
        "german": "darbringen",
        "example_thai": "ถวายผลไม้ให้พระ",
        "example_english": "Offer fruit to the monks",
        "example_german": "Obst zu den Mönchen darbringen"
      },
      {
        "thai": "ศาลพระภูมิ",
        "romanization": "san-phra-phum",
        "english": "a spirit house",
        "german": "Geisterhaus",
        "example_thai": "ที่หน้าคอนโดฯ มีศาลพระภูมิ",
        "example_english": "In front of the condo there is a spirit house",
        "example_german": "Vor der Eigentumswohnung gibt es ein Geisterhaus"
      },
      {
        "thai": "เทวดา",
        "romanization": "the-wa-da",
        "english": "god, angel",
        "german": "Gottheit/Engel",
        "example_thai": "เทวดาจะดูแลบ้าน",
        "example_english": "The angel will take care of the house",
        "example_german": "Die Gottheit wird sich um das Haus kümmern"
      },
      {
        "thai": "เจ้าที่",
        "romanization": "jao-thi",
        "english": "a spirit protecting a premise",
        "german": "Schutzgeist",
        "example_thai": "ศาลพระภูมิเป็นบ้านของเจ้าที่",
        "example_english": "The spirit house is the home of the protective spirit",
        "example_german": "Das Geisterhaus ist das Zuhause des Schutzgeistes"
      },
      {
        "thai": "งงไปหมดแล้ว",
        "romanization": "ngang-pai-mot-laeo",
        "english": "to be overwhelmed by confusion",
        "german": "völlig verwirrt",
        "example_thai": "ฉันงงไปหมดแล้ว",
        "example_english": "I am overwhelmed by confusion",
        "example_german": "Ich bin völlig verwirrt"
      }
    ],
    "reading": [
      {
        "thai": "ปีแรกที่มาอยู่ที่กรุงเทพฯ นิติฯ บอกฉันว่าจะมีการทำบุญคอนโดฯ",
        "english": "The first year living in Bangkok, the administrator told me there would be a merit-making ceremony for the condo",
        "german": "Das erste Jahr in Bangkok sagte mir der Administrator, dass es eine Verdienst-Zeremonie für die Eigentumswohnung geben würde"
      },
      {
        "thai": "ฉันกับคุณคริสไม่เข้าใจว่าคืออะไรและพวกเราต้องทำอะไร",
        "english": "Chris and I did not understand what it was and what we had to do",
        "german": "Chris und ich verstanden nicht, was es war und was wir tun mussten"
      },
      {
        "thai": "เพื่อนบ้านอธิบายว่าคนไทยคิดว่าบ้านเป็นสถานที่สำคัญของชีวิต",
        "english": "The neighbor explained that Thai people think home is an important place in life",
        "german": "Der Nachbar erklärte, dass Thais denken, dass das Zuhause ein wichtiger Ort im Leben ist"
      },
      {
        "thai": "บ้านต้องได้รับการอวยพรเหมือนกันกับคนเพื่อให้บ้านปลอดภัย",
        "english": "The house must receive a blessing like people do so the house is safe",
        "german": "Das Haus muss wie Menschen gesegnet werden, um es sicher zu machen"
      },
      {
        "thai": "การทำบุญบ้านคือการนิมนต์พระมารับอาหารหรือของที่จำเป็นสำหรับพระ",
        "english": "Making merit for the house is inviting monks to receive food or essential items",
        "german": "Verdienste für das Haus ist, die Mönche einzuladen, Nahrung oder notwendige Dinge zu erhalten"
      },
      {
        "thai": "พระจะสวดมนต์ ให้พรลูกบ้านและคอนโดฯ แล้วก็สอนธรรมะด้วย",
        "english": "The monks will pray, give blessings to residents and the condo, and also teach dharma",
        "german": "Die Mönche werden beten, Segnungen an Bewohner und die Eigentumswohnung geben und auch Dharma unterrichten"
      },
      {
        "thai": "ที่หน้าคอนโดฯ มีศาลพระภูมิด้วย",
        "english": "In front of the condo there is also a spirit house",
        "german": "Vor der Eigentumswohnung gibt es auch ein Geisterhaus"
      },
      {
        "thai": "เจ้าหน้าที่นิติฯ บอกฉันว่าศาลพระภูมิไม่ใช่เทวดาแต่เป็นเจ้าที่",
        "english": "The administrator told me the spirit house is not a deity but a protective spirit",
        "german": "Der Administrator sagte mir, dass das Geisterhaus nicht eine Gottheit ist, sondern ein Schutzgeist"
      }
    ],
    "structures": [
      {
        "pattern": "noun + classifier + แรก",
        "meaning": "The first [noun]",
        "examples": [
          {
            "thai": "ปีแรกที่มาอยู่กรุงเทพฯ",
            "english": "The first year living in Bangkok",
            "german": "Das erste Jahr in Bangkok"
          },
          {
            "thai": "ผู้หญิงคนแรก",
            "english": "The first woman",
            "german": "Die erste Frau"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        "ใครอธิบายเกี่ยวกับการทำบุญคอนโดฯ ให้คุณเอ็มมาเข้าใจ",
        "การทำบุญคอนโดฯ คืออะไร",
        "เวลามีการทำบุญคอนโดฯ คนไทยถวายอะไรให้พระบ้าง",
        "ทำไมต้องมีการทำบุญคอนโดฯ หรือทำบุญบ้าน",
        "ศาลพระภูมิคืออะไร",
        "คอนโดฯ ของคุณเอ็มมามีศาลพระภูมิอยู่ตรงไหน",
        "เทวดาในศาลพระภูมิมีหน้าที่อะไร",
        "เจ้าหน้าที่นิติฯ บอกคุณเอ็มมาว่าศาลพระภูมิเป็นบ้านของใคร",
        "คุณเอ็มมาเข้าใจคำว่าเจ้าที่ไหม",
        "คุณเอ็มมาไม่เข้าใจเกี่ยวกับเทวดาและเจ้าที่ก็เลยพูดกับเจ้าหน้าที่นิติฯ ว่าอะไร"
      ],
      "pronunciation": [
        "ผม/ฉันงงไปหมดแล้ว"
      ],
      "translation": [
        "First year working in Bangkok, my colleague explained to me that our office would ทำบุญออฟฟิศ."
      ]
    },
    "quiz": [
      {
        "question": "ปีแรกที่มาอยู่กรุงเทพฯ นิติฯ บอกคุณเอ็มมาเกี่ยวกับเรื่องอะไร",
        "options": {
          "A": "การซ่อมแซมห้อง",
          "B": "การทำบุญคอนโดฯ",
          "C": "การเก็บเงินค่าเช่า",
          "D": "กฎระเบียบของคอนโดฯ"
        },
        "correct": "B",
        "explanation": "นิติฯ บอกว่าจะมีการทำบุญคอนโดฯ"
      },
      {
        "question": "คนไทยคิดว่าบ้านมีความสำคัญเพียงใด",
        "options": {
          "A": "ไม่สำคัญเลย",
          "B": "สำคัญเล็กน้อย",
          "C": "เป็นสถานที่สำคัญของชีวิต",
          "D": "สำคัญเฉพาะสำหรับเด็ก"
        },
        "correct": "C",
        "explanation": "คนไทยคิดว่าบ้านเป็นสถานที่สำคัญของชีวิต"
      },
      {
        "question": "การทำบุญบ้านมีจุดประสงค์อะไร",
        "options": {
          "A": "เพื่อให้บ้านสะอาด",
          "B": "เพื่อให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข",
          "C": "เพื่อให้เพื่อนบ้านอิจฉา",
          "D": "เพื่อให้พระมีทำไม"
        },
        "correct": "B",
        "explanation": "ทำให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข"
      },
      {
        "question": "การทำบุญบ้านเกี่ยวข้องกับการนิมนต์พระเพื่อสิ่งใด",
        "options": {
          "A": "เพื่อให้พระอาหาร",
          "B": "เพื่อให้พระแต่งตัว",
          "C": "เพื่อให้พระรับอาหารหรือของที่จำเป็น",
          "D": "เพื่อให้พระเดินทาง"
        },
        "correct": "C",
        "explanation": "การนิมนต์พระมารับอาหารหรือของที่จำเป็นสำหรับพระ"
      },
      {
        "question": "คุณเอ็มมาเตรียมอะไรเพื่อถวายพระตอนทำบุญคอนโดฯ",
        "options": {
          "A": "เงิน",
          "B": "ดอกไม้",
          "C": "อาหาร",
          "D": "ผลไม้เล็กๆ น้อยๆ"
        },
        "correct": "D",
        "explanation": "ฉันเตรียมผลไม้เล็กๆ น้อยๆ ไปถวายพระ"
      },
      {
        "question": "ศาลพระภูมิตั้งอยู่ที่ไหน",
        "options": {
          "A": "หน้าคอนโดฯ",
          "B": "ข้างคอนโดฯ",
          "C": "ด้านหลังคอนโดฯ",
          "D": "บนหลังคาคอนโดฯ"
        },
        "correct": "A",
        "explanation": "ที่หน้าคอนโดฯ มีศาลพระภูมิ"
      },
      {
        "question": "เพื่อนบ้านบอกว่าศาลพระภูมิเป็นบ้านของใคร",
        "options": {
          "A": "บ้านของเจ้าที่",
          "B": "บ้านของเทวดา",
          "C": "บ้านของพระ",
          "D": "บ้านของคนจน"
        },
        "correct": "B",
        "explanation": "เพื่อนบ้านบอกว่าเป็นบ้านของเทวดา"
      },
      {
        "question": "เจ้าหน้าที่นิติฯ บอกว่าศาลพระภูมิที่คอนโดฯ เป็นบ้านของใคร",
        "options": {
          "A": "เทวดา",
          "B": "เจ้าที่",
          "C": "เจ้าแม่",
          "D": "หลวงพ่อ"
        },
        "correct": "B",
        "explanation": "เจ้าหน้าที่นิติฯ บอกว่าเป็นเจ้าที่ไม่ใช่เทวดา"
      },
      {
        "question": "คุณเอ็มมาเข้าใจความแตกต่างระหว่างเทวดาและเจ้าที่หรือไม่",
        "options": {
          "A": "เข้าใจ",
          "B": "ไม่เข้าใจ",
          "C": "เข้าใจได้บ้าง",
          "D": "ไม่สนใจ"
        },
        "correct": "B",
        "explanation": "ฉันฟังแล้วไม่เข้าใจ"
      },
      {
        "question": "เมื่อคุณเอ็มมาไม่เข้าใจเขาก็พูดกับเจ้าหน้าที่นิติฯ ว่าอะไร",
        "options": {
          "A": "ช่วยอธิบายให้ชัดเจนหน่อย",
          "B": "ฉันไม่เชื่อในศาสนา",
          "C": "ฉันงงไปหมดแล้ว",
          "D": "เรื่องนี้ไม่สำคัญ"
        },
        "correct": "C",
        "explanation": "ฉันพูดว่า 'ฉันงงไปหมดแล้ว'"
      }
    ],
    "id": 12,
    "thai_title": "ทำบุญคอนโดฯ",
    "english_title": "Condo Merit Making"
  },
  {
    "chapter": 13,
    "vocabulary": [
      {
        "thai": "เทศกาล",
        "romanization": "thet-sa-kan",
        "english": "festival",
        "german": "Festival",
        "example_thai": "เทศกาลสำคัญของคนไทย",
        "example_english": "Important festivals of Thai people",
        "example_german": "Wichtige Feste der Thais"
      },
      {
        "thai": "ปีใหม่",
        "romanization": "pi-mai",
        "english": "New Year",
        "german": "Neujahr",
        "example_thai": "เทศกาลปีใหม่เป็นเทศกาลสำคัญ",
        "example_english": "New Year festival is an important festival",
        "example_german": "Das Neujahr ist ein wichtiges Fest"
      },
      {
        "thai": "สงกรานต์",
        "romanization": "song-kran",
        "english": "Songkran festival",
        "german": "Songkran",
        "example_thai": "สงกรานต์เป็นเทศกาลน้ำของไทย",
        "example_english": "Songkran is Thailand's water festival",
        "example_german": "Songkran ist Thailands Wasserfest"
      },
      {
        "thai": "ลอยกระทง",
        "romanization": "loi-kra-thong",
        "english": "Loy Kratong festival",
        "german": "Loy Krathong",
        "example_thai": "เทศกาลลอยกระทงมีความสวยงาม",
        "example_english": "Loy Kratong festival is beautiful",
        "example_german": "Das Loy Krathong-Fest ist wunderschön"
      },
      {
        "thai": "ปกติ",
        "romanization": "pa-ka-ti",
        "english": "normally, usually",
        "german": "normalerweise",
        "example_thai": "ปกติคนไทยฉลองปีใหม่ตอนกลางคืน",
        "example_english": "Normally Thai people celebrate New Year at night",
        "example_german": "Normalerweise feiern Thais Neujahr nachts"
      },
      {
        "thai": "ฉลอง",
        "romanization": "cha-long",
        "english": "to celebrate",
        "german": "feiern",
        "example_thai": "ฉลองเทศกาลสงกรานต์",
        "example_english": "Celebrate Songkran festival",
        "example_german": "Songkran feiern"
      },
      {
        "thai": "กลางคืน",
        "romanization": "klang-khuen",
        "english": "night time",
        "german": "Nacht",
        "example_thai": "ฉลองตอนกลางคืน",
        "example_english": "Celebrate at night",
        "example_german": "Nachts feiern"
      },
      {
        "thai": "กลางวัน",
        "romanization": "klang-wan",
        "english": "day time",
        "german": "Tag",
        "example_thai": "ฉลองตอนกลางวัน",
        "example_english": "Celebrate during the day",
        "example_german": "Tagsüber feiern"
      },
      {
        "thai": "เล่นสาดน้ำ",
        "romanization": "len-sad-nam",
        "english": "playing splashing water",
        "german": "Wasser spritzen",
        "example_thai": "สงกรานต์มีการเล่นสาดน้ำ",
        "example_english": "Songkran involves splashing water",
        "example_german": "Songkran beinhaltet Wasser spritzen"
      },
      {
        "thai": "วันหยุดยาว",
        "romanization": "wan-yut-yao",
        "english": "long weekend",
        "german": "langes Wochenende",
        "example_thai": "ช่วงเทศกาลที่มีวันหยุดยาว",
        "example_english": "Festival period with long weekend",
        "example_german": "Festivalzeitraum mit langem Wochenende"
      },
      {
        "thai": "หรือไม่ก็",
        "romanization": "rue-mai-ko",
        "english": "or else",
        "german": "oder sonst",
        "example_thai": "ไปเที่ยวหรือไม่ก็กลับบ้าน",
        "example_english": "Go out or else go home",
        "example_german": "Weggehen oder sonst nach Hause gehen"
      },
      {
        "thai": "รู้สึก",
        "romanization": "ru-seuk",
        "english": "feel",
        "german": "fühlen",
        "example_thai": "รู้สึกสบายใจ",
        "example_english": "Feel comfortable",
        "example_german": "Sich wohl fühlen"
      },
      {
        "thai": "ฝึก",
        "romanization": "feuk",
        "english": "to practice",
        "german": "üben",
        "example_thai": "ฝึกขับรถในช่วงสงกรานต์",
        "example_english": "Practice driving during Songkran",
        "example_german": "Während Songkran Auto fahren üben"
      },
      {
        "thai": "ขับรถ",
        "romanization": "khap-rot",
        "english": "to drive",
        "german": "Auto fahren",
        "example_thai": "ฉันชอบขับรถ",
        "example_english": "I like to drive",
        "example_german": "Ich mag Auto fahren"
      },
      {
        "thai": "เมา",
        "romanization": "mao",
        "english": "drunk",
        "german": "betrunken",
        "example_thai": "คนที่กินเหล้าเมา",
        "example_english": "People who drink and get drunk",
        "example_german": "Menschen die trinken und betrunken werden"
      },
      {
        "thai": "อุบัติเหตุ",
        "romanization": "u-bat-ti-het",
        "english": "accident",
        "german": "Unfall",
        "example_thai": "มีอุบัติเหตุในช่วงสงกรานต์",
        "example_english": "There are accidents during Songkran",
        "example_german": "Es gibt Unfälle während Songkran"
      },
      {
        "thai": "ที่สุด",
        "romanization": "thi-sud",
        "english": "the most",
        "german": "am meisten",
        "example_thai": "ชอบสงกรานต์มากที่สุด",
        "example_english": "Like Songkran the most",
        "example_german": "Songkran am meisten mögen"
      },
      {
        "thai": "คิดถึง",
        "romanization": "khit-theung",
        "english": "to miss someone/something",
        "german": "vermissen",
        "example_thai": "คิดถึงบ้านและเพื่อนๆ",
        "example_english": "Miss home and friends",
        "example_german": "Zuhause und Freunde vermissen"
      }
    ],
    "reading": [
      {
        "thai": "เทศกาลสำคัญของคนไทยคือเทศกาลปีใหม่ สงกรานต์ และลอยกระทง",
        "english": "The important festivals of Thai people are New Year, Songkran, and Loy Kratong",
        "german": "Die wichtigen Feste der Thais sind Neujahr, Songkran und Loy Krathong"
      },
      {
        "thai": "ปกติคนไทยฉลองเทศกาลปีใหม่ตอนกลางคืนเพราะอากาศเย็นสบาย",
        "english": "Usually Thai people celebrate New Year at night because the weather is cool and comfortable",
        "german": "Normalerweise feiern Thais Neujahr nachts, weil das Wetter kühl und angenehm ist"
      },
      {
        "thai": "ส่วนใหญ่ไปกินข้าวกินเหล้ากับเพื่อนที่ร้านอาหาร",
        "english": "Most go to eat and drink with friends at restaurants",
        "german": "Die meisten gehen mit Freunden in Restaurants essen und trinken"
      },
      {
        "thai": "เทศกาลสงกรานต์จะฉลองกันตอนกลางวันเพราะมีการเล่นสาดน้ำ",
        "english": "Songkran festival is celebrated during the day because there is water splashing",
        "german": "Songkran wird tagsüber gefeiert, weil es Wasserspritzen gibt"
      },
      {
        "thai": "ฉันสังเกตว่าช่วงเทศกาลที่มีวันหยุดยาวกรุงเทพฯ จะเงียบมากเพราะคนออกไปเที่ยว",
        "english": "I noticed that during festivals with long weekends Bangkok becomes very quiet because people go out",
        "german": "Ich bemerkte, dass Bangkok während Feste mit langen Wochenenden sehr ruhig wird, weil Menschen weggehen"
      },
      {
        "thai": "เพื่อนคนไทยเล่าว่าเขาฝึกขับรถในกรุงเทพฯ ในช่วงสงกรานต์เพราะมีรถน้อย",
        "english": "A Thai friend told me he practices driving in Bangkok during Songkran because there are fewer cars",
        "german": "Ein Thai-Freund erzählte mir, dass er während Songkran in Bangkok Auto fahren übt, weil es weniger Autos gibt"
      },
      {
        "thai": "คนไทยหลายคนบอกว่าไม่ชอบเทศกาลสงกรานต์เพราะไม่ชอบเล่นน้ำ",
        "english": "Many Thai people say they don't like Songkran festival because they don't like playing water",
        "german": "Viele Thais sagen, dass sie Songkran nicht mögen, weil sie Wasserspritzen nicht mögen"
      },
      {
        "thai": "สงกรานต์เป็นช่วงที่คนมักจะกินเหล้าเมาและมีอุบัติเหตุ",
        "english": "Songkran is a time when people often drink and get drunk and there are accidents",
        "german": "Songkran ist eine Zeit, in der Menschen oft trinken und betrunken werden und es Unfälle gibt"
      },
      {
        "thai": "ฉันชอบเทศกาลสงกรานต์มากที่สุดเพราะสนุก",
        "english": "I like Songkran festival the most because it is fun",
        "german": "Ich mag Songkran am meisten, weil es Spaß macht"
      },
      {
        "thai": "เราสองคนไม่ชอบเทศกาลปีใหม่เพราะเราคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
        "english": "The two of us don't like New Year festival because we miss our home and friends in England",
        "german": "Wir beiden mögen Neujahr nicht, weil wir unser Zuhause und unsere Freunde in England vermissen"
      }
    ],
    "structures": [
      {
        "pattern": "ปกติ + sentence",
        "meaning": "Normally/Usually [sentence]",
        "examples": [
          {
            "thai": "ปกติผม/ฉันไม่กินเหล้า",
            "english": "Usually I don't drink alcohol",
            "german": "Normalerweise trinke ich keinen Alkohol"
          }
        ]
      },
      {
        "pattern": "choice A หรือไม่ก็ choice B",
        "meaning": "Choice A or else choice B",
        "examples": [
          {
            "thai": "ไปเที่ยวหรือไม่ก็กลับบ้าน",
            "english": "Go out or else go home",
            "german": "Weggehen oder sonst nach Hause gehen"
          }
        ]
      },
      {
        "pattern": "adjective/adverb + ที่สุด",
        "meaning": "the most + adjective/adverb",
        "examples": [
          {
            "thai": "สนุกที่สุด",
            "english": "the most fun",
            "german": "am meisten Spaß"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        "เทศกาลสำคัญของคนไทยคือเทศกาลอะไรบ้าง",
        "มีเทศกาลอะไรบ้างที่คนไทยฉลองตอนกลางคืน",
        "เทศกาลอะไรที่ฉลองตอนกลางวัน",
        "ทำไมกรุงเทพฯ จะเงียบในช่วงวันหยุดยาว",
        "ทำไมบางคนฝึกขับรถในช่วงเทศกาลสงกรานต์",
        "คนกรุงเทพฯ ที่ไม่ไปเที่ยวในช่วงวันหยุดยาวจะมีกิจกรรมอะไร",
        "ทำไมคนไทยบางคนไม่ชอบเทศกาลสงกรานต์",
        "คุณเอ็มมาชอบเทศกาลอะไรมากที่สุด ทำไม",
        "คุณคริสชอบเทศกาลอะไรมากที่สุด ทำไม",
        "ทั้งสองคนไม่ชอบเทศกาลอะไร ทำไม"
      ],
      "pronunciation": [
        "ปกติผม/ฉันไม่กินเหล้า แต่ถ้าต้องฉลองอะไรก็จะกินนิดหน่อย"
      ],
      "translation": [
        "I like a long weekend in Bangkok. It has less traffic congestion, less people, and the weather is good.",
        "I feel unsafe when I see drunk people."
      ]
    },
    "quiz": [
      {
        "question": "เทศกาลสำคัญของคนไทยมีกี่เทศกาล",
        "options": {
          "A": "สองเทศกาล",
          "B": "สามเทศกาล",
          "C": "สี่เทศกาล",
          "D": "ห้าเทศกาล"
        },
        "correct": "B",
        "explanation": "เทศกาลสำคัญมีสามเทศกาล คือปีใหม่ สงกรานต์ และลอยกระทง"
      },
      {
        "question": "เทศกาลปีใหม่ฉลองตอนไหน",
        "options": {
          "A": "ตอนเช้า",
          "B": "ตอนบ่าย",
          "C": "ตอนกลางคืน",
          "D": "ตอนเวลาไหนก็ได้"
        },
        "correct": "C",
        "explanation": "ปกติคนไทยฉลองตอนกลางคืนเพราะอากาศเย็นสบาย"
      },
      {
        "question": "เทศกาลสงกรานต์ฉลองตอนไหน",
        "options": {
          "A": "ตอนกลางคืน",
          "B": "ตอนกลางวัน",
          "C": "ตอนเช้า",
          "D": "ตอนค่ำ"
        },
        "correct": "B",
        "explanation": "เทศกาลสงกรานต์ฉลองตอนกลางวันเพราะมีการเล่นสาดน้ำ"
      },
      {
        "question": "ในช่วงวันหยุดยาว กรุงเทพฯ จะเป็นอย่างไร",
        "options": {
          "A": "แออัด",
          "B": "เงียบมาก",
          "C": "หนาวมาก",
          "D": "ร้อนมาก"
        },
        "correct": "B",
        "explanation": "กรุงเทพฯ จะเงียบมากเพราะคนออกไปเที่ยวหรือกลับบ้าน"
      },
      {
        "question": "ทำไมเพื่อนคนไทยฝึกขับรถในช่วงสงกรานต์",
        "options": {
          "A": "เพราะรถเหมือนกัน",
          "B": "เพราะมีรถน้อย",
          "C": "เพราะเขาเกียจคร่อ",
          "D": "เพราะเขาหนาวใจ"
        },
        "correct": "B",
        "explanation": "เขาฝึกขับรถในช่วงสงกรานต์เพราะมีรถน้อย"
      },
      {
        "question": "ทำไมคนไทยบางคนไม่ชอบเทศกาลสงกรานต์",
        "options": {
          "A": "เพราะเหนื่อย",
          "B": "เพราะไม่มีเงิน",
          "C": "เพราะไม่ชอบเล่นน้ำและกังวลเรื่องอุบัติเหตุ",
          "D": "เพราะเด็ด"
        },
        "correct": "C",
        "explanation": "ไม่ชอบเพราะไม่ชอบเล่นน้ำและเกิดอุบัติเหตุ"
      },
      {
        "question": "คุณเอ็มมาชอบเทศกาลอะไรมากที่สุด",
        "options": {
          "A": "เทศกาลปีใหม่",
          "B": "เทศกาลสงกรานต์",
          "C": "เทศกาลลอยกระทง",
          "D": "ไม่มีเทศกาลไหนชอบ"
        },
        "correct": "B",
        "explanation": "ฉันชอบเทศกาลสงกรานต์มากที่สุดเพราะสนุก"
      },
      {
        "question": "คุณคริสชอบเทศกาลอะไรมากที่สุด",
        "options": {
          "A": "เทศกาลปีใหม่",
          "B": "เทศกาลสงกรานต์",
          "C": "เทศกาลลอยกระทง",
          "D": "ไม่ชอบเทศกาลไหนเลย"
        },
        "correct": "C",
        "explanation": "คุณคริสชอบเทศกาลลอยกระทง"
      },
      {
        "question": "ทั้งสองคนไม่ชอบเทศกาลปีใหม่ เพราะเหตุใด",
        "options": {
          "A": "เพราะแพง",
          "B": "เพราะเบื่อ",
          "C": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
          "D": "เพราะไม่มีเวลา"
        },
        "correct": "C",
        "explanation": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ"
      },
      {
        "question": "ช่วงเทศกาลที่มีวันหยุดยาว คนที่ไม่ไปเที่ยวจะไปทำอะไร",
        "options": {
          "A": "ไปทำงาน",
          "B": "ไปเจอเพื่อนหรือไปช็อปปิ้ง",
          "C": "อยู่บ้านนอน",
          "D": "ไปเรียนหนังสือ"
        },
        "correct": "B",
        "explanation": "ไปเจอกับเพื่อนๆ หรือไปช็อปปิ้ง"
      }
    ],
    "id": 13,
    "thai_title": "เทศกาล",
    "english_title": "Festivals"
  },
  {
    "chapter": 14,
    "vocabulary": [
      {
        "thai": "ถุง",
        "romanization": "thung",
        "english": "a bag",
        "german": "Tüte",
        "example_thai": "ซื้อของใส่ถุงพลาสติก",
        "example_english": "Buy stuff in a plastic bag",
        "example_german": "Sachen in einer Plastiktüte kaufen"
      },
      {
        "thai": "เยอะ",
        "romanization": "yeuh",
        "english": "a lot",
        "german": "viel",
        "example_thai": "ใช้ถุงพลาสติกเยอะมาก",
        "example_english": "Use a lot of plastic bags",
        "example_german": "Viele Plastiktüten verwenden"
      },
      {
        "thai": "ครั้งเดียว",
        "romanization": "khrang-diao",
        "english": "one time",
        "german": "einmal",
        "example_thai": "ใช้ครั้งเดียวแล้วทิ้ง",
        "example_english": "Use once and throw away",
        "example_german": "Einmal verwenden und wegwerfen"
      },
      {
        "thai": "ทิ้ง",
        "romanization": "ting",
        "english": "throw away",
        "german": "wegwerfen",
        "example_thai": "ทิ้งถุงพลาสติก",
        "example_english": "Throw away plastic bags",
        "example_german": "Plastiktüten wegwerfen"
      },
      {
        "thai": "ส่วนหนึ่ง",
        "romanization": "suan-neung",
        "english": "a part of",
        "german": "ein Teil von",
        "example_thai": "ถุงพลาสติกเป็นส่วนหนึ่งของปัญหา",
        "example_english": "Plastic bags are part of the problem",
        "example_german": "Plastiktüten sind ein Teil des Problems"
      },
      {
        "thai": "น้ำท่วม",
        "romanization": "nam-thuam",
        "english": "flood",
        "german": "Überschwemmung",
        "example_thai": "ถุงพลาสติกทำให้น้ำท่วม",
        "example_english": "Plastic bags cause floods",
        "example_german": "Plastiktüten verursachen Überschwemmungen"
      },
      {
        "thai": "ลูกค้า",
        "romanization": "luk-kha",
        "english": "a customer",
        "german": "Kunde",
        "example_thai": "ร้านให้ถุงพลาสติกกับลูกค้า",
        "example_english": "Stores give plastic bags to customers",
        "example_german": "Läden geben Plastiktüten an Kunden"
      },
      {
        "thai": "นโยบาย",
        "romanization": "na-yo-bai",
        "english": "a policy",
        "german": "Politik/Richtlinie",
        "example_thai": "นโยบายไม่ให้ถุงพลาสติก",
        "example_english": "Policy of not giving plastic bags",
        "example_german": "Politik, keine Plastiktüten zu geben"
      },
      {
        "thai": "เวลา",
        "romanization": "we-la",
        "english": "when",
        "german": "wenn/Zeit",
        "example_thai": "เวลาซื้อของไม่ได้ถุงพลาสติก",
        "example_english": "When buying things there are no plastic bags",
        "example_german": "Wenn man etwas kauft, gibt es keine Plastiktüten"
      },
      {
        "thai": "เริ่มตั้งแต่",
        "romanization": "reuhm-tang-tae",
        "english": "start from",
        "german": "anfangen seit",
        "example_thai": "เริ่มตั้งแต่วันที่ 1 มกราคม",
        "example_english": "Start from January 1st",
        "example_german": "Seit dem 1. Januar"
      },
      {
        "thai": "ขอความร่วมมือ",
        "romanization": "kho-khwam-ruam-mue",
        "english": "ask for cooperation",
        "german": "um Zusammenarbeit bitten",
        "example_thai": "ขอความร่วมมือจากประชาชน",
        "example_english": "Ask for cooperation from the public",
        "example_german": "Um Zusammenarbeit der Öffentlichkeit bitten"
      },
      {
        "thai": "กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",
        "romanization": "kra-suang-thrap-ya-korn-tham-ma-chat-lae-sing-waet-lone",
        "english": "Ministry of Natural Resources and Environment",
        "german": "Ministerium für natürliche Ressourcen und Umwelt",
        "example_thai": "กระทรวงทรัพยากรขอความร่วมมือ",
        "example_english": "The ministry asked for cooperation",
        "example_german": "Das Ministerium bat um Zusammenarbeit"
      },
      {
        "thai": "เดี๋ยวนี้",
        "romanization": "diao-ni",
        "english": "now, nowadays",
        "german": "heutzutage",
        "example_thai": "เดี๋ยวนี้ไม่มีถุงพลาสติก",
        "example_english": "Nowadays there are no plastic bags",
        "example_german": "Heutzutage gibt es keine Plastiktüten"
      },
      {
        "thai": "กระเป๋าผ้า",
        "romanization": "kra-pao-pha",
        "english": "cloth bag",
        "german": "Stofftasche",
        "example_thai": "ใช้กระเป๋าผ้าแทนถุงพลาสติก",
        "example_english": "Use cloth bags instead of plastic bags",
        "example_german": "Stofftaschen statt Plastiktüten verwenden"
      },
      {
        "thai": "กระเป๋าสะพาย",
        "romanization": "kra-pao-sa-phai",
        "english": "shoulder bag",
        "german": "Umhängetasche",
        "example_thai": "เอาของใส่ในกระเป๋าสะพาย",
        "example_english": "Put stuff in a shoulder bag",
        "example_german": "Sachen in eine Umhängetasche packen"
      },
      {
        "thai": "ได้ยิน",
        "romanization": "dai-yin",
        "english": "hear",
        "german": "hören",
        "example_thai": "เคยได้ยินคนพูดไม่เอาถุง",
        "example_english": "Have heard people say no bag",
        "example_german": "Ich habe gehört, dass Menschen 'keine Tüte' sagen"
      },
      {
        "thai": "ประทับใจ",
        "romanization": "pra-thap-jai",
        "english": "to be impressed",
        "german": "beeindruckt sein",
        "example_thai": "ประทับใจมาก",
        "example_english": "Very impressed",
        "example_german": "Sehr beeindruckt"
      },
      {
        "thai": "ชิน",
        "romanization": "chin",
        "english": "get used to",
        "german": "sich gewöhnen",
        "example_thai": "ชินกับการไม่เอาถุง",
        "example_english": "Get used to not taking bags",
        "example_german": "Sich daran gewöhnen, keine Tüten zu nehmen"
      }
    ],
    "reading": [
      {
        "thai": "ฉันเคยอ่านสารคดี เขาบอกว่าคนไทยใช้ถุงพลาสติกเยอะมาก",
        "english": "I once read a documentary that said Thai people use a lot of plastic bags",
        "german": "Ich habe einmal eine Dokumentation gelesen, die sagte, dass Thais viele Plastiktüten verwenden"
      },
      {
        "thai": "ใช้ใส่อาหาร ใส่ของ และส่วนใหญ่ใช้ครั้งเดียวแล้วก็ทิ้ง",
        "english": "Used for food, for things, and mostly used once then thrown away",
        "german": "Wird für Lebensmittel verwendet, für Dinge, und meistens einmal verwendet dann weggeworfen"
      },
      {
        "thai": "ที่กรุงเทพฯ ถุงพลาสติกเป็นส่วนหนึ่งที่ทำให้น้ำท่วม",
        "english": "In Bangkok plastic bags are part of what causes floods",
        "german": "In Bangkok sind Plastiktüten ein Teil dessen, was Überschwemmungen verursacht"
      },
      {
        "thai": "แต่ตอนนี้ซูเปอร์มาร์เก็ตที่ประเทศไทยไม่มีถุงพลาสติกให้ลูกค้าแล้ว",
        "english": "But now supermarkets in Thailand no longer give plastic bags to customers",
        "german": "Aber jetzt geben Supermärkte in Thailand keine Plastiktüten mehr an Kunden"
      },
      {
        "thai": "ฉันชอบนโยบายนี้มาก",
        "english": "I like this policy very much",
        "german": "Ich mag diese Politik sehr gerne"
      },
      {
        "thai": "ซูเปอร์มาร์เก็ตที่ประเทศไทยเริ่มตั้งแต่วันที่ 1 มกราคม 2563",
        "english": "Supermarkets in Thailand started from January 1, 2020",
        "german": "Supermärkte in Thailand begannen ab dem 1. Januar 2020"
      },
      {
        "thai": "เดี๋ยวนี้ฉันเห็นคนไทยมีกระเป๋าพลาสติกใบใหญ่ใส่ของที่ซื้อในซูเปอร์ฯ",
        "english": "Nowadays I see Thai people with large plastic bags for things bought at supermarkets",
        "german": "Heutzutage sehe ich Thais mit großen Plastiktüten für Dinge, die im Supermarkt gekauft wurden"
      },
      {
        "thai": "คนที่ซื้อของเล็กๆ น้อยๆ จากร้านสะดวกซื้อก็ใช้กระเป๋าผ้า",
        "english": "People who buy small things from convenience stores use cloth bags",
        "german": "Menschen, die kleine Dinge aus Convenience Stores kaufen, verwenden Stofftaschen"
      },
      {
        "thai": "บางคนก็เอาของใส่ในกระเป๋าสะพายของตัวเอง",
        "english": "Some people put things in their own shoulder bags",
        "german": "Einige Menschen packen Dinge in ihre eigenen Umhängetaschen"
      },
      {
        "thai": "ฉันเคยได้ยินคนไทยที่ซื้อเสื้อผ้าพูดกับคนขายว่า 'ไม่เอาถุงค่ะ'",
        "english": "I have heard Thai people buying clothes tell the seller 'No bag please'",
        "german": "Ich habe gehört, dass Thais, die Kleidung kaufen, dem Verkäufer 'Keine Tüte bitte' sagen"
      }
    ],
    "structures": [
      {
        "pattern": "Subject + verb + เยอะ",
        "meaning": "Subject verbs a lot",
        "examples": [
          {
            "thai": "ใช้ถุงพลาสติกเยอะ",
            "english": "Use plastic bags a lot",
            "german": "Viele Plastiktüten verwenden"
          }
        ]
      },
      {
        "pattern": "Subject + do something + เยอะ",
        "meaning": "Subject does a lot of something",
        "examples": [
          {
            "thai": "คนไทยใช้ถุงพลาสติกเยอะมาก",
            "english": "Thai people use plastic bags a lot",
            "german": "Thais verwenden sehr viele Plastiktüten"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        "คุณเอ็มมารู้เกี่ยวกับการใช้ถุงพลาสติกของคนไทยจากที่ไหน",
        "คนไทยใช้ถุงพลาสติกใส่อะไรบ้าง",
        "คนไทยส่วนใหญ่ใช้ถุงพลาสติกหนึ่งใบหลายๆ ครั้งใช่ไหม",
        "ที่กรุงเทพฯ ถุงพลาสติกทำให้เกิดปัญหาอะไรในสิ่งแวดล้อม",
        "ซูเปอร์มาร์เก็ตที่ประเทศไทยไม่ให้ถุงพลาสติกเพราะเป็นกฎหมายใช่ไหม",
        "ซูเปอร์มาร์เก็ตที่ประเทศไทยเริ่มนโยบายไม่ให้ถุงพลาสติกตั้งแต่เมื่อไหร่",
        "คนไทยใช้อะไรใส่ของเวลาไปซื้อของที่ซูเปอร์มาร์เก็ต",
        "คนที่ไม่ชอบนโยบาย ไม่ให้ถุงพลาสติก บ่นว่าอะไร",
        "คุณเอ็มมาคิดอย่างไรกับคนที่บ่นเกี่ยวกับนโยบายนี้",
        "ถ้าไม่อยากได้ถุงพลาสติกเวลาไปซื้อของ ต้องพูดว่าอย่างไร"
      ],
      "pronunciation": [
        "ไม่เอาถุงครับ/ค่ะ"
      ],
      "translation": [
        "Nowadays, I do not use plastic bag when I go to a supermarket.",
        "I get used to life in Bangkok after living here for six months."
      ]
    },
    "quiz": [
      {
        "question": "คุณเอ็มมารู้เรื่องการใช้ถุงพลาสติกของคนไทยจากสื่อใด",
        "options": {
          "A": "หนังสือพิมพ์",
          "B": "สารคดี",
          "C": "อินเทอร์เน็ต",
          "D": "เพื่อนบ้าน"
        },
        "correct": "B",
        "explanation": "ฉันเคยอ่านสารคดี"
      },
      {
        "question": "คนไทยใช้ถุงพลาสติกเพื่อใส่อะไรบ้าง",
        "options": {
          "A": "เฉพาะอาหาร",
          "B": "เฉพาะเสื้อผ้า",
          "C": "อาหาร ของ และอื่นๆ",
          "D": "เล่นเท่านั้น"
        },
        "correct": "C",
        "explanation": "ใช้ใส่อาหาร ใส่ของ และอื่นๆ"
      },
      {
        "question": "ถุงพลาสติกในกรุงเทพฯ ก่อให้เกิดปัญหาอะไร",
        "options": {
          "A": "มลพิษทางอากาศ",
          "B": "น้ำท่วม",
          "C": "สัญญาณรบกวน",
          "D": "การหนักใจ"
        },
        "correct": "B",
        "explanation": "ถุงพลาสติกเป็นส่วนหนึ่งที่ทำให้น้ำท่วม"
      },
      {
        "question": "นโยบายไม่ให้ถุงพลาสติกเป็นกฎหมายหรือไม่",
        "options": {
          "A": "ใช่ เป็นกฎหมาย",
          "B": "ไม่ใช่ เป็นการขอความร่วมมือ",
          "C": "เป็นกฎที่ไม่บังคับ",
          "D": "ไม่ชัดเจน"
        },
        "correct": "B",
        "explanation": "ไม่ใช่กฎหมาย แต่เป็นการขอความร่วมมือ"
      },
      {
        "question": "ซูเปอร์มาร์เก็ตเริ่มนโยบายนี้เมื่อไหร่",
        "options": {
          "A": "2560",
          "B": "2561",
          "C": "2562",
          "D": "2563"
        },
        "correct": "D",
        "explanation": "เริ่มตั้งแต่วันที่ 1 มกราคม 2563"
      },
      {
        "question": "เดี๋ยวนี้คนไทยใช้อะไรแทนถุงพลาสติก",
        "options": {
          "A": "กระเป๋าผ้าเท่านั้น",
          "B": "กระเป๋าสะพายเท่านั้น",
          "C": "กระเป๋าผ้า กระเป๋าสะพาย และถุงพลาสติกใหญ่",
          "D": "ไม่ใช้อะไรเลย"
        },
        "correct": "C",
        "explanation": "ใช้กระเป๋าผ้า กระเป๋าสะพาย และกระเป๋าพลาสติกใหญ่"
      },
      {
        "question": "คุณเอ็มมาประทับใจเรื่องใด",
        "options": {
          "A": "ร้านค้ามีหลายร้าน",
          "B": "เด็กพูดว่าไม่เอาถุง",
          "C": "คนไทยไม่มีเงิน",
          "D": "คนไทยชอบท่องเที่ยว"
        },
        "correct": "B",
        "explanation": "ประทับใจที่ได้ยินเด็กพูดไม่เอาถุง"
      },
      {
        "question": "คนไทยชินกับสิ่งใด",
        "options": {
          "A": "การใช้เยอะมาก",
          "B": "การไม่เอาถุงพลาสติก",
          "C": "การสูญเสีย",
          "D": "การเบื่อ"
        },
        "correct": "B",
        "explanation": "ชินกับการไม่เอาถุงพลาสติก"
      },
      {
        "question": "เพื่อนคนไทยบางคนบ่นเกี่ยวกับเรื่องอะไร",
        "options": {
          "A": "การไม่ให้ถุงไม่สะดวก",
          "B": "ราคาแพง",
          "C": "เสื้อผ้าไม่ดี",
          "D": "มนุษยธรรม"
        },
        "correct": "A",
        "explanation": "บ่นว่าการไม่ให้ถุงทำให้ลูกค้าไม่สะดวก"
      },
      {
        "question": "คุณเอ็มมาคิดว่าเรื่องนี้เป็นเรื่องอะไร",
        "options": {
          "A": "เรื่องที่ต้องต่อสู้",
          "B": "นานาจิตตัง",
          "C": "เรื่องที่ไม่สำคัญ",
          "D": "เรื่องที่สำคัญมาก"
        },
        "correct": "B",
        "explanation": "ฉันคิดว่าเป็นเรื่องนานาจิตตัง"
      }
    ],
    "id": 14,
    "thai_title": "ถุงพลาสติก",
    "english_title": "Plastic Bags"
  },
  {
    "chapter": 15,
    "vocabulary": [
      {
        "thai": "ทุกครั้ง",
        "romanization": "thuk-khrang",
        "english": "every time",
        "german": "jedes Mal",
        "example_thai": "ทุกครั้งที่ครอบครัวมา",
        "example_english": "Every time the family comes",
        "example_german": "Jedes Mal wenn die Familie kommt"
      },
      {
        "thai": "ขอให้",
        "romanization": "kho-hai",
        "english": "to ask someone do something",
        "german": "bitten zu",
        "example_thai": "ขอให้พาไปเที่ยว",
        "example_english": "Ask to be taken sightseeing",
        "example_german": "Darum bitten, mitgenommen zu werden"
      },
      {
        "thai": "รู้มาว่า",
        "romanization": "ru-ma-wa",
        "english": "have heard (or known) that…",
        "german": "erfahren haben dass",
        "example_thai": "รู้มาว่าเยาวราชสวย",
        "example_english": "Have heard that Yaowarat is beautiful",
        "example_german": "Ich habe gehört, dass Yaowarat schön ist"
      },
      {
        "thai": "น่าตื่นตาตื่นใจ",
        "romanization": "na-tuen-ta-tuen-jai",
        "english": "amazing",
        "german": "erstaunlich",
        "example_thai": "เยาวราชมีอะไรน่าตื่นตาตื่นใจ",
        "example_english": "Yaowarat has amazing things",
        "example_german": "Yaowarat hat erstaunliche Dinge"
      },
      {
        "thai": "คนไทยเชื้อสายจีน",
        "romanization": "khon-thai-chuea-sai-jin",
        "english": "Chinese-Thai people",
        "german": "thailändisch-chinesische Menschen",
        "example_thai": "คนไทยเชื้อสายจีนไปซื้อของ",
        "example_english": "Chinese-Thai people go shopping",
        "example_german": "Thailändisch-chinesische Menschen gehen einkaufen"
      },
      {
        "thai": "ยาสมุนไพร",
        "romanization": "ya-sa-mun-phai",
        "english": "herbal medicine",
        "german": "Kräutermedizin",
        "example_thai": "ซื้อยาสมุนไพรจีน",
        "example_english": "Buy Chinese herbal medicine",
        "example_german": "Chinesische Kräutermedizin kaufen"
      },
      {
        "thai": "ความเชื่อ",
        "romanization": "khwam-chuea",
        "english": "a belief",
        "german": "Glaube",
        "example_thai": "ความเชื่อของคนจีน",
        "example_english": "Beliefs of Chinese people",
        "example_german": "Glauben der Chinesen"
      },
      {
        "thai": "ทอง",
        "romanization": "thong",
        "english": "gold",
        "german": "Gold",
        "example_thai": "ซื้อทองที่เยาวราช",
        "example_english": "Buy gold in Yaowarat",
        "example_german": "Gold in Yaowarat kaufen"
      },
      {
        "thai": "บางส่วน",
        "romanization": "bang-suan",
        "english": "some parts",
        "german": "einige Teile",
        "example_thai": "ปิดถนนบางส่วน",
        "example_english": "Close some streets",
        "example_german": "Einige Straßen schließen"
      },
      {
        "thai": "พ่อค้าแม่ค้า",
        "romanization": "pho-kha-mae-kha",
        "english": "sellers",
        "german": "Händler",
        "example_thai": "พ่อค้าแม่ค้าขายอาหาร",
        "example_english": "Sellers sell food",
        "example_german": "Händler verkaufen Essen"
      },
      {
        "thai": "รถเข็น",
        "romanization": "rot-khen",
        "english": "a cart",
        "german": "Schubkarren",
        "example_thai": "เอารถเข็นออกมาขายอาหาร",
        "example_english": "Push carts out to sell food",
        "example_german": "Schubkarren herausschieben, um Essen zu verkaufen"
      },
      {
        "thai": "เต็มไปหมด",
        "romanization": "tem-pai-mot",
        "english": "full of…, plenty of…",
        "german": "überall voll",
        "example_thai": "อาหารเต็มไปหมด",
        "example_english": "Food is everywhere",
        "example_german": "Überall voll mit Essen"
      },
      {
        "thai": "มีชื่อเสียง",
        "romanization": "mi-chue-sia",
        "english": "to be famous",
        "german": "berühmt",
        "example_thai": "ร้านมีชื่อเสียง",
        "example_english": "The shop is famous",
        "example_german": "Das Geschäft ist berühmt"
      },
      {
        "thai": "มีสีสัน",
        "romanization": "mi-si-san",
        "english": "to be colorful",
        "german": "bunt/farbenfroh",
        "example_thai": "เยาวราชมีสีสันมาก",
        "example_english": "Yaowarat is very colorful",
        "example_german": "Yaowarat ist sehr farbenfroh"
      },
      {
        "thai": "ถ่ายรูป",
        "romanization": "thai-rup",
        "english": "to take a photo",
        "german": "Foto machen",
        "example_thai": "ถ่ายรูปลงอินสตาแกรม",
        "example_english": "Take photos for Instagram",
        "example_german": "Fotos für Instagram machen"
      },
      {
        "thai": "นักท่องเที่ยว",
        "romanization": "nak-thong-thiao",
        "english": "a tourist",
        "german": "Tourist",
        "example_thai": "นักท่องเที่ยวมากมาย",
        "example_english": "Many tourists",
        "example_german": "Viele Touristen"
      },
      {
        "thai": "บรรยากาศ",
        "romanization": "ban-ya-ka-sap",
        "english": "atmosphere",
        "german": "Atmosphäre",
        "example_thai": "บรรยากาศที่เยาวราช",
        "example_english": "The atmosphere of Yaowarat",
        "example_german": "Die Atmosphäre von Yaowarat"
      },
      {
        "thai": "ตลาดสด",
        "romanization": "ta-lad-sod",
        "english": "fresh market",
        "german": "Frischmarkt",
        "example_thai": "ซื้ออาหารที่ตลาดสด",
        "example_english": "Buy food at fresh market",
        "example_german": "Essen auf dem Frischmarkt kaufen"
      },
      {
        "thai": "เบื่อ",
        "romanization": "bueuh",
        "english": "to be bored",
        "german": "gelangweilt sein",
        "example_thai": "ไม่เคยเบื่อ",
        "example_english": "Never bored",
        "example_german": "Nie gelangweilt"
      }
    ],
    "reading": [
      {
        "thai": "ทุกครั้งที่ครอบครัวหรือเพื่อนของผมมาที่กรุงเทพฯ พวกเขาจะขอให้เราพาไปเที่ยวที่เยาวราช",
        "english": "Every time my family or friends come to Bangkok, they ask us to take them sightseeing in Yaowarat",
        "german": "Jedes Mal wenn meine Familie oder Freunde nach Bangkok kommen, bitten sie uns, sie nach Yaowarat zu nehmen"
      },
      {
        "thai": "พวกเขารู้มาว่าเยาวราชคือไชน่าทาวน์ของประเทศไทย",
        "english": "They have heard that Yaowarat is Thailand's Chinatown",
        "german": "Sie haben gehört, dass Yaowarat Thailands Chinatown ist"
      },
      {
        "thai": "มีอะไรๆ ที่น่าตื่นตาตื่นใจ",
        "english": "There are many amazing things",
        "german": "Es gibt viele erstaunliche Dinge"
      },
      {
        "thai": "ที่เยาวราชตอนกลางวันมีรถเยอะ",
        "english": "In Yaowarat during the day there are many cars",
        "german": "In Yaowarat tagsüber gibt es viele Autos"
      },
      {
        "thai": "เป็นเวลาที่คนไทยเชื้อสายจีนไปซื้ออาหารแบบจีน ยาสมุนไพรจีน",
        "english": "It is the time when Chinese-Thai people go buy Chinese food and Chinese herbal medicine",
        "german": "Es ist die Zeit, wenn Thai-Chinesen chinesisches Essen und chinesische Kräutermedizin kaufen"
      },
      {
        "thai": "ของที่เกี่ยวกับความเชื่อของคนจีน และที่นั่นมีร้านทองหลายร้าน",
        "english": "Things related to Chinese beliefs, and there are many gold shops there",
        "german": "Dinge im Zusammenhang mit chinesischen Überzeugungen, und es gibt viele Goldgeschäfte"
      },
      {
        "thai": "เวลาจะซื้อทองคนไทยชอบไปซื้อที่เยาวราช",
        "english": "When buying gold, Thai people like to go buy at Yaowarat",
        "german": "Wenn Gold gekauft wird, kaufen Thais gerne in Yaowarat"
      },
      {
        "thai": "ตอนกลางคืนที่เยาวราชจะปิดถนนบางส่วน",
        "english": "At night in Yaowarat some streets are closed",
        "german": "Nachts in Yaowarat werden einige Straßen geschlossen"
      },
      {
        "thai": "เพราะจะมีพ่อค้าแม่ค้าเอารถเข็นออกมาขายอาหารสตรีทฟู้ดเต็มไปหมด",
        "english": "Because sellers push carts out to sell street food everywhere",
        "german": "Weil Händler Schubkarren herausschieben, um überall Straßenessen zu verkaufen"
      },
      {
        "thai": "บางร้านมีโต๊ะและเก้าอี้ให้นั่งกินริมถนน บางร้านต้องยืนกิน",
        "english": "Some shops have tables and chairs to sit and eat on the street, some require standing to eat",
        "german": "Einige Geschäfte haben Tische und Stühle zum Sitzen und Essen auf der Straße, einige erfordern Stehen zum Essen"
      }
    ],
    "structures": [
      {
        "pattern": "Subject ขอให้ + someone do something",
        "meaning": "Subject asks someone to do something",
        "examples": [
          {
            "thai": "ขอให้พาไปเที่ยว",
            "english": "Ask to be taken sightseeing",
            "german": "Darum bitten, zum Sightseeing mitgenommen zu werden"
          }
        ]
      }
    ],
    "exercises": {
      "conversation": [
        "ไชน่าทาวน์ที่กรุงเทพฯ มีชื่อภาษาไทยว่าอะไร",
        "ทำไมครอบครัวหรือเพื่อนๆ ของคุณคริสอยากไปเที่ยวเยาวราช",
        "คนไทยเชื้อสายจีนไปซื้ออะไรที่เยาวราช",
        "ที่เยาวราชจะปิดถนนบางส่วนตอนกลางคืน เพื่ออะไร",
        "รถเข็นส่วนใหญ่ขายอะไร",
        "ร้านอาหารทุกร้านมีโต๊ะและเก้าอี้ให้นั่งกินอาหารใช่ไหม",
        "อาหารสตรีทฟู้ดราคาไม่แพงใช่ไหม",
        "วัยรุ่นไทยชอบไปทำอะไรที่เยาวราช",
        "นักท่องเที่ยวชอบไปทำอะไรที่เยาวราช",
        "คุณเอ็มมาชอบไปเยาวราชตอนไหน เขาไปทำอะไร"
      ],
      "pronunciation": [],
      "translation": [
        "We have known that ถนนข้าวสาร is a very famous street in Bangkok. Tourist go there at night for street food and seeing things. First time I went there it was very amazing.",
        "My friend asked me to bring him to เยาวราช at day time. He wanted to take photos of Chinese herbal medicine shops."
      ]
    },
    "quiz": [
      {
        "question": "เยาวราชคืออะไร",
        "options": {
          "A": "ชื่อของเมือง",
          "B": "ไชน่าทาวน์ของประเทศไทย",
          "C": "ชื่อของวัด",
          "D": "ชื่อของสระน้ำ"
        },
        "correct": "B",
        "explanation": "เยาวราชคือไชน่าทาวน์ของประเทศไทย"
      },
      {
        "question": "ครอบครัวของคุณคริสขอให้พาไปเยาวราช เพราะเหตุใด",
        "options": {
          "A": "เพราะต้องการเที่ยว",
          "B": "เพราะรู้มาว่ามีอะไรน่าตื่นตาตื่นใจ",
          "C": "เพราะต้องการซื้อของ",
          "D": "เพราะต้องการกินอาหาร"
        },
        "correct": "B",
        "explanation": "พวกเขารู้มาว่ามีอะไรน่าตื่นตาตื่นใจ"
      },
      {
        "question": "คนไทยเชื้อสายจีนไปเยาวราชเพื่อซื้ออะไร",
        "options": {
          "A": "เฉพาะอาหารจีน",
          "B": "เฉพาะยาสมุนไพร",
          "C": "อาหารจีน ยาสมุนไพร ของที่เกี่ยวกับความเชื่อ และทอง",
          "D": "เฉพาะเสื้อผ้า"
        },
        "correct": "C",
        "explanation": "ไปซื้ออาหารจีน ยาสมุนไพร ของเกี่ยวกับความเชื่อ และทอง"
      },
      {
        "question": "ทำไมที่เยาวราชต้องปิดถนนบางส่วนตอนกลางคืน",
        "options": {
          "A": "เพื่อซ่อมถนน",
          "B": "เพื่อให้พ่อค้าแม่ค้าขายอาหารสตรีทฟู้ด",
          "C": "เพื่อให้คนพักผ่อน",
          "D": "เพื่อลดจำนวนรถ"
        },
        "correct": "B",
        "explanation": "เพราะมีพ่อค้าแม่ค้าเอารถเข็นออกมาขาย"
      },
      {
        "question": "เยาวราชตอนกลางคืนมีอะไรขาย",
        "options": {
          "A": "เฉพาะอาหาร",
          "B": "อาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม",
          "C": "เฉพาะเสื้อผ้า",
          "D": "เฉพาะข้าวของ"
        },
        "correct": "B",
        "explanation": "ขายอาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม"
      },
      {
        "question": "ร้านที่มีชื่อเสียงมีลักษณะเป็นอย่างไร",
        "options": {
          "A": "ว่างเปล่า",
          "B": "มีคนน้อย",
          "C": "มีคิวยาว",
          "D": "เปิดเฉพาะตอนเช้า"
        },
        "correct": "C",
        "explanation": "ร้านที่มีชื่อเสียงจะมีคิวยาว"
      },
      {
        "question": "วัยรุ่นไทยไปเยาวราชเพื่อทำอะไร",
        "options": {
          "A": "ไปเรียนหนังสือ",
          "B": "ไปเจอแฟน",
          "C": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม",
          "D": "ไปทำบุญ"
        },
        "correct": "C",
        "explanation": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม"
      },
      {
        "question": "นักท่องเที่ยวไปเยาวราชเพื่อทำอะไร",
        "options": {
          "A": "ไปทำงาน",
          "B": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร",
          "C": "ไปทำบุญที่วัด",
          "D": "ไปพบเพื่อน"
        },
        "correct": "B",
        "explanation": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร"
      },
      {
        "question": "คุณเอ็มมาชอบไปเยาวราชตอนไหน",
        "options": {
          "A": "ตอนเช้า",
          "B": "ตอนบ่าย",
          "C": "ตอนเย็น",
          "D": "ตอนกลางคืน"
        },
        "correct": "A",
        "explanation": "คุณเอ็มมาชอบไปตอนเช้า"
      },
      {
        "question": "คุณเอ็มมาไปเยาวราชตอนเช้าเพื่อทำอะไร",
        "options": {
          "A": "ไปซื้อเสื้อผ้า",
          "B": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัด",
          "C": "ไปพบเพื่อน",
          "D": "ไปเรียนหนังสือ"
        },
        "correct": "B",
        "explanation": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัดไตรมิตร"
      }
    ],
    "id": 15,
    "thai_title": "เยาวราช",
    "english_title": "Yaowarat/Chinatown"
  },
  {
    "vocabulary": [
      {
        "thai": "ชื้น",
        "romanization": "chʉ̂n",
        "english": "humid, moist, damp",
        "german": "feucht",
        "example_thai": "อากาศในกรุงเทพฯ ชื้นมาก",
        "example_english": "The air in Bangkok is very humid",
        "example_german": "Die Luft in Bangkok ist sehr feucht"
      },
      {
        "thai": "เรื่อง",
        "romanization": "rʉ̂aŋ",
        "english": "matter",
        "german": "Angelegenheit",
        "example_thai": "นี่เป็นเรื่องสําคัญ",
        "example_english": "This is an important matter",
        "example_german": "Das ist eine wichtige Angelegenheit"
      },
      {
        "thai": "ความรู้สึก",
        "romanization": "khwaam rûu sʉk",
        "english": "feeling",
        "german": "Gefühl",
        "example_thai": "ฉันมีความรู้สึกดี",
        "example_english": "I have a good feeling",
        "example_german": "Ich habe ein gutes Gefühl"
      },
      {
        "thai": "ดม",
        "romanization": "dom",
        "english": "to smell, to sniff",
        "german": "riechen, schnüffeln",
        "example_thai": "เธอดมกลิ่นดี",
        "example_english": "She has a good sense of smell",
        "example_german": "Sie hat einen guten Geruchssinn"
      },
      {
        "thai": "ควันรถ",
        "romanization": "khwan rót",
        "english": "smoke from car",
        "german": "Autoabgase",
        "example_thai": "ควันรถมีกลิ่นแย่",
        "example_english": "Car smoke smells bad",
        "example_german": "Autoabgase riechen schlecht"
      },
      {
        "thai": "กลิ่นเหม็น",
        "romanization": "klin mèn",
        "english": "bad smell",
        "german": "schlechter Geruch",
        "example_thai": "มีกลิ่นเหม็นมาจากท่อ",
        "example_english": "There is a bad smell from the pipe",
        "example_german": "Es gibt einen schlechten Geruch vom Rohr"
      },
      {
        "thai": "ท่อระบายน้ำ",
        "romanization": "thɔ̀ rabai nám",
        "english": "drain pipe",
        "german": "Abflussrohr",
        "example_thai": "ท่อระบายน้ำเสีย",
        "example_english": "wastewater drain pipe",
        "example_german": "Abflussrohr für Abwasser"
      },
      {
        "thai": "กลิ่นหอม",
        "romanization": "klin hɔ̌ɔm",
        "english": "nice smell",
        "german": "guter Geruch, Duft",
        "example_thai": "น้ำหอมมีกลิ่นหอม",
        "example_english": "Perfume has a nice smell",
        "example_german": "Parfüm hat einen schönen Duft"
      },
      {
        "thai": "เสื้อผ้า",
        "romanization": "sʉ̂a phâa",
        "english": "clothes",
        "german": "Kleidung",
        "example_thai": "เสื้อผ้ากลับเหม็นน้ำหอม",
        "example_english": "Clothes smell like perfume",
        "example_german": "Die Kleidung riecht nach Parfüm"
      },
      {
        "thai": "น้ำหอม",
        "romanization": "nám hɔ̌ɔm",
        "english": "perfume",
        "german": "Parfüm",
        "example_thai": "ฉันชอบน้ำหอมนี้",
        "example_english": "I like this perfume",
        "example_german": "Ich mag dieses Parfüm"
      },
      {
        "thai": "น่าแปลกใจ",
        "romanization": "nâa plɛ̀ɛk cai",
        "english": "surprisingly",
        "german": "überraschend",
        "example_thai": "มันน่าแปลกใจมาก",
        "example_english": "It is very surprising",
        "example_german": "Es ist sehr überraschend"
      },
      {
        "thai": "สำหรับ",
        "romanization": "sǎm ràp",
        "english": "for",
        "german": "für",
        "example_thai": "นี่เป็นของสำหรับคุณ",
        "example_english": "This is for you",
        "example_german": "Das ist für dich"
      },
      {
        "thai": "คนต่างชาติ",
        "romanization": "khon tàaŋ châat",
        "english": "a foreigner",
        "german": "Ausländer",
        "example_thai": "เขาเป็นคนต่างชาติ",
        "example_english": "He is a foreigner",
        "example_german": "Er ist ein Ausländer"
      },
      {
        "thai": "แก้ปัญหา",
        "romanization": "kɛ̂ɛ pan hǎa",
        "english": "to solve problem",
        "german": "Problem lösen",
        "example_thai": "เราแก้ปัญหาได้ง่ายๆ",
        "example_english": "We solve the problem easily",
        "example_german": "Wir lösen das Problem leicht"
      },
      {
        "thai": "หน้ากาก",
        "romanization": "nâa kàat",
        "english": "a mask",
        "german": "Maske",
        "example_thai": "ฉันใส่หน้ากาก",
        "example_english": "I wear a mask",
        "example_german": "Ich trage eine Maske"
      },
      {
        "thai": "เป็นหวัด",
        "romanization": "pen hùat",
        "english": "to have a cold",
        "german": "Erkältung haben",
        "example_thai": "เขาเป็นหวัด",
        "example_english": "He has a cold",
        "example_german": "Er hat eine Erkältung"
      },
      {
        "thai": "ฝุ่น",
        "romanization": "fùn",
        "english": "dust",
        "german": "Staub, Feinstaub",
        "example_thai": "ฝุ่น PM 2.5 มีในอากาศ",
        "example_english": "PM 2.5 dust is in the air",
        "example_german": "Feinstaub PM 2.5 ist in der Luft"
      },
      {
        "thai": "ก็เลย",
        "romanization": "kɔ̂ lɔɔi",
        "english": "so, therefore",
        "german": "also, daher",
        "example_thai": "เขาป่วย ก็เลยไม่มา",
        "example_english": "He was sick, so he didn't come",
        "example_german": "Er war krank, daher kam er nicht"
      },
      {
        "thai": "แปลก",
        "romanization": "plɛ̀ɛk",
        "english": "strange",
        "german": "seltsam",
        "example_thai": "มันแปลกมาก",
        "example_english": "It is very strange",
        "example_german": "Es ist sehr seltsam"
      },
      {
        "thai": "ธรรมดา",
        "romanization": "tham ma daa",
        "english": "common, normal, simple",
        "german": "gewöhnlich, normal",
        "example_thai": "นี่เป็นเรื่องธรรมดา",
        "example_english": "This is a normal thing",
        "example_german": "Das ist eine normale Sache"
      }
    ],
    "reading": [
      {
        "thai": "กรุงเทพฯ เป็นเมืองที่มีกลิ่นของอากาศชื้น",
        "english": "Bangkok is a city with the smell of humid air",
        "german": "Bangkok ist eine Stadt mit dem Geruch feuchter Luft"
      },
      {
        "thai": "คุณคริสบอกว่าอากาศเป็นเรื่องของความรู้สึก ไม่ใช่กลิ่น",
        "english": "Chris said that air is a matter of feeling, not smell",
        "german": "Chris sagte, dass Luft eine Frage des Gefühls ist, nicht des Geruchs"
      },
      {
        "thai": "ฉันบอกเขาว่าไม่จริง เพราะฉันคิดว่าผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย",
        "english": "I told him that is not true because I think women have a better sense of smell than men",
        "german": "Ich sagte ihm, das ist nicht wahr, weil ich denke, dass Frauen einen besseren Geruchssinn haben als Männer"
      },
      {
        "thai": "นอกจากกลิ่นอากาศชื้นแล้ว กรุงเทพฯ ยังมีกลิ่นอาหาร กลิ่นควันรถ",
        "english": "Besides the smell of humid air, Bangkok also has food smell and car smoke smell",
        "german": "Neben dem Geruch feuchter Luft hat Bangkok auch Essensgeruch und Autoabgasgeruch"
      },
      {
        "thai": "บางครั้งอาจจะได้กลิ่นเหม็นจากท่อระบายน้ำ",
        "english": "Sometimes there might be a bad smell from drain pipes",
        "german": "Manchmal kann es einen schlechten Geruch von Abflussrohren geben"
      },
      {
        "thai": "ถ้าขึ้นรถไฟฟ้าหรือรถไฟใต้ดินก็จะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ",
        "english": "If you take the BTS or MRT, you will get nice smell from clothes and perfume of people on the train",
        "german": "Wenn Sie die BTS oder MRT nehmen, bekommen Sie einen schönen Geruch von Kleidung und Parfüm von Menschen im Zug"
      },
      {
        "thai": "แต่กลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติคือกลิ่นทุเรียน",
        "english": "But the most surprising smell for foreigners is the smell of durian",
        "german": "Aber der überraschendste Geruch für Ausländer ist der Geruch von Durian"
      },
      {
        "thai": "ฤดูที่มีทุเรียนเราจะได้กลิ่นทุเรียนในอากาศ",
        "english": "During durian season, we will get durian smell in the air",
        "german": "Während der Durianzeit bekommen wir Durian-Geruch in der Luft"
      },
      {
        "thai": "คนที่ไม่ชอบทุเรียนจะบ่น แต่ฉันไม่มีปัญหา",
        "english": "People who don't like durian will complain, but I don't have a problem",
        "german": "Menschen, die Durian nicht mögen, werden sich beschweren, aber ich habe kein Problem"
      },
      {
        "thai": "ฉันคิดว่าเราแก้ปัญหานี้ได้ง่ายๆ ด้วยการใส่หน้ากาก",
        "english": "I think we can solve this problem easily by wearing a mask",
        "german": "Ich denke, wir können dieses Problem leicht durch das Tragen einer Maske lösen"
      }
    ],
    "structures": [
      {
        "pattern": "Subject + ก็เลย + verb/adjective",
        "meaning": "Therefore/So subject...",
        "thai_example": "เขาป่วย ก็เลยไม่มา",
        "english_example": "He was sick, so he didn't come",
        "german_example": "Er war krank, daher kam er nicht"
      },
      {
        "pattern": "สำหรับ + noun",
        "meaning": "(as) for, with connotation of comparing",
        "thai_example": "สำหรับคนต่างชาติ",
        "english_example": "as for foreigners",
        "german_example": "für Ausländer"
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "กรุงเทพฯ มีกลิ่นอะไรบ้าง",
          "answer": "กรุงเทพฯ มีกลิ่นอากาศชื้น กลิ่นอาหาร กลิ่นควันรถ บางครั้งมีกลิ่นเหม็นจากท่อระบายน้ำ และในรถไฟฟ้ามีกลิ่นหอมจากน้ำหอม"
        },
        {
          "question": "คุณคิดว่ากลิ่นทุเรียนเป็นอย่างไร",
          "answer": "ฉันคิดว่ากลิ่นทุเรียนน่าแปลกใจสำหรับคนต่างชาติ แต่ฉันไม่มีปัญหา"
        },
        {
          "question": "ทำไมคุณคิดว่าผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย",
          "answer": "ฉันคิดว่าผู้หญิงมีความสามารถในการดมกลิ่นได้ดีกว่าผู้ชาย"
        },
        {
          "question": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องแปลกไหม",
          "answer": "ไม่ การใส่หน้ากากที่ประเทศไทยเป็นเรื่องปกติธรรมดา"
        },
        {
          "question": "คนไทยใส่หน้ากากเมื่อไหร่",
          "answer": "คนไทยใส่หน้ากากเวลาเป็นหวัดและเวลาที่มีปัญหาเกี่ยวกับฝุ่น PM 2.5"
        },
        {
          "question": "ถ้าไม่ชอบกลิ่นทุเรียนต้องทำอย่างไร",
          "answer": "ถ้าไม่ชอบกลิ่นทุเรียนสามารถใส่หน้ากากแก้ปัญหาได้"
        },
        {
          "question": "กลิ่นหอมในรถไฟฟ้ามาจากอะไร",
          "answer": "กลิ่นหอมในรถไฟฟ้ามาจากเสื้อผ้าและน้ำหอมของคนในรถ"
        },
        {
          "question": "ประเทศไทยมีปัญหาเรื่องฝุ่นเมื่อไหร่",
          "answer": "ประเทศไทยมีปัญหาฝุ่น PM 2.5 ในฤดูร้อนและฤดูหนาว"
        },
        {
          "question": "กลิ่นเหม็นในกรุงเทพฯ มาจากไหน",
          "answer": "กลิ่นเหม็นในกรุงเทพฯ มาจากท่อระบายน้ำและควันรถ"
        },
        {
          "question": "เวลาอยู่ในรถไฟฟ้าหรือรถไฟใต้ดินจะได้กลิ่นอะไร",
          "answer": "เวลาอยู่ในรถไฟฟ้าหรือรถไฟใต้ดินจะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ"
        }
      ]
    },
    "quiz": [
      {
        "question": "กรุงเทพฯ มีกลิ่นของอากาศอะไร",
        "options": [
          "ร้อน",
          "ชื้น",
          "หนาว",
          "แห้ง"
        ],
        "correct": 1,
        "explanation": "ตามข้อความอ่าน กรุงเทพฯ มีกลิ่นของอากาศชื้น"
      },
      {
        "question": "ตามที่เรียน กลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติคืออะไร",
        "options": [
          "กลิ่นต้นไม้",
          "กลิ่นทุเรียน",
          "กลิ่นม้า",
          "กลิ่นอากาศ"
        ],
        "correct": 1,
        "explanation": "กลิ่นทุเรียนเป็นกลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติ"
      },
      {
        "question": "เวลาเป็นหวัดต้องใส่อะไร",
        "options": [
          "หมวก",
          "แว่น",
          "หน้ากาก",
          "ถุงมือ"
        ],
        "correct": 2,
        "explanation": "คนไทยใส่หน้ากากเวลาเป็นหวัด"
      },
      {
        "question": "ฝุ่น PM 2.5 มาจากไหน",
        "options": [
          "น้ำ",
          "บ้าน",
          "อากาศ",
          "รถ"
        ],
        "correct": 2,
        "explanation": "ฝุ่น PM 2.5 อยู่ในอากาศ"
      },
      {
        "question": "ในรถไฟฟ้าจะได้กลิ่นหอมจากอะไร",
        "options": [
          "ดอกไม้",
          "โลชั่น",
          "น้ำหอมและเสื้อผ้า",
          "น้ำหา"
        ],
        "correct": 2,
        "explanation": "ในรถไฟฟ้าจะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ"
      },
      {
        "question": "ผู้หญิงกับผู้ชายใครดมกลิ่นได้ดีกว่า",
        "options": [
          "ผู้ชาย",
          "พวกเขาเท่ากัน",
          "ผู้หญิง",
          "ไม่รู้"
        ],
        "correct": 2,
        "explanation": "ตามข้อความ ผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย"
      },
      {
        "question": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องอะไร",
        "options": [
          "แปลก",
          "หรรษา",
          "ปกติธรรมดา",
          "น่าอัศจรรย์"
        ],
        "correct": 2,
        "explanation": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องปกติธรรมดามากๆ"
      },
      {
        "question": "กลิ่นเหม็นในกรุงเทพฯ มาจากอะไรบ้าง",
        "options": [
          "ต้นไม้เท่านั้น",
          "ควันรถกับท่อระบายน้ำ",
          "ดินเท่านั้น",
          "ฝน"
        ],
        "correct": 1,
        "explanation": "กลิ่นเหม็นมาจากควันรถและท่อระบายน้ำ"
      },
      {
        "question": "ฤดูใดที่มีทุเรียนจะมีกลิ่นทุเรียนในอากาศ",
        "options": [
          "ฤดูหนาวเท่านั้น",
          "ฤดูร้อนเท่านั้น",
          "ฤดูฝน",
          "ฤดูที่มีทุเรียน"
        ],
        "correct": 3,
        "explanation": "ฤดูที่มีทุเรียนจะได้กลิ่นทุเรียนในอากาศ"
      },
      {
        "question": "วิธีแก้ปัญหากลิ่นทุเรียนตามความคิดผู้เขียน",
        "options": [
          "ปลูกต้นไม้",
          "ใส่หน้ากาก",
          "หลับใจ",
          "ย้ายบ้าน"
        ],
        "correct": 1,
        "explanation": "ผู้เขียนคิดว่าแก้ปัญหาได้ง่ายๆ ด้วยการใส่หน้ากาก"
      }
    ],
    "id": 16,
    "thai_title": "กลิ่นของกรุงเทพฯ"
  },
  {
    "vocabulary": [
      {
        "thai": "โดยทั่วไป",
        "romanization": "dɔɔi thûa ŋan",
        "english": "generally",
        "german": "im Allgemeinen",
        "example_thai": "โดยทั่วไปอากาศร้อน",
        "example_english": "Generally the weather is hot",
        "example_german": "Im Allgemeinen ist das Wetter heiß"
      },
      {
        "thai": "ไม่ถึงกับ",
        "romanization": "mâi thʉ̌ŋ kap",
        "english": "not to the extent of",
        "german": "nicht so schlimm",
        "example_thai": "ไม่ถึงกับแย่มาก",
        "example_english": "not to the extent of being very bad",
        "example_german": "nicht so schlimm"
      },
      {
        "thai": "แย่",
        "romanization": "yâi",
        "english": "bad",
        "german": "schlecht",
        "example_thai": "อากาศแย่มาก",
        "example_english": "The weather is very bad",
        "example_german": "Das Wetter ist sehr schlecht"
      },
      {
        "thai": "ตาม",
        "romanization": "tam",
        "english": "according to",
        "german": "gemäß, laut",
        "example_thai": "ตามธรรมชาติ",
        "example_english": "according to nature",
        "example_german": "gemäß der Natur"
      },
      {
        "thai": "ธรรมชาติ",
        "romanization": "tham ma chaat",
        "english": "nature",
        "german": "Natur",
        "example_thai": "ธรรมชาติไทยร้อน",
        "example_english": "Thai nature is hot",
        "example_german": "Die Natur ist heiß"
      },
      {
        "thai": "พื้น",
        "romanization": "phʉ̂n",
        "english": "ground",
        "german": "Boden",
        "example_thai": "พื้นถนนร้อน",
        "example_english": "The ground of the road is hot",
        "example_german": "Der Bodenboden ist heiß"
      },
      {
        "thai": "ตึก",
        "romanization": "tʉk",
        "english": "building",
        "german": "Gebäude",
        "example_thai": "ตึกสูงแสงแดด",
        "example_english": "Tall buildings get sunlight",
        "example_german": "Hohes Gebäude bekommt Sonnenlicht"
      },
      {
        "thai": "ใหม่ๆ",
        "romanization": "mai mai",
        "english": "at early stage of",
        "german": "am Anfang von",
        "example_thai": "มาที่นี่ใหม่ๆ",
        "example_english": "newly came here",
        "example_german": "gerade angekommen"
      },
      {
        "thai": "เกินไป",
        "romanization": "kəən pai",
        "english": "way too, excessive",
        "german": "zu sehr, übermäßig",
        "example_thai": "ร้อนเกินไป",
        "example_english": "way too hot",
        "example_german": "viel zu heiß"
      },
      {
        "thai": "หายใจ",
        "romanization": "hǎai cai",
        "english": "to breathe",
        "german": "atmen",
        "example_thai": "หายใจไม่สะดวก",
        "example_english": "breathing is not comfortable",
        "example_german": "Atmen ist nicht bequem"
      },
      {
        "thai": "สองสาม",
        "romanization": "sɔ̌ɔŋ sǎam",
        "english": "a few",
        "german": "ein paar",
        "example_thai": "สองสามวัน",
        "example_english": "a few days",
        "example_german": "ein paar Tage"
      },
      {
        "thai": "สัปดาห์",
        "romanization": "sap da haa",
        "english": "week",
        "german": "Woche",
        "example_thai": "สองสามสัปดาห์",
        "example_english": "a few weeks",
        "example_german": "ein paar Wochen"
      },
      {
        "thai": "ระหว่าง",
        "romanization": "ra hùaŋ",
        "english": "during, between",
        "german": "zwischen, während",
        "example_thai": "ระหว่างฤดูหนาว",
        "example_english": "during winter",
        "example_german": "während des Winters"
      },
      {
        "thai": "แห้ง",
        "romanization": "hɛ̂ŋ",
        "english": "dry",
        "german": "trocken",
        "example_thai": "อากาศแห้ง",
        "example_english": "The air is dry",
        "example_german": "Die Luft ist trocken"
      },
      {
        "thai": "เปียก",
        "romanization": "piak",
        "english": "wet",
        "german": "nass",
        "example_thai": "มือเปียก",
        "example_english": "hands are wet",
        "example_german": "Hände sind nass"
      },
      {
        "thai": "ข้อมูล",
        "romanization": "khɔ̂ mun",
        "english": "information",
        "german": "Information, Daten",
        "example_thai": "ข้อมูลฝุ่น",
        "example_english": "dust information",
        "example_german": "Informationen über Staub"
      },
      {
        "thai": "กัน",
        "romanization": "kan",
        "english": "to prevent",
        "german": "verhindern, vorbeugen",
        "example_thai": "กันฝุ่น",
        "example_english": "to prevent dust",
        "example_german": "Staub verhindern"
      },
      {
        "thai": "แบบ",
        "romanization": "bɛ̀p",
        "english": "style, type",
        "german": "Art, Typ",
        "example_thai": "อากาศแบบไทย",
        "example_english": "Thai style weather",
        "example_german": "Thai-Art Wetter"
      },
      {
        "thai": "ร่ม",
        "romanization": "rôm",
        "english": "umbrella",
        "german": "Regenschirm",
        "example_thai": "ร่มป้องกันแดด",
        "example_english": "umbrella protects from sun",
        "example_german": "Regenschirm schützt vor der Sonne"
      }
    ],
    "reading": [
      {
        "thai": "โดยทั่วไปกรุงเทพฯ เป็นเมืองที่อากาศไม่ดี แต่ก็ไม่ถึงกับแย่",
        "english": "Generally, Bangkok is a city with not good weather, but it is not to the extent of being bad",
        "german": "Im Allgemeinen ist Bangkok eine Stadt mit nicht gutem Wetter, aber es ist nicht so schlimm"
      },
      {
        "thai": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว",
        "english": "Thailand has three seasons: summer, rainy season, and winter",
        "german": "Thailand hat drei Jahreszeiten: Sommer, Regenzeit und Winter"
      },
      {
        "thai": "ฤดูร้อนที่กรุงเทพฯ ร้อนมากๆ เพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง",
        "english": "In summer in Bangkok it is very hot because besides natural heat, there is also heat from the ground and tall buildings",
        "german": "Im Sommer in Bangkok ist es sehr heiß, weil neben der natürlichen Wärme auch Wärme vom Boden und von hohen Gebäuden kommt"
      },
      {
        "thai": "คนต่างชาติที่มากรุงเทพฯ ใหม่ๆ บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว",
        "english": "Some foreigners who newly come to Bangkok like hot weather because they are tired of cold weather",
        "german": "Einige Ausländer, die neu nach Bangkok kommen, mögen heißes Wetter, weil sie müde vom kalten Wetter sind"
      },
      {
        "thai": "แต่คนที่อยู่มาหลายปีจะไม่ชอบเพราะร้อนเกินไป",
        "english": "But people who have lived here for many years do not like it because it is way too hot",
        "german": "Aber Menschen, die seit vielen Jahren hier leben, mögen es nicht, weil es viel zu heiß ist"
      },
      {
        "thai": "ฤดูฝนที่กรุงเทพฯ ก็ร้อนเหมือนกัน และอากาศก็ชื้นมากด้วย",
        "english": "In rainy season in Bangkok it is also hot and the air is very humid",
        "german": "In der Regenzeit in Bangkok ist es auch heiß und die Luft ist sehr feucht"
      },
      {
        "thai": "บางคนบอกว่าหายใจไม่สะดวก",
        "english": "Some people say breathing is not comfortable",
        "german": "Einige Menschen sagen, dass das Atmen nicht bequem ist"
      },
      {
        "thai": "ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น",
        "english": "In winter in Bangkok it is not really cold, the air is just a bit cool",
        "german": "Im Winter in Bangkok ist es nicht wirklich kalt, die Luft ist nur ein wenig kühl"
      },
      {
        "thai": "บางปีมีวันที่อากาศเย็นแค่สองสามวัน แต่บางปีก็เย็นสองสามสัปดาห์",
        "english": "Some years there are only a few days when the weather is cool, but some years it is cool for a few weeks",
        "german": "Manche Jahre gibt es nur ein paar Tage mit kühlem Wetter, aber manche Jahre ist es ein paar Wochen kühl"
      }
    ],
    "structures": [
      {
        "pattern": "verb/noun + ใหม่ๆ",
        "meaning": "at early stage of doing something",
        "thai_example": "มาที่นี่ใหม่ๆ",
        "english_example": "newly came here",
        "german_example": "gerade angekommen"
      },
      {
        "pattern": "adjective + เกินไป",
        "meaning": "way too adjective",
        "thai_example": "ร้อนเกินไป",
        "english_example": "way too hot",
        "german_example": "viel zu heiß"
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "ประเทศไทยมีกี่ฤดู",
          "answer": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว"
        },
        {
          "question": "ฤดูร้อนที่กรุงเทพฯ ร้อนเพราะอะไร",
          "answer": "ฤดูร้อนที่กรุงเทพฯ ร้อนเพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง"
        },
        {
          "question": "คนต่างชาติที่มาใหม่ๆ ชอบอากาศร้อนหรือเปล่า",
          "answer": "บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว"
        },
        {
          "question": "คนที่อยู่กรุงเทพฯ มาหลายปีชอบอากาศร้อนไหม",
          "answer": "ไม่ พวกเขาไม่ชอบเพราะร้อนเกินไป"
        },
        {
          "question": "ฤดูฝนที่กรุงเทพฯ เป็นอย่างไร",
          "answer": "ฤดูฝนที่กรุงเทพฯ ร้อนและชื้นมากด้วย บางคนบอกว่าหายใจไม่สะดวก"
        },
        {
          "question": "ฤดูหนาวที่กรุงเทพฯ หนาวจริงไหม",
          "answer": "ไม่ ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น"
        },
        {
          "question": "เวลาเย็นที่กรุงเทพฯ นานเท่าไหร่",
          "answer": "บางปีมีสองสามวัน แต่บางปีมีสองสามสัปดาห์"
        },
        {
          "question": "ฝุ่น PM 2.5 เกิดในฤดูอะไร",
          "answer": "ฝุ่น PM 2.5 เกิดในฤดูร้อนและฤดูหนาว"
        },
        {
          "question": "คุณคริสชอบอากาศที่กรุงเทพฯ หรือลอนดอน",
          "answer": "คุณคริสชอบอากาศที่กรุงเทพฯ มากกว่าลอนดอน"
        },
        {
          "question": "ของที่ต้องมีสำหรับอากาศที่กรุงเทพฯ คืออะไรบ้าง",
          "answer": "ของที่ต้องมีคือร่มและหน้ากาก ไม่ต้องมีเสื้อกันหนาว"
        }
      ]
    },
    "quiz": [
      {
        "question": "โดยทั่วไปกรุงเทพฯ มีอากาศเป็นอย่างไร",
        "options": [
          "ดีมาก",
          "ไม่ดี",
          "ดี",
          "แพ"
        ],
        "correct": 1,
        "explanation": "ตามข้อความ โดยทั่วไปกรุงเทพฯ มีอากาศไม่ดี แต่ก็ไม่ถึงกับแย่"
      },
      {
        "question": "ประเทศไทยมีกี่ฤดู",
        "options": [
          "2 ฤดู",
          "3 ฤดู",
          "4 ฤดู",
          "5 ฤดู"
        ],
        "correct": 1,
        "explanation": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว"
      },
      {
        "question": "ทำไมฤดูร้อนที่กรุงเทพฯ ร้อนมากๆ",
        "options": [
          "เพราะตึกสูง",
          "เพราะธรรมชาติ",
          "เพราะพื้นถนนและตึกสูง",
          "เพราะต้นไม้"
        ],
        "correct": 2,
        "explanation": "เพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง"
      },
      {
        "question": "บางคนชอบอากาศร้อนเพราะอะไร",
        "options": [
          "เบื่ออากาศเย็น",
          "เบื่ออากาศหนาว",
          "ชอบแดด",
          "อื่นๆ"
        ],
        "correct": 1,
        "explanation": "บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว"
      },
      {
        "question": "ฤดูฝนที่กรุงเทพฯ เป็นอย่างไร",
        "options": [
          "เย็น",
          "แห้ง",
          "ร้อนและชื้น",
          "สบาย"
        ],
        "correct": 2,
        "explanation": "ฤดูฝนที่กรุงเทพฯ ร้อนเหมือนกัน และอากาศก็ชื้นมากด้วย"
      },
      {
        "question": "ฤดูหนาวที่กรุงเทพฯ จริงหรือไม่",
        "options": [
          "หนาวจริง",
          "ไม่หนาวจริง",
          "หนาวมากๆ",
          "เย็นเกินไป"
        ],
        "correct": 1,
        "explanation": "ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น"
      },
      {
        "question": "อากาศในฤดูหนาวเป็นอย่างไร",
        "options": [
          "ชื้น",
          "ร้อน",
          "แห้ง ไม่เปียก ไม่ชื้น",
          "อื่นๆ"
        ],
        "correct": 2,
        "explanation": "ระหว่างฤดูหนาวอากาศแห้ง ไม่เปียก ไม่ชื้น"
      },
      {
        "question": "คนกรุงเทพฯ ชอบฤดูอะไรมากที่สุด",
        "options": [
          "ฤดูร้อน",
          "ฤดูฝน",
          "ฤดูหนาว",
          "ไม่ชอบ"
        ],
        "correct": 2,
        "explanation": "คนกรุงเทพฯ ชอบฤดูหนาวมาก"
      },
      {
        "question": "ต้องดูข้อมูลจากไหนเวลามีปัญหาฝุ่น PM 2.5",
        "options": [
          "หนังสือพิมพ์",
          "โทรทัศน์",
          "แอปพลิเคชัน",
          "เพื่อน"
        ],
        "correct": 2,
        "explanation": "คนกรุงเทพฯ ดูข้อมูลจากแอปพลิเคชัน"
      },
      {
        "question": "ถ้าไม่มีปัญหาฝุ่น PM 2.5 อากาศที่กรุงเทพฯ จะเป็นอย่างไร",
        "options": [
          "แย่มากๆ",
          "ไม่แย่",
          "สวยมาก",
          "ปลอดภัย"
        ],
        "correct": 1,
        "explanation": "ถ้าไม่มีปัญหาเรื่องฝุ่น PM 2.5 ผมคิดว่าอากาศที่กรุงเทพฯ ไม่แย่"
      }
    ],
    "id": 17,
    "thai_title": "อากาศที่กรุงเทพฯ"
  },
  {
    "vocabulary": [
      {
        "thai": "อย่างหนึ่ง",
        "romanization": "yàaŋ nʉŋ",
        "english": "a kind of",
        "german": "eine Art von",
        "example_thai": "บริการอย่างหนึ่งที่ดี",
        "example_english": "one kind of good service",
        "example_german": "eine Art guter Service"
      },
      {
        "thai": "ทำฟัน",
        "romanization": "tam fan",
        "english": "dental treatment",
        "german": "Zahnbehandlung",
        "example_thai": "ไปทำฟันที่โรงพยาบาล",
        "example_english": "go for dental treatment at the hospital",
        "example_german": "zur Zahnbehandlung ins Krankenhaus gehen"
      },
      {
        "thai": "ทันตแพทย์",
        "romanization": "than ta phat",
        "english": "a dentist (formal)",
        "german": "Zahnarzt (formell)",
        "example_thai": "ทันตแพทย์ของผม",
        "example_english": "my dentist",
        "example_german": "mein Zahnarzt"
      },
      {
        "thai": "หมอฟัน",
        "romanization": "mor fan",
        "english": "a dentist",
        "german": "Zahnarzt",
        "example_thai": "หมอฟันที่นี่ดี",
        "example_english": "The dentist here is good",
        "example_german": "Der Zahnarzt hier ist gut"
      },
      {
        "thai": "น่าประทับใจ",
        "romanization": "nâa pra thap cai",
        "english": "impressive",
        "german": "beeindruckend",
        "example_thai": "มันน่าประทับใจมาก",
        "example_english": "It is very impressive",
        "example_german": "Es ist sehr beeindruckend"
      },
      {
        "thai": "มือเบา",
        "romanization": "mʉ bao",
        "english": "handle gently",
        "german": "sanfte Hand",
        "example_thai": "หมอฟันมือเบา",
        "example_english": "The dentist has a gentle hand",
        "example_german": "Der Zahnarzt hat eine sanfte Hand"
      },
      {
        "thai": "เรียบร้อย",
        "romanization": "riap rɔ̂ɔi",
        "english": "neat, complete",
        "german": "ordentlich, fertig",
        "example_thai": "ทำเรียบร้อยแล้ว",
        "example_english": "finished neatly",
        "example_german": "ordentlich fertig"
      },
      {
        "thai": "ไม่...เลย",
        "romanization": "mâi...lɔɔi",
        "english": "not...at all",
        "german": "überhaupt nicht",
        "example_thai": "ไม่ชอบเลย",
        "example_english": "don't like at all",
        "example_german": "mag überhaupt nicht"
      },
      {
        "thai": "เสียง",
        "romanization": "sǐaŋ",
        "english": "noise, sound, voice",
        "german": "Geräusch, Stimme",
        "example_thai": "เสียงเครื่องมือ",
        "example_english": "sound of equipment",
        "example_german": "Geräusch des Werkzeugs"
      },
      {
        "thai": "เครื่องมือ",
        "romanization": "khrʉ̂aŋ mʉ",
        "english": "tool, instrument, equipment",
        "german": "Werkzeug, Instrument",
        "example_thai": "เครื่องมือทันตแพทย์",
        "example_english": "dental instruments",
        "example_german": "Zahnarztinstrumente"
      },
      {
        "thai": "ครั้งหนึ่ง",
        "romanization": "khráŋ nʉŋ",
        "english": "once (experience)",
        "german": "einmal (Erfahrung)",
        "example_thai": "มีครั้งหนึ่งที่ผมไปหาหมอ",
        "example_english": "There was once when I went to the doctor",
        "example_german": "Es gab einmal, als ich zum Arzt ging"
      },
      {
        "thai": "จำเป็นต้อง",
        "romanization": "cam pen tɔ̂ŋ",
        "english": "have to",
        "german": "müssen",
        "example_thai": "จำเป็นต้องไปหาหมอ",
        "example_english": "have to go to the doctor",
        "example_german": "muss zum Arzt gehen"
      },
      {
        "thai": "แห่งหนึ่ง",
        "romanization": "hɛ̀ŋ nʉŋ",
        "english": "a place",
        "german": "ein Ort",
        "example_thai": "คลินิกแห่งหนึ่ง",
        "example_english": "a clinic",
        "example_german": "eine Klinik"
      },
      {
        "thai": "ขูดหินปูน",
        "romanization": "khùt hin pun",
        "english": "teeth cleaning",
        "german": "Zahnsteinentfernung",
        "example_thai": "ขูดหินปูนจากฟัน",
        "example_english": "clean tartar from teeth",
        "example_german": "Zahnstein von Zähnen entfernen"
      },
      {
        "thai": "อุดฟัน",
        "romanization": "ut fan",
        "english": "tooth filling",
        "german": "Zahnfüllung",
        "example_thai": "ต้องอุดฟัน",
        "example_english": "need tooth filling",
        "example_german": "Zahnfüllung erforderlich"
      },
      {
        "thai": "รักษารากฟัน",
        "romanization": "rak sǎa rak fan",
        "english": "root canal treatment",
        "german": "Wurzelbehandlung",
        "example_thai": "รักษารากฟันอเมริกา",
        "example_english": "American root canal treatment",
        "example_german": "Amerikanische Wurzelbehandlung"
      },
      {
        "thai": "คุณภาพ",
        "romanization": "khun na phap",
        "english": "quality",
        "german": "Qualität",
        "example_thai": "คุณภาพดี",
        "example_english": "good quality",
        "example_german": "gute Qualität"
      },
      {
        "thai": "ค่า",
        "romanization": "khâa",
        "english": "cost or bill of",
        "german": "Kosten für",
        "example_thai": "ค่าทำฟัน",
        "example_english": "cost of dental treatment",
        "example_german": "Kosten für Zahnbehandlung"
      },
      {
        "thai": "นวด",
        "romanization": "nûat",
        "english": "to massage",
        "german": "Massage",
        "example_thai": "ไปนวด",
        "example_english": "go for a massage",
        "example_german": "Massage erhalten"
      },
      {
        "thai": "ต่างๆ",
        "romanization": "tàaŋ taŋ",
        "english": "various",
        "german": "verschiedene",
        "example_thai": "บริการต่างๆ",
        "example_english": "various services",
        "example_german": "verschiedene Dienstleistungen"
      }
    ],
    "reading": [
      {
        "thai": "การบริการอย่างหนึ่งที่ประเทศไทยที่พวกเราชอบมากคือการทำฟัน",
        "english": "One service that we like very much in Thailand is dental treatment",
        "german": "Eine Dienstleistung, die wir in Thailand sehr gerne haben, ist die Zahnbehandlung"
      },
      {
        "thai": "เพื่อนๆ ชาวอังกฤษของผมที่เคยอยู่ประเทศไทยบอกว่าการไปหาทันตแพทย์หรือหมอฟันที่กรุงเทพฯ เป็นเรื่องที่น่าประทับใจมาก",
        "english": "My English friends who have lived in Thailand say that going to a dentist in Bangkok is very impressive",
        "german": "Meine englischen Freunde, die in Thailand gelebt haben, sagen, dass der Besuch bei einem Zahnarzt in Bangkok sehr beeindruckend ist"
      },
      {
        "thai": "เพราะหมอฟันที่นี่เก่งมาก ส่วนใหญ่มือเบาทำให้เราไม่เจ็บเวลาทำฟัน",
        "english": "Because the dentists here are very skilled, most have a gentle hand so we don't feel pain during treatment",
        "german": "Weil die Zahnärzte hier sehr geschickt sind und die meisten eine sanfte Hand haben, so dass wir während der Behandlung keine Schmerzen empfinden"
      },
      {
        "thai": "ทำทุกอย่างสวยและเรียบร้อย ที่สำคัญคือราคาทำฟันไม่แพง",
        "english": "They do everything neatly and the most important is that the cost of dental treatment is not expensive",
        "german": "Sie machen alles ordentlich und das Wichtigste ist, dass die Zahnbehandlung nicht teuer ist"
      },
      {
        "thai": "ผมเป็นคนที่ไม่ชอบไปหาหมอฟันเลย ผมไม่ชอบเสียงของเครื่องมือ",
        "english": "I am a person who doesn't like going to a dentist at all. I don't like the sound of instruments",
        "german": "Ich bin eine Person, die absolut nicht gerne zum Zahnarzt geht. Ich mag das Geräusch von Instrumenten nicht"
      },
      {
        "thai": "ไม่ชอบกลิ่นของคลินิกหรือโรงพยาบาล",
        "english": "don't like the smell of clinics or hospitals",
        "german": "mag den Geruch von Kliniken oder Krankenhäusern nicht"
      },
      {
        "thai": "แต่มีครั้งหนึ่งที่ผมจำเป็นต้องไปหาหมอฟันที่คลินิกแห่งหนึ่งในกรุงเทพฯ",
        "english": "But there was once when I had to go to a dentist at a clinic in Bangkok",
        "german": "Aber es gab einmal, als ich zu einem Zahnarzt in einer Klinik in Bangkok gehen musste"
      },
      {
        "thai": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน",
        "english": "The dentist cleaned tartar, filled a tooth, and did root canal treatment",
        "german": "Der Zahnarzt entfernte Zahnstein, füllte einen Zahn und führte eine Wurzelbehandlung durch"
      },
      {
        "thai": "ผมเชื่อแล้วว่าเพื่อนๆ ผมพูดถูก คุณภาพของการทำฟันที่นี่ดีมากและราคาไม่แพง",
        "english": "I believe now that my friends were right. The quality of dental treatment here is very good and the price is not expensive",
        "german": "Ich glaube jetzt, dass meine Freunde recht hatten. Die Qualität der Zahnbehandlung hier ist sehr gut und der Preis ist nicht teuer"
      },
      {
        "thai": "ผมได้ยินมาว่ามีบริษัททัวร์ของบางประเทศทำธุรกิจพานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ",
        "english": "I heard that there are tour companies from some countries that bring tourists to get dental treatment in Bangkok",
        "german": "Ich hörte, dass es Reisebüros aus einigen Ländern gibt, die Touristen zur Zahnbehandlung nach Bangkok bringen"
      }
    ],
    "structures": [
      {
        "pattern": "ไม่ verb/adjective + เลย",
        "meaning": "not verb/adjective at all",
        "thai_example": "ไม่ชอบเลย",
        "english_example": "don't like at all",
        "german_example": "mag überhaupt nicht"
      },
      {
        "pattern": "Subject + จำเป็นต้อง + verb/adjective",
        "meaning": "Subject have to + verb/adjective",
        "thai_example": "จำเป็นต้องไปหาหมอ",
        "english_example": "have to go to the doctor",
        "german_example": "muss zum Arzt gehen"
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "คุณคริสและเพื่อนๆ ชอบบริการอะไรในประเทศไทย",
          "answer": "คุณคริสและเพื่อนๆ ชอบบริการทำฟันในประเทศไทย"
        },
        {
          "question": "ทำไมเพื่อนชาวอังกฤษบอกว่าการไปหาหมอฟันที่กรุงเทพฯ น่าประทับใจ",
          "answer": "เพราะหมอฟันที่นี่เก่งมาก มือเบา ทำให้ไม่เจ็บ และราคาไม่แพง"
        },
        {
          "question": "ทำไมคุณคริสไม่ชอบไปหาหมอฟัน",
          "answer": "เพราะเขาไม่ชอบเสียงของเครื่องมือและกลิ่นของคลินิก"
        },
        {
          "question": "คุณคริสไปหาหมอฟันที่โรงพยาบาลหรือคลินิก",
          "answer": "คุณคริสไปหาหมอฟันที่คลินิก"
        },
        {
          "question": "หมอฟันทำอะไรกับฟันของคุณคริสบ้าง",
          "answer": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน"
        },
        {
          "question": "คุณคริสคิดว่าเพื่อนของเขาพูดถูกไหม",
          "answer": "ใช่ คุณคริสเชื่อว่าเพื่อนของเขาพูดถูก"
        },
        {
          "question": "ธุรกิจทัวร์ทำฟันให้บริการอะไรบ้าง",
          "answer": "ธุรกิจทัวร์พานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ ทำฟันเสร็จแล้วก็ไปเที่ยว"
        },
        {
          "question": "คุณเอ็มมาคิดอย่างไรกับการบริการต่างๆ ที่ประเทศไทย",
          "answer": "คุณเอ็มมาบอกว่าที่ประเทศไทยมีบริการหลายอย่างที่ดีมากๆ และไม่แพง"
        },
        {
          "question": "คนไทยชอบไปหาหมอฟันไหม",
          "answer": "ไม่ มากขึ้นคนไทยคิดว่าค่าทำฟันแพงอยู่มาก ถ้าไม่จำเป็นก็ไม่อยากไป"
        },
        {
          "question": "ค่าทำฟันที่ประเทศไทยเปรียบเทียบกับที่อังกฤษอย่างไร",
          "answer": "ค่าทำฟันที่ประเทศไทยถูกกว่าที่อังกฤษและอเมริกา"
        }
      ]
    },
    "quiz": [
      {
        "question": "บริการที่ประเทศไทยที่คุณคริสชอบมากคืออะไร",
        "options": [
          "ตัดผม",
          "ทำฟัน",
          "นวด",
          "อื่นๆ"
        ],
        "correct": 1,
        "explanation": "การบริการอย่างหนึ่งที่ประเทศไทยที่พวกเราชอบมากคือการทำฟัน"
      },
      {
        "question": "ทันตแพทย์ที่กรุงเทพฯ เป็นอย่างไร",
        "options": [
          "ไม่ดี",
          "ธรรมดา",
          "เก่ง",
          "แพง"
        ],
        "correct": 2,
        "explanation": "หมอฟันที่นี่เก่งมาก"
      },
      {
        "question": "เพราะอะไรคนไม่เจ็บเวลาทำฟันที่กรุงเทพฯ",
        "options": [
          "ไม่ใช้เครื่องมือ",
          "มือเบา",
          "ใช้ยาตัวเก่ง",
          "โรคหายไม่ได้"
        ],
        "correct": 1,
        "explanation": "ส่วนใหญ่มือเบาทำให้เราไม่เจ็บเวลาทำฟัน"
      },
      {
        "question": "ค่าทำฟันที่ประเทศไทยเป็นอย่างไร",
        "options": [
          "แพง",
          "ไม่แพง",
          "แพงมาก",
          "ฟรี"
        ],
        "correct": 1,
        "explanation": "ราคาทำฟันไม่แพงถ้าเปรียบเทียบกับที่อังกฤษ"
      },
      {
        "question": "คุณคริสไม่ชอบไปหาหมอฟันเพราะอะไร",
        "options": [
          "หมอไม่เก่ง",
          "เสียงเครื่องมือ",
          "แพง",
          "เจ็บมาก"
        ],
        "correct": 1,
        "explanation": "ผมไม่ชอบเสียงของเครื่องมือ"
      },
      {
        "question": "หมอทำอะไรกับฟันของคุณคริส",
        "options": [
          "ถอน",
          "ขูดหินปูนและอุด",
          "ลาด",
          "อื่นๆ"
        ],
        "correct": 1,
        "explanation": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน"
      },
      {
        "question": "บริษัททัวร์ทำธุรกิจอะไร",
        "options": [
          "ทำฟัน",
          "นวด",
          "พานักท่องเที่ยวมาทำฟัน",
          "เที่ยว"
        ],
        "correct": 2,
        "explanation": "บริษัททัวร์ทำธุรกิจพานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ"
      },
      {
        "question": "คุณเอ็มมาบอกว่ามีบริการอะไรบ้างที่ประเทศไทย",
        "options": [
          "เฉพาะทำฟัน",
          "ทำผม นวด ทำฟัน",
          "เฉพาะนวด",
          "ไม่มี"
        ],
        "correct": 1,
        "explanation": "คุณเอ็มมาบอกว่ามีบริการทำผม การนวด ทำฟัน"
      },
      {
        "question": "คนไทยจริงๆ รู้สึกว่าค่าทำฟันเป็นอย่างไร",
        "options": [
          "ถูก",
          "แพง",
          "ฟรี",
          "ปลอดภัย"
        ],
        "correct": 1,
        "explanation": "คนไทยรู้สึกว่าค่าทำฟันยังแพงอยู่มาก"
      },
      {
        "question": "คุณคริสเชื่อเพื่อนของเขาว่า",
        "options": [
          "ทำฟันไม่ดี",
          "ค่าแพง",
          "คุณภาพดีและราคาไม่แพง",
          "อื่นๆ"
        ],
        "correct": 2,
        "explanation": "คุณภาพของการทำฟันที่นี่ดีมากและราคาไม่แพง"
      }
    ],
    "id": 18,
    "thai_title": "การทำฟัน"
  },
  {
    "vocabulary": [
      {
        "thai": "สัญญา",
        "romanization": "san yaa",
        "english": "a contract",
        "german": "Vertrag",
        "example_thai": "สัญญาทำงาน",
        "example_english": "work contract",
        "example_german": "Arbeitsvertrag"
      },
      {
        "thai": "ครึ่ง",
        "romanization": "khrʉ̂ŋ",
        "english": "half",
        "german": "Hälfte",
        "example_thai": "อีกครึ่งปี",
        "example_english": "another half year",
        "example_german": "noch ein halbes Jahr"
      },
      {
        "thai": "ครบสัญญา",
        "romanization": "khrop san yaa",
        "english": "end of contract",
        "german": "Vertragsende",
        "example_thai": "ครบสัญญา 4 ปี",
        "example_english": "contract complete 4 years",
        "example_german": "Vertrag endet nach 4 Jahren"
      },
      {
        "thai": "ตัดสินใจ",
        "romanization": "tat sin cai",
        "english": "to decide",
        "german": "sich entscheiden",
        "example_thai": "ตัดสินใจไปญี่ปุ่น",
        "example_english": "decide to go to Japan",
        "example_german": "entschließen, nach Japan zu gehen"
      },
      {
        "thai": "ต่อสัญญา",
        "romanization": "tɔ̀ɔ san yaa",
        "english": "to renew contract",
        "german": "Vertrag verlängern",
        "example_thai": "ต่อสัญญาอีก 2 ปี",
        "example_english": "renew contract for 2 more years",
        "example_german": "Vertrag um 2 weitere Jahre verlängern"
      },
      {
        "thai": "ย้าย",
        "romanization": "yâai",
        "english": "to move, to relocate",
        "german": "umziehen",
        "example_thai": "ย้ายไปญี่ปุ่น",
        "example_english": "move to Japan",
        "example_german": "nach Japan umziehen"
      },
      {
        "thai": "เซ็นสัญญา",
        "romanization": "sen san yaa",
        "english": "to sign contract",
        "german": "Vertrag unterschreiben",
        "example_thai": "เซ็นสัญญาเรียบร้อยแล้ว",
        "example_english": "contract signed completed already",
        "example_german": "Vertrag ist unterzeichnet"
      },
      {
        "thai": "เตรียมตัว",
        "romanization": "triam tua",
        "english": "to prepare",
        "german": "sich vorbereiten",
        "example_thai": "เตรียมตัวสำหรับการย้าย",
        "example_english": "prepare for moving",
        "example_german": "sich auf den Umzug vorbereiten"
      },
      {
        "thai": "จัดการ",
        "romanization": "chat kan",
        "english": "to manage",
        "german": "verwalten, organisieren",
        "example_thai": "จัดการงาน",
        "example_english": "manage work",
        "example_german": "Arbeit organisieren"
      },
      {
        "thai": "ข้าวของ",
        "romanization": "khâo khɔ̌ɔŋ",
        "english": "stuff",
        "german": "Sachen, Habseligkeiten",
        "example_thai": "ข้าวของต่างๆ",
        "example_english": "various things",
        "example_german": "verschiedene Sachen"
      },
      {
        "thai": "เริ่ม",
        "romanization": "rəm",
        "english": "to start",
        "german": "anfangen",
        "example_thai": "เริ่มเก็บของ",
        "example_english": "start packing",
        "example_german": "anfangen zu packen"
      },
      {
        "thai": "เก็บของ",
        "romanization": "kep khɔ̌ɔŋ",
        "english": "to pack",
        "german": "einpacken",
        "example_thai": "เก็บของเรียบร้อย",
        "example_english": "packing complete",
        "example_german": "Verpackung ist komplett"
      },
      {
        "thai": "บริจาค",
        "romanization": "bo ri chat",
        "english": "to donate",
        "german": "spenden",
        "example_thai": "บริจาคกับเพื่อนไทย",
        "example_english": "donate to Thai friend",
        "example_german": "an Thai-Freund spenden"
      },
      {
        "thai": "ประสบการณ์",
        "romanization": "pra sop kan",
        "english": "experience",
        "german": "Erfahrung",
        "example_thai": "ประสบการณ์ย้ายประเทศ",
        "example_english": "experience moving countries",
        "example_german": "Erfahrung mit Umzug in andere Länder"
      },
      {
        "thai": "ครั้ง",
        "romanization": "khráŋ",
        "english": "time(s)",
        "german": "Mal, erstes Mal",
        "example_thai": "ครั้งแรก",
        "example_english": "first time",
        "example_german": "das erste Mal"
      },
      {
        "thai": "ที่แน่ๆ",
        "romanization": "thî͘ thɛ̀ɛ",
        "english": "surely, for sure",
        "german": "sicherlich",
        "example_thai": "ที่แน่ๆ คือเหนื่อย",
        "example_english": "for sure is tiring",
        "example_german": "sicherlich ist es anstrengend"
      },
      {
        "thai": "แผน",
        "romanization": "phɛ̌n",
        "english": "a plan",
        "german": "Plan",
        "example_thai": "วางแผนการเดินทาง",
        "example_english": "plan the travel",
        "example_german": "eine Reise planen"
      },
      {
        "thai": "อีกครั้ง",
        "romanization": "ʔiik khráŋ",
        "english": "again",
        "german": "nochmal",
        "example_thai": "อยู่ด้วยกันอีกครั้ง",
        "example_english": "live together again",
        "example_german": "nochmal zusammen leben"
      },
      {
        "thai": "เอเจนต์",
        "romanization": "ʔee chent",
        "english": "agent",
        "german": "Agent",
        "example_thai": "เอเจนต์ย้ายบ้าน",
        "example_english": "moving agent",
        "example_german": "Umzugsagent"
      }
    ],
    "reading": [
      {
        "thai": "ผมมีสัญญาทำงานที่บริษัทนี้สี่ปี",
        "english": "I have a work contract with this company for four years",
        "german": "Ich habe einen Arbeitsvertrag mit diesem Unternehmen für vier Jahre"
      },
      {
        "thai": "อีกครึ่งปีผมจะทำงานครบสัญญา",
        "english": "In another half year I will complete my contract",
        "german": "In noch einem halben Jahr werde ich meinen Vertrag erfüllen"
      },
      {
        "thai": "ผมตัดสินใจแล้วว่าจะไม่ต่อสัญญาและจะย้ายไปทำงานที่ญี่ปุ่น",
        "english": "I have decided that I won't renew my contract and will move to work in Japan",
        "german": "Ich habe mich entschieden, meinen Vertrag nicht zu verlängern und nach Japan umzuziehen"
      },
      {
        "thai": "ผมเซ็นสัญญากับบริษัทที่ญี่ปุ่นเรียบร้อยแล้ว",
        "english": "I have already signed a contract with a company in Japan",
        "german": "Ich habe bereits einen Vertrag mit einem Unternehmen in Japan unterzeichnet"
      },
      {
        "thai": "ตอนนี้เป็นช่วงเวลาที่ผมเตรียมตัวจัดการงานทุกอย่างที่นี่ให้เรียบร้อย",
        "english": "Now is the time that I am preparing to manage all my work here to complete",
        "german": "Jetzt ist es an der Zeit, dass ich mich vorbereite, um alle meine Arbeiten hier zu ordnen"
      },
      {
        "thai": "คุณเอ็มมาก็จัดการเกี่ยวกับงานของเขาและวางแผนเกี่ยวกับการย้าย",
        "english": "Emma also manages her work and plans about the moving",
        "german": "Emma organisiert auch ihre Arbeit und plant den Umzug"
      },
      {
        "thai": "ข้าวของต่างๆ เขาเริ่มเก็บของและคุยกับบริษัทเอเจนต์ที่จะดูแลเกี่ยวกับการย้ายบ้านไปต่างประเทศ",
        "english": "As for things, he started packing and talked with a moving company about moving the house abroad",
        "german": "Was die Sachen angeht, fing er an zu packen und sprach mit einem Umzugsunternehmen über den Umzug ins Ausland"
      },
      {
        "thai": "ของบางอย่างจะส่งกลับไปที่อังกฤษ บางอย่างจะส่งไปที่ญี่ปุ่น",
        "english": "Some things will be sent back to England, some will be sent to Japan",
        "german": "Einige Dinge werden nach England geschickt, andere nach Japan"
      },
      {
        "thai": "และบางอย่างเราจะให้เพื่อนคนไทยที่นี่หรือไม่ก็บริจาค",
        "english": "and some things we will give to Thai friends here or donate",
        "german": "und einige Dinge geben wir Thai-Freunden oder spenden sie"
      }
    ],
    "structures": [
      {
        "pattern": "ครั้ง + ordinal/number",
        "meaning": "time(s), first time/second time, etc",
        "thai_example": "ครั้งแรก ครั้งที่สอง ครั้งที่สาม",
        "english_example": "first time, second time, third time",
        "german_example": "erstes Mal, zweites Mal, drittes Mal"
      }
    ],
    "exercises": {
      "conversation": [
        {
          "question": "คุณคริสมีสัญญาทำงานกี่ปี",
          "answer": "คุณคริสมีสัญญาทำงานสี่ปี"
        },
        {
          "question": "คุณคริสจะทำงานครบสัญญาเมื่อไหร่",
          "answer": "อีกครึ่งปีคุณคริสจะทำงานครบสัญญา"
        },
        {
          "question": "คุณคริสจะต่อสัญญาไหม",
          "answer": "ไม่ คุณคริสตัดสินใจไม่ต่อสัญญา"
        },
        {
          "question": "คุณคริสจะย้ายไปทำงานที่ไหน",
          "answer": "คุณคริสจะย้ายไปทำงานที่ญี่ปุ่น"
        },
        {
          "question": "คุณคริสเซ็นสัญญากับบริษัทญี่ปุ่นแล้วไหม",
          "answer": "ใช่ คุณคริสเซ็นสัญญากับบริษัทญี่ปุ่นเรียบร้อยแล้ว"
        },
        {
          "question": "ช่วงนี้คุณคริสกับคุณเอ็มมาเตรียมตัวอย่างไร",
          "answer": "คุณคริสเตรียมตัวจัดการงาน คุณเอ็มมาจัดการงานและวางแผนเกี่ยวกับการย้าย"
        },
        {
          "question": "คุณคริสกับคุณเอ็มมาจะทำอย่างไรกับข้าวของต่างๆ",
          "answer": "เขาจะเก็บของ ส่งกลับไปอังกฤษ ส่งไปญี่ปุ่น หรือให้เพื่อนไทยกับบริจาค"
        },
        {
          "question": "คุณคริสมีประสบการณ์ย้ายประเทศมากี่ครั้ง",
          "answer": "คุณคริสมีประสบการณ์ย้ายประเทศสามครั้ง"
        },
        {
          "question": "คุณคริสย้ายจากที่ไหนไปที่ไหนบ้าง",
          "answer": "ครั้งแรกจากอังกฤษไปสิงคโปร์ ครั้งที่สองจากสิงคโปร์มาประเทศไทย ครั้งนี้ไปญี่ปุ่น"
        },
        {
          "question": "คุณเอ็มมาวางแผนจะทำอะไรที่ญี่ปุ่น",
          "answer": "คุณเอ็มมาวางแผนจะเขียนสารคดีเกี่ยวกับวัดที่ญี่ปุ่น"
        }
      ]
    },
    "quiz": [
      {
        "question": "คุณคริสมีสัญญาทำงานกี่ปี",
        "options": [
          "2 ปี",
          "3 ปี",
          "4 ปี",
          "5 ปี"
        ],
        "correct": 2,
        "explanation": "ผมมีสัญญาทำงานที่บริษัทนี้สี่ปี"
      },
      {
        "question": "คุณคริสจะท่อสัญญาไหม",
        "options": [
          "ใช่",
          "ไม่",
          "ยังไม่รู้",
          "อีกครึ่งปี"
        ],
        "correct": 1,
        "explanation": "ผมตัดสินใจแล้วว่าจะไม่ต่อสัญญา"
      },
      {
        "question": "คุณคริสจะย้ายไปที่ไหน",
        "options": [
          "สิงคโปร์",
          "ญี่ปุ่น",
          "เกาหลี",
          "เมืองไทย"
        ],
        "correct": 1,
        "explanation": "จะย้ายไปทำงานที่ญี่ปุ่น"
      },
      {
        "question": "คุณเอ็มมาจะทำอย่างไร",
        "options": [
          "ลาออก",
          "จัดการงานและวางแผน",
          "พักผ่อน",
          "เรียน"
        ],
        "correct": 1,
        "explanation": "คุณเอ็มมาจัดการเกี่ยวกับงานของเขาและวางแผนเกี่ยวกับการย้าย"
      },
      {
        "question": "ของจะส่งไปไหนบ้าง",
        "options": [
          "เฉพาะญี่ปุ่น",
          "เฉพาะอังกฤษ",
          "อังกฤษ ญี่ปุ่น และบริจาค",
          "ทิ้งไปเลย"
        ],
        "correct": 2,
        "explanation": "ของบางอย่างจะส่งกลับไปที่อังกฤษ บางอย่างจะส่งไปที่ญี่ปุ่น บางอย่างจะบริจาค"
      },
      {
        "question": "คุณคริสมีประสบการณ์ย้ายประเทศกี่ครั้ง",
        "options": [
          "1 ครั้ง",
          "2 ครั้ง",
          "3 ครั้ง",
          "4 ครั้ง"
        ],
        "correct": 2,
        "explanation": "เรามีประสบการณ์ย้ายประเทศมาสามครั้งแล้ว"
      },
      {
        "question": "ครั้งแรกย้ายจากไหน",
        "options": [
          "สิงคโปร์",
          "ไทย",
          "อังกฤษ",
          "ญี่ปุ่น"
        ],
        "correct": 2,
        "explanation": "ครั้งแรกจากอังกฤษไปสิงคโปร์"
      },
      {
        "question": "คุณคริสคิดว่าการย้ายประเทศเป็นอย่างไร",
        "options": [
          "ง่าย",
          "ยาก",
          "ไม่ยากแต่ก็ไม่ง่ายและเหนื่อย",
          "สนุก"
        ],
        "correct": 2,
        "explanation": "ไม่ยากแต่ก็ไม่ง่าย และที่แน่ๆ คือเหนื่อยมาก"
      },
      {
        "question": "ลูกสาวคุณคริสวางแผนจะทำอะไร",
        "options": [
          "เรียนต่อ",
          "เป็นครูสอน",
          "ทำงานธนาคาร",
          "ไม่ทำงาน"
        ],
        "correct": 1,
        "explanation": "ลูกสาวผมวางแผนว่าเรียนจบแล้วจะไปทำงานเป็นครูสอนภาษาอังกฤษที่โตเกียว"
      },
      {
        "question": "คุณคริสคิดว่าครอบครัวมีแผนดีไหม",
        "options": [
          "ไม่ดี",
          "ธรรมดา",
          "ดี",
          "ไม่มีแผน"
        ],
        "correct": 2,
        "explanation": "ผมดีใจที่ครอบครัวของผมมีแผนที่ดีสำหรับชีวิต"
      }
    ],
    "id": 19,
    "thai_title": "ย้ายประเทศ"
  },
  {
    "vocabulary": [
      {
        "thai": "กังวล",
        "romanization": "kaŋ won",
        "english": "to be worried",
        "german": "besorgt sein",
        "example_thai": "ฉันกังวล",
        "example_english": "I am worried",
        "example_german": "Ich bin besorgt"
      },
      {
        "thai": "ระมัดระวัง",
        "romanization": "ra mat ra waŋ",
        "english": "to be careful",
        "german": "vorsichtig sein",
        "example_thai": "ระมัดระวังกับรถ",
        "example_english": "be careful with cars",
        "example_german": "sei vorsichtig mit Autos"
      },
      {
        "thai": "พิจารณา",
        "romanization": "phi cha ran",
        "english": "to consider",
        "german": "erwägen, prüfen",
        "example_thai": "พิจารณาความปลอดภัย",
        "example_english": "consider safety",
        "example_german": "Sicherheit berücksichtigen"
      },
      {
        "thai": "สุขภาพ",
        "romanization": "suk kha phap",
        "english": "health",
        "german": "Gesundheit",
        "example_thai": "สุขภาพดี",
        "example_english": "good health",
        "example_german": "gute Gesundheit"
      },
      {
        "thai": "ทรัพย์สิน",
        "romanization": "saph sin",
        "english": "property, asset",
        "german": "Eigentum, Vermögen",
        "example_thai": "ทรัพย์สินที่มี",
        "example_english": "property that one has",
        "example_german": "das Eigentum, das man hat"
      },
      {
        "thai": "วัฒนธรรม",
        "romanization": "wat tha na tham",
        "english": "culture",
        "german": "Kultur",
        "example_thai": "วัฒนธรรมไทย",
        "example_english": "Thai culture",
        "example_german": "Thailändische Kultur"
      },
      {
        "thai": "โรคระบาด",
        "romanization": "rok ra baat",
        "english": "epidemic",
        "german": "Epidemie",
        "example_thai": "มีโรคระบาด",
        "example_english": "there is an epidemic",
        "example_german": "es gibt eine Epidemie"
      },
      {
        "thai": "โจร",
        "romanization": "choon",
        "english": "a robber, a criminal",
        "german": "Räuber",
        "example_thai": "ระวังโจร",
        "example_english": "beware of robbers",
        "example_german": "Vorsicht vor Räubern"
      },
      {
        "thai": "ขโมย",
        "romanization": "kha moi",
        "english": "a thief, to steal",
        "german": "Dieb, stehlen",
        "example_thai": "มีขโมย",
        "example_english": "there is a thief",
        "example_german": "es gibt einen Dieb"
      },
      {
        "thai": "ร้ายแรง",
        "romanization": "raai raŋ",
        "english": "severe",
        "german": "schwerwiegend",
        "example_thai": "ป่วยร้ายแรง",
        "example_english": "severely ill",
        "example_german": "schwer krank"
      },
      {
        "thai": "การประท้วง",
        "romanization": "kan pra thuaŋ",
        "english": "a protest",
        "german": "Protest",
        "example_thai": "มีการประท้วง",
        "example_english": "there is a protest",
        "example_german": "es gibt einen Protest"
      },
      {
        "thai": "รุนแรง",
        "romanization": "run raŋ",
        "english": "to be violent",
        "german": "gewalttätig",
        "example_thai": "ประท้วงรุนแรง",
        "example_english": "violent protest",
        "example_german": "gewalttätiger Protest"
      },
      {
        "thai": "ปรับตัว",
        "romanization": "prap tua",
        "english": "to adjust",
        "german": "sich anpassen",
        "example_thai": "ปรับตัวกับสภาพแวดล้อม",
        "example_english": "adjust to environment",
        "example_german": "sich an die Umgebung anpassen"
      },
      {
        "thai": "เข้ากับ",
        "romanization": "khao kap",
        "english": "to get along with",
        "german": "sich verstehen mit",
        "example_thai": "เข้ากับเพื่อน",
        "example_english": "get along with friend",
        "example_german": "mit Freunden verstehen"
      },
      {
        "thai": "คนท้องถิ่น",
        "romanization": "khon thong thin",
        "english": "local people",
        "german": "Einheimische",
        "example_thai": "คนท้องถิ่นนี่ดี",
        "example_english": "local people here are good",
        "example_german": "Die Einheimischen hier sind gut"
      },
      {
        "thai": "ตื่นเต้น",
        "romanization": "tʉ̂n tən",
        "english": "to be excited",
        "german": "aufgeregt sein",
        "example_thai": "ตื่นเต้นไปญี่ปุ่น",
        "example_english": "excited to go to Japan",
        "example_german": "aufgeregt, nach Japan zu gehen"
      },
      {
        "thai": "เป็นไปได้",
        "romanization": "pen pai dai",
        "english": "to be possible",
        "german": "möglich sein",
        "example_thai": "เป็นไปได้หรือไม่",
        "example_english": "is it possible",
        "example_german": "ist es möglich"
      },
      {
        "thai": "เกษียณ",
        "romanization": "ka sia yan",
        "english": "retire",
        "german": "in Rente gehen",
        "example_thai": "เกษียณแล้ว",
        "example_english": "already retired",
        "example_german": "bereits in den Ruhestand gegangen"
      },
      {
        "thai": "เอ็กซ์แพต",
        "romanization": "eks phat",
        "english": "an expat",
        "german": "Expat",
        "example_thai": "เป็นเอ็กซ์แพต",
        "example_english": "be an expat",
        "example_german": "ein Expat sein"
      }
    ],
    "reading": [
      {
        "thai": "จากประสบการณ์ของผมและภรรยา การใช้ชีวิตแบบเอ็กซ์แพตมีอะไรๆ หลายอย่างที่ต้องกังวลและระมัดระวัง",
        "english": "From my and my wife's experience, living as an expat has many things to worry about and be careful of",
        "german": "Aus meiner und meiner Frau's Erfahrung hat das Leben als Expat viele Dinge, um die man sich sorgen muss und vorsichtig sein muss"
      },
      {
        "thai": "เรื่องที่สำคัญที่สุดของเราคือความปลอดภัย",
        "english": "The most important thing for us is safety",
        "german": "Das Wichtigste für uns ist Sicherheit"
      },
      {
        "thai": "ก่อนย้ายประเทศ เราจะพิจารณาเกี่ยวกับความปลอดภัย เรื่องสุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และความปลอดภัยเกี่ยวกับวัฒนธรรม",
        "english": "Before moving to a country, we will consider about safety, health, safety in life and property, and safety about culture",
        "german": "Bevor wir in ein Land umziehen, werden wir Sicherheit, Gesundheit, Sicherheit im Leben und Vermögen sowie Sicherheit bezüglich der Kultur berücksichtigen"
      },
      {
        "thai": "ความปลอดภัยเรื่องสุขภาพคือประเทศที่เราเลือกย้ายไปทำงานต้องไม่มีโรคระบาด",
        "english": "Safety about health is that the country we choose to move to must not have an epidemic",
        "german": "Sicherheit in Bezug auf Gesundheit ist, dass das Land, in das wir umziehen, keine Epidemie haben darf"
      },
      {
        "thai": "ต้องมีโรงพยาบาลที่ดี ต้องมีหมอที่เก่ง",
        "english": "must have a good hospital, must have a skilled doctor",
        "german": "muss ein gutes Krankenhaus haben, muss einen geschickten Arzt haben"
      },
      {
        "thai": "ความปลอดภัยในชีวิตและทรัพย์สินคือเราจะอยู่และใช้ชีวิตทุกวันได้โดยไม่ต้องระวังโจรหรือขโมยจนเกินไป",
        "english": "Safety in life and property is that we can live and use life daily without being overly careful of robbers or thieves",
        "german": "Sicherheit im Leben und Eigentum bedeutet, dass wir täglich leben können, ohne übermäßig vor Räubern oder Dieben vorsichtig zu sein"
      },
      {
        "thai": "ไม่มีอุบัติเหตุร้ายแรงบ่อยๆ และไม่มีการประท้วงที่รุนแรงบนถนน",
        "english": "no severe accidents frequently and no violent protests on the street",
        "german": "keine schwerwiegenden Unfälle häufig und keine gewalttätigen Proteste auf der Straße"
      },
      {
        "thai": "ความปลอดภัยเกี่ยวกับวัฒนธรรมคือเราจะพิจารณาว่าเราสามารถปรับตัวให้เข้ากับวัฒนธรรมประเทศนั้นๆ ได้หรือไม่",
        "english": "Safety about culture is that we will consider whether we can adjust and get along with the culture of that country",
        "german": "Sicherheit in Bezug auf Kultur bedeutet, dass wir berücksichtigen werden, ob wir uns an die Kultur dieses Landes anpassen und verstehen können"
      },
      {
        "thai": "ถ้าเราปรับตัวไม่ได้เราอาจอยู่อย่างไม่สบายใจและคนท้องถิ่นก็จะไม่สบายใจด้วย",
        "english": "If we cannot adjust, we might live uncomfortably and local people will also feel uncomfortable",
        "german": "Wenn wir uns nicht anpassen können, könnten wir unangenehm leben und die Einheimischen würden sich auch unwohl fühlen"
      }
    ],
    "structures": [],
    "exercises": {
      "conversation": [
        {
          "question": "เอ็กซ์แพตต้องกังวลและระมัดระวังเกี่ยวกับอะไร",
          "answer": "เอ็กซ์แพตต้องกังวลและระมัดระวังเกี่ยวกับความปลอดภัย เรื่องสุขภาพ และวัฒนธรรม"
        },
        {
          "question": "เรื่องที่สำคัญที่สุดสำหรับเอ็กซ์แพตคืออะไร",
          "answer": "เรื่องที่สำคัญที่สุดคือความปลอดภัย"
        },
        {
          "question": "ก่อนย้ายประเทศต้องพิจารณาเรื่องอะไรบ้าง",
          "answer": "ต้องพิจารณาความปลอดภัยเรื่องสุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และความปลอดภัยเกี่ยวกับวัฒนธรรม"
        },
        {
          "question": "ประเทศที่ปลอดภัยเรื่องสุขภาพต้องมีอะไร",
          "answer": "ต้องไม่มีโรคระบาด ต้องมีโรงพยาบาลที่ดี และมีหมอที่เก่ง"
        },
        {
          "question": "ความปลอดภัยในชีวิตและทรัพย์สินหมายถึงอะไร",
          "answer": "หมายถึงการอยู่โดยไม่ต้องกลัวโจรหรือขโมยจนเกินไป ไม่มีอุบัติเหตุร้ายแรงบ่อยๆ ไม่มีการประท้วงรุนแรง"
        },
        {
          "question": "ความปลอดภัยเกี่ยวกับวัฒนธรรมคืออะไร",
          "answer": "คือการพิจารณาว่าสามารถปรับตัวให้เข้ากับวัฒนธรรมประเทศนั้นได้หรือไม่"
        },
        {
          "question": "ถ้าไม่สามารถปรับตัวได้จะเกิดอะไร",
          "answer": "อาจอยู่อย่างไม่สบายใจและคนท้องถิ่นก็จะไม่สบายใจด้วย"
        },
        {
          "question": "คุณคริสกับภรรยากำลังจะย้ายไปไหน",
          "answer": "กำลังจะย้ายไปที่โตเกียว"
        },
        {
          "question": "คุณคริสคิดว่าที่นั่นปลอดภัยไหม",
          "answer": "ใช่ คิดว่าปลอดภัยมากในทุกๆ ด้าน"
        },
        {
          "question": "คุณคริสกับภรรยาวางแผนว่าเกษียณแล้วจะทำอะไร",
          "answer": "วางแผนว่าถ้าเป็นไปได้จะกลับมาใช้ชีวิตที่ประเทศไทย"
        }
      ]
    },
    "quiz": [
      {
        "question": "เอ็กซ์แพตต้องกังวลเรื่องอะไรมากที่สุด",
        "options": [
          "เงิน",
          "ความปลอดภัย",
          "ครอบครัว",
          "งาน"
        ],
        "correct": 1,
        "explanation": "เรื่องที่สำคัญที่สุดของเราคือความปลอดภัย"
      },
      {
        "question": "ก่อนย้ายประเทศต้องพิจารณาเกี่ยวกับอะไร",
        "options": [
          "ราคา",
          "ความปลอดภัย สุขภาพ และวัฒนธรรม",
          "การเดินทาง",
          "ตำแหน่ง"
        ],
        "correct": 1,
        "explanation": "เราจะพิจารณาเกี่ยวกับความปลอดภัย สุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และวัฒนธรรม"
      },
      {
        "question": "ความปลอดภัยเรื่องสุขภาพต้องมีอะไร",
        "options": [
          "ธรรมชาติ",
          "หนองสม",
          "โรงพยาบาลที่ดีและหมอเก่ง",
          "เก้าอี้"
        ],
        "correct": 2,
        "explanation": "ต้องไม่มีโรคระบาด ต้องมีโรงพยาบาลที่ดี ต้องมีหมอที่เก่ง"
      },
      {
        "question": "ความปลอดภัยในชีวิตและทรัพย์สินหมายถึง",
        "options": [
          "มีเงินมาก",
          "ไม่กลัวโจร ไม่มีอุบัติเหตุร้ายแรง",
          "มีบ้านใหญ่",
          "มีครอบครัว"
        ],
        "correct": 1,
        "explanation": "ความปลอดภัยในชีวิตและทรัพย์สินคือไม่ต้องระวังโจรหรือขโมยจนเกินไป ไม่มีอุบัติเหตุร้ายแรง"
      },
      {
        "question": "ถ้าไม่สามารถปรับตัวกับวัฒนธรรมจะเกิดอะไร",
        "options": [
          "ไม่เป็นไร",
          "อยู่อย่างไม่สบายใจ",
          "ต้องย้ายไป",
          "สนุก"
        ],
        "correct": 1,
        "explanation": "ถ้าเราปรับตัวไม่ได้เราอาจอยู่อย่างไม่สบายใจ"
      },
      {
        "question": "คุณคริสกับภรรยากำลังจะย้ายไปที่ไหน",
        "options": [
          "สิงคโปร์",
          "อเมริกา",
          "โตเกียว",
          "หลวงพระบาง"
        ],
        "correct": 2,
        "explanation": "ผมกับภรรยากำลังจะย้ายจากกรุงเทพฯ ไปอยู่ที่โตเกียว"
      },
      {
        "question": "ที่โตเกียวปลอดภัยไหม",
        "options": [
          "ไม่ดี",
          "ปลอดภัยมากในทุกๆ ด้าน",
          "เพียงพอ",
          "ทั่วไป"
        ],
        "correct": 1,
        "explanation": "เราพิจารณาแล้วว่าที่นั่นปลอดภัยมากในทุกๆ ด้าน"
      },
      {
        "question": "คุณคริสรู้สึกอย่างไรกับการย้ายไปญี่ปุ่น",
        "options": [
          "เศร้า",
          "ตื่นเต้นแต่ก็เสียใจ",
          "ปกติ",
          "กลัว"
        ],
        "correct": 1,
        "explanation": "เราตื่นเต้นที่จะย้ายไปแต่ก็เสียใจด้วย"
      },
      {
        "question": "คุณคริสกับภรรยาชอบประเทศไทยไหม",
        "options": [
          "ไม่",
          "ปกติ",
          "ชอบมาก",
          "ไม่แน่ใจ"
        ],
        "correct": 2,
        "explanation": "ผมกับคุณเอ็มมาชอบประเทศไทยมากและคิดว่าถ้าเป็นไปได้จะกลับมา"
      },
      {
        "question": "คุณคริสกับภรรยาวางแผนว่าเกษียณแล้วจะไป",
        "options": [
          "ไปญี่ปุ่น",
          "ไปอังกฤษ",
          "กลับมาประเทศไทย",
          "ไปสิงคโปร์"
        ],
        "correct": 2,
        "explanation": "ถ้าเป็นไปได้เราจะกลับมาใช้ชีวิตหลังเกษียณที่ประเทศไทย"
      }
    ],
    "id": 20,
    "thai_title": "อยู่อย่างปลอดภัย"
  }
] };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
