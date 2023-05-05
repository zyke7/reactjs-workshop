const Image = ({ src, title }) => {
  return (
    <div className='flex w-full h-full overflow-hidden'>
      <span
        title={title}
        className='w-full h-full bg-no-repeat bg-center bg-cover transition ease-in-out hover:scale-125 duration-700'
        style={{
          backgroundImage: `url(${src}), url(slices/placeholder_for_missing_posters.png)`
        }}
      />
    </div>
  );
}

export default Image;