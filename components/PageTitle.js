export default function PageTitle({ subtitle, title, content, style }) {
  return (
    <div className='equity-header-cont'>
      <div className='invest-header-bg' style={style}>
        <div className='invest-header-text' style={{ 'max-width': '600px' }}>
          <h5>{subtitle}</h5>
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}
