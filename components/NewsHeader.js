export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
}) {
  return (

    <div className='blog-detail-header'>
      <p className='lead mb-0'>
        <img
          src={author.avatar}
          className='rounded-circle mr-3'
          height='50px'
          width='50px'
          alt='avatar'
        />
        {' '}{author.name}
        {', '} {date}
      </p>
      <h2 className='font-weight-bold blog-detail-header-title mb-0 center'>
        {title}
      </h2>
      <h3 className='blog-detail-header-subtitle mb-3 '>{subtitle}</h3>
      
      <img
        
        className='img-fluid rounded center'
        src={coverImage}
        alt='TODO: provide alt'
      />
    </div>
  );
}
