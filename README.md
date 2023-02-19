In order to start the app, you will need to run the backend that was delivered for this semester without any modification.
If the port for it is not 3000, you can change the url in api.js in the lib directory located in src.
To start the app, just enter the command npm run dev in the terminal.

You can now go to the link delivered in the terminal, and you should arrive to the home page.

To get to the location page, you first need to sign in (or if you have no account, sign up as a user then sign in) 
with the link located in the top right.

In location page, you have multiples pages of locations and as a simple user,you can view the details of each one 
with the view link. (no modal as the buttons were not working on this page :( )

Sometimes the location page can not render properly, refreshing the page should repair it.

As an admin (you can not register as an admin, you must have one already created), you have the option to add a location
on the top of the page or delete a location at the bottom of each one in the location page.

To edit a page, go to the view link and you will have a new button to save the changes that you have made on the page.

you can sign out on any page with the sign out link in the top right when you are signed in.

All user stories have been done (except for the modal).

:warning: **Since the 19/02 update, the files have been updated to reduce the loading time in order to not timeout 
with the vercel deployment. However, you now need to use a modified version of the backend available here :**
https://github.com/BriceTot/secure-web-dev-backend







