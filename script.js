// Arrays with different pieces of data
const subjects = ["The quick brown fox", "A lazy dog", "The clever cat", "An excited rabbit"];
const actions = ["jumps over", "sits on", "runs around", "dances with"];
const objects = ["the lazy dog", "a high wall", "a patch of grass", "a pile of leaves"];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateMessage() {
    const subject = getRandomElement(subjects);
    const action = getRandomElement(actions);
    const object = getRandomElement(objects);
    
    const message = `${subject} ${action} ${object}.`;
    
    document.getElementById('message').textContent = message;
}
