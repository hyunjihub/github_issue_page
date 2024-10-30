import { GoBook } from 'react-icons/go';
import { GoCode } from 'react-icons/go';
import { GoGear } from 'react-icons/go';
import { GoGitPullRequest } from 'react-icons/go';
import { GoGraph } from 'react-icons/go';
import { GoIssueOpened } from 'react-icons/go';
import { GoPlay } from 'react-icons/go';
import { GoShield } from 'react-icons/go';
import { GoTable } from 'react-icons/go';

function Nav() {
  return (
    <nav className="px-8 py-2 bg-[#f6f8fa] flex items-center drop-shadow-sm border-b">
      <ul className="flex items-center gap-5 text-sm">
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoCode className="text-lg" />
          Code
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoIssueOpened className="text-lg" />
          Issues
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoGitPullRequest className="text-lg" />
          Pull requests
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoPlay className="text-lg" />
          Actions
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoTable className="text-lg" />
          Projects
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoBook className="text-lg" />
          Wiki
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoShield className="text-lg" />
          Security
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoGraph className="text-lg" />
          Insights
        </li>
        <li className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-400/20">
          <GoGear className="text-lg" />
          Settings
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
