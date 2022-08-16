module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        productName: "Express Store",
        appId: "express_store.com",
        win: {
          target: ["nsis"],
          icon: "public/icon.ico",

          // "requestedExecutionLevel": "requireAdministrator"
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
        files: ["**/*"],
      },
    },
  },
  transpileDependencies: ["vuetify"],
};
