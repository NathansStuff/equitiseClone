const LatestNews = ({image, slug, date, title}) => {
  debugger
  return (
    
      <div className='news-individual'>
        <img
          src={image}
          style={{ width: '72px', height: '54px' }}
        />
        <div className='news-snapshot'>
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>

  );
};

export default LatestNews;
