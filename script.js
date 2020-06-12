window.onload = () => {
    let who = ["My dog", "Susan's cat", "The Grinch", "My boyfriend"];
    let what = ["licked my face", "scratched my eye", "stole Christmas", "ate my icecream"];
    let when = ["this morning", "last night", "yesterday", "after lunch"];

    var selectedWho = who[Math.floor(Math.random() * who.length)]; 
    var selectedWhat = what[Math.floor(Math.random() * what.length)]; 
    var selectedWhen = when[Math.floor(Math.random() * when.length)];

    var excuse = selectedWho + " " + selectedWhat + " " + selectedWhen;

document.getElementById("title").innerHTML = excuse;
}
