export default function Form() {
    const {
        values,
        submit,
        change,
    }

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        /* code goes here */
    }

    return (
        /* code goes here*/
        <div className="App-header">
            Hello!
        </div>
    )
}

const styledForm = styled.div`
    border: 1px solid rgb(210, 210, 210);
    border-radius: 6px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    margin: 16px 8px;
    padding: 16px;
    background-color: white;
`;