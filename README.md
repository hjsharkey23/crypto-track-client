
Crypto track is an application that helps you keep track of all of your
different Cryptocurrency in one place. It's an all in one stop where you
enter a coin name and the amount you have so you can keep track without
having to sign into all of your various online wallets.

![Screenshot](https://i.imgur.com/6YRaUuD.png)

Link to application: https://hjsharkey23.github.io/crypto-track-client/


Link to Back-End: https://lit-island-71568.herokuapp.com/
Back-End Repo: https://github.com/hjsharkey23/crypto-track


List of technologies/tools used: React, Rails, JSX, Javascript, NPM, PSql


For Crypto Track, I wanted to create an app where users could sign in to an
account and keep track of their crypto's As someone who has owned a lot of
different crypto's since 2011, I know how annoying it can be to constantly
have to sign in to all your different online wallets just to view your balance.
Many coins require a unique wallet and the passwords are either extremely long,
or you need to use a special hardware wallet to protet your keys.

With this in mind, my goal was to create a simple, lightweight React application
that would replace the pen and paper method of keeping track of your crypto.

This was my first React project so I wanted to make something simple that would
be a good foundation for something that can be packed with useful features. I
planned it with function in mind at first, making sure the page responded like
it should, and that there would be no bugs. I went step by step to make sure
a user could CRUD (Create, read, update, delete) their coins.

I ran into a few issues with React that took me a little while to figure out.
As it was new to me there were things passing down the user to each
authenticated action that gave me trouble. Overall my experience with React
was very positive, and when I was havig a problem with my code, I was only
a couple of words away from having it working, and eventually was able to
figure it out.

![Wireframe](https://i.imgur.com/s9qbUJx.jpg)

User Stories:

As a user I want to be able to sign in and sign out
As a user I want to be able to change my password
As a user I want to be able to add a coin
As a user I want to index a list of all my coins
As a user I want to be able to view a single coin
As a user I want to delete a coin
As a user I want to be able to edit and update a coin

Set up and installation:

1. Fork and Clone the repository
2. CD into the cloned directory
3. Run npm install
4. Run npm i react-bs-notifier
5. Run npm run start to spin up the local server
6. Click the back end repo link in this README and follow installation
  instructions.


Future Plans: I want to add a third party api that shows the market value
of all the coins that you enter. I would also like to add a calculator that
will do the math for you and show you the value of each coin as well as the
overwall value of your "wallet". I also plan to style the page to make it
look better. 
