import react from 'react';

export default function WorkerForm(props) {
    const { values, update, submit } = props;
    const onChange = (evt) => {
        const {name, value } =evt.target
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
            <label>
                Project Submission
                <input
                type="text"
                name="Project submission"
                onChange={onChange}
                value={values.Project}
                placeholder="Briefly describe project idea"
                maxLength="100"
                ></input>
            </label>
            <label>
                Email
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='email'
                ></input>
            </label>
            </div>
            <div className="submit">
          <button>submit</button>
        </div>

        </form>
    )
} 