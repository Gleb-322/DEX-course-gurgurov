export interface Iprop {
    name: string;
    type: string;
    value: string;
    label: string;
    errorMessage: boolean;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}