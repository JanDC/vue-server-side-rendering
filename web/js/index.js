try {
    const Vue = require(__dirname + '/../web/js/node_modules/vue/dist/vue.js');
    const app = new Vue({
        template: `<div>Hello World {{(new Date()).getFullYear()}}</div>`
    });

    const renderer = require(__dirname + '/../web/js/node_modules/vue-server-renderer/index.js').createRenderer()

    renderer.renderToString(app).then(html => {
        console.log(html)
    }).catch(err => {
        console.error(err)
    })
} catch (e) {
    console.log(__dirname);
    console.log(e);
}
