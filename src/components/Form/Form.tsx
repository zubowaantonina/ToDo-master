import { useState } from 'react';
import { FormBlock, FormLabel,FormField, FormControl, FormWrapper } from './Form.styled';


import plusIcon from '../../assets/images/plus.png'

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('');



    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (text) {
            props.createNewToDo(text)//если поле ввода не пустое,то создается запись
            setText('')
        }

    }


    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={text}
                        type="text"
                        onChange={(e) => setText(e.target.value)} />
                    <FormControl  icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}