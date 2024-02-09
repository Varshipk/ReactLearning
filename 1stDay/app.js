// const heading =React.createElement("h1",{},"Hello world from React!");
// const root=ReactDOM.createRoot(document.getElementById("root"));
const parent =React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"I am a H1 tag")));
console.log(parent);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// root.render(heading);