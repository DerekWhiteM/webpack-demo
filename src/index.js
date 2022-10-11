import App from './app.js';

let html = App();
document.body.innerHTML = html;

if (module.hot) {
    module.hot.accept('./app.js', function() {
        console.log('updated');
        document.body.innerHTML = '';
        html = App(); 
        document.body.innerHTML = html;
    });
}