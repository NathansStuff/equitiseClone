function covertTag(tag) {
  if (!tag) {
    return;
  }
  if (tag.includes('-')) {
    var splitStr = tag.split('-').join(' ');
  } else {
    var splitStr = tag;
  }

  return splitStr;
}

export default function CarouselCard({
  coverImage,
  tag1,
  tag2,
  title,
  subtitle,
}) {
  return (
    <div className='carousel-card-container'>
      <div>
        <img src={coverImage} alt='placeholder' style={{ width: '100%' }} />
      </div>
      <div>
        <h4>
          {covertTag(tag1)} {tag2 ? ' | ' : ''} {covertTag(tag2)}
        </h4>
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div><p>{subtitle}</p></div>
    </div>
  );
}
