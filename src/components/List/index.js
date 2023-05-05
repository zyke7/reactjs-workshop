import ListItem from '../ListItem';
import { v4 as uuid } from 'uuid';

const List = ({data}) => {

    return (
      <div  className="container lg:max-w-[50%] m-auto flex-1 grid grid-cols-3 grid-rows-3 gap-4 px-4">
        {
          data.map(el => <ListItem key={uuid()} data={el}/>)
        }
      </div>
    );
};

export default List;