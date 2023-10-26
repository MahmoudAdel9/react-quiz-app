# React Quiz App

This project is a React-based quiz app that allows users to answer multiple-choice questions and receive immediate feedback on their answers. The app utilizes Create React App as the project's scaffolding and leverages React's Context API, along with hooks such as useState, useReducer, and useEffect.. this project from (Jonas's React Coures)

## Live Server
- https://react-quiz-app-lime.vercel.app/
## Features

- Multiple-choice questions: Users can choose from a set of options for each question.
- Immediate feedback: Users receive instant feedback on their answers, indicating whether their response was correct or incorrect.
- Score tracking: The app keeps track of the user's score as they progress through the quiz.
- Progress indicator: Users can see their progress through the quiz with a visual indicator.
- Restart functionality: After completing the quiz, users have the option to restart and retake the quiz.

## Getting Started

To get the project up and running on your local machine, follow these steps:

1. Clone the project repository:

      git clone <repository_url>

2. Navigate to the project directory:

      cd react-quiz-app

3. Install the dependencies:

      npm install

4. Start the development server:

      npm start
   
6. run the server

      npm run server   

7. Open your web browser and visit `http://localhost:3000` to see the app running. The page will automatically reload if you make any changes to the source code.

## Customizing the Quiz

You can customize the quiz by modifying the data in the `data/` directory. The `questions.json` file contains an array of question objects, each with the following structure:

```javascript
{
      "question": "Which is the most popular JavaScript framework?",
      "options": ["Angular", "React", "Svelte", "Vue"],
      "correctOption": 1,
      "points": 10,
},
```

Feel free to modify the existing questions or add new questions to suit your needs.

## Custom Hooks

The project utilizes custom hook located in the context/ directory. This hook encapsulate specific functionalities and can be reused across different components:

- useQuiz: Handles the quiz logic, including tracking the current question, validating answers, and handling quiz completion.

You can explore this hook to understand its implementation and modify it if necessary.

## Conclusion

This README file provides an overview of the React Quiz App project. Feel free to explore the code, customize the quiz, and adapt it to your specific requirements. If you have any questions or need further assistance, don't hesitate to reach out for support. Happy quizzing!
