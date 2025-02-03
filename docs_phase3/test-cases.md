Test Cases for Date Idea Picker App

Backend Test Cases:

1. Retrieve All Date Ideas
   - Steps:
     - Send a GET request to `/ideas`.
     - Observe the response.
   - Expected Outcome:
     - The request should return a 200 OK status.
     - The response should be a list of date ideas.
     - The returned data should include default date ideas from the database.

2. Add a New Date Idea
   - Steps:
     - Send a POST request to `/ideas` with a JSON payload containing a letter and an idea (e.g., `{ letter: 'A', idea: 'Art Museum Visit' }`).
     - Observe the response.
   - Expected Outcome:
     - The request should return a 201 Created status.
     - The response should include the newly added idea.
     - The idea should be retrievable via a GET request to `/ideas/A`.

3. Retrieve Date Ideas for a Specific Letter
   - Steps:
     - Send a GET request to `/ideas/A` (or any other letter available in the database).
     - Observe the response.
   - Expected Outcome:
     - The request should return a 200 OK status.
     - The response should include all date ideas that start with the specified letter.

Frontend Test Cases:

1. Check If the Main Heading Renders
   - Steps:
     - Open the application in a web browser.
     - Observe the page heading.
   - Expected Outcome:
     - The heading "Date Idea Picker" should be visible on the page.

2. Select a Letter and Fetch Ideas
   - Steps:
     - Open the application in a web browser.
     - Select a letter from the alphabet.
     - Observe the displayed idea.
   - Expected Outcome:
     - Date idea corresponding to the button chosen should appear.

3. Shuffle Ideas
   - Steps:
     - Open the application in a web browser.
     - Select a letter from the alphabet.
     - Observe the displayed idea.
     - Tap on Shuffle button.
     - Observe the new displayed idea.
   - Expected Outcome:
     - A new date idea corresponding to the button chosen should appear and replace a previous one.

4. Surprise Idea
   - Steps:
     - Open the application in a web browser.
     - Tap on Surprise button.
     - Observe the new displayed idea.
   - Expected Outcome:
     - A new random date idea should appear.

5. API Errors
   - Steps:
     - Simulate an API failure (e.g., by disconnecting the backend server).
     - Click the "Get Ideas" button.
     - Observe the error message.
   - Expected Outcome:
     - An error message should appear on the screen (e.g., "Failed to load ideas").
     - The user should be informed of the failure without the app crashing.
