import { storageService } from '../../../services/storage-service.js'
import { utilsService } from '../../../services/utils-service.js'


export const mailService = {
    sendMail,
    getMailById,
    updateMail,
    sendToDrafts,
    countUnreadMails,
    query
}

const KEY = "mails";

var gMails = [
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: `2 Biotech Stocks With Big FDA Decisions in August`,
        body: `Clinical trials provide the data used to justify the approval submissions to the regulators – and with regulator approval being the gateway to getting new drugs on the market, decisions from the FDA or the European Union can make or break a biotech stock. With this in mind, we took a closer look at two biotech stocks awaiting big decisions from the`,
        isStarred: false,
        isRead: false,
        sentAt: 1555133930294
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: `You still have $20 OFF the Fit! X-Board: An Easy-to-setup Doorway Hangboard, Pullup Bar and Workout Station!`,
        body: `The X-board clamps above most doorways, includes a full pull-up bar, and is sold with a hangboard (shown below) that allows you to strengthen your grip with minimal setup and no installation required..`,
        isStarred: false,
        isRead: true,
        sentAt: 1551233930594
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: `You'd love these Dan shirts`,
        body: `Upgrade your style with Dan t-shirts from Temobase! Browse through different shirt styles and colors. Search for your new favorite t-shirt today!`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `Quora Digest`,
        body: `Will Node.js become more popular than Java for backend software development?`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133930594
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `AddThis Team`,
        body: `AddThis Share Buttons are now available for Accelerated Mobile Pages!`,
        isStarred: true,
        isRead: false,
        sentAt: 1551333930594
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `Medium Daily Digest`,
        body: `The Fastest Way to Find Minimum and Maximum Values in an Array in JavaScript
        JavaScript offers several ways to find the smallest and largest numbers in a list, including the built-in…`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133930694
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: `After years of global conflict, a glimmer of hope has revealed itself. Play as a select group of soldiers hailing from around the world as they come together to turn the tides of war, changing history forever.
        In Call of Duty®: Vanguard, players will rise to meet the world's gravest threat and experience WWII through the eyes of its heroes while fighting across four theatres of war on 5 November.`,
        body: 'Pick up!',
        isStarred: true,
        isRead: true,
        sentAt: 1551133930593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `sharpen your Photoshop skills in nine days.`,
        body: `Expand your Photoshop skills with our Creative Challenge.
        Complete nine challenges in nine days, share your work with your creative community, and grow your design portfolio.`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133930554
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `Anima 4.0. for React.`,
        body: `Join the world's leading teams and make inefficient handoffs a thing of the past.`,
        isStarred: false,
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `Register now for the creative event of the year`,
        body: `Come together for this annual celebration of creativity.
        Refuel your passion, retool your skills and reconnect with fellow creatives from around the world.
        Be a part of this amazing community.`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `How To Use Destructuring and Arrow Functions to Improve Your JavaScript Code`,
        body: `Google IT!`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `20% off the only video maker you need`,
        body: `Want to create stand-out videos for your business but don’t need Promo’s full range of features just yet?
        Our Annual Starter plan is perfect for you. Get all the essential features and unlimited videos with no extra cost!`,
        isStarred: true,
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `The Siege of Paris is now available!`,
        body: `Besiege the fortified City of Paris and fight fierce new enemies.The Siege of Paris is included in your Season Pass.`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Priel',
        subject: `3 Electric Vehicle Stocks to Benefit From an EV Boom; Analysts Say ‘Buy’`,
        body: `Evercore analyst James West expects massive Federal incentives to be announced over the coming weeks for the EV space. If West is right, then EVs will offer investors a wide range of opportunity in the coming months and years.
        Wall Street analysts have taken notice, and are tagging the stocks that offer high return potential now, for investors willing to take on some risk (inherent in a new technology and/or manufacturing track) and get in on the ground floor`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: `Any Problem, Any Device, Anytime, Anywhere`,
        body: `With work-from-home solutions, printer and WiFi setup, virus and malware removal, and so much more, LiveTech support stands as the fastest,
        most comprehensive computer and device solution center ready to help you anytime, anywhere.`,
        isStarred: false,
        isRead: false,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'outcome',
        address: 'googleIt@gmail.com',
        subject: `Congrats on your first ride`,
        isStarred: false,
        body: `Way to go on taking your first ride with TIER—whether you’re going to work, sightseeing, or just switching up your routine, 
        we’re here to make your next trip convenient and fun. But the adventure doesn’t stop here. Take your next ride now!`,
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'outcome',
        address: 'googleIt@gmail.com',
        subject: 'lets do it!',
        isStarred: false,
        body: 'Pick up!',
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'outcome',
        address: 'Priel@gmail.com',
        subject: `Last Call | Zoom for the Conference Room`,
        isStarred: false,
        body: `Join this webinar to discover how Zoom is your destination for conference rooms!
        Zoom Rooms enable you to build new software-based video collaboration spaces with video,
        audio, integrated calendaring, and wireless content sharing.`,
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'draft',
        address: 'Priel@gmail.com',
        subject: 'Wassap?',
        isStarred: false,
        body: 'I started to write a letter but didn\'t found the',
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'draft',
        address: 'Priel@gmail.com',
        subject: `Say no more`,
        isStarred: false,
        body: `just wanted t...`,
        isRead: true,
        sentAt: 1551133940593
    },
    {
        id: utilsService.makeId(),
        type: 'draft',
        address: 'Priel@gmail.com',
        subject: `I have nothing to say...`,
        isStarred: false,
        body: `goodbye`,
        isRead: true,
        sentAt: 1551133940593
    }
]


