function App() {
    return `Hello webpack`;
}

let html = App();
document.body.innerHTML = html;

if (module.hot) { module.hot.accept(); }