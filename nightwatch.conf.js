module.exports =  {

  "src_folders" : ["tests"],
  "page_objects_path" : ["page-objects"],
  "globals_path" : "global.js",
  "webdriver": {
      "start_process": "true",
      "server_path": "node_modules/.bin/chromedriver.exe",
      "port": 9515
  },
  "test_settings": {
      "default": {
        "desiredCapabilities": {
          "browserName": "chrome"
        },
        "waitOperationTimeout": 1000,

      }
    },

};