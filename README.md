# CodeChallenge Example
This is a code exmaple writeen by Novak Zaballa. It is code challenge sent by a customer to contract my team.

## Description

This React Native App shows a single page containing tabular sales data to be aquired from a REST API, but mocked statically in a JSON for the code challenge pruposes. The App show the data and is able to filter the data by category and other criteria, with one click, offering buttons for this purpose. The Aoo also shows sales agregates at the top, that changes dinamically when filters are applied. This project uses redux as per customer request, and does not use react hooks.

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app). 

This project does NOT use Expo.

## Run
To run the code use either:

#### `npx react-native run-ios`

Or

#### `npx react-native run-android`

Rect Native CLI attempts to open your app in the iOS Simulator if you're on a Mac and have it installed, or Android emulator, correspondignly.

When asked for email and password. Type in any email and password. The app is not validating those fields since it was out of the scope of the challenge. Also, there are no unit tests non strong typed control, however the project is ready to use Jest and Flow.
