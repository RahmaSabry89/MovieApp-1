# MovieApp-1

Project aims to create a Movie App.
In this project, I designed a Movie App with many features.
I provided the movie information with the api I got from the https://www.themoviedb.org/documentation/api site.
And I used Firebase for authentication.
The user can log in and register with email address .

first signup page which create user in firebase then login with this user then view the home page which
contain button favourite to route to favourites movies which contain favourites movies (stored in local storage) selector to select between movies(top - upcoming - nowplaying) when click on one of these movies it route to Movie page whic contain a details about the movie and comments about it

i wrote function handleRegister to handle the create of user and handleLogin to handle that the user that stores in firebase the same and login

handlePostComment to store a comment in local storage and appear in the movie page

handleReply store reply to the comment and appear it in the movie page

add_favorite store the favourite movie i select in local storage and appear on the favourites movies

add_like store the liked movie i select in local storage

At the end of the project, following topics are to be covered:

HTML
CSS
JS
ReactJS
Axios
Firebase
Bootstrap
