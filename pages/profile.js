import Navbar from 'components/Navbar';

export default function ProfileHome() {
  return (
    <div>
      <Navbar />
      <div>Header</div>
      <div>Sidebar</div>
      <div>
        <h3>Main Content</h3>
        <div>
          <h2>Snapshot</h2>
          <div>Portfolio Snapshot</div>
          <div>Opportunity Distribution</div>
        </div>
        <div>
          <h2>Div 2 Personal</h2>
          <div>Identity</div>
          <div>Portfolio Distribution</div>
        </div>
        <div>
          <h2>Div 3 Latest</h2>
          <div>Latest Deals</div>
          <div>Latest News</div>
        </div>
      </div>
    </div>
  );
}
