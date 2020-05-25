ng-network-loader is an angular library that display loading effect on all HTTP request.

This library displays a loading icon on a part of the screen to give the user an idea that the app is not broken but responding to a request.

The loading icon disappears at the end of all network request. ng-network-loader comes with 11 network loading display type and can be set to display at any corner of the web page.

To get started with ng-network-loader

*   install the module: npm i ng-network-loader
*   add NetworkLoaderModule to your app.module.ts
*   add <ng-network-loader [loaderType]="0 to 10" [loaderPosition]="1 to 4"></ng-network-loader> at the bottom of your app.component.html
    
    Note: loaderType is the loading icon to be displayed while loaderPosition is the the position to display the loading icon.
    
*   To use the default setting just add <ng-network-loader></ng-network-loader> at the bottom of the app.component.html
*   See Documentation on https://ngnetworkloader.github.io
