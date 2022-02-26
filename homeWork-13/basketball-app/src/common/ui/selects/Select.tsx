import Select, { StylesConfig } from 'react-select'

type OptionType = {
    value: string;
    label: string;
}

const options: OptionType[] = [
    {label:'6',value:'6'},
    {label:'12',value:'12'},
    {label:'24',value:'24'}
]

const styles: StylesConfig<OptionType, false> = {
    container: (provided) => ({
        ...provided,
        position: 'absolute',
        top: '0',
        left: '0',
        width: '88px',
        height: '120px',
        background: "#FFFFFF",
        borderRadius: '4px'
    }),
    control: (provided) => ({
        ...provided,
        position: 'relative',
        width: '366px',
        height: '40px',
        backgroundColor: '#F6F6F6',
        borderRadius: '4px'
    })
}


export const CustomSelect = () => {
    return (
        <div>
            <Select 
                styles={styles} 
                options={options}
            />
        </div>
    )
}