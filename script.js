let goBackBtn = document.getElementById("goBack");
let goForwardBtn = document.getElementById("goForward");

goBackBtn.onclick = goBack;
goForwardBtn.onclick = goForward;

let imgLinks = [
    "https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1706463629335-d92264bbfd6f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1682695796497-31a44224d6d6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let imgLinksIndex = 0;
let imgLinksIndexMax = imgLinks.length - 1;

let img = document.getElementById("theImg");
img.src = imgLinks[imgLinksIndex];

function goBack() {
    if (imgLinksIndex == 0) {
        imgLinksIndex = imgLinks.length - 1;
        img.src = imgLinks[imgLinksIndex];
    } else {
        img.src = imgLinks[--imgLinksIndex];
    }
}

function goForward() {
    if (imgLinksIndex == imgLinksIndexMax) {
        imgLinksIndex = 0;
        img.src = imgLinks[imgLinksIndex];
    } else {
        img.src = imgLinks[++imgLinksIndex];
    }
}