export interface IFormControlTypes{
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error: boolean;
    helperText: string;
    type: string;
    required: boolean;
    variant: "standard" | "outlined" | "filled";
    margin: "none" | "dense" | "normal";
    size: "small" | "medium";
    disabled: boolean;
    autoComplete: string;
    autoFocus: boolean;
    placeholder: string;
    name: string;
    totals: number;
}