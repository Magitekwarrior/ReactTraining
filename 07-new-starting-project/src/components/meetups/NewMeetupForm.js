import React from 'react';
import Card from '../ui/Card';

import classes from './NewMeetupForm.module.css'

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type="text" id="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type="url" id="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Meetup Image</label>
          <input type="text" id="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Meetup Image</label>
          <textarea id="description" required rows='5' ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm;