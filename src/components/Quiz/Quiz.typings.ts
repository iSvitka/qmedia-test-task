export interface IQuizProps {
    questions: IQuizQuestion[]
    finishCallback: () => void;
}

export interface IQuizQuestion {
    question: string;
    answers: string[];
}