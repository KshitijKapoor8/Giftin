Demo link (in case of technical failure):  https://youtu.be/9AQrwnR9xgw

Hi! The readme on the github is a better source for our project information, so it will display our project better.

### What our website does

Welcome to Giftin', a novel new platform in which users can view exactly what other users want and manage their own wishlists.

After signing up, all the user has to do is click the plus icon on the wishlist tab and add a new amazon link; the program will automatically get the price and title of the producct from the link, and it will store that information per user. 

The user can also search for the wishlists of other users on the search tab. When the user finds another user and clicks on his name, a modal will open up that will show the wishlist of the other user. Here, the user can buy the products, which will redirect to the amazon link, as well as remove that particular item from the wishlist of the other user.

### How we built it

We built our project using the MERN stack, which means we used MongoDB as our no document backend, express to create our own RestAPI, ReactJS for our frontend, and Node to manage all of the moving parts.

The first thing we did is make the general backend structure. In this structure, each user will have a wishlist attached to them, which they will be able to update. We made the RestAPI using express, and started on the frontend.

After finishing that, we worked on our frontend as well as connected the frontend to the backend for the login and signup.

Next, we started working on our wishlist. Each user had to be able to see their own wishlists, and since each wishlist array that each used had only stored amazon links, we had to implement our own webscraper to get the price and title from each amazon link. This was probably the bit that was the most time consuming, as we had to figure out how to use a proxy in order to make this feature.

Finally, we worked on adding links as well as searching for other users' information.

### To run this program, make sure you have nodejs installed, as well as have cloned the github repository at https://github.com/KshitijKapoor8/Giftin

npm install

npm install nodemon

In case there are errors with the clone, make sure all of the above commands are run.

Afterwards, cd into the backend folder, and in the terminal, run "nodemon server". Note, this may not always work in the very first try, just save the file again and it should start the server fine.

Then, open a new terminal, this time cd into the root project, and run "npm start".

A site should be running on localhost:3000, you should be able to use the entirety of the application.


1. Home Page
![image](https://user-images.githubusercontent.com/51217487/103327607-dc444980-4a1a-11eb-863c-5bd4255e7e88.png)

2. Login Page
![image](https://user-images.githubusercontent.com/51217487/103327624-efefb000-4a1a-11eb-902a-8eb5a6a035c6.png)

3. Your wishlist page when logged in
![image](https://user-images.githubusercontent.com/51217487/103327655-10b80580-4a1b-11eb-9ffc-0ca8f38bf0ce.png)

4. Adding a wishlist. Because we use a webscraper that we made ourselves, all the user has to do is input the amazon website link (unfortunately, no free Amazon API's exist).
![image](https://user-images.githubusercontent.com/51217487/103327667-24fc0280-4a1b-11eb-89c4-e397942c3cd0.png)

5. Search the database of users, and then see the wishlists of other users.
![image](https://user-images.githubusercontent.com/51217487/103327713-4e1c9300-4a1b-11eb-911c-18bd553b9185.png)
