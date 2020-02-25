var allure = require("allure-commandline");

module.exports = {
    reporter: function(results , done) {
      let srcResult = "./";
      var generation = allure(["generate", "--clean", srcResult]);
      generation.on ('exit',()=>{
        done();
      });
    }
};