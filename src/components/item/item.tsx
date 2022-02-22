import { Data } from '../../types/types';
import classes from './item.module.css';

const Item: React.FC<{ item: Data }> = (props) => {
  const { item } = props;

  return (
    <li className={classes.list}>
      <div className={classes.wrap}>
        <p>WO ID:</p>
        <p>{item.work_order_id}</p>
      </div>
      <div className={classes.wrap}>
        <p>DESCRIPTION:</p>
        <p>{item.description}</p>
      </div>
      <div className={classes.wrap}>
        <p>RECEIVED DATE:</p>
        <p>{item.received_date}</p>
      </div>
      <div className={classes.wrap}>
        <p>ASSIGNED TO:</p>
        <p>{item.assigned_to[0]?.person_name}</p>
      </div>
      <div className={classes.wrap}>
        <p>STATUS:</p>
        <p>{item.status}</p>
      </div>
      <div className={classes.wrap}>
        <p>PRIORITY:</p>
        <p>{item.priority}</p>
      </div>
    </li>
  );
};

export default Item;
