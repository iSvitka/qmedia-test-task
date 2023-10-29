export interface IQuizQuestionProps {
    question: string;
    answers: string[];
    chooseAnswerCallback: () => void;
}