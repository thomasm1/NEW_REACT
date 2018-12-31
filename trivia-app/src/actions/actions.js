export const SUBMIT_ANSWER ='SUBMIT_ANSWER';

export function submitAnswer(answer) {
    return {
        type: SUBMIT_ANSWER,
        answer,
    };
}