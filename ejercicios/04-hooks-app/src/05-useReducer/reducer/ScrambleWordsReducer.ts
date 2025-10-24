export interface ScrambleWordsState {
   currentWord: string;
   errorCounter: number;
   guess: string;
   isGameOver: boolean;
   maxAllowErrors: number;
   maxSkips: number;
   points: number;
   scrambledWord: string;
   skipCounter: number;
   totalWords: Array<string>;
   words: Array<string>;
}

const GAME_WORDS = [
   'REACT',
   'JAVASCRIPT',
   'TYPESCRIPT',
   'HTML',
   'ANGULAR',
   'SOLID',
   'NODE',
   'VUEJS',
   'SVELTE',
   'EXPRESS',
   'MONGODB',
   'POSTGRES',
   'DOCKER',
   'KUBERNETES',
   'WEBPACK',
   'VITE',
   'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
   return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
   return word
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('');
};

export const getScrambleWordsInitialState = (): ScrambleWordsState => {
   const shuffledWords = shuffleArray([...GAME_WORDS]);

   return {
      currentWord: shuffledWords[0],
      errorCounter: 0,
      guess: '',
      isGameOver: false,
      maxAllowErrors: 3,
      maxSkips: 3,
      points: 0,
      scrambledWord: shuffledWords[0],
      skipCounter: 0,
      totalWords: GAME_WORDS,
      words: shuffledWords,
   }
}

export type ScrambleWordsAction =
   { type: 'SET_GUESS', payload: string }
   | { type: 'CHECK_ANSWER' }
   | { type: 'SKIP_WORD' }
   | { type: 'START_NEW_GAME', payload: ScrambleWordsState }

export const ScrambleWordsReducer = (state: ScrambleWordsState, { type, payload }: ScrambleWordsAction): ScrambleWordsState => {

   switch (type) {
      case 'SET_GUESS':
         return {
            ...state,
            guess: payload.toUpperCase()
         }
      case 'CHECK_ANSWER': {
         if (state.guess === state.currentWord) {
            const newWords = state.words.slice(1);
            return {
               ...state,
               words: newWords,
               points: state.points + 1,
               guess: '',
               currentWord: newWords[0],
               scrambledWord: scrambleWord(newWords[0])
            }
         }

         return {
            ...state,
            guess: '',
            errorCounter: state.errorCounter + 1,
            isGameOver: (state.errorCounter + 1 >= state.maxAllowErrors)
         }
      }
      case 'SKIP_WORD': {
         if (state.skipCounter >= state.maxSkips) {
            return {
               ...state
            }
         };
         const newWords = state.words.slice(1);
         return {
            ...state,
            skipCounter: state.skipCounter + 1,
            guess: '',
            words: newWords,
            currentWord: newWords[0],
            scrambledWord: scrambleWord(newWords[0])
         }
      }
      case 'START_NEW_GAME': {
         // return getScrambleWordsInitialState();
         return payload
      }
      default:
         return state
   }

};