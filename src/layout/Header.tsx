import { GoGitPullRequest } from 'react-icons/go';
import { GoInbox } from 'react-icons/go';
import { GoIssueOpened } from 'react-icons/go';
import { GoPlus } from 'react-icons/go';
import { GoSearch } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';
import logo from '../assets/githubLogo.png';
import profile from '../assets/profile.jpg';

function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#f6f8fa]">
      <div className="flex items-center gap-3">
        <button className="text-xl p-1.5 rounded-lg border">
          <RxHamburgerMenu />
        </button>
        <img className="w-8 h-8" src={logo} alt="github" />
        <div className="flex items-center text-sm ">
          <h2 className="px-2 py-1.5 rounded-lg hover:bg-gray-400/20">hyunjihub</h2>
          <p>&nbsp;/&nbsp;</p>
          <h1 className="px-2 py-1.5 rounded-lg hover:bg-gray-400/20 font-semibold">github_issue_page</h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="w-64 flex items-center gap-2 text-sm text-[#59636e] p-1.5 rounded-lg border">
          <GoSearch className="text-xl" />
          Type <div className="pb-0.5 px-2 rounded border border-[#59636e]">/</div> to search
        </button>
        <p className="text-gray-300">|</p>
        <button className="flex items-end gap-1.5 text-xl p-1.5 rounded-lg border hover:bg-gray-400/20">
          <GoPlus />
          <GoTriangleDown className="text-sm" />
        </button>
        <button className="text-xl p-1.5 rounded-lg border hover:bg-gray-400/20">
          <GoIssueOpened />
        </button>
        <button className="text-xl p-1.5 rounded-lg border hover:bg-gray-400/20">
          <GoGitPullRequest />
        </button>
        <button className="text-xl p-1.5 rounded-lg border hover:bg-gray-400/20">
          <GoInbox />
        </button>
        <img className="w-8 h-8 rounded-full border" src={profile} alt="profile" />
      </div>
    </header>
  );
}

export default Header;
