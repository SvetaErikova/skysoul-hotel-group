import { Button } from '../../../_ui/button/button.jsx';

export const Block_pagination = ({ page = false }) => {  // Деструктуризация props
  return (
    <div className="block--pagination">
      {page ? (
        <>
          <Button icon={'icon-arrow_l'}></Button>
          <Button class={'button is_active'}>1</Button>
          <Button >3</Button>
          <Button >3</Button>
          <Button >...</Button>
          <Button >11</Button>
          <Button  icon={'icon-arrow_r'}></Button>
        </>
      ) : (
        <Button type="filled" color="secondary">
          Смотреть все
        </Button>
      )}
    </div>
  );
};
