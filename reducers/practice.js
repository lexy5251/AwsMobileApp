const currentPractice = (state = {}, action) => {
    switch(action.type) {
        case 'SET_USER_CHOICE_FOR_CURRENT_PRACTICE':
            let { questionId, choiceText } = action;
            if(state.questions && action.questionId && state.questions[questionId]) {
                let questions = {...state.questions};
                questions[questionId].choiceText = choiceText;
                state.questions = questions;
                return {...state};
            }
        case 'START_CURRENT_PRACTICE':
            let { questions, startTimeMs } = action;
            if(questions && startTimeMs) {
                state = {questions, startTimeMs};
                return {...state};
            }
        default: 
        return state;
    }

}

export default currentPractice;