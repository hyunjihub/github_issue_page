import IssueHeader from '../component/main/IssueHeader';
import IssueList from '../component/main/IssueList';

function Main() {
  return (
    <main className="max-w-7xl px-8 mt-6 mx-auto">
      <IssueHeader />
      <IssueList />
    </main>
  );
}

export default Main;
