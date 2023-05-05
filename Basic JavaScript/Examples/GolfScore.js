const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    let answer;
    if (strokes == 1) {
        answer = "Hole-in-one!";
    } else if (strokes <= par - 2) {
        answer = "Eagle";
    } else if (strokes == par - 1) {
        answer = "Birdie";
    } else if (strokes == par) {
        answer = "Par";
    } else if (strokes == par + 1) {
        answer = "Bogey";
    } else if (strokes == par + 2) {
        answer = "Double Bogey";
    } else if (strokes >= par + 3) {
        answer = "Go Home!";
    }
    return answer;
}