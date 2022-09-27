const quotes = [
    {
        quote: '모든 인생은 실험이다 . 더 많이 실험할수록 더나아진다.'
    },
    {
        quote: '비가 내리고 바람이 불어야만 비옥한 땅이 된다.',
    },
    {
        quote: '실수는 곧 경험이다.'
    },
    {
        quote: '실패란 넘어지는 것이 아니라, 넘어진 자리에 머무는 것이다.'
    },
    {
        quote: '열정은 타오르는 것이 아니라 지치지 않는 것이다.'
    },
    {
        quote: '행복은 무엇보다 건강 속에 있다.'
    },
    {
        quote: '행복은 불행을 피하는 것에서 성립된다.'
    },
    {
        quote: '노력이야 말로 잠재력의 자물쇠를 푸는 열쇠다.'
    },
    {
        quote: '인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.'
    },
    {
        quote: '문제점을 찾지 말고 해결책을 찾으라.'
    },
    {
        quote: '가장 용감한 행동은 자신을 위해 생각하고 큰소리로 외치는 것이다.'
    },
    {
        quote: '남들은 그렇게 당신에 대해 많이 생각하지 않는다.'
    },
];

function getWiseSaying() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQuote.quote;
}