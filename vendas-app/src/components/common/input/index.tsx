import React,{InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string,
    onChange?: (value: any) => void;
    label: string;
    columnClasses?: string
}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    ...inputProps
}: InputProps) => {
    return (
        <div className={`field column ${columnClasses}`}>
            <label htmlFor={id} className="label">{label}</label>
            <div className='control'>
                <input className="input"
                    id={id} {...inputProps}
                    onChange={event => {
                        if (onChange) {
                            onChange(event.target.value)
                        }
                    }}/>
            </div>
        </div>
    )
}