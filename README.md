. Q1 => Add at least 3 Project features

1 . User Credit Balance:

Description: Implement a credit balance system for users. When a user enrolls in a course, deduct the course's credit cost from their balance. Display the user's current credit balance in their profile or a dedicated section.

Benefits: This feature allows users to track their remaining credits and see how many credits they have available for course enrollment.

2 . Maximum Credit Limit (20 Credits):

Description: Enforce a maximum credit limit of 20 credits for each user. Users cannot have more than 20 credits in their balance at any given time.

Benefits: By setting a maximum credit limit, you ensure that users cannot accumulate an excessive number of credits, maintaining balance and fairness in your credit system.


3 . Credit Subtraction:

Description: Allow users to subtract credits from their balance, with a maximum deduction of 20 credits. Ensure that the credit balance cannot go below zero.

Benefits: Users can use this feature to redeem credits or adjust their balance as needed, providing flexibility in managing their course credits.


. Q2 => Discuss how you managed the state in your assignment project.

1 . allCourse and setAllCourse:

allCourse likely holds an array of all available courses on your website.
setAllCourse is the function used to update the allCourse state.
This state is useful for storing and updating the list of available courses, allowing you to dynamically render course cards, filter courses, or perform other operations related to your courses.

2 . selectedCourse and setSelectedCourse:

selectedCourse probably holds an array of courses that the user has selected, possibly for enrollment or purchase.
setSelectedCourse is the function used to update the selectedCourse state.
This state allows you to keep track of the courses that a user has chosen to interact with, such as adding them to a shopping cart or a favorites list.

3 . remaining and setRemaining:

remaining is likely an integer that represents the number of credits a user has left after making selections.
setRemaining is the function used to update the remaining state.
This state helps you calculate and display the remaining credits a user has available after selecting and potentially enrolling in courses. It's crucial for maintaining the credit balance.


4 . creditTotal and setCreditTotal:

creditTotal probably represents the total number of credits a user has, which can be initially set when a user logs in or visits the website.
setCreditTotal is the function used to update the creditTotal state.
This state is essential for displaying the user's total credit balance and ensuring that the user does not exceed their maximum credit limit.