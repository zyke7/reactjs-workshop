const ListItem = ({data}) => {
  return (
    <div className="w-full h-full bg-white min-h-[200px] aspect-[2/3]">
        {data.name}
    </div>
  );
};

export default ListItem;