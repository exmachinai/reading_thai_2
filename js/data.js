'use strict';

const COURSE_DATA = {
  "chapters": [
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
          "example_german": "Das Unternehmen schickte mich",
          "example_romanization": "brisat song phom ma tha ngan"
        },
        {
          "thai": "สมาชิก",
          "romanization": "samachik",
          "english": "member",
          "german": "Mitglied",
          "example_thai": "ครอบครัวมีสมาชิก 3 คน",
          "example_english": "Family has 3 members",
          "example_german": "Familie hat 3 Mitglieder",
          "example_romanization": "khropkrua mi samachik 3 khon"
        },
        {
          "thai": "แต่งงาน",
          "romanization": "taengngan",
          "english": "to marry",
          "german": "heiraten",
          "example_thai": "เขาแต่งงาน",
          "example_english": "He married",
          "example_german": "Er heiratete",
          "example_romanization": "khao taengngan"
        },
        {
          "thai": "ตอน",
          "romanization": "ton",
          "english": "at (time)",
          "german": "zur Zeit",
          "example_thai": "ตอนคริสต์มาส",
          "example_english": "at Christmas",
          "example_german": "zu Weihnachten",
          "example_romanization": "ton khritmat"
        },
        {
          "thai": "มักจะ",
          "romanization": "makcha",
          "english": "usually",
          "german": "gewöhnlich",
          "example_thai": "มักจะไปทุกปี",
          "example_english": "usually go yearly",
          "example_german": "gehen gewöhnlich jährlich",
          "example_romanization": "makcha pai thukpi"
        },
        {
          "thai": "พักผ่อน",
          "romanization": "phakphon",
          "english": "to rest",
          "german": "ausruhen",
          "example_thai": "พักผ่อนที่ภูเก็ต",
          "example_english": "rest in Phuket",
          "example_german": "Erholung in Phuket",
          "example_romanization": "phakphon thi phuket"
        },
        {
          "thai": "กิจกรรม",
          "romanization": "kitkam",
          "english": "activity",
          "german": "Aktivität",
          "example_thai": "ทํากิจกรรมด้วยกัน",
          "example_english": "do activities together",
          "example_german": "Aktivitäten zusammen",
          "example_romanization": "tha kitkam duaikan"
        },
        {
          "thai": "ด้วยกัน",
          "romanization": "duaikan",
          "english": "together",
          "german": "zusammen",
          "example_thai": "ไปด้วยกัน",
          "example_english": "go together",
          "example_german": "zusammen gehen",
          "example_romanization": "pai duaikan"
        },
        {
          "thai": "ชายหาด",
          "romanization": "chaihat",
          "english": "beach",
          "german": "Strand",
          "example_thai": "ชายหาดสวย",
          "example_english": "beautiful beach",
          "example_german": "schöner Strand",
          "example_romanization": "chaihat suai"
        },
        {
          "thai": "สะอาด",
          "romanization": "saat",
          "english": "clean",
          "german": "sauber",
          "example_thai": "ชายหาดสะอาด",
          "example_english": "clean beach",
          "example_german": "sauberer Strand",
          "example_romanization": "chaihat saat"
        },
        {
          "thai": "อากาศ",
          "romanization": "akat",
          "english": "weather",
          "german": "Wetter",
          "example_thai": "อากาศดี",
          "example_english": "good weather",
          "example_german": "gutes Wetter",
          "example_romanization": "akat di"
        },
        {
          "thai": "คริส",
          "romanization": "kh ri s",
          "english": "Chris (name)",
          "german": "Chris",
          "example_thai": "คริสมาจากอังกฤษ",
          "example_english": "Chris from England",
          "example_german": "Chris aus England",
          "example_romanization": "kh ri sama chak angkrit"
        },
        {
          "thai": "อังกฤษ",
          "romanization": "angkrit",
          "english": "England",
          "german": "England",
          "example_thai": "ประเทศอังกฤษ",
          "example_english": "England country",
          "example_german": "England",
          "example_romanization": "prathet angkrit"
        },
        {
          "thai": "เอ็มมา",
          "romanization": "em ma",
          "english": "Emma (name)",
          "german": "Emma",
          "example_thai": "เอ็มมาเป็นภรรยา",
          "example_english": "Emma is wife",
          "example_german": "Emma ist Ehefrau",
          "example_romanization": "em ma pen phanraya"
        },
        {
          "thai": "คริสต์มาส",
          "romanization": "khritmat",
          "english": "Christmas",
          "german": "Weihnachten",
          "example_thai": "ตอนคริสต์มาส",
          "example_english": "at Christmas",
          "example_german": "zu Weihnachten",
          "example_romanization": "ton khritmat"
        },
        {
          "thai": "ช็อปปิ้ง",
          "romanization": "chopping",
          "english": "shopping",
          "german": "Einkaufen",
          "example_thai": "ช็อปปิ้งสนุก",
          "example_english": "fun shopping",
          "example_german": "spaßig Einkaufen",
          "example_romanization": "chopping sanuk"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ผมชื่อคริส มาจากประเทศอังกฤษ บริษัทที่อังกฤษส่งผมมาทํางานที่กรุงเทพฯ",
            "english": "My name is Chris, from England. My company sent me to work in Bangkok",
            "german": "Ich heiße Chris und komme aus England. Mein Unternehmen schickte mich nach Bangkok",
            "romanization": "phom chue kh ri s machak prathet angkrit brisat thi angkrit song phom ma tha ngan thi krungthep"
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
              "german": "Ich lebe seit 3 Jahren",
              "romanization": "phom yu ma sam pi laeo"
            }
          ],
          "pattern_romanization": "verb + ma + time"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "คุณมาจากประเทศอะไร",
            "english": "What country?",
            "german": "Aus welchem Land?",
            "romanization": "khun machak prathet arai"
          }
        ],
        "pronunciation": {
          "thai": "ผมอยู่มา 3 ปีแล้ว",
          "romanization": "phom yu ma 3 pi laeo"
        },
        "translation": [
          {
            "source_english": "I have lived here for 3 years.",
            "answer_thai": "ผมอยู่มาสามปีแล้ว",
            "answer_romanization": "phom yu ma sam pi laeo",
            "source_german": "Ich lebe seit 3 Jahren hier."
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
          "explanation_en": "ครอบครัว = family",
          "question_romanization": "khropkrua"
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
          "explanation_en": "ส่ง means to send",
          "question_romanization": "song"
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
          "explanation_en": "สมาชิก means member of a group",
          "question_romanization": "samachik"
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
          "explanation_en": "แต่งงาน means to marry",
          "question_romanization": "taengngan"
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
          "explanation_en": "มักจะ means usually/normally",
          "question_romanization": "makcha"
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
          "explanation_en": "พักผ่อน means to rest/relax",
          "question_romanization": "phakphon"
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
          "explanation_en": "กิจกรรม means activity",
          "question_romanization": "kitkam"
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
          "explanation_en": "ด้วยกัน means together",
          "question_romanization": "duaikan"
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
          "explanation_en": "ชายหาด means beach",
          "question_romanization": "chaihat"
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
          "explanation_en": "อากาศ means weather",
          "question_romanization": "akat"
        }
      ],
      "thai_title": "ครอบครัว",
      "english_title": "Family",
      "german_title": "Familie",
      "emoji": "👨‍👩‍👧",
      "thai_title_romanization": "khrop khrua"
    },
    {
      "id": 2,
      "vocabulary": [
        {
          "thai": "วัยรุ่น",
          "romanization": "wairun",
          "english": "teenager",
          "german": "Teenager",
          "example_thai": "เป็นวัยรุ่น",
          "example_english": "be teenager",
          "example_german": "Teenager sein",
          "example_romanization": "pen wairun"
        },
        {
          "thai": "เวลาว่าง",
          "romanization": "welaong",
          "english": "free time",
          "german": "Freizeit",
          "example_thai": "มีเวลาว่าง",
          "example_english": "have free time",
          "example_german": "freie Zeit haben",
          "example_romanization": "mi welaong"
        },
        {
          "thai": "ประเภท",
          "romanization": "praphet",
          "english": "type",
          "german": "Typ",
          "example_thai": "ทุกประเภท",
          "example_english": "all types",
          "example_german": "alle Typen",
          "example_romanization": "thuk praphet"
        },
        {
          "thai": "เกี่ยวกับ",
          "romanization": "kiaokap",
          "english": "about",
          "german": "über",
          "example_thai": "เกี่ยวกับสิ่ง",
          "example_english": "about something",
          "example_german": "über etwas",
          "example_romanization": "kiaokap sing"
        },
        {
          "thai": "กฎหมาย",
          "romanization": "kadahamai",
          "english": "law",
          "german": "Gesetz",
          "example_thai": "เรียนกฎหมาย",
          "example_english": "study law",
          "example_german": "Gesetze studieren",
          "example_romanization": "rian kadahamai"
        },
        {
          "thai": "หลังจาก",
          "romanization": "langchak",
          "english": "after",
          "german": "nach",
          "example_thai": "หลังจากเรียนจบ",
          "example_english": "after graduation",
          "example_german": "nach Abschluss",
          "example_romanization": "langchak riantp"
        },
        {
          "thai": "เรียนจบ",
          "romanization": "riantp",
          "english": "graduate",
          "german": "Abschluss",
          "example_thai": "เรียนจบแล้ว",
          "example_english": "graduated",
          "example_german": "abgeschlossen",
          "example_romanization": "riantp laeo"
        },
        {
          "thai": "มัธยมปลาย",
          "romanization": "matmplai",
          "english": "high school",
          "german": "Gymnasium",
          "example_thai": "เรียนมัธยมปลาย",
          "example_english": "attend high school",
          "example_german": "Gymnasium besuchen",
          "example_romanization": "rian matmplai"
        },
        {
          "thai": "จึง",
          "romanization": "chueng",
          "english": "therefore",
          "german": "daher",
          "example_thai": "สนใจจึงเรียน",
          "example_english": "interested so studied",
          "example_german": "interessiert daher studiert",
          "example_romanization": "sanachai chueng rian"
        },
        {
          "thai": "เลือก",
          "romanization": "lueak",
          "english": "choose",
          "german": "wählen",
          "example_thai": "เลือกเรียน",
          "example_english": "choose study",
          "example_german": "zum Studieren wählen",
          "example_romanization": "lueak rian"
        },
        {
          "thai": "สนใจ",
          "romanization": "sanachai",
          "english": "interested in",
          "german": "interessiert an",
          "example_thai": "สนใจภาษา",
          "example_english": "interested languages",
          "example_german": "an Sprachen interessiert",
          "example_romanization": "sanachai phasa"
        },
        {
          "thai": "น่าสนใจ",
          "romanization": "natnchai",
          "english": "interesting",
          "german": "interessant",
          "example_thai": "น่าสนใจมาก",
          "example_english": "very interesting",
          "example_german": "sehr interessant",
          "example_romanization": "natnchai mak"
        },
        {
          "thai": "ต่างประเทศ",
          "romanization": "tangprathet",
          "english": "foreign",
          "german": "Fremd",
          "example_thai": "ภาษาต่างประเทศ",
          "example_english": "foreign languages",
          "example_german": "Fremdsprachen",
          "example_romanization": "phasatangprathet"
        },
        {
          "thai": "ตอนนี้",
          "romanization": "tonni",
          "english": "now",
          "german": "jetzt",
          "example_thai": "ตอนนี้เรียน",
          "example_english": "studying now",
          "example_german": "jetzt studieren",
          "example_romanization": "tonni rian"
        },
        {
          "thai": "คล่อง",
          "romanization": "khlong",
          "english": "fluent",
          "german": "fließend",
          "example_thai": "พูดคล่อง",
          "example_english": "speak fluently",
          "example_german": "fließend sprechen",
          "example_romanization": "phutklong"
        },
        {
          "thai": "นักเขียน",
          "romanization": "nakkhian",
          "english": "writer",
          "german": "Schriftsteller",
          "example_thai": "เป็นนักเขียน",
          "example_english": "be writer",
          "example_german": "Schriftsteller sein",
          "example_romanization": "pen nakkhian"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ตอนเป็นวัยรุ่น ผมชอบอ่านหนังสือและดูหนัง",
            "english": "As teenager liked reading and movies",
            "german": "Als Teenager mochte ich lesen und Filme",
            "romanization": "ton pen wairun phom chop annangsue lae du nang"
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
              "german": "nicht nur lesen sondern auch ansehen",
              "romanization": "nokchak an laeo yang du nang duai"
            }
          ],
          "pattern_romanization": "nokchak … yang … duai"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "ถ้ามีเวลาว่าง ทำอะไร",
            "english": "What do free time?",
            "german": "Was mit freier Zeit?",
            "romanization": "tha mi welaong tham arai"
          }
        ],
        "pronunciation": {
          "thai": "ผมคิดว่าน่าสนใจ",
          "romanization": "phom khit wa natnchai"
        },
        "translation": [
          {
            "source_english": "I think that is interesting.",
            "answer_thai": "ผมคิดว่าน่าสนใจ",
            "answer_romanization": "phom khit wa natnchai",
            "source_german": "Ich finde das interessant."
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
          "explanation_en": "วัยรุ่น = teenager",
          "question_romanization": "wairun"
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
          "explanation_en": "เวลาว่าง means free time",
          "question_romanization": "welaong"
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
          "explanation_en": "ประเภท means type or kind",
          "question_romanization": "praphet"
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
          "explanation_en": "กฎหมาย means law",
          "question_romanization": "kadahamai"
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
          "explanation_en": "เลือก means to choose",
          "question_romanization": "lueak"
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
          "explanation_en": "สนใจ means interested in",
          "question_romanization": "sanachai"
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
          "explanation_en": "คล่อง means fluent/smooth",
          "question_romanization": "khlong"
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
          "explanation_en": "นักเขียน means writer",
          "question_romanization": "nakkhian"
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
          "explanation_en": "น่าสนใจ means interesting",
          "question_romanization": "natnchai"
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
          "explanation_en": "จึง means therefore/so",
          "question_romanization": "chueng"
        }
      ],
      "thai_title": "เวลาว่าง",
      "english_title": "Free Time",
      "german_title": "Freizeit",
      "emoji": "🎮",
      "thai_title_romanization": "we-la wang"
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
          "example_german": "Rechtsabteilung",
          "example_romanization": "fai kadahamai"
        },
        {
          "thai": "ย้ายไป",
          "romanization": "yai pai",
          "english": "move to",
          "german": "umziehen",
          "example_thai": "ย้ายไปสิงคโปร์",
          "example_english": "move to Singapore",
          "example_german": "nach Singapur umziehen",
          "example_romanization": "yai pai singkhapo"
        },
        {
          "thai": "ธนาคาร",
          "romanization": "thanakhan",
          "english": "bank",
          "german": "Bank",
          "example_thai": "ธนาคารใหญ่",
          "example_english": "big bank",
          "example_german": "große Bank",
          "example_romanization": "thanakhan ain"
        },
        {
          "thai": "ตําแหน่ง",
          "romanization": "ta hae nong",
          "english": "position",
          "german": "Position",
          "example_thai": "ตําแหน่งสูง",
          "example_english": "high position",
          "example_german": "hohe Position",
          "example_romanization": "ta hae nong sung"
        },
        {
          "thai": "ที่ปรึกษา",
          "romanization": "thiprueksa",
          "english": "consultant",
          "german": "Berater",
          "example_thai": "เป็นที่ปรึกษา",
          "example_english": "be consultant",
          "example_german": "Berater sein",
          "example_romanization": "pen thiprueksa"
        },
        {
          "thai": "ระหว่างประเทศ",
          "romanization": "rawangprathet",
          "english": "international",
          "german": "international",
          "example_thai": "บริษัทระหว่างประเทศ",
          "example_english": "international company",
          "example_german": "internationales Unternehmen",
          "example_romanization": "brisat rawangprathet"
        },
        {
          "thai": "รับผิดชอบ",
          "romanization": "rapphitchop",
          "english": "responsible",
          "german": "verantwortlich",
          "example_thai": "รับผิดชอบงาน",
          "example_english": "responsible for work",
          "example_german": "für Arbeit verantwortlich",
          "example_romanization": "rapphitchop ngan"
        },
        {
          "thai": "การเงิน",
          "romanization": "kanngoen",
          "english": "finance",
          "german": "Finanzen",
          "example_thai": "ฝ่ายการเงิน",
          "example_english": "finance division",
          "example_german": "Finanzabteilung",
          "example_romanization": "fai kanngoen"
        },
        {
          "thai": "เพื่อนร่วมงาน",
          "romanization": "phueanruamngan",
          "english": "colleague",
          "german": "Kollege",
          "example_thai": "เพื่อนร่วมงาน",
          "example_english": "colleague at work",
          "example_german": "Arbeitskolleg",
          "example_romanization": "phueanruamngan"
        },
        {
          "thai": "ส่วนใหญ่",
          "romanization": "suanhain",
          "english": "most",
          "german": "meistens",
          "example_thai": "ส่วนใหญ่เป็นไทย",
          "example_english": "mostly Thai",
          "example_german": "meistens Thai",
          "example_romanization": "suanhain pen thai"
        },
        {
          "thai": "ไม่ค่อย",
          "romanization": "makhaioi",
          "english": "not often",
          "german": "nicht oft",
          "example_thai": "ไม่ค่อยได้พูด",
          "example_english": "not often speak",
          "example_german": "nicht oft sprechen",
          "example_romanization": "makhaioi dai phut"
        },
        {
          "thai": "โอกาส",
          "romanization": "okat",
          "english": "opportunity",
          "german": "Gelegenheit",
          "example_thai": "มีโอกาส",
          "example_english": "have opportunity",
          "example_german": "Gelegenheit haben",
          "example_romanization": "miokat"
        },
        {
          "thai": "ขยัน",
          "romanization": "khayan",
          "english": "hardworking",
          "german": "fleißig",
          "example_thai": "ขยันมาก",
          "example_english": "very hardworking",
          "example_german": "sehr fleißig",
          "example_romanization": "khayan mak"
        },
        {
          "thai": "สบายๆ",
          "romanization": "sabai",
          "english": "relaxed",
          "german": "entspannt",
          "example_thai": "คนสบายๆ",
          "example_english": "relaxed person",
          "example_german": "entspannte Person",
          "example_romanization": "khon sabai"
        },
        {
          "thai": "บางครั้ง",
          "romanization": "bangkrang",
          "english": "sometimes",
          "german": "manchmal",
          "example_thai": "บางครั้งมีปัญหา",
          "example_english": "sometimes problem",
          "example_german": "manchmal Problem",
          "example_romanization": "bangkrang mipanha"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "หลังจากเรียนจบมหาวิทยาลัย ผมทํางานที่ฝ่ายกฎหมาย",
            "english": "After university worked in legal division",
            "german": "Nach Universität in Rechtsabteilung gearbeitet",
            "romanization": "langchak riantp mahawitthayalai phom tha ngan thi fai kadahamai"
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
              "german": "meiste Freunde sind Thai",
              "romanization": "phuean suanhain pen thai"
            }
          ],
          "pattern_romanization": "noun + suanhain"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "คุณทํางานอะไร",
            "english": "What work?",
            "german": "Was ist Ihre Arbeit?",
            "romanization": "khun tha ngan arai"
          }
        ],
        "pronunciation": {
          "thai": "ผมชอบทํางานกับคนไทย",
          "romanization": "phom chop tha ngan kap khanathai"
        },
        "translation": [
          {
            "source_english": "I like working with Thai people.",
            "answer_thai": "ผมชอบทํางานกับคนไทย",
            "answer_romanization": "phom chop tha ngan kap khanathai",
            "source_german": "Ich arbeite gern mit Thailändern."
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
          "explanation_en": "ธนาคาร = bank",
          "question_romanization": "thanakhan"
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
          "explanation_en": "ฝ่าย means division/department",
          "question_romanization": "fai"
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
          "explanation_en": "ตําแหน่ง means position/post",
          "question_romanization": "ta hae nong"
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
          "explanation_en": "ที่ปรึกษา means consultant",
          "question_romanization": "thiprueksa"
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
          "explanation_en": "รับผิดชอบ means to be responsible",
          "question_romanization": "rapphitchop"
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
          "explanation_en": "เพื่อนร่วมงาน means colleague/coworker",
          "question_romanization": "phueanruamngan"
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
          "explanation_en": "ส่วนใหญ่ means most",
          "question_romanization": "suanhain"
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
          "explanation_en": "ขยัน means hardworking/industrious",
          "question_romanization": "khayan"
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
          "explanation_en": "สบายๆ means relaxed/comfortable",
          "question_romanization": "sabai"
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
          "explanation_en": "ย้ายไป means to move to",
          "question_romanization": "yai pai"
        }
      ],
      "thai_title": "ทํางาน",
      "english_title": "Work",
      "german_title": "Arbeit",
      "emoji": "💼",
      "thai_title_romanization": "tham ngan"
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
          "example_german": "dringende Arbeit",
          "example_romanization": "ngan duan"
        },
        {
          "thai": "ช่วงเช้า",
          "romanization": "chuang chao",
          "english": "morning",
          "german": "Morgen",
          "example_thai": "ช่วงเช้า",
          "example_english": "in morning",
          "example_german": "am Morgen",
          "example_romanization": "chuang chao"
        },
        {
          "thai": "วางแผน",
          "romanization": "wangphaen",
          "english": "plan",
          "german": "planen",
          "example_thai": "วางแผนงาน",
          "example_english": "plan work",
          "example_german": "Arbeit planen",
          "example_romanization": "wang phaenngan"
        },
        {
          "thai": "แก้ปัญหา",
          "romanization": "kaepanha",
          "english": "solve",
          "german": "lösen",
          "example_thai": "แก้ปัญหา",
          "example_english": "solve problem",
          "example_german": "Problem lösen",
          "example_romanization": "kaepanha"
        },
        {
          "thai": "ช่วงบ่าย",
          "romanization": "chuang bai",
          "english": "afternoon",
          "german": "Nachmittag",
          "example_thai": "ช่วงบ่าย",
          "example_english": "in afternoon",
          "example_german": "am Nachmittag",
          "example_romanization": "chuang bai"
        },
        {
          "thai": "เสร็จ",
          "romanization": "sert",
          "english": "finished",
          "german": "fertig",
          "example_thai": "ทํางานเสร็จ",
          "example_english": "work finished",
          "example_german": "Arbeit fertig",
          "example_romanization": "tha ngan sert"
        },
        {
          "thai": "ต่างกัน",
          "romanization": "tangkan",
          "english": "different",
          "german": "verschieden",
          "example_thai": "ต่างกันมาก",
          "example_english": "very different",
          "example_german": "sehr verschieden",
          "example_romanization": "tangkan mak"
        },
        {
          "thai": "ประวัติศาสตร์",
          "romanization": "prawatisat",
          "english": "history",
          "german": "Geschichte",
          "example_thai": "ประวัติศาสตร์เอเชีย",
          "example_english": "Asian history",
          "example_german": "Asiatische Geschichte",
          "example_romanization": "prawatisat esia"
        },
        {
          "thai": "แปลกใหม่",
          "romanization": "paenkhaim",
          "english": "new interesting",
          "german": "neu interessant",
          "example_thai": "สิ่งแปลกใหม่",
          "example_english": "new interesting thing",
          "example_german": "neuer interessanter Ort",
          "example_romanization": "singpaenkhaim"
        },
        {
          "thai": "ใช้ชีวิต",
          "romanization": "chaichiwit",
          "english": "live",
          "german": "leben",
          "example_thai": "ใช้ชีวิตดี",
          "example_english": "live well",
          "example_german": "gut leben",
          "example_romanization": "chaichiwit di"
        },
        {
          "thai": "วันธรรมดา",
          "romanization": "wan thamda",
          "english": "weekday",
          "german": "Wochentag",
          "example_thai": "วันธรรมดา",
          "example_english": "weekday",
          "example_german": "Wochentag",
          "example_romanization": "wan thamda"
        },
        {
          "thai": "วันเสาร์อาทิตย์",
          "romanization": "wan sao athit",
          "english": "weekend",
          "german": "Wochenende",
          "example_thai": "วันเสาร์อาทิตย์",
          "example_english": "weekend",
          "example_german": "Wochenende",
          "example_romanization": "wan sao athit"
        },
        {
          "thai": "ความสุข",
          "romanization": "khwamsuk",
          "english": "happiness",
          "german": "Glück",
          "example_thai": "มีความสุข",
          "example_english": "be happy",
          "example_german": "glücklich sein",
          "example_romanization": "mikwamsuk"
        },
        {
          "thai": "อีเมล",
          "romanization": "imen",
          "english": "email",
          "german": "E-Mail",
          "example_thai": "ตอบอีเมล",
          "example_english": "reply email",
          "example_german": "E-Mail antworten",
          "example_romanization": "top imen"
        },
        {
          "thai": "ออนไลน์",
          "romanization": "onlai",
          "english": "online",
          "german": "online",
          "example_thai": "ประชุมออนไลน์",
          "example_english": "online meeting",
          "example_german": "Online-Besprechung",
          "example_romanization": "prachum onlai"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ผมทํางานวันจันทร์ถึงศุกร์",
            "english": "Work Monday Friday",
            "german": "Arbeite Montag Freitag",
            "romanization": "phom tha ngan wan chan thueng suk"
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
              "german": "Arbeit beendet",
              "romanization": "ngan sert laeo"
            }
          ],
          "pattern_romanization": "verb + sert"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "วันธรรมดาทําอะไร",
            "english": "What weekday?",
            "german": "Was Wochentag?",
            "romanization": "wan thamda tha arai"
          }
        ],
        "pronunciation": {
          "thai": "โชคดีไม่ต้องทําอาหาร",
          "romanization": "chokdi mataing tha ahan"
        },
        "translation": [
          {
            "source_english": "Luckily, I don't have to cook.",
            "answer_thai": "โชคดีไม่ต้องทําอาหาร",
            "answer_romanization": "chokdi mataing tha ahan",
            "source_german": "Zum Glück muss ich nicht kochen."
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
          "explanation_en": "ด่วน = urgent",
          "question_romanization": "duan"
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
          "explanation_en": "วางแผน means to plan",
          "question_romanization": "wangphaen"
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
          "explanation_en": "แก้ปัญหา means to solve a problem",
          "question_romanization": "kaepanha"
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
          "explanation_en": "เสร็จ means finished/completed",
          "question_romanization": "sert"
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
          "explanation_en": "ต่างกัน means different",
          "question_romanization": "tangkan"
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
          "explanation_en": "ประวัติศาสตร์ means history",
          "question_romanization": "prawatisat"
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
          "explanation_en": "ความสุข means happiness",
          "question_romanization": "khwamsuk"
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
          "explanation_en": "ซีรีส์ means series/TV series",
          "question_romanization": "siris"
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
          "explanation_en": "ใช้ชีวิต means to live one's life",
          "question_romanization": "chaichiwit"
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
          "explanation_en": "วันธรรมดา means weekday",
          "question_romanization": "wan thamda"
        }
      ],
      "thai_title": "ชีวิตประจําวัน",
      "english_title": "Daily Life",
      "german_title": "Alltag",
      "emoji": "📅",
      "thai_title_romanization": "chi-wit pra-cham wan"
    },
    {
      "id": 5,
      "vocabulary": [
        {
          "thai": "ของกินของใช้",
          "romanization": "khongkinkhongchai",
          "english": "products",
          "german": "Produkte",
          "example_thai": "ขายของกินของใช้",
          "example_english": "sell products",
          "example_german": "Produkte verkaufen",
          "example_romanization": "khai khongkinkhongchai"
        },
        {
          "thai": "หลากหลาย",
          "romanization": "laklai",
          "english": "various",
          "german": "verschieden",
          "example_thai": "มีหลากหลาย",
          "example_english": "have various",
          "example_german": "haben verschiedene",
          "example_romanization": "mi laklai"
        },
        {
          "thai": "สินค้า",
          "romanization": "sinkha",
          "english": "goods",
          "german": "Waren",
          "example_thai": "สินค้านําเข้า",
          "example_english": "import goods",
          "example_german": "importierte Waren",
          "example_romanization": "sin khan khao"
        },
        {
          "thai": "นําเข้า",
          "romanization": "na khao",
          "english": "import",
          "german": "importieren",
          "example_thai": "นําเข้าอาหาร",
          "example_english": "import food",
          "example_german": "Lebensmittel importieren",
          "example_romanization": "na khao ahan"
        },
        {
          "thai": "โดยเฉพาะ",
          "romanization": "doichepha",
          "english": "especially",
          "german": "besonders",
          "example_thai": "โดยเฉพาะอาหาร",
          "example_english": "especially food",
          "example_german": "besonders Essen",
          "example_romanization": "doichepha ahan"
        },
        {
          "thai": "สวรรค์",
          "romanization": "suaan",
          "english": "heaven",
          "german": "Himmel",
          "example_thai": "เป็นสวรรค์",
          "example_english": "be heaven",
          "example_german": "Himmel sein",
          "example_romanization": "pen suaan"
        },
        {
          "thai": "บริการ",
          "romanization": "brikan",
          "english": "service",
          "german": "Service",
          "example_thai": "บริการดี",
          "example_english": "good service",
          "example_german": "guter Service",
          "example_romanization": "brikan di"
        },
        {
          "thai": "ชิม",
          "romanization": "chim",
          "english": "taste",
          "german": "schmecken",
          "example_thai": "ชิมอาหาร",
          "example_english": "taste food",
          "example_german": "Essen probieren",
          "example_romanization": "chim ahan"
        },
        {
          "thai": "ระดับ",
          "romanization": "radap",
          "english": "level",
          "german": "Niveau",
          "example_thai": "ทุกระดับ",
          "example_english": "all levels",
          "example_german": "alle Niveaus",
          "example_romanization": "thuk radap"
        },
        {
          "thai": "ทั้ง…ไปจนถึง…",
          "romanization": "thang … pai chanathueng …",
          "english": "from to",
          "german": "von bis",
          "example_thai": "ทั้งเล็กจนถึงใหญ่",
          "example_english": "from small to big",
          "example_german": "von klein bis groß",
          "example_romanization": "thang lek chanathueng ain"
        },
        {
          "thai": "ริมถนน",
          "romanization": "rimtnn",
          "english": "street side",
          "german": "Straßenseite",
          "example_thai": "ร้านริมถนน",
          "example_english": "street shop",
          "example_german": "Straßenladen",
          "example_romanization": "ran rimtnn"
        },
        {
          "thai": "ห้องแถว",
          "romanization": "ongthaeo",
          "english": "shophouse",
          "german": "Ladenhaus",
          "example_thai": "ร้านห้องแถว",
          "example_english": "shophouse restaurant",
          "example_german": "Ladenhaus-Restaurant",
          "example_romanization": "ran ongthaeo"
        },
        {
          "thai": "ติดแอร์",
          "romanization": "titae",
          "english": "air con",
          "german": "Klimaanlage",
          "example_thai": "ร้านติดแอร์",
          "example_english": "air con shop",
          "example_german": "Laden mit Klimaanlage",
          "example_romanization": "ran titae"
        },
        {
          "thai": "หรูๆ",
          "romanization": "ru",
          "english": "luxury",
          "german": "Luxus",
          "example_thai": "โรงแรมหรู",
          "example_english": "luxury hotel",
          "example_german": "Luxushotel",
          "example_romanization": "rongraem ru"
        },
        {
          "thai": "น่าตื่นเต้น",
          "romanization": "natuenten",
          "english": "exciting",
          "german": "aufregend",
          "example_thai": "สิ่งน่าตื่นเต้น",
          "example_english": "exciting thing",
          "example_german": "aufregende Sache",
          "example_romanization": "sing natuenten"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "กิจกรรมวันเสาร์อาทิตย์คือไปซื้อของ กินข้าว และออกกําลังกาย",
            "english": "Weekend activity shopping eating exercise",
            "german": "Wochenend-Aktivität Einkaufen Essen Trainieren",
            "romanization": "kitkam wan sao athit khue pai sue khong kinkhao lae o kok lang kai"
          }
        ]
      },
      "structures": [],
      "exercises": {
        "conversation": [
          {
            "thai": "วันเสาร์อาทิตย์ทําอะไร",
            "english": "What weekend?",
            "german": "Was am Wochenende?",
            "romanization": "wan sao athit tha arai"
          }
        ],
        "pronunciation": {
          "thai": "กรุงเทพเป็นสวรรค์ของคนชอบกิน",
          "romanization": "krungthep pen suaan khong khon chop kin"
        },
        "translation": [
          {
            "source_english": "Bangkok is a paradise for food lovers.",
            "answer_thai": "กรุงเทพเป็นสวรรค์ของคนชอบกิน",
            "answer_romanization": "krungthep pen suaan khong khon chop kin",
            "source_german": "Bangkok ist ein Paradies für Feinschmecker."
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
          "explanation_en": "สวรรค์ = heaven",
          "question_romanization": "suaan"
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
          "explanation_en": "สินค้า means goods/merchandise",
          "question_romanization": "sinkha"
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
          "explanation_en": "นําเข้า means to import",
          "question_romanization": "na khao"
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
          "explanation_en": "บริการ means service",
          "question_romanization": "brikan"
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
          "explanation_en": "ชิม means to taste",
          "question_romanization": "chim"
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
          "explanation_en": "ริมถนน means street side",
          "question_romanization": "rimtnn"
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
          "explanation_en": "หรูๆ means luxury/elegant",
          "question_romanization": "ru"
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
          "explanation_en": "น่าตื่นเต้น means exciting",
          "question_romanization": "natuenten"
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
          "explanation_en": "ห้างสรรพสินค้า means shopping mall/department store",
          "question_romanization": "angtapsinkha"
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
          "explanation_en": "สตรีทฟู้ด means street food",
          "question_romanization": "satrit fut"
        }
      ],
      "thai_title": "วันเสาร์อาทิตย์",
      "english_title": "Weekend",
      "german_title": "Wochenende",
      "emoji": "🛒",
      "thai_title_romanization": "wan sao a-thit"
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
          "romanization": "sankdi",
          "english": "documentary",
          "german": "Dokumentation"
        },
        {
          "thai": "ติดต่อ",
          "romanization": "titto",
          "english": "to contact",
          "german": "Kontakt aufnehmen"
        },
        {
          "thai": "ทั่วโลก",
          "romanization": "thualok",
          "english": "all over the world",
          "german": "auf der ganzen Welt"
        },
        {
          "thai": "สะดวก",
          "romanization": "saduak",
          "english": "convenient",
          "german": "bequem"
        },
        {
          "thai": "สั่งซื้อ",
          "romanization": "sangsue",
          "english": "to place order",
          "german": "bestellen"
        },
        {
          "thai": "จ่ายเงิน",
          "romanization": "chai ngoen",
          "english": "to pay",
          "german": "bezahlen"
        },
        {
          "thai": "บัตรเครดิต",
          "romanization": "batnkhendit",
          "english": "credit card",
          "german": "Kreditkarte"
        },
        {
          "thai": "ยุ่ง",
          "romanization": "yung",
          "english": "busy",
          "german": "beschäftigt"
        },
        {
          "thai": "ยุ่งยาก",
          "romanization": "yungyak",
          "english": "complicated",
          "german": "kompliziert"
        },
        {
          "thai": "ถึงแม้ว่า",
          "romanization": "thuengmaeo",
          "english": "although",
          "german": "obwohl"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ฉันชื่อเอ็มมา เป็นภรรยาของคุณคริส",
            "english": "My name is Emma. I am the wife of Chris.",
            "german": "Mein Name ist Emma. Ich bin die Ehefrau von Chris.",
            "romanization": "chan chue em ma pen phanraya khong khun kh ri s"
          },
          {
            "thai": "ฉันเป็นนักเขียนสารคดีและทํางานที่บ้าน",
            "english": "I am a documentary writer and work at home.",
            "german": "Ich bin Dokumentarschriftstellerin und arbeite zu Hause.",
            "romanization": "chan pen nakkhian sankdi lae tha ngan thi ban"
          },
          {
            "thai": "ฉันติดต่อกับเพื่อนร่วมงานที่อยู่ทั่วโลกได้ทางอีเมล",
            "english": "I contact colleagues all over the world via email.",
            "german": "Ich kontaktiere Kollegen auf der ganzen Welt per E-Mail.",
            "romanization": "chan titto kap phueanruamngan thiyu thualok dai thang imen"
          },
          {
            "thai": "การที่โลกเรามีอินเทอร์เน็ตทําให้ชีวิตของเราสะดวกมาก",
            "english": "The fact that our world has internet makes our life very convenient.",
            "german": "Die Tatsache, dass unsere Welt das Internet hat, macht unser Leben sehr bequem.",
            "romanization": "kan thi lok rao mi inthoenet tha hai chiwit khong rao saduak mak"
          },
          {
            "thai": "ฉันชอบสั่งซื้อของใช้จากจีนเพราะไม่แพงและใช้เวลาส่งไม่นาน",
            "english": "I like ordering things from China because they are not expensive and delivery is fast.",
            "german": "Ich mag es, Dinge aus China zu bestellen, weil sie nicht teuer sind und die Lieferung schnell ist.",
            "romanization": "chan chop sangsue khongchai chak chin phera mai phaeng lae chaiwela song mai nan"
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
              "german": "Obwohl es regnet, gehe ich trotzdem zum Sport.",
              "romanization": "thuengmaeo fanatok tae chan k okchak ban pai o kok lang kai"
            },
            {
              "thai": "ถึงแม้ว่าการซื้อของออนไลน์จะง่ายและสะดวกมาก แต่ฉันก็ยังชอบออกไปนอกบ้าน",
              "english": "Although online shopping is easy and convenient, I still like to go out.",
              "german": "Obwohl Online-Shopping leicht und bequem ist, gehe ich trotzdem gerne raus.",
              "romanization": "thuengmae wakan sue khong onlai cha ngai lae saduak mak tae chan k yang chop ok pai nokban"
            }
          ],
          "pattern_romanization": "thuengmaeo … tae …",
          "meaning_english": "Although…, …",
          "meaning_german": "Obwohl…, …"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "ทุกวันคุณใช้อินเทอร์เน็ตทําอะไรบ้าง",
            "english": "What do you use the internet for every day?",
            "german": "Wofür nutzt du das Internet jeden Tag?"
          },
          {
            "question": "คุณชอบทํางานที่บ้านไหม",
            "english": "Do you like working at home?",
            "german": "Arbeitest du gerne von Zuhause aus?"
          },
          {
            "question": "คุณชอบซื้อของออนไลน์ไหม",
            "english": "Do you like online shopping?",
            "german": "Magst du Online-Shopping?"
          },
          {
            "question": "อยู่ที่กรุงเทพฯ คุณซื้ออาหารออนไลน์ไหม",
            "english": "In Bangkok, do you order food online?",
            "german": "Bestellst du Essen online in Bangkok?"
          },
          {
            "question": "คุณคิดว่าจะใช้ชีวิตแบบไม่ออกจากบ้านเลยได้กี่วัน",
            "english": "How many days do you think you can stay home without going out?",
            "german": "Wie viele Tage denkst du, kannst du zu Hause bleiben?"
          },
          {
            "question": "การซื้อของออนไลน์ดีเพราะง่ายและสะดวก แต่คุณคิดว่ามีอะไรไม่ดีไหม",
            "english": "Online shopping is good because it's easy and convenient, but what do you think is not good?",
            "german": "Online-Shopping ist gut, weil es einfach ist, aber was magst du nicht daran?"
          },
          {
            "question": "แอปพลิเคชันที่คุณใช้บ่อยที่สุดเวลาทํางานคือแอปฯ อะไร",
            "english": "What is the application you use most often when working?",
            "german": "Welche App nutzt du am häufigsten bei der Arbeit?"
          },
          {
            "question": "คุณมีแอปพลิเคชันที่ใช้ช่วยเรียนภาษาไทยไหม",
            "english": "Do you have any applications that help you learn Thai?",
            "german": "Hast du eine App, die dir beim Lernen von Thai hilft?"
          },
          {
            "question": "คุณเชื่อว่าอินเทอร์เน็ตทําให้ชีวิตดีขึ้นไหม",
            "english": "Do you believe the internet makes life better?",
            "german": "Glaubst du, dass das Internet das Leben verbessert?"
          },
          {
            "question": "ถ้าไม่มีอินเทอร์เน็ต คุณจะทําอะไร",
            "english": "If there was no internet, what would you do?",
            "german": "Was würdest du tun, wenn es das Internet nicht gäbe?"
          }
        ],
        "pronunciation": {
          "word": "ช่วยวางไว้บนโต๊ะที่ล็อบบี นะคะ/นะครับ",
          "meaning": "Please leave it on the table in the lobby."
        },
        "translation": [
          {
            "english": "I usually connect with friends via email.",
            "thai": "ฉันติดต่อเพื่อนผ่านอีเมลเป็นปกติ",
            "answer_romanization": "chan titto phuean phan imen penpkti",
            "source_german": "Ich verbinde mich gewöhnlich mit Freunden per E-Mail."
          },
          {
            "english": "I like living in Bangkok because it is very convenient.",
            "thai": "ฉันชอบอยู่กรุงเทพฯ เพราะมันสะดวกมาก",
            "answer_romanization": "chan chop yu krungthep phera man saduak mak",
            "source_german": "Ich lebe gerne in Bangkok, weil es sehr praktisch ist."
          },
          {
            "english": "I don't like ordering food via mobile applications.",
            "thai": "ฉันไม่ชอบสั่งอาหารผ่านแอปพลิเคชัน",
            "answer_romanization": "chan mai chop sangohan phan aepplikhechan",
            "source_german": "Ich mag es nicht, Essen über Apps zu bestellen."
          },
          {
            "english": "Although I am very busy, I exercise every day.",
            "thai": "ถึงแม้ว่าฉันยุ่งมาก แต่ฉันก็ออกกําลังกายทุกวัน",
            "answer_romanization": "thuengmaeo chan yung mak tae chan k o kok lang kai thukwan",
            "source_german": "Obwohl ich sehr beschäftigt bin, trainiere ich jeden Tag."
          },
          {
            "english": "Ordering food via mobile applications is not complicated.",
            "thai": "การสั่งอาหารผ่านแอปพลิเคชันไม่ยุ่งยาก",
            "answer_romanization": "kan sangohan phan aepplikhechan mai yungyak",
            "source_german": "Essen über Apps zu bestellen ist nicht kompliziert."
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
          "explanation_en": "'สารคดี' means 'documentary' or 'documentary report'.",
          "question_romanization": "sankdi"
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
          "explanation_en": "'สะดวก' means 'convenient' or 'comfortable'.",
          "question_romanization": "saduak"
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
          "explanation_en": "'ติดต่อ' means 'to contact' or 'to reach out'.",
          "question_romanization": "chan titto kap phueanruamngan thiyu thualok"
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
          "explanation_en": "This is the 'ถึงแม้ว่า…แต่…' structure meaning 'although'.",
          "question_romanization": "thuengmae wakan sue khong onlai cha ngai tae chan k yang chop ok pai nokban"
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
          "explanation_en": "In the text, Emma says: 'I like ordering things from China because they are not expensive and delivery is fast.'",
          "question_romanization": "chan sangsue khong chak chin phera"
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
          "explanation_en": "'จ่ายเงิน' means 'to pay' or 'to pay money'.",
          "question_romanization": "chai ngoen"
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
          "explanation_en": "The sentence means that payment is convenient because money is automatically deducted from the credit card.",
          "question_romanization": "wela chai ngoen k saduak phera tat ngoen chak batnkhendit"
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
          "explanation_en": "ถึงแม้ว่า…แต่… is used to express contrast - although something is true, something else happens.",
          "question_romanization": "thuengmaeo | tae"
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
          "explanation_en": "'ยุ่งยาก' is an adjective meaning 'complicated' or 'difficult'.",
          "question_romanization": "yungyak"
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
          "explanation_en": "'บัตรเครดิต' means 'credit card'.",
          "question_romanization": "batnkhendit"
        }
      ],
      "thai_title_romanization": "sue khong on-lai"
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
          "romanization": "rathafafai",
          "english": "sky train",
          "german": "Skytrain"
        },
        {
          "thai": "รถไฟใต้ดิน",
          "romanization": "rathafaitaidin",
          "english": "underground",
          "german": "U-Bahn"
        },
        {
          "thai": "สมัยก่อน",
          "romanization": "samaikon",
          "english": "old days",
          "german": "früher"
        },
        {
          "thai": "แคบ",
          "romanization": "khaep",
          "english": "narrow",
          "german": "eng/schmal"
        },
        {
          "thai": "หนัก",
          "romanization": "nak",
          "english": "heavy",
          "german": "schwer"
        },
        {
          "thai": "สมัยนี้",
          "romanization": "samaini",
          "english": "these days",
          "german": "heutzutage"
        },
        {
          "thai": "การเดินทาง",
          "romanization": "kan doenthang",
          "english": "travelling",
          "german": "Reisen"
        },
        {
          "thai": "กว้าง",
          "romanization": "kwang",
          "english": "wide",
          "german": "breiter"
        },
        {
          "thai": "ทางด่วน",
          "romanization": "thangduan",
          "english": "express way",
          "german": "Schnellstraße"
        },
        {
          "thai": "สาย",
          "romanization": "sai",
          "english": "line, route",
          "german": "Linie"
        },
        {
          "thai": "เปรียบเทียบ",
          "romanization": "peripthiap",
          "english": "to compare",
          "german": "vergleichen"
        },
        {
          "thai": "น้อยลง",
          "romanization": "noinng",
          "english": "less",
          "german": "weniger"
        },
        {
          "thai": "ค่าครองชีพ",
          "romanization": "khakrongchip",
          "english": "living expense",
          "german": "Lebenshaltungskosten"
        },
        {
          "thai": "ชั่วโมงเร่งด่วน",
          "romanization": "chuamongrengduan",
          "english": "rush hour",
          "german": "Stoßzeit"
        },
        {
          "thai": "มอเตอร์ไซค์รับจ้าง",
          "romanization": "motoesal rapchang",
          "english": "motorcycle taxi",
          "german": "Motorradtaxi"
        },
        {
          "thai": "รถเมล์",
          "romanization": "rathame",
          "english": "bus",
          "german": "Bus"
        },
        {
          "thai": "แท็กซี่",
          "romanization": "thaeksi",
          "english": "taxi",
          "german": "Taxi"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ผมโชคดีที่มาอยู่กรุงเทพฯ ตอนที่ที่นี่มีรถไฟฟ้าและรถไฟใต้ดินแล้ว",
            "english": "I was lucky to come to Bangkok when it already had the sky train and underground.",
            "german": "Ich war glücklich, nach Bangkok zu kommen, als es bereits den Skytrain und die U-Bahn gab.",
            "romanization": "phom chokdi thima yu krungthep tonthi thini mi rathafafai lae rathafaitaidin laeo"
          },
          {
            "thai": "สมัยก่อนมีแต่รถเมล์ แท็กซี่ ตุ๊กตุ๊ก มอเตอร์ไซค์",
            "english": "In the old days there were only buses, taxis, tuk-tuks, and motorcycles.",
            "german": "Früher gab es nur Busse, Taxis, Tuk-Tuks und Motorräder.",
            "romanization": "samaikon mi tae rathame thaeksi tuktuk motoesal"
          },
          {
            "thai": "สมัยนี้การเดินทางในกรุงเทพฯ สะดวกขึ้นมาก",
            "english": "These days, travelling in Bangkok is much more convenient.",
            "german": "Heutzutage ist das Reisen in Bangkok viel bequemer.",
            "romanization": "samaini kan doen thangnai krungthep saduak khuen mak"
          },
          {
            "thai": "ถนนกว้างขึ้นแล้วก็มีทางด่วนหลายสาย",
            "english": "Streets are wider and there are many expressways.",
            "german": "Die Straßen sind breiter und es gibt mehrere Schnellstraßen.",
            "romanization": "thanon kwang khuen laeok mi thangduan lai sai"
          },
          {
            "thai": "ชั่วโมงเร่งด่วนที่กรุงเทพฯ คือตอนเช้าและตอนเย็น",
            "english": "Rush hours in Bangkok are morning and evening.",
            "german": "Die Stoßzeiten in Bangkok sind morgens und abends.",
            "romanization": "chuamongrengduan thi krungthep khue tonchao lae tonyen"
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
              "german": "Ich bin glücklicher geworden.",
              "romanization": "phom mikwamsuk makkhuen"
            },
            {
              "thai": "ค่าครองชีพที่กรุงเทพฯ แพงขึ้น",
              "english": "Living expenses in Bangkok have become more expensive.",
              "german": "Die Lebenshaltungskosten in Bangkok sind teurer geworden.",
              "romanization": "khakrongchip thi krungthep phaeng khuen"
            }
          ],
          "pattern_romanization": "adjective + khuen",
          "meaning_english": "adjective + more/higher (comparative)",
          "meaning_german": "Adjektiv + mehr/höher (Komparativ)"
        },
        {
          "pattern": "Subject + verb/adjective น้อยลง",
          "meaning": "Subject is less + verb/adjective than before",
          "german": "Subjekt ist weniger + Verb/Adjektiv als zuvor",
          "examples": [
            {
              "thai": "ผมมีความสุขน้อยลง",
              "english": "I have become less happy.",
              "german": "Ich bin weniger glücklich geworden.",
              "romanization": "phom mikwamsuk noinng"
            },
            {
              "thai": "เดือนนี้ฉันใช้เงินน้อยลงเพราะไม่ซื้อของออนไลน์เลย",
              "english": "This month I spent less money because I didn't buy anything online.",
              "german": "Diesen Monat habe ich weniger Geld ausgegeben, da ich nichts online gekauft habe.",
              "romanization": "duean ni chan chai ngoen noinng phera mai sue khong onlai loei"
            }
          ],
          "pattern_romanization": "Subject + verb /adjective noinng",
          "meaning_english": "Subject + verb/adjective less/fewer (comparative)",
          "meaning_german": "Subjekt + Verb/Adjektiv weniger (Komparativ)"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "การเดินทางในบ้านเมืองของคุณสะดวกไหม",
            "english": "Is transportation in your city convenient?",
            "german": "Ist der Verkehr in deiner Stadt bequem?"
          },
          {
            "question": "คุณชอบใช้ยานพาหนะแบบไหน เพื่อไปทํางาน",
            "english": "What kind of transportation do you prefer to use for work?",
            "german": "Welche Art von Verkehrsmittel bevorzugst du für die Arbeit?"
          },
          {
            "question": "เมืองของคุณมีรถไฟฟ้าหรือรถไฟใต้ดินไหม",
            "english": "Does your city have an electric train or subway?",
            "german": "Hat deine Stadt eine elektrische Bahn oder U-Bahn?"
          },
          {
            "question": "ที่เมืองของคุณ ช่วงไหนคือชั่วโมงเร่งด่วน",
            "english": "What time is rush hour in your city?",
            "german": "Wann ist die Stoßzeit in deiner Stadt?"
          },
          {
            "question": "คุณเคยนั่งมอเตอร์ไซค์รับจ้างไหม",
            "english": "Have you ever taken a motorcycle taxi?",
            "german": "Bist du schon mit einem Motorradtaxi gefahren?"
          },
          {
            "question": "คุณคิดว่าการเดินทางในกรุงเทพฯ ดีไหมเมื่อเปรียบเทียบกับเมืองอื่น",
            "english": "Do you think transportation in Bangkok is good compared to other cities?",
            "german": "Denkst du, dass der Verkehr in Bangkok im Vergleich zu anderen Städten gut ist?"
          },
          {
            "question": "ค่าการเดินทางที่กรุงเทพฯ แพงไหม",
            "english": "Is transportation expensive in Bangkok?",
            "german": "Ist der Verkehr in Bangkok teuer?"
          },
          {
            "question": "ถ้าหากไม่มีรถไฟฟ้า การเดินทางในกรุงเทพฯ จะเป็นอย่างไร",
            "english": "What would transportation in Bangkok be like without electric trains?",
            "german": "Wie würde der Verkehr in Bangkok ohne Straßenbahn sein?"
          },
          {
            "question": "คุณคิดว่าทําไมค่าครองชีพที่กรุงเทพฯ แพงขึ้น",
            "english": "Why do you think the cost of living in Bangkok has increased?",
            "german": "Warum denkst du, sind die Lebenshaltungskosten in Bangkok gestiegen?"
          },
          {
            "question": "คุณอยากใช้มอเตอร์ไซค์รับจ้างหรือไม่ ทําไม",
            "english": "Would you like to use a motorcycle taxi? Why or why not?",
            "german": "Möchtest du ein Motorradtaxi benutzen? Warum oder warum nicht?"
          }
        ],
        "pronunciation": {
          "word": "ผม/ฉันไม่เคยนั่งมอไซค์ที่กรุงเทพฯ",
          "meaning": "I have never ridden a motorcycle taxi in Bangkok."
        },
        "translation": [
          {
            "english": "Travelling in Bangkok is very convenient.",
            "thai": "การเดินทางในกรุงเทพฯ สะดวกมาก",
            "answer_romanization": "kan doen thangnai krungthep saduak mak",
            "source_german": "Die Reise in Bangkok ist sehr bequem."
          },
          {
            "english": "Comparing to many countries, the underground in Bangkok is very expensive.",
            "thai": "เมื่อเปรียบเทียบกับหลายประเทศ รถไฟใต้ดินที่กรุงเทพฯ แพงมาก",
            "answer_romanization": "muea peripthiap kap lai prathet rathafaitaidin thi krungthep phaeng mak",
            "source_german": "Im Vergleich zu vielen Ländern ist die U-Bahn in Bangkok sehr teuer."
          },
          {
            "english": "I have never taken a motorcycle taxi in Bangkok.",
            "thai": "ฉันไม่เคยนั่งมอเตอร์ไซค์รับจ้างที่กรุงเทพฯ",
            "answer_romanization": "chan mai khoei nang motoesal rapchang thi krungthep",
            "source_german": "Ich bin noch nie mit einem Motorradtaxi in Bangkok gefahren."
          },
          {
            "english": "Bangkok has more cars but less traffic.",
            "thai": "กรุงเทพฯ มีรถมากขึ้นแต่รถติดน้อยลง",
            "answer_romanization": "krungthep mi rot makkhuen tae rathatit noinng",
            "source_german": "Bangkok hat mehr Autos, aber weniger Stau."
          },
          {
            "english": "Although Bangkok has the sky train and the underground, it still has heavy traffic jam as usual.",
            "thai": "ถึงแม้ว่ากรุงเทพฯ มีรถไฟฟ้าและรถไฟใต้ดิน แต่ก็ยังมีรถติดหนักเหมือนเดิม",
            "answer_romanization": "thuengmaeo krungthep mi rathafafai lae rathafaitaidin tae k yangmi rathatit nak emuendoem",
            "source_german": "Obwohl Bangkok Skytrain und U-Bahn hat, gibt es immer noch schwere Staus wie immer."
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
          "explanation_en": "'รถไฟฟ้า' is the sky train (elevated railway) in Bangkok.",
          "question_romanization": "rathafafai"
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
          "explanation_en": "'ชั่วโมงเร่งด่วน' means 'rush hour' when many people travel.",
          "question_romanization": "chuamongrengduan"
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
          "explanation_en": "'สมัยก่อน' means 'in the old days', 'มีแต่' means 'there were only'.",
          "question_romanization": "samaikon mi tae rathame lae thaeksi"
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
          "explanation_en": "This is the 'adjective + ขึ้น' structure meaning 'has become more/expensive/bigger'.",
          "question_romanization": "khakrongchip phaeng khuen"
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
          "explanation_en": "The 'adjective + น้อยลง' structure is used for 'has become less'.",
          "question_romanization": "duean ni chan chai ngoen | phera mai sue khong onlai"
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
          "explanation_en": "'เปรียบเทียบ' means 'to compare'.",
          "question_romanization": "peripthiap"
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
          "explanation_en": "'ถ้าเปรียบเทียบ' means 'if you compare', 'รถติดน้อยลง' means 'there is less traffic'.",
          "question_romanization": "tha peripthiap kap samaikon rathatit noinng"
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
          "explanation_en": "'ยังไม่เคย' means 'still has not experienced' or 'has never done'.",
          "question_romanization": "yang mai khoei"
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
          "explanation_en": "'มอเตอร์ไซค์รับจ้าง' is a motorcycle taxi that you can hire.",
          "question_romanization": "motoesal rapchang"
        }
      ],
      "thai_title_romanization": "kan doen thang nai krung thep"
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
          "romanization": "praman",
          "english": "approximately",
          "german": "ungefähr"
        },
        {
          "thai": "ความสําคัญ",
          "romanization": "khwam sakhan",
          "english": "importance",
          "german": "Bedeutung"
        },
        {
          "thai": "ทันสมัย",
          "romanization": "thantmai",
          "english": "modern",
          "german": "modern"
        },
        {
          "thai": "แต่งตัว",
          "romanization": "taengtua",
          "english": "to dress",
          "german": "sich anziehen"
        },
        {
          "thai": "สุภาพ",
          "romanization": "suphap",
          "english": "polite",
          "german": "höflich"
        },
        {
          "thai": "เพื่อ",
          "romanization": "phuea",
          "english": "for",
          "german": "um…zu"
        },
        {
          "thai": "ให้เกียรติ",
          "romanization": "aikianti",
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
          "romanization": "tha bun",
          "english": "to make a merit",
          "german": "Verdienst machen"
        },
        {
          "thai": "ตกใจ",
          "romanization": "takachai",
          "english": "be surprised",
          "german": "überraschen"
        },
        {
          "thai": "ล้าง",
          "romanization": "lang",
          "english": "to wash",
          "german": "waschen"
        },
        {
          "thai": "ปล่อย",
          "romanization": "ploi",
          "english": "to let",
          "german": "freilassen"
        },
        {
          "thai": "วันที่",
          "romanization": "wanthi",
          "english": "date",
          "german": "Datum"
        },
        {
          "thai": "เรื่องแปลก",
          "romanization": "rueang paenk",
          "english": "strange thing",
          "german": "seltsam"
        },
        {
          "thai": "สบายใจ",
          "romanization": "sabaichai",
          "english": "feel peaceful/relaxed",
          "german": "sich wohlfühlen"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ฉันเป็นนักเขียนสารคดี ตอนนี้ฉันกําลังเขียนเกี่ยวกับวัดที่เมืองไทย",
            "english": "I am a documentary writer. Now I am writing about temples in Thailand.",
            "german": "Ich bin eine Dokumentarschriftstellerin. Jetzt schreibe ich über Tempel in Thailand.",
            "romanization": "chan pen nakkhian sankdi tonni chan ka lang khian kiaokap wat thi mueang thai"
          },
          {
            "thai": "ประเทศไทยมีวัดประมาณ 42,000 แห่ง",
            "english": "Thailand has approximately 42,000 temples.",
            "german": "Thailand hat ungefähr 42.000 Tempel.",
            "romanization": "prathet thai mi wat praman 42,000 aeng"
          },
          {
            "thai": "ทุกครั้งที่ไปเที่ยววัด ฉันจะแต่งตัวสุภาพ เพื่อให้เกียรติพระ",
            "english": "Every time I visit a temple, I dress politely to show respect to the monks.",
            "german": "Jedes Mal, wenn ich einen Tempel besuche, ziehe ich mich höflich an, um den Mönchen Ehre zu erweisen.",
            "romanization": "thukkrangthi pathaiiao wat chan cha taengtua suphap phuea aikianti phra"
          },
          {
            "thai": "ส่วนใหญ่ตอบว่ามาทําบุญ มาไหว้พระ",
            "english": "Most answered that they come to make merit and pay respect to the monks.",
            "german": "Die meisten antworteten, dass sie kommen, um Verdienst zu machen und den Mönchen zu respektieren.",
            "romanization": "suanhain top wa ma tha bun ma waipra"
          },
          {
            "thai": "วัดคือที่ที่ทําให้เราสบายใจ",
            "english": "A temple is a place that makes us feel at peace.",
            "german": "Ein Tempel ist ein Ort, an dem wir uns wohlfühlen.",
            "romanization": "wat khue thi thi tha hai rao sabaichai"
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
              "german": "Ich mag es, mich schön anzuziehen, um mich wohl zu fühlen.",
              "romanization": "chan chop taengtua suai phuea khwamtbaichai"
            },
            {
              "thai": "เราใช้แอปพลิเคชันซื้อของออนไลน์เพื่อความสะดวก",
              "english": "We use applications to shop online for convenience.",
              "german": "Wir verwenden Anwendungen zum Online-Einkaufen, um Bequemlichkeit zu erreichen.",
              "romanization": "rao chai aepplikhechan sue khong onlai phuea khwamsaduak"
            }
          ],
          "pattern_romanization": "Subject do something phuea + purpose",
          "meaning_english": "Subject does something in order to / for the purpose of",
          "meaning_german": "Subjekt tut etwas, um…zu / mit dem Zweck zu"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "คุณเคยไปเที่ยววัดไหม เพื่อทําอะไร",
            "english": "Have you ever visited a temple? What did you do there?",
            "german": "Hast du schon einen Tempel besucht? Was hast du dort getan?"
          },
          {
            "question": "วัดในประเทศของคุณมีอะไรพิเศษไหม",
            "english": "Is there anything special about temples in your country?",
            "german": "Gibt es etwas Besonderes an Tempeln in deinem Land?"
          },
          {
            "question": "คุณแต่งตัวไปวัดอย่างไร",
            "english": "How do you dress when going to a temple?",
            "german": "Wie kleidest du dich, wenn du einen Tempel besuchst?"
          },
          {
            "question": "คุณคิดว่าเพราะอะไรคนจึงไปวัด",
            "english": "Why do you think people go to temples?",
            "german": "Warum denkst du, gehen Menschen zu Tempeln?"
          },
          {
            "question": "คุณทําบุญไหม ที่ไหน",
            "english": "Do you make merit? Where do you do it?",
            "german": "Tust du verdienstvoll Handlungen? Wo tust du das?"
          },
          {
            "question": "ประเทศของคุณมีพระหรือนักบวชไหม",
            "english": "Does your country have monks or priests?",
            "german": "Hat dein Land Mönche oder Priester?"
          },
          {
            "question": "คุณคิดว่าวัดสําคัญต่อประเทศไทยไหม เพราะอะไร",
            "english": "Do you think temples are important to Thailand? Why or why not?",
            "german": "Denkst du, dass Tempel für Thailand wichtig sind? Warum oder warum nicht?"
          },
          {
            "question": "กิจกรรมแปลกๆ ที่คนไปทําที่วัดคืออะไร",
            "english": "What are some unusual activities people do at temples?",
            "german": "Was sind einige ungewöhnliche Aktivitäten, die Menschen in Tempeln machen?"
          },
          {
            "question": "คุณคิดว่าวัดควรจะทันสมัยหรือเก่าๆ ดี",
            "english": "Do you think temples should be modern or traditional?",
            "german": "Denkst du, sollten Tempel modern oder traditionell sein?"
          },
          {
            "question": "คุณรู้สึกสบายใจที่ไหน ในเมืองของคุณ",
            "english": "Where do you feel at peace in your city?",
            "german": "Wo fühlst du dich in deiner Stadt wohlig?"
          }
        ],
        "pronunciation": {
          "word": "คุณ… มันไม่ใช่เรื่องแปลก",
          "meaning": "This is not a strange thing for you."
        },
        "translation": [
          {
            "english": "Where can I make a merit in Bangkok?",
            "thai": "ฉันสามารถทําบุญที่ไหนในกรุงเทพฯ",
            "answer_romanization": "chan samant tha bun thinai nai krungthep",
            "source_german": "Wo kann ich in Bangkok ein Verdienst machen?"
          },
          {
            "english": "I feel more relaxing after I went shopping.",
            "thai": "ฉันรู้สึกสบายใจมากขึ้นหลังจากไปเลือกซื้อ",
            "answer_romanization": "chan rusuek sabaichai makkhuen lang chakpai lueak sue",
            "source_german": "Ich fühlte mich entspannter, nachdem ich einkaufen ging."
          },
          {
            "english": "I was very surprised!",
            "thai": "ฉันตกใจมาก",
            "answer_romanization": "chan takachai mak",
            "source_german": "Ich war sehr überrascht!"
          },
          {
            "english": "I won't say this one is strange, but I will say this one is interesting.",
            "thai": "ฉันจะไม่บอกว่านี่แปลก แต่ฉันจะบอกว่านี่น่าสนใจ",
            "answer_romanization": "chan cha mai bo kwa ni paenk tae chan cha bo kwa ni natnchai",
            "source_german": "Ich würde das nicht seltsam nennen, aber ich würde sagen, das ist interessant."
          },
          {
            "english": "We must wash hands before eating and after using toilet.",
            "thai": "เราต้องล้างมือก่อนกินและหลังจากใช้ห้องน้ํา",
            "answer_romanization": "rao tong langmue kon kin lae langchak chai ong na",
            "source_german": "Wir müssen vor dem Essen und nach der Toilettenbenutzung die Hände waschen."
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
          "explanation_en": "'ทําบุญ' means 'to make a merit' - a Buddhist activity.",
          "question_romanization": "tha bun"
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
          "explanation_en": "'ประมาณ' means 'approximately' or 'about'.",
          "question_romanization": "praman"
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
          "explanation_en": "'สุภาพ' means 'polite', 'ให้เกียรติ' means 'to show respect/honor'.",
          "question_romanization": "chan taengtua suphap phuea aikianti phra"
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
          "explanation_en": "This is the 'เพื่อ + purpose' structure for expressing the reason of an action.",
          "question_romanization": "taengtua suphap phuea aikianti phra"
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
          "explanation_en": "The text says: 'Thailand has approximately 42,000 temples.'",
          "question_romanization": "prathet thai mi wat | aeng"
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
          "explanation_en": "'ตกใจ' means 'to be surprised or shocked'.",
          "question_romanization": "takachai"
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
          "explanation_en": "'สบายใจ' means 'to feel at peace, feel relaxed'.",
          "question_romanization": "wat khue thi thi tha hai rao sabaichai"
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
          "explanation_en": "'เรื่อง' means 'thing/story', 'แปลก' means 'strange/unusual'.",
          "question_romanization": "rueang paenk"
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
          "explanation_en": "'พระ' is the Buddhist monk in Thailand.",
          "question_romanization": "phra"
        }
      ],
      "thai_title_romanization": "pai thiao wat"
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
          "romanization": "chring laeo",
          "english": "actually",
          "german": "eigentlich"
        },
        {
          "thai": "แมวจรจัด",
          "romanization": "maeo chrachat",
          "english": "stray cat",
          "german": "streunende Katze"
        },
        {
          "thai": "ดูเหมือน",
          "romanization": "duhemuen",
          "english": "seem",
          "german": "scheinen"
        },
        {
          "thai": "กําลังจะ",
          "romanization": "ka lang cha",
          "english": "about to",
          "german": "dabei sein zu"
        },
        {
          "thai": "พา–เอา",
          "romanization": "pha – ao",
          "english": "to bring, to take",
          "german": "bringen/nehmen"
        },
        {
          "thai": "สัตวแพทย์",
          "romanization": "satphaet",
          "english": "veterinarian",
          "german": "Tierarzt"
        },
        {
          "thai": "หน้าปากซอย",
          "romanization": "na paksoi",
          "english": "at the mouth of Soi",
          "german": "Eingang der Soi"
        },
        {
          "thai": "ดูแล",
          "romanization": "dulae",
          "english": "to look after",
          "german": "sich kümmern"
        },
        {
          "thai": "แข็งแรง",
          "romanization": "khaengraeng",
          "english": "strong",
          "german": "stark/gesund"
        },
        {
          "thai": "ได้รับ",
          "romanization": "draip",
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
          "romanization": "thangtua",
          "english": "whole body",
          "german": "ganzer Körper"
        },
        {
          "thai": "ยาม",
          "romanization": "yam",
          "english": "a security guard",
          "german": "Wachmann"
        },
        {
          "thai": "แม่บ้าน",
          "romanization": "maeban",
          "english": "a cleaner",
          "german": "Reinigungskraft"
        },
        {
          "thai": "โชคร้าย–โชคดี",
          "romanization": "chokrai – chokdi",
          "english": "bad luck – good luck",
          "german": "Pech/Glück"
        },
        {
          "thai": "ไม่ถือ",
          "romanization": "mai thue",
          "english": "not take it seriously",
          "german": "nicht ernst nehmen"
        },
        {
          "thai": "เลี้ยงสัตว์",
          "romanization": "liangsat",
          "english": "to have a pet",
          "german": "Haustier halten"
        },
        {
          "thai": "อนุญาต",
          "romanization": "nuyat",
          "english": "to allow",
          "german": "erlauben"
        },
        {
          "thai": "ตอนแรก",
          "romanization": "tonraek",
          "english": "at first",
          "german": "am Anfang"
        },
        {
          "thai": "คลินิก",
          "romanization": "khlinik",
          "english": "clinic",
          "german": "Klinik"
        },
        {
          "thai": "วัคซีน",
          "romanization": "waksin",
          "english": "vaccine",
          "german": "Impfstoff"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ที่บ้านฉันมีแมวหนึ่งตัว ชื่อโมโม่",
            "english": "I have one cat at home named Momo.",
            "german": "Ich habe zu Hause eine Katze namens Momo.",
            "romanization": "thi ban chan mi maeo nueng tua chue mo mo"
          },
          {
            "thai": "จริงๆ แล้วโมโม่เป็นแมวจรจัด",
            "english": "Actually, Momo is a stray cat.",
            "german": "Eigentlich ist Momo eine streunende Katze.",
            "romanization": "chring laeo mo mo pen maeo chrachat"
          },
          {
            "thai": "ฉันเห็นมันนอนอยู่ที่หน้าคอนโดฯ ตัวมันเล็กมาก ผอม สกปรก",
            "english": "I saw it lying in front of the condo. It was very small, skinny and dirty.",
            "german": "Ich sah es vor dem Kondo liegen. Es war sehr klein, dünn und schmutzig.",
            "romanization": "chan en man non yu thi na khondo tua man lek mak phom sakaprok"
          },
          {
            "thai": "ดูเหมือนกําลังจะตาย",
            "english": "It seemed like it was about to die.",
            "german": "Es schien, als würde es gerade sterben.",
            "romanization": "du he mue nok lang cha tai"
          },
          {
            "thai": "ฉันก็เลยพามันไปที่คลินิกสัตวแพทย์หน้าปากซอย",
            "english": "So I took it to the veterinary clinic at the mouth of the soi.",
            "german": "Also brachte ich es in die Tierklinik am Eingang der Soi.",
            "romanization": "chan k loei pha man pai thi khlinik satphaet na paksoi"
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
              "german": "Die meisten Kondos erlauben nicht, dass wir Haustiere halten.",
              "romanization": "khondo suanhain mai nuyat hai ( rao ) liangsat"
            },
            {
              "thai": "สามีอนุญาตให้ฉันใช้เงินจากบัตรเครดิตของเขา",
              "english": "My husband allows me to use money from his credit card.",
              "german": "Mein Mann erlaubt mir, Geld von seiner Kreditkarte zu verwenden.",
              "romanization": "sami nuyat hai chan chai ngoen chak batnkhendit khong khao"
            }
          ],
          "pattern_romanization": "Subject nuyat hai + someone do something",
          "meaning_english": "Subject allows/permits someone to do something",
          "meaning_german": "Subjekt erlaubt jemandem etwas zu tun"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "คุณเลี้ยงสัตว์ไหม เลี้ยงสัตว์ประเภทไหน",
            "english": "Do you have any pets? What kind?",
            "german": "Hast du Haustiere? Was für welche?"
          },
          {
            "question": "ทําไมคุณจึงเลือกเลี้ยงสัตว์นั้น",
            "english": "Why did you choose that type of pet?",
            "german": "Warum hast du dich für diese Art von Haustier entschieden?"
          },
          {
            "question": "คุณเลี้ยงสัตว์ที่ไหน ที่บ้านหรือที่ไหน",
            "english": "Where do you keep your pets? At home or somewhere else?",
            "german": "Wo hältst du deine Haustiere? Zu Hause oder woanders?"
          },
          {
            "question": "คุณรักสัตว์เลี้ยงของคุณไหม",
            "english": "Do you love your pets?",
            "german": "Liebst du deine Haustiere?"
          },
          {
            "question": "คุณเคยเห็นแมวจรจัดไหม ที่ไหน",
            "english": "Have you ever seen a stray cat? Where?",
            "german": "Hast du schon eine streunende Katze gesehen? Wo?"
          },
          {
            "question": "คุณจะช่วยแมวจรจัดไหมถ้าเห็น",
            "english": "Would you help a stray cat if you saw one?",
            "german": "Würdest du eine streunende Katze helfen, wenn du eine sehen würdest?"
          },
          {
            "question": "การเลี้ยงสัตว์มีข้อดีอะไรบ้าง",
            "english": "What are the benefits of keeping pets?",
            "german": "Was sind die Vorteile, Haustiere zu halten?"
          },
          {
            "question": "การเลี้ยงสัตว์มีข้อเสียอะไรบ้าง",
            "english": "What are the disadvantages of keeping pets?",
            "german": "Was sind die Nachteile, Haustiere zu halten?"
          },
          {
            "question": "คุณเชื่อเรื่องโชคร้ายเรื่องสัตว์ไหม",
            "english": "Do you believe in superstitions about animals?",
            "german": "Glaubst du an Aberglauben über Tiere?"
          },
          {
            "question": "คุณเคยพาสัตว์ไปหมอสัตวแพทย์ไหม เมื่อไหร่",
            "english": "Have you ever taken your pet to the veterinarian? When?",
            "german": "Hast du dein Haustier schon zum Tierarzt gebracht? Wann?"
          }
        ],
        "pronunciation": {
          "word": "ขอบคุณนะที่เอาแมวมาเลี้ยง",
          "meaning": "Thank you for bringing the cat to raise."
        },
        "translation": [
          {
            "english": "Now we have a dog at home.",
            "thai": "ตอนนี้เรามีหมาที่บ้าน",
            "answer_romanization": "tonni rao mi ma thi ban",
            "source_german": "Jetzt haben wir einen Hund zu Hause."
          },
          {
            "english": "Actually, I don't want to have pets, but my son took a stray dog back home.",
            "thai": "จริงๆ แล้ว ฉันไม่อยากมีสัตว์เลี้ยง แต่ลูกชายของฉันเอาหมาจรจัดกลับมา",
            "answer_romanization": "chring laeo chan mai yak mi satliang tae lukchai khong chan ao ma chrachat klapma",
            "source_german": "Eigentlich wollte ich keine Haustiere haben, aber mein Sohn brachte einen streunenden Hund nach Hause."
          },
          {
            "english": "I allowed my son to have the dog.",
            "thai": "ฉันอนุญาตให้ลูกชายเลี้ยงหมา",
            "answer_romanization": "chan nuyat hai lukchai liang ma",
            "source_german": "Ich erlaubte meinem Sohn, den Hund zu haben."
          },
          {
            "english": "He takes care of the dog very well and will bring it to see a veterinarian on Saturday.",
            "thai": "เขาดูแลหมาได้ดีมาก และจะพามันไปหมอสัตวแพทย์ในวันเสาร์",
            "answer_romanization": "khao dulae ma dai dimak lae cha pha man pai mo satphaet nai wan sao",
            "source_german": "Er kümmert sich sehr gut um den Hund und wird ihn am Samstag zum Tierarzt bringen."
          },
          {
            "english": "The dog's name is Lucky.",
            "thai": "ชื่อหมาคือ โชคดี",
            "answer_romanization": "chue ma khue chokdi",
            "source_german": "Der Name des Hundes ist Lucky."
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
          "explanation_en": "'แมว' = cat, 'จรจัด' = wandering, stray",
          "question_romanization": "maeo chrachat"
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
          "explanation_en": "'สัตว์' = animal, 'แพทย์' = doctor, 'สัตวแพทย์' = veterinarian",
          "question_romanization": "satphaet"
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
          "explanation_en": "'ทั้งตัว' means 'whole body' or 'all over the body'.",
          "question_romanization": "mo mo pen maeo da thangtua"
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
          "explanation_en": "This is the 'อนุญาต + ให้' structure meaning 'to allow'.",
          "question_romanization": "khondo nuyat hai liangsat"
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
          "explanation_en": "In the text Emma says: 'I saw it lying in front of the condo.'",
          "question_romanization": "chan en maeo | yu thi na khondo"
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
          "explanation_en": "'จริงๆ แล้ว' is used to correct something or tell the truth.",
          "question_romanization": "chring laeo"
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
          "explanation_en": "This is a simple cause-effect statement with 'เพราะ' (because).",
          "question_romanization": "chan liang maeo phera khondo nuyat"
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
          "explanation_en": "'แข็งแรง' means 'strong' or 'healthy and robust'.",
          "question_romanization": "khaengraeng"
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
          "explanation_en": "'วัคซีน' is the English word 'vaccine' written in Thai.",
          "question_romanization": "waksin"
        }
      ],
      "thai_title_romanization": "sat liang"
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
          "romanization": "ha",
          "english": "look for, search",
          "german": "suchen"
        },
        {
          "thai": "แถว",
          "romanization": "thaeo",
          "english": "around (area)",
          "german": "Gegend"
        },
        {
          "thai": "เงียบสงบ",
          "romanization": "ngiaptngp",
          "english": "quiet and peaceful",
          "german": "ruhig und friedlich"
        },
        {
          "thai": "ทั้งหมด",
          "romanization": "thangmt",
          "english": "all",
          "german": "insgesamt"
        },
        {
          "thai": "ชั้น",
          "romanization": "chan",
          "english": "floor",
          "german": "Etage"
        },
        {
          "thai": "เพื่อนบ้าน",
          "romanization": "phueanban",
          "english": "neighbor",
          "german": "Nachbar"
        },
        {
          "thai": "อื่นๆ",
          "romanization": "uen",
          "english": "other",
          "german": "andere"
        },
        {
          "thai": "รอบๆ",
          "romanization": "rop",
          "english": "surround",
          "german": "rundherum"
        },
        {
          "thai": "เสียงดัง",
          "romanization": "siangdang",
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
          "romanization": "buri",
          "english": "cigarette",
          "german": "Zigarette"
        },
        {
          "thai": "ละ",
          "romanization": "la",
          "english": "per",
          "german": "pro"
        },
        {
          "thai": "บ่น",
          "romanization": "bon",
          "english": "complain",
          "german": "beschweren"
        },
        {
          "thai": "แค่",
          "romanization": "khae",
          "english": "just",
          "german": "nur"
        },
        {
          "thai": "แบ่ง",
          "romanization": "baeng",
          "english": "to share",
          "german": "teilen"
        },
        {
          "thai": "สด",
          "romanization": "sot",
          "english": "fresh",
          "german": "frisch"
        },
        {
          "thai": "สวน",
          "romanization": "suan",
          "english": "garden, orchard",
          "german": "Obstgarten"
        },
        {
          "thai": "ต่างจังหวัด",
          "romanization": "tangchangwat",
          "english": "provinces other than Bangkok",
          "german": "Provinzen außerhalb Bangkoks"
        },
        {
          "thai": "เค้ก",
          "romanization": "khek",
          "english": "cake",
          "german": "Kuchen"
        }
      ],
      "reading": {
        "sentences": [
          {
            "thai": "ตอนย้ายมาทํางานที่กรุงเทพฯ บริษัทของผมหาคอนโดฯ ให้ผมกับคุณเอ็มมาหลายแห่ง",
            "english": "When I moved to work in Bangkok, my company found several condos for me and Emma.",
            "german": "Als ich nach Bangkok zog, um zu arbeiten, fand mein Unternehmen mehrere Kondos für mich und Emma.",
            "romanization": "ton yai ma tha ngan thi krungthep brisat khong phom ha khondo hai phom kap khun em ma lai aeng"
          },
          {
            "thai": "เราเลือกคอนโดฯ แถวช่องนนทรีเพราะไม่ไกลจากที่ทํางาน เดินทางสะดวกและเงียบสงบดี",
            "english": "We chose a condo around Chong Nonsi because it wasn't far from work, convenient to travel and quiet.",
            "german": "Wir wählten ein Kondo in der Nähe von Chong Nonsi, weil es nicht weit weg war, bequem zu erreichen und ruhig.",
            "romanization": "rao lueak khondo thaeo chong nanathri phera mai klai chak thi tha ngan doenthang saduak lae ngiaptngp di"
          },
          {
            "thai": "ที่คอนโดฯ เรามีเพื่อนบ้านที่ดีด้วย",
            "english": "At the condo, we also have good neighbors.",
            "german": "Im Kondo haben wir auch gute Nachbarn.",
            "romanization": "thi khondo rao mi phueanban thi di duai"
          },
          {
            "thai": "ห้องติดกันข้างซ้ายเป็นครอบครัวคนญี่ปุ่น มีลูกเรียนมัธยมสองคน",
            "english": "The room on the left is a Japanese family with two high school children.",
            "german": "Das Zimmer links ist eine japanische Familie mit zwei Gymnasiasten.",
            "romanization": "ong titkan khang sai pen khropkrua khanayipun miluk rian matm song khon"
          },
          {
            "thai": "เพื่อนบ้านชาวญี่ปุ่นทําอาหารมาแบ่งให้เราบ่อยๆ",
            "english": "Our Japanese neighbors often cook and share food with us.",
            "german": "Unsere japanischen Nachbarn kochen häufig und teilen Essen mit uns.",
            "romanization": "phueanban chao yipun tha ahan ma baeng hai rao boi"
          }
        ]
      },
      "structures": [
        {
          "pattern": "noun + ทั้งหมด",
          "meaning": "all + noun",
          "german": "alle + Substantiv",
          "pattern_romanization": "noun + thangmt",
          "meaning_english": "noun + all/altogether",
          "meaning_german": "Nomen + alles/insgesamt"
        },
        {
          "pattern": "noun + classifier + อื่นๆ",
          "meaning": "other nouns",
          "german": "andere Substantive",
          "pattern_romanization": "noun + classifier + uen",
          "meaning_english": "noun + classifier + other/etc.",
          "meaning_german": "Nomen + Klassifizierer + anderes/etc."
        },
        {
          "pattern": "วัน/อาทิตย์/เดือน/ปี + ละ + number + ครั้ง",
          "meaning": "…times per day/week/month/year",
          "german": "…mal pro Tag/Woche/Monat/Jahr",
          "pattern_romanization": "wan / athit / duean / pi + la + number + khrang",
          "meaning_english": "day/week/month/year + per/each + number + times",
          "meaning_german": "Tag/Woche/Monat/Jahr + pro/jeden + Anzahl + Mal"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "คุณมีเพื่อนบ้านดีไหม",
            "english": "Do you have good neighbors?",
            "german": "Hast du gute Nachbarn?"
          },
          {
            "question": "คุณคุยกับเพื่อนบ้านบ่อยไหม",
            "english": "Do you talk to your neighbors often?",
            "german": "Sprichst du oft mit deinen Nachbarn?"
          },
          {
            "question": "เพื่อนบ้านของคุณมาจากประเทศไหน",
            "english": "What country are your neighbors from?",
            "german": "Aus welchem Land kommen deine Nachbarn?"
          },
          {
            "question": "คุณเคยแบ่งของให้เพื่อนบ้านไหม",
            "english": "Have you ever shared things with your neighbors?",
            "german": "Hast du schon etwas mit deinen Nachbarn geteilt?"
          },
          {
            "question": "ห้องข้างบน/ข้างล่าง/ข้างซ้าย/ข้างขวา มีเพื่อนบ้านไหม",
            "english": "Do you have neighbors above, below, left, or right of you?",
            "german": "Hast du Nachbarn über, unter, links oder rechts von dir?"
          },
          {
            "question": "เพื่อนบ้านของคุณ มีเด็กไหม",
            "english": "Do your neighbors have any children?",
            "german": "Haben deine Nachbarn Kinder?"
          },
          {
            "question": "คุณรู้สึกกับเสียงดังจากเพื่อนบ้านไหม",
            "english": "Do you mind the noise from your neighbors?",
            "german": "Störst du dich am Lärm deiner Nachbarn?"
          },
          {
            "question": "คุณจะบ่นเรื่องเพื่อนบ้านไหม",
            "english": "Would you complain about your neighbors?",
            "german": "Würdest du dich über deine Nachbarn beschweren?"
          },
          {
            "question": "บ้านของคุณรอบๆ เงียบไหม",
            "english": "Is the area around your house quiet?",
            "german": "Ist die Gegend um dein Haus ruhig?"
          },
          {
            "question": "คุณคิดว่ามีเพื่อนบ้านดีเป็นประโยชน์ไหม",
            "english": "Do you think having good neighbors is beneficial?",
            "german": "Denkst du, dass gute Nachbarn vorteilhaft sind?"
          }
        ],
        "pronunciation": {
          "word": "สวัสดีค่ะ ฉันทํา…มาให้ค่ะ ยังร้อนๆ อยู่เลย",
          "meaning": "Hello, I made... for you. It's still warm."
        },
        "translation": [
          {
            "english": "I am living in a condominium around Sukhumvit.",
            "thai": "ฉันอยู่ในคอนโดประมาณ สุขุมวิท",
            "answer_romanization": "chan yu nai khondo praman sukhumwit",
            "source_german": "Ich lebe in einem Wohnhaus um die Sukhumvit."
          },
          {
            "english": "My condominium is quiet and peaceful.",
            "thai": "คอนโดของฉันเงียบและสงบ",
            "answer_romanization": "khondo khong chan ngiap lae sangop",
            "source_german": "Mein Wohnhaus ist ruhig und friedlich."
          },
          {
            "english": "I am living on the 12th floor.",
            "thai": "ฉันอยู่ที่ชั้น 12",
            "answer_romanization": "chan yu thi chan 12",
            "source_german": "Ich wohne in der 12. Etage."
          },
          {
            "english": "I do not know any neighbors.",
            "thai": "ฉันไม่รู้จักเพื่อนบ้าน",
            "answer_romanization": "chan mai ruchak phueanban",
            "source_german": "Ich kenne keine Nachbarn."
          },
          {
            "english": "We smile when we meet in the lift but we have never talked.",
            "thai": "เรายิ้มเมื่อเจอกันในลิฟต์ แต่ไม่เคยคุยกัน",
            "answer_romanization": "rao yim muea choekan nai lip tae mai khoei khui kan",
            "source_german": "Wir lächeln, wenn wir im Aufzug aufeinander treffen, aber wir haben nie geredet."
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
          "explanation_en": "'เงียบ' = quiet, 'สงบ' = peaceful",
          "question_romanization": "ngiaptngp"
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
          "explanation_en": "'เพื่อน' = friend, 'บ้าน' = house, 'เพื่อนบ้าน' = neighbor",
          "question_romanization": "phueanban"
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
          "explanation_en": "This is a simple causal sentence with 'เพราะ' (because).",
          "question_romanization": "rao lueak khondo phera mai klai chak thi tha ngan"
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
          "explanation_en": "This shows the 'noun + classifier + อื่นๆ' structure for 'others'.",
          "question_romanization": "ong | uen"
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
          "explanation_en": "In the text Chris says: 'The condo has 12 floors in total.'",
          "question_romanization": "khondo mi thangmt | chan"
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
          "explanation_en": "'กลิ่น' means 'smell' or 'scent'.",
          "question_romanization": "klin"
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
          "explanation_en": "'ทําอาหารมาแบ่งให้' means 'cook food and share it with'.",
          "question_romanization": "phueanban chao yipun tha ahan ma baeng hai rao boi"
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
          "explanation_en": "'เดือนละหนึ่งครั้ง' is the 'noun + ละ + number + ครั้ง' structure.",
          "question_romanization": "duean la nueng khrang"
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
          "explanation_en": "'แค่' means 'just' or 'only'.",
          "question_romanization": "khae"
        }
      ],
      "thai_title_romanization": "phuean ban"
    },
    {
      "chapter": 11,
      "vocabulary": [
        {
          "thai": "ความปลอดภัย",
          "romanization": "khwamplotphai",
          "english": "security",
          "german": "Sicherheit",
          "example_thai": "ยามดูแลความปลอดภัยของคอนโดฯ",
          "example_english": "The guard takes care of the condo's security",
          "example_german": "Der Wachmann kümmert sich um die Sicherheit der Eigentumswohnung",
          "example_romanization": "yam dulae khwamplotphai khong khondo"
        },
        {
          "thai": "ทางเข้า",
          "romanization": "thangkhao",
          "english": "entrance",
          "german": "Eingang",
          "example_thai": "ทางเข้าคอนโดฯ มีความปลอดภัยดีมาก",
          "example_english": "The condo entrance has good security",
          "example_german": "Der Eingang der Eigentumswohnung hat sehr gute Sicherheit",
          "example_romanization": "thangkhao khondo mi khwamplotphai dimak"
        },
        {
          "thai": "พื้นที่ส่วนกลาง",
          "romanization": "phuenthi suanklang",
          "english": "common space",
          "german": "Gemeinschaftsbereich",
          "example_thai": "พื้นที่ส่วนกลางสะอาดเสมอ",
          "example_english": "The common spaces are always clean",
          "example_german": "Die Gemeinschaftsbereiche sind immer sauber",
          "example_romanization": "phuenthi suanklang saat semo"
        },
        {
          "thai": "ห้องสมุด",
          "romanization": "ongtmut",
          "english": "library",
          "german": "Bibliothek",
          "example_thai": "ห้องสมุดของคอนโดฯ มีหนังสือเยอะ",
          "example_english": "The condo library has many books",
          "example_german": "Die Bibliothek der Eigentumswohnung hat viele Bücher",
          "example_romanization": "ongtmut khong khondo mi nangsue yoe"
        },
        {
          "thai": "สระว่ายน้ำ",
          "romanization": "srawainam",
          "english": "swimming pool",
          "german": "Schwimmbad",
          "example_thai": "ผมชอบว่ายน้ำที่สระว่ายน้ำของคอนโดฯ",
          "example_english": "I like swimming at the condo pool",
          "example_german": "Ich mag im Schwimmbad der Eigentumswohnung schwimmen",
          "example_romanization": "phom chop wainam thi srawainam khong khondo"
        },
        {
          "thai": "สนามเทนนิส",
          "romanization": "sanamthennit",
          "english": "tennis court",
          "german": "Tennisplatz",
          "example_thai": "สนามเทนนิสของคอนโดฯ สำหรับลูกบ้านเท่านั้น",
          "example_english": "The tennis court is only for residents",
          "example_german": "Der Tennisplatz ist nur für Bewohner reserviert",
          "example_romanization": "sanamthennit khong khondo samrap lukban thaonan"
        },
        {
          "thai": "เจ้าหน้าที่สำนักงาน",
          "romanization": "chaonathi samnakngan",
          "english": "officer",
          "german": "Büroangestellte(r)",
          "example_thai": "เจ้าหน้าที่สำนักงานช่วยลูกบ้านทุกคน",
          "example_english": "The officers help all residents",
          "example_german": "Der/Die Büroangestellte hilft allen Bewohnern",
          "example_romanization": "chaonathi samnakngan chuai lukban thukkn"
        },
        {
          "thai": "ลูกบ้าน",
          "romanization": "lukban",
          "english": "resident",
          "german": "Bewohner",
          "example_thai": "ลูกบ้านทุกคนรู้สึกสบายใจ",
          "example_english": "All residents feel comfortable",
          "example_german": "Alle Bewohner fühlen sich wohl",
          "example_romanization": "lukban thukkn rusuek sabaichai"
        },
        {
          "thai": "เต็มที่",
          "romanization": "temthi",
          "english": "to the utmost",
          "german": "mit vollem Einsatz",
          "example_thai": "พวกเขาช่วยแก้ปัญหาเต็มที่",
          "example_english": "They solve problems to the utmost",
          "example_german": "Sie lösen Probleme mit vollem Einsatz",
          "example_romanization": "phuakkhao chuai kaepanha temthi"
        },
        {
          "thai": "ช่าง",
          "romanization": "chang",
          "english": "a repair man",
          "german": "Handwerker",
          "example_thai": "ช่างของคอนโดฯ เก่งมาก",
          "example_english": "The condo repairman is very skilled",
          "example_german": "Der Handwerker der Eigentumswohnung ist sehr geschickt",
          "example_romanization": "chang khong khondo keng mak"
        },
        {
          "thai": "น้ำประปา",
          "romanization": "namprapa",
          "english": "water supply",
          "german": "Wasserversorgung",
          "example_thai": "ช่างดูแลเรื่องน้ำประปา",
          "example_english": "The repairman takes care of water supply",
          "example_german": "Der Handwerker kümmert sich um die Wasserversorgung",
          "example_romanization": "chang dulae rueang namprapa"
        },
        {
          "thai": "ไฟฟ้า",
          "romanization": "fafai",
          "english": "electricity",
          "german": "Elektrizität",
          "example_thai": "ช่างดูแลไฟฟ้าด้วย",
          "example_english": "The repairman also takes care of electricity",
          "example_german": "Der Handwerker kümmert sich auch um die Elektrizität",
          "example_romanization": "chang dulae fafai duai"
        },
        {
          "thai": "เสีย",
          "romanization": "sia",
          "english": "broken",
          "german": "kaputt",
          "example_thai": "ไฟฟ้าเสีย ช่างมาซ่อม",
          "example_english": "The electricity is broken and the repairman fixes it",
          "example_german": "Die Elektrizität ist kaputt und der Handwerker repariert sie",
          "example_romanization": "fafai sia chang ma som"
        },
        {
          "thai": "ซ่อม",
          "romanization": "som",
          "english": "fix",
          "german": "reparieren",
          "example_thai": "ช่างมาซ่อมอากาศแต่งตัว",
          "example_english": "The repairman comes to fix the air conditioner",
          "example_german": "Der Handwerker kommt um die Klimaanlage zu reparieren",
          "example_romanization": "chang ma som akat taengtua"
        },
        {
          "thai": "คำแนะนำ",
          "romanization": "khamnaenam",
          "english": "advise",
          "german": "Ratschlag",
          "example_thai": "ช่างให้คำแนะนำที่ดี",
          "example_english": "The repairman gives good advice",
          "example_german": "Der Handwerker gibt gute Ratschläge",
          "example_romanization": "chang hai khamnaenam thi di"
        },
        {
          "thai": "พนักงาน",
          "romanization": "phanakngan",
          "english": "a staff",
          "german": "Mitarbeiter",
          "example_thai": "พนักงานทุกคนใจดี",
          "example_english": "All the staff are kind-hearted",
          "example_german": "Alle Mitarbeiter sind freundlich",
          "example_romanization": "phanakngan thuk khanachaidi"
        },
        {
          "thai": "ของฝาก",
          "romanization": "khongfak",
          "english": "souvenir",
          "german": "Mitbringsel",
          "example_thai": "ฉันนำของฝากมาให้พนักงาน",
          "example_english": "I bring souvenirs for the staff",
          "example_german": "Ich bringe Mitbringsel für die Mitarbeiter",
          "example_romanization": "chan nam khongfak ma hai phanakngan"
        },
        {
          "thai": "เล็กๆ น้อยๆ",
          "romanization": "lek noi",
          "english": "not special thing",
          "german": "Kleinigkeiten",
          "example_thai": "ฉันมีของฝากเล็กๆ น้อยๆ",
          "example_english": "I have small souvenirs",
          "example_german": "Ich habe kleine Mitbringsel",
          "example_romanization": "chan mi khongfak lek noi"
        },
        {
          "thai": "ตลอดปี",
          "romanization": "tlotpi",
          "english": "all through the year",
          "german": "das ganze Jahr",
          "example_thai": "พวกเขาทำงานหนักตลอดปี",
          "example_english": "They work hard all through the year",
          "example_german": "Sie arbeiten hart das ganze Jahr",
          "example_romanization": "phuakkhao thamngannak tlotpi"
        },
        {
          "thai": "คุกกี้",
          "romanization": "khukki",
          "english": "cookies",
          "german": "Kekse",
          "example_thai": "ฉันทำคุกกี้ให้พนักงาน",
          "example_english": "I make cookies for the staff",
          "example_german": "Ich backe Kekse für die Mitarbeiter",
          "example_romanization": "chan tham khukki hai phanakngan"
        }
      ],
      "reading": [
        {
          "thai": "คอนโดฯ ที่ฉันอยู่ นอกจากเงียบสงบแล้ว ยังมีการดูแลที่ดีด้วย",
          "english": "Apart from being quiet, the condo I live in also has good care",
          "german": "Neben der Ruhe hat die Eigentumswohnung, in der ich lebe, auch gute Betreuung",
          "romanization": "khondo thi chan yu nokchak ngiaptngp laeo yangmi kan dulae thi di duai"
        },
        {
          "thai": "ยามทุกคนที่คอนโดฯ ดูแลเกี่ยวกับความปลอดภัยดีมาก",
          "english": "The guards at the condo take very good care of security",
          "german": "Die Wachen in der Eigentumswohnung kümmern sich sehr gut um die Sicherheit",
          "romanization": "yam thukkn thi khondo dulae kiaokap khwamplotphai dimak"
        },
        {
          "thai": "แม่บ้านทุกคนดูแลความสะอาดและช่วยให้ความสะดวกทุกอย่าง",
          "english": "All the maids maintain cleanliness and provide every convenience",
          "german": "Alle Reinigungspersonen kümmern sich um die Sauberkeit und bieten jeden Komfort",
          "romanization": "maeban thukkn dulae khwamsaat lae chuai hai khwamsaduak thukoing"
        },
        {
          "thai": "เจ้าหน้าที่สำนักงานคอนโดฯ ช่วยให้ความสะดวกกับลูกบ้านทุกคน",
          "english": "The condo office officers provide convenience to all residents",
          "german": "Die Büroangestellten der Eigentumswohnung bieten allen Bewohnern Komfort",
          "romanization": "chaonathi samnakngan khondo chuai hai khwamsaduak kap lukban thukkn"
        },
        {
          "thai": "ช่างของคอนโดฯ ก็เก่งมาก พวกเขาดูแลเกี่ยวกับน้ำประปา ไฟฟ้า และอื่นๆ",
          "english": "The condo repairman is also very skilled; they take care of water supply, electricity, and more",
          "german": "Der Handwerker der Eigentumswohnung ist auch sehr geschickt; er kümmert sich um Wasserversorgung, Elektrizität und vieles mehr",
          "romanization": "chang khong khondo k keng mak phuakkhao dulae kiaokap namprapa fafai lae uen"
        },
        {
          "thai": "พนักงานทุกคนที่นี่ใจดี สุภาพ และยิ้มเสมอ",
          "english": "All the staff here are kind-hearted, polite, and always smiling",
          "german": "Alle Mitarbeiter hier sind freundlich, höflich und lächeln immer",
          "romanization": "phanakngan thukkn thini chaidi suphap lae yim semo"
        },
        {
          "thai": "ทุกครั้งที่ไปต่างจังหวัด ฉันมีของฝากเล็กๆ น้อยๆ มาให้พวกเขา",
          "english": "Every time I go to another province, I bring small souvenirs for them",
          "german": "Jedes Mal wenn ich in eine andere Provinz fahre, bringe ich kleine Mitbringsel für sie",
          "romanization": "thukkrangthi pai tangchangwat chan mi khongfak lek noi ma hai phuakkhao"
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
              "german": "Sie lösen Probleme mit vollem Einsatz",
              "romanization": "phuakkhao chuai kaepanha temthi"
            }
          ],
          "pattern_romanization": "Subject + verb + temthi"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "คุณเอ็มมาและคุณคริสคิดว่าคอนโดฯ ที่เขาอยู่ดีอย่างไร",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "อาชีพยาม มีหน้าที่อะไร",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "อาชีพแม่บ้าน มีหน้าที่อะไร",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "อาชีพเจ้าหน้าที่ นิติฯ มีหน้าที่อะไร",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "อาชีพช่าง มีหน้าที่อะไร",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "คุณเอ็มมาและคุณคริสคิดอย่างไรกับพนักงานที่คอนโดฯ",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "คุณเอ็มมาและคุณคริสรู้สึกอย่างไรกับการอยู่ที่คอนโดฯ",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "ทุกครั้งที่ไปต่างจังหวัด คุณเอ็มมาจะเอาอะไรมาให้พนักงาน",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "ทุกๆ ปีใหม่ คุณเอ็มมาจะเอาอะไรมาให้พนักงาน",
            "romanization": "",
            "german": "",
            "english": ""
          },
          {
            "thai": "ทำไมคุณเอ็มมาเอาของให้พนักงานที่คอนโดฯ",
            "romanization": "",
            "german": "",
            "english": ""
          }
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
          "type": "mc",
          "question_de": "คอนโดฯ ที่คุณเอ็มมาอยู่มีลักษณะอย่างไร",
          "question_en": "คอนโดฯ ที่คุณเอ็มมาอยู่มีลักษณะอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เงียบสงบและมีการดูแลที่ดี",
              "text_en": "เงียบสงบและมีการดูแลที่ดี",
              "correct": true
            },
            {
              "text_de": "สิ่งอำนวยความสะดวกน้อย",
              "text_en": "สิ่งอำนวยความสะดวกน้อย",
              "correct": false
            },
            {
              "text_de": "ไม่มีความปลอดภัย",
              "text_en": "ไม่มีความปลอดภัย",
              "correct": false
            },
            {
              "text_de": "ราคาแพงมาก",
              "text_en": "ราคาแพงมาก",
              "correct": false
            }
          ],
          "explanation_de": "ตามข้อความ คอนโดฯ เงียบสงบและมีการดูแลที่ดี",
          "explanation_en": "ตามข้อความ คอนโดฯ เงียบสงบและมีการดูแลที่ดี"
        },
        {
          "type": "mc",
          "question_de": "ยามของคอนโดฯ ดูแลเรื่องอะไรมากที่สุด",
          "question_en": "ยามของคอนโดฯ ดูแลเรื่องอะไรมากที่สุด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ความสะอาด",
              "text_en": "ความสะอาด",
              "correct": false
            },
            {
              "text_de": "ความปลอดภัย",
              "text_en": "ความปลอดภัย",
              "correct": true
            },
            {
              "text_de": "การซ่อมแซม",
              "text_en": "การซ่อมแซม",
              "correct": false
            },
            {
              "text_de": "การจดหมาย",
              "text_en": "การจดหมาย",
              "correct": false
            }
          ],
          "explanation_de": "ยามดูแลเกี่ยวกับความปลอดภัยของคอนโดฯ",
          "explanation_en": "ยามดูแลเกี่ยวกับความปลอดภัยของคอนโดฯ"
        },
        {
          "type": "mc",
          "question_de": "พนักงานของคอนโดฯ มีลักษณะเป็นอย่างไร",
          "question_en": "พนักงานของคอนโดฯ มีลักษณะเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ใจแคบและสูง",
              "text_en": "ใจแคบและสูง",
              "correct": false
            },
            {
              "text_de": "ใจดี สุภาพ และยิ้มเสมอ",
              "text_en": "ใจดี สุภาพ และยิ้มเสมอ",
              "correct": true
            },
            {
              "text_de": "ขึ้นซ่าและเกียจคร่อ",
              "text_en": "ขึ้นซ่าและเกียจคร่อ",
              "correct": false
            },
            {
              "text_de": "ใจเย็นและเงียบ",
              "text_en": "ใจเย็นและเงียบ",
              "correct": false
            }
          ],
          "explanation_de": "พนักงานทุกคนที่นี่ใจดี สุภาพ และยิ้มเสมอ",
          "explanation_en": "พนักงานทุกคนที่นี่ใจดี สุภาพ และยิ้มเสมอ"
        },
        {
          "type": "mc",
          "question_de": "ช่างของคอนโดฯ ดูแลเรื่องอะไรบ้าง",
          "question_en": "ช่างของคอนโดฯ ดูแลเรื่องอะไรบ้าง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะน้ำประปา",
              "text_en": "เฉพาะน้ำประปา",
              "correct": false
            },
            {
              "text_de": "เฉพาะไฟฟ้า",
              "text_en": "เฉพาะไฟฟ้า",
              "correct": false
            },
            {
              "text_de": "น้ำประปา ไฟฟ้า แอร์ และอื่นๆ",
              "text_en": "น้ำประปา ไฟฟ้า แอร์ และอื่นๆ",
              "correct": true
            },
            {
              "text_de": "เฉพาะแอร์",
              "text_en": "เฉพาะแอร์",
              "correct": false
            }
          ],
          "explanation_de": "ช่างดูแลเกี่ยวกับน้ำประปา ไฟฟ้า แอร์ และอื่นๆ",
          "explanation_en": "ช่างดูแลเกี่ยวกับน้ำประปา ไฟฟ้า แอร์ และอื่นๆ"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาเอาของฝากให้พนักงานเพื่ออะไร",
          "question_en": "คุณเอ็มมาเอาของฝากให้พนักงานเพื่ออะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะเขาเบื่อ",
              "text_en": "เพราะเขาเบื่อ",
              "correct": false
            },
            {
              "text_de": "เพราะเขาอยากได้",
              "text_en": "เพราะเขาอยากได้",
              "correct": false
            },
            {
              "text_de": "เพื่อขอบคุณที่พวกเขาทำงานหนัก",
              "text_en": "เพื่อขอบคุณที่พวกเขาทำงานหนัก",
              "correct": true
            },
            {
              "text_de": "เพราะเขาข่มขู่",
              "text_en": "เพราะเขาข่มขู่",
              "correct": false
            }
          ],
          "explanation_de": "ฉันเอาของให้พวกเขาเพื่อขอบคุณที่พวกเขาทำงานหนัก",
          "explanation_en": "ฉันเอาของให้พวกเขาเพื่อขอบคุณที่พวกเขาทำงานหนัก"
        },
        {
          "type": "mc",
          "question_de": "ตอนปีใหม่ คุณเอ็มมาทำอะไรให้พนักงาน",
          "question_en": "ตอนปีใหม่ คุณเอ็มมาทำอะไรให้พนักงาน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ซื้อของขวัญแพง",
              "text_en": "ซื้อของขวัญแพง",
              "correct": false
            },
            {
              "text_de": "ทำคุกกี้",
              "text_en": "ทำคุกกี้",
              "correct": true
            },
            {
              "text_de": "แจกเงิน",
              "text_en": "แจกเงิน",
              "correct": false
            },
            {
              "text_de": "ไม่ได้ทำอะไร",
              "text_en": "ไม่ได้ทำอะไร",
              "correct": false
            }
          ],
          "explanation_de": "ตอนปีใหม่คุณเอ็มมาทำคุกกี้ให้ทุกคน",
          "explanation_en": "ตอนปีใหม่คุณเอ็มมาทำคุกกี้ให้ทุกคน"
        },
        {
          "type": "mc",
          "question_de": "พื้นที่ส่วนกลางของคอนโดฯ เป็นอย่างไร",
          "question_en": "พื้นที่ส่วนกลางของคอนโดฯ เป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สกปรก",
              "text_en": "สกปรก",
              "correct": false
            },
            {
              "text_de": "สะอาดเสมอ",
              "text_en": "สะอาดเสมอ",
              "correct": true
            },
            {
              "text_de": "ไม่มีแม่บ้าน",
              "text_en": "ไม่มีแม่บ้าน",
              "correct": false
            },
            {
              "text_de": "ไม่มีใครใช้",
              "text_en": "ไม่มีใครใช้",
              "correct": false
            }
          ],
          "explanation_de": "พื้นที่ส่วนกลางสะอาดเสมอ",
          "explanation_en": "พื้นที่ส่วนกลางสะอาดเสมอ"
        },
        {
          "type": "mc",
          "question_de": "เมื่อมีปัญหา เจ้าหน้าที่นิติฯ จะทำอย่างไร",
          "question_en": "เมื่อมีปัญหา เจ้าหน้าที่นิติฯ จะทำอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ปล่อยปละเลย",
              "text_en": "ปล่อยปละเลย",
              "correct": false
            },
            {
              "text_de": "ช่วยแก้ปัญหาเต็มที่",
              "text_en": "ช่วยแก้ปัญหาเต็มที่",
              "correct": true
            },
            {
              "text_de": "บอกให้ไปที่โรงแรม",
              "text_en": "บอกให้ไปที่โรงแรม",
              "correct": false
            },
            {
              "text_de": "เพิกเฉยต่อปัญหา",
              "text_en": "เพิกเฉยต่อปัญหา",
              "correct": false
            }
          ],
          "explanation_de": "พวกเขาช่วยแก้ปัญหาเต็มที่",
          "explanation_en": "พวกเขาช่วยแก้ปัญหาเต็มที่"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาอยู่ที่คอนโดฯ แล้วรู้สึกอย่างไร",
          "question_en": "คุณเอ็มมาอยู่ที่คอนโดฯ แล้วรู้สึกอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หวาดกลัว",
              "text_en": "หวาดกลัว",
              "correct": false
            },
            {
              "text_de": "ปลอดภัย สบายใจ และได้รับความสะดวก",
              "text_en": "ปลอดภัย สบายใจ และได้รับความสะดวก",
              "correct": true
            },
            {
              "text_de": "เบื่อหน่าย",
              "text_en": "เบื่อหน่าย",
              "correct": false
            },
            {
              "text_de": "โดดเดี่ยว",
              "text_en": "โดดเดี่ยว",
              "correct": false
            }
          ],
          "explanation_de": "อยู่ที่นี่ทำให้รู้สึกปลอดภัย สบายใจ และได้รับความสะดวกทุกอย่าง",
          "explanation_en": "อยู่ที่นี่ทำให้รู้สึกปลอดภัย สบายใจ และได้รับความสะดวกทุกอย่าง"
        },
        {
          "type": "mc",
          "question_de": "ห้องสมุด สระว่ายน้ำ และสนามเทนนิส เป็นสิ่งอะไรของคอนโดฯ",
          "question_en": "ห้องสมุด สระว่ายน้ำ และสนามเทนนิส เป็นสิ่งอะไรของคอนโดฯ",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สิ่งสำหรับส่วนตัว",
              "text_en": "สิ่งสำหรับส่วนตัว",
              "correct": false
            },
            {
              "text_de": "พื้นที่ส่วนกลาง",
              "text_en": "พื้นที่ส่วนกลาง",
              "correct": true
            },
            {
              "text_de": "สิ่งของที่เสีย",
              "text_en": "สิ่งของที่เสีย",
              "correct": false
            },
            {
              "text_de": "สิ่งของที่ห้าม",
              "text_en": "สิ่งของที่ห้าม",
              "correct": false
            }
          ],
          "explanation_de": "พื้นที่ส่วนกลางและพื้นที่อื่นๆ เช่น ห้องสมุด สระว่ายน้ำ สนามเทนนิส",
          "explanation_en": "พื้นที่ส่วนกลางและพื้นที่อื่นๆ เช่น ห้องสมุด สระว่ายน้ำ สนามเทนนิส"
        }
      ],
      "id": 11,
      "thai_title": "อยู่คอนโดฯ",
      "english_title": "Living in a Condo",
      "german_title": "Im Condo",
      "emoji": "🏢",
      "thai_title_romanization": "yu khon-do"
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
          "example_german": "Das erste Jahr in Bangkok",
          "example_romanization": "pi raek thima yu krungthep"
        },
        {
          "thai": "อธิบาย",
          "romanization": "thibai",
          "english": "to explain",
          "german": "erklären",
          "example_thai": "เพื่อนบ้านอธิบายให้ฉันเข้าใจ",
          "example_english": "The neighbor explained so I would understand",
          "example_german": "Der Nachbar erklärte, damit ich verstehe",
          "example_romanization": "phueanban thibai hai chan khaochai"
        },
        {
          "thai": "สถานที่",
          "romanization": "sathanthi",
          "english": "a place",
          "german": "Ort",
          "example_thai": "บ้านเป็นสถานที่สำคัญของชีวิต",
          "example_english": "Home is an important place in life",
          "example_german": "Das Zuhause ist ein wichtiger Ort im Leben",
          "example_romanization": "ban pen sathanthisamkhan khong chiwit"
        },
        {
          "thai": "อวยพร",
          "romanization": "uaipn",
          "english": "to bless",
          "german": "segnen",
          "example_thai": "บ้านต้องได้รับการอวยพร",
          "example_english": "The house must receive a blessing",
          "example_german": "Das Haus muss gesegnet werden",
          "example_romanization": "ban tong draip kan uaipn"
        },
        {
          "thai": "นิมนต์",
          "romanization": "nimn",
          "english": "to invite a Buddhist monk",
          "german": "Mönch einladen",
          "example_thai": "การทำบุญบ้านคือการนิมนต์พระ",
          "example_english": "Making merit for the house means inviting monks",
          "example_german": "Verdienste für das Haus zu generieren bedeutet, einen Mönch einzuladen",
          "example_romanization": "kan thambun ban khue kan nimn phra"
        },
        {
          "thai": "ของที่จำเป็น",
          "romanization": "khong thi champen",
          "english": "essential stuff",
          "german": "notwendige Dinge",
          "example_thai": "นำของที่จำเป็นมาให้พระ",
          "example_english": "Bring essential items for the monks",
          "example_german": "Notwendige Dinge zu den Mönchen bringen",
          "example_romanization": "nam khong thi cham penma hai phra"
        },
        {
          "thai": "สวดมนต์",
          "romanization": "suatmn",
          "english": "to pray",
          "german": "beten",
          "example_thai": "พระสวดมนต์ให้ความเป็นสิริมงคล",
          "example_english": "The monks pray for blessings",
          "example_german": "Die Mönche beten für Segnungen",
          "example_romanization": "phra suatmn hai khwam pen sirimngkn"
        },
        {
          "thai": "ให้พร",
          "romanization": "aipn",
          "english": "to bless",
          "german": "Segen geben",
          "example_thai": "พระให้พรลูกบ้าน",
          "example_english": "The monk gives blessings to the residents",
          "example_german": "Der Mönch gibt Segnungen an die Bewohner",
          "example_romanization": "phra aipn lukban"
        },
        {
          "thai": "ธรรมะ",
          "romanization": "thamma",
          "english": "dharma",
          "german": "Dharma",
          "example_thai": "พระสอนธรรมะ",
          "example_english": "The monks teach dharma",
          "example_german": "Die Mönche unterrichten Dharma",
          "example_romanization": "phra son thamma"
        },
        {
          "thai": "ความคิด",
          "romanization": "khwamkhit",
          "english": "thought",
          "german": "Gedanke",
          "example_thai": "ความคิดแบบนี้น่าสนใจมาก",
          "example_english": "This kind of thought is very interesting",
          "example_german": "Diese Art von Gedanke ist sehr interessant",
          "example_romanization": "khwamkhit baepni natnchai mak"
        },
        {
          "thai": "เตรียม",
          "romanization": "terim",
          "english": "to prepare",
          "german": "vorbereiten",
          "example_thai": "ฉันเตรียมผลไม้ให้พระ",
          "example_english": "I prepare fruit for the monks",
          "example_german": "Ich bereite Obst für die Mönche vor",
          "example_romanization": "chan terim phlamai hai phra"
        },
        {
          "thai": "ถวาย",
          "romanization": "thwai",
          "english": "to offer something to a Buddhist monk",
          "german": "darbringen",
          "example_thai": "ถวายผลไม้ให้พระ",
          "example_english": "Offer fruit to the monks",
          "example_german": "Obst zu den Mönchen darbringen",
          "example_romanization": "thwai phlamai hai phra"
        },
        {
          "thai": "ศาลพระภูมิ",
          "romanization": "sanpraphumi",
          "english": "a spirit house",
          "german": "Geisterhaus",
          "example_thai": "ที่หน้าคอนโดฯ มีศาลพระภูมิ",
          "example_english": "In front of the condo there is a spirit house",
          "example_german": "Vor der Eigentumswohnung gibt es ein Geisterhaus",
          "example_romanization": "thi na khondo mi sanpraphumi"
        },
        {
          "thai": "เทวดา",
          "romanization": "theoda",
          "english": "god, angel",
          "german": "Gottheit/Engel",
          "example_thai": "เทวดาจะดูแลบ้าน",
          "example_english": "The angel will take care of the house",
          "example_german": "Die Gottheit wird sich um das Haus kümmern",
          "example_romanization": "theoda cha dulae ban"
        },
        {
          "thai": "เจ้าที่",
          "romanization": "chaothi",
          "english": "a spirit protecting a premise",
          "german": "Schutzgeist",
          "example_thai": "ศาลพระภูมิเป็นบ้านของเจ้าที่",
          "example_english": "The spirit house is the home of the protective spirit",
          "example_german": "Das Geisterhaus ist das Zuhause des Schutzgeistes",
          "example_romanization": "sanpraphumi pen ban khong chaothi"
        },
        {
          "thai": "งงไปหมดแล้ว",
          "romanization": "ngong pai mot laeo",
          "english": "to be overwhelmed by confusion",
          "german": "völlig verwirrt",
          "example_thai": "ฉันงงไปหมดแล้ว",
          "example_english": "I am overwhelmed by confusion",
          "example_german": "Ich bin völlig verwirrt",
          "example_romanization": "chan ngong pai mot laeo"
        }
      ],
      "reading": [
        {
          "thai": "ปีแรกที่มาอยู่ที่กรุงเทพฯ นิติฯ บอกฉันว่าจะมีการทำบุญคอนโดฯ",
          "english": "The first year living in Bangkok, the administrator told me there would be a merit-making ceremony for the condo",
          "german": "Das erste Jahr in Bangkok sagte mir der Administrator, dass es eine Verdienst-Zeremonie für die Eigentumswohnung geben würde",
          "romanization": "pi raek thima yu thi krungthep niti bok chan wa cha mi kan thambun khondo"
        },
        {
          "thai": "ฉันกับคุณคริสไม่เข้าใจว่าคืออะไรและพวกเราต้องทำอะไร",
          "english": "Chris and I did not understand what it was and what we had to do",
          "german": "Chris und ich verstanden nicht, was es war und was wir tun mussten",
          "romanization": "chan kap khun kh ri s mai khaochai wa khue arai lae phuakrao tong tham arai"
        },
        {
          "thai": "เพื่อนบ้านอธิบายว่าคนไทยคิดว่าบ้านเป็นสถานที่สำคัญของชีวิต",
          "english": "The neighbor explained that Thai people think home is an important place in life",
          "german": "Der Nachbar erklärte, dass Thais denken, dass das Zuhause ein wichtiger Ort im Leben ist",
          "romanization": "phueanban thibai wa khanathai khit wa ban pen sathanthisamkhan khong chiwit"
        },
        {
          "thai": "บ้านต้องได้รับการอวยพรเหมือนกันกับคนเพื่อให้บ้านปลอดภัย",
          "english": "The house must receive a blessing like people do so the house is safe",
          "german": "Das Haus muss wie Menschen gesegnet werden, um es sicher zu machen",
          "romanization": "ban tong draip kan uaipn emuenkan kap khon phueahai ban plotphai"
        },
        {
          "thai": "การทำบุญบ้านคือการนิมนต์พระมารับอาหารหรือของที่จำเป็นสำหรับพระ",
          "english": "Making merit for the house is inviting monks to receive food or essential items",
          "german": "Verdienste für das Haus ist, die Mönche einzuladen, Nahrung oder notwendige Dinge zu erhalten",
          "romanization": "kan thambun ban khue kan nimn phra ma rap ahan rue khong thi champen samrap phra"
        },
        {
          "thai": "พระจะสวดมนต์ ให้พรลูกบ้านและคอนโดฯ แล้วก็สอนธรรมะด้วย",
          "english": "The monks will pray, give blessings to residents and the condo, and also teach dharma",
          "german": "Die Mönche werden beten, Segnungen an Bewohner und die Eigentumswohnung geben und auch Dharma unterrichten",
          "romanization": "phra cha suatmn aipn lukban lae khondo laeok son thamma duai"
        },
        {
          "thai": "ที่หน้าคอนโดฯ มีศาลพระภูมิด้วย",
          "english": "In front of the condo there is also a spirit house",
          "german": "Vor der Eigentumswohnung gibt es auch ein Geisterhaus",
          "romanization": "thi na khondo mi sanpraphumi duai"
        },
        {
          "thai": "เจ้าหน้าที่นิติฯ บอกฉันว่าศาลพระภูมิไม่ใช่เทวดาแต่เป็นเจ้าที่",
          "english": "The administrator told me the spirit house is not a deity but a protective spirit",
          "german": "Der Administrator sagte mir, dass das Geisterhaus nicht eine Gottheit ist, sondern ein Schutzgeist",
          "romanization": "chaonathi niti bok chan wa sanpraphumi mai chai theoda tae pen chaothi"
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
              "german": "Das erste Jahr in Bangkok",
              "romanization": "pi raek thima yu krungthep"
            },
            {
              "thai": "ผู้หญิงคนแรก",
              "english": "The first woman",
              "german": "Die erste Frau",
              "romanization": "phuying khon raek"
            }
          ],
          "pattern_romanization": "noun + classifier + raek",
          "meaning_english": "The first [noun]",
          "meaning_german": "The first [noun]"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "ใครอธิบายเกี่ยวกับการทำบุญคอนโดฯ ให้คุณเอ็มมาเข้าใจ",
            "english": "Who explained to Emma about making merit at the condo",
            "german": "Wer erklärte Emma etwas über Verdiensterwerben in der Eigentumswohnung"
          },
          {
            "thai": "การทำบุญคอนโดฯ คืออะไร",
            "english": "What is making merit at the condo",
            "german": "Was ist Verdiensterwerben in der Eigentumswohnung"
          },
          {
            "thai": "เวลามีการทำบุญคอนโดฯ คนไทยถวายอะไรให้พระบ้าง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ทำไมต้องมีการทำบุญคอนโดฯ หรือทำบุญบ้าน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ศาลพระภูมิคืออะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คอนโดฯ ของคุณเอ็มมามีศาลพระภูมิอยู่ตรงไหน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "เทวดาในศาลพระภูมิมีหน้าที่อะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "เจ้าหน้าที่นิติฯ บอกคุณเอ็มมาว่าศาลพระภูมิเป็นบ้านของใคร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณเอ็มมาเข้าใจคำว่าเจ้าที่ไหม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณเอ็มมาไม่เข้าใจเกี่ยวกับเทวดาและเจ้าที่ก็เลยพูดกับเจ้าหน้าที่นิติฯ ว่าอะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
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
          "type": "mc",
          "question_de": "ปีแรกที่มาอยู่กรุงเทพฯ นิติฯ บอกคุณเอ็มมาเกี่ยวกับเรื่องอะไร",
          "question_en": "ปีแรกที่มาอยู่กรุงเทพฯ นิติฯ บอกคุณเอ็มมาเกี่ยวกับเรื่องอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "การซ่อมแซมห้อง",
              "text_en": "การซ่อมแซมห้อง",
              "correct": false
            },
            {
              "text_de": "การทำบุญคอนโดฯ",
              "text_en": "การทำบุญคอนโดฯ",
              "correct": true
            },
            {
              "text_de": "การเก็บเงินค่าเช่า",
              "text_en": "การเก็บเงินค่าเช่า",
              "correct": false
            },
            {
              "text_de": "กฎระเบียบของคอนโดฯ",
              "text_en": "กฎระเบียบของคอนโดฯ",
              "correct": false
            }
          ],
          "explanation_de": "นิติฯ บอกว่าจะมีการทำบุญคอนโดฯ",
          "explanation_en": "นิติฯ บอกว่าจะมีการทำบุญคอนโดฯ"
        },
        {
          "type": "mc",
          "question_de": "คนไทยคิดว่าบ้านมีความสำคัญเพียงใด",
          "question_en": "คนไทยคิดว่าบ้านมีความสำคัญเพียงใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่สำคัญเลย",
              "text_en": "ไม่สำคัญเลย",
              "correct": false
            },
            {
              "text_de": "สำคัญเล็กน้อย",
              "text_en": "สำคัญเล็กน้อย",
              "correct": false
            },
            {
              "text_de": "เป็นสถานที่สำคัญของชีวิต",
              "text_en": "เป็นสถานที่สำคัญของชีวิต",
              "correct": true
            },
            {
              "text_de": "สำคัญเฉพาะสำหรับเด็ก",
              "text_en": "สำคัญเฉพาะสำหรับเด็ก",
              "correct": false
            }
          ],
          "explanation_de": "คนไทยคิดว่าบ้านเป็นสถานที่สำคัญของชีวิต",
          "explanation_en": "คนไทยคิดว่าบ้านเป็นสถานที่สำคัญของชีวิต"
        },
        {
          "type": "mc",
          "question_de": "การทำบุญบ้านมีจุดประสงค์อะไร",
          "question_en": "การทำบุญบ้านมีจุดประสงค์อะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพื่อให้บ้านสะอาด",
              "text_en": "เพื่อให้บ้านสะอาด",
              "correct": false
            },
            {
              "text_de": "เพื่อให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข",
              "text_en": "เพื่อให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข",
              "correct": true
            },
            {
              "text_de": "เพื่อให้เพื่อนบ้านอิจฉา",
              "text_en": "เพื่อให้เพื่อนบ้านอิจฉา",
              "correct": false
            },
            {
              "text_de": "เพื่อให้พระมีทำไม",
              "text_en": "เพื่อให้พระมีทำไม",
              "correct": false
            }
          ],
          "explanation_de": "ทำให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข",
          "explanation_en": "ทำให้บ้านปลอดภัย อยู่สบาย คนในบ้านมีความสุข"
        },
        {
          "type": "mc",
          "question_de": "การทำบุญบ้านเกี่ยวข้องกับการนิมนต์พระเพื่อสิ่งใด",
          "question_en": "การทำบุญบ้านเกี่ยวข้องกับการนิมนต์พระเพื่อสิ่งใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพื่อให้พระอาหาร",
              "text_en": "เพื่อให้พระอาหาร",
              "correct": false
            },
            {
              "text_de": "เพื่อให้พระแต่งตัว",
              "text_en": "เพื่อให้พระแต่งตัว",
              "correct": false
            },
            {
              "text_de": "เพื่อให้พระรับอาหารหรือของที่จำเป็น",
              "text_en": "เพื่อให้พระรับอาหารหรือของที่จำเป็น",
              "correct": true
            },
            {
              "text_de": "เพื่อให้พระเดินทาง",
              "text_en": "เพื่อให้พระเดินทาง",
              "correct": false
            }
          ],
          "explanation_de": "การนิมนต์พระมารับอาหารหรือของที่จำเป็นสำหรับพระ",
          "explanation_en": "การนิมนต์พระมารับอาหารหรือของที่จำเป็นสำหรับพระ"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาเตรียมอะไรเพื่อถวายพระตอนทำบุญคอนโดฯ",
          "question_en": "คุณเอ็มมาเตรียมอะไรเพื่อถวายพระตอนทำบุญคอนโดฯ",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เงิน",
              "text_en": "เงิน",
              "correct": false
            },
            {
              "text_de": "ดอกไม้",
              "text_en": "ดอกไม้",
              "correct": false
            },
            {
              "text_de": "อาหาร",
              "text_en": "อาหาร",
              "correct": false
            },
            {
              "text_de": "ผลไม้เล็กๆ น้อยๆ",
              "text_en": "ผลไม้เล็กๆ น้อยๆ",
              "correct": true
            }
          ],
          "explanation_de": "ฉันเตรียมผลไม้เล็กๆ น้อยๆ ไปถวายพระ",
          "explanation_en": "ฉันเตรียมผลไม้เล็กๆ น้อยๆ ไปถวายพระ"
        },
        {
          "type": "mc",
          "question_de": "ศาลพระภูมิตั้งอยู่ที่ไหน",
          "question_en": "ศาลพระภูมิตั้งอยู่ที่ไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หน้าคอนโดฯ",
              "text_en": "หน้าคอนโดฯ",
              "correct": true
            },
            {
              "text_de": "ข้างคอนโดฯ",
              "text_en": "ข้างคอนโดฯ",
              "correct": false
            },
            {
              "text_de": "ด้านหลังคอนโดฯ",
              "text_en": "ด้านหลังคอนโดฯ",
              "correct": false
            },
            {
              "text_de": "บนหลังคาคอนโดฯ",
              "text_en": "บนหลังคาคอนโดฯ",
              "correct": false
            }
          ],
          "explanation_de": "ที่หน้าคอนโดฯ มีศาลพระภูมิ",
          "explanation_en": "ที่หน้าคอนโดฯ มีศาลพระภูมิ"
        },
        {
          "type": "mc",
          "question_de": "เพื่อนบ้านบอกว่าศาลพระภูมิเป็นบ้านของใคร",
          "question_en": "เพื่อนบ้านบอกว่าศาลพระภูมิเป็นบ้านของใคร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "บ้านของเจ้าที่",
              "text_en": "บ้านของเจ้าที่",
              "correct": false
            },
            {
              "text_de": "บ้านของเทวดา",
              "text_en": "บ้านของเทวดา",
              "correct": true
            },
            {
              "text_de": "บ้านของพระ",
              "text_en": "บ้านของพระ",
              "correct": false
            },
            {
              "text_de": "บ้านของคนจน",
              "text_en": "บ้านของคนจน",
              "correct": false
            }
          ],
          "explanation_de": "เพื่อนบ้านบอกว่าเป็นบ้านของเทวดา",
          "explanation_en": "เพื่อนบ้านบอกว่าเป็นบ้านของเทวดา"
        },
        {
          "type": "mc",
          "question_de": "เจ้าหน้าที่นิติฯ บอกว่าศาลพระภูมิที่คอนโดฯ เป็นบ้านของใคร",
          "question_en": "เจ้าหน้าที่นิติฯ บอกว่าศาลพระภูมิที่คอนโดฯ เป็นบ้านของใคร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เทวดา",
              "text_en": "เทวดา",
              "correct": false
            },
            {
              "text_de": "เจ้าที่",
              "text_en": "เจ้าที่",
              "correct": true
            },
            {
              "text_de": "เจ้าแม่",
              "text_en": "เจ้าแม่",
              "correct": false
            },
            {
              "text_de": "หลวงพ่อ",
              "text_en": "หลวงพ่อ",
              "correct": false
            }
          ],
          "explanation_de": "เจ้าหน้าที่นิติฯ บอกว่าเป็นเจ้าที่ไม่ใช่เทวดา",
          "explanation_en": "เจ้าหน้าที่นิติฯ บอกว่าเป็นเจ้าที่ไม่ใช่เทวดา"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาเข้าใจความแตกต่างระหว่างเทวดาและเจ้าที่หรือไม่",
          "question_en": "คุณเอ็มมาเข้าใจความแตกต่างระหว่างเทวดาและเจ้าที่หรือไม่",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เข้าใจ",
              "text_en": "เข้าใจ",
              "correct": false
            },
            {
              "text_de": "ไม่เข้าใจ",
              "text_en": "ไม่เข้าใจ",
              "correct": true
            },
            {
              "text_de": "เข้าใจได้บ้าง",
              "text_en": "เข้าใจได้บ้าง",
              "correct": false
            },
            {
              "text_de": "ไม่สนใจ",
              "text_en": "ไม่สนใจ",
              "correct": false
            }
          ],
          "explanation_de": "ฉันฟังแล้วไม่เข้าใจ",
          "explanation_en": "ฉันฟังแล้วไม่เข้าใจ"
        },
        {
          "type": "mc",
          "question_de": "เมื่อคุณเอ็มมาไม่เข้าใจเขาก็พูดกับเจ้าหน้าที่นิติฯ ว่าอะไร",
          "question_en": "เมื่อคุณเอ็มมาไม่เข้าใจเขาก็พูดกับเจ้าหน้าที่นิติฯ ว่าอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ช่วยอธิบายให้ชัดเจนหน่อย",
              "text_en": "ช่วยอธิบายให้ชัดเจนหน่อย",
              "correct": false
            },
            {
              "text_de": "ฉันไม่เชื่อในศาสนา",
              "text_en": "ฉันไม่เชื่อในศาสนา",
              "correct": false
            },
            {
              "text_de": "ฉันงงไปหมดแล้ว",
              "text_en": "ฉันงงไปหมดแล้ว",
              "correct": true
            },
            {
              "text_de": "เรื่องนี้ไม่สำคัญ",
              "text_en": "เรื่องนี้ไม่สำคัญ",
              "correct": false
            }
          ],
          "explanation_de": "ฉันพูดว่า 'ฉันงงไปหมดแล้ว'",
          "explanation_en": "ฉันพูดว่า 'ฉันงงไปหมดแล้ว'"
        }
      ],
      "id": 12,
      "thai_title": "ทำบุญคอนโดฯ",
      "english_title": "Condo Merit Making",
      "german_title": "Verdienst-Zeremonie",
      "emoji": "🙏",
      "thai_title_romanization": "tham bun khon-do"
    },
    {
      "chapter": 13,
      "vocabulary": [
        {
          "thai": "เทศกาล",
          "romanization": "thetsakal",
          "english": "festival",
          "german": "Festival",
          "example_thai": "เทศกาลสำคัญของคนไทย",
          "example_english": "Important festivals of Thai people",
          "example_german": "Wichtige Feste der Thais",
          "example_romanization": "thetsakal samkhan khong khanathai"
        },
        {
          "thai": "ปีใหม่",
          "romanization": "pihaim",
          "english": "New Year",
          "german": "Neujahr",
          "example_thai": "เทศกาลปีใหม่เป็นเทศกาลสำคัญ",
          "example_english": "New Year festival is an important festival",
          "example_german": "Das Neujahr ist ein wichtiges Fest",
          "example_romanization": "thetsakal pihaim pen thetsakal samkhan"
        },
        {
          "thai": "สงกรานต์",
          "romanization": "songkran",
          "english": "Songkran festival",
          "german": "Songkran",
          "example_thai": "สงกรานต์เป็นเทศกาลน้ำของไทย",
          "example_english": "Songkran is Thailand's water festival",
          "example_german": "Songkran ist Thailands Wasserfest",
          "example_romanization": "songkran pen thetsakal nam khong thai"
        },
        {
          "thai": "ลอยกระทง",
          "romanization": "loikrathong",
          "english": "Loy Kratong festival",
          "german": "Loy Krathong",
          "example_thai": "เทศกาลลอยกระทงมีความสวยงาม",
          "example_english": "Loy Kratong festival is beautiful",
          "example_german": "Das Loy Krathong-Fest ist wunderschön",
          "example_romanization": "thetsakal loikrathong mi khwamsuaingam"
        },
        {
          "thai": "ปกติ",
          "romanization": "pakati",
          "english": "normally, usually",
          "german": "normalerweise",
          "example_thai": "ปกติคนไทยฉลองปีใหม่ตอนกลางคืน",
          "example_english": "Normally Thai people celebrate New Year at night",
          "example_german": "Normalerweise feiern Thais Neujahr nachts",
          "example_romanization": "pakati khanathai chlong pihaim tonklangkhuen"
        },
        {
          "thai": "ฉลอง",
          "romanization": "chlong",
          "english": "to celebrate",
          "german": "feiern",
          "example_thai": "ฉลองเทศกาลสงกรานต์",
          "example_english": "Celebrate Songkran festival",
          "example_german": "Songkran feiern",
          "example_romanization": "chlong thetsakal songkran"
        },
        {
          "thai": "กลางคืน",
          "romanization": "klangkhuen",
          "english": "night time",
          "german": "Nacht",
          "example_thai": "ฉลองตอนกลางคืน",
          "example_english": "Celebrate at night",
          "example_german": "Nachts feiern",
          "example_romanization": "chlong tonklangkhuen"
        },
        {
          "thai": "กลางวัน",
          "romanization": "klangwan",
          "english": "day time",
          "german": "Tag",
          "example_thai": "ฉลองตอนกลางวัน",
          "example_english": "Celebrate during the day",
          "example_german": "Tagsüber feiern",
          "example_romanization": "chlong tonklangwan"
        },
        {
          "thai": "เล่นสาดน้ำ",
          "romanization": "len sat nam",
          "english": "playing splashing water",
          "german": "Wasser spritzen",
          "example_thai": "สงกรานต์มีการเล่นสาดน้ำ",
          "example_english": "Songkran involves splashing water",
          "example_german": "Songkran beinhaltet Wasser spritzen",
          "example_romanization": "songkran mi kan len sat nam"
        },
        {
          "thai": "วันหยุดยาว",
          "romanization": "wanyut yao",
          "english": "long weekend",
          "german": "langes Wochenende",
          "example_thai": "ช่วงเทศกาลที่มีวันหยุดยาว",
          "example_english": "Festival period with long weekend",
          "example_german": "Festivalzeitraum mit langem Wochenende",
          "example_romanization": "chuang thetsakal thi mi wanyut yao"
        },
        {
          "thai": "หรือไม่ก็",
          "romanization": "ruemai k",
          "english": "or else",
          "german": "oder sonst",
          "example_thai": "ไปเที่ยวหรือไม่ก็กลับบ้าน",
          "example_english": "Go out or else go home",
          "example_german": "Weggehen oder sonst nach Hause gehen",
          "example_romanization": "pathaiiao ruemai k klapban"
        },
        {
          "thai": "รู้สึก",
          "romanization": "rusuek",
          "english": "feel",
          "german": "fühlen",
          "example_thai": "รู้สึกสบายใจ",
          "example_english": "Feel comfortable",
          "example_german": "Sich wohl fühlen",
          "example_romanization": "rusuek sabaichai"
        },
        {
          "thai": "ฝึก",
          "romanization": "fuek",
          "english": "to practice",
          "german": "üben",
          "example_thai": "ฝึกขับรถในช่วงสงกรานต์",
          "example_english": "Practice driving during Songkran",
          "example_german": "Während Songkran Auto fahren üben",
          "example_romanization": "fuek khapnt nai chuang songkran"
        },
        {
          "thai": "ขับรถ",
          "romanization": "khapnt",
          "english": "to drive",
          "german": "Auto fahren",
          "example_thai": "ฉันชอบขับรถ",
          "example_english": "I like to drive",
          "example_german": "Ich mag Auto fahren",
          "example_romanization": "chan chop khapnt"
        },
        {
          "thai": "เมา",
          "romanization": "mao",
          "english": "drunk",
          "german": "betrunken",
          "example_thai": "คนที่กินเหล้าเมา",
          "example_english": "People who drink and get drunk",
          "example_german": "Menschen die trinken und betrunken werden",
          "example_romanization": "khon thi kin ela mao"
        },
        {
          "thai": "อุบัติเหตุ",
          "romanization": "ubatihetu",
          "english": "accident",
          "german": "Unfall",
          "example_thai": "มีอุบัติเหตุในช่วงสงกรานต์",
          "example_english": "There are accidents during Songkran",
          "example_german": "Es gibt Unfälle während Songkran",
          "example_romanization": "mi ubatihetu nai chuang songkran"
        },
        {
          "thai": "ที่สุด",
          "romanization": "thisut",
          "english": "the most",
          "german": "am meisten",
          "example_thai": "ชอบสงกรานต์มากที่สุด",
          "example_english": "Like Songkran the most",
          "example_german": "Songkran am meisten mögen",
          "example_romanization": "chop songkran mak thisut"
        },
        {
          "thai": "คิดถึง",
          "romanization": "khitthueng",
          "english": "to miss someone/something",
          "german": "vermissen",
          "example_thai": "คิดถึงบ้านและเพื่อนๆ",
          "example_english": "Miss home and friends",
          "example_german": "Zuhause und Freunde vermissen",
          "example_romanization": "khitthuengban lae phuean"
        }
      ],
      "reading": [
        {
          "thai": "เทศกาลสำคัญของคนไทยคือเทศกาลปีใหม่ สงกรานต์ และลอยกระทง",
          "english": "The important festivals of Thai people are New Year, Songkran, and Loy Kratong",
          "german": "Die wichtigen Feste der Thais sind Neujahr, Songkran und Loy Krathong",
          "romanization": "thetsakal samkhan khong khanathai khue thetsakal pihaim songkran lae loikrathong"
        },
        {
          "thai": "ปกติคนไทยฉลองเทศกาลปีใหม่ตอนกลางคืนเพราะอากาศเย็นสบาย",
          "english": "Usually Thai people celebrate New Year at night because the weather is cool and comfortable",
          "german": "Normalerweise feiern Thais Neujahr nachts, weil das Wetter kühl und angenehm ist",
          "romanization": "pakati khanathai chlong thetsakal pihaim tonklangkhuen phera akat yentbai"
        },
        {
          "thai": "ส่วนใหญ่ไปกินข้าวกินเหล้ากับเพื่อนที่ร้านอาหาร",
          "english": "Most go to eat and drink with friends at restaurants",
          "german": "Die meisten gehen mit Freunden in Restaurants essen und trinken",
          "romanization": "suanhain pai kinkhao kin ela kap phuean thi ranohan"
        },
        {
          "thai": "เทศกาลสงกรานต์จะฉลองกันตอนกลางวันเพราะมีการเล่นสาดน้ำ",
          "english": "Songkran festival is celebrated during the day because there is water splashing",
          "german": "Songkran wird tagsüber gefeiert, weil es Wasserspritzen gibt",
          "romanization": "thetsakal songkran cha chlong kan tonklangwan phera mi kan len sat nam"
        },
        {
          "thai": "ฉันสังเกตว่าช่วงเทศกาลที่มีวันหยุดยาวกรุงเทพฯ จะเงียบมากเพราะคนออกไปเที่ยว",
          "english": "I noticed that during festivals with long weekends Bangkok becomes very quiet because people go out",
          "german": "Ich bemerkte, dass Bangkok während Feste mit langen Wochenenden sehr ruhig wird, weil Menschen weggehen",
          "romanization": "chan sangketwa chuang thetsakal thi mi wanyut yao krungthep cha ngiap mak phera khon ok pathaiiao"
        },
        {
          "thai": "เพื่อนคนไทยเล่าว่าเขาฝึกขับรถในกรุงเทพฯ ในช่วงสงกรานต์เพราะมีรถน้อย",
          "english": "A Thai friend told me he practices driving in Bangkok during Songkran because there are fewer cars",
          "german": "Ein Thai-Freund erzählte mir, dass er während Songkran in Bangkok Auto fahren übt, weil es weniger Autos gibt",
          "romanization": "phuean khanathai lao wa khao fuek khapnt nai krungthep nai chuang songkran phera mi rot noi"
        },
        {
          "thai": "คนไทยหลายคนบอกว่าไม่ชอบเทศกาลสงกรานต์เพราะไม่ชอบเล่นน้ำ",
          "english": "Many Thai people say they don't like Songkran festival because they don't like playing water",
          "german": "Viele Thais sagen, dass sie Songkran nicht mögen, weil sie Wasserspritzen nicht mögen",
          "romanization": "khanathai lai khon bo kwa mai chop thetsakal songkran phera mai chop len nam"
        },
        {
          "thai": "สงกรานต์เป็นช่วงที่คนมักจะกินเหล้าเมาและมีอุบัติเหตุ",
          "english": "Songkran is a time when people often drink and get drunk and there are accidents",
          "german": "Songkran ist eine Zeit, in der Menschen oft trinken und betrunken werden und es Unfälle gibt",
          "romanization": "songkran penchuang thi khon makcha kin ela mao lae mi ubatihetu"
        },
        {
          "thai": "ฉันชอบเทศกาลสงกรานต์มากที่สุดเพราะสนุก",
          "english": "I like Songkran festival the most because it is fun",
          "german": "Ich mag Songkran am meisten, weil es Spaß macht",
          "romanization": "chan chop thetsakal songkran mak thisut phera sanuk"
        },
        {
          "thai": "เราสองคนไม่ชอบเทศกาลปีใหม่เพราะเราคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
          "english": "The two of us don't like New Year festival because we miss our home and friends in England",
          "german": "Wir beiden mögen Neujahr nicht, weil wir unser Zuhause und unsere Freunde in England vermissen",
          "romanization": "rao song khon mai chop thetsakal pihaim phera rao khitthuengban lae phuean thi angkrit"
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
              "german": "Normalerweise trinke ich keinen Alkohol",
              "romanization": "pakati phom / chan mai kin ela"
            }
          ],
          "pattern_romanization": "pakati + sentence",
          "meaning_english": "Normally/Usually [sentence]",
          "meaning_german": "Normally/Usually [sentence]"
        },
        {
          "pattern": "choice A หรือไม่ก็ choice B",
          "meaning": "Choice A or else choice B",
          "examples": [
            {
              "thai": "ไปเที่ยวหรือไม่ก็กลับบ้าน",
              "english": "Go out or else go home",
              "german": "Weggehen oder sonst nach Hause gehen",
              "romanization": "pathaiiao ruemai k klapban"
            }
          ],
          "pattern_romanization": "choice A ruemai k choice B",
          "meaning_english": "Choice A or else choice B",
          "meaning_german": "Choice A or else choice B"
        },
        {
          "pattern": "adjective/adverb + ที่สุด",
          "meaning": "the most + adjective/adverb",
          "examples": [
            {
              "thai": "สนุกที่สุด",
              "english": "the most fun",
              "german": "am meisten Spaß",
              "romanization": "sanuk thisut"
            }
          ],
          "pattern_romanization": "adjective /adverb + thisut",
          "meaning_english": "the most + adjective/adverb",
          "meaning_german": "the most + adjective/adverb"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "เทศกาลสำคัญของคนไทยคือเทศกาลอะไรบ้าง",
            "english": "What are the important festivals for Thai people",
            "german": "Was sind die wichtigen Feste der Thais"
          },
          {
            "thai": "มีเทศกาลอะไรบ้างที่คนไทยฉลองตอนกลางคืน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "เทศกาลอะไรที่ฉลองตอนกลางวัน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ทำไมกรุงเทพฯ จะเงียบในช่วงวันหยุดยาว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ทำไมบางคนฝึกขับรถในช่วงเทศกาลสงกรานต์",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คนกรุงเทพฯ ที่ไม่ไปเที่ยวในช่วงวันหยุดยาวจะมีกิจกรรมอะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ทำไมคนไทยบางคนไม่ชอบเทศกาลสงกรานต์",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณเอ็มมาชอบเทศกาลอะไรมากที่สุด ทำไม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณคริสชอบเทศกาลอะไรมากที่สุด ทำไม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ทั้งสองคนไม่ชอบเทศกาลอะไร ทำไม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
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
          "type": "mc",
          "question_de": "เทศกาลสำคัญของคนไทยมีกี่เทศกาล",
          "question_en": "เทศกาลสำคัญของคนไทยมีกี่เทศกาล",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สองเทศกาล",
              "text_en": "สองเทศกาล",
              "correct": false
            },
            {
              "text_de": "สามเทศกาล",
              "text_en": "สามเทศกาล",
              "correct": true
            },
            {
              "text_de": "สี่เทศกาล",
              "text_en": "สี่เทศกาล",
              "correct": false
            },
            {
              "text_de": "ห้าเทศกาล",
              "text_en": "ห้าเทศกาล",
              "correct": false
            }
          ],
          "explanation_de": "เทศกาลสำคัญมีสามเทศกาล คือปีใหม่ สงกรานต์ และลอยกระทง",
          "explanation_en": "เทศกาลสำคัญมีสามเทศกาล คือปีใหม่ สงกรานต์ และลอยกระทง"
        },
        {
          "type": "mc",
          "question_de": "เทศกาลปีใหม่ฉลองตอนไหน",
          "question_en": "เทศกาลปีใหม่ฉลองตอนไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ตอนเช้า",
              "text_en": "ตอนเช้า",
              "correct": false
            },
            {
              "text_de": "ตอนบ่าย",
              "text_en": "ตอนบ่าย",
              "correct": false
            },
            {
              "text_de": "ตอนกลางคืน",
              "text_en": "ตอนกลางคืน",
              "correct": true
            },
            {
              "text_de": "ตอนเวลาไหนก็ได้",
              "text_en": "ตอนเวลาไหนก็ได้",
              "correct": false
            }
          ],
          "explanation_de": "ปกติคนไทยฉลองตอนกลางคืนเพราะอากาศเย็นสบาย",
          "explanation_en": "ปกติคนไทยฉลองตอนกลางคืนเพราะอากาศเย็นสบาย"
        },
        {
          "type": "mc",
          "question_de": "เทศกาลสงกรานต์ฉลองตอนไหน",
          "question_en": "เทศกาลสงกรานต์ฉลองตอนไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ตอนกลางคืน",
              "text_en": "ตอนกลางคืน",
              "correct": false
            },
            {
              "text_de": "ตอนกลางวัน",
              "text_en": "ตอนกลางวัน",
              "correct": true
            },
            {
              "text_de": "ตอนเช้า",
              "text_en": "ตอนเช้า",
              "correct": false
            },
            {
              "text_de": "ตอนค่ำ",
              "text_en": "ตอนค่ำ",
              "correct": false
            }
          ],
          "explanation_de": "เทศกาลสงกรานต์ฉลองตอนกลางวันเพราะมีการเล่นสาดน้ำ",
          "explanation_en": "เทศกาลสงกรานต์ฉลองตอนกลางวันเพราะมีการเล่นสาดน้ำ"
        },
        {
          "type": "mc",
          "question_de": "ในช่วงวันหยุดยาว กรุงเทพฯ จะเป็นอย่างไร",
          "question_en": "ในช่วงวันหยุดยาว กรุงเทพฯ จะเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "แออัด",
              "text_en": "แออัด",
              "correct": false
            },
            {
              "text_de": "เงียบมาก",
              "text_en": "เงียบมาก",
              "correct": true
            },
            {
              "text_de": "หนาวมาก",
              "text_en": "หนาวมาก",
              "correct": false
            },
            {
              "text_de": "ร้อนมาก",
              "text_en": "ร้อนมาก",
              "correct": false
            }
          ],
          "explanation_de": "กรุงเทพฯ จะเงียบมากเพราะคนออกไปเที่ยวหรือกลับบ้าน",
          "explanation_en": "กรุงเทพฯ จะเงียบมากเพราะคนออกไปเที่ยวหรือกลับบ้าน"
        },
        {
          "type": "mc",
          "question_de": "ทำไมเพื่อนคนไทยฝึกขับรถในช่วงสงกรานต์",
          "question_en": "ทำไมเพื่อนคนไทยฝึกขับรถในช่วงสงกรานต์",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะรถเหมือนกัน",
              "text_en": "เพราะรถเหมือนกัน",
              "correct": false
            },
            {
              "text_de": "เพราะมีรถน้อย",
              "text_en": "เพราะมีรถน้อย",
              "correct": true
            },
            {
              "text_de": "เพราะเขาเกียจคร่อ",
              "text_en": "เพราะเขาเกียจคร่อ",
              "correct": false
            },
            {
              "text_de": "เพราะเขาหนาวใจ",
              "text_en": "เพราะเขาหนาวใจ",
              "correct": false
            }
          ],
          "explanation_de": "เขาฝึกขับรถในช่วงสงกรานต์เพราะมีรถน้อย",
          "explanation_en": "เขาฝึกขับรถในช่วงสงกรานต์เพราะมีรถน้อย"
        },
        {
          "type": "mc",
          "question_de": "ทำไมคนไทยบางคนไม่ชอบเทศกาลสงกรานต์",
          "question_en": "ทำไมคนไทยบางคนไม่ชอบเทศกาลสงกรานต์",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะเหนื่อย",
              "text_en": "เพราะเหนื่อย",
              "correct": false
            },
            {
              "text_de": "เพราะไม่มีเงิน",
              "text_en": "เพราะไม่มีเงิน",
              "correct": false
            },
            {
              "text_de": "เพราะไม่ชอบเล่นน้ำและกังวลเรื่องอุบัติเหตุ",
              "text_en": "เพราะไม่ชอบเล่นน้ำและกังวลเรื่องอุบัติเหตุ",
              "correct": true
            },
            {
              "text_de": "เพราะเด็ด",
              "text_en": "เพราะเด็ด",
              "correct": false
            }
          ],
          "explanation_de": "ไม่ชอบเพราะไม่ชอบเล่นน้ำและเกิดอุบัติเหตุ",
          "explanation_en": "ไม่ชอบเพราะไม่ชอบเล่นน้ำและเกิดอุบัติเหตุ"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาชอบเทศกาลอะไรมากที่สุด",
          "question_en": "คุณเอ็มมาชอบเทศกาลอะไรมากที่สุด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เทศกาลปีใหม่",
              "text_en": "เทศกาลปีใหม่",
              "correct": false
            },
            {
              "text_de": "เทศกาลสงกรานต์",
              "text_en": "เทศกาลสงกรานต์",
              "correct": true
            },
            {
              "text_de": "เทศกาลลอยกระทง",
              "text_en": "เทศกาลลอยกระทง",
              "correct": false
            },
            {
              "text_de": "ไม่มีเทศกาลไหนชอบ",
              "text_en": "ไม่มีเทศกาลไหนชอบ",
              "correct": false
            }
          ],
          "explanation_de": "ฉันชอบเทศกาลสงกรานต์มากที่สุดเพราะสนุก",
          "explanation_en": "ฉันชอบเทศกาลสงกรานต์มากที่สุดเพราะสนุก"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสชอบเทศกาลอะไรมากที่สุด",
          "question_en": "คุณคริสชอบเทศกาลอะไรมากที่สุด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เทศกาลปีใหม่",
              "text_en": "เทศกาลปีใหม่",
              "correct": false
            },
            {
              "text_de": "เทศกาลสงกรานต์",
              "text_en": "เทศกาลสงกรานต์",
              "correct": false
            },
            {
              "text_de": "เทศกาลลอยกระทง",
              "text_en": "เทศกาลลอยกระทง",
              "correct": true
            },
            {
              "text_de": "ไม่ชอบเทศกาลไหนเลย",
              "text_en": "ไม่ชอบเทศกาลไหนเลย",
              "correct": false
            }
          ],
          "explanation_de": "คุณคริสชอบเทศกาลลอยกระทง",
          "explanation_en": "คุณคริสชอบเทศกาลลอยกระทง"
        },
        {
          "type": "mc",
          "question_de": "ทั้งสองคนไม่ชอบเทศกาลปีใหม่ เพราะเหตุใด",
          "question_en": "ทั้งสองคนไม่ชอบเทศกาลปีใหม่ เพราะเหตุใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะแพง",
              "text_en": "เพราะแพง",
              "correct": false
            },
            {
              "text_de": "เพราะเบื่อ",
              "text_en": "เพราะเบื่อ",
              "correct": false
            },
            {
              "text_de": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
              "text_en": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
              "correct": true
            },
            {
              "text_de": "เพราะไม่มีเวลา",
              "text_en": "เพราะไม่มีเวลา",
              "correct": false
            }
          ],
          "explanation_de": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ",
          "explanation_en": "เพราะคิดถึงบ้านและเพื่อนๆ ที่อังกฤษ"
        },
        {
          "type": "mc",
          "question_de": "ช่วงเทศกาลที่มีวันหยุดยาว คนที่ไม่ไปเที่ยวจะไปทำอะไร",
          "question_en": "ช่วงเทศกาลที่มีวันหยุดยาว คนที่ไม่ไปเที่ยวจะไปทำอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไปทำงาน",
              "text_en": "ไปทำงาน",
              "correct": false
            },
            {
              "text_de": "ไปเจอเพื่อนหรือไปช็อปปิ้ง",
              "text_en": "ไปเจอเพื่อนหรือไปช็อปปิ้ง",
              "correct": true
            },
            {
              "text_de": "อยู่บ้านนอน",
              "text_en": "อยู่บ้านนอน",
              "correct": false
            },
            {
              "text_de": "ไปเรียนหนังสือ",
              "text_en": "ไปเรียนหนังสือ",
              "correct": false
            }
          ],
          "explanation_de": "ไปเจอกับเพื่อนๆ หรือไปช็อปปิ้ง",
          "explanation_en": "ไปเจอกับเพื่อนๆ หรือไปช็อปปิ้ง"
        }
      ],
      "id": 13,
      "thai_title": "เทศกาล",
      "english_title": "Festivals",
      "german_title": "Feste & Feiern",
      "emoji": "🎉",
      "thai_title_romanization": "thet-sa-kan"
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
          "example_german": "Sachen in einer Plastiktüte kaufen",
          "example_romanization": "sue khong sai thungplattik"
        },
        {
          "thai": "เยอะ",
          "romanization": "yoe",
          "english": "a lot",
          "german": "viel",
          "example_thai": "ใช้ถุงพลาสติกเยอะมาก",
          "example_english": "Use a lot of plastic bags",
          "example_german": "Viele Plastiktüten verwenden",
          "example_romanization": "chai thungplattik yoe mak"
        },
        {
          "thai": "ครั้งเดียว",
          "romanization": "khrang diao",
          "english": "one time",
          "german": "einmal",
          "example_thai": "ใช้ครั้งเดียวแล้วทิ้ง",
          "example_english": "Use once and throw away",
          "example_german": "Einmal verwenden und wegwerfen",
          "example_romanization": "chai khrang diao laeo thing"
        },
        {
          "thai": "ทิ้ง",
          "romanization": "thing",
          "english": "throw away",
          "german": "wegwerfen",
          "example_thai": "ทิ้งถุงพลาสติก",
          "example_english": "Throw away plastic bags",
          "example_german": "Plastiktüten wegwerfen",
          "example_romanization": "thing thungplattik"
        },
        {
          "thai": "ส่วนหนึ่ง",
          "romanization": "suannueng",
          "english": "a part of",
          "german": "ein Teil von",
          "example_thai": "ถุงพลาสติกเป็นส่วนหนึ่งของปัญหา",
          "example_english": "Plastic bags are part of the problem",
          "example_german": "Plastiktüten sind ein Teil des Problems",
          "example_romanization": "thungplattik pen suannueng khong panha"
        },
        {
          "thai": "น้ำท่วม",
          "romanization": "namthuam",
          "english": "flood",
          "german": "Überschwemmung",
          "example_thai": "ถุงพลาสติกทำให้น้ำท่วม",
          "example_english": "Plastic bags cause floods",
          "example_german": "Plastiktüten verursachen Überschwemmungen",
          "example_romanization": "thungplattik thamhai namthuam"
        },
        {
          "thai": "ลูกค้า",
          "romanization": "lukkha",
          "english": "a customer",
          "german": "Kunde",
          "example_thai": "ร้านให้ถุงพลาสติกกับลูกค้า",
          "example_english": "Stores give plastic bags to customers",
          "example_german": "Läden geben Plastiktüten an Kunden",
          "example_romanization": "ran hai thungplattik kap lukkha"
        },
        {
          "thai": "นโยบาย",
          "romanization": "nayobai",
          "english": "a policy",
          "german": "Politik/Richtlinie",
          "example_thai": "นโยบายไม่ให้ถุงพลาสติก",
          "example_english": "Policy of not giving plastic bags",
          "example_german": "Politik, keine Plastiktüten zu geben",
          "example_romanization": "nayobai mai hai thungplattik"
        },
        {
          "thai": "เวลา",
          "romanization": "wela",
          "english": "when",
          "german": "wenn/Zeit",
          "example_thai": "เวลาซื้อของไม่ได้ถุงพลาสติก",
          "example_english": "When buying things there are no plastic bags",
          "example_german": "Wenn man etwas kauft, gibt es keine Plastiktüten",
          "example_romanization": "wela sue khong mai dai thungplattik"
        },
        {
          "thai": "เริ่มตั้งแต่",
          "romanization": "roem tangtae",
          "english": "start from",
          "german": "anfangen seit",
          "example_thai": "เริ่มตั้งแต่วันที่ 1 มกราคม",
          "example_english": "Start from January 1st",
          "example_german": "Seit dem 1. Januar",
          "example_romanization": "roem tangtae wanthi 1 makrakm"
        },
        {
          "thai": "ขอความร่วมมือ",
          "romanization": "khokwamruammue",
          "english": "ask for cooperation",
          "german": "um Zusammenarbeit bitten",
          "example_thai": "ขอความร่วมมือจากประชาชน",
          "example_english": "Ask for cooperation from the public",
          "example_german": "Um Zusammenarbeit der Öffentlichkeit bitten",
          "example_romanization": "khokwamruammue chak prachatn"
        },
        {
          "thai": "กระทรวงทรัพยากรธรรมชาติและสิ่งแวดล้อม",
          "romanization": "kratruang thrapyakntamchati lae singwaetlom",
          "english": "Ministry of Natural Resources and Environment",
          "german": "Ministerium für natürliche Ressourcen und Umwelt",
          "example_thai": "กระทรวงทรัพยากรขอความร่วมมือ",
          "example_english": "The ministry asked for cooperation",
          "example_german": "Das Ministerium bat um Zusammenarbeit",
          "example_romanization": "kratruang thrapyakn khokwamruammue"
        },
        {
          "thai": "เดี๋ยวนี้",
          "romanization": "diaoni",
          "english": "now, nowadays",
          "german": "heutzutage",
          "example_thai": "เดี๋ยวนี้ไม่มีถุงพลาสติก",
          "example_english": "Nowadays there are no plastic bags",
          "example_german": "Heutzutage gibt es keine Plastiktüten",
          "example_romanization": "diaoni mai mi thungplattik"
        },
        {
          "thai": "กระเป๋าผ้า",
          "romanization": "krapao pha",
          "english": "cloth bag",
          "german": "Stofftasche",
          "example_thai": "ใช้กระเป๋าผ้าแทนถุงพลาสติก",
          "example_english": "Use cloth bags instead of plastic bags",
          "example_german": "Stofftaschen statt Plastiktüten verwenden",
          "example_romanization": "chai krapao pha thaen thungplattik"
        },
        {
          "thai": "กระเป๋าสะพาย",
          "romanization": "krapaosaphai",
          "english": "shoulder bag",
          "german": "Umhängetasche",
          "example_thai": "เอาของใส่ในกระเป๋าสะพาย",
          "example_english": "Put stuff in a shoulder bag",
          "example_german": "Sachen in eine Umhängetasche packen",
          "example_romanization": "ao khong sai nai krapaosaphai"
        },
        {
          "thai": "ได้ยิน",
          "romanization": "dain",
          "english": "hear",
          "german": "hören",
          "example_thai": "เคยได้ยินคนพูดไม่เอาถุง",
          "example_english": "Have heard people say no bag",
          "example_german": "Ich habe gehört, dass Menschen 'keine Tüte' sagen",
          "example_romanization": "khoei dain khanaphut mai ao thung"
        },
        {
          "thai": "ประทับใจ",
          "romanization": "prathapchai",
          "english": "to be impressed",
          "german": "beeindruckt sein",
          "example_thai": "ประทับใจมาก",
          "example_english": "Very impressed",
          "example_german": "Sehr beeindruckt",
          "example_romanization": "prathapchai mak"
        },
        {
          "thai": "ชิน",
          "romanization": "chin",
          "english": "get used to",
          "german": "sich gewöhnen",
          "example_thai": "ชินกับการไม่เอาถุง",
          "example_english": "Get used to not taking bags",
          "example_german": "Sich daran gewöhnen, keine Tüten zu nehmen",
          "example_romanization": "chin kap kan mai ao thung"
        }
      ],
      "reading": [
        {
          "thai": "ฉันเคยอ่านสารคดี เขาบอกว่าคนไทยใช้ถุงพลาสติกเยอะมาก",
          "english": "I once read a documentary that said Thai people use a lot of plastic bags",
          "german": "Ich habe einmal eine Dokumentation gelesen, die sagte, dass Thais viele Plastiktüten verwenden",
          "romanization": "chan khoei an sankdi khao bo kwa khanathai chai thungplattik yoe mak"
        },
        {
          "thai": "ใช้ใส่อาหาร ใส่ของ และส่วนใหญ่ใช้ครั้งเดียวแล้วก็ทิ้ง",
          "english": "Used for food, for things, and mostly used once then thrown away",
          "german": "Wird für Lebensmittel verwendet, für Dinge, und meistens einmal verwendet dann weggeworfen",
          "romanization": "chai sai ahan sai khong lae suanhain chai khrang diao laeok thing"
        },
        {
          "thai": "ที่กรุงเทพฯ ถุงพลาสติกเป็นส่วนหนึ่งที่ทำให้น้ำท่วม",
          "english": "In Bangkok plastic bags are part of what causes floods",
          "german": "In Bangkok sind Plastiktüten ein Teil dessen, was Überschwemmungen verursacht",
          "romanization": "thi krungthep thungplattik pen suannueng thi thamhai namthuam"
        },
        {
          "thai": "แต่ตอนนี้ซูเปอร์มาร์เก็ตที่ประเทศไทยไม่มีถุงพลาสติกให้ลูกค้าแล้ว",
          "english": "But now supermarkets in Thailand no longer give plastic bags to customers",
          "german": "Aber jetzt geben Supermärkte in Thailand keine Plastiktüten mehr an Kunden",
          "romanization": "tae tonni supoemakhet thi prathet thai mai mi thungplattik hai lukkha laeo"
        },
        {
          "thai": "ฉันชอบนโยบายนี้มาก",
          "english": "I like this policy very much",
          "german": "Ich mag diese Politik sehr gerne",
          "romanization": "chan chop nayobai ni mak"
        },
        {
          "thai": "ซูเปอร์มาร์เก็ตที่ประเทศไทยเริ่มตั้งแต่วันที่ 1 มกราคม 2563",
          "english": "Supermarkets in Thailand started from January 1, 2020",
          "german": "Supermärkte in Thailand begannen ab dem 1. Januar 2020",
          "romanization": "supoemakhet thi prathet thai roem tangtae wanthi 1 makrakm 2563"
        },
        {
          "thai": "เดี๋ยวนี้ฉันเห็นคนไทยมีกระเป๋าพลาสติกใบใหญ่ใส่ของที่ซื้อในซูเปอร์ฯ",
          "english": "Nowadays I see Thai people with large plastic bags for things bought at supermarkets",
          "german": "Heutzutage sehe ich Thais mit großen Plastiktüten für Dinge, die im Supermarkt gekauft wurden",
          "romanization": "diaoni chan en khanathai mi krapao phlattik bai ain sai khong thi sue nai supoe"
        },
        {
          "thai": "คนที่ซื้อของเล็กๆ น้อยๆ จากร้านสะดวกซื้อก็ใช้กระเป๋าผ้า",
          "english": "People who buy small things from convenience stores use cloth bags",
          "german": "Menschen, die kleine Dinge aus Convenience Stores kaufen, verwenden Stofftaschen",
          "romanization": "khon thi sue khong lek noi cha kran saduak sue k chai krapao pha"
        },
        {
          "thai": "บางคนก็เอาของใส่ในกระเป๋าสะพายของตัวเอง",
          "english": "Some people put things in their own shoulder bags",
          "german": "Einige Menschen packen Dinge in ihre eigenen Umhängetaschen",
          "romanization": "bangkn k ao khong sai nai krapaosaphai khong tuaeng"
        },
        {
          "thai": "ฉันเคยได้ยินคนไทยที่ซื้อเสื้อผ้าพูดกับคนขายว่า 'ไม่เอาถุงค่ะ'",
          "english": "I have heard Thai people buying clothes tell the seller 'No bag please'",
          "german": "Ich habe gehört, dass Thais, die Kleidung kaufen, dem Verkäufer 'Keine Tüte bitte' sagen",
          "romanization": "chan khoei dain khanathai thi sue sueapha phut kap khon khai wa ' mai ao thung kha '"
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
              "german": "Viele Plastiktüten verwenden",
              "romanization": "chai thungplattik yoe"
            }
          ],
          "pattern_romanization": "Subject + verb + yoe",
          "meaning_english": "Subject verbs a lot",
          "meaning_german": "Subject verbs a lot"
        },
        {
          "pattern": "Subject + do something + เยอะ",
          "meaning": "Subject does a lot of something",
          "examples": [
            {
              "thai": "คนไทยใช้ถุงพลาสติกเยอะมาก",
              "english": "Thai people use plastic bags a lot",
              "german": "Thais verwenden sehr viele Plastiktüten",
              "romanization": "khanathai chai thungplattik yoe mak"
            }
          ],
          "pattern_romanization": "Subject + do something + yoe",
          "meaning_english": "Subject does a lot of something",
          "meaning_german": "Subject does a lot of something"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "คุณเอ็มมารู้เกี่ยวกับการใช้ถุงพลาสติกของคนไทยจากที่ไหน",
            "english": "Where did Emma learn about Thai people's use of plastic bags",
            "german": "Wo erfuhr Emma von der Verwendung von Plastiktüten durch die Thais"
          },
          {
            "thai": "คนไทยใช้ถุงพลาสติกใส่อะไรบ้าง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คนไทยส่วนใหญ่ใช้ถุงพลาสติกหนึ่งใบหลายๆ ครั้งใช่ไหม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ที่กรุงเทพฯ ถุงพลาสติกทำให้เกิดปัญหาอะไรในสิ่งแวดล้อม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ซูเปอร์มาร์เก็ตที่ประเทศไทยไม่ให้ถุงพลาสติกเพราะเป็นกฎหมายใช่ไหม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ซูเปอร์มาร์เก็ตที่ประเทศไทยเริ่มนโยบายไม่ให้ถุงพลาสติกตั้งแต่เมื่อไหร่",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คนไทยใช้อะไรใส่ของเวลาไปซื้อของที่ซูเปอร์มาร์เก็ต",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คนที่ไม่ชอบนโยบาย ไม่ให้ถุงพลาสติก บ่นว่าอะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณเอ็มมาคิดอย่างไรกับคนที่บ่นเกี่ยวกับนโยบายนี้",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ถ้าไม่อยากได้ถุงพลาสติกเวลาไปซื้อของ ต้องพูดว่าอย่างไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
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
          "type": "mc",
          "question_de": "คุณเอ็มมารู้เรื่องการใช้ถุงพลาสติกของคนไทยจากสื่อใด",
          "question_en": "คุณเอ็มมารู้เรื่องการใช้ถุงพลาสติกของคนไทยจากสื่อใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หนังสือพิมพ์",
              "text_en": "หนังสือพิมพ์",
              "correct": false
            },
            {
              "text_de": "สารคดี",
              "text_en": "สารคดี",
              "correct": true
            },
            {
              "text_de": "อินเทอร์เน็ต",
              "text_en": "อินเทอร์เน็ต",
              "correct": false
            },
            {
              "text_de": "เพื่อนบ้าน",
              "text_en": "เพื่อนบ้าน",
              "correct": false
            }
          ],
          "explanation_de": "ฉันเคยอ่านสารคดี",
          "explanation_en": "ฉันเคยอ่านสารคดี"
        },
        {
          "type": "mc",
          "question_de": "คนไทยใช้ถุงพลาสติกเพื่อใส่อะไรบ้าง",
          "question_en": "คนไทยใช้ถุงพลาสติกเพื่อใส่อะไรบ้าง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะอาหาร",
              "text_en": "เฉพาะอาหาร",
              "correct": false
            },
            {
              "text_de": "เฉพาะเสื้อผ้า",
              "text_en": "เฉพาะเสื้อผ้า",
              "correct": false
            },
            {
              "text_de": "อาหาร ของ และอื่นๆ",
              "text_en": "อาหาร ของ และอื่นๆ",
              "correct": true
            },
            {
              "text_de": "เล่นเท่านั้น",
              "text_en": "เล่นเท่านั้น",
              "correct": false
            }
          ],
          "explanation_de": "ใช้ใส่อาหาร ใส่ของ และอื่นๆ",
          "explanation_en": "ใช้ใส่อาหาร ใส่ของ และอื่นๆ"
        },
        {
          "type": "mc",
          "question_de": "ถุงพลาสติกในกรุงเทพฯ ก่อให้เกิดปัญหาอะไร",
          "question_en": "ถุงพลาสติกในกรุงเทพฯ ก่อให้เกิดปัญหาอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "มลพิษทางอากาศ",
              "text_en": "มลพิษทางอากาศ",
              "correct": false
            },
            {
              "text_de": "น้ำท่วม",
              "text_en": "น้ำท่วม",
              "correct": true
            },
            {
              "text_de": "สัญญาณรบกวน",
              "text_en": "สัญญาณรบกวน",
              "correct": false
            },
            {
              "text_de": "การหนักใจ",
              "text_en": "การหนักใจ",
              "correct": false
            }
          ],
          "explanation_de": "ถุงพลาสติกเป็นส่วนหนึ่งที่ทำให้น้ำท่วม",
          "explanation_en": "ถุงพลาสติกเป็นส่วนหนึ่งที่ทำให้น้ำท่วม"
        },
        {
          "type": "mc",
          "question_de": "นโยบายไม่ให้ถุงพลาสติกเป็นกฎหมายหรือไม่",
          "question_en": "นโยบายไม่ให้ถุงพลาสติกเป็นกฎหมายหรือไม่",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ใช่ เป็นกฎหมาย",
              "text_en": "ใช่ เป็นกฎหมาย",
              "correct": false
            },
            {
              "text_de": "ไม่ใช่ เป็นการขอความร่วมมือ",
              "text_en": "ไม่ใช่ เป็นการขอความร่วมมือ",
              "correct": true
            },
            {
              "text_de": "เป็นกฎที่ไม่บังคับ",
              "text_en": "เป็นกฎที่ไม่บังคับ",
              "correct": false
            },
            {
              "text_de": "ไม่ชัดเจน",
              "text_en": "ไม่ชัดเจน",
              "correct": false
            }
          ],
          "explanation_de": "ไม่ใช่กฎหมาย แต่เป็นการขอความร่วมมือ",
          "explanation_en": "ไม่ใช่กฎหมาย แต่เป็นการขอความร่วมมือ"
        },
        {
          "type": "mc",
          "question_de": "ซูเปอร์มาร์เก็ตเริ่มนโยบายนี้เมื่อไหร่",
          "question_en": "ซูเปอร์มาร์เก็ตเริ่มนโยบายนี้เมื่อไหร่",
          "question_romanization": "",
          "options": [
            {
              "text_de": "2560",
              "text_en": "2560",
              "correct": false
            },
            {
              "text_de": "2561",
              "text_en": "2561",
              "correct": false
            },
            {
              "text_de": "2562",
              "text_en": "2562",
              "correct": false
            },
            {
              "text_de": "2563",
              "text_en": "2563",
              "correct": true
            }
          ],
          "explanation_de": "เริ่มตั้งแต่วันที่ 1 มกราคม 2563",
          "explanation_en": "เริ่มตั้งแต่วันที่ 1 มกราคม 2563"
        },
        {
          "type": "mc",
          "question_de": "เดี๋ยวนี้คนไทยใช้อะไรแทนถุงพลาสติก",
          "question_en": "เดี๋ยวนี้คนไทยใช้อะไรแทนถุงพลาสติก",
          "question_romanization": "",
          "options": [
            {
              "text_de": "กระเป๋าผ้าเท่านั้น",
              "text_en": "กระเป๋าผ้าเท่านั้น",
              "correct": false
            },
            {
              "text_de": "กระเป๋าสะพายเท่านั้น",
              "text_en": "กระเป๋าสะพายเท่านั้น",
              "correct": false
            },
            {
              "text_de": "กระเป๋าผ้า กระเป๋าสะพาย และถุงพลาสติกใหญ่",
              "text_en": "กระเป๋าผ้า กระเป๋าสะพาย และถุงพลาสติกใหญ่",
              "correct": true
            },
            {
              "text_de": "ไม่ใช้อะไรเลย",
              "text_en": "ไม่ใช้อะไรเลย",
              "correct": false
            }
          ],
          "explanation_de": "ใช้กระเป๋าผ้า กระเป๋าสะพาย และกระเป๋าพลาสติกใหญ่",
          "explanation_en": "ใช้กระเป๋าผ้า กระเป๋าสะพาย และกระเป๋าพลาสติกใหญ่"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาประทับใจเรื่องใด",
          "question_en": "คุณเอ็มมาประทับใจเรื่องใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ร้านค้ามีหลายร้าน",
              "text_en": "ร้านค้ามีหลายร้าน",
              "correct": false
            },
            {
              "text_de": "เด็กพูดว่าไม่เอาถุง",
              "text_en": "เด็กพูดว่าไม่เอาถุง",
              "correct": true
            },
            {
              "text_de": "คนไทยไม่มีเงิน",
              "text_en": "คนไทยไม่มีเงิน",
              "correct": false
            },
            {
              "text_de": "คนไทยชอบท่องเที่ยว",
              "text_en": "คนไทยชอบท่องเที่ยว",
              "correct": false
            }
          ],
          "explanation_de": "ประทับใจที่ได้ยินเด็กพูดไม่เอาถุง",
          "explanation_en": "ประทับใจที่ได้ยินเด็กพูดไม่เอาถุง"
        },
        {
          "type": "mc",
          "question_de": "คนไทยชินกับสิ่งใด",
          "question_en": "คนไทยชินกับสิ่งใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "การใช้เยอะมาก",
              "text_en": "การใช้เยอะมาก",
              "correct": false
            },
            {
              "text_de": "การไม่เอาถุงพลาสติก",
              "text_en": "การไม่เอาถุงพลาสติก",
              "correct": true
            },
            {
              "text_de": "การสูญเสีย",
              "text_en": "การสูญเสีย",
              "correct": false
            },
            {
              "text_de": "การเบื่อ",
              "text_en": "การเบื่อ",
              "correct": false
            }
          ],
          "explanation_de": "ชินกับการไม่เอาถุงพลาสติก",
          "explanation_en": "ชินกับการไม่เอาถุงพลาสติก"
        },
        {
          "type": "mc",
          "question_de": "เพื่อนคนไทยบางคนบ่นเกี่ยวกับเรื่องอะไร",
          "question_en": "เพื่อนคนไทยบางคนบ่นเกี่ยวกับเรื่องอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "การไม่ให้ถุงไม่สะดวก",
              "text_en": "การไม่ให้ถุงไม่สะดวก",
              "correct": true
            },
            {
              "text_de": "ราคาแพง",
              "text_en": "ราคาแพง",
              "correct": false
            },
            {
              "text_de": "เสื้อผ้าไม่ดี",
              "text_en": "เสื้อผ้าไม่ดี",
              "correct": false
            },
            {
              "text_de": "มนุษยธรรม",
              "text_en": "มนุษยธรรม",
              "correct": false
            }
          ],
          "explanation_de": "บ่นว่าการไม่ให้ถุงทำให้ลูกค้าไม่สะดวก",
          "explanation_en": "บ่นว่าการไม่ให้ถุงทำให้ลูกค้าไม่สะดวก"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาคิดว่าเรื่องนี้เป็นเรื่องอะไร",
          "question_en": "คุณเอ็มมาคิดว่าเรื่องนี้เป็นเรื่องอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เรื่องที่ต้องต่อสู้",
              "text_en": "เรื่องที่ต้องต่อสู้",
              "correct": false
            },
            {
              "text_de": "นานาจิตตัง",
              "text_en": "นานาจิตตัง",
              "correct": true
            },
            {
              "text_de": "เรื่องที่ไม่สำคัญ",
              "text_en": "เรื่องที่ไม่สำคัญ",
              "correct": false
            },
            {
              "text_de": "เรื่องที่สำคัญมาก",
              "text_en": "เรื่องที่สำคัญมาก",
              "correct": false
            }
          ],
          "explanation_de": "ฉันคิดว่าเป็นเรื่องนานาจิตตัง",
          "explanation_en": "ฉันคิดว่าเป็นเรื่องนานาจิตตัง"
        }
      ],
      "id": 14,
      "thai_title": "ถุงพลาสติก",
      "english_title": "Plastic Bags",
      "german_title": "Plastiktüten",
      "emoji": "🛍️",
      "thai_title_romanization": "thung phla-sa-tik"
    },
    {
      "chapter": 15,
      "vocabulary": [
        {
          "thai": "ทุกครั้ง",
          "romanization": "thukkrang",
          "english": "every time",
          "german": "jedes Mal",
          "example_thai": "ทุกครั้งที่ครอบครัวมา",
          "example_english": "Every time the family comes",
          "example_german": "Jedes Mal wenn die Familie kommt",
          "example_romanization": "thukkrangthi khropkrua ma"
        },
        {
          "thai": "ขอให้",
          "romanization": "khohai",
          "english": "to ask someone do something",
          "german": "bitten zu",
          "example_thai": "ขอให้พาไปเที่ยว",
          "example_english": "Ask to be taken sightseeing",
          "example_german": "Darum bitten, mitgenommen zu werden",
          "example_romanization": "khohai pha pathaiiao"
        },
        {
          "thai": "รู้มาว่า",
          "romanization": "ru ma wa",
          "english": "have heard (or known) that…",
          "german": "erfahren haben dass",
          "example_thai": "รู้มาว่าเยาวราชสวย",
          "example_english": "Have heard that Yaowarat is beautiful",
          "example_german": "Ich habe gehört, dass Yaowarat schön ist",
          "example_romanization": "ru ma wa yaowarat suai"
        },
        {
          "thai": "น่าตื่นตาตื่นใจ",
          "romanization": "natuentatuenchai",
          "english": "amazing",
          "german": "erstaunlich",
          "example_thai": "เยาวราชมีอะไรน่าตื่นตาตื่นใจ",
          "example_english": "Yaowarat has amazing things",
          "example_german": "Yaowarat hat erstaunliche Dinge",
          "example_romanization": "yaowarat mi arai natuentatuenchai"
        },
        {
          "thai": "คนไทยเชื้อสายจีน",
          "romanization": "khanathai chueasai chin",
          "english": "Chinese-Thai people",
          "german": "thailändisch-chinesische Menschen",
          "example_thai": "คนไทยเชื้อสายจีนไปซื้อของ",
          "example_english": "Chinese-Thai people go shopping",
          "example_german": "Thailändisch-chinesische Menschen gehen einkaufen",
          "example_romanization": "khanathai chueasai chin pai sue khong"
        },
        {
          "thai": "ยาสมุนไพร",
          "romanization": "yatmunprai",
          "english": "herbal medicine",
          "german": "Kräutermedizin",
          "example_thai": "ซื้อยาสมุนไพรจีน",
          "example_english": "Buy Chinese herbal medicine",
          "example_german": "Chinesische Kräutermedizin kaufen",
          "example_romanization": "sue yatmunprai chin"
        },
        {
          "thai": "ความเชื่อ",
          "romanization": "khwamchuea",
          "english": "a belief",
          "german": "Glaube",
          "example_thai": "ความเชื่อของคนจีน",
          "example_english": "Beliefs of Chinese people",
          "example_german": "Glauben der Chinesen",
          "example_romanization": "khwamchuea khong khanachin"
        },
        {
          "thai": "ทอง",
          "romanization": "thong",
          "english": "gold",
          "german": "Gold",
          "example_thai": "ซื้อทองที่เยาวราช",
          "example_english": "Buy gold in Yaowarat",
          "example_german": "Gold in Yaowarat kaufen",
          "example_romanization": "sue thong thi yaowarat"
        },
        {
          "thai": "บางส่วน",
          "romanization": "bangsuan",
          "english": "some parts",
          "german": "einige Teile",
          "example_thai": "ปิดถนนบางส่วน",
          "example_english": "Close some streets",
          "example_german": "Einige Straßen schließen",
          "example_romanization": "pit thanon bangsuan"
        },
        {
          "thai": "พ่อค้าแม่ค้า",
          "romanization": "phokha maekha",
          "english": "sellers",
          "german": "Händler",
          "example_thai": "พ่อค้าแม่ค้าขายอาหาร",
          "example_english": "Sellers sell food",
          "example_german": "Händler verkaufen Essen",
          "example_romanization": "phokha mae khakhai ahan"
        },
        {
          "thai": "รถเข็น",
          "romanization": "rathakhen",
          "english": "a cart",
          "german": "Schubkarren",
          "example_thai": "เอารถเข็นออกมาขายอาหาร",
          "example_english": "Push carts out to sell food",
          "example_german": "Schubkarren herausschieben, um Essen zu verkaufen",
          "example_romanization": "ao rathakhen okma khai ahan"
        },
        {
          "thai": "เต็มไปหมด",
          "romanization": "temphaimt",
          "english": "full of…, plenty of…",
          "german": "überall voll",
          "example_thai": "อาหารเต็มไปหมด",
          "example_english": "Food is everywhere",
          "example_german": "Überall voll mit Essen",
          "example_romanization": "ahan temphaimt"
        },
        {
          "thai": "มีชื่อเสียง",
          "romanization": "michuesiang",
          "english": "to be famous",
          "german": "berühmt",
          "example_thai": "ร้านมีชื่อเสียง",
          "example_english": "The shop is famous",
          "example_german": "Das Geschäft ist berühmt",
          "example_romanization": "ran michuesiang"
        },
        {
          "thai": "มีสีสัน",
          "romanization": "misisan",
          "english": "to be colorful",
          "german": "bunt/farbenfroh",
          "example_thai": "เยาวราชมีสีสันมาก",
          "example_english": "Yaowarat is very colorful",
          "example_german": "Yaowarat ist sehr farbenfroh",
          "example_romanization": "yaowarat misisan mak"
        },
        {
          "thai": "ถ่ายรูป",
          "romanization": "thairup",
          "english": "to take a photo",
          "german": "Foto machen",
          "example_thai": "ถ่ายรูปลงอินสตาแกรม",
          "example_english": "Take photos for Instagram",
          "example_german": "Fotos für Instagram machen",
          "example_romanization": "thairup long insatakaem"
        },
        {
          "thai": "นักท่องเที่ยว",
          "romanization": "nakthongthiao",
          "english": "a tourist",
          "german": "Tourist",
          "example_thai": "นักท่องเที่ยวมากมาย",
          "example_english": "Many tourists",
          "example_german": "Viele Touristen",
          "example_romanization": "nakthongthiao makmai"
        },
        {
          "thai": "บรรยากาศ",
          "romanization": "bayakat",
          "english": "atmosphere",
          "german": "Atmosphäre",
          "example_thai": "บรรยากาศที่เยาวราช",
          "example_english": "The atmosphere of Yaowarat",
          "example_german": "Die Atmosphäre von Yaowarat",
          "example_romanization": "bayakat thi yaowarat"
        },
        {
          "thai": "ตลาดสด",
          "romanization": "tlattt",
          "english": "fresh market",
          "german": "Frischmarkt",
          "example_thai": "ซื้ออาหารที่ตลาดสด",
          "example_english": "Buy food at fresh market",
          "example_german": "Essen auf dem Frischmarkt kaufen",
          "example_romanization": "sue ahan thi tlattt"
        },
        {
          "thai": "เบื่อ",
          "romanization": "buea",
          "english": "to be bored",
          "german": "gelangweilt sein",
          "example_thai": "ไม่เคยเบื่อ",
          "example_english": "Never bored",
          "example_german": "Nie gelangweilt",
          "example_romanization": "mai khoei buea"
        }
      ],
      "reading": [
        {
          "thai": "ทุกครั้งที่ครอบครัวหรือเพื่อนของผมมาที่กรุงเทพฯ พวกเขาจะขอให้เราพาไปเที่ยวที่เยาวราช",
          "english": "Every time my family or friends come to Bangkok, they ask us to take them sightseeing in Yaowarat",
          "german": "Jedes Mal wenn meine Familie oder Freunde nach Bangkok kommen, bitten sie uns, sie nach Yaowarat zu nehmen",
          "romanization": "thukkrangthi khropkrua rue phuean khong phom ma thi krungthep phuakkhao cha khohai rao pha pathaiiao thi yaowarat"
        },
        {
          "thai": "พวกเขารู้มาว่าเยาวราชคือไชน่าทาวน์ของประเทศไทย",
          "english": "They have heard that Yaowarat is Thailand's Chinatown",
          "german": "Sie haben gehört, dass Yaowarat Thailands Chinatown ist",
          "romanization": "phuakkhao ru ma wa yaowarat khue chanai thao khong prathet thai"
        },
        {
          "thai": "มีอะไรๆ ที่น่าตื่นตาตื่นใจ",
          "english": "There are many amazing things",
          "german": "Es gibt viele erstaunliche Dinge",
          "romanization": "mi arai thi natuentatuenchai"
        },
        {
          "thai": "ที่เยาวราชตอนกลางวันมีรถเยอะ",
          "english": "In Yaowarat during the day there are many cars",
          "german": "In Yaowarat tagsüber gibt es viele Autos",
          "romanization": "thi yaowarat tonklangwan mi rot yoe"
        },
        {
          "thai": "เป็นเวลาที่คนไทยเชื้อสายจีนไปซื้ออาหารแบบจีน ยาสมุนไพรจีน",
          "english": "It is the time when Chinese-Thai people go buy Chinese food and Chinese herbal medicine",
          "german": "Es ist die Zeit, wenn Thai-Chinesen chinesisches Essen und chinesische Kräutermedizin kaufen",
          "romanization": "penwela thi khanathai chueasai chin pai sue ahan baep chin yatmunprai chin"
        },
        {
          "thai": "ของที่เกี่ยวกับความเชื่อของคนจีน และที่นั่นมีร้านทองหลายร้าน",
          "english": "Things related to Chinese beliefs, and there are many gold shops there",
          "german": "Dinge im Zusammenhang mit chinesischen Überzeugungen, und es gibt viele Goldgeschäfte",
          "romanization": "khong thi kiaokap khwamchuea khong khanachin lae thinan mi ran thong lai ran"
        },
        {
          "thai": "เวลาจะซื้อทองคนไทยชอบไปซื้อที่เยาวราช",
          "english": "When buying gold, Thai people like to go buy at Yaowarat",
          "german": "Wenn Gold gekauft wird, kaufen Thais gerne in Yaowarat",
          "romanization": "wela cha sue thong khanathai chop pai sue thi yaowarat"
        },
        {
          "thai": "ตอนกลางคืนที่เยาวราชจะปิดถนนบางส่วน",
          "english": "At night in Yaowarat some streets are closed",
          "german": "Nachts in Yaowarat werden einige Straßen geschlossen",
          "romanization": "tonklangkhuen thi yaowarat cha pit thanon bangsuan"
        },
        {
          "thai": "เพราะจะมีพ่อค้าแม่ค้าเอารถเข็นออกมาขายอาหารสตรีทฟู้ดเต็มไปหมด",
          "english": "Because sellers push carts out to sell street food everywhere",
          "german": "Weil Händler Schubkarren herausschieben, um überall Straßenessen zu verkaufen",
          "romanization": "phera cha mi phokha maekha ao rathakhen okma khai ahan satrit fut temphaimt"
        },
        {
          "thai": "บางร้านมีโต๊ะและเก้าอี้ให้นั่งกินริมถนน บางร้านต้องยืนกิน",
          "english": "Some shops have tables and chairs to sit and eat on the street, some require standing to eat",
          "german": "Einige Geschäfte haben Tische und Stühle zum Sitzen und Essen auf der Straße, einige erfordern Stehen zum Essen",
          "romanization": "bang ran mi to lae kaoi hai nang kin rimtnn bang ran tong yuen kin"
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
              "german": "Darum bitten, zum Sightseeing mitgenommen zu werden",
              "romanization": "khohai pha pathaiiao"
            }
          ],
          "pattern_romanization": "Subject khohai + someone do something",
          "meaning_english": "Subject asks someone to do something",
          "meaning_german": "Subject asks someone to do something"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "thai": "ไชน่าทาวน์ที่กรุงเทพฯ มีชื่อภาษาไทยว่าอะไร",
            "english": "What is the Thai name for Chinatown in Bangkok",
            "german": "Wie heißt Chinatown in Bangkok auf Thai"
          },
          {
            "thai": "ทำไมครอบครัวหรือเพื่อนๆ ของคุณคริสอยากไปเที่ยวเยาวราช",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คนไทยเชื้อสายจีนไปซื้ออะไรที่เยาวราช",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ที่เยาวราชจะปิดถนนบางส่วนตอนกลางคืน เพื่ออะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "รถเข็นส่วนใหญ่ขายอะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "ร้านอาหารทุกร้านมีโต๊ะและเก้าอี้ให้นั่งกินอาหารใช่ไหม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "อาหารสตรีทฟู้ดราคาไม่แพงใช่ไหม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "วัยรุ่นไทยชอบไปทำอะไรที่เยาวราช",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "นักท่องเที่ยวชอบไปทำอะไรที่เยาวราช",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "thai": "คุณเอ็มมาชอบไปเยาวราชตอนไหน เขาไปทำอะไร",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
        ],
        "pronunciation": [],
        "translation": [
          "We have known that ถนนข้าวสาร is a very famous street in Bangkok. Tourist go there at night for street food and seeing things. First time I went there it was very amazing.",
          "My friend asked me to bring him to เยาวราช at day time. He wanted to take photos of Chinese herbal medicine shops."
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "เยาวราชคืออะไร",
          "question_en": "เยาวราชคืออะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ชื่อของเมือง",
              "text_en": "ชื่อของเมือง",
              "correct": false
            },
            {
              "text_de": "ไชน่าทาวน์ของประเทศไทย",
              "text_en": "ไชน่าทาวน์ของประเทศไทย",
              "correct": true
            },
            {
              "text_de": "ชื่อของวัด",
              "text_en": "ชื่อของวัด",
              "correct": false
            },
            {
              "text_de": "ชื่อของสระน้ำ",
              "text_en": "ชื่อของสระน้ำ",
              "correct": false
            }
          ],
          "explanation_de": "เยาวราชคือไชน่าทาวน์ของประเทศไทย",
          "explanation_en": "เยาวราชคือไชน่าทาวน์ของประเทศไทย"
        },
        {
          "type": "mc",
          "question_de": "ครอบครัวของคุณคริสขอให้พาไปเยาวราช เพราะเหตุใด",
          "question_en": "ครอบครัวของคุณคริสขอให้พาไปเยาวราช เพราะเหตุใด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะต้องการเที่ยว",
              "text_en": "เพราะต้องการเที่ยว",
              "correct": false
            },
            {
              "text_de": "เพราะรู้มาว่ามีอะไรน่าตื่นตาตื่นใจ",
              "text_en": "เพราะรู้มาว่ามีอะไรน่าตื่นตาตื่นใจ",
              "correct": true
            },
            {
              "text_de": "เพราะต้องการซื้อของ",
              "text_en": "เพราะต้องการซื้อของ",
              "correct": false
            },
            {
              "text_de": "เพราะต้องการกินอาหาร",
              "text_en": "เพราะต้องการกินอาหาร",
              "correct": false
            }
          ],
          "explanation_de": "พวกเขารู้มาว่ามีอะไรน่าตื่นตาตื่นใจ",
          "explanation_en": "พวกเขารู้มาว่ามีอะไรน่าตื่นตาตื่นใจ"
        },
        {
          "type": "mc",
          "question_de": "คนไทยเชื้อสายจีนไปเยาวราชเพื่อซื้ออะไร",
          "question_en": "คนไทยเชื้อสายจีนไปเยาวราชเพื่อซื้ออะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะอาหารจีน",
              "text_en": "เฉพาะอาหารจีน",
              "correct": false
            },
            {
              "text_de": "เฉพาะยาสมุนไพร",
              "text_en": "เฉพาะยาสมุนไพร",
              "correct": false
            },
            {
              "text_de": "อาหารจีน ยาสมุนไพร ของที่เกี่ยวกับความเชื่อ และทอง",
              "text_en": "อาหารจีน ยาสมุนไพร ของที่เกี่ยวกับความเชื่อ และทอง",
              "correct": true
            },
            {
              "text_de": "เฉพาะเสื้อผ้า",
              "text_en": "เฉพาะเสื้อผ้า",
              "correct": false
            }
          ],
          "explanation_de": "ไปซื้ออาหารจีน ยาสมุนไพร ของเกี่ยวกับความเชื่อ และทอง",
          "explanation_en": "ไปซื้ออาหารจีน ยาสมุนไพร ของเกี่ยวกับความเชื่อ และทอง"
        },
        {
          "type": "mc",
          "question_de": "ทำไมที่เยาวราชต้องปิดถนนบางส่วนตอนกลางคืน",
          "question_en": "ทำไมที่เยาวราชต้องปิดถนนบางส่วนตอนกลางคืน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพื่อซ่อมถนน",
              "text_en": "เพื่อซ่อมถนน",
              "correct": false
            },
            {
              "text_de": "เพื่อให้พ่อค้าแม่ค้าขายอาหารสตรีทฟู้ด",
              "text_en": "เพื่อให้พ่อค้าแม่ค้าขายอาหารสตรีทฟู้ด",
              "correct": true
            },
            {
              "text_de": "เพื่อให้คนพักผ่อน",
              "text_en": "เพื่อให้คนพักผ่อน",
              "correct": false
            },
            {
              "text_de": "เพื่อลดจำนวนรถ",
              "text_en": "เพื่อลดจำนวนรถ",
              "correct": false
            }
          ],
          "explanation_de": "เพราะมีพ่อค้าแม่ค้าเอารถเข็นออกมาขาย",
          "explanation_en": "เพราะมีพ่อค้าแม่ค้าเอารถเข็นออกมาขาย"
        },
        {
          "type": "mc",
          "question_de": "เยาวราชตอนกลางคืนมีอะไรขาย",
          "question_en": "เยาวราชตอนกลางคืนมีอะไรขาย",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะอาหาร",
              "text_en": "เฉพาะอาหาร",
              "correct": false
            },
            {
              "text_de": "อาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม",
              "text_en": "อาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม",
              "correct": true
            },
            {
              "text_de": "เฉพาะเสื้อผ้า",
              "text_en": "เฉพาะเสื้อผ้า",
              "correct": false
            },
            {
              "text_de": "เฉพาะข้าวของ",
              "text_en": "เฉพาะข้าวของ",
              "correct": false
            }
          ],
          "explanation_de": "ขายอาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม",
          "explanation_en": "ขายอาหารจีน อาหารไทย ขนม ผลไม้ เครื่องดื่ม"
        },
        {
          "type": "mc",
          "question_de": "ร้านที่มีชื่อเสียงมีลักษณะเป็นอย่างไร",
          "question_en": "ร้านที่มีชื่อเสียงมีลักษณะเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ว่างเปล่า",
              "text_en": "ว่างเปล่า",
              "correct": false
            },
            {
              "text_de": "มีคนน้อย",
              "text_en": "มีคนน้อย",
              "correct": false
            },
            {
              "text_de": "มีคิวยาว",
              "text_en": "มีคิวยาว",
              "correct": true
            },
            {
              "text_de": "เปิดเฉพาะตอนเช้า",
              "text_en": "เปิดเฉพาะตอนเช้า",
              "correct": false
            }
          ],
          "explanation_de": "ร้านที่มีชื่อเสียงจะมีคิวยาว",
          "explanation_en": "ร้านที่มีชื่อเสียงจะมีคิวยาว"
        },
        {
          "type": "mc",
          "question_de": "วัยรุ่นไทยไปเยาวราชเพื่อทำอะไร",
          "question_en": "วัยรุ่นไทยไปเยาวราชเพื่อทำอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไปเรียนหนังสือ",
              "text_en": "ไปเรียนหนังสือ",
              "correct": false
            },
            {
              "text_de": "ไปเจอแฟน",
              "text_en": "ไปเจอแฟน",
              "correct": false
            },
            {
              "text_de": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม",
              "text_en": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม",
              "correct": true
            },
            {
              "text_de": "ไปทำบุญ",
              "text_en": "ไปทำบุญ",
              "correct": false
            }
          ],
          "explanation_de": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม",
          "explanation_en": "กินข้าว กินขนม และถ่ายรูปลงอินสตาแกรม"
        },
        {
          "type": "mc",
          "question_de": "นักท่องเที่ยวไปเยาวราชเพื่อทำอะไร",
          "question_en": "นักท่องเที่ยวไปเยาวราชเพื่อทำอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไปทำงาน",
              "text_en": "ไปทำงาน",
              "correct": false
            },
            {
              "text_de": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร",
              "text_en": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร",
              "correct": true
            },
            {
              "text_de": "ไปทำบุญที่วัด",
              "text_en": "ไปทำบุญที่วัด",
              "correct": false
            },
            {
              "text_de": "ไปพบเพื่อน",
              "text_en": "ไปพบเพื่อน",
              "correct": false
            }
          ],
          "explanation_de": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร",
          "explanation_en": "ไปดูบรรยากาศ ถ่ายรูป และกินอาหาร"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาชอบไปเยาวราชตอนไหน",
          "question_en": "คุณเอ็มมาชอบไปเยาวราชตอนไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ตอนเช้า",
              "text_en": "ตอนเช้า",
              "correct": true
            },
            {
              "text_de": "ตอนบ่าย",
              "text_en": "ตอนบ่าย",
              "correct": false
            },
            {
              "text_de": "ตอนเย็น",
              "text_en": "ตอนเย็น",
              "correct": false
            },
            {
              "text_de": "ตอนกลางคืน",
              "text_en": "ตอนกลางคืน",
              "correct": false
            }
          ],
          "explanation_de": "คุณเอ็มมาชอบไปตอนเช้า",
          "explanation_en": "คุณเอ็มมาชอบไปตอนเช้า"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาไปเยาวราชตอนเช้าเพื่อทำอะไร",
          "question_en": "คุณเอ็มมาไปเยาวราชตอนเช้าเพื่อทำอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไปซื้อเสื้อผ้า",
              "text_en": "ไปซื้อเสื้อผ้า",
              "correct": false
            },
            {
              "text_de": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัด",
              "text_en": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัด",
              "correct": true
            },
            {
              "text_de": "ไปพบเพื่อน",
              "text_en": "ไปพบเพื่อน",
              "correct": false
            },
            {
              "text_de": "ไปเรียนหนังสือ",
              "text_en": "ไปเรียนหนังสือ",
              "correct": false
            }
          ],
          "explanation_de": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัดไตรมิตร",
          "explanation_en": "ไปซื้ออาหารที่ตลาดสดและถ่ายรูปวัดไตรมิตร"
        }
      ],
      "id": 15,
      "thai_title": "เยาวราช",
      "english_title": "Yaowarat/Chinatown",
      "german_title": "Chinatown",
      "emoji": "🏮",
      "thai_title_romanization": "yao-wa-rat"
    },
    {
      "vocabulary": [
        {
          "thai": "ชื้น",
          "romanization": "chuen",
          "english": "humid, moist, damp",
          "german": "feucht",
          "example_thai": "อากาศในกรุงเทพฯ ชื้นมาก",
          "example_english": "The air in Bangkok is very humid",
          "example_german": "Die Luft in Bangkok ist sehr feucht",
          "example_romanization": "akat nai krungthep chuen mak"
        },
        {
          "thai": "เรื่อง",
          "romanization": "rueang",
          "english": "matter",
          "german": "Angelegenheit",
          "example_thai": "นี่เป็นเรื่องสําคัญ",
          "example_english": "This is an important matter",
          "example_german": "Das ist eine wichtige Angelegenheit",
          "example_romanization": "ni penrueang sakhan"
        },
        {
          "thai": "ความรู้สึก",
          "romanization": "khwamrusuek",
          "english": "feeling",
          "german": "Gefühl",
          "example_thai": "ฉันมีความรู้สึกดี",
          "example_english": "I have a good feeling",
          "example_german": "Ich habe ein gutes Gefühl",
          "example_romanization": "chan mikwamrusuek di"
        },
        {
          "thai": "ดม",
          "romanization": "dom",
          "english": "to smell, to sniff",
          "german": "riechen, schnüffeln",
          "example_thai": "เธอดมกลิ่นดี",
          "example_english": "She has a good sense of smell",
          "example_german": "Sie hat einen guten Geruchssinn",
          "example_romanization": "thoe damaklin di"
        },
        {
          "thai": "ควันรถ",
          "romanization": "khwan rot",
          "english": "smoke from car",
          "german": "Autoabgase",
          "example_thai": "ควันรถมีกลิ่นแย่",
          "example_english": "Car smoke smells bad",
          "example_german": "Autoabgase riechen schlecht",
          "example_romanization": "khwan rot mi klin yae"
        },
        {
          "thai": "กลิ่นเหม็น",
          "romanization": "klin emn",
          "english": "bad smell",
          "german": "schlechter Geruch",
          "example_thai": "มีกลิ่นเหม็นมาจากท่อ",
          "example_english": "There is a bad smell from the pipe",
          "example_german": "Es gibt einen schlechten Geruch vom Rohr",
          "example_romanization": "mi klin emn machak tho"
        },
        {
          "thai": "ท่อระบายน้ำ",
          "romanization": "thorabainam",
          "english": "drain pipe",
          "german": "Abflussrohr",
          "example_thai": "ท่อระบายน้ำเสีย",
          "example_english": "wastewater drain pipe",
          "example_german": "Abflussrohr für Abwasser",
          "example_romanization": "thorabainam sia"
        },
        {
          "thai": "กลิ่นหอม",
          "romanization": "klinhom",
          "english": "nice smell",
          "german": "guter Geruch, Duft",
          "example_thai": "น้ำหอมมีกลิ่นหอม",
          "example_english": "Perfume has a nice smell",
          "example_german": "Parfüm hat einen schönen Duft",
          "example_romanization": "namhom mi klinhom"
        },
        {
          "thai": "เสื้อผ้า",
          "romanization": "sueapha",
          "english": "clothes",
          "german": "Kleidung",
          "example_thai": "เสื้อผ้ากลับเหม็นน้ำหอม",
          "example_english": "Clothes smell like perfume",
          "example_german": "Die Kleidung riecht nach Parfüm",
          "example_romanization": "sueapha klap emn namhom"
        },
        {
          "thai": "น้ำหอม",
          "romanization": "namhom",
          "english": "perfume",
          "german": "Parfüm",
          "example_thai": "ฉันชอบน้ำหอมนี้",
          "example_english": "I like this perfume",
          "example_german": "Ich mag dieses Parfüm",
          "example_romanization": "chan chop namhom ni"
        },
        {
          "thai": "น่าแปลกใจ",
          "romanization": "napaenkchai",
          "english": "surprisingly",
          "german": "überraschend",
          "example_thai": "มันน่าแปลกใจมาก",
          "example_english": "It is very surprising",
          "example_german": "Es ist sehr überraschend",
          "example_romanization": "man napaenkchai mak"
        },
        {
          "thai": "สำหรับ",
          "romanization": "samrap",
          "english": "for",
          "german": "für",
          "example_thai": "นี่เป็นของสำหรับคุณ",
          "example_english": "This is for you",
          "example_german": "Das ist für dich",
          "example_romanization": "ni pen khong samrap khun"
        },
        {
          "thai": "คนต่างชาติ",
          "romanization": "khanatangchati",
          "english": "a foreigner",
          "german": "Ausländer",
          "example_thai": "เขาเป็นคนต่างชาติ",
          "example_english": "He is a foreigner",
          "example_german": "Er ist ein Ausländer",
          "example_romanization": "khao pen khanatangchati"
        },
        {
          "thai": "แก้ปัญหา",
          "romanization": "kaepanha",
          "english": "to solve problem",
          "german": "Problem lösen",
          "example_thai": "เราแก้ปัญหาได้ง่ายๆ",
          "example_english": "We solve the problem easily",
          "example_german": "Wir lösen das Problem leicht",
          "example_romanization": "rao kaepanha dai ngai"
        },
        {
          "thai": "หน้ากาก",
          "romanization": "nakak",
          "english": "a mask",
          "german": "Maske",
          "example_thai": "ฉันใส่หน้ากาก",
          "example_english": "I wear a mask",
          "example_german": "Ich trage eine Maske",
          "example_romanization": "chan sainakak"
        },
        {
          "thai": "เป็นหวัด",
          "romanization": "penwat",
          "english": "to have a cold",
          "german": "Erkältung haben",
          "example_thai": "เขาเป็นหวัด",
          "example_english": "He has a cold",
          "example_german": "Er hat eine Erkältung",
          "example_romanization": "khao penwat"
        },
        {
          "thai": "ฝุ่น",
          "romanization": "fun",
          "english": "dust",
          "german": "Staub, Feinstaub",
          "example_thai": "ฝุ่น PM 2.5 มีในอากาศ",
          "example_english": "PM 2.5 dust is in the air",
          "example_german": "Feinstaub PM 2.5 ist in der Luft",
          "example_romanization": "fun PM 2.5 mi nai akat"
        },
        {
          "thai": "ก็เลย",
          "romanization": "k loei",
          "english": "so, therefore",
          "german": "also, daher",
          "example_thai": "เขาป่วย ก็เลยไม่มา",
          "example_english": "He was sick, so he didn't come",
          "example_german": "Er war krank, daher kam er nicht",
          "example_romanization": "khao puai k loei mai ma"
        },
        {
          "thai": "แปลก",
          "romanization": "paenk",
          "english": "strange",
          "german": "seltsam",
          "example_thai": "มันแปลกมาก",
          "example_english": "It is very strange",
          "example_german": "Es ist sehr seltsam",
          "example_romanization": "man paenk mak"
        },
        {
          "thai": "ธรรมดา",
          "romanization": "thamda",
          "english": "common, normal, simple",
          "german": "gewöhnlich, normal",
          "example_thai": "นี่เป็นเรื่องธรรมดา",
          "example_english": "This is a normal thing",
          "example_german": "Das ist eine normale Sache",
          "example_romanization": "ni penrueang thamda"
        }
      ],
      "reading": [
        {
          "thai": "กรุงเทพฯ เป็นเมืองที่มีกลิ่นของอากาศชื้น",
          "english": "Bangkok is a city with the smell of humid air",
          "german": "Bangkok ist eine Stadt mit dem Geruch feuchter Luft",
          "romanization": "krungthep pen mueang thi mi klin khong akat chuen"
        },
        {
          "thai": "คุณคริสบอกว่าอากาศเป็นเรื่องของความรู้สึก ไม่ใช่กลิ่น",
          "english": "Chris said that air is a matter of feeling, not smell",
          "german": "Chris sagte, dass Luft eine Frage des Gefühls ist, nicht des Geruchs",
          "romanization": "khun kh ri sop ok wa akat penrueang khong khwamrusuek mai chai klin"
        },
        {
          "thai": "ฉันบอกเขาว่าไม่จริง เพราะฉันคิดว่าผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย",
          "english": "I told him that is not true because I think women have a better sense of smell than men",
          "german": "Ich sagte ihm, das ist nicht wahr, weil ich denke, dass Frauen einen besseren Geruchssinn haben als Männer",
          "romanization": "chan bok khao wa mai chring phera chan khit wa phuying damaklin dai dikwa phuchai"
        },
        {
          "thai": "นอกจากกลิ่นอากาศชื้นแล้ว กรุงเทพฯ ยังมีกลิ่นอาหาร กลิ่นควันรถ",
          "english": "Besides the smell of humid air, Bangkok also has food smell and car smoke smell",
          "german": "Neben dem Geruch feuchter Luft hat Bangkok auch Essensgeruch und Autoabgasgeruch",
          "romanization": "nokchak klin akat chuen laeo krungthep yangmi klin ahan klin khwan rot"
        },
        {
          "thai": "บางครั้งอาจจะได้กลิ่นเหม็นจากท่อระบายน้ำ",
          "english": "Sometimes there might be a bad smell from drain pipes",
          "german": "Manchmal kann es einen schlechten Geruch von Abflussrohren geben",
          "romanization": "bangkrang atcha dakailin emn chak thorabainam"
        },
        {
          "thai": "ถ้าขึ้นรถไฟฟ้าหรือรถไฟใต้ดินก็จะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ",
          "english": "If you take the BTS or MRT, you will get nice smell from clothes and perfume of people on the train",
          "german": "Wenn Sie die BTS oder MRT nehmen, bekommen Sie einen schönen Geruch von Kleidung und Parfüm von Menschen im Zug",
          "romanization": "tha khuen rathafafai rue rathafaitaidin k cha dai klinhom chak sueapha lae namhom khong khananai rot"
        },
        {
          "thai": "แต่กลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติคือกลิ่นทุเรียน",
          "english": "But the most surprising smell for foreigners is the smell of durian",
          "german": "Aber der überraschendste Geruch für Ausländer ist der Geruch von Durian",
          "romanization": "tae klin thi napaenkchai thisut samrap khanatangchati khue klin thurian"
        },
        {
          "thai": "ฤดูที่มีทุเรียนเราจะได้กลิ่นทุเรียนในอากาศ",
          "english": "During durian season, we will get durian smell in the air",
          "german": "Während der Durianzeit bekommen wir Durian-Geruch in der Luft",
          "romanization": "ฤดู thi mi thurian rao cha dakailin thurian nai akat"
        },
        {
          "thai": "คนที่ไม่ชอบทุเรียนจะบ่น แต่ฉันไม่มีปัญหา",
          "english": "People who don't like durian will complain, but I don't have a problem",
          "german": "Menschen, die Durian nicht mögen, werden sich beschweren, aber ich habe kein Problem",
          "romanization": "khon thi mai chop thurian cha bon tae chan mai mipanha"
        },
        {
          "thai": "ฉันคิดว่าเราแก้ปัญหานี้ได้ง่ายๆ ด้วยการใส่หน้ากาก",
          "english": "I think we can solve this problem easily by wearing a mask",
          "german": "Ich denke, wir können dieses Problem leicht durch das Tragen einer Maske lösen",
          "romanization": "chan khit wa rao kaepanha ni dai ngai duai kan sainakak"
        }
      ],
      "structures": [
        {
          "pattern": "Subject + ก็เลย + verb/adjective",
          "meaning": "Therefore/So subject...",
          "thai_example": "เขาป่วย ก็เลยไม่มา",
          "english_example": "He was sick, so he didn't come",
          "german_example": "Er war krank, daher kam er nicht",
          "pattern_romanization": "Subject + k loei + verb /adjective",
          "meaning_english": "Therefore/So subject...",
          "meaning_german": "Therefore/So subject..."
        },
        {
          "pattern": "สำหรับ + noun",
          "meaning": "(as) for, with connotation of comparing",
          "thai_example": "สำหรับคนต่างชาติ",
          "english_example": "as for foreigners",
          "german_example": "für Ausländer",
          "pattern_romanization": "samrap + noun",
          "meaning_english": "(as) for, with connotation of comparing",
          "meaning_german": "(as) for, with connotation of comparing"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "กรุงเทพฯ มีกลิ่นอะไรบ้าง",
            "answer": "กรุงเทพฯ มีกลิ่นอากาศชื้น กลิ่นอาหาร กลิ่นควันรถ บางครั้งมีกลิ่นเหม็นจากท่อระบายน้ำ และในรถไฟฟ้ามีกลิ่นหอมจากน้ำหอม",
            "german": "",
            "english": ""
          },
          {
            "question": "คุณคิดว่ากลิ่นทุเรียนเป็นอย่างไร",
            "answer": "ฉันคิดว่ากลิ่นทุเรียนน่าแปลกใจสำหรับคนต่างชาติ แต่ฉันไม่มีปัญหา",
            "german": "",
            "english": ""
          },
          {
            "question": "ทำไมคุณคิดว่าผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย",
            "answer": "ฉันคิดว่าผู้หญิงมีความสามารถในการดมกลิ่นได้ดีกว่าผู้ชาย",
            "german": "",
            "english": ""
          },
          {
            "question": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องแปลกไหม",
            "answer": "ไม่ การใส่หน้ากากที่ประเทศไทยเป็นเรื่องปกติธรรมดา",
            "german": "",
            "english": ""
          },
          {
            "question": "คนไทยใส่หน้ากากเมื่อไหร่",
            "answer": "คนไทยใส่หน้ากากเวลาเป็นหวัดและเวลาที่มีปัญหาเกี่ยวกับฝุ่น PM 2.5",
            "german": "",
            "english": ""
          },
          {
            "question": "ถ้าไม่ชอบกลิ่นทุเรียนต้องทำอย่างไร",
            "answer": "ถ้าไม่ชอบกลิ่นทุเรียนสามารถใส่หน้ากากแก้ปัญหาได้",
            "german": "",
            "english": ""
          },
          {
            "question": "กลิ่นหอมในรถไฟฟ้ามาจากอะไร",
            "answer": "กลิ่นหอมในรถไฟฟ้ามาจากเสื้อผ้าและน้ำหอมของคนในรถ",
            "german": "",
            "english": ""
          },
          {
            "question": "ประเทศไทยมีปัญหาเรื่องฝุ่นเมื่อไหร่",
            "answer": "ประเทศไทยมีปัญหาฝุ่น PM 2.5 ในฤดูร้อนและฤดูหนาว",
            "german": "",
            "english": ""
          },
          {
            "question": "กลิ่นเหม็นในกรุงเทพฯ มาจากไหน",
            "answer": "กลิ่นเหม็นในกรุงเทพฯ มาจากท่อระบายน้ำและควันรถ",
            "german": "",
            "english": ""
          },
          {
            "question": "เวลาอยู่ในรถไฟฟ้าหรือรถไฟใต้ดินจะได้กลิ่นอะไร",
            "answer": "เวลาอยู่ในรถไฟฟ้าหรือรถไฟใต้ดินจะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ",
            "german": "",
            "english": ""
          }
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "กรุงเทพฯ มีกลิ่นของอากาศอะไร",
          "question_en": "กรุงเทพฯ มีกลิ่นของอากาศอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ร้อน",
              "text_en": "ร้อน",
              "correct": false
            },
            {
              "text_de": "ชื้น",
              "text_en": "ชื้น",
              "correct": true
            },
            {
              "text_de": "หนาว",
              "text_en": "หนาว",
              "correct": false
            },
            {
              "text_de": "แห้ง",
              "text_en": "แห้ง",
              "correct": false
            }
          ],
          "explanation_de": "ตามข้อความอ่าน กรุงเทพฯ มีกลิ่นของอากาศชื้น",
          "explanation_en": "ตามข้อความอ่าน กรุงเทพฯ มีกลิ่นของอากาศชื้น"
        },
        {
          "type": "mc",
          "question_de": "ตามที่เรียน กลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติคืออะไร",
          "question_en": "ตามที่เรียน กลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติคืออะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "กลิ่นต้นไม้",
              "text_en": "กลิ่นต้นไม้",
              "correct": false
            },
            {
              "text_de": "กลิ่นทุเรียน",
              "text_en": "กลิ่นทุเรียน",
              "correct": true
            },
            {
              "text_de": "กลิ่นม้า",
              "text_en": "กลิ่นม้า",
              "correct": false
            },
            {
              "text_de": "กลิ่นอากาศ",
              "text_en": "กลิ่นอากาศ",
              "correct": false
            }
          ],
          "explanation_de": "กลิ่นทุเรียนเป็นกลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติ",
          "explanation_en": "กลิ่นทุเรียนเป็นกลิ่นที่น่าแปลกใจที่สุดสำหรับคนต่างชาติ"
        },
        {
          "type": "mc",
          "question_de": "เวลาเป็นหวัดต้องใส่อะไร",
          "question_en": "เวลาเป็นหวัดต้องใส่อะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หมวก",
              "text_en": "หมวก",
              "correct": false
            },
            {
              "text_de": "แว่น",
              "text_en": "แว่น",
              "correct": false
            },
            {
              "text_de": "หน้ากาก",
              "text_en": "หน้ากาก",
              "correct": true
            },
            {
              "text_de": "ถุงมือ",
              "text_en": "ถุงมือ",
              "correct": false
            }
          ],
          "explanation_de": "คนไทยใส่หน้ากากเวลาเป็นหวัด",
          "explanation_en": "คนไทยใส่หน้ากากเวลาเป็นหวัด"
        },
        {
          "type": "mc",
          "question_de": "ฝุ่น PM 2.5 มาจากไหน",
          "question_en": "ฝุ่น PM 2.5 มาจากไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "น้ำ",
              "text_en": "น้ำ",
              "correct": false
            },
            {
              "text_de": "บ้าน",
              "text_en": "บ้าน",
              "correct": false
            },
            {
              "text_de": "อากาศ",
              "text_en": "อากาศ",
              "correct": true
            },
            {
              "text_de": "รถ",
              "text_en": "รถ",
              "correct": false
            }
          ],
          "explanation_de": "ฝุ่น PM 2.5 อยู่ในอากาศ",
          "explanation_en": "ฝุ่น PM 2.5 อยู่ในอากาศ"
        },
        {
          "type": "mc",
          "question_de": "ในรถไฟฟ้าจะได้กลิ่นหอมจากอะไร",
          "question_en": "ในรถไฟฟ้าจะได้กลิ่นหอมจากอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ดอกไม้",
              "text_en": "ดอกไม้",
              "correct": false
            },
            {
              "text_de": "โลชั่น",
              "text_en": "โลชั่น",
              "correct": false
            },
            {
              "text_de": "น้ำหอมและเสื้อผ้า",
              "text_en": "น้ำหอมและเสื้อผ้า",
              "correct": true
            },
            {
              "text_de": "น้ำหา",
              "text_en": "น้ำหา",
              "correct": false
            }
          ],
          "explanation_de": "ในรถไฟฟ้าจะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ",
          "explanation_en": "ในรถไฟฟ้าจะได้กลิ่นหอมจากเสื้อผ้าและน้ำหอมของคนในรถ"
        },
        {
          "type": "mc",
          "question_de": "ผู้หญิงกับผู้ชายใครดมกลิ่นได้ดีกว่า",
          "question_en": "ผู้หญิงกับผู้ชายใครดมกลิ่นได้ดีกว่า",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ผู้ชาย",
              "text_en": "ผู้ชาย",
              "correct": false
            },
            {
              "text_de": "พวกเขาเท่ากัน",
              "text_en": "พวกเขาเท่ากัน",
              "correct": false
            },
            {
              "text_de": "ผู้หญิง",
              "text_en": "ผู้หญิง",
              "correct": true
            },
            {
              "text_de": "ไม่รู้",
              "text_en": "ไม่รู้",
              "correct": false
            }
          ],
          "explanation_de": "ตามข้อความ ผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย",
          "explanation_en": "ตามข้อความ ผู้หญิงดมกลิ่นได้ดีกว่าผู้ชาย"
        },
        {
          "type": "mc",
          "question_de": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องอะไร",
          "question_en": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "แปลก",
              "text_en": "แปลก",
              "correct": false
            },
            {
              "text_de": "หรรษา",
              "text_en": "หรรษา",
              "correct": false
            },
            {
              "text_de": "ปกติธรรมดา",
              "text_en": "ปกติธรรมดา",
              "correct": true
            },
            {
              "text_de": "น่าอัศจรรย์",
              "text_en": "น่าอัศจรรย์",
              "correct": false
            }
          ],
          "explanation_de": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องปกติธรรมดามากๆ",
          "explanation_en": "การใส่หน้ากากที่ประเทศไทยเป็นเรื่องปกติธรรมดามากๆ"
        },
        {
          "type": "mc",
          "question_de": "กลิ่นเหม็นในกรุงเทพฯ มาจากอะไรบ้าง",
          "question_en": "กลิ่นเหม็นในกรุงเทพฯ มาจากอะไรบ้าง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ต้นไม้เท่านั้น",
              "text_en": "ต้นไม้เท่านั้น",
              "correct": false
            },
            {
              "text_de": "ควันรถกับท่อระบายน้ำ",
              "text_en": "ควันรถกับท่อระบายน้ำ",
              "correct": true
            },
            {
              "text_de": "ดินเท่านั้น",
              "text_en": "ดินเท่านั้น",
              "correct": false
            },
            {
              "text_de": "ฝน",
              "text_en": "ฝน",
              "correct": false
            }
          ],
          "explanation_de": "กลิ่นเหม็นมาจากควันรถและท่อระบายน้ำ",
          "explanation_en": "กลิ่นเหม็นมาจากควันรถและท่อระบายน้ำ"
        },
        {
          "type": "mc",
          "question_de": "ฤดูใดที่มีทุเรียนจะมีกลิ่นทุเรียนในอากาศ",
          "question_en": "ฤดูใดที่มีทุเรียนจะมีกลิ่นทุเรียนในอากาศ",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ฤดูหนาวเท่านั้น",
              "text_en": "ฤดูหนาวเท่านั้น",
              "correct": false
            },
            {
              "text_de": "ฤดูร้อนเท่านั้น",
              "text_en": "ฤดูร้อนเท่านั้น",
              "correct": false
            },
            {
              "text_de": "ฤดูฝน",
              "text_en": "ฤดูฝน",
              "correct": false
            },
            {
              "text_de": "ฤดูที่มีทุเรียน",
              "text_en": "ฤดูที่มีทุเรียน",
              "correct": true
            }
          ],
          "explanation_de": "ฤดูที่มีทุเรียนจะได้กลิ่นทุเรียนในอากาศ",
          "explanation_en": "ฤดูที่มีทุเรียนจะได้กลิ่นทุเรียนในอากาศ"
        },
        {
          "type": "mc",
          "question_de": "วิธีแก้ปัญหากลิ่นทุเรียนตามความคิดผู้เขียน",
          "question_en": "วิธีแก้ปัญหากลิ่นทุเรียนตามความคิดผู้เขียน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ปลูกต้นไม้",
              "text_en": "ปลูกต้นไม้",
              "correct": false
            },
            {
              "text_de": "ใส่หน้ากาก",
              "text_en": "ใส่หน้ากาก",
              "correct": true
            },
            {
              "text_de": "หลับใจ",
              "text_en": "หลับใจ",
              "correct": false
            },
            {
              "text_de": "ย้ายบ้าน",
              "text_en": "ย้ายบ้าน",
              "correct": false
            }
          ],
          "explanation_de": "ผู้เขียนคิดว่าแก้ปัญหาได้ง่ายๆ ด้วยการใส่หน้ากาก",
          "explanation_en": "ผู้เขียนคิดว่าแก้ปัญหาได้ง่ายๆ ด้วยการใส่หน้ากาก"
        }
      ],
      "id": 16,
      "thai_title": "กลิ่นของกรุงเทพฯ",
      "german_title": "Bangkoks Gerüche",
      "english_title": "Smells of Bangkok",
      "emoji": "👃",
      "thai_title_romanization": "klin khong krung thep"
    },
    {
      "vocabulary": [
        {
          "thai": "โดยทั่วไป",
          "romanization": "doithuapai",
          "english": "generally",
          "german": "im Allgemeinen",
          "example_thai": "โดยทั่วไปอากาศร้อน",
          "example_english": "Generally the weather is hot",
          "example_german": "Im Allgemeinen ist das Wetter heiß",
          "example_romanization": "doithuapai akat ron"
        },
        {
          "thai": "ไม่ถึงกับ",
          "romanization": "mai thuengkap",
          "english": "not to the extent of",
          "german": "nicht so schlimm",
          "example_thai": "ไม่ถึงกับแย่มาก",
          "example_english": "not to the extent of being very bad",
          "example_german": "nicht so schlimm",
          "example_romanization": "mai thuengkap yaemak"
        },
        {
          "thai": "แย่",
          "romanization": "yae",
          "english": "bad",
          "german": "schlecht",
          "example_thai": "อากาศแย่มาก",
          "example_english": "The weather is very bad",
          "example_german": "Das Wetter ist sehr schlecht",
          "example_romanization": "akat yaemak"
        },
        {
          "thai": "ตาม",
          "romanization": "tam",
          "english": "according to",
          "german": "gemäß, laut",
          "example_thai": "ตามธรรมชาติ",
          "example_english": "according to nature",
          "example_german": "gemäß der Natur",
          "example_romanization": "tam thamchati"
        },
        {
          "thai": "ธรรมชาติ",
          "romanization": "thamchati",
          "english": "nature",
          "german": "Natur",
          "example_thai": "ธรรมชาติไทยร้อน",
          "example_english": "Thai nature is hot",
          "example_german": "Die Natur ist heiß",
          "example_romanization": "thamchati thai ron"
        },
        {
          "thai": "พื้น",
          "romanization": "phuen",
          "english": "ground",
          "german": "Boden",
          "example_thai": "พื้นถนนร้อน",
          "example_english": "The ground of the road is hot",
          "example_german": "Der Bodenboden ist heiß",
          "example_romanization": "phuentnn ron"
        },
        {
          "thai": "ตึก",
          "romanization": "tuek",
          "english": "building",
          "german": "Gebäude",
          "example_thai": "ตึกสูงแสงแดด",
          "example_english": "Tall buildings get sunlight",
          "example_german": "Hohes Gebäude bekommt Sonnenlicht",
          "example_romanization": "tueksung saengdaet"
        },
        {
          "thai": "ใหม่ๆ",
          "romanization": "aim",
          "english": "at early stage of",
          "german": "am Anfang von",
          "example_thai": "มาที่นี่ใหม่ๆ",
          "example_english": "newly came here",
          "example_german": "gerade angekommen",
          "example_romanization": "ma thini aim"
        },
        {
          "thai": "เกินไป",
          "romanization": "koenpai",
          "english": "way too, excessive",
          "german": "zu sehr, übermäßig",
          "example_thai": "ร้อนเกินไป",
          "example_english": "way too hot",
          "example_german": "viel zu heiß",
          "example_romanization": "ron koenpai"
        },
        {
          "thai": "หายใจ",
          "romanization": "aichai",
          "english": "to breathe",
          "german": "atmen",
          "example_thai": "หายใจไม่สะดวก",
          "example_english": "breathing is not comfortable",
          "example_german": "Atmen ist nicht bequem",
          "example_romanization": "aichai mai saduak"
        },
        {
          "thai": "สองสาม",
          "romanization": "song sam",
          "english": "a few",
          "german": "ein paar",
          "example_thai": "สองสามวัน",
          "example_english": "a few days",
          "example_german": "ein paar Tage",
          "example_romanization": "song sam wan"
        },
        {
          "thai": "สัปดาห์",
          "romanization": "sapda",
          "english": "week",
          "german": "Woche",
          "example_thai": "สองสามสัปดาห์",
          "example_english": "a few weeks",
          "example_german": "ein paar Wochen",
          "example_romanization": "song sam sapda"
        },
        {
          "thai": "ระหว่าง",
          "romanization": "rawang",
          "english": "during, between",
          "german": "zwischen, während",
          "example_thai": "ระหว่างฤดูหนาว",
          "example_english": "during winter",
          "example_german": "während des Winters",
          "example_romanization": "rawang ฤดูหนาว"
        },
        {
          "thai": "แห้ง",
          "romanization": "aeng",
          "english": "dry",
          "german": "trocken",
          "example_thai": "อากาศแห้ง",
          "example_english": "The air is dry",
          "example_german": "Die Luft ist trocken",
          "example_romanization": "akat aeng"
        },
        {
          "thai": "เปียก",
          "romanization": "piak",
          "english": "wet",
          "german": "nass",
          "example_thai": "มือเปียก",
          "example_english": "hands are wet",
          "example_german": "Hände sind nass",
          "example_romanization": "mue piak"
        },
        {
          "thai": "ข้อมูล",
          "romanization": "khomun",
          "english": "information",
          "german": "Information, Daten",
          "example_thai": "ข้อมูลฝุ่น",
          "example_english": "dust information",
          "example_german": "Informationen über Staub",
          "example_romanization": "khomun fun"
        },
        {
          "thai": "กัน",
          "romanization": "kan",
          "english": "to prevent",
          "german": "verhindern, vorbeugen",
          "example_thai": "กันฝุ่น",
          "example_english": "to prevent dust",
          "example_german": "Staub verhindern",
          "example_romanization": "kan fun"
        },
        {
          "thai": "แบบ",
          "romanization": "baep",
          "english": "style, type",
          "german": "Art, Typ",
          "example_thai": "อากาศแบบไทย",
          "example_english": "Thai style weather",
          "example_german": "Thai-Art Wetter",
          "example_romanization": "akat baep thai"
        },
        {
          "thai": "ร่ม",
          "romanization": "rom",
          "english": "umbrella",
          "german": "Regenschirm",
          "example_thai": "ร่มป้องกันแดด",
          "example_english": "umbrella protects from sun",
          "example_german": "Regenschirm schützt vor der Sonne",
          "example_romanization": "rom pong kandaet"
        }
      ],
      "reading": [
        {
          "thai": "โดยทั่วไปกรุงเทพฯ เป็นเมืองที่อากาศไม่ดี แต่ก็ไม่ถึงกับแย่",
          "english": "Generally, Bangkok is a city with not good weather, but it is not to the extent of being bad",
          "german": "Im Allgemeinen ist Bangkok eine Stadt mit nicht gutem Wetter, aber es ist nicht so schlimm",
          "romanization": "doithuapai krungthep pen mueang thi akat mai di tae k mai thuengkap yae"
        },
        {
          "thai": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว",
          "english": "Thailand has three seasons: summer, rainy season, and winter",
          "german": "Thailand hat drei Jahreszeiten: Sommer, Regenzeit und Winter",
          "romanization": "prathet thai mi sam ฤดู khue ฤดูร้อน ฤดูฝน lae ฤดูหนาว"
        },
        {
          "thai": "ฤดูร้อนที่กรุงเทพฯ ร้อนมากๆ เพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง",
          "english": "In summer in Bangkok it is very hot because besides natural heat, there is also heat from the ground and tall buildings",
          "german": "Im Sommer in Bangkok ist es sehr heiß, weil neben der natürlichen Wärme auch Wärme vom Boden und von hohen Gebäuden kommt",
          "romanization": "ฤดู ronthi krungthep ron mak phera nokchak ron tam thamchati laeo yangmi khwamron chak phuentnn lae tueksung"
        },
        {
          "thai": "คนต่างชาติที่มากรุงเทพฯ ใหม่ๆ บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว",
          "english": "Some foreigners who newly come to Bangkok like hot weather because they are tired of cold weather",
          "german": "Einige Ausländer, die neu nach Bangkok kommen, mögen heißes Wetter, weil sie müde vom kalten Wetter sind",
          "romanization": "khanatangchati thima krungthep aim bangkn chop akat ron phera buea akat nao"
        },
        {
          "thai": "แต่คนที่อยู่มาหลายปีจะไม่ชอบเพราะร้อนเกินไป",
          "english": "But people who have lived here for many years do not like it because it is way too hot",
          "german": "Aber Menschen, die seit vielen Jahren hier leben, mögen es nicht, weil es viel zu heiß ist",
          "romanization": "tae khon thiyu ma lai pi cha mai chop phera ron koenpai"
        },
        {
          "thai": "ฤดูฝนที่กรุงเทพฯ ก็ร้อนเหมือนกัน และอากาศก็ชื้นมากด้วย",
          "english": "In rainy season in Bangkok it is also hot and the air is very humid",
          "german": "In der Regenzeit in Bangkok ist es auch heiß und die Luft ist sehr feucht",
          "romanization": "ฤดูฝน thi krungthep k ron emuenkan lae akat k chuen mak duai"
        },
        {
          "thai": "บางคนบอกว่าหายใจไม่สะดวก",
          "english": "Some people say breathing is not comfortable",
          "german": "Einige Menschen sagen, dass das Atmen nicht bequem ist",
          "romanization": "bangkn bo kwa aichai mai saduak"
        },
        {
          "thai": "ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น",
          "english": "In winter in Bangkok it is not really cold, the air is just a bit cool",
          "german": "Im Winter in Bangkok ist es nicht wirklich kalt, die Luft ist nur ein wenig kühl",
          "romanization": "ฤดูหนาว thi krungthep mai nao chring akat khae yen thaonan"
        },
        {
          "thai": "บางปีมีวันที่อากาศเย็นแค่สองสามวัน แต่บางปีก็เย็นสองสามสัปดาห์",
          "english": "Some years there are only a few days when the weather is cool, but some years it is cool for a few weeks",
          "german": "Manche Jahre gibt es nur ein paar Tage mit kühlem Wetter, aber manche Jahre ist es ein paar Wochen kühl",
          "romanization": "bang pi mi wanthi akat yen khae song sam wan tae bang pi k yen song sam sapda"
        }
      ],
      "structures": [
        {
          "pattern": "verb/noun + ใหม่ๆ",
          "meaning": "at early stage of doing something",
          "thai_example": "มาที่นี่ใหม่ๆ",
          "english_example": "newly came here",
          "german_example": "gerade angekommen",
          "pattern_romanization": "verb /noun + aim",
          "meaning_english": "at early stage of doing something",
          "meaning_german": "at early stage of doing something"
        },
        {
          "pattern": "adjective + เกินไป",
          "meaning": "way too adjective",
          "thai_example": "ร้อนเกินไป",
          "english_example": "way too hot",
          "german_example": "viel zu heiß",
          "pattern_romanization": "adjective + koenpai",
          "meaning_english": "way too adjective",
          "meaning_german": "way too adjective"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "ประเทศไทยมีกี่ฤดู",
            "answer": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว",
            "english": "How many seasons does Thailand have",
            "german": "Wie viele Jahreszeiten hat Thailand"
          },
          {
            "question": "ฤดูร้อนที่กรุงเทพฯ ร้อนเพราะอะไร",
            "answer": "ฤดูร้อนที่กรุงเทพฯ ร้อนเพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คนต่างชาติที่มาใหม่ๆ ชอบอากาศร้อนหรือเปล่า",
            "answer": "บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คนที่อยู่กรุงเทพฯ มาหลายปีชอบอากาศร้อนไหม",
            "answer": "ไม่ พวกเขาไม่ชอบเพราะร้อนเกินไป",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ฤดูฝนที่กรุงเทพฯ เป็นอย่างไร",
            "answer": "ฤดูฝนที่กรุงเทพฯ ร้อนและชื้นมากด้วย บางคนบอกว่าหายใจไม่สะดวก",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ฤดูหนาวที่กรุงเทพฯ หนาวจริงไหม",
            "answer": "ไม่ ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "เวลาเย็นที่กรุงเทพฯ นานเท่าไหร่",
            "answer": "บางปีมีสองสามวัน แต่บางปีมีสองสามสัปดาห์",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ฝุ่น PM 2.5 เกิดในฤดูอะไร",
            "answer": "ฝุ่น PM 2.5 เกิดในฤดูร้อนและฤดูหนาว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสชอบอากาศที่กรุงเทพฯ หรือลอนดอน",
            "answer": "คุณคริสชอบอากาศที่กรุงเทพฯ มากกว่าลอนดอน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ของที่ต้องมีสำหรับอากาศที่กรุงเทพฯ คืออะไรบ้าง",
            "answer": "ของที่ต้องมีคือร่มและหน้ากาก ไม่ต้องมีเสื้อกันหนาว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "โดยทั่วไปกรุงเทพฯ มีอากาศเป็นอย่างไร",
          "question_en": "โดยทั่วไปกรุงเทพฯ มีอากาศเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ดีมาก",
              "text_en": "ดีมาก",
              "correct": false
            },
            {
              "text_de": "ไม่ดี",
              "text_en": "ไม่ดี",
              "correct": true
            },
            {
              "text_de": "ดี",
              "text_en": "ดี",
              "correct": false
            },
            {
              "text_de": "แพ",
              "text_en": "แพ",
              "correct": false
            }
          ],
          "explanation_de": "ตามข้อความ โดยทั่วไปกรุงเทพฯ มีอากาศไม่ดี แต่ก็ไม่ถึงกับแย่",
          "explanation_en": "ตามข้อความ โดยทั่วไปกรุงเทพฯ มีอากาศไม่ดี แต่ก็ไม่ถึงกับแย่"
        },
        {
          "type": "mc",
          "question_de": "ประเทศไทยมีกี่ฤดู",
          "question_en": "ประเทศไทยมีกี่ฤดู",
          "question_romanization": "",
          "options": [
            {
              "text_de": "2 ฤดู",
              "text_en": "2 ฤดู",
              "correct": false
            },
            {
              "text_de": "3 ฤดู",
              "text_en": "3 ฤดู",
              "correct": true
            },
            {
              "text_de": "4 ฤดู",
              "text_en": "4 ฤดู",
              "correct": false
            },
            {
              "text_de": "5 ฤดู",
              "text_en": "5 ฤดู",
              "correct": false
            }
          ],
          "explanation_de": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว",
          "explanation_en": "ประเทศไทยมีสามฤดู คือ ฤดูร้อน ฤดูฝน และฤดูหนาว"
        },
        {
          "type": "mc",
          "question_de": "ทำไมฤดูร้อนที่กรุงเทพฯ ร้อนมากๆ",
          "question_en": "ทำไมฤดูร้อนที่กรุงเทพฯ ร้อนมากๆ",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เพราะตึกสูง",
              "text_en": "เพราะตึกสูง",
              "correct": false
            },
            {
              "text_de": "เพราะธรรมชาติ",
              "text_en": "เพราะธรรมชาติ",
              "correct": false
            },
            {
              "text_de": "เพราะพื้นถนนและตึกสูง",
              "text_en": "เพราะพื้นถนนและตึกสูง",
              "correct": true
            },
            {
              "text_de": "เพราะต้นไม้",
              "text_en": "เพราะต้นไม้",
              "correct": false
            }
          ],
          "explanation_de": "เพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง",
          "explanation_en": "เพราะนอกจากร้อนตามธรรมชาติแล้วยังมีความร้อนจากพื้นถนนและตึกสูง"
        },
        {
          "type": "mc",
          "question_de": "บางคนชอบอากาศร้อนเพราะอะไร",
          "question_en": "บางคนชอบอากาศร้อนเพราะอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เบื่ออากาศเย็น",
              "text_en": "เบื่ออากาศเย็น",
              "correct": false
            },
            {
              "text_de": "เบื่ออากาศหนาว",
              "text_en": "เบื่ออากาศหนาว",
              "correct": true
            },
            {
              "text_de": "ชอบแดด",
              "text_en": "ชอบแดด",
              "correct": false
            },
            {
              "text_de": "อื่นๆ",
              "text_en": "อื่นๆ",
              "correct": false
            }
          ],
          "explanation_de": "บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว",
          "explanation_en": "บางคนชอบอากาศร้อนเพราะเบื่ออากาศหนาว"
        },
        {
          "type": "mc",
          "question_de": "ฤดูฝนที่กรุงเทพฯ เป็นอย่างไร",
          "question_en": "ฤดูฝนที่กรุงเทพฯ เป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เย็น",
              "text_en": "เย็น",
              "correct": false
            },
            {
              "text_de": "แห้ง",
              "text_en": "แห้ง",
              "correct": false
            },
            {
              "text_de": "ร้อนและชื้น",
              "text_en": "ร้อนและชื้น",
              "correct": true
            },
            {
              "text_de": "สบาย",
              "text_en": "สบาย",
              "correct": false
            }
          ],
          "explanation_de": "ฤดูฝนที่กรุงเทพฯ ร้อนเหมือนกัน และอากาศก็ชื้นมากด้วย",
          "explanation_en": "ฤดูฝนที่กรุงเทพฯ ร้อนเหมือนกัน และอากาศก็ชื้นมากด้วย"
        },
        {
          "type": "mc",
          "question_de": "ฤดูหนาวที่กรุงเทพฯ จริงหรือไม่",
          "question_en": "ฤดูหนาวที่กรุงเทพฯ จริงหรือไม่",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หนาวจริง",
              "text_en": "หนาวจริง",
              "correct": false
            },
            {
              "text_de": "ไม่หนาวจริง",
              "text_en": "ไม่หนาวจริง",
              "correct": true
            },
            {
              "text_de": "หนาวมากๆ",
              "text_en": "หนาวมากๆ",
              "correct": false
            },
            {
              "text_de": "เย็นเกินไป",
              "text_en": "เย็นเกินไป",
              "correct": false
            }
          ],
          "explanation_de": "ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น",
          "explanation_en": "ฤดูหนาวที่กรุงเทพฯ ไม่หนาวจริงๆ อากาศแค่เย็นๆ เท่านั้น"
        },
        {
          "type": "mc",
          "question_de": "อากาศในฤดูหนาวเป็นอย่างไร",
          "question_en": "อากาศในฤดูหนาวเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ชื้น",
              "text_en": "ชื้น",
              "correct": false
            },
            {
              "text_de": "ร้อน",
              "text_en": "ร้อน",
              "correct": false
            },
            {
              "text_de": "แห้ง ไม่เปียก ไม่ชื้น",
              "text_en": "แห้ง ไม่เปียก ไม่ชื้น",
              "correct": true
            },
            {
              "text_de": "อื่นๆ",
              "text_en": "อื่นๆ",
              "correct": false
            }
          ],
          "explanation_de": "ระหว่างฤดูหนาวอากาศแห้ง ไม่เปียก ไม่ชื้น",
          "explanation_en": "ระหว่างฤดูหนาวอากาศแห้ง ไม่เปียก ไม่ชื้น"
        },
        {
          "type": "mc",
          "question_de": "คนกรุงเทพฯ ชอบฤดูอะไรมากที่สุด",
          "question_en": "คนกรุงเทพฯ ชอบฤดูอะไรมากที่สุด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ฤดูร้อน",
              "text_en": "ฤดูร้อน",
              "correct": false
            },
            {
              "text_de": "ฤดูฝน",
              "text_en": "ฤดูฝน",
              "correct": false
            },
            {
              "text_de": "ฤดูหนาว",
              "text_en": "ฤดูหนาว",
              "correct": true
            },
            {
              "text_de": "ไม่ชอบ",
              "text_en": "ไม่ชอบ",
              "correct": false
            }
          ],
          "explanation_de": "คนกรุงเทพฯ ชอบฤดูหนาวมาก",
          "explanation_en": "คนกรุงเทพฯ ชอบฤดูหนาวมาก"
        },
        {
          "type": "mc",
          "question_de": "ต้องดูข้อมูลจากไหนเวลามีปัญหาฝุ่น PM 2.5",
          "question_en": "ต้องดูข้อมูลจากไหนเวลามีปัญหาฝุ่น PM 2.5",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หนังสือพิมพ์",
              "text_en": "หนังสือพิมพ์",
              "correct": false
            },
            {
              "text_de": "โทรทัศน์",
              "text_en": "โทรทัศน์",
              "correct": false
            },
            {
              "text_de": "แอปพลิเคชัน",
              "text_en": "แอปพลิเคชัน",
              "correct": true
            },
            {
              "text_de": "เพื่อน",
              "text_en": "เพื่อน",
              "correct": false
            }
          ],
          "explanation_de": "คนกรุงเทพฯ ดูข้อมูลจากแอปพลิเคชัน",
          "explanation_en": "คนกรุงเทพฯ ดูข้อมูลจากแอปพลิเคชัน"
        },
        {
          "type": "mc",
          "question_de": "ถ้าไม่มีปัญหาฝุ่น PM 2.5 อากาศที่กรุงเทพฯ จะเป็นอย่างไร",
          "question_en": "ถ้าไม่มีปัญหาฝุ่น PM 2.5 อากาศที่กรุงเทพฯ จะเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "แย่มากๆ",
              "text_en": "แย่มากๆ",
              "correct": false
            },
            {
              "text_de": "ไม่แย่",
              "text_en": "ไม่แย่",
              "correct": true
            },
            {
              "text_de": "สวยมาก",
              "text_en": "สวยมาก",
              "correct": false
            },
            {
              "text_de": "ปลอดภัย",
              "text_en": "ปลอดภัย",
              "correct": false
            }
          ],
          "explanation_de": "ถ้าไม่มีปัญหาเรื่องฝุ่น PM 2.5 ผมคิดว่าอากาศที่กรุงเทพฯ ไม่แย่",
          "explanation_en": "ถ้าไม่มีปัญหาเรื่องฝุ่น PM 2.5 ผมคิดว่าอากาศที่กรุงเทพฯ ไม่แย่"
        }
      ],
      "id": 17,
      "thai_title": "อากาศที่กรุงเทพฯ",
      "german_title": "Wetter in Bangkok",
      "english_title": "Weather in Bangkok",
      "emoji": "☀️",
      "thai_title_romanization": "a-kat thi krung thep"
    },
    {
      "vocabulary": [
        {
          "thai": "อย่างหนึ่ง",
          "romanization": "yangnueng",
          "english": "a kind of",
          "german": "eine Art von",
          "example_thai": "บริการอย่างหนึ่งที่ดี",
          "example_english": "one kind of good service",
          "example_german": "eine Art guter Service",
          "example_romanization": "brikan yangnueng thi di"
        },
        {
          "thai": "ทำฟัน",
          "romanization": "thamfan",
          "english": "dental treatment",
          "german": "Zahnbehandlung",
          "example_thai": "ไปทำฟันที่โรงพยาบาล",
          "example_english": "go for dental treatment at the hospital",
          "example_german": "zur Zahnbehandlung ins Krankenhaus gehen",
          "example_romanization": "pai thamfan thi rongpyaban"
        },
        {
          "thai": "ทันตแพทย์",
          "romanization": "thantphaet",
          "english": "a dentist (formal)",
          "german": "Zahnarzt (formell)",
          "example_thai": "ทันตแพทย์ของผม",
          "example_english": "my dentist",
          "example_german": "mein Zahnarzt",
          "example_romanization": "thantphaet khong phom"
        },
        {
          "thai": "หมอฟัน",
          "romanization": "mofan",
          "english": "a dentist",
          "german": "Zahnarzt",
          "example_thai": "หมอฟันที่นี่ดี",
          "example_english": "The dentist here is good",
          "example_german": "Der Zahnarzt hier ist gut",
          "example_romanization": "mofan thini di"
        },
        {
          "thai": "น่าประทับใจ",
          "romanization": "naprathapchai",
          "english": "impressive",
          "german": "beeindruckend",
          "example_thai": "มันน่าประทับใจมาก",
          "example_english": "It is very impressive",
          "example_german": "Es ist sehr beeindruckend",
          "example_romanization": "man naprathapchai mak"
        },
        {
          "thai": "มือเบา",
          "romanization": "muebao",
          "english": "handle gently",
          "german": "sanfte Hand",
          "example_thai": "หมอฟันมือเบา",
          "example_english": "The dentist has a gentle hand",
          "example_german": "Der Zahnarzt hat eine sanfte Hand",
          "example_romanization": "mofan muebao"
        },
        {
          "thai": "เรียบร้อย",
          "romanization": "riaproi",
          "english": "neat, complete",
          "german": "ordentlich, fertig",
          "example_thai": "ทำเรียบร้อยแล้ว",
          "example_english": "finished neatly",
          "example_german": "ordentlich fertig",
          "example_romanization": "tham riaproi laeo"
        },
        {
          "thai": "ไม่...เลย",
          "romanization": "mai ... loei",
          "english": "not...at all",
          "german": "überhaupt nicht",
          "example_thai": "ไม่ชอบเลย",
          "example_english": "don't like at all",
          "example_german": "mag überhaupt nicht",
          "example_romanization": "mai chop loei"
        },
        {
          "thai": "เสียง",
          "romanization": "siang",
          "english": "noise, sound, voice",
          "german": "Geräusch, Stimme",
          "example_thai": "เสียงเครื่องมือ",
          "example_english": "sound of equipment",
          "example_german": "Geräusch des Werkzeugs",
          "example_romanization": "siang kheruengmue"
        },
        {
          "thai": "เครื่องมือ",
          "romanization": "kheruengmue",
          "english": "tool, instrument, equipment",
          "german": "Werkzeug, Instrument",
          "example_thai": "เครื่องมือทันตแพทย์",
          "example_english": "dental instruments",
          "example_german": "Zahnarztinstrumente",
          "example_romanization": "kheruengmue thantphaet"
        },
        {
          "thai": "ครั้งหนึ่ง",
          "romanization": "khrangnueng",
          "english": "once (experience)",
          "german": "einmal (Erfahrung)",
          "example_thai": "มีครั้งหนึ่งที่ผมไปหาหมอ",
          "example_english": "There was once when I went to the doctor",
          "example_german": "Es gab einmal, als ich zum Arzt ging",
          "example_romanization": "mi khrangnueng thi phom pahai mo"
        },
        {
          "thai": "จำเป็นต้อง",
          "romanization": "champentong",
          "english": "have to",
          "german": "müssen",
          "example_thai": "จำเป็นต้องไปหาหมอ",
          "example_english": "have to go to the doctor",
          "example_german": "muss zum Arzt gehen",
          "example_romanization": "champentong pahai mo"
        },
        {
          "thai": "แห่งหนึ่ง",
          "romanization": "aeng nueng",
          "english": "a place",
          "german": "ein Ort",
          "example_thai": "คลินิกแห่งหนึ่ง",
          "example_english": "a clinic",
          "example_german": "eine Klinik",
          "example_romanization": "khlinik aeng nueng"
        },
        {
          "thai": "ขูดหินปูน",
          "romanization": "khut inpun",
          "english": "teeth cleaning",
          "german": "Zahnsteinentfernung",
          "example_thai": "ขูดหินปูนจากฟัน",
          "example_english": "clean tartar from teeth",
          "example_german": "Zahnstein von Zähnen entfernen",
          "example_romanization": "khut inpun chak fan"
        },
        {
          "thai": "อุดฟัน",
          "romanization": "utfan",
          "english": "tooth filling",
          "german": "Zahnfüllung",
          "example_thai": "ต้องอุดฟัน",
          "example_english": "need tooth filling",
          "example_german": "Zahnfüllung erforderlich",
          "example_romanization": "tong utfan"
        },
        {
          "thai": "รักษารากฟัน",
          "romanization": "raksa rakfan",
          "english": "root canal treatment",
          "german": "Wurzelbehandlung",
          "example_thai": "รักษารากฟันอเมริกา",
          "example_english": "American root canal treatment",
          "example_german": "Amerikanische Wurzelbehandlung",
          "example_romanization": "raksa rakfan merika"
        },
        {
          "thai": "คุณภาพ",
          "romanization": "khunphap",
          "english": "quality",
          "german": "Qualität",
          "example_thai": "คุณภาพดี",
          "example_english": "good quality",
          "example_german": "gute Qualität",
          "example_romanization": "khunphapdi"
        },
        {
          "thai": "ค่า",
          "romanization": "kha",
          "english": "cost or bill of",
          "german": "Kosten für",
          "example_thai": "ค่าทำฟัน",
          "example_english": "cost of dental treatment",
          "example_german": "Kosten für Zahnbehandlung",
          "example_romanization": "kha thamfan"
        },
        {
          "thai": "นวด",
          "romanization": "nuat",
          "english": "to massage",
          "german": "Massage",
          "example_thai": "ไปนวด",
          "example_english": "go for a massage",
          "example_german": "Massage erhalten",
          "example_romanization": "pai nuat"
        },
        {
          "thai": "ต่างๆ",
          "romanization": "tang",
          "english": "various",
          "german": "verschiedene",
          "example_thai": "บริการต่างๆ",
          "example_english": "various services",
          "example_german": "verschiedene Dienstleistungen",
          "example_romanization": "brikan tang"
        }
      ],
      "reading": [
        {
          "thai": "การบริการอย่างหนึ่งที่ประเทศไทยที่พวกเราชอบมากคือการทำฟัน",
          "english": "One service that we like very much in Thailand is dental treatment",
          "german": "Eine Dienstleistung, die wir in Thailand sehr gerne haben, ist die Zahnbehandlung",
          "romanization": "kan brikan yangnueng thi prathet thai thi phuakrao chop mak khue kan thamfan"
        },
        {
          "thai": "เพื่อนๆ ชาวอังกฤษของผมที่เคยอยู่ประเทศไทยบอกว่าการไปหาทันตแพทย์หรือหมอฟันที่กรุงเทพฯ เป็นเรื่องที่น่าประทับใจมาก",
          "english": "My English friends who have lived in Thailand say that going to a dentist in Bangkok is very impressive",
          "german": "Meine englischen Freunde, die in Thailand gelebt haben, sagen, dass der Besuch bei einem Zahnarzt in Bangkok sehr beeindruckend ist",
          "romanization": "phuean chao angkrit khong phom thi khoei yu prathet thai bok wakan pahai thantphaet rue mofan thi krungthep penrueang thi naprathapchai mak"
        },
        {
          "thai": "เพราะหมอฟันที่นี่เก่งมาก ส่วนใหญ่มือเบาทำให้เราไม่เจ็บเวลาทำฟัน",
          "english": "Because the dentists here are very skilled, most have a gentle hand so we don't feel pain during treatment",
          "german": "Weil die Zahnärzte hier sehr geschickt sind und die meisten eine sanfte Hand haben, so dass wir während der Behandlung keine Schmerzen empfinden",
          "romanization": "phera mofan thini keng mak suanhain muebao thamhai rao mai chep wela thamfan"
        },
        {
          "thai": "ทำทุกอย่างสวยและเรียบร้อย ที่สำคัญคือราคาทำฟันไม่แพง",
          "english": "They do everything neatly and the most important is that the cost of dental treatment is not expensive",
          "german": "Sie machen alles ordentlich und das Wichtigste ist, dass die Zahnbehandlung nicht teuer ist",
          "romanization": "tham thukoing suai lae riaproi thi samkhan khue rakha thamfan mai phaeng"
        },
        {
          "thai": "ผมเป็นคนที่ไม่ชอบไปหาหมอฟันเลย ผมไม่ชอบเสียงของเครื่องมือ",
          "english": "I am a person who doesn't like going to a dentist at all. I don't like the sound of instruments",
          "german": "Ich bin eine Person, die absolut nicht gerne zum Zahnarzt geht. Ich mag das Geräusch von Instrumenten nicht",
          "romanization": "phom pen khon thi mai chop pahai mofan loei phom mai chop siang khong kheruengmue"
        },
        {
          "thai": "ไม่ชอบกลิ่นของคลินิกหรือโรงพยาบาล",
          "english": "don't like the smell of clinics or hospitals",
          "german": "mag den Geruch von Kliniken oder Krankenhäusern nicht",
          "romanization": "mai chop klin khong khlinik rue rongpyaban"
        },
        {
          "thai": "แต่มีครั้งหนึ่งที่ผมจำเป็นต้องไปหาหมอฟันที่คลินิกแห่งหนึ่งในกรุงเทพฯ",
          "english": "But there was once when I had to go to a dentist at a clinic in Bangkok",
          "german": "Aber es gab einmal, als ich zu einem Zahnarzt in einer Klinik in Bangkok gehen musste",
          "romanization": "tae mi khrangnueng thi phom champentong pahai mofan thi khlinik aeng nueng nai krungthep"
        },
        {
          "thai": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน",
          "english": "The dentist cleaned tartar, filled a tooth, and did root canal treatment",
          "german": "Der Zahnarzt entfernte Zahnstein, füllte einen Zahn und führte eine Wurzelbehandlung durch",
          "romanization": "mo khut inpun utfan lae raksa rakfan"
        },
        {
          "thai": "ผมเชื่อแล้วว่าเพื่อนๆ ผมพูดถูก คุณภาพของการทำฟันที่นี่ดีมากและราคาไม่แพง",
          "english": "I believe now that my friends were right. The quality of dental treatment here is very good and the price is not expensive",
          "german": "Ich glaube jetzt, dass meine Freunde recht hatten. Die Qualität der Zahnbehandlung hier ist sehr gut und der Preis ist nicht teuer",
          "romanization": "phom chuea laeo wa phuean phom phut thuk khunphap khong kan thamfan thini dimak lae rakha mai phaeng"
        },
        {
          "thai": "ผมได้ยินมาว่ามีบริษัททัวร์ของบางประเทศทำธุรกิจพานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ",
          "english": "I heard that there are tour companies from some countries that bring tourists to get dental treatment in Bangkok",
          "german": "Ich hörte, dass es Reisebüros aus einigen Ländern gibt, die Touristen zur Zahnbehandlung nach Bangkok bringen",
          "romanization": "phom dain ma wa mi brisat thua khong bang prathet tham thunkit pha nakthongthiao ma thamfan thi krungthep"
        }
      ],
      "structures": [
        {
          "pattern": "ไม่ verb/adjective + เลย",
          "meaning": "not verb/adjective at all",
          "thai_example": "ไม่ชอบเลย",
          "english_example": "don't like at all",
          "german_example": "mag überhaupt nicht",
          "pattern_romanization": "mai verb /adjective + loei",
          "meaning_english": "not verb/adjective at all",
          "meaning_german": "not verb/adjective at all"
        },
        {
          "pattern": "Subject + จำเป็นต้อง + verb/adjective",
          "meaning": "Subject have to + verb/adjective",
          "thai_example": "จำเป็นต้องไปหาหมอ",
          "english_example": "have to go to the doctor",
          "german_example": "muss zum Arzt gehen",
          "pattern_romanization": "Subject + champentong + verb /adjective",
          "meaning_english": "Subject have to + verb/adjective",
          "meaning_german": "Subject have to + verb/adjective"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "คุณคริสและเพื่อนๆ ชอบบริการอะไรในประเทศไทย",
            "answer": "คุณคริสและเพื่อนๆ ชอบบริการทำฟันในประเทศไทย",
            "english": "What services do Chris and friends prefer in Thailand",
            "german": "Welche Dienstleistungen mögen Chris und seine Freunde in Thailand"
          },
          {
            "question": "ทำไมเพื่อนชาวอังกฤษบอกว่าการไปหาหมอฟันที่กรุงเทพฯ น่าประทับใจ",
            "answer": "เพราะหมอฟันที่นี่เก่งมาก มือเบา ทำให้ไม่เจ็บ และราคาไม่แพง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ทำไมคุณคริสไม่ชอบไปหาหมอฟัน",
            "answer": "เพราะเขาไม่ชอบเสียงของเครื่องมือและกลิ่นของคลินิก",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสไปหาหมอฟันที่โรงพยาบาลหรือคลินิก",
            "answer": "คุณคริสไปหาหมอฟันที่คลินิก",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "หมอฟันทำอะไรกับฟันของคุณคริสบ้าง",
            "answer": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสคิดว่าเพื่อนของเขาพูดถูกไหม",
            "answer": "ใช่ คุณคริสเชื่อว่าเพื่อนของเขาพูดถูก",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ธุรกิจทัวร์ทำฟันให้บริการอะไรบ้าง",
            "answer": "ธุรกิจทัวร์พานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ ทำฟันเสร็จแล้วก็ไปเที่ยว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณเอ็มมาคิดอย่างไรกับการบริการต่างๆ ที่ประเทศไทย",
            "answer": "คุณเอ็มมาบอกว่าที่ประเทศไทยมีบริการหลายอย่างที่ดีมากๆ และไม่แพง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คนไทยชอบไปหาหมอฟันไหม",
            "answer": "ไม่ มากขึ้นคนไทยคิดว่าค่าทำฟันแพงอยู่มาก ถ้าไม่จำเป็นก็ไม่อยากไป",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ค่าทำฟันที่ประเทศไทยเปรียบเทียบกับที่อังกฤษอย่างไร",
            "answer": "ค่าทำฟันที่ประเทศไทยถูกกว่าที่อังกฤษและอเมริกา",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "บริการที่ประเทศไทยที่คุณคริสชอบมากคืออะไร",
          "question_en": "บริการที่ประเทศไทยที่คุณคริสชอบมากคืออะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ตัดผม",
              "text_en": "ตัดผม",
              "correct": false
            },
            {
              "text_de": "ทำฟัน",
              "text_en": "ทำฟัน",
              "correct": true
            },
            {
              "text_de": "นวด",
              "text_en": "นวด",
              "correct": false
            },
            {
              "text_de": "อื่นๆ",
              "text_en": "อื่นๆ",
              "correct": false
            }
          ],
          "explanation_de": "การบริการอย่างหนึ่งที่ประเทศไทยที่พวกเราชอบมากคือการทำฟัน",
          "explanation_en": "การบริการอย่างหนึ่งที่ประเทศไทยที่พวกเราชอบมากคือการทำฟัน"
        },
        {
          "type": "mc",
          "question_de": "ทันตแพทย์ที่กรุงเทพฯ เป็นอย่างไร",
          "question_en": "ทันตแพทย์ที่กรุงเทพฯ เป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่ดี",
              "text_en": "ไม่ดี",
              "correct": false
            },
            {
              "text_de": "ธรรมดา",
              "text_en": "ธรรมดา",
              "correct": false
            },
            {
              "text_de": "เก่ง",
              "text_en": "เก่ง",
              "correct": true
            },
            {
              "text_de": "แพง",
              "text_en": "แพง",
              "correct": false
            }
          ],
          "explanation_de": "หมอฟันที่นี่เก่งมาก",
          "explanation_en": "หมอฟันที่นี่เก่งมาก"
        },
        {
          "type": "mc",
          "question_de": "เพราะอะไรคนไม่เจ็บเวลาทำฟันที่กรุงเทพฯ",
          "question_en": "เพราะอะไรคนไม่เจ็บเวลาทำฟันที่กรุงเทพฯ",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่ใช้เครื่องมือ",
              "text_en": "ไม่ใช้เครื่องมือ",
              "correct": false
            },
            {
              "text_de": "มือเบา",
              "text_en": "มือเบา",
              "correct": true
            },
            {
              "text_de": "ใช้ยาตัวเก่ง",
              "text_en": "ใช้ยาตัวเก่ง",
              "correct": false
            },
            {
              "text_de": "โรคหายไม่ได้",
              "text_en": "โรคหายไม่ได้",
              "correct": false
            }
          ],
          "explanation_de": "ส่วนใหญ่มือเบาทำให้เราไม่เจ็บเวลาทำฟัน",
          "explanation_en": "ส่วนใหญ่มือเบาทำให้เราไม่เจ็บเวลาทำฟัน"
        },
        {
          "type": "mc",
          "question_de": "ค่าทำฟันที่ประเทศไทยเป็นอย่างไร",
          "question_en": "ค่าทำฟันที่ประเทศไทยเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "แพง",
              "text_en": "แพง",
              "correct": false
            },
            {
              "text_de": "ไม่แพง",
              "text_en": "ไม่แพง",
              "correct": true
            },
            {
              "text_de": "แพงมาก",
              "text_en": "แพงมาก",
              "correct": false
            },
            {
              "text_de": "ฟรี",
              "text_en": "ฟรี",
              "correct": false
            }
          ],
          "explanation_de": "ราคาทำฟันไม่แพงถ้าเปรียบเทียบกับที่อังกฤษ",
          "explanation_en": "ราคาทำฟันไม่แพงถ้าเปรียบเทียบกับที่อังกฤษ"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสไม่ชอบไปหาหมอฟันเพราะอะไร",
          "question_en": "คุณคริสไม่ชอบไปหาหมอฟันเพราะอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "หมอไม่เก่ง",
              "text_en": "หมอไม่เก่ง",
              "correct": false
            },
            {
              "text_de": "เสียงเครื่องมือ",
              "text_en": "เสียงเครื่องมือ",
              "correct": true
            },
            {
              "text_de": "แพง",
              "text_en": "แพง",
              "correct": false
            },
            {
              "text_de": "เจ็บมาก",
              "text_en": "เจ็บมาก",
              "correct": false
            }
          ],
          "explanation_de": "ผมไม่ชอบเสียงของเครื่องมือ",
          "explanation_en": "ผมไม่ชอบเสียงของเครื่องมือ"
        },
        {
          "type": "mc",
          "question_de": "หมอทำอะไรกับฟันของคุณคริส",
          "question_en": "หมอทำอะไรกับฟันของคุณคริส",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ถอน",
              "text_en": "ถอน",
              "correct": false
            },
            {
              "text_de": "ขูดหินปูนและอุด",
              "text_en": "ขูดหินปูนและอุด",
              "correct": true
            },
            {
              "text_de": "ลาด",
              "text_en": "ลาด",
              "correct": false
            },
            {
              "text_de": "อื่นๆ",
              "text_en": "อื่นๆ",
              "correct": false
            }
          ],
          "explanation_de": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน",
          "explanation_en": "หมอขูดหินปูน อุดฟัน และรักษารากฟัน"
        },
        {
          "type": "mc",
          "question_de": "บริษัททัวร์ทำธุรกิจอะไร",
          "question_en": "บริษัททัวร์ทำธุรกิจอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ทำฟัน",
              "text_en": "ทำฟัน",
              "correct": false
            },
            {
              "text_de": "นวด",
              "text_en": "นวด",
              "correct": false
            },
            {
              "text_de": "พานักท่องเที่ยวมาทำฟัน",
              "text_en": "พานักท่องเที่ยวมาทำฟัน",
              "correct": true
            },
            {
              "text_de": "เที่ยว",
              "text_en": "เที่ยว",
              "correct": false
            }
          ],
          "explanation_de": "บริษัททัวร์ทำธุรกิจพานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ",
          "explanation_en": "บริษัททัวร์ทำธุรกิจพานักท่องเที่ยวมาทำฟันที่กรุงเทพฯ"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาบอกว่ามีบริการอะไรบ้างที่ประเทศไทย",
          "question_en": "คุณเอ็มมาบอกว่ามีบริการอะไรบ้างที่ประเทศไทย",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะทำฟัน",
              "text_en": "เฉพาะทำฟัน",
              "correct": false
            },
            {
              "text_de": "ทำผม นวด ทำฟัน",
              "text_en": "ทำผม นวด ทำฟัน",
              "correct": true
            },
            {
              "text_de": "เฉพาะนวด",
              "text_en": "เฉพาะนวด",
              "correct": false
            },
            {
              "text_de": "ไม่มี",
              "text_en": "ไม่มี",
              "correct": false
            }
          ],
          "explanation_de": "คุณเอ็มมาบอกว่ามีบริการทำผม การนวด ทำฟัน",
          "explanation_en": "คุณเอ็มมาบอกว่ามีบริการทำผม การนวด ทำฟัน"
        },
        {
          "type": "mc",
          "question_de": "คนไทยจริงๆ รู้สึกว่าค่าทำฟันเป็นอย่างไร",
          "question_en": "คนไทยจริงๆ รู้สึกว่าค่าทำฟันเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ถูก",
              "text_en": "ถูก",
              "correct": false
            },
            {
              "text_de": "แพง",
              "text_en": "แพง",
              "correct": true
            },
            {
              "text_de": "ฟรี",
              "text_en": "ฟรี",
              "correct": false
            },
            {
              "text_de": "ปลอดภัย",
              "text_en": "ปลอดภัย",
              "correct": false
            }
          ],
          "explanation_de": "คนไทยรู้สึกว่าค่าทำฟันยังแพงอยู่มาก",
          "explanation_en": "คนไทยรู้สึกว่าค่าทำฟันยังแพงอยู่มาก"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสเชื่อเพื่อนของเขาว่า",
          "question_en": "คุณคริสเชื่อเพื่อนของเขาว่า",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ทำฟันไม่ดี",
              "text_en": "ทำฟันไม่ดี",
              "correct": false
            },
            {
              "text_de": "ค่าแพง",
              "text_en": "ค่าแพง",
              "correct": false
            },
            {
              "text_de": "คุณภาพดีและราคาไม่แพง",
              "text_en": "คุณภาพดีและราคาไม่แพง",
              "correct": true
            },
            {
              "text_de": "อื่นๆ",
              "text_en": "อื่นๆ",
              "correct": false
            }
          ],
          "explanation_de": "คุณภาพของการทำฟันที่นี่ดีมากและราคาไม่แพง",
          "explanation_en": "คุณภาพของการทำฟันที่นี่ดีมากและราคาไม่แพง"
        }
      ],
      "id": 18,
      "thai_title": "การทำฟัน",
      "german_title": "Zahnarzt",
      "english_title": "Dental Treatment",
      "emoji": "🦷",
      "thai_title_romanization": "kan tham fan"
    },
    {
      "vocabulary": [
        {
          "thai": "สัญญา",
          "romanization": "sanya",
          "english": "a contract",
          "german": "Vertrag",
          "example_thai": "สัญญาทำงาน",
          "example_english": "work contract",
          "example_german": "Arbeitsvertrag",
          "example_romanization": "sanya thamngan"
        },
        {
          "thai": "ครึ่ง",
          "romanization": "khrueng",
          "english": "half",
          "german": "Hälfte",
          "example_thai": "อีกครึ่งปี",
          "example_english": "another half year",
          "example_german": "noch ein halbes Jahr",
          "example_romanization": "ik khrueng pi"
        },
        {
          "thai": "ครบสัญญา",
          "romanization": "khrop sanya",
          "english": "end of contract",
          "german": "Vertragsende",
          "example_thai": "ครบสัญญา 4 ปี",
          "example_english": "contract complete 4 years",
          "example_german": "Vertrag endet nach 4 Jahren",
          "example_romanization": "khrop sanya 4 pi"
        },
        {
          "thai": "ตัดสินใจ",
          "romanization": "tatsinchai",
          "english": "to decide",
          "german": "sich entscheiden",
          "example_thai": "ตัดสินใจไปญี่ปุ่น",
          "example_english": "decide to go to Japan",
          "example_german": "entschließen, nach Japan zu gehen",
          "example_romanization": "tatsinchai pai yipun"
        },
        {
          "thai": "ต่อสัญญา",
          "romanization": "tosanya",
          "english": "to renew contract",
          "german": "Vertrag verlängern",
          "example_thai": "ต่อสัญญาอีก 2 ปี",
          "example_english": "renew contract for 2 more years",
          "example_german": "Vertrag um 2 weitere Jahre verlängern",
          "example_romanization": "tosanya ik 2 pi"
        },
        {
          "thai": "ย้าย",
          "romanization": "yai",
          "english": "to move, to relocate",
          "german": "umziehen",
          "example_thai": "ย้ายไปญี่ปุ่น",
          "example_english": "move to Japan",
          "example_german": "nach Japan umziehen",
          "example_romanization": "yai pai yipun"
        },
        {
          "thai": "เซ็นสัญญา",
          "romanization": "sensanya",
          "english": "to sign contract",
          "german": "Vertrag unterschreiben",
          "example_thai": "เซ็นสัญญาเรียบร้อยแล้ว",
          "example_english": "contract signed completed already",
          "example_german": "Vertrag ist unterzeichnet",
          "example_romanization": "sensanya riaproi laeo"
        },
        {
          "thai": "เตรียมตัว",
          "romanization": "terimtua",
          "english": "to prepare",
          "german": "sich vorbereiten",
          "example_thai": "เตรียมตัวสำหรับการย้าย",
          "example_english": "prepare for moving",
          "example_german": "sich auf den Umzug vorbereiten",
          "example_romanization": "terimtua samrap kan yai"
        },
        {
          "thai": "จัดการ",
          "romanization": "chatkan",
          "english": "to manage",
          "german": "verwalten, organisieren",
          "example_thai": "จัดการงาน",
          "example_english": "manage work",
          "example_german": "Arbeit organisieren",
          "example_romanization": "chat kanngan"
        },
        {
          "thai": "ข้าวของ",
          "romanization": "khaokhong",
          "english": "stuff",
          "german": "Sachen, Habseligkeiten",
          "example_thai": "ข้าวของต่างๆ",
          "example_english": "various things",
          "example_german": "verschiedene Sachen",
          "example_romanization": "khaokhong tang"
        },
        {
          "thai": "เริ่ม",
          "romanization": "roem",
          "english": "to start",
          "german": "anfangen",
          "example_thai": "เริ่มเก็บของ",
          "example_english": "start packing",
          "example_german": "anfangen zu packen",
          "example_romanization": "roem kep khong"
        },
        {
          "thai": "เก็บของ",
          "romanization": "kep khong",
          "english": "to pack",
          "german": "einpacken",
          "example_thai": "เก็บของเรียบร้อย",
          "example_english": "packing complete",
          "example_german": "Verpackung ist komplett",
          "example_romanization": "kep khong riaproi"
        },
        {
          "thai": "บริจาค",
          "romanization": "brichak",
          "english": "to donate",
          "german": "spenden",
          "example_thai": "บริจาคกับเพื่อนไทย",
          "example_english": "donate to Thai friend",
          "example_german": "an Thai-Freund spenden",
          "example_romanization": "brichak kap phuean thai"
        },
        {
          "thai": "ประสบการณ์",
          "romanization": "pratpkan",
          "english": "experience",
          "german": "Erfahrung",
          "example_thai": "ประสบการณ์ย้ายประเทศ",
          "example_english": "experience moving countries",
          "example_german": "Erfahrung mit Umzug in andere Länder",
          "example_romanization": "pratpkan yai prathet"
        },
        {
          "thai": "ครั้ง",
          "romanization": "khrang",
          "english": "time(s)",
          "german": "Mal, erstes Mal",
          "example_thai": "ครั้งแรก",
          "example_english": "first time",
          "example_german": "das erste Mal",
          "example_romanization": "khrangraek"
        },
        {
          "thai": "ที่แน่ๆ",
          "romanization": "thi nae",
          "english": "surely, for sure",
          "german": "sicherlich",
          "example_thai": "ที่แน่ๆ คือเหนื่อย",
          "example_english": "for sure is tiring",
          "example_german": "sicherlich ist es anstrengend",
          "example_romanization": "thi nae khue enue"
        },
        {
          "thai": "แผน",
          "romanization": "phaen",
          "english": "a plan",
          "german": "Plan",
          "example_thai": "วางแผนการเดินทาง",
          "example_english": "plan the travel",
          "example_german": "eine Reise planen",
          "example_romanization": "wangphaenkan doenthang"
        },
        {
          "thai": "อีกครั้ง",
          "romanization": "ikkrang",
          "english": "again",
          "german": "nochmal",
          "example_thai": "อยู่ด้วยกันอีกครั้ง",
          "example_english": "live together again",
          "example_german": "nochmal zusammen leben",
          "example_romanization": "yu duaikan ikkrang"
        },
        {
          "thai": "เอเจนต์",
          "romanization": "e chen",
          "english": "agent",
          "german": "Agent",
          "example_thai": "เอเจนต์ย้ายบ้าน",
          "example_english": "moving agent",
          "example_german": "Umzugsagent",
          "example_romanization": "e chen yaiban"
        }
      ],
      "reading": [
        {
          "thai": "ผมมีสัญญาทำงานที่บริษัทนี้สี่ปี",
          "english": "I have a work contract with this company for four years",
          "german": "Ich habe einen Arbeitsvertrag mit diesem Unternehmen für vier Jahre",
          "romanization": "phom mi sanya thamngan thi brisat ni si pi"
        },
        {
          "thai": "อีกครึ่งปีผมจะทำงานครบสัญญา",
          "english": "In another half year I will complete my contract",
          "german": "In noch einem halben Jahr werde ich meinen Vertrag erfüllen",
          "romanization": "ik khrueng pi phom cha thamngan khrop sanya"
        },
        {
          "thai": "ผมตัดสินใจแล้วว่าจะไม่ต่อสัญญาและจะย้ายไปทำงานที่ญี่ปุ่น",
          "english": "I have decided that I won't renew my contract and will move to work in Japan",
          "german": "Ich habe mich entschieden, meinen Vertrag nicht zu verlängern und nach Japan umzuziehen",
          "romanization": "phom tatsinchai laeo wa cha mai tosanya lae cha yai pai thamngan thi yipun"
        },
        {
          "thai": "ผมเซ็นสัญญากับบริษัทที่ญี่ปุ่นเรียบร้อยแล้ว",
          "english": "I have already signed a contract with a company in Japan",
          "german": "Ich habe bereits einen Vertrag mit einem Unternehmen in Japan unterzeichnet",
          "romanization": "phom sensanya kap brisat thi yipun riaproi laeo"
        },
        {
          "thai": "ตอนนี้เป็นช่วงเวลาที่ผมเตรียมตัวจัดการงานทุกอย่างที่นี่ให้เรียบร้อย",
          "english": "Now is the time that I am preparing to manage all my work here to complete",
          "german": "Jetzt ist es an der Zeit, dass ich mich vorbereite, um alle meine Arbeiten hier zu ordnen",
          "romanization": "tonni pen chuangwela thi phom terimtua chat kanngan thukoing thini hai riaproi"
        },
        {
          "thai": "คุณเอ็มมาก็จัดการเกี่ยวกับงานของเขาและวางแผนเกี่ยวกับการย้าย",
          "english": "Emma also manages her work and plans about the moving",
          "german": "Emma organisiert auch ihre Arbeit und plant den Umzug",
          "romanization": "khun em ma k chatkan kiaokap ngan khong khao lae wangphaen kiaokap kan yai"
        },
        {
          "thai": "ข้าวของต่างๆ เขาเริ่มเก็บของและคุยกับบริษัทเอเจนต์ที่จะดูแลเกี่ยวกับการย้ายบ้านไปต่างประเทศ",
          "english": "As for things, he started packing and talked with a moving company about moving the house abroad",
          "german": "Was die Sachen angeht, fing er an zu packen und sprach mit einem Umzugsunternehmen über den Umzug ins Ausland",
          "romanization": "khaokhong tang khao roem kep khong lae khui kap brisat e chen thicha dulae kiaokap kan yaiban pai tangprathet"
        },
        {
          "thai": "ของบางอย่างจะส่งกลับไปที่อังกฤษ บางอย่างจะส่งไปที่ญี่ปุ่น",
          "english": "Some things will be sent back to England, some will be sent to Japan",
          "german": "Einige Dinge werden nach England geschickt, andere nach Japan",
          "romanization": "khong bangoing cha sangaklap pai thi angkrit bangoing cha song pai thi yipun"
        },
        {
          "thai": "และบางอย่างเราจะให้เพื่อนคนไทยที่นี่หรือไม่ก็บริจาค",
          "english": "and some things we will give to Thai friends here or donate",
          "german": "und einige Dinge geben wir Thai-Freunden oder spenden sie",
          "romanization": "lae bangoing rao cha hai phuean khanathai thini ruemai k brichak"
        }
      ],
      "structures": [
        {
          "pattern": "ครั้ง + ordinal/number",
          "meaning": "time(s), first time/second time, etc",
          "thai_example": "ครั้งแรก ครั้งที่สอง ครั้งที่สาม",
          "english_example": "first time, second time, third time",
          "german_example": "erstes Mal, zweites Mal, drittes Mal",
          "pattern_romanization": "khrang + ordinal /number",
          "meaning_english": "time(s), first time/second time, etc",
          "meaning_german": "time(s), first time/second time, etc"
        }
      ],
      "exercises": {
        "conversation": [
          {
            "question": "คุณคริสมีสัญญาทำงานกี่ปี",
            "answer": "คุณคริสมีสัญญาทำงานสี่ปี",
            "english": "How many years is Chris's work contract",
            "german": "Wie lange ist Christi Arbeitsvertrag"
          },
          {
            "question": "คุณคริสจะทำงานครบสัญญาเมื่อไหร่",
            "answer": "อีกครึ่งปีคุณคริสจะทำงานครบสัญญา",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสจะต่อสัญญาไหม",
            "answer": "ไม่ คุณคริสตัดสินใจไม่ต่อสัญญา",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสจะย้ายไปทำงานที่ไหน",
            "answer": "คุณคริสจะย้ายไปทำงานที่ญี่ปุ่น",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสเซ็นสัญญากับบริษัทญี่ปุ่นแล้วไหม",
            "answer": "ใช่ คุณคริสเซ็นสัญญากับบริษัทญี่ปุ่นเรียบร้อยแล้ว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ช่วงนี้คุณคริสกับคุณเอ็มมาเตรียมตัวอย่างไร",
            "answer": "คุณคริสเตรียมตัวจัดการงาน คุณเอ็มมาจัดการงานและวางแผนเกี่ยวกับการย้าย",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสกับคุณเอ็มมาจะทำอย่างไรกับข้าวของต่างๆ",
            "answer": "เขาจะเก็บของ ส่งกลับไปอังกฤษ ส่งไปญี่ปุ่น หรือให้เพื่อนไทยกับบริจาค",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสมีประสบการณ์ย้ายประเทศมากี่ครั้ง",
            "answer": "คุณคริสมีประสบการณ์ย้ายประเทศสามครั้ง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสย้ายจากที่ไหนไปที่ไหนบ้าง",
            "answer": "ครั้งแรกจากอังกฤษไปสิงคโปร์ ครั้งที่สองจากสิงคโปร์มาประเทศไทย ครั้งนี้ไปญี่ปุ่น",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณเอ็มมาวางแผนจะทำอะไรที่ญี่ปุ่น",
            "answer": "คุณเอ็มมาวางแผนจะเขียนสารคดีเกี่ยวกับวัดที่ญี่ปุ่น",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "คุณคริสมีสัญญาทำงานกี่ปี",
          "question_en": "คุณคริสมีสัญญาทำงานกี่ปี",
          "question_romanization": "",
          "options": [
            {
              "text_de": "2 ปี",
              "text_en": "2 ปี",
              "correct": false
            },
            {
              "text_de": "3 ปี",
              "text_en": "3 ปี",
              "correct": false
            },
            {
              "text_de": "4 ปี",
              "text_en": "4 ปี",
              "correct": true
            },
            {
              "text_de": "5 ปี",
              "text_en": "5 ปี",
              "correct": false
            }
          ],
          "explanation_de": "ผมมีสัญญาทำงานที่บริษัทนี้สี่ปี",
          "explanation_en": "ผมมีสัญญาทำงานที่บริษัทนี้สี่ปี"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสจะท่อสัญญาไหม",
          "question_en": "คุณคริสจะท่อสัญญาไหม",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ใช่",
              "text_en": "ใช่",
              "correct": false
            },
            {
              "text_de": "ไม่",
              "text_en": "ไม่",
              "correct": true
            },
            {
              "text_de": "ยังไม่รู้",
              "text_en": "ยังไม่รู้",
              "correct": false
            },
            {
              "text_de": "อีกครึ่งปี",
              "text_en": "อีกครึ่งปี",
              "correct": false
            }
          ],
          "explanation_de": "ผมตัดสินใจแล้วว่าจะไม่ต่อสัญญา",
          "explanation_en": "ผมตัดสินใจแล้วว่าจะไม่ต่อสัญญา"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสจะย้ายไปที่ไหน",
          "question_en": "คุณคริสจะย้ายไปที่ไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สิงคโปร์",
              "text_en": "สิงคโปร์",
              "correct": false
            },
            {
              "text_de": "ญี่ปุ่น",
              "text_en": "ญี่ปุ่น",
              "correct": true
            },
            {
              "text_de": "เกาหลี",
              "text_en": "เกาหลี",
              "correct": false
            },
            {
              "text_de": "เมืองไทย",
              "text_en": "เมืองไทย",
              "correct": false
            }
          ],
          "explanation_de": "จะย้ายไปทำงานที่ญี่ปุ่น",
          "explanation_en": "จะย้ายไปทำงานที่ญี่ปุ่น"
        },
        {
          "type": "mc",
          "question_de": "คุณเอ็มมาจะทำอย่างไร",
          "question_en": "คุณเอ็มมาจะทำอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ลาออก",
              "text_en": "ลาออก",
              "correct": false
            },
            {
              "text_de": "จัดการงานและวางแผน",
              "text_en": "จัดการงานและวางแผน",
              "correct": true
            },
            {
              "text_de": "พักผ่อน",
              "text_en": "พักผ่อน",
              "correct": false
            },
            {
              "text_de": "เรียน",
              "text_en": "เรียน",
              "correct": false
            }
          ],
          "explanation_de": "คุณเอ็มมาจัดการเกี่ยวกับงานของเขาและวางแผนเกี่ยวกับการย้าย",
          "explanation_en": "คุณเอ็มมาจัดการเกี่ยวกับงานของเขาและวางแผนเกี่ยวกับการย้าย"
        },
        {
          "type": "mc",
          "question_de": "ของจะส่งไปไหนบ้าง",
          "question_en": "ของจะส่งไปไหนบ้าง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เฉพาะญี่ปุ่น",
              "text_en": "เฉพาะญี่ปุ่น",
              "correct": false
            },
            {
              "text_de": "เฉพาะอังกฤษ",
              "text_en": "เฉพาะอังกฤษ",
              "correct": false
            },
            {
              "text_de": "อังกฤษ ญี่ปุ่น และบริจาค",
              "text_en": "อังกฤษ ญี่ปุ่น และบริจาค",
              "correct": true
            },
            {
              "text_de": "ทิ้งไปเลย",
              "text_en": "ทิ้งไปเลย",
              "correct": false
            }
          ],
          "explanation_de": "ของบางอย่างจะส่งกลับไปที่อังกฤษ บางอย่างจะส่งไปที่ญี่ปุ่น บางอย่างจะบริจาค",
          "explanation_en": "ของบางอย่างจะส่งกลับไปที่อังกฤษ บางอย่างจะส่งไปที่ญี่ปุ่น บางอย่างจะบริจาค"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสมีประสบการณ์ย้ายประเทศกี่ครั้ง",
          "question_en": "คุณคริสมีประสบการณ์ย้ายประเทศกี่ครั้ง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "1 ครั้ง",
              "text_en": "1 ครั้ง",
              "correct": false
            },
            {
              "text_de": "2 ครั้ง",
              "text_en": "2 ครั้ง",
              "correct": false
            },
            {
              "text_de": "3 ครั้ง",
              "text_en": "3 ครั้ง",
              "correct": true
            },
            {
              "text_de": "4 ครั้ง",
              "text_en": "4 ครั้ง",
              "correct": false
            }
          ],
          "explanation_de": "เรามีประสบการณ์ย้ายประเทศมาสามครั้งแล้ว",
          "explanation_en": "เรามีประสบการณ์ย้ายประเทศมาสามครั้งแล้ว"
        },
        {
          "type": "mc",
          "question_de": "ครั้งแรกย้ายจากไหน",
          "question_en": "ครั้งแรกย้ายจากไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สิงคโปร์",
              "text_en": "สิงคโปร์",
              "correct": false
            },
            {
              "text_de": "ไทย",
              "text_en": "ไทย",
              "correct": false
            },
            {
              "text_de": "อังกฤษ",
              "text_en": "อังกฤษ",
              "correct": true
            },
            {
              "text_de": "ญี่ปุ่น",
              "text_en": "ญี่ปุ่น",
              "correct": false
            }
          ],
          "explanation_de": "ครั้งแรกจากอังกฤษไปสิงคโปร์",
          "explanation_en": "ครั้งแรกจากอังกฤษไปสิงคโปร์"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสคิดว่าการย้ายประเทศเป็นอย่างไร",
          "question_en": "คุณคริสคิดว่าการย้ายประเทศเป็นอย่างไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ง่าย",
              "text_en": "ง่าย",
              "correct": false
            },
            {
              "text_de": "ยาก",
              "text_en": "ยาก",
              "correct": false
            },
            {
              "text_de": "ไม่ยากแต่ก็ไม่ง่ายและเหนื่อย",
              "text_en": "ไม่ยากแต่ก็ไม่ง่ายและเหนื่อย",
              "correct": true
            },
            {
              "text_de": "สนุก",
              "text_en": "สนุก",
              "correct": false
            }
          ],
          "explanation_de": "ไม่ยากแต่ก็ไม่ง่าย และที่แน่ๆ คือเหนื่อยมาก",
          "explanation_en": "ไม่ยากแต่ก็ไม่ง่าย และที่แน่ๆ คือเหนื่อยมาก"
        },
        {
          "type": "mc",
          "question_de": "ลูกสาวคุณคริสวางแผนจะทำอะไร",
          "question_en": "ลูกสาวคุณคริสวางแผนจะทำอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เรียนต่อ",
              "text_en": "เรียนต่อ",
              "correct": false
            },
            {
              "text_de": "เป็นครูสอน",
              "text_en": "เป็นครูสอน",
              "correct": true
            },
            {
              "text_de": "ทำงานธนาคาร",
              "text_en": "ทำงานธนาคาร",
              "correct": false
            },
            {
              "text_de": "ไม่ทำงาน",
              "text_en": "ไม่ทำงาน",
              "correct": false
            }
          ],
          "explanation_de": "ลูกสาวผมวางแผนว่าเรียนจบแล้วจะไปทำงานเป็นครูสอนภาษาอังกฤษที่โตเกียว",
          "explanation_en": "ลูกสาวผมวางแผนว่าเรียนจบแล้วจะไปทำงานเป็นครูสอนภาษาอังกฤษที่โตเกียว"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสคิดว่าครอบครัวมีแผนดีไหม",
          "question_en": "คุณคริสคิดว่าครอบครัวมีแผนดีไหม",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่ดี",
              "text_en": "ไม่ดี",
              "correct": false
            },
            {
              "text_de": "ธรรมดา",
              "text_en": "ธรรมดา",
              "correct": false
            },
            {
              "text_de": "ดี",
              "text_en": "ดี",
              "correct": true
            },
            {
              "text_de": "ไม่มีแผน",
              "text_en": "ไม่มีแผน",
              "correct": false
            }
          ],
          "explanation_de": "ผมดีใจที่ครอบครัวของผมมีแผนที่ดีสำหรับชีวิต",
          "explanation_en": "ผมดีใจที่ครอบครัวของผมมีแผนที่ดีสำหรับชีวิต"
        }
      ],
      "id": 19,
      "thai_title": "ย้ายประเทศ",
      "german_title": "Auswandern",
      "english_title": "Moving Countries",
      "emoji": "✈️",
      "thai_title_romanization": "yai pra-thet"
    },
    {
      "vocabulary": [
        {
          "thai": "กังวล",
          "romanization": "kanguan",
          "english": "to be worried",
          "german": "besorgt sein",
          "example_thai": "ฉันกังวล",
          "example_english": "I am worried",
          "example_german": "Ich bin besorgt",
          "example_romanization": "chan kanguan"
        },
        {
          "thai": "ระมัดระวัง",
          "romanization": "ramatrawang",
          "english": "to be careful",
          "german": "vorsichtig sein",
          "example_thai": "ระมัดระวังกับรถ",
          "example_english": "be careful with cars",
          "example_german": "sei vorsichtig mit Autos",
          "example_romanization": "ramatrawang kap rot"
        },
        {
          "thai": "พิจารณา",
          "romanization": "phichanna",
          "english": "to consider",
          "german": "erwägen, prüfen",
          "example_thai": "พิจารณาความปลอดภัย",
          "example_english": "consider safety",
          "example_german": "Sicherheit berücksichtigen",
          "example_romanization": "phichanna khwamplotphai"
        },
        {
          "thai": "สุขภาพ",
          "romanization": "sukphap",
          "english": "health",
          "german": "Gesundheit",
          "example_thai": "สุขภาพดี",
          "example_english": "good health",
          "example_german": "gute Gesundheit",
          "example_romanization": "sukphap di"
        },
        {
          "thai": "ทรัพย์สิน",
          "romanization": "thrapsin",
          "english": "property, asset",
          "german": "Eigentum, Vermögen",
          "example_thai": "ทรัพย์สินที่มี",
          "example_english": "property that one has",
          "example_german": "das Eigentum, das man hat",
          "example_romanization": "thrapsin thi mi"
        },
        {
          "thai": "วัฒนธรรม",
          "romanization": "watntam",
          "english": "culture",
          "german": "Kultur",
          "example_thai": "วัฒนธรรมไทย",
          "example_english": "Thai culture",
          "example_german": "Thailändische Kultur",
          "example_romanization": "watntam thai"
        },
        {
          "thai": "โรคระบาด",
          "romanization": "rokrabat",
          "english": "epidemic",
          "german": "Epidemie",
          "example_thai": "มีโรคระบาด",
          "example_english": "there is an epidemic",
          "example_german": "es gibt eine Epidemie",
          "example_romanization": "mi rokrabat"
        },
        {
          "thai": "โจร",
          "romanization": "chon",
          "english": "a robber, a criminal",
          "german": "Räuber",
          "example_thai": "ระวังโจร",
          "example_english": "beware of robbers",
          "example_german": "Vorsicht vor Räubern",
          "example_romanization": "rawang chon"
        },
        {
          "thai": "ขโมย",
          "romanization": "khamoi",
          "english": "a thief, to steal",
          "german": "Dieb, stehlen",
          "example_thai": "มีขโมย",
          "example_english": "there is a thief",
          "example_german": "es gibt einen Dieb",
          "example_romanization": "mi khamoi"
        },
        {
          "thai": "ร้ายแรง",
          "romanization": "rairaeng",
          "english": "severe",
          "german": "schwerwiegend",
          "example_thai": "ป่วยร้ายแรง",
          "example_english": "severely ill",
          "example_german": "schwer krank",
          "example_romanization": "puai rairaeng"
        },
        {
          "thai": "การประท้วง",
          "romanization": "kan prathuang",
          "english": "a protest",
          "german": "Protest",
          "example_thai": "มีการประท้วง",
          "example_english": "there is a protest",
          "example_german": "es gibt einen Protest",
          "example_romanization": "mi kan prathuang"
        },
        {
          "thai": "รุนแรง",
          "romanization": "runraeng",
          "english": "to be violent",
          "german": "gewalttätig",
          "example_thai": "ประท้วงรุนแรง",
          "example_english": "violent protest",
          "example_german": "gewalttätiger Protest",
          "example_romanization": "prathuang runraeng"
        },
        {
          "thai": "ปรับตัว",
          "romanization": "praptua",
          "english": "to adjust",
          "german": "sich anpassen",
          "example_thai": "ปรับตัวกับสภาพแวดล้อม",
          "example_english": "adjust to environment",
          "example_german": "sich an die Umgebung anpassen",
          "example_romanization": "praptua kap saphapwaetlom"
        },
        {
          "thai": "เข้ากับ",
          "romanization": "khaokap",
          "english": "to get along with",
          "german": "sich verstehen mit",
          "example_thai": "เข้ากับเพื่อน",
          "example_english": "get along with friend",
          "example_german": "mit Freunden verstehen",
          "example_romanization": "khaokap phuean"
        },
        {
          "thai": "คนท้องถิ่น",
          "romanization": "khon thongthin",
          "english": "local people",
          "german": "Einheimische",
          "example_thai": "คนท้องถิ่นนี่ดี",
          "example_english": "local people here are good",
          "example_german": "Die Einheimischen hier sind gut",
          "example_romanization": "khon thongthin ni di"
        },
        {
          "thai": "ตื่นเต้น",
          "romanization": "tuenten",
          "english": "to be excited",
          "german": "aufgeregt sein",
          "example_thai": "ตื่นเต้นไปญี่ปุ่น",
          "example_english": "excited to go to Japan",
          "example_german": "aufgeregt, nach Japan zu gehen",
          "example_romanization": "tuenten pai yipun"
        },
        {
          "thai": "เป็นไปได้",
          "romanization": "penpaidai",
          "english": "to be possible",
          "german": "möglich sein",
          "example_thai": "เป็นไปได้หรือไม่",
          "example_english": "is it possible",
          "example_german": "ist es möglich",
          "example_romanization": "penpaidai ruemai"
        },
        {
          "thai": "เกษียณ",
          "romanization": "kesin",
          "english": "retire",
          "german": "in Rente gehen",
          "example_thai": "เกษียณแล้ว",
          "example_english": "already retired",
          "example_german": "bereits in den Ruhestand gegangen",
          "example_romanization": "kesin laeo"
        },
        {
          "thai": "เอ็กซ์แพต",
          "romanization": "ek phae t",
          "english": "an expat",
          "german": "Expat",
          "example_thai": "เป็นเอ็กซ์แพต",
          "example_english": "be an expat",
          "example_german": "ein Expat sein",
          "example_romanization": "pen ek phae t"
        }
      ],
      "reading": [
        {
          "thai": "จากประสบการณ์ของผมและภรรยา การใช้ชีวิตแบบเอ็กซ์แพตมีอะไรๆ หลายอย่างที่ต้องกังวลและระมัดระวัง",
          "english": "From my and my wife's experience, living as an expat has many things to worry about and be careful of",
          "german": "Aus meiner und meiner Frau's Erfahrung hat das Leben als Expat viele Dinge, um die man sich sorgen muss und vorsichtig sein muss",
          "romanization": "chak pratpkan khong phom lae phanraya kan chaichiwit baep ek phae t mi arai laioing thi tong kanguan lae ramatrawang"
        },
        {
          "thai": "เรื่องที่สำคัญที่สุดของเราคือความปลอดภัย",
          "english": "The most important thing for us is safety",
          "german": "Das Wichtigste für uns ist Sicherheit",
          "romanization": "rueang thi samkhan thisut khong rao khue khwamplotphai"
        },
        {
          "thai": "ก่อนย้ายประเทศ เราจะพิจารณาเกี่ยวกับความปลอดภัย เรื่องสุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และความปลอดภัยเกี่ยวกับวัฒนธรรม",
          "english": "Before moving to a country, we will consider about safety, health, safety in life and property, and safety about culture",
          "german": "Bevor wir in ein Land umziehen, werden wir Sicherheit, Gesundheit, Sicherheit im Leben und Vermögen sowie Sicherheit bezüglich der Kultur berücksichtigen",
          "romanization": "kon yai prathet rao cha phichanna kiaokap khwamplotphai rueang sukphap khwamplotphai nai chiwit lae thrapsin lae khwamplotphai kiaokap watntam"
        },
        {
          "thai": "ความปลอดภัยเรื่องสุขภาพคือประเทศที่เราเลือกย้ายไปทำงานต้องไม่มีโรคระบาด",
          "english": "Safety about health is that the country we choose to move to must not have an epidemic",
          "german": "Sicherheit in Bezug auf Gesundheit ist, dass das Land, in das wir umziehen, keine Epidemie haben darf",
          "romanization": "khwamplotphai rueang sukphap khue prathet thi rao lueak yai pai thamngan tong mai mi rokrabat"
        },
        {
          "thai": "ต้องมีโรงพยาบาลที่ดี ต้องมีหมอที่เก่ง",
          "english": "must have a good hospital, must have a skilled doctor",
          "german": "muss ein gutes Krankenhaus haben, muss einen geschickten Arzt haben",
          "romanization": "tong mi rongpyaban thi di tong mi mo thi keng"
        },
        {
          "thai": "ความปลอดภัยในชีวิตและทรัพย์สินคือเราจะอยู่และใช้ชีวิตทุกวันได้โดยไม่ต้องระวังโจรหรือขโมยจนเกินไป",
          "english": "Safety in life and property is that we can live and use life daily without being overly careful of robbers or thieves",
          "german": "Sicherheit im Leben und Eigentum bedeutet, dass wir täglich leben können, ohne übermäßig vor Räubern oder Dieben vorsichtig zu sein",
          "romanization": "khwamplotphai nai chiwit lae thrapsin khue rao cha yu lae chaichiwit thukwan dai doi mataing rawang chon rue khamoi chon koenpai"
        },
        {
          "thai": "ไม่มีอุบัติเหตุร้ายแรงบ่อยๆ และไม่มีการประท้วงที่รุนแรงบนถนน",
          "english": "no severe accidents frequently and no violent protests on the street",
          "german": "keine schwerwiegenden Unfälle häufig und keine gewalttätigen Proteste auf der Straße",
          "romanization": "mai mi ubatihetu rairaeng boi lae mai mi kan prathuang thi runraeng bon thanon"
        },
        {
          "thai": "ความปลอดภัยเกี่ยวกับวัฒนธรรมคือเราจะพิจารณาว่าเราสามารถปรับตัวให้เข้ากับวัฒนธรรมประเทศนั้นๆ ได้หรือไม่",
          "english": "Safety about culture is that we will consider whether we can adjust and get along with the culture of that country",
          "german": "Sicherheit in Bezug auf Kultur bedeutet, dass wir berücksichtigen werden, ob wir uns an die Kultur dieses Landes anpassen und verstehen können",
          "romanization": "khwamplotphai kiaokap watntam khue rao cha phichanna wa rao samant praptua hai khaokap watntam prathet nan dai ruemai"
        },
        {
          "thai": "ถ้าเราปรับตัวไม่ได้เราอาจอยู่อย่างไม่สบายใจและคนท้องถิ่นก็จะไม่สบายใจด้วย",
          "english": "If we cannot adjust, we might live uncomfortably and local people will also feel uncomfortable",
          "german": "Wenn wir uns nicht anpassen können, könnten wir unangenehm leben und die Einheimischen würden sich auch unwohl fühlen",
          "romanization": "tha rao praptua mai dai rao at yu yang mai sabaichai lae khon thongthin k cha mai sabaichai duai"
        }
      ],
      "structures": [],
      "exercises": {
        "conversation": [
          {
            "question": "เอ็กซ์แพตต้องกังวลและระมัดระวังเกี่ยวกับอะไร",
            "answer": "เอ็กซ์แพตต้องกังวลและระมัดระวังเกี่ยวกับความปลอดภัย เรื่องสุขภาพ และวัฒนธรรม",
            "english": "What should expats be concerned and careful about",
            "german": "Worüber sollten Expats besorgt und vorsichtig sein"
          },
          {
            "question": "เรื่องที่สำคัญที่สุดสำหรับเอ็กซ์แพตคืออะไร",
            "answer": "เรื่องที่สำคัญที่สุดคือความปลอดภัย",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ก่อนย้ายประเทศต้องพิจารณาเรื่องอะไรบ้าง",
            "answer": "ต้องพิจารณาความปลอดภัยเรื่องสุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และความปลอดภัยเกี่ยวกับวัฒนธรรม",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ประเทศที่ปลอดภัยเรื่องสุขภาพต้องมีอะไร",
            "answer": "ต้องไม่มีโรคระบาด ต้องมีโรงพยาบาลที่ดี และมีหมอที่เก่ง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ความปลอดภัยในชีวิตและทรัพย์สินหมายถึงอะไร",
            "answer": "หมายถึงการอยู่โดยไม่ต้องกลัวโจรหรือขโมยจนเกินไป ไม่มีอุบัติเหตุร้ายแรงบ่อยๆ ไม่มีการประท้วงรุนแรง",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ความปลอดภัยเกี่ยวกับวัฒนธรรมคืออะไร",
            "answer": "คือการพิจารณาว่าสามารถปรับตัวให้เข้ากับวัฒนธรรมประเทศนั้นได้หรือไม่",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "ถ้าไม่สามารถปรับตัวได้จะเกิดอะไร",
            "answer": "อาจอยู่อย่างไม่สบายใจและคนท้องถิ่นก็จะไม่สบายใจด้วย",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสกับภรรยากำลังจะย้ายไปไหน",
            "answer": "กำลังจะย้ายไปที่โตเกียว",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสคิดว่าที่นั่นปลอดภัยไหม",
            "answer": "ใช่ คิดว่าปลอดภัยมากในทุกๆ ด้าน",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          },
          {
            "question": "คุณคริสกับภรรยาวางแผนว่าเกษียณแล้วจะทำอะไร",
            "answer": "วางแผนว่าถ้าเป็นไปได้จะกลับมาใช้ชีวิตที่ประเทศไทย",
            "english": "Translation needed",
            "german": "Übersetzung erforderlich"
          }
        ]
      },
      "quiz": [
        {
          "type": "mc",
          "question_de": "เอ็กซ์แพตต้องกังวลเรื่องอะไรมากที่สุด",
          "question_en": "เอ็กซ์แพตต้องกังวลเรื่องอะไรมากที่สุด",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เงิน",
              "text_en": "เงิน",
              "correct": false
            },
            {
              "text_de": "ความปลอดภัย",
              "text_en": "ความปลอดภัย",
              "correct": true
            },
            {
              "text_de": "ครอบครัว",
              "text_en": "ครอบครัว",
              "correct": false
            },
            {
              "text_de": "งาน",
              "text_en": "งาน",
              "correct": false
            }
          ],
          "explanation_de": "เรื่องที่สำคัญที่สุดของเราคือความปลอดภัย",
          "explanation_en": "เรื่องที่สำคัญที่สุดของเราคือความปลอดภัย"
        },
        {
          "type": "mc",
          "question_de": "ก่อนย้ายประเทศต้องพิจารณาเกี่ยวกับอะไร",
          "question_en": "ก่อนย้ายประเทศต้องพิจารณาเกี่ยวกับอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ราคา",
              "text_en": "ราคา",
              "correct": false
            },
            {
              "text_de": "ความปลอดภัย สุขภาพ และวัฒนธรรม",
              "text_en": "ความปลอดภัย สุขภาพ และวัฒนธรรม",
              "correct": true
            },
            {
              "text_de": "การเดินทาง",
              "text_en": "การเดินทาง",
              "correct": false
            },
            {
              "text_de": "ตำแหน่ง",
              "text_en": "ตำแหน่ง",
              "correct": false
            }
          ],
          "explanation_de": "เราจะพิจารณาเกี่ยวกับความปลอดภัย สุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และวัฒนธรรม",
          "explanation_en": "เราจะพิจารณาเกี่ยวกับความปลอดภัย สุขภาพ ความปลอดภัยในชีวิตและทรัพย์สิน และวัฒนธรรม"
        },
        {
          "type": "mc",
          "question_de": "ความปลอดภัยเรื่องสุขภาพต้องมีอะไร",
          "question_en": "ความปลอดภัยเรื่องสุขภาพต้องมีอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ธรรมชาติ",
              "text_en": "ธรรมชาติ",
              "correct": false
            },
            {
              "text_de": "หนองสม",
              "text_en": "หนองสม",
              "correct": false
            },
            {
              "text_de": "โรงพยาบาลที่ดีและหมอเก่ง",
              "text_en": "โรงพยาบาลที่ดีและหมอเก่ง",
              "correct": true
            },
            {
              "text_de": "เก้าอี้",
              "text_en": "เก้าอี้",
              "correct": false
            }
          ],
          "explanation_de": "ต้องไม่มีโรคระบาด ต้องมีโรงพยาบาลที่ดี ต้องมีหมอที่เก่ง",
          "explanation_en": "ต้องไม่มีโรคระบาด ต้องมีโรงพยาบาลที่ดี ต้องมีหมอที่เก่ง"
        },
        {
          "type": "mc",
          "question_de": "ความปลอดภัยในชีวิตและทรัพย์สินหมายถึง",
          "question_en": "ความปลอดภัยในชีวิตและทรัพย์สินหมายถึง",
          "question_romanization": "",
          "options": [
            {
              "text_de": "มีเงินมาก",
              "text_en": "มีเงินมาก",
              "correct": false
            },
            {
              "text_de": "ไม่กลัวโจร ไม่มีอุบัติเหตุร้ายแรง",
              "text_en": "ไม่กลัวโจร ไม่มีอุบัติเหตุร้ายแรง",
              "correct": true
            },
            {
              "text_de": "มีบ้านใหญ่",
              "text_en": "มีบ้านใหญ่",
              "correct": false
            },
            {
              "text_de": "มีครอบครัว",
              "text_en": "มีครอบครัว",
              "correct": false
            }
          ],
          "explanation_de": "ความปลอดภัยในชีวิตและทรัพย์สินคือไม่ต้องระวังโจรหรือขโมยจนเกินไป ไม่มีอุบัติเหตุร้ายแรง",
          "explanation_en": "ความปลอดภัยในชีวิตและทรัพย์สินคือไม่ต้องระวังโจรหรือขโมยจนเกินไป ไม่มีอุบัติเหตุร้ายแรง"
        },
        {
          "type": "mc",
          "question_de": "ถ้าไม่สามารถปรับตัวกับวัฒนธรรมจะเกิดอะไร",
          "question_en": "ถ้าไม่สามารถปรับตัวกับวัฒนธรรมจะเกิดอะไร",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่เป็นไร",
              "text_en": "ไม่เป็นไร",
              "correct": false
            },
            {
              "text_de": "อยู่อย่างไม่สบายใจ",
              "text_en": "อยู่อย่างไม่สบายใจ",
              "correct": true
            },
            {
              "text_de": "ต้องย้ายไป",
              "text_en": "ต้องย้ายไป",
              "correct": false
            },
            {
              "text_de": "สนุก",
              "text_en": "สนุก",
              "correct": false
            }
          ],
          "explanation_de": "ถ้าเราปรับตัวไม่ได้เราอาจอยู่อย่างไม่สบายใจ",
          "explanation_en": "ถ้าเราปรับตัวไม่ได้เราอาจอยู่อย่างไม่สบายใจ"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสกับภรรยากำลังจะย้ายไปที่ไหน",
          "question_en": "คุณคริสกับภรรยากำลังจะย้ายไปที่ไหน",
          "question_romanization": "",
          "options": [
            {
              "text_de": "สิงคโปร์",
              "text_en": "สิงคโปร์",
              "correct": false
            },
            {
              "text_de": "อเมริกา",
              "text_en": "อเมริกา",
              "correct": false
            },
            {
              "text_de": "โตเกียว",
              "text_en": "โตเกียว",
              "correct": true
            },
            {
              "text_de": "หลวงพระบาง",
              "text_en": "หลวงพระบาง",
              "correct": false
            }
          ],
          "explanation_de": "ผมกับภรรยากำลังจะย้ายจากกรุงเทพฯ ไปอยู่ที่โตเกียว",
          "explanation_en": "ผมกับภรรยากำลังจะย้ายจากกรุงเทพฯ ไปอยู่ที่โตเกียว"
        },
        {
          "type": "mc",
          "question_de": "ที่โตเกียวปลอดภัยไหม",
          "question_en": "ที่โตเกียวปลอดภัยไหม",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่ดี",
              "text_en": "ไม่ดี",
              "correct": false
            },
            {
              "text_de": "ปลอดภัยมากในทุกๆ ด้าน",
              "text_en": "ปลอดภัยมากในทุกๆ ด้าน",
              "correct": true
            },
            {
              "text_de": "เพียงพอ",
              "text_en": "เพียงพอ",
              "correct": false
            },
            {
              "text_de": "ทั่วไป",
              "text_en": "ทั่วไป",
              "correct": false
            }
          ],
          "explanation_de": "เราพิจารณาแล้วว่าที่นั่นปลอดภัยมากในทุกๆ ด้าน",
          "explanation_en": "เราพิจารณาแล้วว่าที่นั่นปลอดภัยมากในทุกๆ ด้าน"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสรู้สึกอย่างไรกับการย้ายไปญี่ปุ่น",
          "question_en": "คุณคริสรู้สึกอย่างไรกับการย้ายไปญี่ปุ่น",
          "question_romanization": "",
          "options": [
            {
              "text_de": "เศร้า",
              "text_en": "เศร้า",
              "correct": false
            },
            {
              "text_de": "ตื่นเต้นแต่ก็เสียใจ",
              "text_en": "ตื่นเต้นแต่ก็เสียใจ",
              "correct": true
            },
            {
              "text_de": "ปกติ",
              "text_en": "ปกติ",
              "correct": false
            },
            {
              "text_de": "กลัว",
              "text_en": "กลัว",
              "correct": false
            }
          ],
          "explanation_de": "เราตื่นเต้นที่จะย้ายไปแต่ก็เสียใจด้วย",
          "explanation_en": "เราตื่นเต้นที่จะย้ายไปแต่ก็เสียใจด้วย"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสกับภรรยาชอบประเทศไทยไหม",
          "question_en": "คุณคริสกับภรรยาชอบประเทศไทยไหม",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไม่",
              "text_en": "ไม่",
              "correct": false
            },
            {
              "text_de": "ปกติ",
              "text_en": "ปกติ",
              "correct": false
            },
            {
              "text_de": "ชอบมาก",
              "text_en": "ชอบมาก",
              "correct": true
            },
            {
              "text_de": "ไม่แน่ใจ",
              "text_en": "ไม่แน่ใจ",
              "correct": false
            }
          ],
          "explanation_de": "ผมกับคุณเอ็มมาชอบประเทศไทยมากและคิดว่าถ้าเป็นไปได้จะกลับมา",
          "explanation_en": "ผมกับคุณเอ็มมาชอบประเทศไทยมากและคิดว่าถ้าเป็นไปได้จะกลับมา"
        },
        {
          "type": "mc",
          "question_de": "คุณคริสกับภรรยาวางแผนว่าเกษียณแล้วจะไป",
          "question_en": "คุณคริสกับภรรยาวางแผนว่าเกษียณแล้วจะไป",
          "question_romanization": "",
          "options": [
            {
              "text_de": "ไปญี่ปุ่น",
              "text_en": "ไปญี่ปุ่น",
              "correct": false
            },
            {
              "text_de": "ไปอังกฤษ",
              "text_en": "ไปอังกฤษ",
              "correct": false
            },
            {
              "text_de": "กลับมาประเทศไทย",
              "text_en": "กลับมาประเทศไทย",
              "correct": true
            },
            {
              "text_de": "ไปสิงคโปร์",
              "text_en": "ไปสิงคโปร์",
              "correct": false
            }
          ],
          "explanation_de": "ถ้าเป็นไปได้เราจะกลับมาใช้ชีวิตหลังเกษียณที่ประเทศไทย",
          "explanation_en": "ถ้าเป็นไปได้เราจะกลับมาใช้ชีวิตหลังเกษียณที่ประเทศไทย"
        }
      ],
      "id": 20,
      "thai_title": "อยู่อย่างปลอดภัย",
      "german_title": "Sicher leben",
      "english_title": "Living Safely",
      "emoji": "🔒",
      "thai_title_romanization": "yu yang plot-phai"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COURSE_DATA;
}
