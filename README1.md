# SenseOfWalk-web
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
(No Hook or Redux was used in here)


## Design V1.0 - 7.16
Please refer to this [design](https://xd.adobe.com/view/2b4f374d-0cf2-4be2-68e0-b7bd66769044-5d7e/specs/) for the implementation.
For the wiget, here is the [video](https://drive.google.com/file/d/1tgCuzT1Ex5qz7ah0xgEP0V4YL3c4Qg08/view) and [picture1](https://drive.google.com/file/d/1OcyRmq-yCyUYJlCRIxp7MUtbHTCdqe04/view), [picture2](https://drive.google.com/file/d/1E5hpW6LN16cPbtu1bSpFz0VKgWHE_GX4/view), [picture3](https://drive.google.com/file/d/1wj9eCAHV3bEss2KjGDO-TTBtWjoHcMu3/view), [picture4](https://drive.google.com/file/d/1EyK8gr3LNNH_l_yx2_m8YaWGgAJOUOL-/view), [picture5](https://drive.google.com/file/d/1xLdXY9hslwIdsx_g2OFN1AOfLt4jBmEk/view).



## Design V2.0 (added the User Profile Page) - 8.6
For the design of V2.0, here is the [video](https://drive.google.com/file/d/1xn52xmNLj8eYbJNYQgsTsfKHsHvyNrJd/view) 
and [upgrade](https://drive.google.com/file/d/1ncbirFciAb0ca7y6ftEcXf8bI8mb93T_/view), 
[help](https://drive.google.com/file/d/1f6XJm2mzNTS5_7np2Qt26VSg9n6YS2ry/view?usp=drive_web), 
[data](https://drive.google.com/file/d/18LKlvct3T52FmlUNky4kCE1l2IeVijCg/view?usp=drive_web), 
[api](https://drive.google.com/file/d/1uNzRwE2oWRiYloW8AgXtwaLt6eXv8SL6/view?usp=drive_web), 
[widgetsselect](https://drive.google.com/file/d/1yDPGCBkmpQP0ikbDO-YlBQeAL3vi8UGT/view?usp=drive_web),
[widgetbuilder](https://drive.google.com/file/d/1zhNf43VzufjhwCqZah25J8fz5ec5ZqJI/view?usp=drive_web), 
[widgethome](https://drive.google.com/file/d/1tFBCmUUU3-1Eb0qzCZJm4qo0MGMcIGjq/view?usp=drive_web), 
[profile](https://drive.google.com/file/d/1TUfRtYlPPdKvzAcj8aVBktf1yboRLxQD/view?usp=drive_web), 
[Sign-up](https://drive.google.com/file/d/16-_1CDCojl6lsQ_12Sg7LuRCCYIApaMx/view?usp=drive_web).

The design document could be found in [here](https://xd.adobe.com/view/2b4f374d-0cf2-4be2-68e0-b7bd66769044-5d7e/grid).

## Design V3.0 (update the Map part)
### Design V3.0.1 - 8.19
Here is the [video](https://drive.google.com/file/d/1DENky5ZL2hQijfTrfxN0WCdScrZoZnHM/view?usp=drive_web) for the map part.
And these are pictures: [picture1](https://drive.google.com/file/d/1oUrDnU1YCXv4bFFV_4P9elvrpqGf78uF/view?usp=drive_web),
[picture2](https://drive.google.com/file/d/12NCAMboP2duB-aJRkYFArEHRvbJTJbek/view?usp=drive_web),

### Design V3.0.2 - 8.19
Here is the [video](https://drive.google.com/file/d/1ru4Va78xE1f2yxE_PYI_LCyQu1MfY43Q/view?usp=drive_web) for the map part.
And these are pictures: [picture1](https://drive.google.com/file/d/1sAw7_13ndsCoZ-i6m7rpY5sDLnIneM7v/view?usp=drive_web),
[picture2](https://drive.google.com/file/d/1Uno21NtKnG3G2RRe558ppwHaN8JwmQaD/view?usp=drive_web),
[picture3](https://drive.google.com/file/d/17x4KY7U9cGt_1czFNFQOP72mAimNOjAr/view?usp=drive_web).
The design document could be found in [here](https://xd.adobe.com/view/2b4f374d-0cf2-4be2-68e0-b7bd66769044-5d7e/grid/).

### Design V3.0.3 - 8.26
Here is the [video](https://drive.google.com/file/d/1QJbCXRYLBWqN6tr2sH4qSKR7RnQpv87M/view?usp=drive_web) for the map part.
And these are pictures: [picture1](https://drive.google.com/file/d/1mlg8oC3uHbrpV2xQzlSS4VFQkPStZ2Ip/view?usp=drive_web),
[picture2](https://drive.google.com/file/d/1rc33UtNKO4Zp6eEC_m5dCG_oSmrLOUGQ/view?usp=drive_web),
[picture3](https://drive.google.com/file/d/1dR4scnykPNwbAWbGa5CtyjqgZlo8Bi3T/view?usp=drive_web).
[picture4](https://drive.google.com/file/d/1BZXRnkUIwk9sFkGBQZaDkIa-dNRxmEcw/view?usp=drive_web).





# Summary until 8.27
Firstly, we were working on the implementation of Design V1.0 using html, css and JS (senseofwalk-app). 
Then, we switched to the React framework when the Design V3.0 was released (senseofwalk-v2).

## API to request data
Request the score for an address with respect to 'Feature' and "Range"
```js
Format: http://34.227.93.214:8080/SenseOfWalkAPI_war/api?address=?&category=?&areatype=?
Example: http://34.227.93.214:8080/SenseOfWalkAPI_war/api?address=573 Hudson St, New York, NY 10014, USA&category=Nature&areatype=Block
```


### widget
```html
http://34.227.93.214:8080/SenseOfWalkAPI_war/widget?address=573 Hudson St, New York, NY 10014, USA
```

### api
```html
http://34.227.93.214:8080/SenseOfWalkAPI_war/api?address=573 Hudson St, New York, NY 10014, USA&category=Nature&areatype=Block
```

### data
```html
http://34.227.93.214:8080/SenseOfWalkAPI_war/data?city=New York&category=Nature&areatype=Block
```





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
