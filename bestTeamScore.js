/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const len = ages.length;
    const players = []

    const dp = Array.from({ length: len}, () => 0)
    for (let i=0; i<len; i++) {
        players.push({
            score: scores[i],
            age: ages[i]
        })
    }

    players.sort((a, b) => a.age === b.age ? b.score - a.score : b.age - a.age);

    for(let i=0; i<len; i++) {
        dp[i] = players[i].score
        for(let j=0; j<i; j++) {
            if (players[j].score >= players[i].score) {
                dp[i] = Math.max(dp[i], dp[j] + players[i].score)
            }
        }
    }

    return Math.max(...dp)
};
