import * as action from '../actions/actions';

const initialState = {
    score: 0,
    questions: [
        {
            question: 'React is a fornt end framework?',
            answer: "false",
        }
    ]
};
 
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case actions.SUBMIT_ANSWER:
        //     const score = state.score;
        //     const answer = action.answer === state.questions[0].answer ? score + 1 : score; 
        //         return {
        //             ...state,
        //         score: answer,
        //         };
    default: 
            return state;
    
        }
} 