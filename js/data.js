const profile = {
    general: [
        {
            name: "Statements I Agree With!",
            statements:[
                "Reliable – The one thing that galls Protagonists the most is the idea of letting down a person or cause they believe in. If it’s possible, Protagonists can always be counted on to see it through.",
                "Charismatic – Charm and popularity are qualities Protagonists have in spades. They instinctively know how to capture an audience, and pick up on mood and motivation in ways that allow them to communicate with reason, emotion, passion, restraint – whatever the situation calls for. Talented imitators, Protagonists are able to shift their tone and manner to reflect the needs of the audience, while still maintaining their own voice.", 
                "Natural Leaders – More than seeking authority themselves, Protagonists often end up in leadership roles at the request of others, cheered on by the many admirers of their strong personality and positive vision."
            ]
        },
        {
            name: "Statements I Disagree With",
            statements:[
                "Too Sensitive – While receptive to criticism, seeing it as a tool for leading a better team, it’s easy for Protagonists to take it a little too much to heart. Their sensitivity to others means that Protagonists sometimes feel problems that aren’t their own and try to fix things they can’t fix, worrying if they are doing enough.",
                "Struggle to Make Tough Decisions – If caught between a rock and a hard place, Protagonists can be stricken with paralysis, imagining all the consequences of their actions, especially if those consequences are humanitarian.",
                "Tolerant – Protagonists are true team players, and they recognize that that means listening to other peoples’ opinions, even when they contradict their own. They admit they don’t have all the answers, and are often receptive to dissent, so long as it remains constructive."
            ]
        },
        {
            name: "Why I Disagree:",
            details:[
                "While I agree with parts of this statement, I don't have much difficulty letting someone elses problem be their own. I love to help people with their problems, but I don't morph into having that problem as well",
                "I used to experience this constantly, but I've learned over time to just let things go, and not overthink everything out of the gate. Time has tought me that many things have a way of resolving themselves, without my need to intervene.",
                "While I do believe this about myself, I sometimes struggle to make others feel this about me. I tend to believe I'm right before I believe I'm wrong, and depending on the situation I will push my belief harder than other times. Usually this happens around a time crunch when I simply feel like there isn't time for 'wrongness'."
            ]
        }
    ],
    peopleLikeMe: [
        {
            name: "Barack Obama",
            image: "../images/barackobama.svg",
        },
        {
            name: "Daenerys Targaryen",
            image: "../images/dannytargaryen.svg",
        },
        {
            name: "Oprah Winfrey",
            image: "../images/oprahwinfrey.svg",
        },
        {
            name: "Ben Affleck",
            image: "../images/benaffleck.svg"
        }
    ],
    communication: [
        {
            name: "To My Little-Sib",
            details: "I believe the best way to communicate is face to face. If my little sib is struggling or just inquisitive, its best to discuss and chat in person so I can really understand what is going on."
        },
        {
            name: "To My Instructors",
            details: "I love the current approach every instructor is taking. Being able to work one on one with them when I am stuck is a blessing. I would love more time to group up and tackle practices together, but I understand the enormity of what we must learn with the little time that we have."
        },
        {
            name: "To My Teammates",
            details: "I would like teammates to communicate with me directly for regular work and privately via slack or pulled aside for sensitive concerns. If I am doing something wrong, I would definitely like to know about it ASAP."
        }
    ]

}

function setData(nameTag, jsObject){
    let stringifiedObject = JSON.stringify(jsObject);
    localStorage.setItem(nameTag, stringifiedObject);
}

setData("Personality Data - Ricky", profile);

