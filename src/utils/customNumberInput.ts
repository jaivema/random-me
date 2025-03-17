
export const increment = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue(prevValue => prevValue + 1);
};

export const decrement = (setValue: React.Dispatch<React.SetStateAction<number>>) => {
    setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
};