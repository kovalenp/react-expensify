import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { description: '', note: '', amount: '', createdAt: moment(), calendarFocused: false };
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDescriptionChange (e) {
    const description = e.target.value;
    this.setState(() => ({ description }))
  }

  onNoteChange (e) {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }

  onAmountChange (e) {
    const amount = e.target.value;
    if (amount.match(/^\d+\.?\d{0,2}$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onSubmitForm (e) {
    e.preventDefault();
    this.props.onSubmit({
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10) * 100,
      createdAt: this.state.createdAt.valueOf()
    })
  }

  onDateChange (createdAt) {
    this.setState(() => ({ createdAt }));
  }

  onFocusChange ({ focused }) {
    this.setState(() => ({calendarFocused: focused}))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input 
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type='number'
            placeholder='Amount'
            onChange={this.onAmountChange}
            value={this.state.amount}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
          />
          <textarea 
            placeholder='Note'
            value={this.state.note}
            onChange={this.onNoteChange}>
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
