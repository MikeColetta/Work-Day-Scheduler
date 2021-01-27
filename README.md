# Work-Day-Scheduler

## Project Description
I wanted to build a day planner application that would color code the hour based on if it was in the past, present, or future. Then once I wrote in an appointment it would save that entry to local storage for later use. I used moment.js to get the current date and time to compare to the hours.

## My Process

My first step was to build the HTML. I implemented the bare bones CSS knowing I would update it later. Then I took some time to learn moment.js. I read a lot of the documentation and actually got the date and time to display on my page relatively quickly. My first issue I ran into was in trying to get the hour divs to compare to the current time. I was trying to use the .isBefore() function, but I got a depracation error. I solved the issue by instead converting the moment JS time into just the hour, and then parsing that to an integer that I could easily compare to a variable inside each function.

After that I added local storage. With the help of my tutor I learned how to turn data from multiple text forms into an object. I then stored that object in local storage. When I call that storage at the beginning of my application I use a for loop to go through the object and place the appropriate key in the correct textarea.

I then came back to the CSS and made my site look more like the example on GitLab. 

This homework was definitely a challenge. I got stuck trying to solve that depracation error for hours until I learned I was making the problem more complicated than it needed to be. Overall though I learned a lot about objects in JavaScript and how to use them for local storage. 

## Project Link
[Deployed Link](https://mikecoletta.github.io/Work-Day-Scheduler/)

## Site Screenshots

![Screenshot 1]()


## Credits
Moment.js Documentation (https://momentjs.com/docs/)