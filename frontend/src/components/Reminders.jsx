import React, { useState } from 'react';

const Reminders = ({ tasks }) => {
    const { overdue, dueSoon } = tasks;
    const [dismissed, setDismissed] = useState({
      overdue: false,
      dueSoon: false,
    })

    if ((overdue.length === 0 || dismissed.overdue) && (dueSoon.length === 0 || dismissed.dueSoon)) {
        return null;
    }

    const handleDismiss = (type) => {
      setDismissed(prev => ({ ...prev, [type]: true }));
    }

  return (
    <div className="reminders-container">
      {/* Conditionally render the "overdue" section */}
      {!dismissed.overdue && overdue.length > 0 && (
        <div className="reminder-section overdue">
          <div className="reminder-content">
            <h4 className="reminder-title">Past Due</h4>
            <ul>
              {overdue.map(task => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => handleDismiss('overdue')} className="reminder-dismiss-button" title="Dismiss">&times;</button>
        </div>
      )}
      {/* Conditionally render the "due soon" section */}
      {!dismissed.dueSoon && dueSoon.length > 0 && (
        <div className="reminder-section due-soon">
          <div className="reminder-content">
            <h4 className="reminder-title">Due Soon (24 Hours)</h4>
            <ul>
              {dueSoon.map(task => (
                <li key={task.id}>{task.title}</li>
              ))}
            </ul>
          </div>
          <button onClick={() => handleDismiss('dueSoon')} className="reminder-dismiss-button" title="Dismiss">&times;</button>
        </div>
      )}
    </div>
  );
};

export default Reminders;