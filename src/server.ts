import {FastServiceApp} from "./app";

// Starts the Node-Boot server with the application deployed
new FastServiceApp()
    .start()
    .then(app => {
        app.logger.debug(`FastServiceApp started successfully at port ${app.appOptions.port}`);
    })
    .catch(reason => {
        console.error(`Error starting FastServiceApp: ${reason}`);
    });
