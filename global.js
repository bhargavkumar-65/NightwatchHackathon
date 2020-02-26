/* var allure = require("allure-commandline");

module.exports = {
    reporter: function(results , done) {
      let srcResult = "./";
      var generation = allure(["generate", "--clean", srcResult]);
      generation.on ('exit',()=>{
        done();
      });
    }
}; */

var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
	openBrowser: true,
  reportsDirectory: __dirname + '/reports',
  hideSuccess: false,
//  themeName: 'default',
//  customTheme:'/node_modules/nightwatch-html-reporter/lib/themes/default/report.pug'
});
module.exports = {
	reporter: reporter.fn
};