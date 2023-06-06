import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>June 6th, 2023</div>
      <div className='expense-item__description'>
        <h2>Car Insureance</h2>
        <div className='expense-item__price'>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
