module.exports =  {

    "src_folders" : ["tests"],
    "page_objects_path" : ["page-objects"],
    "globals_path" : "global.js",
    "webdriver": {
        "start_process": "true",
        "server_path": "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
        "port": 9515
    },
    "test_settings": {
        "default": {
    //      "test_runner" : "mocha",
          "desiredCapabilities": {
            "browserName": "chrome",
            'chromeOptions': {
              'args': ['--headless']
          } // //Enable this Block to Run via Command Line
          },
          "waitOperationTimeout": 1000,
  
        }
      },
  
  };