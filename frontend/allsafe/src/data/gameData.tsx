export const gameData = {
    q0: {
        id: 0,
        question: 'What is your favorite color?',
        answers: [
            {
                text: 'Blue',
                link: 'q1',
            },
            {
                text: 'Red',
                link: 'q2',
            },
        ],
    },
    q1: {
        id: 1,
        question: 'Another favorite color between orange and purple?',
        answers: [
            {
                text: 'Orange',
                link: 'q2',
            },
            {
                text: 'Purple',
                link: 'q3',
            },
        ],
    },
    q2: {
        id: 2,
        question: 'Now choose between today and tomorrow?',
        answers: [
            {
                text: 'Tomorrow',
                link: 'q3',
            },
            {
                text: 'Today',
                link: 'q4',
            },
        ],
    },
    q3: {
        id: 3,
        question: 'Ok yes or no final question',
        answers: [
            {
                text: 'Yes',
                link: 'q8',
            },
            {
                text: 'No',
                link: 'q9',
            },
        ],
    },
}
