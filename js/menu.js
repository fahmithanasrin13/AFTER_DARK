
const experiences = [
    {
        id: 1,
        title: "The First Move",
        category: "THE ART OF TEMPTATION",
        description: "Tonight, one of us has to make the first move. No announcements. Just a look, a whisper, and a kiss that says everything.",
        instruction: "Look into each other's eyes. Whoever looks away first has to initiate the first kiss.",
        duration: "15 MINUTES"
    },
    {
        id: 2,
        title: "Kiss Me Like You Mean It",
        category: "A LITTLE CLOSER",
        description: "A kiss chosen by you, delivered by me. No rushing this one.",
        instruction: "Take turns choosing a kiss: forehead, cheek, nose, hand or lips. Make each one last as long as you both enjoy.",
        duration: "10 MINUTES"
    },
    {
        id: 3,
        title: "The Whisper Test",
        category: "WORDS AFTER DARK",
        description: "Some words sound different when whispered close enough.",
        instruction: "Take turns whispering three things you adore about each other and one sweet thought you've been too shy to say.",
        duration: "15 MINUTES"
    },
    {
        id: 4,
        title: "Blindfolded by Love",
        category: "SENSORY PLAY",
        description: "Close your eyes. Let your other senses take over.",
        instruction: "One person wears a comfortable blindfold while the other offers three safe surprises: a favourite scent, a gentle touch or a small treat. Switch roles if you both want.",
        duration: "20 MINUTES"
    },
    {
        id: 5,
        title: "The Long Kiss",
        category: "SLOW & SWEET",
        description: "One favourite song. Two people. Absolutely no hurry.",
        instruction: "Choose a song you both love, hold each other close and share a slow kiss. Pause whenever either of you wants.",
        duration: "ONE SONG"
    },
    {
        id: 6,
        title: "The Royal Treatment",
        category: "YOUR PRIVATE SPA",
        description: "Tonight, you are the only person who needs taking care of.",
        instruction: "Prepare a relaxing playlist and warm towel. Give each other a gentle shoulder, neck or hand massage, taking turns.",
        duration: "30 MINUTES"
    },
    {
         id: 7,
         title: "Intimacy Tells a Story",
         category: "DRAWN IN SECRET",
         description: "A secret little artwork, created with a touch of imagination and a hint of mischief.",
         instruction: "Take turns closing your eyes while your partner draws a tiny symbol, shape or pattern using a skin-safe washable body marker on a mutually agreed area of the body or over clothing. Guess what they have drawn, then switch roles. Avoid sensitive skin and intimate mucous membranes.",
         duration: "15 MINUTES"
    },
    {
        id: 8,
        title: "The Almost Kiss",
        category: "PLAYFUL TEMPTATION",
        description: "The anticipation is part of the magic.",
        instruction: "Move close for a kiss, pause, and whisper one genuine compliment. Then let the other person decide whether to close the distance.",
        duration: "10 MINUTES"
    },
    {
        id: 9,
        title: "The Outfit Invitation",
        category: "A PRIVATE REVEAL",
        description: "Dress for an evening that belongs only to us.",
        instruction: "Choose an outfit for each other from clothes you already own. Get dressed, reveal your choices privately and give each other a compliment.",
        duration: "20 MINUTES"
    },
    {
        id: 10,
        title: "Seduction Touch",
        category: "THE ART OF SEDUCTION",
        description: "A lingering touch, a stolen glance, and the delicious anticipation of getting closer.",
        instruction: "Take turns guiding each other's hand to a mutually comfortable place on the body. Explore slow, gentle touches over skin or clothing. Pause to ask what feels good, and let each person guide, pause or stop whenever they wish.",
        duration: "15 MINUTES"
    },
    {
        id: 11,
        title: "Secret Photo Session",
        category: "BEHIND CLOSED DOORS",
        description: "No audience. No filters required. Just the two of us capturing moments nobody else gets to see.",
        instruction: "Create a private mini photoshoot together. Take turns choosing romantic poses, playful expressions and close-up shots. Decide together which pictures to keep. Every photo must be consensual, private and never shared without permission.",
        duration: "20 MINUTES"
    },
    {
        id: 12,
        title: "The Compliment That Lingers",
        category: "WORDS YOU DESERVE",
        description: "Not ordinary compliments. The ones you remember.",
        instruction: "Take turns giving five specific compliments. Include one about appearance, one about personality, one about a memory and two about things you secretly admire.",
        duration: "15 MINUTES"
    },
    {
         id: 13,
        title: "Truth or Temptation",
        category: "CONFESS OR INDULGE",
        description: "Every answer reveals a little more. Every challenge brings us a little closer.",
        instruction: "Take turns choosing Truth or Temptation. Truth means answering a daring romantic question honestly. Temptation means completing a playful, mutually agreed affectionate challenge. Each person gets three turns and can always pass or choose another challenge.",
        duration: "20 MINUTES"
    },
    {
        id: 14,
        title: "The Temptation Timer",
        category: "TEN MINUTES CLOSER",
        description: "Ten minutes without distractions. Just our attention.",
        instruction: "Set a ten-minute timer. Spend it making eye contact, holding hands, exchanging compliments and sharing gentle kisses if both want.",
        duration: "10 MINUTES"
    },
    {
        id: 15,
        title: "The Secret Signal",
        category: "OUR LITTLE SECRET",
        description: "A signal that means: come a little closer.",
        instruction: "Invent a private gesture or phrase together. Use it whenever you want to invite the other person into a hug, cuddle or kiss.",
        duration: "ANYTIME"
    },
    {
        id: 16,
        title: "The Favourite Place",
        category: "LEARN ME AGAIN",
        description: "Show me the little things that make you feel loved.",
        instruction: "Take turns showing your favourite way to receive a hug, cuddle or kiss. Ask what feels comfortable and remember the answers.",
        duration: "20 MINUTES"
    },
    {
        id: 17,
        title: "The Candlelit Close-Up",
        category: "JUST US",
        description: "Soft light. Quiet music. The rest of the world can wait.",
        instruction: "Set up a safe candlelit or warm-lamp corner. Put your phones away and spend time talking, cuddling or simply enjoying each other's company.",
        duration: "ONE HOUR"
    },
    {
        id: 18,
        title: "The Shower-Date Invitation",
        category: "WARM & PRIVATE",
        description: "An invitation to share a little everyday romance.",
        instruction: "If both are comfortable, share a warm shower with music and affection. Keep the space safe and non-slippery. A cosy shower-free alternative is a shared skincare evening.",
        duration: "YOUR OWN TIME"
    },
    {
        id: 19,
        title: "The Fantasy Conversation",
        category: "DREAM A LITTLE",
        description: "Tell me about a romantic scene you'd love us to experience.",
        instruction: "Each person describes a dream romantic scenario. Choose one small, comfortable and realistic detail to recreate together.",
        duration: "20 MINUTES"
    },
    {
        id: 20,
        title: "The Midnight Confession",
        category: "AFTER-HOURS TRUTHS",
        description: "A little honesty, a little vulnerability, a lot of us.",
        instruction: "Share one unspoken appreciation, one favourite memory and one hope for your future together. Listen without interrupting.",
        duration: "20 MINUTES"
    },
    {
        id: 21,
        title: "The No-Phones Rule",
        category: "UNDIVIDED ATTENTION",
        description: "For one hour, nothing gets our attention except us.",
        instruction: "Put both phones away for one hour. Choose between a cuddle, a conversation, a board game or making something together.",
        duration: "ONE HOUR"
    },
    {
        id: 22,
        title: "The Private Chef's Table",
        category: "SERVED WITH LOVE",
        description: "Tonight's menu is chosen by the birthday boy.",
        instruction: "Athish chooses the menu. Fami prepares his favourite meal or a simple homemade version, sets the table and serves him.",
        duration: "ONE SPECIAL MEAL"
    },
    {
        id: 23,
        title: "The Replay Button",
        category: "OUR HISTORY",
        description: "One favourite memory deserves an encore.",
        instruction: "Choose a favourite romantic memory together. Recreate one detail from it, whether it's the music, food, location or the way you held each other.",
        duration: "A MEMORY REVISITED"
    },
    {
        id: 24,
        title: "The Untamed Evening",
        category: "YOU SET THE MOOD",
        description: "Tonight, you get to choose the atmosphere.",
        instruction: "Athish chooses one mood: slow and romantic, playful and teasing, or spontaneous and adventurous. Together, decide on an activity that suits both of you.",
        duration: "YOUR EVENING"
    },
    {
        id: 25,
        title: "Made for Athish",
        category: "THE SEALED SURPRISE",
        description: "One experience. One person. No spoilers.",
        instruction: "A sealed surprise prepared exclusively for Athish by Fami. Open this experience together when redeemed. The surprise will be revealed in person, and either person can choose what feels comfortable.",
        duration: "TOP SECRET"
    }
];
