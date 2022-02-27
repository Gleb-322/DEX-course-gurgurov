export interface Iprop {
    name: string;
    type: string;
    value: string | number;
    label: string;
    errorMessageName?: boolean;
    errorMessageLogin?: boolean;
    errorMessagePassword?: boolean;
    errorMessagePasswordAgain?: boolean;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}