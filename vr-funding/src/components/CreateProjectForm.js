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
                Project Title
                <input
                type="text"
                name="Project Title"
                onChange={onChange}
                value={values.project_title}
                placeholder="Project Title"
                maxLength="20"
                ></input>
            </label>
            <label>
                Project Type
                <input
                type='text'
                name='Project Type'
                onChange={onChange}
                value={values.project_type}
                placeholder='Project Type'
                maxLength="20"
                ></input>
            </label>
            <label>
                Mission Statement
                <input
                type="text"
                name="Mission Statement"
                onChange={onChange}
                value={values.mission_statement}
                placeholder="Mission Statement"
                maxLength="100"
                ></input>
            </label>
            <label>
                Project Description
                <input
                type="text"
                name="Project Description"
                onChange={onChange}
                value={values.project_description}
                placeholder="Project Description"
                maxLength="100"
                ></input>
            </label>
            <label>
                Funding Amount
                <input
                type="text"
                name="Funding Amount"
                onChange={onChange}
                value={values.funding_amount}
                placeholder="Funding Amount"
                maxLength="20"
                ></input>
            </label>
            <label>
                Amount Raised
                <input
                type="text"
                name="Amount Raised"
                onChange={onChange}
                value={values.amount_raised}
                placeholder="Amount Raised"
                maxLength="20"
                ></input>
            </label>
            <label>
                Project Timeline
                <input
                type="text"
                name="Project Timeline"
                onChange={onChange}
                value={values.project_timeline}
                placeholder="ProjectTimeline"
                maxLength="20"
                ></input>
            </label>
            </div>
            <div className="submit">
          <button>submit</button>
        </div>

        </form>
    )
} 