function query() {
    let mails = storageService.loadFromStorage(KEY);
    if (!mails || mails.length === 0) {
        mails = gMails;
        storageService.saveToStorage(KEY, mails);
    }
    return Promise.resolve(mails);
}

function getMailById(mailId) {
    return query()
        .then(mails => {
            let mail = mails.find(mail => mail.id === mailId)
            return Promise.resolve(mail);
        })
}

function updateMail(mailId, paramToChange, isUnReadClick = true) {
    return getIdxById(mailId)
        .then((mailIdx) => query()
            .then(mails => {
                var currMail = mails[mailIdx]
                if (paramToChange === 'toggleStar') {
                    currMail.isStarred = !currMail.isStarred;
                }
                else if (paramToChange === 'removeMail') {
                    if (currMail.type === 'trash') mails = mails.filter(mail => mail.id !== mailId);
                    else currMail.type = 'trash';
                }
                else if (paramToChange === 'setRead') {
                    currMail.isRead = isUnReadClick;
                }
                storageService.saveToStorage(KEY, mails)
                return Promise.resolve()
            })
        )
}

function getIdxById(mailId) {
    return query()
        .then(mails => {
            var idx = mails.findIndex(mail => mail.id === mailId)
            return Promise.resolve(idx)
        })
}

function sendToDrafts(draft) {
    const newDraft = {
        id: utilsService.makeId(),
        type: 'draft',
        address: draft.address,
        subject: draft.subject,
        body: draft.body,
        isStarred: false,
        isRead: true,
        sentAt: Date.now()
    }
    return query()
        .then(mails => {
            mails.push(newDraft);
            storageService.saveToStorage(KEY, mails);
            return Promise.resolve();
        })
}


function sendMail(mail) {
    const newMailIncome = {
        id: utilsService.makeId(),
        type: 'income',
        address: 'Dan',
        subject: mail.subject,
        body: mail.body,
        isStarred: false,
        isRead: false,
        sentAt: Date.now()
    }

    const newMailOutcome = {
        id: utilsService.makeId(),
        type: 'outcome',
        address: mail.address,
        subject: mail.subject,
        body: mail.body,
        isStarred: false,
        isRead: true,
        sentAt: Date.now()
    }

    return query()
        .then(mails => {
            mails.unshift(newMailIncome);
            mails.unshift(newMailOutcome);
            storageService.saveToStorage(KEY, mails);
            return Promise.resolve();
        })
}

function countUnreadMails() {
    let counter = 0
    return query()
        .then(mails => {
            mails.forEach(mail => {
                if (!mail.isRead) counter++;
            })
            return Promise.resolve(counter);
        })
}

