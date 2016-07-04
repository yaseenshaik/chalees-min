import uniq from 'lodash/uniq';
import flattenDeep from 'lodash/flattenDeep';

const data = [{
  id: '1',
  title: 'Food: Where Does It Come From?',
  thumbnailImagePath: '/chapter-thumbnails/chapter-1.jpg',
  items: [{
    id: 'where-does-food-come-from',
    kind: 'video',
    time: 4,
    title: 'Where does food come from?',
    instructions: 'Watch this short video to take a journey from your dinner plate all the way to the farm.',
    videoId: 'zHeWx_AifLs',
    // @kunal: here's how to add a different start time
    // startTime: 10,
  }, {
    id: 'our-foods-journey',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Our food\'s journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      The food that we eat goes through all of the following places, except for one. 

      Select the odd one out.`,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Farm'
      },
      {
        id: 'opt2',
        text: 'Bank'
      },
      {
        id: 'opt3',
        text: 'Subzi Mandi'
      },
      {
        id: 'opt4',
        text: 'Market'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'As we saw in the video, the food\'s journey begins in the farm.'
      },
      {
        answerSet: ['opt2'],
        response: 'Correct. Our food does not go through the bank. It would be weird if it did.'
      },
      {
        answerSet: ['opt3'],
        response: 'The Subzi Mandi or the Big Vegetable Market is where food is sold in bulk.'
      },
      {
        answerSet: ['opt4'],
        response: 'Local markets are places where we most often buy our food.'
      }
    ]
  },  {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    // @KUNAL: here's how to add an image
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Use a _pen and paper_ to draw a picture that shows what you have learned from the video above. 

    Then take a picture of the drawing from your phone and share it here.`
  }, {
    id: 'pick-a-question-to-investigate',
    kind: 'textResponse',
    time: 6,
    short: true,
    title: 'Pick a question to investigate',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    At the end of the video, we present a few questions for you to think about. Here they are again:
    - Where does water come from?
    - Where does petrol come from?
    - Where does snot come from?
        
    Select a question you want to think about more. You can pick from the list above or think of a new question of your own.
        
    Then write it in the box below.`,
    hacks: {
      fakePeerResponses: [
        {
          studentName: 'Sid',
          imagePath: '/fake-responses/sid.png',
          response: 'Where does TV come from?'
        },
        {
          studentName: 'Prabsimar',
          imagePath: '/fake-responses/prabsimar.png',
          response: 'Where does cheese come from?'
        },
        {
          studentName: 'Koushiki',
          imagePath: '/fake-responses/koushiki.png',
          response: 'Where do books come from?'
        }
      ]
    }
  }, {
    id: 'plan-your-own-research',
    kind: 'textResponse',
    time: 10,
    title: 'Plan your own research',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Spend a few minutes creating a plan for the things you will do to answer the question above. 

    Write down who you plan to talk to, what websites you plan to visit.`,
    hacks: {
      wordCloudImagePath: '/prefab-word-clouds/research-wordcloud5.png'
    }
  }, {
    id: 'herbivore-carnivore-omnivore',
    kind: 'video',
    time: 2,
    title: 'Herbivore, Carnivore, Omnivore',
    instructions: 'Really silly song that will get stuck in your head.',
    videoId: 'wjkqIt_H-ko'
  }]
}, {
  id: '2',
  thumbnailImagePath: '/chapter-thumbnails/chapter-2.jpg',
  title: 'Components Of Food',
  items: [{
    id: 'carbohydrates',
    kind: 'video',
    time: 4,
    title: 'Carbohydrates',
    instructions: 'Watch this video to learn more about carbohydrates, sugars and roughage.',
    videoId: '8-A37Y4KuN0'
  }, {
    id: 'the-purpose-of-carbohydrates',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'The purpose of carbohydrates',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    Why do we need carbohydrates? `,
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'To lose weight'
      },
      {
        id: 'opt2',
        text: 'For Energy'
      },
      {
        id: 'opt3',
        text: 'To make friends'
      },
      {
        id: 'opt4',
        text: 'To get good marks'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1',],
        response: 'Ummm. Nowhere in this video or chapter have we spoken about losing weight.'
      },
      {
        answerSet: ['opt2'],
        response: 'Correct. Carbohydrates are one of the most important sources of energy in our food.'
      },
      {
        answerSet: ['opt3'],
        response: 'You need kindness (and not carbohydrates) to make new friends.'
      },
      {
        answerSet: ['opt4'],
        response: 'Even though you need to study Carbohydrates to score well in your exams, this is not the correct reason for needing carbohydrates.'
      }
    ]
  }, {
    id: 'tweet-what-youve-learned',
    kind: 'textResponse',
    time: 5,
    short: true,
    title: 'Tweet what you\'ve learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Summarize what you have learned in the video above in 140 characters; then tweet it with #chapter2',
    hacks: {
      fakePeerResponses: [
        {
          studentName: 'Prabsimar',
          imagePath: '/fake-responses/prabsimar.png',
          response: 'Carbs give energy. they are in bread, beans, fruits and veggies. can of soda has 39g; love nimbu pani; dietary fibre eases poop #chapter2'
        },
        {
          studentName: 'Koushiki',
          imagePath: '/fake-responses/koushiki.png',
          response: 'Ceres is goddess of grain. Grains have carbohydrates. Carbohydrates provide energy. Energy is good. Love the dance at the end #chapter2'
        }
      ]
    }
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    From your textbook, read the section 2.2, _What Do Various Nutrients Do For Our Body?_ 

    Then use a pencil and paper to draw a cartoons of what you have learned from that section. Take a picture of that cartoon and upload it here.`,
  },{
    id: 'balanced-diet',
    kind: 'video',
    time: 10,
    title: 'Balanced Diet',
    instructions: 'Which foods should we eat more of, and which should we eat less?',
    videoId: 'n-q8-f2unHY'
  },{
    id: 'and-finally',
    kind: 'video',
    time: 1,
    title: 'And finally ...',
    instructions: 'Here is a song about Chapter 2, that you can sing on your way to school',
    videoId: '4hHYX2qUJ9U'
  }]
}, {
  id: '3',
  thumbnailImagePath: '/chapter-thumbnails/chapter-3.jpg',
  title: 'Fibre To Fabric',
  items: [{
    id: 'how-i-learned-to-knit',
    kind: 'video',
    time: 4,
    title: 'How I learned to knit',
    instructions: 'Here is a story of how I learned to knit and then learned something interesting about life.',
    videoId: '0EL7M44_Ey0',
  }, {
    id: 'tell-us-your-learning-story',
    kind: 'textResponse',
    time: 10,
    title: 'Tell us your learning story',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
      Have you ever gone from knowing nothing about a subject to knowing a lot. 

      Tell us about that time. What were you learning? What was difficult about that time? Who helped you?`,
    hacks: {
      wordCloudImagePath: '/prefab-word-clouds/test-cloud.png'
    },
  }, {
    id: 'cottons-journey',
    time: 5,
    kind: 'image',
    title: 'Cotton\'s Journey',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Cotton goes from the field, to fibre, to yarn to fabric. Study the image below to see how cotton shirts are made.',
    imagePath: '/learning-items/cotton-journey.png'
  }, {
    id: 'how-cotton-is-made',
    kind: 'video',
    time: 5,
    title: 'How cotton is made',
    instructions: 'This video gives a very thorough overview of how cotton is made from farm to fabric.',
    videoId: 'kH_b3Heo48I',
    startTime: 20
  }, {
    id: 'draw-what-you-have-learned',
    kind: 'imageResponse',
    time: 10,
    title: 'Draw what you have learned',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: 'Use a pencil and paper to draw a picture that shows what you have learned about how cotton fabric is made. Then take a picture of it and share it here.'
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: '1u2uRhDeQOI',
  }]
}, {
  id: '4',
  thumbnailImagePath: '/chapter-thumbnails/chapter-4.png',
  title: 'Sorting Materials Into Groups',
  items: [{
    id: 'sorting-materials-into-groups',
    kind: 'video',
    time: 2,
    title: 'Sorting Materials Into Groups',
    instructions: 'We found this chapter to be incredibly boring. Watch to see if you agree.',
    videoId: 'irfJePkITGM',
  }, {
    id: 'suggest-an-idea-for-a-video',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Suggest an idea for a video',
    presenterImagePath: '/instructors/kunal2.jpg',
    maxSelected: 1,
    instructions: dedent`
    Tell us a topic from this chapter that is interesting to you. 

    We will collect responses from all students taking this quiz, and then make a video on one of those topics.`,
    choices: ['Appearance', 'Hardness', 'Solubility', 'Transparency']
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    presenterImagePath: '/instructors/kunal2.jpg',
    instructions: dedent`
    From your textbook, read the section on _Transparency._ 

    Then use a pen and paper to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.`
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 2,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rgNpbH_4en4',
  }]
}, {
  id: '5',
  thumbnailImagePath: '/chapter-thumbnails/chapter-5.jpg',
  title: 'Separation of Substances',
  items: [{
    id: 'how-does-salt-dissolve-in-water',
    kind: 'video',
    time: 5,
    title: 'How does salt dissolve in water',
    instructions: 'This video highlights how salt is made and how it dissolves in water',
    videoId: 'mBoJ3Y3S4VE',
  }, {
    id: 'summarize-what-you-have-learned',
    kind: 'imageResponse',
    time: 15,
    title: 'Summarize what you have learned',
    instructions: 'Use a pencil and paper to draw a picture that shows what you have learned from this video. Then take a picture of it and upload it here.',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: dedent`
    From your textbook, read any 3 sections from the following list
    — Threshing
    - Winnowing
    - Sieving
    - Sedimentation
    - Decantation
    - Filteration
    Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it below.`,
  }, {
    id: 'making-a-test',
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  id: '6',
  thumbnailImagePath: '/chapter-thumbnails/chapter-6.jpg',
  title: 'Changes Around Us',
  items: [{
    id: 'the-train-track-behind-facebooks-office',
    kind: 'video',
    time: 3,
    title: 'The train track behind facebook\'s office',
    instructions: 'This video highlights how expansion causes train tracks to buckle',
    videoId: 'ceJivu4wlM0',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 6.2, “Could there be other ways to bring changes”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
  }]
}, {
  id: '7',
  thumbnailImagePath: '/chapter-thumbnails/chapter-7.jpg',
  title: 'Getting To Know Plants',
  // All the times in this item are completely made-up
  items: [{
    id: 'why-do-plants-produce-flowers',
    time: 6,
    kind: 'video',
    title: 'Why do plants produce flowers?',
    instructions: 'Why do plants produce flowers? Watch this video to find out.',
    videoId: 'EArZXsRXsj4'
  },
  {
    id: 'reflect-picture',
    time: 10,
    kind: 'imageResponse',
    title: 'Reflect',
    instructions: 'Take a picture and drop it here'
  },
  {
    id: 'reflect',
    time: 8,
    kind: 'textResponse',
    title: 'Reflect',
    instructions: 'Write down your thoughts about flowers'
  },
  {
    id: 'conduct-your-own-experiment',
    time: 10,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own experiment on flowers. [Click here for the instructions](https://goo.gl/cuf63n)',
    imagePath: '/learning-items/flowers-experiment.jpg'
  }]
}, {
  id: '8',
  thumbnailImagePath: '/chapter-thumbnails/chapter-8.png',
  title: 'Body Movements',
  items: [{
    id: 'what-keeps-our-bones-together',
    kind: 'video',
    time: 7,
    title: 'What keeps our bones together',
    instructions: 'Watch to learn more about the hinge joint, the ball and socket joint, ligaments and humility.',
    videoId: 'x4k1JP8LsNY',
  }, {
    id: 'lets-think-about-the-video-one',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter6',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 6.2, “Could there be other ways to bring changes”. Then use a pen and pencil to draw a cartoon of what you have learned from those sections. Take a picture of that cartoon and upload it here.',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'rYiRcrny4vs',
  }, {
    id: 'lets-think-about-the-video-two',
    kind: 'textResponse',
    time: 10,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  id: '11',
  thumbnailImagePath: '/chapter-thumbnails/chapter-11.jpg',
  title: 'Lights, Shadows And Reflections',
  items: [{
    id: 'can-shadows-be-colourful',
    kind: 'video',
    time: 3,
    title: 'Can shadows be colourful?',
    instructions: 'Watch this video to learn if a shadow can be blue, green, yellow and other colours.',
    videoId: 'MKW3uUM9xDU',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video in 140 characters; then tweet it with #chapter11',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 11.4, “Mirrors and Reflections”. Then use a pen and pencil to draw a cartoon of what you have learned from that section. Take a picture of that cartoon and upload it here.',
  }, {
    id: 'singing-the-chapter',
    kind: 'video',
    time: 3,
    title: 'Singing the chapter',
    instructions: 'Watch this video to review the chapter in only a few minutes',
    videoId: 'lo9naFiH778',
  }, {
    id: 'lets-think-about-the-video-two',
    kind: 'textResponse',
    time: 10,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video and write it below.',
  }]
}, {
  id: '13',
  thumbnailImagePath: '/chapter-thumbnails/chapter-13.jpg',
  title: 'Fun With Magnets',
  // All the times in this item are completely made-up
  items: [{
    id: 'when-do-magnets-misbehave',
    time: 4,
    kind: 'video',
    title: 'When do magnets misbehave?',
    instructions: 'Heat has something to do with magnets not behaving as usual. Watch this video to find out.',
    videoId: 'yjSNU62kxZo'
  }, {
    id: 'share-what-you-have-learned',
    time: 6,
    kind: 'textResponse',
    title: 'Share what you have learned',
    instructions: 'What did you learn? Discuss your response with a friend and write it here.'
  }, {
    id: 'pick-question-to-investigate-and-share',
    time: 10,
    kind: 'imageResponse',
    title: 'Pick question to investigate and share',
    instructions: dedent`
      1) Pick a question from the link that you want to learn more about from [here](http://goo.gl/e2acXh).
      2) Write it on a piece of paper; paste it on a wall.
      3) Take a picture and upload here.`
  }, {
    id: 'conduct-your-own-experiment',
    time: 15,
    kind: 'image',
    title: 'Conduct your own experiment',
    instructions: 'Follow the instructions in the link on how to conduct your own curie point experiment. [Click here for the instructions](http://goo.gl/LWKF9o).',
    imagePath: '/learning-items/13-magnets-experiment.jpg'
  }]
}, {
  id: '14',
  thumbnailImagePath: '/chapter-thumbnails/chapter-14.jpg',
  title: 'Water',
  items: [{
    id: 'how-to-convert-seawater-to-drinking-water',
    kind: 'video',
    time: 3,
    title: 'How to convert seawater to drinking water?',
    instructions: 'Watch this video to learn how evaporation helps purify water.',
    videoId: 'yeoN0Pmg_tI',
  }, {
    id: 'lets-think-about-the-video-one',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'making-a-test',
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  id: '15',
  thumbnailImagePath: '/chapter-thumbnails/chapter-15.png',
  title: 'Air Around Us',
  items: [{
    id: 'composition-of-air',
    kind: 'video',
    time: 2,
    title: 'Composition of air',
    instructions: 'What do we breathe in? What do we breathe out? Watch to find out.',
    videoId: 'TA2s6uo_vTQ',
  }, {
    id: 'lets-think-about-the-video',
    kind: 'textResponse',
    time: 5,
    title: 'Let\'s think about the video',
    instructions: 'Summarize what you have learned in this video here.',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section 14.3, “Water Cycle”. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'making-a-test',
    kind: 'textResponse',
    time: 5,
    title: 'Making a test',
    instructions: 'Imagine you were creating a final exam on this chapter. What questions would you ask your students in that test?',
  }]
}, {
  id: '16',
  thumbnailImagePath: '/chapter-thumbnails/chapter-16.jpg',
  title: 'Garbage In, Garbage Out',
  items: [{
    id: 'landfill-in-hawaii-and-new-delhi',
    kind: 'video',
    time: 3,
    title: 'Landfill in Hawaii and New Delhi',
    instructions: 'This video highlights how landfills work on different sides of the earth',
    videoId: 'GXogi1FV_Iw',
  }, {
    id: 'select-a-video-title',
    kind: 'textResponse',
    time: 5,
    title: 'Select a video title',
    instructions: 'We don\'t like the title of this video. If you were to rename the video from its current title “Landfill in Hawaii and New Delhi” to something more appropriate, what would it be?',
  }, {
    id: 'read-and-draw',
    kind: 'imageResponse',
    time: 15,
    title: 'Read and Draw',
    instructions: 'From your textbook, read the section on Vermicomposting. Then use a pen and pencil to draw an image of what you have learned from that section. Take a picture of that image and upload it here.',
  }, {
    id: 'teach-a-friend',
    kind: 'textResponse',
    time: 15,
    title: 'Teach a friend',
    instructions: 'Find a friend that you can teach what you have learned in this chapter. Tell them everything you know, answer their questions. Then write down your experiences on what happened here.',
  }]
}, {
  // causes it to not show up on the homepage
  hidden: true,
  id: '999',
  thumbnailImagePath: '/chalees-min-heart.png',
  title: 'Test lesson',
  items: [{
    id: 'multiple-choice-example-1',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Multiple Choice Example 1',
    instructions: dedent`
      Select all that apply.
    
      Select Option 1 and 2, Option 3 and 4, or Option 5, and save to see an automatic response.
    `,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ],
    automaticResponses: [
      {
        answerSet: ['opt1', 'opt2'],
        response: 'This is an automatic response to demonstrate selecting multiple options.'
      },
      {
        answerSet: ['opt3', 'opt4'],
        response: 'This is an automatic response to demonstrate selecting multiple options.'
      },
      {
        answerSet: ['opt5'],
        response: 'This is an automatic response to demonstrate selecting one option.  **bold** ![image](https://i.ytimg.com/vi/6sta6Gkpgcw/maxresdefault.jpg)'
      }
    ]
  }, {
    id: 'multiple-choice-example-2',
    kind: 'multipleChoiceResponse',
    time: 2,
    title: 'Multiple Choice Example 2',
    instructions: 'Select only one',
    maxSelected: 1,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ]
  }, {
    id: 'multiple-choice-example-3',
    kind: 'multipleChoiceResponse',
    time: 3,
    title: 'Multiple Choice Example 3',
    instructions: 'Select up to two',
    maxSelected: 2,
    choices: [
      {
        id: 'opt1',
        text: 'Option 1'
      },
      {
        id: 'opt2',
        text: 'Option 2'
      },
      {
        id: 'opt3',
        text: 'Option 3'
      },
      {
        id: 'opt4',
        text: 'Option 4'
      },
      {
        id: 'opt5',
        text: 'Option 5'
      }
    ]
  }]
}];


// validate that all data items have ids that are unique
const learningItems = data.map(chapter => {
  if (!chapter.items) {
    alert(`Catastrophic error in chapter-data.js: chapter ${chapter.id} lacks an items list`);
    throw new Error();
  }
  
  const chapterItemIds = chapter.items.map(item => item.id);
  if (uniq(chapterItemIds).length !== chapterItemIds.length) {
    alert('Catastrophic error in chapter-data.js: there are two or more ' + 
      'learning items with the same ids within a single chapter! Ids in this chapter: \n' +
      chapterItemIds.join('\n'));
    throw new Error();
  }
  
  chapter.items.map(item => {
    if (!item.id) {
      alert('Catastrophic error in chapter-data.js: the learning item printed below lack an id. ' +
        'It must have a unique id:\n' + JSON.stringify(item, null, 2));
      throw new Error();
    } else if (!/^[\w\d-]+$/.test(item.id)) {
      alert(`Catastrophic error in chapter-data.js: item id ${item.id} ` + 
        'should only contain letters, numbers, and hyphens');
      throw new Error();
    }
  })
});

// TODO: add automaticResponses id validation too

export default data;