import Image from '../Image';

const ListItem = ({ data }) => {
  return (
    <div className="w-full h-full min-h-[200px] aspect-[2/3] flex flex-col font-[TitilliumWeb-Light]">
      <Image src={`slices/${data['poster-image']}`} title={data.name} />
      <span title={data.name} className='text-[10pt] text-white text-left mt-3 whitespace-nowrap text-ellipsis overflow-hidden'>
        {data.name}
      </span>
    </div>
  );
};

export default ListItem;