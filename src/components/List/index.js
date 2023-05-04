import ListItem from '../ListItem';

const List = ({data}) => {

    return (
      <div  className="container lg:max-w-[50%] m-auto flex-1 grid grid-cols-3 grid-rows-3 gap-4 px-4">
        {
          data.map(el => <ListItem data={el}/>)
        }
      </div>
    );
};

export default List;